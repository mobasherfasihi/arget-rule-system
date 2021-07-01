(self["webpackChunk"] = self["webpackChunk"] || []).push([["page-target-component"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PageTargetComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PageTargetComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DataList: function DataList() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_renderLess_DataList_js").then(__webpack_require__.bind(__webpack_require__, /*! ./renderLess/DataList */ "./resources/js/components/renderLess/DataList.js"));
    },
    DataModel: function DataModel() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_renderLess_DataModel_js").then(__webpack_require__.bind(__webpack_require__, /*! ./renderLess/DataModel */ "./resources/js/components/renderLess/DataModel.js"));
    }
  },
  data: function data() {
    return {
      pagetTargets: [],
      targetPTarget: null,
      endpoint: "page-target",
      destoryMethod: null,
      filters: {
        page: 1
      },
      pagination: {},
      messageData: {
        type: "success",
        text: null,
        autoDismiss: true
      },
      showAlert: false
    };
  },
  methods: {
    setPage: function setPage() {
      this.filters.page = this.pagination.current_page;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/PageTargetComponent.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/PageTargetComponent.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageTargetComponent_vue_vue_type_template_id_3f152b42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTargetComponent.vue?vue&type=template&id=3f152b42& */ "./resources/js/components/PageTargetComponent.vue?vue&type=template&id=3f152b42&");
/* harmony import */ var _PageTargetComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTargetComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/PageTargetComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PageTargetComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PageTargetComponent_vue_vue_type_template_id_3f152b42___WEBPACK_IMPORTED_MODULE_0__.render,
  _PageTargetComponent_vue_vue_type_template_id_3f152b42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PageTargetComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/PageTargetComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/PageTargetComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTargetComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageTargetComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PageTargetComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTargetComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/PageTargetComponent.vue?vue&type=template&id=3f152b42&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/PageTargetComponent.vue?vue&type=template&id=3f152b42& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTargetComponent_vue_vue_type_template_id_3f152b42___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTargetComponent_vue_vue_type_template_id_3f152b42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTargetComponent_vue_vue_type_template_id_3f152b42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageTargetComponent.vue?vue&type=template&id=3f152b42& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PageTargetComponent.vue?vue&type=template&id=3f152b42&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PageTargetComponent.vue?vue&type=template&id=3f152b42&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PageTargetComponent.vue?vue&type=template&id=3f152b42& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { attrs: { id: "page-target-list" } }, [
    _c("div", { staticClass: "height-20p" }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "container my-5" },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("data-list", {
          attrs: {
            endpoint: _vm.endpoint,
            filter: _vm.filters,
            filterKey: "filters"
          },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var pagetTargets = ref.data
                var error = ref.error
                var load = ref.load
                var loading = ref.loading
                return _c("div", {}, [
                  _c("div", { staticClass: "table-content" }, [
                    _c("table", { staticClass: "table text-capitalize" }, [
                      _c("thead", { staticClass: "thead-light" }, [
                        _c("th", [_vm._v("Title")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Message")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Number of Rules")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Actions")])
                      ]),
                      _vm._v(" "),
                      loading || pagetTargets.data.length == 0
                        ? _c("tbody", [
                            _c("tr", [
                              loading
                                ? _c(
                                    "td",
                                    {
                                      staticStyle: {
                                        background: "transparent"
                                      },
                                      attrs: { colspan: "5" }
                                    },
                                    [
                                      _c("v-loading", {
                                        attrs: { width: "30px" }
                                      })
                                    ],
                                    1
                                  )
                                : _c(
                                    "td",
                                    {
                                      staticStyle: {
                                        background: "transparent"
                                      },
                                      attrs: { colspan: "5" }
                                    },
                                    [
                                      _c("p", { staticClass: "text-center" }, [
                                        _vm._v("No data found")
                                      ])
                                    ]
                                  )
                            ])
                          ])
                        : pagetTargets && pagetTargets.data.length > 0
                        ? _c(
                            "tbody",
                            _vm._l(pagetTargets.data, function(pTarget, index) {
                              return _c(
                                "transition",
                                {
                                  key: index,
                                  attrs: { name: "fade", mode: "out-in" }
                                },
                                [
                                  _c("data-model", {
                                    attrs: {
                                      entity: pTarget,
                                      id: pTarget.id,
                                      endpoint: _vm.endpoint
                                    },
                                    on: { success: load },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var destroy = ref.destroy
                                            var loading = ref.loading
                                            var restore = ref.restore
                                            return _c(
                                              "tr",
                                              {
                                                attrs: {
                                                  set: [
                                                    ((_vm.destoryMethod = destroy),
                                                    (_vm.activateMethod = restore))
                                                  ]
                                                }
                                              },
                                              [
                                                _c("td", [
                                                  _vm._v(_vm._s(pTarget.title))
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      pTarget.alert_message
                                                    )
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(pTarget.rules_count)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  {
                                                    staticStyle: {
                                                      width: "10%"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "ul",
                                                      {
                                                        staticClass:
                                                          "list actions d-flex justify-content-center"
                                                      },
                                                      [
                                                        _c(
                                                          "li",
                                                          {
                                                            staticClass: "mx-2",
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.viewPTarget(
                                                                  pTarget
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("span", {
                                                              staticClass:
                                                                "text-sm text-gray-500 fa fa-eye"
                                                            })
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "li",
                                                          {
                                                            staticClass: "mx-2",
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.edit(
                                                                  pTarget
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("span", {
                                                              staticClass:
                                                                "text-sm text-gray-500 icon-edit"
                                                            })
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "li",
                                                          {
                                                            staticClass: "mx-2",
                                                            attrs: {
                                                              disabled: loading
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.delet(
                                                                  pTarget
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            loading &&
                                                            _vm.targetPTarget ==
                                                              pTarget.id
                                                              ? [
                                                                  _c(
                                                                    "v-loading",
                                                                    {
                                                                      attrs: {
                                                                        width:
                                                                          "20px"
                                                                      }
                                                                    }
                                                                  )
                                                                ]
                                                              : [
                                                                  _c("span", {
                                                                    staticClass:
                                                                      "text-sm text-gray-500 icon-trash"
                                                                  })
                                                                ]
                                                          ],
                                                          2
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          }
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  })
                                ],
                                1
                              )
                            }),
                            1
                          )
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  pagetTargets && !loading
                    ? _c(
                        "div",
                        {
                          staticClass: "d-flex align-items-center",
                          attrs: {
                            set: [(_vm.pagination = pagetTargets.pagination)]
                          }
                        },
                        [
                          _c("v-pagination", {
                            attrs: { pagination: pagetTargets.pagination },
                            on: { onPageChange: _vm.setPage }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ])
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-flex justify-content-between align-items-center" },
      [
        _c("h2", { staticClass: "mb-4" }, [_vm._v("Page Targeting List")]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { type: "button" } },
          [_vm._v("Add")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);