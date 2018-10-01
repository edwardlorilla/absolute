webpackJsonp([1],{

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(870)
}
var normalizeComponent = __webpack_require__(16)
/* script */
var __vue_script__ = __webpack_require__(872)
/* template */
var __vue_template__ = __webpack_require__(873)
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

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(871);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(61)("4fa0dc4e", content, false, {});
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

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "\nfieldset {\n    border: 1px solid #c0c4cc;\n    max-width: 500px;\n    padding: 16px;\n}\nlegend {\n    color: #606266;\n    background-color: #c0c4cc;\n    padding: 5px 10px;\n    border-radius: 0;\n    border: 0;\n    font-size: 14px;\n}\n", ""]);

// exports


/***/ }),

/***/ 872:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            form: {
                product_id: '',
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
            errors: []
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

/***/ 873:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [
          _c("h5", { staticClass: "m-0" }, [
            _vm._v(
              _vm._s(_vm.$route.meta.type) + " " + _vm._s(_vm.$route.meta.title)
            )
          ])
        ]),
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
                  size: "mini",
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
                    { staticClass: "col-lg-4" },
                    [
                      _c(
                        "el-form-item",
                        {
                          class: _vm.errors.product_id
                            ? "is-error is-required"
                            : "",
                          attrs: { label: "Product ID" }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "number", required: "" },
                            model: {
                              value: _vm.form.product_id,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "product_id", $$v)
                              },
                              expression: "form.product_id"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.product_id, function(error) {
                            return _vm.errors.product_id
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
                          attrs: { label: "Category" }
                        },
                        [
                          _c(
                            "el-select",
                            {
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
                          class: _vm.errors.item_pack
                            ? "is-error is-required"
                            : "",
                          attrs: { label: "No. of Items in Pack" }
                        },
                        [
                          _c(
                            "el-col",
                            { attrs: { span: 11 } },
                            [
                              _c("el-input", {
                                attrs: { required: "" },
                                model: {
                                  value: _vm.form.packs.item_pack,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form.packs, "item_pack", $$v)
                                  },
                                  expression: "form.packs.item_pack"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-col",
                            { staticClass: "line", attrs: { span: 2 } },
                            [_vm._v("-")]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-col",
                            { attrs: { span: 11 } },
                            [
                              _c(
                                "el-select",
                                {
                                  model: {
                                    value: _vm.form.packs.item_type,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form.packs, "item_type", $$v)
                                    },
                                    expression: "form.packs.item_type"
                                  }
                                },
                                _vm._l(_vm.packages, function(
                                  package,
                                  index,
                                  key
                                ) {
                                  return _c("el-option", {
                                    key: key,
                                    attrs: {
                                      label: package.name,
                                      value: package.id
                                    }
                                  })
                                })
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.errors.item_pack, function(error) {
                            return _vm.errors.item_pack
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
                          class: _vm.errors.sub_item
                            ? "is-error is-required"
                            : "",
                          attrs: { label: "No. of Sub-Item in Item." }
                        },
                        [
                          _c(
                            "el-col",
                            { attrs: { span: 11 } },
                            [
                              _c("el-input", {
                                attrs: { required: "" },
                                model: {
                                  value: _vm.form.packs.sub_item,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form.packs, "sub_item", $$v)
                                  },
                                  expression: "form.packs.sub_item"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-col",
                            { staticClass: "line", attrs: { span: 2 } },
                            [_vm._v("-")]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-col",
                            { attrs: { span: 11 } },
                            [
                              _c(
                                "el-select",
                                {
                                  model: {
                                    value: _vm.form.packs.sub_item_type,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.form.packs,
                                        "sub_item_type",
                                        $$v
                                      )
                                    },
                                    expression: "form.packs.sub_item_type"
                                  }
                                },
                                _vm._l(_vm.packages, function(
                                  package,
                                  index,
                                  key
                                ) {
                                  return _c("el-option", {
                                    key: key,
                                    attrs: {
                                      label: package.name,
                                      value: package.id
                                    }
                                  })
                                })
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.errors.sub_item, function(error) {
                            return _vm.errors.sub_item
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
                        { attrs: { label: "No. of Items in Pack" } },
                        [
                          _c("el-input", {
                            attrs: { disabled: true, required: "" },
                            model: {
                              value: _vm.subItemSubCost,
                              callback: function($$v) {
                                _vm.subItemSubCost = $$v
                              },
                              expression: "subItemSubCost"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          class: _vm.errors.quantity
                            ? "is-error is-required"
                            : "",
                          attrs: { label: "Quantity" }
                        },
                        [
                          _c("el-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.quantity,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "quantity", $$v)
                              },
                              expression: "form.quantity"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.quantity, function(error) {
                            return _vm.errors.quantity
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
                          class: _vm.errors.reorder_point
                            ? "is-error is-required"
                            : "",
                          attrs: { label: "Re-Order Point" }
                        },
                        [
                          _c("el-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.reorder_point,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "reorder_point", $$v)
                              },
                              expression: "form.reorder_point"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.reorder_point, function(error) {
                            return _vm.errors.reorder_point
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
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-lg-4" },
                    [
                      _c(
                        "el-form-item",
                        {
                          class: _vm.errors.name ? "is-error is-required" : "",
                          attrs: { label: "Product Name" }
                        },
                        [
                          _c("el-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "name", $$v)
                              },
                              expression: "form.name"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.name, function(error) {
                            return _vm.errors.name
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
                          class: _vm.errors.package_id
                            ? "is-error is-required"
                            : "",
                          attrs: { label: "Package Name" }
                        },
                        [
                          _c(
                            "el-select",
                            {
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
                          _vm._l(_vm.errors.package_id, function(error) {
                            return _vm.errors.package_id
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
                          class: _vm.errors.manufacture_date
                            ? "is-error is-required"
                            : "",
                          attrs: { label: "Manufacturing Date" }
                        },
                        [
                          _c("el-input", {
                            attrs: {
                              "prefix-icon": "el-icon-date",
                              type: "date",
                              required: ""
                            },
                            model: {
                              value: _vm.form.manufacture_date,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "manufacture_date", $$v)
                              },
                              expression: "form.manufacture_date"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.manufacture_date, function(error) {
                            return _vm.errors.manufacture_date
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
                          class: _vm.errors.expiry_date
                            ? "is-error is-required"
                            : "",
                          attrs: { label: "Expiry Date" }
                        },
                        [
                          _c("el-input", {
                            attrs: {
                              "prefix-icon": "el-icon-date",
                              type: "date",
                              required: ""
                            },
                            model: {
                              value: _vm.form.expiry_date,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "expiry_date", $$v)
                              },
                              expression: "form.expiry_date"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.expiry_date, function(error) {
                            return _vm.errors.expiry_date
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
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-4" }, [
                    _c(
                      "fieldset",
                      [
                        _c("legend", [_vm._v("Rack Entry")]),
                        _vm._v(" "),
                        _c(
                          "el-form-item",
                          {
                            class: _vm.errors["rack.weight"]
                              ? "is-error is-required"
                              : "",
                            attrs: { label: "Weight" }
                          },
                          [
                            _c("el-input", {
                              attrs: { required: "" },
                              model: {
                                value: _vm.form.rack.weight,
                                callback: function($$v) {
                                  _vm.$set(_vm.form.rack, "weight", $$v)
                                },
                                expression: "form.rack.weight"
                              }
                            }),
                            _vm._v(" "),
                            _vm._l(_vm.errors["rack.weight"], function(error) {
                              return _vm.errors["rack.weight"]
                                ? _c(
                                    "div",
                                    { staticClass: "el-form-item__error" },
                                    [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(error) +
                                          "\n                                    "
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
                            class: _vm.errors["rack.rack_id"]
                              ? "is-error is-required"
                              : "",
                            attrs: { label: "Rack Number" }
                          },
                          [
                            _c(
                              "el-select",
                              {
                                model: {
                                  value: _vm.form.rack.rack_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form.rack, "rack_id", $$v)
                                  },
                                  expression: "form.rack.rack_id"
                                }
                              },
                              _vm._l(_vm.racks, function(rack, index, key) {
                                return _c("el-option", {
                                  key: key,
                                  attrs: { label: rack.name, value: rack.id }
                                })
                              })
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.errors["rack.rack_id"], function(error) {
                              return _vm.errors["rack.rack_id"]
                                ? _c(
                                    "div",
                                    { staticClass: "el-form-item__error" },
                                    [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(error) +
                                          "\n                                    "
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
                  ])
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
                      [
                        _vm._v(
                          _vm._s(_vm.$route.meta.type) +
                            "\n                        "
                        )
                      ]
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
var staticRenderFns = []
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