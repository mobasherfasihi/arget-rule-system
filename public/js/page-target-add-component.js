(self["webpackChunk"] = self["webpackChunk"] || []).push([["page-target-add-component"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pageTarget/AddComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pageTarget/AddComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    DataModel: function DataModel() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_renderLess_DataModel_js").then(__webpack_require__.bind(__webpack_require__, /*! ../renderLess/DataModel */ "./resources/js/components/renderLess/DataModel.js"));
    }
  },
  data: function data() {
    return {
      targetPage: {
        title: null,
        alert_message: null,
        target_rules: [{
          instruction: null,
          rule: null,
          pattern: null
        }]
      },
      errors: [],
      pageTargetId: null,
      isMounted: false
    };
  },
  mounted: function mounted() {
    this.isEditForm;
    this.isMounted = true;
  },
  computed: {
    isEditForm: function isEditForm() {
      this.pageTargetId = this.$route.params.id;
      return this.pageTargetId;
    }
  },
  methods: {
    navigateToList: function navigateToList(response) {
      this.$router.push({
        name: "rules",
        params: {
          message: response.data.message
        }
      });
    },
    addMoreRule: function addMoreRule(index) {
      if (this.targetPage.target_rules[index].instruction) {
        if (index > 0) {
          this.targetPage.target_rules.push({
            instruction: null,
            rule: null,
            pattern: null
          });
        } else {
          this.targetPage.target_rules.push({
            instruction: null,
            rule: null,
            pattern: null
          });
        }
      }
    },
    removeElement: function removeElement(index) {
      if (index == 0) {
        Vue.set(this.targetPage.target_rules, 0, {
          instruction: null,
          rule: null,
          pattern: null
        });
      } else {
        this.targetPage.target_rules.splice(index, 1);
      }
    },
    createRule: function createRule() {
      var _this = this;

      axios.post("/api/page-target", this.targetPage).then(function (response) {
        var link = "".concat(config.APP_URL, "/js/task.js?id=").concat(response.data.id);

        _this.$router.push({
          name: "rules",
          params: {
            message: "Rule is created successfully",
            link: '<script src="' + link + '">'
          }
        });
      })["catch"](function (error) {
        if (error.response.status == 422 && error.response.data.hasOwnProperty("errors")) {
          _this.errors = error.response.data.errors;
          return;
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pageTarget/AddComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/pageTarget/AddComponent.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddComponent_vue_vue_type_template_id_7d869fa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddComponent.vue?vue&type=template&id=7d869fa0& */ "./resources/js/components/pageTarget/AddComponent.vue?vue&type=template&id=7d869fa0&");
/* harmony import */ var _AddComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/pageTarget/AddComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AddComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddComponent_vue_vue_type_template_id_7d869fa0___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddComponent_vue_vue_type_template_id_7d869fa0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pageTarget/AddComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pageTarget/AddComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pageTarget/AddComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pageTarget/AddComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pageTarget/AddComponent.vue?vue&type=template&id=7d869fa0&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pageTarget/AddComponent.vue?vue&type=template&id=7d869fa0& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddComponent_vue_vue_type_template_id_7d869fa0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddComponent_vue_vue_type_template_id_7d869fa0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddComponent_vue_vue_type_template_id_7d869fa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddComponent.vue?vue&type=template&id=7d869fa0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pageTarget/AddComponent.vue?vue&type=template&id=7d869fa0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pageTarget/AddComponent.vue?vue&type=template&id=7d869fa0&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pageTarget/AddComponent.vue?vue&type=template&id=7d869fa0& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "section",
    { attrs: { id: "target-add" } },
    [
      _vm.isMounted
        ? _c("data-model", {
            attrs: {
              endpoint: "page-target",
              id: _vm.isEditForm ? _vm.pageTargetId : null
            },
            on: { success: _vm.navigateToList },
            scopedSlots: _vm._u(
              [
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    var errors = ref.error
                    var loading = ref.loading
                    var create = ref.create
                    var update = ref.update
                    return _c(
                      "div",
                      {
                        attrs: {
                          set: [_vm.isEditForm ? (_vm.targetPage = data) : ""]
                        }
                      },
                      [
                        !_vm.targetPage
                          ? _c(
                              "div",
                              [_c("v-loading", { attrs: { width: "40px" } })],
                              1
                            )
                          : _c("div", [
                              _c("div", { staticClass: "height-20p" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "container my-5" }, [
                                _c("h1", { staticClass: "mb-4" }, [
                                  _vm._v("Add New Page Target")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "form",
                                  {
                                    on: {
                                      submit: function($event) {
                                        $event.preventDefault()
                                        _vm.isEditForm
                                          ? update(_vm.targetPage)
                                          : create(_vm.targetPage)
                                      }
                                    }
                                  },
                                  [
                                    _c("div", { staticClass: "form-row" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group col-md-6",
                                          class:
                                            errors && errors["title"]
                                              ? "has-error"
                                              : ""
                                        },
                                        [
                                          _c(
                                            "label",
                                            { attrs: { for: "targetTitle" } },
                                            [_vm._v("Title")]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.targetPage.title,
                                                expression: "targetPage.title"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              id: "targetTitle",
                                              placeholder: "Title"
                                            },
                                            domProps: {
                                              value: _vm.targetPage.title
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.targetPage,
                                                  "title",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          errors && errors["title"]
                                            ? _c("small", {
                                                staticClass: "error-message",
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    errors["title"][0]
                                                  )
                                                }
                                              })
                                            : _vm._e()
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group col-md-6",
                                          class:
                                            errors && errors["alert_message"]
                                              ? "has-error"
                                              : ""
                                        },
                                        [
                                          _c(
                                            "label",
                                            { attrs: { for: "alertMessage" } },
                                            [_vm._v("Alert Message")]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.targetPage.alert_message,
                                                expression:
                                                  "targetPage.alert_message"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              id: "alertMessage",
                                              placeholder: "Alert Message"
                                            },
                                            domProps: {
                                              value:
                                                _vm.targetPage.alert_message
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.targetPage,
                                                  "alert_message",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          errors && errors["alert_message"]
                                            ? _c("small", {
                                                staticClass: "error-message",
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    errors["alert_message"][0]
                                                  )
                                                }
                                              })
                                            : _vm._e()
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("hr"),
                                    _vm._v(" "),
                                    _vm._l(
                                      _vm.targetPage.target_rules,
                                      function(targetRule, index) {
                                        return _c(
                                          "div",
                                          {
                                            key: "targetRule-" + index,
                                            staticClass: "form-row"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "form-group col-md-2",
                                                class:
                                                  errors &&
                                                  (errors[
                                                    "target_rules." +
                                                      index +
                                                      ".instruction"
                                                  ] ||
                                                    errors["target_rules"])
                                                    ? "has-error"
                                                    : ""
                                              },
                                              [
                                                _c(
                                                  "label",
                                                  {
                                                    attrs: { for: "inputState" }
                                                  },
                                                  [_vm._v("Instruction")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "select",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.targetPage
                                                            .target_rules[index]
                                                            .instruction,
                                                        expression:
                                                          "targetPage.target_rules[index].instruction"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: { id: "inputState" },
                                                    on: {
                                                      change: function($event) {
                                                        var $$selectedVal = Array.prototype.filter
                                                          .call(
                                                            $event.target
                                                              .options,
                                                            function(o) {
                                                              return o.selected
                                                            }
                                                          )
                                                          .map(function(o) {
                                                            var val =
                                                              "_value" in o
                                                                ? o._value
                                                                : o.value
                                                            return val
                                                          })
                                                        _vm.$set(
                                                          _vm.targetPage
                                                            .target_rules[
                                                            index
                                                          ],
                                                          "instruction",
                                                          $event.target.multiple
                                                            ? $$selectedVal
                                                            : $$selectedVal[0]
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "option",
                                                      {
                                                        attrs: { selected: "" },
                                                        domProps: {
                                                          value: null
                                                        }
                                                      },
                                                      [_vm._v("Choose...")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "option",
                                                      {
                                                        attrs: { value: "show" }
                                                      },
                                                      [_vm._v("Show on")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "option",
                                                      {
                                                        attrs: {
                                                          value: "not_show"
                                                        }
                                                      },
                                                      [_vm._v("Don't show on")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                errors &&
                                                (errors[
                                                  "target_rules." +
                                                    index +
                                                    ".instruction"
                                                ] ||
                                                  errors["target_rules"])
                                                  ? _c("small", {
                                                      staticClass:
                                                        "error-message",
                                                      domProps: {
                                                        innerHTML: _vm._s(
                                                          errors["target_rules"]
                                                            ? errors[
                                                                "target_rules"
                                                              ][0]
                                                            : errors[
                                                                "target_rules." +
                                                                  index +
                                                                  ".instruction"
                                                              ][0]
                                                        )
                                                      }
                                                    })
                                                  : _vm._e()
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "form-group col-md-2",
                                                class:
                                                  errors &&
                                                  (errors[
                                                    "target_rules." +
                                                      index +
                                                      ".rule"
                                                  ] ||
                                                    errors["target_rules"])
                                                    ? "has-error"
                                                    : ""
                                              },
                                              [
                                                _c(
                                                  "label",
                                                  {
                                                    attrs: { for: "inputState" }
                                                  },
                                                  [_vm._v("Rule")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "select",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.targetPage
                                                            .target_rules[index]
                                                            .rule,
                                                        expression:
                                                          "targetPage.target_rules[index].rule"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: { id: "inputState" },
                                                    on: {
                                                      change: function($event) {
                                                        var $$selectedVal = Array.prototype.filter
                                                          .call(
                                                            $event.target
                                                              .options,
                                                            function(o) {
                                                              return o.selected
                                                            }
                                                          )
                                                          .map(function(o) {
                                                            var val =
                                                              "_value" in o
                                                                ? o._value
                                                                : o.value
                                                            return val
                                                          })
                                                        _vm.$set(
                                                          _vm.targetPage
                                                            .target_rules[
                                                            index
                                                          ],
                                                          "rule",
                                                          $event.target.multiple
                                                            ? $$selectedVal
                                                            : $$selectedVal[0]
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "option",
                                                      {
                                                        attrs: { selected: "" },
                                                        domProps: {
                                                          value: null
                                                        }
                                                      },
                                                      [_vm._v("Select Rule")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "option",
                                                      {
                                                        attrs: {
                                                          value: "contains"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "pages that contain"
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "option",
                                                      {
                                                        attrs: {
                                                          value: "specific_page"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "a specific page"
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "option",
                                                      {
                                                        attrs: {
                                                          value: "starting_with"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "pages starting with"
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "option",
                                                      {
                                                        attrs: {
                                                          value: "ending_with"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "pages ending with"
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                errors &&
                                                (errors[
                                                  "target_rules." +
                                                    index +
                                                    ".rule"
                                                ] ||
                                                  errors["target_rules"])
                                                  ? _c("small", {
                                                      staticClass:
                                                        "error-message",
                                                      domProps: {
                                                        innerHTML: _vm._s(
                                                          errors["target_rules"]
                                                            ? errors[
                                                                "target_rules"
                                                              ][0]
                                                            : errors[
                                                                "target_rules." +
                                                                  index +
                                                                  ".rule"
                                                              ][0]
                                                        )
                                                      }
                                                    })
                                                  : _vm._e()
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "form-group col-md-6",
                                                class:
                                                  errors &&
                                                  (errors[
                                                    "target_rules." +
                                                      index +
                                                      ".pattern"
                                                  ] ||
                                                    errors["target_rules"])
                                                    ? "has-error"
                                                    : ""
                                              },
                                              [
                                                _c(
                                                  "label",
                                                  {
                                                    attrs: { for: "basic-url" }
                                                  },
                                                  [_vm._v("Your pattern")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "input-group mb-3"
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "input-group-prepend"
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "input-group-text",
                                                            attrs: {
                                                              id: "basic-addon3"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "www.domain.com/"
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.targetPage
                                                              .target_rules[
                                                              index
                                                            ].pattern,
                                                          expression:
                                                            "targetPage.target_rules[index].pattern"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        type: "text",
                                                        id: "basic-url",
                                                        "aria-describedby":
                                                          "basic-addon3"
                                                      },
                                                      domProps: {
                                                        value:
                                                          _vm.targetPage
                                                            .target_rules[index]
                                                            .pattern
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm.targetPage
                                                              .target_rules[
                                                              index
                                                            ],
                                                            "pattern",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                errors &&
                                                (errors[
                                                  "target_rules." +
                                                    index +
                                                    ".pattern"
                                                ] ||
                                                  errors["target_rules"])
                                                  ? _c("small", {
                                                      staticClass:
                                                        "error-message",
                                                      domProps: {
                                                        innerHTML: _vm._s(
                                                          errors["target_rules"]
                                                            ? errors[
                                                                "target_rules"
                                                              ][0]
                                                            : errors[
                                                                "target_rules." +
                                                                  index +
                                                                  ".pattern"
                                                              ][0]
                                                        )
                                                      }
                                                    })
                                                  : _vm._e()
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "form-group col-md-2 d-flex align-items-center"
                                              },
                                              [
                                                index + 1 ==
                                                  _vm.targetPage.target_rules
                                                    .length &&
                                                _vm.targetPage.target_rules[0]
                                                  .instruction
                                                  ? _c(
                                                      "a",
                                                      {
                                                        attrs: {
                                                          href:
                                                            "javascript:void(0)"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.addMoreRule(
                                                              index
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "small",
                                                          {
                                                            staticClass:
                                                              "text-primary-green"
                                                          },
                                                          [_vm._v("Add")]
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.targetPage.target_rules
                                                  .length &&
                                                _vm.targetPage.target_rules[0]
                                                  .instruction &&
                                                index > 0
                                                  ? _c(
                                                      "a",
                                                      {
                                                        staticClass: "ml-2",
                                                        attrs: {
                                                          href:
                                                            "javascript:void(0)"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.removeElement(
                                                              index
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "small",
                                                          {
                                                            staticClass:
                                                              "text-danger"
                                                          },
                                                          [_vm._v("Remove")]
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            )
                                          ]
                                        )
                                      }
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-primary",
                                        attrs: {
                                          type: "submit",
                                          disabled: loading
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.isEditForm
                                              ? "Update"
                                              : "Add Rule"
                                          )
                                        )
                                      ]
                                    )
                                  ],
                                  2
                                )
                              ])
                            ])
                      ]
                    )
                  }
                }
              ],
              null,
              false,
              1979044040
            )
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);