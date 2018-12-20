webpackJsonp([15],{

/***/ 845:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(983)
/* template */
var __vue_template__ = __webpack_require__(984)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Pending\\UserRequestView\\recieve_office_supply.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bfd6214a", Component.options)
  } else {
    hotAPI.reload("data-v-bfd6214a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(879)
/* template */
var __vue_template__ = __webpack_require__(880)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Pending\\UserRequestView\\edit_supplies.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d8270a62", Component.options)
  } else {
    hotAPI.reload("data-v-d8270a62", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 879:
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

/***/ 880:
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
    require("vue-hot-reload-api")      .rerender("data-v-d8270a62", module.exports)
  }
}

/***/ }),

/***/ 983:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_supplies_vue__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_supplies_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__edit_supplies_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        axios.get('/api/supplies/mass-update');
    },

    components: {
        EditSupplies: __WEBPACK_IMPORTED_MODULE_0__edit_supplies_vue___default.a
    },
    data: function data() {
        return {
            isDisabled: false,
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
                supplies: [],
                division: '',
                request_date: '',
                request_year_code: ''

            },
            loading: false,
            options: [],
            labelPosition: 'left',
            errors: []
        };
    },

    methods: {
        addDivision: function addDivision() {
            var vm = this;
            vm.isDisabled = true;
            axios.post('/api/divisions', {
                name: vm.division_name,
                supply_division: vm.division_supply
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
                url: '/api/' + (vm.$route.params.id ? vm.$route.meta.url + '/' + vm.$route.params.id : vm.$route.meta.url + '?type=0'),
                data: vm.form
            }).then(function (response) {
                vm.$message({ message: 'Your request of office supply currently under review.', type: 'success' });
                vm.isDisabled = false;
                vm.form = {
                    supplies: [],
                    name: '',
                    year: '',
                    request_date: '',
                    request_year_code: ''
                };
                vm.dialogVisible = true;
                vm.request_id = response.data.id;
                //vm.$router.push({name: "requests.print", params: {id: vm.request_id}})
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
                    description: e.description,
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
            if (vm.addTable.id && vm.addTable.name && vm.addTable.out_quantity) {
                axios.get('/api/supplies/disabled/' + vm.addTable.id).then(function (q) {
                    vm.form.supplies.unshift(_.clone(vm.addTable));
                    vm.options = [];
                    vm.addTable = {
                        id: '',
                        name: '',
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
            axios.get('/api/search/supplies?search=' + query + '&type=0').then(function (q) {
                vm.loading = false;
                vm.options = q.data.map(function (item) {
                    return { value: item, label: item.name };
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

/***/ 984:
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
        _c("div", { staticClass: "col-sm-12" }, [
          _c("h3", [_vm._v("Add Items")]),
          _vm._v(" "),
          _c("table", { staticClass: "table table-bordered" }, [
            _c("thead", [
              _c("tr", [
                _c("th", [_vm._v("Product Name")]),
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
                            "value-key": "id",
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
                            attrs: { label: item.label, value: item.value }
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
                _vm._l(_vm.form.supplies, function(item, index) {
                  return _c("edit-supplies", {
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
                disabled: !_vm.form.supplies.length,
                loading: _vm.isDisabled
              },
              on: { click: _vm.onSubmitRequest }
            },
            [_vm._v("Submit\n        ")]
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-bfd6214a", module.exports)
  }
}

/***/ })

});