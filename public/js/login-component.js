(self["webpackChunk"] = self["webpackChunk"] || []).push([["login-component"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoginComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoginComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      googleClientId: 12,
      message: {
        text: null,
        type: "success"
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
      isOrganization: false
    };
  },
  computed: {},
  watch: {},
  mounted: function mounted() {
    if (this.$route.params.verify) {
      this.message = {
        text: "A verification link has been sent to your email",
        type: "success"
      };
      this.sendMessage(false);
    }
  },
  methods: {
    login: function login() {
      this.isLoggingIn = true;
      this.errors = [];
      this.isloading = true;
      this.$auth.login({
        data: {
          email: this.email,
          password: this.password
        },
        redirect: null,
        success: function success(response) {
          this.isLoggingIn = false;
          this.isloading = false;
          var authUser = response.data.userData;
          this.$store.dispatch("setUser", _objectSpread({}, authUser));
          this.$router.push({
            name: "rules"
          });
        },
        error: function error(_error) {
          this.isloading = false;
          this.isLoggingIn = false;

          if (_error.response.status == 422 && _error.response.data.hasOwnProperty("errors")) {
            this.errors = _error.response.data.errors;
            return;
          }

          if (_error.response.status == 401) {
            this.errors = {
              unauthorized: 'Invalid email or password.'
            };
            return;
          }

          return;
        }
      });
    },
    submitOnEnter: function submitOnEnter() {
      if (!this.isLoggingIn) {
        this.login();
      }
    },
    sendMessage: function sendMessage() {
      var hasTimer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      Bus.$emit("flash-message", this.message, hasTimer);
      this.message = {
        text: null,
        type: "success"
      };
    }
  }
});

/***/ }),

/***/ "./resources/js/components/LoginComponent.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/LoginComponent.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoginComponent_vue_vue_type_template_id_4d2414bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginComponent.vue?vue&type=template&id=4d2414bf&scoped=true& */ "./resources/js/components/LoginComponent.vue?vue&type=template&id=4d2414bf&scoped=true&");
/* harmony import */ var _LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/LoginComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _LoginComponent_vue_vue_type_template_id_4d2414bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _LoginComponent_vue_vue_type_template_id_4d2414bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4d2414bf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LoginComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/LoginComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/LoginComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoginComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoginComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/LoginComponent.vue?vue&type=template&id=4d2414bf&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/LoginComponent.vue?vue&type=template&id=4d2414bf&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_template_id_4d2414bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_template_id_4d2414bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_template_id_4d2414bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoginComponent.vue?vue&type=template&id=4d2414bf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoginComponent.vue?vue&type=template&id=4d2414bf&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoginComponent.vue?vue&type=template&id=4d2414bf&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoginComponent.vue?vue&type=template&id=4d2414bf&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { attrs: { id: "Login" } }, [
    !_vm.isLoggedIn && !_vm.isLoggedInWithSocial
      ? _c("div", { staticClass: "login" }, [
          _c("div", { staticClass: "row no-gutters" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-2" }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "col-lg-4 d-flex flex-column justify-content-center"
              },
              [
                _c("div", { staticClass: "text-center p-4" }, [
                  _c(
                    "h1",
                    {
                      staticClass: "text-md font-weight-600 text-blue-800 mb-0"
                    },
                    [_vm._v("Welcome to the Rule Targeting System")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "sp10p" }),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-sm text-gray-400" }, [
                    _vm._v("Magic will happen")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "sp30p" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "sp30p" }),
                  _vm._v(" "),
                  _c("div", [
                    _vm.errors && _vm.errors["unauthorized"]
                      ? _c("div", { staticClass: "required text-danger" }, [
                          _vm._v(_vm._s(_vm.errors["unauthorized"]))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.errors && _vm.errors["verify"]
                      ? _c(
                          "div",
                          { staticClass: "required alert alert-warning" },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.errors["verify"]) +
                                "\n              "
                            ),
                            _c(
                              "a",
                              {
                                staticClass: "alert-link",
                                attrs: {
                                  href: "/login",
                                  title: "Resend the link"
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.resend()
                                  }
                                }
                              },
                              [_vm._v("Resend")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "sp10p" })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group text-left",
                        class:
                          _vm.errors && _vm.errors["email"] ? "has-error" : ""
                      },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "input-label text-gray-800 text-md",
                            attrs: { for: "email" }
                          },
                          [_vm._v("Email")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.email,
                              expression: "email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "email",
                            id: "email",
                            placeholder: "user@domain.com",
                            required: ""
                          },
                          domProps: { value: _vm.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.email = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors && _vm.errors["email"]
                          ? _c("small", {
                              staticClass: "error-message",
                              domProps: {
                                innerHTML: _vm._s(_vm.errors["email"][0])
                              }
                            })
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "sp10p" }),
                    _vm._v(" "),
                    !_vm.otp
                      ? _c(
                          "div",
                          {
                            staticClass: "form-group text-left",
                            class:
                              _vm.errors && _vm.errors["password"]
                                ? "has-error"
                                : ""
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "input-label text-gray-800 text-md",
                                attrs: { for: "password" }
                              },
                              [_vm._v("Passwor")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.password,
                                  expression: "password"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "password",
                                id: "password",
                                placeholder: "Type your password",
                                required: ""
                              },
                              domProps: { value: _vm.password },
                              on: {
                                keyup: function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.submitOnEnter.apply(
                                    null,
                                    arguments
                                  )
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.password = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors && _vm.errors["password"]
                              ? _c("small", {
                                  staticClass: "error-message",
                                  domProps: {
                                    innerHTML: _vm._s(_vm.errors["password"][0])
                                  }
                                })
                              : _vm._e()
                          ]
                        )
                      : _c("div", [
                          _c(
                            "div",
                            {
                              staticClass: "form-group text-left",
                              class:
                                _vm.errors && _vm.errors["password"]
                                  ? "has-error"
                                  : ""
                            },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "input-label",
                                  attrs: { for: "password" }
                                },
                                [_vm._v("Password")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.password,
                                    expression: "password"
                                  },
                                  {
                                    name: "input-tooltip",
                                    rawName: "v-input-tooltip",
                                    value: [
                                      "least one digit. Minimum six in length."
                                    ],
                                    expression:
                                      "['least one digit. Minimum six in length.']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "password",
                                  type: "password",
                                  required: "",
                                  placeholder: "Password"
                                },
                                domProps: { value: _vm.password },
                                on: {
                                  input: [
                                    function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.password = $event.target.value
                                    },
                                    function($event) {
                                      return _vm.removeValidationMsg("password")
                                    }
                                  ]
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors && _vm.errors["password"]
                                ? _c("small", {
                                    staticClass: "error-message",
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.errors["password"][0]
                                      )
                                    }
                                  })
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "sp10p" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "form-group text-left",
                              class:
                                _vm.errors &&
                                _vm.errors["password"] &&
                                _vm.errors["password"][1]
                                  ? "has-error"
                                  : ""
                            },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "input-label",
                                  attrs: { for: "password-confirm" }
                                },
                                [_vm._v("Confirm Password")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.confirmPassword,
                                    expression: "confirmPassword"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "password-confirm",
                                  type: "password",
                                  placeholder: "Confirm password",
                                  title: "Same as Passowrd",
                                  required: ""
                                },
                                domProps: { value: _vm.confirmPassword },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.confirmPassword = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors &&
                              _vm.errors["password"] &&
                              _vm.errors["password"][1]
                                ? _c("small", {
                                    staticClass: "error-message",
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.errors["password"][1]
                                      )
                                    }
                                  })
                                : _vm._e()
                            ]
                          )
                        ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group text-left d-flex justify-content-between"
                      },
                      [
                        _c(
                          "div",
                          [
                            _c(
                              "router-link",
                              {
                                staticClass:
                                  "text-primary-blue-original text-sm",
                                attrs: {
                                  to: "/forgot-password",
                                  title: "forgot password"
                                }
                              },
                              [_vm._v("Forgot Password")]
                            )
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "sp20p" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex justify-content-center" },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group mb-0 w-100 d-flex justify-content-center"
                          },
                          [
                            _c(
                              "button",
                              {
                                ref: "loginBtn",
                                staticClass:
                                  "btn btn-primary text-white m-0 w-50 d-flex justify-content-center",
                                attrs: {
                                  type: "button",
                                  id: "btn-login",
                                  loading: false
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.login()
                                  }
                                }
                              },
                              [
                                _vm.isloading
                                  ? _c("v-loading", {
                                      attrs: { width: "20px" }
                                    })
                                  : _c(
                                      "span",
                                      {
                                        staticClass: "d-flex align-items-center"
                                      },
                                      [_vm._v("Login")]
                                    )
                              ],
                              1
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "sp20p" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-gray-600" },
                      [
                        _vm._v(
                          "\n              You don't have account\n              "
                        ),
                        _c(
                          "router-link",
                          {
                            staticClass: "text-primary-blue-original",
                            attrs: { to: "/register" }
                          },
                          [_vm._v("Signup")]
                        )
                      ],
                      1
                    )
                  ])
                ])
              ]
            )
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3" }, [
      _c("div", { staticClass: "illustration-box bg-white" })
    ])
  }
]
render._withStripped = true



/***/ })

}]);