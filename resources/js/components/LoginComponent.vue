<template>
  <section id="Login">
    <div class="login" v-if="!isLoggedIn  && !isLoggedInWithSocial">
      <div class="row no-gutters">
        <div class="col-lg-3">
          <div class="illustration-box bg-white" />
        </div>
        <div class="col-lg-2"></div>
        <div class="col-lg-4 d-flex flex-column justify-content-center">
          <div class="text-center p-4">
            <h1
              class="text-md font-weight-600 text-blue-800 mb-0"
            >Welcome to the Rule Targeting System</h1>
            <div class="sp10p"></div>
            <small class="text-sm text-gray-400">Magic will happen</small>
            <div class="sp30p"></div>
            <div class="sp30p"></div>
            <div>
              <div
                class="required text-danger"
                v-if="errors && errors['unauthorized']"
              >{{ errors['unauthorized'] }}</div>
              <div class="required alert alert-warning" v-if="errors && errors['verify']">
                {{ errors['verify'] }}
                <a
                  href="/login"
                  title="Resend the link"
                  class="alert-link"
                  @click.prevent="resend()"
                >Resend</a>
                <div class="sp10p"></div>
              </div>
              <div
                class="form-group text-left"
                :class="errors && errors['email'] ? 'has-error': ''"
              >
                <label class="input-label text-gray-800 text-md" for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="user@domain.com"
                  class="form-control"
                  required
                  v-model="email"
                />
                <small
                  class="error-message"
                  v-if="errors && errors['email']"
                  v-html="errors['email'][0]"
                ></small>
              </div>
              <div class="sp10p"></div>
              <div
                v-if="!otp"
                class="form-group text-left"
                :class="errors && errors['password'] ? 'has-error': ''"
              >
                <label class="input-label text-gray-800 text-md" for="password">Passwor</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Type your password"
                  class="form-control"
                  required
                  v-model="password"
                  @keyup.enter="submitOnEnter"
                />
                <small
                  class="error-message"
                  v-if="errors && errors['password']"
                  v-html="errors['password'][0]"
                ></small>
              </div>

              <div v-else>
                <div
                  class="form-group text-left"
                  :class="errors && errors['password'] ? 'has-error': ''"
                >
                  <label for="password" class="input-label">Password</label>
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    required
                    placeholder="Password"
                    @input="removeValidationMsg('password')"
                    v-model="password"
                    v-input-tooltip="['least one digit. Minimum six in length.']"
                  />
                  <small
                    class="error-message"
                    v-if="errors && errors['password']"
                    v-html="errors['password'][0]"
                  ></small>
                </div>

                <div class="sp10p"></div>
                <div
                  class="form-group text-left"
                  :class="(errors && errors['password']) && errors['password'][1] ? 'has-error': ''"
                >
                  <label for="password-confirm" class="input-label">Confirm Password</label>
                  <input
                    id="password-confirm"
                    type="password"
                    class="form-control"
                    placeholder="Confirm password"
                    v-model="confirmPassword"
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
              <div class="form-group text-left d-flex justify-content-between">
                <div>
                  <router-link
                    to="/forgot-password"
                    class="text-primary-blue-original text-sm"
                    title="forgot password"
                  >Forgot Password</router-link>
                </div>
              </div>
              <div class="sp20p"></div>
              <div class="d-flex justify-content-center">
                <div class="form-group mb-0 w-100 d-flex justify-content-center">
                  <button
                    type="button"
                    id="btn-login"
                    class="btn btn-primary text-white m-0 w-50 d-flex justify-content-center"
                    ref="loginBtn"
                    @click="login()"
                    :loading="false"
                  >
                    <v-loading v-if="isloading" width="20px"></v-loading>
                    <span v-else class="d-flex align-items-center">Login</span>
                  </button>
                </div>
              </div>
              <div class="sp20p"></div>
              <div class="text-gray-600">
                You don't have account
                <router-link class="text-primary-blue-original" to="/register">Signup</router-link>
              </div>
            </div>
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
      googleClientId: 12,
      message: {
        text: null,
        type: "success",
      },
      email: "",
      password: "",
      confirmPassword: null,
      verificationCode: null,
      rememberMe: false,
      isLoggingIn: false,
      isloading: false,
      loadingAction: null,
      errors: [],
      counter: 60,
      isLoggedIn: false,
      twoFaNotSent: false,
      retryAfter: 0,
      isLoggedInWithSocial: false,
      code: null,
      jobsafToken: null,
      otp: false,
      isOrganization: false,
    };
  },
  computed: {},

  watch: {},

  mounted() {
    if (this.$route.params.verify) {
      this.message = {
        text: "A verification link has been sent to your email",
        type: "success",
      };
      this.sendMessage(false);
    }
  },

  methods: {
    login() {
      this.isLoggingIn = true;
      this.errors = [];
      this.isloading = true;

      this.$auth.login({
        data: {
          email: this.email,
          password: this.password,
        },
        redirect: null,
        success(response) {
          this.isLoggingIn = false;
          this.isloading = false;

          let authUser = response.data.userData;
          this.$store.dispatch("setUser", { ... authUser});

          this.$router.push({ name: "rules" });
        },
        error(error) {
          this.isloading = false;
          this.isLoggingIn = false;

          if (
            error.response.status == 422 &&
            error.response.data.hasOwnProperty("errors")
          ) {
            this.errors = error.response.data.errors;
            return;
          }
          if (error.response.status == 401) {
            this.errors = {
              unauthorized: 'Invalid email or password.'
            };
            return;
          }
          return;
        },
      });
    },
    submitOnEnter() {
      if (!this.isLoggingIn) {
        this.login();
      }
    },
    sendMessage(hasTimer = true) {
      Bus.$emit("flash-message", this.message, hasTimer);

      this.message = {
        text: null,
        type: "success",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
