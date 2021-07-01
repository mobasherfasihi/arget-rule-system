<template>
  <section id="signup">
    <div class="signup">
      <div class="row no-gutters">
        <div class="col-lg-3">
          <div class="illustration-box bg-white"></div>
        </div>
        <div class="col-lg-2"></div>
        <div class="col-lg-5">
          <div class="d-flex flex-column justify-content-center h-100 p-4 p-md-0">
            <header class="text-center">
              <h1 class="text-md font-weight-600 text-gray-900 mb-0">Welcome</h1>
              <div class="sp10p"></div>
            </header>
            <div class="sp30p"></div>
            <section class="register-panel">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div class="form-group" :class="errors && errors['name'] ? 'has-error': ''">
                    <label for="name" class="input-label">
                      Name
                      <span class="required">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      class="form-control"
                      required
                      autofocus
                      placeholder="Name"
                      @input="removeValidationMsg('name')"
                      v-model="user.name"
                    />
                    <small
                      class="error-message"
                      v-if="errors && errors['name']"
                      v-html="errors['name'][0]"
                    ></small>
                  </div>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div class="form-group" :class="errors && errors['email'] ? 'has-error': ''">
                    <label for="email" class="input-label">
                      Email
                      <span class="required">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      placeholder="example@site.com"
                      @input="removeValidationMsg('email')"
                      required
                      v-model="user.email"
                    />
                    <small
                      class="error-message"
                      v-if="errors && errors['email']"
                      v-html="errors['email'][0]"
                    ></small>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div class="form-group" :class="errors && errors['password'] ? 'has-error': ''">
                    <label for="password" class="input-label">
                      Password
                      <span class="required">*</span>
                    </label>
                    <input
                      id="password"
                      type="password"
                      class="form-control"
                      required
                      placeholder="Password"
                      v-model="user.password"
                      @input="removeValidationMsg('password')"
                    />
                    <small
                      class="error-message"
                      v-if="errors && errors['password']"
                      v-html="errors['password'][0]"
                    ></small>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div
                    class="form-group"
                    :class="(errors && errors['password']) && errors['password'][1] ? 'has-error': ''"
                  >
                    <label for="password-confirm" class="input-label">
                      Confirm Password
                      <span class="required">*</span>
                    </label>
                    <input
                      id="password-confirm"
                      type="password"
                      class="form-control"
                      placeholder="Confirm password"
                      v-model="user.password_confirmation"
                      title="Same as Passowrd"
                      required
                    />
                    <small
                      class="error-message"
                      v-if="(errors && errors['password']) && errors['password'][1]"
                      v-html="errors['password'][1]"
                    ></small>
                  </div>
                </div>
              </div>
            </section>
            <footer>
              <div class="sp20p"></div>
              <div class="form-group d-flex flex-column align-items-center justify-content-between">
                <button @click="register" type="submit" class="btn btn-primary">
                  <v-loading width="20px" v-if="isLoading"></v-loading>
                  <span v-else>Register</span>
                </button>
                <div class="text-gray-500 mt-4">
                  alerady have an acount?
                  <router-link to="/login" tag="a" class="text-blue-original">Sign in</router-link>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      message: {
        text: null,
        type: "success",
      },
      showPasswordDetails: false,
      user: {},
      errors: [],
      isLoading: false,
    };
  },

  methods: {
    register() {
      let user = { ...this.user };
      this.isLoading = true;
      user.phone_code = this.prefix;
      axios
        .post("/api/auth/user/register", user)
        .then((response) => {
          this.isLoading = false;
          this.$router.push({ name: "login", params: { verify: true } });
        })
        .catch((error) => {
          if (
            error.response.status == 422 &&
            error.response.data.hasOwnProperty("errors")
          ) {
            this.isLoading = false;
            this.errors = error.response.data.errors;
            return;
          }
        });
    },
    removeValidationMsg(key) {
      if (!this.errors[key]) return;
      this.Vue.set(this.errors, key, null);
    },
  },
  mounted() {
    console.log("Hey Man");
    $(".input-group:has(input.form-controll)").addClass("has_sub");
  },
};
</script>

<style>
</style>
