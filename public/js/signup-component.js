(self["webpackChunk"] = self["webpackChunk"] || []).push([["signup-component"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SignupComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SignupComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      message: {
        text: null,
        type: "success"
      },
      showPasswordDetails: false,
      user: {
        type: 2,
        phone: ""
      },
      errors: [],
      flag_code: "af",
      prefix: "93",
      flags: [],
      showCountrySearch: false,
      isLoading: false
    };
  },
  methods: {
    selectCountry: function selectCountry(flag) {
      this.flag_code = flag.flag_code;
      this.prefix = flag.phone_code;
      this.showCountrySearch = false;
      this.removeValidationMsg("phone_code");
    },
    register: function register() {
      var _this = this;

      var user = _objectSpread({}, this.user);

      this.isLoading = true;
      user.phone_code = this.prefix;
      axios.post("/auth/user/register", user).then(function (response) {
        // { verify: true } means show for user a message about verification link
        _this.isLoading = false;

        _this.$router.push({
          name: "login",
          params: {
            verify: true
          }
        });
      })["catch"](function (error) {
        if (error.response.status == 422 && error.response.data.hasOwnProperty("errors")) {
          _this.isLoading = false;
          _this.errors = error.response.data.errors;
          return;
        }
      });
    },
    removeValidationMsg: function removeValidationMsg(key) {
      if (!this.errors[key]) return;
      Vue.set(this.errors, key, null);
    }
  },
  mounted: function mounted() {
    console.log("Hey Man");
    $(".input-group:has(input.form-controll)").addClass("has_sub");
  }
});

/***/ }),

/***/ "./resources/js/components/SignupComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/SignupComponent.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SignupComponent_vue_vue_type_template_id_e902aeac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignupComponent.vue?vue&type=template&id=e902aeac& */ "./resources/js/components/SignupComponent.vue?vue&type=template&id=e902aeac&");
/* harmony import */ var _SignupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignupComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/SignupComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SignupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SignupComponent_vue_vue_type_template_id_e902aeac___WEBPACK_IMPORTED_MODULE_0__.render,
  _SignupComponent_vue_vue_type_template_id_e902aeac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SignupComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SignupComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/SignupComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignupComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SignupComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/SignupComponent.vue?vue&type=template&id=e902aeac&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/SignupComponent.vue?vue&type=template&id=e902aeac& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupComponent_vue_vue_type_template_id_e902aeac___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupComponent_vue_vue_type_template_id_e902aeac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignupComponent_vue_vue_type_template_id_e902aeac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignupComponent.vue?vue&type=template&id=e902aeac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SignupComponent.vue?vue&type=template&id=e902aeac&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SignupComponent.vue?vue&type=template&id=e902aeac&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SignupComponent.vue?vue&type=template&id=e902aeac& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { attrs: { id: "signup" } }, [
    _c("div", { staticClass: "signup" }, [
      _c("div", { staticClass: "row no-gutters" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-2" }),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-5" }, [
          _c(
            "div",
            {
              staticClass:
                "d-flex flex-column justify-content-center h-100 p-4 p-md-0"
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "sp30p" }),
              _vm._v(" "),
              _c("section", { staticClass: "register-panel" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-xl-6 col-lg-6 col-md-12 col-sm-12" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class:
                            _vm.errors && _vm.errors["first_name"]
                              ? "has-error"
                              : ""
                        },
                        [
                          _vm._m(2),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.name,
                                expression: "user.name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "name",
                              type: "text",
                              required: "",
                              autofocus: "",
                              placeholder: "Name"
                            },
                            domProps: { value: _vm.user.name },
                            on: {
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "name",
                                    $event.target.value
                                  )
                                },
                                function($event) {
                                  return _vm.removeValidationMsg("name")
                                }
                              ]
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors && _vm.errors["name"]
                            ? _c("small", {
                                staticClass: "error-message",
                                domProps: {
                                  innerHTML: _vm._s(_vm.errors["name"][0])
                                }
                              })
                            : _vm._e()
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-xl-6 col-lg-6 col-md-12 col-sm-12" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class:
                            _vm.errors && _vm.errors["email"] ? "has-error" : ""
                        },
                        [
                          _vm._m(3),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.email,
                                expression: "user.email"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "email",
                              type: "email",
                              placeholder: "example@site.com",
                              required: ""
                            },
                            domProps: { value: _vm.user.email },
                            on: {
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "email",
                                    $event.target.value
                                  )
                                },
                                function($event) {
                                  return _vm.removeValidationMsg("email")
                                }
                              ]
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
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-xl-6 col-lg-6 col-md-12 col-sm-12" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class:
                            _vm.errors && _vm.errors["password"]
                              ? "has-error"
                              : ""
                        },
                        [
                          _vm._m(4),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.password,
                                expression: "user.password"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "password",
                              type: "password",
                              required: "",
                              placeholder: "Password"
                            },
                            domProps: { value: _vm.user.password },
                            on: {
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "password",
                                    $event.target.value
                                  )
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
                                  innerHTML: _vm._s(_vm.errors["password"][0])
                                }
                              })
                            : _vm._e()
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-xl-6 col-lg-6 col-md-12 col-sm-12" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class:
                            _vm.errors &&
                            _vm.errors["password"] &&
                            _vm.errors["password"][1]
                              ? "has-error"
                              : ""
                        },
                        [
                          _vm._m(5),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.password_confirmation,
                                expression: "user.password_confirmation"
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
                            domProps: { value: _vm.user.password_confirmation },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "password_confirmation",
                                  $event.target.value
                                )
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
                                  innerHTML: _vm._s(_vm.errors["password"][1])
                                }
                              })
                            : _vm._e()
                        ]
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("footer", [
                _c("div", { staticClass: "sp20p" }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "form-group d-flex flex-column align-items-center justify-content-between"
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" },
                        on: { click: _vm.register }
                      },
                      [
                        _vm.isLoading
                          ? _c("loading", { attrs: { width: "20px" } })
                          : _c("span", [_vm._v("Register")])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-gray-500 mt-4" },
                      [
                        _vm._v(
                          "\n                alerady have an acount?\n                "
                        ),
                        _c(
                          "router-link",
                          {
                            staticClass: "text-blue-original",
                            attrs: { to: "/login", tag: "a" }
                          },
                          [_vm._v("Sign in")]
                        )
                      ],
                      1
                    )
                  ]
                )
              ])
            ]
          )
        ])
      ])
    ])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "text-center" }, [
      _c("h1", { staticClass: "text-md font-weight-600 text-gray-900 mb-0" }, [
        _vm._v("Welcome")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "sp10p" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "input-label", attrs: { for: "first_name" } },
      [
        _vm._v("\n                    Name\n                    "),
        _c("span", { staticClass: "required" }, [_vm._v("*")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "input-label", attrs: { for: "email" } },
      [
        _vm._v("\n                    Email\n                    "),
        _c("span", { staticClass: "required" }, [_vm._v("*")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "input-label", attrs: { for: "password" } },
      [
        _vm._v("\n                    Password\n                    "),
        _c("span", { staticClass: "required" }, [_vm._v("*")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "input-label", attrs: { for: "password-confirm" } },
      [
        _vm._v("\n                    Confirm Password\n                    "),
        _c("span", { staticClass: "required" }, [_vm._v("*")])
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);