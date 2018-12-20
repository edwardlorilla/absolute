webpackJsonp([31],{

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(939)
}
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(941)
/* template */
var __vue_template__ = __webpack_require__(942)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\CategoryPackage\\ProductEditCheckIn.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21b05933", Component.options)
  } else {
    hotAPI.reload("data-v-21b05933", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(940);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(98)("5fc3df78", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-21b05933\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProductEditCheckIn.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-21b05933\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProductEditCheckIn.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.el-table .warning-row {\n    background: oldlace;\n}\n.el-table .success-row {\n    background: aliceblue;\n}\n.el-input-group__prepend {\n    background-color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 941:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            errors: [],
            date_delivered: '',
            po_number: '',
            pr_number: '',
            expiry_date: '',
            quantity_per: '',
            product: {},
            quantity: 0,
            unit_cost: 0,
            units: [],
            dispensing_units: [],
            isAddDispensingUnit: false,
            isAddSource: false,
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
                vm.units.push({ value: response.data, label: response.data.name });
                vm.unit_id = response.data.id;
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
        handleSidebar: function handleSidebar() {
            var vm = this;
            vm.isAddSource = !vm.isAddSource;
            vm.$root.store.dispatch('handleSideBar');
        },
        addSource: function addSource() {
            var vm = this;
            vm.isDisabled = true;
            axios.post('/api/sources', { name: vm.source_name }).then(function (response) {
                vm.$message({ message: response.statusText, type: 'success' });
                vm.isAddSource = false;
                vm.sources.push({ value: response.data, label: response.data.name });
                vm.isDisabled = false;
                return response.data.id;
            }).then(function (id) {
                vm.source_select = id;
            }).catch(function (error) {
                if (error.response.data.errors && error.response.data.message) {
                    vm.$message({ message: error.response.data.message, type: 'error' });
                }
                vm.isAddDivision = false;
                vm.isDisabled = false;
            });
            vm.$root.store.dispatch('handleSideBar');
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
            jsonObject['quantity'] = vm.quantity;
            jsonObject['unit_cost'] = vm.unit_cost;
            jsonObject['unit_id'] = vm.unit_id;
            jsonObject['dispensing_unit_id'] = vm.dispensing_unit_id;
            jsonObject['source_select'] = vm.source_select;
            axios.post('/api/products/' + vm.$route.params.id + '/check-item', jsonObject).then(function (q) {
                vm.$message({ message: q.statusText, type: 'success' });
                q.data.type = q.data.type === 0 ? 'OUT' : 'IN';
                vm.data.unshift(q.data);
            }).catch(function (e) {
                if (e.responseText) {
                    vm.$message({
                        message: e.responseText,
                        type: 'error'
                    });
                }
            });
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
                vm.product = data.data.product;
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

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
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
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _vm._v(
                  "\n                        Medicine Information\n                    "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-header" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col" }, [
                    _c("strong", [_vm._v("Generic Name:")]),
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm.product.medicine_id
                            ? _vm.product.medicine.name.toUpperCase()
                            : ""
                        ) +
                        "\n                            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c("strong", [_vm._v("Dosage:")]),
                    _vm._v(
                      " " +
                        _vm._s(_vm.product.dosage) +
                        "\n                            "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col" }, [
                    _c("strong", [_vm._v("Form:")]),
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm.product.category_id
                            ? _vm.product.category.name
                            : ""
                        ) +
                        "\n                            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c("strong", [_vm._v("Medication:")]),
                    _vm._v(
                      " " +
                        _vm._s(_vm.product.medication) +
                        "\n                            "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col" }, [
                    _c("strong", [_vm._v("Pack Size:")]),
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm.product.package_id ? _vm.product.package.name : ""
                        ) +
                        "\n                            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c("label", { attrs: { for: "unit_cost" } }, [
                      _vm._v("Total Cost: ")
                    ]),
                    _vm._v(
                      "\n                                " +
                        _vm._s(_vm.unitCost) +
                        "\n                            "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
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
                          class: _vm.errors.po_number ? "is-invalid" : "",
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
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.errors.po_number, function(error) {
                          return _vm.errors.po_number
                            ? _c(
                                "span",
                                {
                                  staticClass: "invalid-feedback",
                                  attrs: { role: "alert" }
                                },
                                [
                                  _c("strong", [
                                    _vm._v("PO number has already taken")
                                  ])
                                ]
                              )
                            : _vm._e()
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "package" } }, [
                        _vm._v(
                          "Quantity per " +
                            _vm._s(
                              _vm.product.package_id
                                ? _vm.product.package.name
                                : "box"
                            )
                        )
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.quantity_per,
                            expression: "quantity_per"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          required: "",
                          type: "number",
                          id: "package",
                          name: "quantity",
                          placeholder:
                            "Quantity per " +
                            (_vm.product.package_id
                              ? _vm.product.package.name
                              : "box")
                        },
                        domProps: { value: _vm.quantity_per },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.quantity_per = $event.target.value
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
                                    on: { click: _vm.handleSidebar }
                                  },
                                  [
                                    _vm._v(
                                      "Add Source\n                                            "
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
                                              _vm.$root.store.dispatch(
                                                "handleSideBar"
                                              )
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
                                  size: "small",
                                  filterable: "",
                                  remote: "",
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
                                        value: _vm.unit_name,
                                        expression: "unit_name"
                                      }
                                    ],
                                    staticClass: "form-control",
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
                                  size: "small",
                                  remote: "",
                                  required: "",
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
                                        value: _vm.unit_name,
                                        expression: "unit_name"
                                      }
                                    ],
                                    staticClass: "form-control",
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
                    ])
                  ]),
                  _vm._v(" "),
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
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "expiry_date" } }, [
                        _vm._v("Expiry Date")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.expiry_date,
                            expression: "expiry_date"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: {
                          type: "date",
                          id: "expiry_date",
                          name: "expiry_date",
                          placeholder: "expiry_date"
                        },
                        domProps: { value: _vm.expiry_date },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.expiry_date = $event.target.value
                          }
                        }
                      })
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm._m(3)
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _vm.data
      ? _c(
          "div",
          { staticClass: "dv" },
          [
            _c("div", { staticClass: "dv-header" }, [
              _c(
                "div",
                { staticClass: "dv-header-columns" },
                [
                  _c("span", { staticClass: "dv-header-pre" }, [
                    _vm._v("Search: ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "Select" },
                      model: {
                        value: _vm.query.search_column,
                        callback: function($$v) {
                          _vm.$set(_vm.query, "search_column", $$v)
                        },
                        expression: "query.search_column"
                      }
                    },
                    [
                      _c("el-option", {
                        attrs: { label: "All", value: "all" }
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.columns, function(value, key) {
                        return _c("el-option", {
                          key: key,
                          attrs: { label: value.name, value: value.id }
                        })
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
                { staticClass: "dv-header-operators" },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "Select" },
                      model: {
                        value: _vm.query.search_operator,
                        callback: function($$v) {
                          _vm.$set(_vm.query, "search_operator", $$v)
                        },
                        expression: "query.search_operator"
                      }
                    },
                    _vm._l(_vm.operators, function(value, key) {
                      return _c("el-option", {
                        key: key,
                        attrs: { label: value, value: key }
                      })
                    })
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "dv-header-search" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-4" },
                    [
                      _c("el-input", {
                        attrs: { placeholder: "Search" },
                        on: {
                          keyup: function($event) {
                            if (
                              !("button" in $event) &&
                              _vm._k(
                                $event.keyCode,
                                "enter",
                                13,
                                $event.key,
                                "Enter"
                              )
                            ) {
                              return null
                            }
                            return _vm.loadData($event)
                          }
                        },
                        model: {
                          value: _vm.filters[0].value,
                          callback: function($$v) {
                            _vm.$set(_vm.filters[0], "value", $$v)
                          },
                          expression: "filters[0].value"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-lg-4" },
                    [
                      _c(
                        "el-select",
                        {
                          attrs: {
                            clearable: "",
                            placeholder: "Select Users",
                            multiple: "multiple"
                          },
                          model: {
                            value: _vm.filters[1].value,
                            callback: function($$v) {
                              _vm.$set(_vm.filters[1], "value", $$v)
                            },
                            expression: "filters[1].value"
                          }
                        },
                        _vm._l(_vm.users, function(user, index, key) {
                          return _c("el-option", {
                            key: key,
                            attrs: { label: user.name, value: user.id }
                          })
                        })
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
                        "el-select",
                        {
                          attrs: { clearable: "", placeholder: "Select Type" },
                          on: { clear: _vm.clearTypeHandleChange },
                          model: {
                            value: _vm.filters[2].value,
                            callback: function($$v) {
                              _vm.$set(_vm.filters[2], "value", $$v)
                            },
                            expression: "filters[2].value"
                          }
                        },
                        [
                          _c("el-option", {
                            attrs: { label: "IN", value: "1" }
                          }),
                          _vm._v(" "),
                          _c("el-option", {
                            attrs: { label: "OUT", value: "0" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary mb-2", attrs: { type: "submit" } },
        [_vm._v("Check in")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-21b05933", module.exports)
  }
}

/***/ })

});