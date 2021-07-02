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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
      }
    };
  },
  methods: {
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
  return _c("section", { attrs: { id: "target-add" } }, [
    _c("div", { staticClass: "height-20p" }),
    _vm._v(" "),
    _c("div", { staticClass: "container my-5" }, [
      _c("h1", { staticClass: "mb-4" }, [_vm._v("Add New Page Target")]),
      _vm._v(" "),
      _c(
        "form",
        [
          _vm._m(0),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm._l(_vm.targetPage.target_rules, function(targetRule, index) {
            return _c(
              "div",
              { key: "targetRule-" + index, staticClass: "form-row" },
              [
                _c("div", { staticClass: "form-group col-md-2" }, [
                  _c("label", { attrs: { for: "inputState" } }, [
                    _vm._v("Instruction")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.targetPage.target_rules[index].instruction,
                          expression:
                            "targetPage.target_rules[index].instruction"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "inputState" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.targetPage.target_rules[index],
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
                        { attrs: { selected: "" }, domProps: { value: null } },
                        [_vm._v("Choose...")]
                      ),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "show" } }, [
                        _vm._v("Show on")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "not_show" } }, [
                        _vm._v("Don't show on")
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-md-2" }, [
                  _c("label", { attrs: { for: "inputState" } }, [
                    _vm._v("Rule")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.targetPage.target_rules[index].rule,
                          expression: "targetPage.target_rules[index].rule"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "inputState" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.targetPage.target_rules[index],
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
                        { attrs: { selected: "" }, domProps: { value: null } },
                        [_vm._v("Select Rule")]
                      ),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "contain" } }, [
                        _vm._v("pages that contain")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "specific_page" } }, [
                        _vm._v("a specific page")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "starting_with" } }, [
                        _vm._v("pages starting with")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "ending_with" } }, [
                        _vm._v("pages ending with")
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-md-6" }, [
                  _c("label", { attrs: { for: "basic-url" } }, [
                    _vm._v("Your pattern")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group mb-3" }, [
                    _vm._m(1, true),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.targetPage.target_rules[index].pattern,
                          expression: "targetPage.target_rules[index].pattern"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "basic-url",
                        "aria-describedby": "basic-addon3"
                      },
                      domProps: {
                        value: _vm.targetPage.target_rules[index].pattern
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.targetPage.target_rules[index],
                            "pattern",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-group col-md-2 d-flex align-items-center"
                  },
                  [
                    index + 1 == _vm.targetPage.target_rules.length &&
                    _vm.targetPage.target_rules[0].instruction
                      ? _c(
                          "a",
                          {
                            attrs: { href: "javascript:void(0)" },
                            on: {
                              click: function($event) {
                                return _vm.addMoreRule(index)
                              }
                            }
                          },
                          [
                            _c("small", { staticClass: "text-primary-green" }, [
                              _vm._v("Add")
                            ])
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.targetPage.target_rules.length &&
                    _vm.targetPage.target_rules[0].instruction &&
                    index > 0
                      ? _c(
                          "a",
                          {
                            staticClass: "ml-2",
                            attrs: { href: "javascript:void(0)" },
                            on: {
                              click: function($event) {
                                return _vm.removeElement(index)
                              }
                            }
                          },
                          [
                            _c("small", { staticClass: "text-danger" }, [
                              _vm._v("Remove")
                            ])
                          ]
                        )
                      : _vm._e()
                  ]
                )
              ]
            )
          }),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-primary", attrs: { type: "submit" } },
            [_vm._v("Save")]
          )
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-row" }, [
      _c("div", { staticClass: "form-group col-md-6" }, [
        _c("label", { attrs: { for: "targetTitle" } }, [_vm._v("Title")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", id: "targetTitle", placeholder: "Title" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group col-md-6" }, [
        _c("label", { attrs: { for: "alertMessage" } }, [
          _vm._v("Alert Message")
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: {
            type: "text",
            id: "alertMessage",
            placeholder: "Alert Message"
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addon3" } },
        [_vm._v("www.domain.com/")]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);