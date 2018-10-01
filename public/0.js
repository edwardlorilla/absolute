webpackJsonp([0],{

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(16)
/* script */
var __vue_script__ = __webpack_require__(854)
/* template */
var __vue_template__ = __webpack_require__(857)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Requests\\create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e0f0330e", Component.options)
  } else {
    hotAPI.reload("data-v-e0f0330e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(16)
/* script */
var __vue_script__ = __webpack_require__(858)
/* template */
var __vue_template__ = __webpack_require__(859)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Requests\\edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d1ad1c72", Component.options)
  } else {
    hotAPI.reload("data-v-d1ad1c72", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Edward Lance Lorilla on 7/28/2018.
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            isDisabled: false,
            labelPosition: 'left',
            errors: []
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {

        if (to.params.id) {
            axios.get('/api/' + to.meta.url + '/' + to.params.id).then(function (response) {
                next(function (vm) {
                    return vm.setData(response.data);
                });
            });
        } else {
            next();
        }
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var vm = this;

        if (to.params.id) {
            axios.get('/api/' + to.meta.url + '/' + to.params.id).then(function (response) {
                vm.setData(response.data);
                next();
            });
        } else {
            next();
        }
    },

    methods: {
        setData: function setData(row) {
            var vm = this;
            vm.optionCustomer.push({ value: row.customer.id, label: row.customer.name });
            vm.optionDoctor.push({ value: row.doctor.id, label: row.doctor.name });
            vm.form = {
                id: row.id,
                request_date: row.request_date,
                request_year_code: row.request_year_code,
                remark: row.remark,
                doctor: row.doctor.id,
                customer: row.customer.id,
                products: []

                //{id: '', name: '', category_id: '', package_id: '', quantity: '', out_quantity: ''}
            };_.map(row.transactions, function (q) {
                var product = q.product;
                axios.get('/api/products/disabled/' + product.id);
                return vm.form.products.unshift({

                    id: product.id,
                    transaction_id: q.id,
                    name: product.name,
                    category_id: product.category.name,
                    package_id: product.package.name,
                    quantity: product.quantity,
                    cloneQuantity: product.quantity,
                    out_quantity: q.out_quantity
                });
            });
        }
    }
});

/***/ }),

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(16)
/* script */
var __vue_script__ = __webpack_require__(855)
/* template */
var __vue_template__ = __webpack_require__(856)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Requests\\editProduct.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64209450", Component.options)
  } else {
    hotAPI.reload("data-v-64209450", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OperationRequest__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editProduct_vue__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editProduct_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editProduct_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    beforeCreate: function beforeCreate() {
        axios.get('/api/products/mass-update');
    },

    components: {
        EditProduct: __WEBPACK_IMPORTED_MODULE_1__editProduct_vue___default.a
    },
    computed: {
        isDisabled_c: function isDisabled_c() {
            var vm = this;
            console.log(vm.form.products.length === 0);
            return vm.form.products.length === 0;
        }
    },
    mixins: [__WEBPACK_IMPORTED_MODULE_0__OperationRequest__["a" /* default */]],
    data: function data() {
        return {
            optionCustomer: [],
            loadingCustomer: false,
            select: false,
            selectCustomer: false,
            cloneQuantity: 0,
            addTable: { id: '', name: '', category_id: '', package_id: '', quantity: '', out_quantity: '' },
            columns: [{
                id: 'name',
                label: 'Transactions Name'
            }, {
                id: 'category_id',
                label: 'Category Name'
            }, {
                id: 'package_id',
                label: 'Unit'
            }, {
                id: 'quantity',
                label: 'Current Stock'
            }, {
                id: 'out_quantity',
                label: 'Quantity'
            }],
            form: {
                customer: '',
                products: [],
                name: '',
                year: '',
                request_date: '',
                request_year_code: '',
                remark: ''

            },
            loading: false,
            options: []
        };
    },

    methods: {
        onSubmitRequest: function onSubmitRequest() {
            var vm = this;
            vm.isDisabled = true;
            vm.errors = [];

            axios.post('/api/' + vm.$route.meta.url, vm.form).then(function (response) {
                vm.$message({ message: response.statusText, type: 'success' });
                vm.isDisabled = false;
                vm.$refs.form.resetFields();
                vm.form = { products: [], name: '', year: '', request_date: '', request_year_code: '', remark: '' };
                vm.$router.push({ name: "requests.print", params: { id: response.data.id } });
            }).catch(function (error) {
                if (error.response.data.errors && error.response.data.message) {
                    vm.errors = error.response.data.errors;
                    vm.$message({ message: error.response.data.message, type: 'error' });
                }
                vm.isDisabled = false;
            });
        },
        onChangeOutQuantity: function onChangeOutQuantity(e, q) {
            var vm = this;
            if (e > q) {
                vm.addTable.quantity -= e - q;
            } else {
                vm.addTable.quantity += q - e;
            }
        },
        onChange: function onChange(e) {
            var vm = this;
            vm.select = true;
            if (e) {
                vm.addTable = {
                    id: e.id,
                    name: e.name,
                    category_id: e.category.name,
                    package_id: e.package.name,
                    quantity: e.quantity,
                    out_quantity: 0
                };

                vm.cloneQuantity = e.quantity;
                vm.select = false;
            } else {
                vm.addTable = { id: '', name: '', category_id: '', package_id: '', quantity: '', out_quantity: '' };
                vm.cloneQuantity = 0;
                vm.select = false;
            }
        },
        addColumn: function addColumn() {

            var message = 'Please input the';
            var vm = this;
            if (vm.addTable.id && vm.addTable.name && vm.addTable.category_id && vm.addTable.package_id && vm.addTable.out_quantity) {
                axios.get('/api/products/disabled/' + vm.addTable.id).then(function (q) {
                    vm.form.products.unshift(_.clone(vm.addTable));
                    vm.options = [];
                    vm.addTable = { id: '', name: '', category_id: '', package_id: '', quantity: '', out_quantity: '' };
                });
            } else {

                if (!!vm.addTable.id) {
                    message += ' ID |';
                }
                if (!!vm.addTable.name) {
                    message += ' Name |';
                }
                if (!!vm.addTable.category_id) {
                    message += ' Category |';
                }
                if (!!vm.addTable.package_id) {
                    message += ' Package |';
                }
                vm.$message({
                    message: message,
                    type: 'warning'
                });
            }
        },

        onSearchCustomer: _.debounce(function (query, vm) {
            axios.get('/api/search/customers?search=' + query).then(function (q) {
                vm.loadingCustomer = false;
                vm.optionCustomer = q.data.map(function (item) {
                    return { value: item.id, label: item.name };
                });
            }).catch(function () {
                vm.loadingCustomer = false;
            });
        }, 350),
        onSearch: _.debounce(function (query, vm) {
            axios.get('/api/search/request-medicine?search=' + query).then(function (q) {
                vm.loading = false;
                vm.options = q.data.map(function (item) {
                    return { value: item, label: item.name };
                });
            }).catch(function () {
                vm.loading = false;
            });
        }, 350),
        search_: function search_(query) {
            var vm = this;

            if (query !== '') {
                vm.loading = true;
                vm.onSearch(query, vm);
            } else {
                vm.loading = false;
                vm.option = [];
            }
        },
        searchCustomer: function searchCustomer(query) {
            var vm = this;

            if (query !== '') {
                vm.loadingCustomer = true;
                vm.onSearch(query, vm);
            } else {
                vm.loadingCustomer = false;
                vm.optionCustomer = [];
            }
        }
    }
});

/***/ }),

/***/ 855:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['item', 'max'],
    data: function data() {
        return {
            edit_: false
        };
    },

    methods: {
        onChangeOutQuantity: function onChangeOutQuantity(e, q) {
            var vm = this;
            if (e > q) {
                vm.item.quantity -= e - q;
            } else {
                vm.item.quantity += q - e;
            }
        },
        onEdit: function onEdit() {
            var vm = this;
            vm.edit_ = !vm.edit_;
        }
    }
});

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("tr", [
    _c(
      "td",
      [
        _vm.edit_
          ? _c("el-input", {
              attrs: { placeholder: "Product Name" },
              model: {
                value: _vm.item.name,
                callback: function($$v) {
                  _vm.$set(_vm.item, "name", $$v)
                },
                expression: "item.name"
              }
            })
          : _c("label", [_vm._v(_vm._s(_vm.item.name))])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "td",
      [
        _vm.edit_
          ? _c("el-input", {
              attrs: { placeholder: "Category Name" },
              model: {
                value: _vm.item.category_id,
                callback: function($$v) {
                  _vm.$set(_vm.item, "category_id", $$v)
                },
                expression: "item.category_id"
              }
            })
          : _c("label", [_vm._v(_vm._s(_vm.item.category_id))])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "td",
      [
        _vm.edit_
          ? _c("el-input", {
              attrs: { placeholder: "Unit" },
              model: {
                value: _vm.item.package_id,
                callback: function($$v) {
                  _vm.$set(_vm.item, "package_id", $$v)
                },
                expression: "item.package_id"
              }
            })
          : _c("label", [_vm._v(_vm._s(_vm.item.package_id))])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "td",
      [
        _vm.edit_
          ? _c("el-input", {
              attrs: {
                disabled: true,
                type: "number",
                min: "0",
                max: "addTable.quantity",
                placeholder: "Current Quantity"
              },
              model: {
                value: _vm.item.quantity,
                callback: function($$v) {
                  _vm.$set(_vm.item, "quantity", $$v)
                },
                expression: "item.quantity"
              }
            })
          : _c("label", [_vm._v(_vm._s(_vm.item.quantity))])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "td",
      [
        _vm.edit_
          ? _c("el-input-number", {
              attrs: { min: 0, max: _vm.max },
              on: { change: _vm.onChangeOutQuantity },
              model: {
                value: _vm.item.out_quantity,
                callback: function($$v) {
                  _vm.$set(_vm.item, "out_quantity", $$v)
                },
                expression: "item.out_quantity"
              }
            })
          : _c("label", [_vm._v(_vm._s(_vm.item.out_quantity))])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "td",
      [
        _c(
          "el-button",
          { attrs: { type: "primary" }, on: { click: _vm.onEdit } },
          [_vm._v(_vm._s(_vm.edit_ ? "Done" : "Edit"))]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-64209450", module.exports)
  }
}

/***/ }),

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-form",
    {
      ref: "form",
      attrs: {
        "label-position": _vm.labelPosition,
        size: "mini",
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
        _c("div", { staticClass: "col-lg-3" }, [
          _c(
            "div",
            {
              staticClass: "el-form-item",
              class: _vm.errors.remark ? "el-form-item--feedback is-error" : ""
            },
            [
              _c(
                "label",
                {
                  staticClass: "el-form-item__label",
                  attrs: { for: "remark" }
                },
                [_vm._v("Remark")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "el-form-item__content",
                  staticStyle: { "margin-left": "63px" }
                },
                [
                  _c("div", { staticClass: "el-input el-input--mini" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.remark,
                          expression: "form.remark"
                        }
                      ],
                      staticClass: "el-input__inner",
                      attrs: { type: "text", autocomplete: "off" },
                      domProps: { value: _vm.form.remark },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "remark", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.remark
                      ? _c("span", { staticClass: "el-input__suffix" }, [
                          _c("span", { staticClass: "el-input__suffix-inner" }),
                          _vm._v(" "),
                          _c("i", {
                            staticClass:
                              "el-input__icon el-input__validateIcon el-icon-circle-close"
                          })
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _vm.errors.remark
                    ? _c("div", { staticClass: "el-form-item__error" }, [
                        _vm._v(
                          "\n                        Please input the remark\n                    "
                        )
                      ])
                    : _vm._e()
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-3" }, [
          _c(
            "div",
            {
              staticClass: "el-form-item",
              class: _vm.errors.request_date
                ? "el-form-item--feedback is-error"
                : ""
            },
            [
              _c(
                "label",
                {
                  staticClass: "el-form-item__label",
                  attrs: { for: "request_date" }
                },
                [_vm._v("Date")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "el-form-item__content",
                  staticStyle: { "margin-left": "50px" }
                },
                [
                  _c("div", { staticClass: "el-input el-input--mini" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.request_date,
                          expression: "form.request_date"
                        }
                      ],
                      staticClass: "el-input__inner",
                      attrs: { type: "text", autocomplete: "off" },
                      domProps: { value: _vm.form.request_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "request_date",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.request_date
                      ? _c("span", { staticClass: "el-input__suffix" }, [
                          _c("span", { staticClass: "el-input__suffix-inner" }),
                          _vm._v(" "),
                          _c("i", {
                            staticClass:
                              "el-input__icon el-input__validateIcon el-icon-circle-close"
                          })
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _vm.errors.request_date
                    ? _c("div", { staticClass: "el-form-item__error" }, [
                        _vm._v(
                          "\n                        Please input the Request Data\n                    "
                        )
                      ])
                    : _vm._e()
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-3" }, [
          _c(
            "div",
            {
              staticClass: "el-form-item",
              class: _vm.errors.request_year_code
                ? "el-form-item--feedback is-error"
                : ""
            },
            [
              _c(
                "label",
                {
                  staticClass: "el-form-item__label",
                  attrs: { for: "request_year_code" }
                },
                [_vm._v("Year Code")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "el-form-item__content",
                  staticStyle: { "margin-left": "73px" }
                },
                [
                  _c("div", { staticClass: "el-input el-input--mini" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.request_year_code,
                          expression: "form.request_year_code"
                        }
                      ],
                      staticClass: "el-input__inner",
                      attrs: { type: "text", autocomplete: "off" },
                      domProps: { value: _vm.form.request_year_code },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "request_year_code",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.request_year_code
                      ? _c("span", { staticClass: "el-input__suffix" }, [
                          _c("span", { staticClass: "el-input__suffix-inner" }),
                          _vm._v(" "),
                          _c("i", {
                            staticClass:
                              "el-input__icon el-input__validateIcon el-icon-circle-close"
                          })
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _vm.errors.request_year_code
                    ? _c("div", { staticClass: "el-form-item__error" }, [
                        _vm._v(
                          "\n                        Please input the Request Year Code\n                    "
                        )
                      ])
                    : _vm._e()
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12" }, [
          _c("h3", [_vm._v("Add Items")]),
          _vm._v(" "),
          _c("table", { staticClass: "table table-bordered" }, [
            _c("thead", [
              _c("tr", [
                _c("th", [_vm._v("Product Name")]),
                _vm._v(" "),
                _c("th", [_vm._v("Category Name")]),
                _vm._v(" "),
                _c("th", [_vm._v("Unit")]),
                _vm._v(" "),
                _c("th", [_vm._v("Current Stock")]),
                _vm._v(" "),
                _c("th", [_vm._v("Quantity")]),
                _vm._v(" "),
                _c("th", [_vm._v("Action")])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _c("tr", [
                  _c(
                    "td",
                    [
                      _c(
                        "el-select",
                        {
                          attrs: {
                            disabled: _vm.select,
                            remote: "",
                            clearable: "",
                            filterable: "",
                            placeholder: "Please enter a keyword",
                            "remote-method": _vm.search_,
                            loading: _vm.loading
                          },
                          model: {
                            value: _vm.addTable.name,
                            callback: function($$v) {
                              _vm.$set(_vm.addTable, "name", $$v)
                            },
                            expression: "addTable.name"
                          }
                        },
                        _vm._l(_vm.options, function(item, index) {
                          return _c("el-option", {
                            key: index,
                            attrs: {
                              "value-key": item.value.id,
                              label: item.label,
                              value: item.value
                            }
                          })
                        })
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c("el-input", {
                        attrs: { type: "text", placeholder: "Category Name" },
                        model: {
                          value: _vm.addTable.category_id,
                          callback: function($$v) {
                            _vm.$set(_vm.addTable, "category_id", $$v)
                          },
                          expression: "addTable.category_id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c("el-input", {
                        attrs: { type: "text", placeholder: "Unit" },
                        model: {
                          value: _vm.addTable.package_id,
                          callback: function($$v) {
                            _vm.$set(_vm.addTable, "package_id", $$v)
                          },
                          expression: "addTable.package_id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c("el-input", {
                        attrs: {
                          disabled: true,
                          type: "number",
                          min: "0",
                          max: "addTable.quantity",
                          placeholder: "Current Quantity"
                        },
                        model: {
                          value: _vm.addTable.quantity,
                          callback: function($$v) {
                            _vm.$set(_vm.addTable, "quantity", $$v)
                          },
                          expression: "addTable.quantity"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c("el-input-number", {
                        attrs: { min: 0, max: _vm.cloneQuantity },
                        on: { change: _vm.onChangeOutQuantity },
                        model: {
                          value: _vm.addTable.out_quantity,
                          callback: function($$v) {
                            _vm.$set(_vm.addTable, "out_quantity", $$v)
                          },
                          expression: "addTable.out_quantity"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "el-button",
                        {
                          attrs: {
                            type: "primary",
                            disabled: _vm.addTable.out_quantity === 0
                          },
                          on: { click: _vm.addColumn }
                        },
                        [_vm._v("Add\n                        ")]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm._l(_vm.form.products, function(item, index) {
                  return _c("edit-product", {
                    key: index,
                    attrs: { max: _vm.cloneQuantity, item: item }
                  })
                })
              ],
              2
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "el-form-item",
        [
          _c(
            "el-button",
            {
              attrs: {
                type: "primary",
                disabled: _vm.isDisabled_c,
                loading: _vm.isDisabled
              },
              on: { click: _vm.onSubmitRequest }
            },
            [_vm._v(_vm._s(_vm.$route.meta.type))]
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              attrs: { disabled: _vm.isDisabled },
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e0f0330e", module.exports)
  }
}

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OperationRequest__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editProduct_vue__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editProduct_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editProduct_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    beforeCreate: function beforeCreate() {
        axios.get('/api/products/mass-update');
    },

    components: {
        EditProduct: __WEBPACK_IMPORTED_MODULE_1__editProduct_vue___default.a
    },
    mixins: [__WEBPACK_IMPORTED_MODULE_0__OperationRequest__["a" /* default */]],
    data: function data() {
        return {
            option: {
                penColor: "rgb(0, 0, 0)",
                backgroundColor: "rgb(255,255,255)"
            },
            request_id: 1,
            dialogVisible: false,
            optionCustomer: [],
            loadingCustomer: false,
            selectCustomer: false,
            optionDoctor: [],
            loadingDoctor: false,
            selectDoctor: false,
            select: false,
            cloneQuantity: 0,
            addTable: { id: '', name: '', category_id: '', package_id: '', quantity: '', out_quantity: '' },
            columns: [{
                id: 'name',
                label: 'Transactions Name'
            }, {
                id: 'category_id',
                label: 'Category Name'
            }, {
                id: 'package_id',
                label: 'Unit'
            }, {
                id: 'quantity',
                label: 'Current Stock'
            }, {
                id: 'out_quantity',
                label: 'Quantity'
            }],
            form: {
                products: [],
                doctor: '',
                customer: '',
                doctorSign: '',
                request_date: '',
                request_year_code: '',
                remark: ''

            },
            loading: false,
            options: []
        };
    },

    methods: {
        dataURItoBlob: function dataURItoBlob(dataURI) {
            var byteString = atob(dataURI.split(',')[1]);
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            var blob = new Blob([ab], { type: mimeString });
            return blob;
        },
        save: function save() {
            var _this = this;
            var png = _this.$refs.signature.save();
            var data = new FormData();
            data.append('file', _this.dataURItoBlob(png), 'file.png');
            data.append('request_id', _this.request_id);
            axios.post('/api/signs', data).then(function (response) {
                _this.dialogVisible = false;
                _this.clear();
                _this.$router.push({ name: "requests.print", params: { id: _this.request_id } });
            });
        },
        clear: function clear() {
            var _this = this;
            _this.$refs.signature.clear();
        },
        undo: function undo() {
            var _this = this;
            _this.$refs.signature.undo();
        },
        handleClose: function handleClose(done) {
            var vm = this;
            this.$confirm('Are you sure to close this dialog?').then(function (_) {
                vm.dialogVisible = false;
                done();
            }).catch(function (_) {});
        },
        onSubmitRequest: function onSubmitRequest() {
            var vm = this,
                n = new Date(),
                y = n.getFullYear(),
                m = n.getMonth() + 1,
                d = n.getDate();
            vm.isDisabled = true;
            vm.errors = [];
            vm.form.year = y;
            vm.form.request_date = m + "/" + d + "/" + y;
            vm.form.request_year_code = y;
            axios({
                method: vm.$route.params.id ? 'PUT' : 'POST',
                url: '/api/' + (vm.$route.params.id ? vm.$route.meta.url + '/' + vm.$route.params.id : '' + vm.$route.meta.url),
                data: vm.form
            }).then(function (response) {
                vm.$message({ message: response.statusText, type: 'success' });
                vm.isDisabled = false;
                vm.form = {
                    products: [],
                    name: '',
                    year: '',
                    request_date: '',
                    request_year_code: '',
                    remark: ''
                };
                vm.dialogVisible = true;
                vm.request_id = response.data.id;
            }).catch(function (error) {
                if (error.response.data.errors && error.response.data.message) {
                    vm.errors = error.response.data.errors;
                    vm.$message({ message: error.response.data.message, type: 'error' });
                }
                vm.isDisabled = false;
            });
        },
        onChangeOutQuantity: function onChangeOutQuantity(e, q) {
            var vm = this;
            if (e > q) {
                vm.addTable.quantity -= e - q;
            } else {
                vm.addTable.quantity += q - e;
            }
        },
        onChange: function onChange(e) {
            var vm = this;
            vm.select = true;
            if (e) {
                vm.addTable = {
                    id: e.id,
                    name: e.name,
                    category_id: e.category.name,
                    package_id: e.package.name,
                    quantity: e.quantity,
                    out_quantity: 0
                };

                vm.cloneQuantity = e.quantity;
                vm.select = false;
            } else {
                vm.addTable = { id: '', name: '', category_id: '', package_id: '', quantity: '', out_quantity: '' };
                vm.cloneQuantity = 0;
                vm.select = false;
            }
        },
        addColumn: function addColumn() {

            var message = 'Please input the';
            var vm = this;
            if (vm.addTable.id && vm.addTable.name && vm.addTable.category_id && vm.addTable.package_id && vm.addTable.out_quantity) {
                axios.get('/api/products/disabled/' + vm.addTable.id).then(function (q) {
                    vm.form.products.unshift(_.clone(vm.addTable));
                    vm.options = [];
                    vm.addTable = {
                        id: '',
                        name: '',
                        category_id: '',
                        package_id: '',
                        quantity: '',
                        out_quantity: ''
                    };
                });
            } else {

                if (!!vm.addTable.id) {
                    message += ' ID |';
                }
                if (!!vm.addTable.name) {
                    message += ' Name |';
                }
                if (!!vm.addTable.category_id) {
                    message += ' Category |';
                }
                if (!!vm.addTable.package_id) {
                    message += ' Package |';
                }
                vm.$message({
                    message: message,
                    type: 'warning'
                });
            }
        },

        onSearchCustomer: _.debounce(function (query, vm) {
            axios.get('/api/search/customers?search=' + query).then(function (q) {
                vm.loadingCustomer = false;
                vm.optionCustomer = q.data.map(function (item) {
                    return { value: item.id, label: item.name };
                });
            }).catch(function () {
                vm.loadingCustomer = false;
            });
        }, 350),
        onSearchDoctor: _.debounce(function (query, vm) {
            axios.get('/api/search/doctors?search=' + query).then(function (q) {
                vm.loadingDoctor = false;
                vm.optionDoctor = q.data.map(function (item) {
                    return { value: item.id, label: item.name };
                });
            }).catch(function () {
                vm.loadingDoctor = false;
            });
        }, 350),
        onSearch: _.debounce(function (query, vm) {
            axios.get('/api/search/request-medicine?search=' + query).then(function (q) {
                vm.loading = false;
                vm.options = q.data.map(function (item) {
                    return { value: item, label: item.name };
                });
            }).catch(function () {
                vm.loading = false;
            });
        }, 350),
        searchCustomer: function searchCustomer(query) {
            var vm = this;

            if (query !== '') {
                vm.loadingCustomer = true;
                vm.onSearchCustomer(query, vm);
            } else {
                vm.loadingCustomer = false;
                vm.optionCustomer = [];
            }
        },
        searchDoctor: function searchDoctor(query) {
            var vm = this;

            if (query !== '') {
                vm.loadingDoctor = true;
                vm.onSearchDoctor(query, vm);
            } else {
                vm.loadingDoctor = false;
                vm.optionDoctor = [];
            }
        },
        search_: function search_(query) {
            var vm = this;

            if (query !== '') {
                vm.loading = true;
                vm.onSearch(query, vm);
            } else {
                vm.loading = false;
                vm.option = [];
            }
        }
    }
});

/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-dialog",
        {
          attrs: {
            title: "Signature",
            visible: _vm.dialogVisible,
            width: "450px",
            "before-close": _vm.handleClose
          },
          on: {
            "update:visible": function($event) {
              _vm.dialogVisible = $event
            }
          }
        },
        [
          _c("vue-signature", {
            ref: "signature",
            staticStyle: {
              display: "block",
              "margin-right": "auto",
              "margin-left": "auto",
              border: "1px solid #000000"
            },
            attrs: { sigOption: _vm.option, w: "400px", h: "200px" }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c("el-button", { on: { click: _vm.clear } }, [_vm._v("Cancel")]),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.undo } }, [_vm._v("Undo")]),
              _vm._v(" "),
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.save } },
                [_vm._v("Confirm")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form",
        {
          ref: "form",
          attrs: {
            "label-position": _vm.labelPosition,
            size: "mini",
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
            _c("div", { staticClass: "col-lg-4" }, [
              _c(
                "div",
                {
                  staticClass: "el-form-item",
                  class: _vm.errors.customer
                    ? "el-form-item--feedback is-error"
                    : ""
                },
                [
                  _c(
                    "label",
                    {
                      staticClass: "el-form-item__label",
                      attrs: { for: "customer" }
                    },
                    [_vm._v("Customer")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "el-form-item__content",
                      staticStyle: { "margin-left": "73px" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "el-input el-input--mini" },
                        [
                          _c(
                            "el-select",
                            {
                              attrs: {
                                disabled: _vm.selectCustomer,
                                remote: "",
                                clearable: "",
                                filterable: "",
                                placeholder: "Please enter a keyword",
                                "remote-method": _vm.searchCustomer,
                                "default-first-option": "",
                                loading: _vm.loadingCustomer
                              },
                              model: {
                                value: _vm.form.customer,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "customer", $$v)
                                },
                                expression: "form.customer"
                              }
                            },
                            _vm._l(_vm.optionCustomer, function(item, index) {
                              return _c("el-option", {
                                key: index,
                                attrs: { label: item.label, value: item.value }
                              })
                            })
                          ),
                          _vm._v(" "),
                          _vm.errors.remark
                            ? _c("span", { staticClass: "el-input__suffix" }, [
                                _c("span", {
                                  staticClass: "el-input__suffix-inner"
                                }),
                                _vm._v(" "),
                                _c("i", {
                                  staticClass:
                                    "el-input__icon el-input__validateIcon el-icon-circle-close"
                                })
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.errors.customer
                        ? _c("div", { staticClass: "el-form-item__error" }, [
                            _vm._v(
                              "\n                            Please input the customer\n                        "
                            )
                          ])
                        : _vm._e()
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4" }, [
              _c(
                "div",
                {
                  staticClass: "el-form-item",
                  class: _vm.errors.doctor
                    ? "el-form-item--feedback is-error"
                    : ""
                },
                [
                  _c(
                    "label",
                    {
                      staticClass: "el-form-item__label",
                      attrs: { for: "doctor" }
                    },
                    [_vm._v("Doctor")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "el-form-item__content",
                      staticStyle: { "margin-left": "73px" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "el-input el-input--mini" },
                        [
                          _c(
                            "el-select",
                            {
                              attrs: {
                                disabled: _vm.selectDoctor,
                                remote: "",
                                clearable: "",
                                filterable: "",
                                placeholder: "Please enter a keyword",
                                "remote-method": _vm.searchDoctor,
                                "default-first-option": "",
                                loading: _vm.loadingDoctor
                              },
                              model: {
                                value: _vm.form.doctor,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "doctor", $$v)
                                },
                                expression: "form.doctor"
                              }
                            },
                            _vm._l(_vm.optionDoctor, function(item, index) {
                              return _c("el-option", {
                                key: index,
                                attrs: { label: item.label, value: item.value }
                              })
                            })
                          ),
                          _vm._v(" "),
                          _vm.errors.remark
                            ? _c("span", { staticClass: "el-input__suffix" }, [
                                _c("span", {
                                  staticClass: "el-input__suffix-inner"
                                }),
                                _vm._v(" "),
                                _c("i", {
                                  staticClass:
                                    "el-input__icon el-input__validateIcon el-icon-circle-close"
                                })
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.errors.doctor
                        ? _c("div", { staticClass: "el-form-item__error" }, [
                            _vm._v(
                              "\n                            Please input the doctor\n                        "
                            )
                          ])
                        : _vm._e()
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4" }, [
              _c(
                "div",
                {
                  staticClass: "el-form-item",
                  class: _vm.errors.remark
                    ? "el-form-item--feedback is-error"
                    : ""
                },
                [
                  _c(
                    "label",
                    {
                      staticClass: "el-form-item__label",
                      attrs: { for: "remark" }
                    },
                    [_vm._v("Remark")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "el-form-item__content",
                      staticStyle: { "margin-left": "63px" }
                    },
                    [
                      _c("div", { staticClass: "el-input el-input--mini" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.remark,
                              expression: "form.remark"
                            }
                          ],
                          staticClass: "el-input__inner",
                          attrs: { type: "text", autocomplete: "off" },
                          domProps: { value: _vm.form.remark },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "remark", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.remark
                          ? _c("span", { staticClass: "el-input__suffix" }, [
                              _c("span", {
                                staticClass: "el-input__suffix-inner"
                              }),
                              _vm._v(" "),
                              _c("i", {
                                staticClass:
                                  "el-input__icon el-input__validateIcon el-icon-circle-close"
                              })
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _vm.errors.remark
                        ? _c("div", { staticClass: "el-form-item__error" }, [
                            _vm._v(
                              "\n                            Please input the remark\n                        "
                            )
                          ])
                        : _vm._e()
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-12" }, [
              _c("h3", [_vm._v("Add Items")]),
              _vm._v(" "),
              _c("table", { staticClass: "table table-bordered" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", [_vm._v("Product Name")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Category Name")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Unit")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Current Stock")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Quantity")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Action")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _c("tr", [
                      _c(
                        "td",
                        [
                          _c(
                            "el-select",
                            {
                              attrs: {
                                disabled: _vm.select,
                                remote: "",
                                clearable: "",
                                filterable: "",
                                placeholder: "Please enter a keyword",
                                "remote-method": _vm.search_,
                                loading: _vm.loading
                              },
                              on: { change: _vm.onChange },
                              model: {
                                value: _vm.addTable.name,
                                callback: function($$v) {
                                  _vm.$set(_vm.addTable, "name", $$v)
                                },
                                expression: "addTable.name"
                              }
                            },
                            _vm._l(_vm.options, function(item, index) {
                              return _c("el-option", {
                                key: index,
                                attrs: {
                                  "value-key": item.value.id,
                                  label: item.label,
                                  value: item.value
                                }
                              })
                            })
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("el-input", {
                            attrs: {
                              type: "text",
                              placeholder: "Category Name"
                            },
                            model: {
                              value: _vm.addTable.category_id,
                              callback: function($$v) {
                                _vm.$set(_vm.addTable, "category_id", $$v)
                              },
                              expression: "addTable.category_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("el-input", {
                            attrs: { type: "text", placeholder: "Unit" },
                            model: {
                              value: _vm.addTable.package_id,
                              callback: function($$v) {
                                _vm.$set(_vm.addTable, "package_id", $$v)
                              },
                              expression: "addTable.package_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("el-input", {
                            attrs: {
                              disabled: true,
                              type: "number",
                              min: "0",
                              max: "addTable.quantity",
                              placeholder: "Current Quantity"
                            },
                            model: {
                              value: _vm.addTable.quantity,
                              callback: function($$v) {
                                _vm.$set(_vm.addTable, "quantity", $$v)
                              },
                              expression: "addTable.quantity"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("el-input-number", {
                            attrs: { min: 0, max: _vm.cloneQuantity },
                            on: { change: _vm.onChangeOutQuantity },
                            model: {
                              value: _vm.addTable.out_quantity,
                              callback: function($$v) {
                                _vm.$set(_vm.addTable, "out_quantity", $$v)
                              },
                              expression: "addTable.out_quantity"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "el-button",
                            {
                              attrs: {
                                type: "primary",
                                disabled: _vm.addTable.out_quantity === 0
                              },
                              on: { click: _vm.addColumn }
                            },
                            [_vm._v("Add\n                            ")]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.form.products, function(item, index) {
                      return _c("edit-product", {
                        key: index,
                        attrs: { max: item.cloneQuantity, item: item }
                      })
                    })
                  ],
                  2
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  attrs: {
                    type: "primary",
                    disabled: _vm.form.products.length === 0,
                    loading: _vm.isDisabled
                  },
                  on: { click: _vm.onSubmitRequest }
                },
                [_vm._v(_vm._s(_vm.$route.meta.type))]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { loading: _vm.isDisabled },
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d1ad1c72", module.exports)
  }
}

/***/ })

});