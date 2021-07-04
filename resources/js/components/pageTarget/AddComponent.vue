<template>
  <section id="target-add">
    <data-model
      v-if="isMounted"
      :endpoint="'page-target'"
      :id="isEditForm ? pageTargetId : null"
      @success="navigateToList"
    >
      <div
        slot-scope="{
          data,
          error: errors,
          loading,
          create,
          update,
        }"
        :set="[isEditForm ? (targetPage = data) : '']"
      >
        <div v-if="!targetPage">
          <v-loading width="40px"></v-loading>
        </div>
        <div v-else>
          <div class="height-20p"></div>
          <div class="container my-5">
            <h1 class="mb-4">Add New Page Target</h1>
            <form
              @submit.prevent="
                        isEditForm ? update(targetPage) : create(targetPage)
                      "
            >
              <div class="form-row">
                <div
                  class="form-group col-md-6"
                  :class="errors && errors['title'] ? 'has-error': ''"
                >
                  <label for="targetTitle">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="targetTitle"
                    placeholder="Title"
                    v-model="targetPage.title"
                  />
                  <small
                    class="error-message"
                    v-if="errors && errors['title']"
                    v-html="errors['title'][0]"
                  ></small>
                </div>
                <div
                  class="form-group col-md-6"
                  :class="errors && errors['alert_message'] ? 'has-error': ''"
                >
                  <label for="alertMessage">Alert Message</label>
                  <input
                    type="text"
                    class="form-control"
                    id="alertMessage"
                    placeholder="Alert Message"
                    v-model="targetPage.alert_message"
                  />
                  <small
                    class="error-message"
                    v-if="errors && errors['alert_message']"
                    v-html="errors['alert_message'][0]"
                  ></small>
                </div>
              </div>
              <hr />
              <div
                class="form-row"
                :key="`targetRule-${index}`"
                v-for="(targetRule, index) in targetPage.target_rules"
              >
                <div
                  class="form-group col-md-2"
                  :class="errors && (errors['target_rules.'+index+'.instruction'] || errors['target_rules']) ? 'has-error' : ''"
                >
                  <label for="inputState">Instruction</label>
                  <select
                    id="inputState"
                    class="form-control"
                    v-model="targetPage.target_rules[index].instruction"
                  >
                    <option :value="null" selected>Choose...</option>
                    <option value="show">Show on</option>
                    <option value="not_show">Don't show on</option>
                  </select>

                  <small
                    class="error-message"
                    v-if="errors && (errors['target_rules.'+index+'.instruction'] || errors['target_rules'])"
                    v-html="errors['target_rules'] ? errors['target_rules'][0] : errors['target_rules.'+index+'.instruction'][0]"
                  ></small>
                </div>
                <div
                  class="form-group col-md-2"
                  :class="errors && (errors['target_rules.'+index+'.rule'] || errors['target_rules']) ? 'has-error' : ''"
                >
                  <label for="inputState">Rule</label>
                  <select
                    id="inputState"
                    class="form-control"
                    v-model="targetPage.target_rules[index].rule"
                  >
                    <option :value="null" selected>Select Rule</option>
                    <option value="contains">pages that contain</option>
                    <option value="specific_page">a specific page</option>
                    <option value="starting_with">pages starting with</option>
                    <option value="ending_with">pages ending with</option>
                  </select>
                  <small
                    class="error-message"
                    v-if="errors && (errors['target_rules.'+index+'.rule'] || errors['target_rules'])"
                    v-html="errors['target_rules'] ? errors['target_rules'][0] : errors['target_rules.'+index+'.rule'][0]"
                  ></small>
                </div>
                <div
                  class="form-group col-md-6"
                  :class="errors && (errors['target_rules.'+index+'.pattern'] || errors['target_rules']) ? 'has-error' : ''"
                >
                  <label for="basic-url">Your pattern</label>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon3">www.domain.com/</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                      v-model="targetPage.target_rules[index].pattern"
                    />
                  </div>

                  <small
                    class="error-message"
                    v-if="errors && (errors['target_rules.'+index+'.pattern'] || errors['target_rules'])"
                    v-html="errors['target_rules'] ? errors['target_rules'][0] : errors['target_rules.'+index+'.pattern'][0]"
                  ></small>
                </div>
                <div class="form-group col-md-2 d-flex align-items-center">
                  <a
                    href="javascript:void(0)"
                    v-if="index + 1 == targetPage.target_rules.length && targetPage.target_rules[0].instruction"
                    @click="addMoreRule(index)"
                  >
                    <small class="text-primary-green">Add</small>
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="ml-2"
                    v-if="targetPage.target_rules.length && targetPage.target_rules[0].instruction && index > 0"
                    @click="removeElement(index)"
                  >
                    <small class="text-danger">Remove</small>
                  </a>
                </div>
              </div>
              <button type="submit" :disabled="loading" class="btn btn-primary">{{isEditForm ? 'Update' : 'Add Rule'}}</button>
            </form>
          </div>
        </div>
      </div>
    </data-model>
  </section>
</template>

<script>
export default {
  components: {
    DataModel: () => import("../renderLess/DataModel"),
  },
  data() {
    return {
      targetPage: {
        title: null,
        alert_message: null,
        target_rules: [
          {
            instruction: null,
            rule: null,
            pattern: null,
          },
        ],
      },
      errors: [],
      pageTargetId: null,
      isMounted: false,
    };
  },
  mounted() {
    this.isEditForm;
    this.isMounted = true;
  },
  computed: {
    isEditForm() {
      this.pageTargetId = this.$route.params.id;
      return this.pageTargetId;
    },
  },
  methods: {
    navigateToList(response) {
      this.$router.push({
        name: `rules`,
        params: { message: response.data.message },
      });
    },
    addMoreRule: function (index) {
      if (this.targetPage.target_rules[index].instruction) {
        if (index > 0) {
          this.targetPage.target_rules.push({
            instruction: null,
            rule: null,
            pattern: null,
          });
        } else {
          this.targetPage.target_rules.push({
            instruction: null,
            rule: null,
            pattern: null,
          });
        }
      }
    },
    removeElement: function (index) {
      if (index == 0) {
        Vue.set(this.targetPage.target_rules, 0, {
          instruction: null,
          rule: null,
          pattern: null,
        });
      } else {
        this.targetPage.target_rules.splice(index, 1);
      }
    },
  },
};
</script>

<style>
</style>
