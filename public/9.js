webpackJsonp([9],{

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(865)
/* template */
var __vue_template__ = __webpack_require__(868)
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

/***/ 858:
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

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(866)
/* template */
var __vue_template__ = __webpack_require__(867)
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

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OperationRequest__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editProduct_vue__ = __webpack_require__(859);
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
            optionDivision: [],
            loadingDivision: false,
            selectDivision: false,
            isAddDivision: false,
            division_name: '',
            division_supply: '',
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
                division: '',
                request_date: '',
                request_year_code: ''

            },
            loading: false,
            options: []
        };
    },

    methods: {
        addDivision: function addDivision() {
            var vm = this;
            vm.isDisabled = true;
            axios.post('/api/divisions', {
                name: vm.division_name,
                supply_division: vm.division_supply,
                station: ''
            }).then(function (response) {
                vm.$message({ message: response.statusText, type: 'success' });
                vm.isAddDivision = false;
                vm.isDisabled = false;
                vm.optionDivision.push({ value: response.data.id, label: response.data.name });
                vm.form.division = response.data.id;
            }).catch(function (error) {
                if (error.response.data.errors && error.response.data.message) {
                    vm.$message({ message: error.response.data.message, type: 'error' });
                    vm.isAddDivision = false;
                }
                vm.isDisabled = false;
            });
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
                    request_year_code: ''
                };
                vm.dialogVisible = true;
                vm.request_id = response.data.id;
                vm.$router.push({ name: "requests.print", params: { id: vm.request_id } });
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
                    name: e.medicine.name,
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

        onSearchDivision: _.debounce(function (query, vm) {
            axios.get('/api/search/divisions?search=' + query).then(function (q) {
                vm.loadingDivision = false;
                vm.optionDivision = q.data.map(function (item) {
                    return { value: item.id, label: item.name };
                });
            }).catch(function () {
                vm.loadingDivision = false;
            });
        }, 350),
        onSearch: _.debounce(function (query, vm) {
            vm.loading = true;
            axios.get('/api/search/request-medicine?search=' + query).then(function (q) {
                vm.loading = false;
                vm.options = q.data.map(function (item) {
                    return { value: item, label: item.medicine.name };
                });
            }).catch(function () {
                vm.loading = false;
            });
        }, 350),
        searchDivision: function searchDivision(query) {
            var vm = this;

            if (query !== '') {
                vm.loadingDivision = true;
                vm.onSearchDivision(query, vm);
            } else {
                vm.loadingDivision = false;
                vm.optionDivision = [];
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

/***/ 866:
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

/***/ 867:
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

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
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
            _c("div", { staticClass: "col-lg-5" }, [
              _c("div", { staticClass: "form-group" }, [
                !_vm.isAddDivision
                  ? _c(
                      "div",
                      [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm" }, [
                            _c(
                              "label",
                              {
                                staticClass: "el-form-item__label",
                                attrs: { for: "division" }
                              },
                              [_vm._v("Division")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm text-right" }, [
                            !_vm.isAddDivision
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-sm btn-link",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        _vm.isAddDivision = !_vm.isAddDivision
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Add Division\n                                "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "el-select",
                          {
                            staticStyle: { width: "100%" },
                            attrs: {
                              disabled: _vm.selectDivision,
                              remote: "",
                              clearable: "",
                              filterable: "",
                              placeholder: "Please enter a keyword",
                              "remote-method": _vm.searchDivision,
                              "default-first-option": "",
                              loading: _vm.loadingDivision
                            },
                            model: {
                              value: _vm.form.division,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "division", $$v)
                              },
                              expression: "form.division"
                            }
                          },
                          _vm._l(_vm.optionDivision, function(item, index) {
                            return _c("el-option", {
                              key: index,
                              attrs: { label: item.label, value: item.value }
                            })
                          })
                        )
                      ],
                      1
                    )
                  : _c("div", [
                      _c("div", { staticClass: "input-group input-group-sm" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.division_name,
                              expression: "division_name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { placeholder: "Division Name", type: "text" },
                          domProps: { value: _vm.division_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.division_name = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.division_supply,
                              expression: "division_supply"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            placeholder: "Supply Division Name",
                            type: "text"
                          },
                          domProps: { value: _vm.division_supply },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.division_supply = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "input-group-append" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-success",
                              attrs: { type: "button" },
                              on: { click: _vm.addDivision }
                            },
                            [_vm._v("Create Division")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-default",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.isAddDivision = false
                                }
                              }
                            },
                            [_vm._v("Cancel")]
                          )
                        ])
                      ])
                    ])
              ])
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
                [_vm._v(_vm._s(_vm.$route.meta.type) + "\n            ")]
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
                [_vm._v("Back")]
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