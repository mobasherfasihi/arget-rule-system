<template>
  <section id="target-add">
    <div class="height-20p"></div>
    <div class="container my-5">
      <h1 class="mb-4">Add New Page Target</h1>
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="targetTitle">Title</label>
            <input type="text" class="form-control" id="targetTitle" placeholder="Title" />
          </div>
          <div class="form-group col-md-6">
            <label for="alertMessage">Alert Message</label>
            <input type="text" class="form-control" id="alertMessage" placeholder="Alert Message" />
          </div>
        </div>
        <hr />
        <div
          class="form-row"
          :key="`targetRule-${index}`"
          v-for="(targetRule, index) in targetPage.target_rules"
        >
          <div class="form-group col-md-2">
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
          </div>
          <div class="form-group col-md-2">
            <label for="inputState">Rule</label>
            <select
              id="inputState"
              class="form-control"
              v-model="targetPage.target_rules[index].rule"
            >
              <option :value="null" selected>Select Rule</option>
              <option value="contain">pages that contain</option>
              <option value="specific_page">a specific page</option>
              <option value="starting_with">pages starting with</option>
              <option value="ending_with">pages ending with</option>
            </select>
          </div>
          <div class="form-group col-md-6">
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
        <button type="submit" class="btn btn-primary">Save</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
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
    };
  },
  methods: {
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
