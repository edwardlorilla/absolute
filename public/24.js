webpackJsonp([24],{

/***/ 1012:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1013);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(98)("d1adbbe4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76e634d6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./checkin.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76e634d6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./checkin.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1013:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.el-table .warning-row {\n    background: oldlace;\n}\n.el-table .success-row {\n    background: aliceblue;\n}\n.el-input-group__prepend {\n    background-color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var getData = function getData(url, page, callback) {
    axios.get('' + url, { params: page }).then(function (response) {
        callback(null, { data: response.data, page: page });
    }).catch(function (error) {
        if (error) {
            callback(error, error.response);
        }
    });
};
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var sortOrders = {};
        return {
            supplies: [],
            supply: {},
            product: {},
            date_delivered: '',
            po_number: '',
            pr_number: '',
            expiry_date: '',
            quantity_per: '',
            quantity: 0,
            unit_cost: 0,
            units: [],
            unit: {},
            dispensing_unit: {},
            dispensing_units: [],
            isAddDispensingUnit: false,
            isAddSource: false,
            isAddProduct: false,
            isAddUnit: false,
            unit_id: '',
            unit_name: '',
            dispensing_unit_id: '',
            source_select: '',
            sources: [],
            source_name: '',
            num1: 1,
            filters: [{
                value: '',
                'search_prop': 'id' // define search_prop for backend usage.
            }, {
                value: '',
                'search_prop': 'id' // define search_prop for backend usage.
            }, {
                value: '',
                'search_prop': 'id' // define search_prop for backend usage.
            }],
            dialogMessage: { title: '', message: '' },
            dialogVisible: false,
            actionCol: {
                label: 'Action',
                props: {
                    align: 'center'
                }
            },
            isDisabled: false,
            query: {
                page: 1,
                column: 'id',
                direction: 'desc',
                per_page: 15,
                search_column: 'all',
                search_operator: 'like',
                search_input: ''
            },
            operators: {
                equal: '=',
                not_equal: '<>',
                less_than: '<',
                greater_than: '>',
                less_than_or_equal_to: '<=',
                greater_than_or_equal_to: '>=',
                in: 'IN',
                like: 'LIKE'
            },
            columns: [{}],
            sortKey: '',
            sortOrders: sortOrders,
            data: [],
            meta: {},
            links: {
                first: null,
                last: null,
                next: null,
                prev: null
            },
            error: null,
            filterKey: '',
            loading: false,
            _numberLoad: 0,
            users: [],
            tableProps: {
                rowClassName: function rowClassName(_ref) {
                    var row = _ref.row,
                        rowIndex = _ref.rowIndex;

                    if (row.type == 'OUT') {
                        return 'warning-row';
                    } else {
                        return 'success-row';
                    }
                    return '';
                }
            }
        };
    },

    computed: {
        unitCost: function unitCost() {
            var vm = this;
            return vm.quantity && vm.unit_cost ? parseFloat(vm.quantity) * parseFloat(vm.unit_cost) : 0;
        },
        nextPage: function nextPage() {
            if (!this.meta || this.meta.current_page === this.meta.last_page) {
                return;
            }
            var vm = this;
            return this.meta.current_page + 1;
        },
        prevPage: function prevPage() {
            if (!this.meta || this.meta.current_page === 1) {
                return;
            }
            var vm = this;
            return this.meta.current_page - 1;
        },
        paginatonCount: function paginatonCount() {
            if (!this.meta) {
                return;
            }
            var _meta = this.meta,
                current_page = _meta.current_page,
                last_page = _meta.last_page;

            return 'Displaying ' + current_page + ' of ' + last_page + ' rows';
        }
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        if (to.params.id) {
            getData('/api/' + to.meta.url + '/' + to.params.id, to.query, function (err, data) {
                next(function (vm) {
                    return vm.setData(err, data);
                });
            });
        } else {
            next();
        }
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var vm = this;
        if (to.params.id) {
            getData('/api/' + to.meta.url + '/' + to.params.id, to.query, function (err, data) {
                vm.setData(err, data);
                next();
            });
        } else {
            next();
        }
    },

    methods: {
        unit_m: function unit_m(request) {
            return axios.post('/api/units', request);
        },
        addUnit: function addUnit() {
            var vm = this;
            vm.isDisabled = true;
            vm.errors = [];
            vm.unit_m({ name: vm.unit_name }).then(function (response) {
                vm.$message({ message: response.statusText, type: 'success' });
                vm.units = [];
                vm.isDisabled = false;
                vm.isAddUnit = false;
            }).catch(function (error) {
                if (error.response.data.errors && error.response.data.message) {
                    vm.$message({ message: error.response.data.message, type: 'error' });
                }
                vm.isDisabled = false;
            });
        },
        search_unit: function search_unit(query) {
            var vm = this;

            if (query !== '') {
                vm.loading = true;
                vm.onSearchUnit(query, vm);
            } else {
                vm.loading = false;
                vm.units = [];
            }
        },
        search_dispensing_unit: function search_dispensing_unit(query) {
            var vm = this;

            if (query !== '') {
                vm.loading = true;
                vm.onSearchDispensingUnit(query, vm);
            } else {
                vm.loading = false;
                vm.dispensing_units = [];
            }
        },
        getUnit: function getUnit(query) {
            return axios.get('/api/search/units?search=' + query);
        },

        onSearchDispensingUnit: _.debounce(function (query, vm) {
            vm.getUnit(query).then(function (q) {
                vm.loading = false;
                vm.dispensing_units = q.data.map(function (item) {
                    return { value: item, label: item.name };
                });
            }).catch(function () {
                vm.loading = false;
            });
        }, 350),
        onSearchUnit: _.debounce(function (query, vm) {
            vm.getUnit(query).then(function (q) {
                vm.loading = false;
                vm.units = q.data.map(function (item) {
                    return { value: item, label: item.name };
                });
            }).catch(function () {
                vm.loading = false;
            });
        }, 350),
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
        search_source: function search_source(query) {
            var vm = this;

            if (query !== '') {
                vm.loading = true;
                vm.onSearchSource(query, vm);
            } else {
                vm.loading = false;
                vm.sources = [];
            }
        },

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
        clearTypeHandleChange: function clearTypeHandleChange() {
            vm.filters[2].value = '';
        },
        onSave: function onSave() {
            var vm = this,
                obj = {
                po_number: vm.po_number,
                pr_number: vm.pr_number,
                date_delivered: vm.date_delivered,
                source_id: vm.source_select,
                data: vm.supplies
            };

            axios.post('/api/supplies/purchase-order?supply_id=' + vm.$route.params.id, obj).then(function (response) {
                var data = response.data;
                data['type'] = response.type === 0 ? 'OUT' : 'IN';
                vm.data.push(data);
                vm.$message({ message: response.statusText, type: 'success' });
                vm.supplies = [];
            }).catch(function (error) {
                vm.$message({ message: error.statusText, type: 'warning' });
                vm.loading = false;
            });
        },
        onSubmit: function onSubmit() {
            var vm = this;
            var formData = new FormData(vm.$refs.form);
            var jsonObject = {};

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = formData.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _ref2 = _step.value;

                    var _ref3 = _slicedToArray(_ref2, 2);

                    var key = _ref3[0];
                    var value = _ref3[1];

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

            if (vm.$route.params.id) {
                jsonObject['id'] = vm.$route.params.id;
            }

            jsonObject['quantity_per'] = vm.quantity_per;
            jsonObject['supply_id'] = vm.supply_id;
            jsonObject['quantity'] = vm.quantity;
            jsonObject['unit_cost'] = vm.unit_cost;
            jsonObject['unit'] = vm.unit_id;
            jsonObject['dispensing_unit'] = vm.dispensing_unit_id;
            vm.supplies.push(jsonObject);
            vm.onSave();
        },

        sortBy: function sortBy(key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
        },
        loadData: _.debounce(function (event) {

            var vm = this;

            vm.loading = true;
            var option = _.clone(vm.$route.query);
            if (event.type === 'sort') {
                option.column = event.sort.prop;
                option.direction = event.sort.order == 'ascending' ? 'asc' : 'desc';
            }

            if (event.type != "init") {
                if (event.type === 'page') {
                    option.page = event.page;
                    option.per_page = event.pageSize;
                }
                if (event.type === 'filter' && !_.isEmpty(vm.filters[0].value)) {

                    option.search_column = vm.query.search_column;
                    option.search_operator = vm.query.search_operator;
                    option.search_input = vm.filters[0].value;
                } else if (event.type === 'filter' && !_.isEmpty(vm.filters[1].value)) {
                    option.user_id = vm.filters[1].value.toString();
                } else if (event.type === 'filter' && !_.isEmpty(vm.filters[2].value)) {
                    option.type = vm.filters[2].value.toString();
                } else {
                    delete option.user_id;
                    delete option.search_input;
                }

                if (_.isEmpty(vm.filters[2].value)) {
                    delete option.type;
                }

                vm.$router.push({
                    path: '' + vm.$route.path,
                    query: option
                }, function () {
                    vm.loading = false;
                    if (option.search_input == '') {
                        delete option.search_input;
                        vm.filters[1].value = '';
                    }
                }, function () {
                    vm.loading = false;
                });
            } else {
                vm.loading = false;
            }
        }, 500),
        setData: function setData(err, data) {
            var vm = this;
            if (err) {

                if (err.response.status === 404) {
                    vm.$router.push({ name: 'error.not-found', params: { '0': '/' } });
                }

                vm.error = err.toString();
            } else {
                vm.data = _.map(data.data.model.data, function (q) {
                    q.type = q.type == 0 ? 'OUT' : 'IN';
                    return q;
                });
                var users = _.map(vm.data, function (f) {
                    return f.user;
                });
                vm.supply = data.data.supply;
                vm.users = _.compact(_.uniqBy(users, 'id'));
                vm.links.first_page_url = data.data.model.first_page_url;
                vm.links.last_page_url = data.data.model.last_page_url;
                vm.links.prev_page_url = data.data.model.prev_page_url;
                vm.links.next_page_url = data.data.model.next_page_url;

                vm.meta.current_page = data.data.model.current_page;
                vm.meta.from = data.data.model.from;
                vm.meta.last_page = data.data.model.last_page;
                vm.query.per_page = _.parseInt(data.data.model.per_page);
                vm.meta.to = data.data.model.to;
                vm.meta.total = data.data.model.total;

                vm.columns = data.data.columns;
                if (data.page.search_input) {
                    vm.filters[0].value = data.page.search_input;
                }

                vm.filters[0].search_prop = vm.search_column; // define search_prop for backend usage.
            }
        }
    }
});

/***/ }),

/***/ 1015:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v(
              "\n                    Purchase Order Detail\n                "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "po_number" } }, [
                    _vm._v("PO Number")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.po_number,
                        expression: "po_number"
                      }
                    ],
                    staticClass: "form-control form-control-sm",
                    attrs: {
                      required: "",
                      type: "text",
                      id: "po_number",
                      name: "po_number",
                      placeholder: "po_number"
                    },
                    domProps: { value: _vm.po_number },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.po_number = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "date_delivered" } }, [
                    _vm._v("Date Delivered")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.date_delivered,
                        expression: "date_delivered"
                      }
                    ],
                    staticClass: "form-control form-control-sm",
                    attrs: {
                      required: "",
                      type: "date",
                      id: "date_delivered",
                      name: "date_delivered",
                      placeholder: "Date Delivered"
                    },
                    domProps: { value: _vm.date_delivered },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.date_delivered = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "pr_number" } }, [
                    _vm._v("PR Number")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.pr_number,
                        expression: "pr_number"
                      }
                    ],
                    staticClass: "form-control form-control-sm",
                    attrs: {
                      required: "",
                      type: "text",
                      id: "pr_number",
                      name: "pr_number",
                      placeholder: "pr_number"
                    },
                    domProps: { value: _vm.pr_number },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.pr_number = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("div", { staticClass: "row" }, [
                      _vm._m(0),
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
                                  "Add Source\n                                        "
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
                              size: "small",
                              disabled: _vm.isDisabled,
                              filterable: "",
                              remote: "",
                              required: "",
                              placeholder: "Enter Source of Fund Name",
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
                              attrs: { label: item.label, value: item.value.id }
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
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c(
          "form",
          {
            ref: "form",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmit($event)
              }
            }
          },
          [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _vm._v(
                  "\n                        Supply Information\n                    "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "quantity" } }, [
                        _vm._v("Quantity Delivered")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.quantity,
                            expression: "quantity"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          required: "",
                          type: "number",
                          id: "quantity",
                          name: "quantity",
                          placeholder: "Quantity"
                        },
                        domProps: { value: _vm.quantity },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.quantity = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "unit_cost" } }, [
                        _vm._v("Unit Cost")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.unit_cost,
                            expression: "unit_cost"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          required: "",
                          type: "number",
                          id: "unit_cost",
                          name: "unit_cost",
                          placeholder: "Unit Cost"
                        },
                        domProps: { value: _vm.unit_cost },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.unit_cost = $event.target.value
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("div", { staticClass: "row" }, [
                          _vm._m(1),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm text-right" }, [
                            !_vm.isAddUnit
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-sm btn-link",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        _vm.isAddUnit = !_vm.isAddUnit
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Add Unit\n                                            "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        !_vm.isAddUnit
                          ? _c(
                              "el-select",
                              {
                                staticStyle: { width: "100%" },
                                attrs: {
                                  filterable: "",
                                  remote: "",
                                  size: "small",
                                  "value-key": "id",
                                  required: "",
                                  placeholder: "Please a Unit Name",
                                  "remote-method": _vm.search_unit,
                                  loading: _vm.loading
                                },
                                model: {
                                  value: _vm.unit_id,
                                  callback: function($$v) {
                                    _vm.unit_id = $$v
                                  },
                                  expression: "unit_id"
                                }
                              },
                              _vm._l(_vm.units, function(item, index) {
                                return _c("el-option", {
                                  key: item.value.id,
                                  attrs: {
                                    label: item.label,
                                    value: item.value
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
                                        value: _vm.unit_name,
                                        expression: "unit_name"
                                      }
                                    ],
                                    staticClass: "form-control form-control-sm",
                                    attrs: {
                                      placeholder: "Unit Name",
                                      type: "text"
                                    },
                                    domProps: { value: _vm.unit_name },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.unit_name = $event.target.value
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
                                          on: { click: _vm.addUnit }
                                        },
                                        [_vm._v("Create Unit")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-default",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              _vm.isAddUnit = false
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
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("div", { staticClass: "row" }, [
                          _vm._m(2),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm text-right" }, [
                            !_vm.isAddDispensingUnit
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-sm btn-link",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        _vm.isAddDispensingUnit = !_vm.isAddDispensingUnit
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Add\n                                            "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        !_vm.isAddDispensingUnit
                          ? _c(
                              "el-select",
                              {
                                staticStyle: { width: "100%" },
                                attrs: {
                                  filterable: "",
                                  remote: "",
                                  size: "small",
                                  required: "",
                                  "value-key": "id",
                                  placeholder: "Please a Dispensing Unit Name",
                                  "remote-method": _vm.search_dispensing_unit,
                                  loading: _vm.loading
                                },
                                model: {
                                  value: _vm.dispensing_unit_id,
                                  callback: function($$v) {
                                    _vm.dispensing_unit_id = $$v
                                  },
                                  expression: "dispensing_unit_id"
                                }
                              },
                              _vm._l(_vm.dispensing_units, function(
                                item,
                                index
                              ) {
                                return _c("el-option", {
                                  key: item.value.id,
                                  attrs: {
                                    label: item.label,
                                    value: item.value
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
                                        value: _vm.unit_name,
                                        expression: "unit_name"
                                      }
                                    ],
                                    staticClass: "form-control form-control-sm",
                                    attrs: {
                                      placeholder: "Unit Name",
                                      type: "text"
                                    },
                                    domProps: { value: _vm.unit_name },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.unit_name = $event.target.value
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
                                          on: { click: _vm.addUnit }
                                        },
                                        [_vm._v("Create")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-default",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              _vm.isAddDispensingUnit = false
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
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "unit_cost" } }, [
                        _vm._v("Total Cost: ")
                      ]),
                      _vm._v(
                        "\n                                    " +
                          _vm._s(_vm.unitCost) +
                          "\n                                "
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary mb-2",
                    attrs: {
                      disabled:
                        !_vm.expiry_date &&
                        !_vm.dispensing_unit_id &&
                        !_vm.unit_id &&
                        !_vm.quantity &&
                        !_vm.quantity_per &&
                        !_vm.unit_cost,
                      type: "submit"
                    }
                  },
                  [_vm._v("Check in\n                        ")]
                )
              ])
            ])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _vm.data
      ? _c(
          "div",
          { staticClass: "dv" },
          [
            _vm.nextPage ||
            _vm.prevPage ||
            !_vm.nextPage ||
            !_vm.prevPage ||
            _vm.meta
              ? _c(
                  "data-tables-server",
                  {
                    attrs: {
                      data: _vm.data,
                      "action-col": _vm.actionCol,
                      total: _vm.meta.total,
                      filters: _vm.filters,
                      "pagination-props": {
                        background: true,
                        pageSize: _vm.query.per_page,
                        pageSizes: [_vm.query.per_page, 10, 20, 30]
                      },
                      "page-size": _vm.query.per_page,
                      "current-page": _vm.meta.current_page,
                      "table-props": _vm.tableProps,
                      loading: _vm.loading
                    },
                    on: { "query-change": _vm.loadData }
                  },
                  _vm._l(_vm.columns, function(title) {
                    return _c("el-table-column", {
                      key: title.id,
                      attrs: {
                        prop: title.id,
                        label: title.name,
                        sortable: "custom"
                      }
                    })
                  })
                )
              : _vm._e()
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticStyle: { "margin-bottom": "10px" } })
  ])
}
var staticRenderFns = [
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
    return _c("div", { staticClass: "col-sm" }, [
      _c("label", { attrs: { for: "unit_id" } }, [_vm._v("Unit")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm" }, [
      _c(
        "label",
        {
          staticStyle: { "font-size": "small" },
          attrs: { for: "dispensing_unit_id" }
        },
        [_vm._v("Dispensing\n                                            Unit")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-76e634d6", module.exports)
  }
}

/***/ }),

/***/ 854:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1012)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(1014)
/* template */
var __vue_template__ = __webpack_require__(1015)
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
Component.options.__file = "resources\\assets\\js\\components\\Supplies\\checkin.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76e634d6", Component.options)
  } else {
    hotAPI.reload("data-v-76e634d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});