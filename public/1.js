webpackJsonp([1],{

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(931)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(933)
/* template */
var __vue_template__ = __webpack_require__(934)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Layout\\CategoryPackage\\ProductCreate.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a9cb95c", Component.options)
  } else {
    hotAPI.reload("data-v-5a9cb95c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(932);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(98)("4fa0dc4e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5a9cb95c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProductCreate.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5a9cb95c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProductCreate.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            form: {
                dosage: '',
                medication: '',
                medicine_id: '',
                product_id: '',
                po_number: '',
                pr_number: '',
                name: '',
                quantity: '',
                vat: '',
                purchase_rate: '',
                mrp_rate: '',
                sale_rate: '',
                discount: 0,
                manufacture_date: '',
                expiry_date: '',
                packs: {
                    item_pack: '',
                    item_type: '',
                    sub_item: '',
                    sub_item_type: ''
                },
                category_id: '',
                package_id: '',
                rack: {
                    weight: 0,
                    rack_id: ''
                }
            },
            racks: [],
            categories: [],
            packages: [],
            isDisabled: false,
            labelPosition: 'left',
            errors: [],
            medicines: [],
            loading: false
        };
    },

    computed: {
        itemUnitCost: function itemUnitCost() {
            var vm = this;
            return vm.form.sale_rate != 0 && vm.form.packs.item_pack != 0 ? vm.form.sale_rate / vm.form.packs.item_pack : 0;
        },
        subItemSubCost: function subItemSubCost() {
            var vm = this;
            return vm.form.packs.item_pack != 0 && vm.form.packs.sub_item != 0 ? vm.form.packs.item_pack * vm.form.packs.sub_item : 0;
        }
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        if (to.params.id) {
            axios.all([axios.get('/api/select'), axios.get('/api/' + to.meta.url + '/edit/' + to.params.id)]).then(axios.spread(function (o, p) {
                next(function (vm) {
                    var c = o.data;
                    return vm.categories = c.categories, vm.packages = c.packages, vm.racks = c.racks, vm.form = p.data;
                });
            }));
        } else {
            axios.all([axios.get('/api/select')]).then(axios.spread(function (o, p) {
                next(function (vm) {
                    var c = o.data;
                    return vm.categories = c.categories, vm.packages = c.packages, vm.racks = c.racks;
                });
            }));
        }
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var vm = this;
        if (to.params.id) {
            axios.all([axios.get('/api/select'), axios.get('/api/edit/' + to.meta.url + '/' + to.params.id)]).then(axios.spread(function (o, p) {
                var v = o.data;
                vm.categories = v.categories;
                vm.packages = v.packages;
                vm.racks = v.racks;
                vm.setData(p.data);
                next();
            }));
        } else {
            axios.all([axios.get('/api/select')]).then(axios.spread(function (o) {
                var v = o.data;
                vm.categories = v.categories;
                vm.packages = v.packages;
                vm.racks = v.racks;
                next();
            }));
        }
    },

    methods: {
        search_medicine: function search_medicine(query) {
            var vm = this;

            if (query !== '') {
                vm.loading = true;
                vm.onSearch(query, vm);
            } else {
                vm.loading = false;
                vm.medicines = [];
            }
        },

        onSearch: _.debounce(function (query, vm) {
            vm.loading = true;
            axios.get('/api/search/medicines?search=' + query).then(function (q) {
                vm.loading = false;
                vm.medicines = q.data.map(function (item) {
                    return { value: item, label: item.name };
                });
            }).catch(function () {
                vm.loading = false;
            });
        }, 350),
        onSubmit: function onSubmit() {
            var vm = this;
            vm.isDisabled = true;
            vm.errors = [];
            axios.post('/api/' + vm.$route.meta.url, vm.form).then(function (response) {
                vm.$message({ message: response.statusText, type: 'success' });
                vm.isDisabled = false;
                vm.$refs.form.resetFields();
            }).catch(function (error) {
                if (error.response.data.errors && error.response.data.message) {
                    vm.errors = error.response.data.errors;
                    vm.$message({ message: error.response.data.message, type: 'error' });
                }
                vm.isDisabled = false;
            });
        }
    }
});

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c(
              "el-form",
              {
                ref: "form",
                attrs: {
                  "label-position": _vm.labelPosition,
                  "label-width": "160px",
                  model: _vm.form
                },
                nativeOn: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.onSubmit($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-6" },
                    [
                      _c(
                        "el-form-item",
                        {
                          class: _vm.errors.product_id
                            ? "is-error is-required"
                            : "",
                          attrs: { label: "Generic" }
                        },
                        [
                          _c(
                            "el-select",
                            {
                              staticStyle: { width: "100%" },
                              attrs: {
                                filterable: "",
                                remote: "",
                                placeholder: "Enter Medicine Name",
                                "remote-method": _vm.search_medicine,
                                loading: _vm.loading
                              },
                              model: {
                                value: _vm.form.medicine_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "medicine_id", $$v)
                                },
                                expression: "form.medicine_id"
                              }
                            },
                            _vm._l(_vm.medicines, function(item, index) {
                              return _c("el-option", {
                                key: index,
                                attrs: {
                                  label: item.label,
                                  value: item.value.id
                                }
                              })
                            })
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.errors.medicine_id, function(error) {
                            return _vm.errors.medicine_id
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(error) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          class: _vm.errors.medication
                            ? "is-error is-required"
                            : "",
                          attrs: { label: "Medication" }
                        },
                        [
                          _c("el-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.medication,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "medication", $$v)
                              },
                              expression: "form.medication"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.medication, function(error) {
                            return _vm.errors.medication
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(error) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          class: _vm.errors.dosage
                            ? "is-error is-required"
                            : "",
                          attrs: { label: "Dosage" }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "number", required: "" },
                            model: {
                              value: _vm.form.dosage,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "dosage", $$v)
                              },
                              expression: "form.dosage"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.dosage, function(error) {
                            return _vm.errors.dosage
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(error) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          class: _vm.errors.category_id
                            ? "is-error is-required"
                            : "",
                          attrs: { label: "Form" }
                        },
                        [
                          _c(
                            "el-select",
                            {
                              staticStyle: { width: "100%" },
                              model: {
                                value: _vm.form.category_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "category_id", $$v)
                                },
                                expression: "form.category_id"
                              }
                            },
                            _vm._l(_vm.categories, function(
                              category,
                              index,
                              key
                            ) {
                              return _c("el-option", {
                                key: key,
                                attrs: {
                                  label: category.name,
                                  value: category.id
                                }
                              })
                            })
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.errors.category_id, function(error) {
                            return _vm.errors.category_id
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(error) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          class: _vm.errors.category_id
                            ? "is-error is-required"
                            : "",
                          attrs: { label: "Pack Size" }
                        },
                        [
                          _c(
                            "el-select",
                            {
                              staticStyle: { width: "100%" },
                              model: {
                                value: _vm.form.package_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "package_id", $$v)
                                },
                                expression: "form.package_id"
                              }
                            },
                            _vm._l(_vm.packages, function(package, index, key) {
                              return _c("el-option", {
                                key: key,
                                attrs: {
                                  label: package.name,
                                  value: package.id
                                }
                              })
                            })
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.errors.category_id, function(error) {
                            return _vm.errors.category_id
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(error) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  [
                    _c(
                      "el-button",
                      {
                        attrs: { type: "primary", loading: _vm.isDisabled },
                        on: { click: _vm.onSubmit }
                      },
                      [_vm._v("Save Information\n                        ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        on: {
                          click: function($event) {
                            _vm.$router.push("/" + _vm.$route.meta.url)
                          }
                        }
                      },
                      [_vm._v("Cancel")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "m-0" }, [_vm._v("Add New Medicine")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5a9cb95c", module.exports)
  }
}

/***/ })

});