<template>
  <section id="page-target-list">
    <div class="height-20p"></div>
    <div class="container my-5">
      <div class="d-flex justify-content-between align-items-center">
        <h2 class="mb-4">Page Targeting List</h2>
        <button type="button" class="btn btn-primary" @click="create">Add</button>
      </div>
      <data-list :endpoint="endpoint" :filter="filters" :filterKey="'filters'">
        <div slot-scope="{ data: pagetTargets, error, load, loading }">
          <div class="table-content">
            <table class="table text-capitalize">
              <thead class="thead-light">
                <th>Title</th>
                <th>Message</th>
                <th>Number of Rules</th>
                <th>Actions</th>
              </thead>
              <tbody v-if="loading || pagetTargets.data.length == 0">
                <tr>
                  <td colspan="5" style="background: transparent" v-if="loading">
                    <v-loading width="30px"></v-loading>
                  </td>
                  <td colspan="5" style="background: transparent" v-else>
                    <p class="text-center">No data found</p>
                  </td>
                </tr>
              </tbody>
              <tbody v-else-if="pagetTargets && pagetTargets.data.length > 0">
                <transition
                  name="fade"
                  mode="out-in"
                  v-for="(pTarget, index) in pagetTargets.data"
                  :key="index"
                >
                  <data-model
                    :entity="pTarget"
                    :id="pTarget.id"
                    :endpoint="endpoint"
                    @success="load"
                  >
                    <tr
                      slot-scope="{ destroy, loading, restore }"
                      :set="[(destoryMethod = destroy, activateMethod = restore)]"
                    >
                      <td>{{ pTarget.title }}</td>
                      <td>{{ pTarget.alert_message}}</td>
                      <td>{{ pTarget.rules_count}}</td>
                      <td style="width: 10%">
                        <ul class="list actions d-flex justify-content-center">
                          <li @click="viewPTarget(pTarget)" class="mx-2">
                            <span class="text-sm text-gray-500 fa fa-eye"></span>
                          </li>
                          <li @click="edit(pTarget)" class="mx-2">
                            <span class="text-sm text-gray-500 icon-edit"></span>
                          </li>
                          <li :disabled="loading" @click="delet(pTarget)" class="mx-2">
                            <template v-if="loading && targetPTarget == pTarget.id">
                              <v-loading width="20px"></v-loading>
                            </template>
                            <template v-else>
                              <span class="text-sm text-gray-500 icon-trash"></span>
                            </template>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </data-model>
                </transition>
              </tbody>
            </table>
          </div>
          <div
            class="d-flex align-items-center"
            v-if="pagetTargets && !loading"
            :set="[(pagination = pagetTargets.pagination)]"
          >
            <v-pagination :pagination="pagetTargets.pagination" @onPageChange="setPage"></v-pagination>
          </div>
        </div>
      </data-list>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    DataList: () => import("../renderLess/DataList"),
    DataModel: () => import("../renderLess/DataModel"),
  },
  data() {
    return {
      pagetTargets: [],
      targetPTarget: null,
      endpoint: "page-target",
      destoryMethod: null,
      filters: {
        page: 1,
      },
      pagination: {},
      messageData: {
        type: "success",
        text: null,
        autoDismiss: true,
      },
      showAlert: false,
    };
  },
  methods: {
    setPage() {
      this.filters.page = this.pagination.current_page;
    },
    create() {
      this.$router.push({name: 'page-target-add'})
    }
  },
};
</script>

<style>
</style>
