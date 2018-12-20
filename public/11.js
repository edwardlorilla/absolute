webpackJsonp([11],{

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(996)
/* template */
var __vue_template__ = __webpack_require__(997)
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
Component.options.__file = "resources\\assets\\js\\components\\Supplies\\supply_request.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d5f8307", Component.options)
  } else {
    hotAPI.reload("data-v-4d5f8307", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(882)
/* template */
var __vue_template__ = __webpack_require__(883)
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
Component.options.__file = "resources\\assets\\js\\components\\Supplies\\edit_supplies.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06d2c16c", Component.options)
  } else {
    hotAPI.reload("data-v-06d2c16c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 882:
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

/***/ 883:
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
    require("vue-hot-reload-api")      .rerender("data-v-06d2c16c", module.exports)
  }
}

/***/ }),

/***/ 996:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_supplies_vue__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_supplies_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__edit_supplies_vue__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: {
        EditSupplies: __WEBPACK_IMPORTED_MODULE_0__edit_supplies_vue___default.a
    },
    beforeCreate: function beforeCreate() {
        axios.get('/api/supplies/mass-update');
    },
    data: function data() {
        return {
            isAddDivision: false,
            isAddSource: false,
            isAddReceive: false,
            receive_select: '',
            division_select: '',
            source_select: '',
            sources: [],
            divisions: [],
            supplies: [],
            locations: [],
            cloneQuantity: 0,
            loading: false,
            options: [],
            select: false,
            addTable: { id: '', name: '', quantity: '', out_quantity: '', remarks: '' },
            isDisabled: false,
            source_name: '',
            division_name: '',
            receive_name: '',
            division_supply: ''
        };
    },

    methods: {
        postRequest: function postRequest() {

            var vm = this;
            vm.isDisabled = true;
            var formData = new FormData(vm.$refs.form);
            var jsonObject = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = formData.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _ref = _step.value;

                    var _ref2 = _slicedToArray(_ref, 2);

                    var key = _ref2[0];
                    var value = _ref2[1];

                    jsonObject[key] = value;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            jsonObject['id'] = vm.$route.params.id ? vm.$route.params.id : '';
            jsonObject['division_id'] = vm.division_select;
            jsonObject['source_id'] = vm.source_select;
            jsonObject['location_id'] = vm.receive_select;
            jsonObject['supplies'] = vm.supplies;
            axios.post('/api/requisitions', jsonObject).then(function (response) {

                vm.$message({ message: response.statusText, type: 'success' });
                vm.isDisabled = false;
                vm.$router.push({ name: "supplies.print_requisition", params: { id: response.data.id } });
            }).catch(function (error) {
                vm.$message({ message: error.response.data.message, type: 'error' });
                vm.isDisabled = false;
            });
        },
        addDivision: function addDivision() {
            var vm = this;
            vm.isDisabled = true;
            axios.post('/api/divisions', { name: vm.division_name, supply_division: vm.division_supply }).then(function (response) {
                vm.$message({ message: response.statusText, type: 'success' });
                vm.isAddDivision = false;
                vm.isDisabled = false;
            }).catch(function (error) {
                if (error.response.data.errors && error.response.data.message) {
                    vm.$message({ message: error.response.data.message, type: 'error' });
                    vm.isAddDivision = false;
                }
                vm.isDisabled = false;
            });
        },
        addReceive: function addReceive() {
            var vm = this;
            vm.isDisabled = true;
            axios.post('/api/locations', { name: vm.receive_name, type: 1 }).then(function (response) {
                vm.$message({ message: response.statusText, type: 'success' });
                vm.isAddReceive = false;
                vm.isDisabled = false;
            }).catch(function (error) {
                if (error.response.data.errors && error.response.data.message) {
                    vm.$message({ message: error.response.data.message, type: 'error' });
                    vm.isAddDivision = false;
                }
                vm.isDisabled = false;
            });
        },
        addSource: function addSource() {
            var vm = this;
            vm.isDisabled = true;
            axios.post('/api/sources', { name: vm.source_name }).then(function (response) {
                vm.$message({ message: response.statusText, type: 'success' });
                vm.isAddSource = false;
                vm.isDisabled = false;
            }).catch(function (error) {
                if (error.response.data.errors && error.response.data.message) {
                    vm.$message({ message: error.response.data.message, type: 'error' });
                }
                vm.isAddDivision = false;
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
        addColumn: function addColumn() {

            var message = 'Please input the';
            var vm = this;
            if (vm.addTable.id && vm.addTable.name && vm.addTable.out_quantity) {
                axios.get('/api/supplies/disabled/' + vm.addTable.id).then(function (q) {
                    vm.supplies.unshift(_.clone(vm.addTable));
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
        onChange: function onChange(e) {
            var vm = this;
            vm.select = true;
            if (e) {
                vm.addTable = {
                    id: e.id,
                    name: e.name,
                    quantity: e.quantity,
                    out_quantity: 0,
                    type: 0
                };

                vm.cloneQuantity = e.quantity;
                vm.select = false;
            } else {
                vm.addTable = { id: '', name: '', category_id: '', package_id: '', quantity: '', out_quantity: '' };
                vm.cloneQuantity = 0;
                vm.select = false;
            }
        },

        onSearch: _.debounce(function (query, vm) {
            axios.get('/api/search/request-supply?search=' + query).then(function (q) {
                vm.loading = false;
                vm.options = q.data.map(function (item) {
                    return { value: item, label: item.name };
                });
            }).catch(function () {
                vm.loading = false;
            });
        }, 350),
        onSearchReceive: _.debounce(function (query, vm) {
            axios.get('/api/search/locations/requisitions?search=' + query).then(function (q) {
                vm.loading = false;
                vm.locations = q.data.map(function (item) {
                    return { value: item, label: item.name };
                });
            }).catch(function () {
                vm.loading = false;
            });
        }, 350),
        onSearchDivision: _.debounce(function (query, vm) {
            axios.get('/api/search/divisions?search=' + query).then(function (q) {
                vm.loading = false;
                vm.divisions = q.data.map(function (item) {
                    return { value: item, label: item.name };
                });
            }).catch(function () {
                vm.loading = false;
            });
        }, 350),
        onSearchSource: _.debounce(function (query, vm) {
            axios.get('/api/search/sources?search=' + query).then(function (q) {
                vm.loading = false;
                vm.sources = q.data.map(function (item) {
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
        search_division: function search_division(query) {
            var vm = this;

            if (query !== '') {
                vm.loading = true;
                vm.onSearchDivision(query, vm);
            } else {
                vm.loading = false;
                vm.divisions = [];
            }
        },
        search_receive: function search_receive(query) {
            var vm = this;

            if (query !== '') {
                vm.loading = true;
                vm.onSearchReceive(query, vm);
            } else {
                vm.loading = false;
                vm.divisions = [];
            }
        },
        search_source: function search_source(query) {
            var vm = this;

            if (query !== '') {
                vm.loading = true;
                vm.onSearchSource(query, vm);
            } else {
                vm.loading = false;
                vm.sources = [];
            }
        }
    }
});

/***/ }),

/***/ 997:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-sm-12" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c(
            "form",
            {
              ref: "form",
              attrs: { id: "myform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.postRequest($event)
                }
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("div", { staticClass: "row" }, [
                        _vm._m(1),
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
                                    "Add Division\n                                        "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      !_vm.isAddDivision
                        ? _c(
                            "el-select",
                            {
                              staticStyle: { width: "100%" },
                              attrs: {
                                disabled: _vm.isDisabled,
                                filterable: "",
                                remote: "",
                                placeholder: "Enter Location Name",
                                "remote-method": _vm.search_division,
                                loading: _vm.loading
                              },
                              model: {
                                value: _vm.division_select,
                                callback: function($$v) {
                                  _vm.division_select = $$v
                                },
                                expression: "division_select"
                              }
                            },
                            _vm._l(_vm.divisions, function(item, index) {
                              return _c("el-option", {
                                key: index,
                                attrs: {
                                  label: item.label,
                                  value: item.value.id
                                }
                              })
                            })
                          )
                        : _c("div", [
                            _c(
                              "div",
                              { staticClass: "input-group input-group-sm" },
                              [
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
                                  attrs: {
                                    placeholder: "Division Name",
                                    type: "text"
                                  },
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
                                    placeholder: "Supply Division",
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
                                _c(
                                  "span",
                                  { staticClass: "input-group-append" },
                                  [
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
                                  ]
                                )
                              ]
                            )
                          ])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("div", { staticClass: "row" }, [
                        _vm._m(2),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm text-right" }, [
                          !_vm.isAddSource
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn-sm btn-link",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      _vm.isAddSource = !_vm.isAddSource
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "Add Source\n                                    "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      !_vm.isAddSource
                        ? _c(
                            "el-select",
                            {
                              staticStyle: { width: "100%" },
                              attrs: {
                                disabled: _vm.isDisabled,
                                filterable: "",
                                remote: "",
                                placeholder: "Enter Location Name",
                                "remote-method": _vm.search_source,
                                loading: _vm.loading
                              },
                              model: {
                                value: _vm.source_select,
                                callback: function($$v) {
                                  _vm.source_select = $$v
                                },
                                expression: "source_select"
                              }
                            },
                            _vm._l(_vm.sources, function(item, index) {
                              return _c("el-option", {
                                key: index,
                                attrs: {
                                  label: item.label,
                                  value: item.value.id
                                }
                              })
                            })
                          )
                        : _c("div", [
                            _c(
                              "div",
                              { staticClass: "input-group input-group-sm" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.source_name,
                                      expression: "source_name"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text" },
                                  domProps: { value: _vm.source_name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.source_name = $event.target.value
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "input-group-append" },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-success",
                                        attrs: { type: "button" },
                                        on: { click: _vm.addSource }
                                      },
                                      [_vm._v("Create Source")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-default",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            _vm.isAddSource = false
                                          }
                                        }
                                      },
                                      [_vm._v("Cancel")]
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("div", { staticClass: "row" }, [
                        _vm._m(4),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm text-right" }, [
                          !_vm.isAddReceive
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn-sm btn-link",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      _vm.isAddReceive = !_vm.isAddReceive
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "Add Received By\n                                    "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      !_vm.isAddReceive
                        ? _c(
                            "el-select",
                            {
                              staticStyle: { width: "100%" },
                              attrs: {
                                disabled: _vm.isDisabled,
                                filterable: "",
                                remote: "",
                                placeholder: "Enter Receive Name",
                                "remote-method": _vm.search_receive,
                                loading: _vm.loading
                              },
                              model: {
                                value: _vm.receive_select,
                                callback: function($$v) {
                                  _vm.receive_select = $$v
                                },
                                expression: "receive_select"
                              }
                            },
                            _vm._l(_vm.locations, function(item, index) {
                              return _c("el-option", {
                                key: index,
                                attrs: {
                                  label: item.label,
                                  value: item.value.id
                                }
                              })
                            })
                          )
                        : _c("div", [
                            _c(
                              "div",
                              { staticClass: "input-group input-group-sm" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.receive_name,
                                      expression: "receive_name"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text" },
                                  domProps: { value: _vm.receive_name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.receive_name = $event.target.value
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "input-group-append" },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-success",
                                        attrs: { type: "button" },
                                        on: { click: _vm.addReceive }
                                      },
                                      [_vm._v("Create Receive")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-default",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            _vm.isAddReceive = false
                                          }
                                        }
                                      },
                                      [_vm._v("Cancel")]
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("table", { staticClass: "table table-bordered" }, [
                _vm._m(5),
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
                          _c("el-input", {
                            attrs: { type: "text", placeholder: "Remarks" },
                            model: {
                              value: _vm.addTable.remarks,
                              callback: function($$v) {
                                _vm.$set(_vm.addTable, "remarks", $$v)
                              },
                              expression: "addTable.remarks"
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
                    _vm._l(_vm.supplies, function(item, index) {
                      return _c("edit-supplies", {
                        key: index,
                        attrs: { max: item.cloneQuantity, item: item }
                      })
                    })
                  ],
                  2
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _vm._m(6)
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
      _c("h3", [_vm._v("Add Items")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm" }, [
      _c("label", { attrs: { for: "division" } }, [_vm._v("Division")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm" }, [
      _c("label", { attrs: { for: "source" } }, [_vm._v("Source")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "office" } }, [_vm._v("Office")]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", id: "office", name: "office" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "code" } }, [_vm._v("Code")]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", id: "code", name: "code" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "responsibilities" } }, [
            _vm._v("Responsibilities")
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: {
              type: "text",
              id: "responsibilities",
              name: "responsibilities"
            }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm" }, [
      _c("label", { attrs: { for: "receive" } }, [_vm._v("Received By")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Supply Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Current Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Remarks")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { form: "myform" } },
        [_vm._v("Submit")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4d5f8307", module.exports)
  }
}

/***/ })

});