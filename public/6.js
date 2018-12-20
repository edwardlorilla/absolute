webpackJsonp([6],{

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(966)
/* template */
var __vue_template__ = __webpack_require__(967)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Pending\\view.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ae28cb5", Component.options)
  } else {
    hotAPI.reload("data-v-6ae28cb5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(870)
/* template */
var __vue_template__ = __webpack_require__(871)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Pending\\medical-request.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d3ebb73", Component.options)
  } else {
    hotAPI.reload("data-v-3d3ebb73", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 870:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['data']
});

/***/ }),

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-table",
    { staticStyle: { width: "100%" }, attrs: { data: _vm.data.products } },
    [
      _c("el-table-column", { attrs: { prop: "name", label: "Product Name" } }),
      _vm._v(" "),
      _c("el-table-column", {
        attrs: { prop: "out_quantity", label: "Quantity" }
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-3d3ebb73", module.exports)
  }
}

/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(873)
/* template */
var __vue_template__ = __webpack_require__(874)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Pending\\medical-supply.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49ee6cbb", Component.options)
  } else {
    hotAPI.reload("data-v-49ee6cbb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 873:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['data']
});

/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-table",
    { staticStyle: { width: "100%" }, attrs: { data: _vm.data.supplies } },
    [
      _c("el-table-column", { attrs: { prop: "name", label: "Product Name" } }),
      _vm._v(" "),
      _c("el-table-column", {
        attrs: { prop: "out_quantity", label: "Quantity" }
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-49ee6cbb", module.exports)
  }
}

/***/ }),

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__medical_request_vue__ = __webpack_require__(869);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__medical_request_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__medical_request_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__medical_supply_vue__ = __webpack_require__(872);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__medical_supply_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__medical_supply_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    axios.get('/api/' + url, { params: page }).then(function (response) {
        callback(null, { data: response.data, page: page });
    }).catch(function (error) {
        callback(error, error.response.data);
    });
};
/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'medical-request': __WEBPACK_IMPORTED_MODULE_0__medical_request_vue___default.a,
        'medical-supply': __WEBPACK_IMPORTED_MODULE_1__medical_supply_vue___default.a
    },
    data: function data() {
        var _this = this;

        var sortOrders = {};
        return {
            filters: [{
                value: '',
                'search_prop': 'id' // define search_prop for backend usage.
            }],
            dialogMessage: { title: '', message: '' },
            dialogVisible: false,
            actionCol: {
                label: 'Action',
                props: {
                    align: 'center'
                },
                buttons: [{
                    props: {
                        type: 'success',
                        icon: 'el-icon-edit',
                        size: 'small'
                    },
                    handler: function handler(row) {

                        var vm = _this;
                        vm.$router.push({
                            name: row.type === 'App\\Notifications\\Pending' ? 'pending.show' : 'App\\Notifications\\PendingSupply' ? 'pending.supply' : 'error.not-found',
                            params: { id: row.id }
                        });
                    },
                    label: 'Show'
                }]
            },
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
            _numberLoad: 0
        };
    },

    computed: {
        filteredData: function filteredData() {
            var sortKey = this.sortKey;
            var filterKey = this.filterKey && this.filterKey.toLowerCase();
            var order = this.sortOrders[sortKey] || 1;
            var data = this.data;
            if (filterKey) {
                data = data.filter(function (row) {
                    return Object.keys(row).some(function (key) {
                        return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
                    });
                });
            }
            if (sortKey) {
                data = data.slice().sort(function (a, b) {
                    a = a[sortKey];
                    b = b[sortKey];
                    return (a === b ? 0 : a > b ? 1 : -1) * order;
                });
            }
            return data;
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
    filters: {
        capitalize: function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        getData(to.meta.url, to.query, function (err, data) {
            next(function (vm) {
                return vm.setData(err, data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var _this2 = this;

        getData(to.meta.url, to.query, function (err, data) {
            _this2.setData(err, data);
            next();
        });
    },

    methods: {
        _delete: function _delete(row) {
            var vm = this;
            if (row) {
                vm.loading = true;
                axios.delete('/api/' + vm.$route.meta.title.toLowerCase() + '/' + row.id).then(function (response) {
                    vm.data.splice(vm.data.indexOf(row), 1);
                    vm.loading = false;
                    vm.dialogVisible = false;
                    vm.dialogMessage = { title: '', message: '', row: {} };
                    vm.$message({ message: response.statusText, type: 'success' });
                }).catch(function (error) {
                    vm.$message({ message: error.statusText, type: 'warning' });
                    vm.loading = false;
                });
            }
        },
        handleClose: function handleClose(done) {
            this.$confirm('Are you sure to close this dialog?').then(function (_) {
                done();
            }).catch(function (_) {});
        },
        _create: function _create() {
            var vm = this;
            vm.$router.push({ name: vm.$route.meta.title.toLowerCase() + '.create' });
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
            if (event.type === 'page') {
                option.page = event.page;
                option.per_page = event.pageSize;
            }
            if (event.type != "init") {
                if (event.type === 'filter' && vm.filters[0].value.length != 0) {
                    option.search_column = vm.query.search_column;
                    option.search_operator = vm.query.search_operator;
                    option.search_input = vm.filters[0].value;
                } else {
                    delete option.search_input;
                }
                vm.$router.push({
                    path: '' + vm.$route.path,
                    query: option
                }, function () {
                    vm.loading = false;
                }, function () {
                    vm.loading = false;
                });
            } else {
                vm.loading = false;
            }
        }, 500),
        setData: function setData(err, data) {
            var vm = this;
            var notification = vm.$root.store.state.notifications;
            if (err) {
                if (err.response.status === 404) {
                    vm.$router.push({ name: 'error.not-found', params: { '0': '/' } });
                }
                vm.error = err.toString();
            } else {
                vm.data = notification.data;
                vm.links.first_page_url = notification.first_page_url;
                vm.links.last_page_url = notification.last_page_url;
                vm.links.prev_page_url = notification.prev_page_url;
                vm.links.next_page_url = notification.next_page_url;

                vm.meta.current_page = notification.current_page;
                vm.meta.from = notification.from;
                vm.meta.last_page = notification.last_page;
                vm.query.per_page = _.parseInt(notification.per_page);
                vm.meta.to = notification.to;
                vm.meta.total = notification.total;
                vm.columns = data.data.columns;
            }
        }
    }
});

/***/ }),

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
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
                    _c("el-option", { attrs: { label: "All", value: "all" } }),
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
            _c(
              "div",
              { staticClass: "dv-header-search" },
              [
                _c("el-input", {
                  attrs: { placeholder: "Search" },
                  on: {
                    keyup: function($event) {
                      if (
                        !("button" in $event) &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
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
            )
          ]),
          _vm._v(" "),
          _c(
            "el-dialog",
            {
              attrs: {
                "show-close": false,
                title: _vm.dialogMessage.title,
                visible: _vm.dialogVisible,
                width: "30%",
                "before-close": _vm.handleClose
              },
              on: {
                "update:visible": function($event) {
                  _vm.dialogVisible = $event
                }
              }
            },
            [
              _c("span", [_vm._v(_vm._s(_vm.dialogMessage.message))]),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "dialog-footer",
                  attrs: { slot: "footer" },
                  slot: "footer"
                },
                [
                  _c(
                    "el-button",
                    {
                      attrs: { disabled: _vm.loading },
                      on: {
                        click: function($event) {
                          _vm.dialogVisible = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: { loading: _vm.loading, type: "primary" },
                      on: {
                        click: function($event) {
                          _vm._delete(_vm.dialogMessage.row)
                        }
                      }
                    },
                    [_vm._v("Confirm")]
                  )
                ],
                1
              )
            ]
          ),
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
                    data: _vm.filteredData,
                    total: _vm.meta.total,
                    filters: _vm.filters,
                    "action-col": _vm.actionCol,
                    "pagination-props": {
                      background: true,
                      pageSize: _vm.query.per_page,
                      pageSizes: [_vm.query.per_page, 10, 20, 30]
                    },
                    "page-size": _vm.query.per_page,
                    "current-page": _vm.meta.current_page,
                    loading: _vm.loading
                  },
                  on: { "query-change": _vm.loadData }
                },
                [
                  _c("el-table-column", {
                    attrs: { type: "expand" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(props) {
                          return [
                            _c(props.row.data.type, {
                              tag: "component",
                              attrs: { data: props.row.data.data }
                            })
                          ]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "ID", prop: "notifiable_id" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "Message", prop: "data.message" }
                  })
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6ae28cb5", module.exports)
  }
}

/***/ })

});