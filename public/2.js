webpackJsonp([2],{

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type_column_vue__ = __webpack_require__(1017);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type_column_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__type_column_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__created_request_vue__ = __webpack_require__(1020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__created_request_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__created_request_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__created_track_vue__ = __webpack_require__(1023);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__created_track_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__created_track_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__created_supply_vue__ = __webpack_require__(1026);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__created_supply_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__created_supply_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__created_product_vue__ = __webpack_require__(1029);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__created_product_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__created_product_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deleted_supply_vue__ = __webpack_require__(1032);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deleted_supply_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__deleted_supply_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__deleted_product_vue__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__deleted_product_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__deleted_product_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__updated_product_vue__ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__updated_product_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__updated_product_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__updated_supply_vue__ = __webpack_require__(1041);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__updated_supply_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__updated_supply_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        typeColumn: __WEBPACK_IMPORTED_MODULE_0__type_column_vue___default.a,
        created_request: __WEBPACK_IMPORTED_MODULE_1__created_request_vue___default.a,
        created_track: __WEBPACK_IMPORTED_MODULE_2__created_track_vue___default.a,
        created_supply: __WEBPACK_IMPORTED_MODULE_3__created_supply_vue___default.a,
        created_product: __WEBPACK_IMPORTED_MODULE_4__created_product_vue___default.a,
        deleted_supply: __WEBPACK_IMPORTED_MODULE_5__deleted_supply_vue___default.a,
        deleted_product: __WEBPACK_IMPORTED_MODULE_6__deleted_product_vue___default.a,
        updated_product: __WEBPACK_IMPORTED_MODULE_7__updated_product_vue___default.a,
        updated_supply: __WEBPACK_IMPORTED_MODULE_8__updated_supply_vue___default.a
    },
    data: function data() {
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
                }

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

    // when route changes and this component is already rendered,
    // the logic will be slightly different.
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var _this = this;

        //this.users = this.links = this.meta = null
        getData(to.meta.url, to.query, function (err, data) {
            _this.setData(err, data);
            next();
        });
    },

    methods: {

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
            console.log(data);
            var vm = this;
            if (err) {

                if (err.response.status === 404) {
                    vm.$router.push({ name: 'error.not-found', params: { '0': '/' } });
                }

                vm.error = err.toString();
            } else {
                console.log(data);
                vm.data = data.data.model.data;
                console.log(vm.data);
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

/***/ 1017:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(1018)
/* template */
var __vue_template__ = __webpack_require__(1019)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Activity\\type-column.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3856d2e7", Component.options)
  } else {
    hotAPI.reload("data-v-3856d2e7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1018:
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
    props: ['type']
});

/***/ }),

/***/ 1019:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.type == "created_request"
      ? _c("div", [
          _c("span", { staticClass: "fa fa-medkit" }, [
            _vm._v(" Create Request")
          ])
        ])
      : _vm.type == "created_track"
        ? _c("div", [
            _c("span", { staticClass: "fa fa-exchange" }, [
              _vm._v(" Check Supply")
            ])
          ])
        : _vm.type == "created_supply"
          ? _c("div", [
              _c("span", { staticClass: "fa fa-plus-square" }, [
                _vm._v(" Create Supply")
              ])
            ])
          : _vm.type == "updated_supply"
            ? _c("div", [
                _c("span", { staticClass: "fa fa-plus-square" }, [
                  _vm._v(" Update Supply")
                ])
              ])
            : _vm.type == "deleted_supply"
              ? _c("div", [
                  _c("span", { staticClass: "fa fa-plus-square" }, [
                    _vm._v(" Delete Supply")
                  ])
                ])
              : _vm.type == "created_product"
                ? _c("div", [
                    _c("span", { staticClass: "fa fa-plus-square" }, [
                      _vm._v(" Create Product")
                    ])
                  ])
                : _vm.type == "updated_product"
                  ? _c("div", [
                      _c("span", { staticClass: "fa fa-plus-square" }, [
                        _vm._v(" Update Product")
                      ])
                    ])
                  : _vm.type == "deleted_product"
                    ? _c("div", [
                        _c("span", { staticClass: "fa fa-plus-square" }, [
                          _vm._v(" Delete Product")
                        ])
                      ])
                    : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3856d2e7", module.exports)
  }
}

/***/ }),

/***/ 1020:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(1021)
/* template */
var __vue_template__ = __webpack_require__(1022)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Activity\\created_request.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64e04756", Component.options)
  } else {
    hotAPI.reload("data-v-64e04756", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['user', 'data']
});

/***/ }),

/***/ 1022:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c("div", [
        _c("p", [
          _vm._v(
            _vm._s(_vm.user) +
              "'s has been checked out medicine on " +
              _vm._s(
                _vm.$moment
                  .utc(_vm.data.created_at)
                  .local()
                  .fromNow()
              )
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-64e04756", module.exports)
  }
}

/***/ }),

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(1024)
/* template */
var __vue_template__ = __webpack_require__(1025)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Activity\\created_track.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-191627d2", Component.options)
  } else {
    hotAPI.reload("data-v-191627d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['user', 'data']
});

/***/ }),

/***/ 1025:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c("div", [
        _c("p", [
          _vm._v(
            _vm._s(_vm.user) +
              "'s has been checked " +
              _vm._s(_vm.data.type == 1 ? "in" : "out") +
              " supply on  " +
              _vm._s(
                _vm.$moment
                  .utc(_vm.data.created_at)
                  .local()
                  .fromNow()
              )
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-191627d2", module.exports)
  }
}

/***/ }),

/***/ 1026:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(1027)
/* template */
var __vue_template__ = __webpack_require__(1028)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Activity\\created_supply.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c46b4f10", Component.options)
  } else {
    hotAPI.reload("data-v-c46b4f10", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['user', 'data']
});

/***/ }),

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c("div", [
        _c("p", [
          _vm._v(
            _vm._s(_vm.data.name) +
              " has been added a supply on  " +
              _vm._s(
                _vm.$moment
                  .utc(_vm.data.created_at)
                  .local()
                  .fromNow()
              )
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c46b4f10", module.exports)
  }
}

/***/ }),

/***/ 1029:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(1030)
/* template */
var __vue_template__ = __webpack_require__(1031)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Activity\\created_product.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-712a1c94", Component.options)
  } else {
    hotAPI.reload("data-v-712a1c94", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['user', 'data']
});

/***/ }),

/***/ 1031:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c("div", [
        _c("p", [
          _vm._v(
            _vm._s(_vm.user) +
              "'s has been added a product " +
              _vm._s(_vm.data.name) +
              " with " +
              _vm._s(_vm.data.quantity) +
              " " +
              _vm._s(_vm.data.quantity === 1 ? "item" : "items") +
              " on " +
              _vm._s(
                _vm.$moment
                  .utc(_vm.data.created_at)
                  .local()
                  .fromNow()
              )
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-712a1c94", module.exports)
  }
}

/***/ }),

/***/ 1032:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(1033)
/* template */
var __vue_template__ = __webpack_require__(1034)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Activity\\deleted_supply.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47b2a2b2", Component.options)
  } else {
    hotAPI.reload("data-v-47b2a2b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['user', 'data']
});

/***/ }),

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c("div", [
        _c("p", [
          _vm._v(
            _vm._s(_vm.data.name) +
              " has been deleted a supply on " +
              _vm._s(
                _vm.$moment
                  .utc(_vm.data.created_at)
                  .local()
                  .fromNow()
              ) +
              " "
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-47b2a2b2", module.exports)
  }
}

/***/ }),

/***/ 1035:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(1036)
/* template */
var __vue_template__ = __webpack_require__(1037)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Activity\\deleted_product.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54996167", Component.options)
  } else {
    hotAPI.reload("data-v-54996167", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['user', 'data']
});

/***/ }),

/***/ 1037:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c("div", [
        _c("p", [
          _vm._v(
            _vm._s(_vm.data.name) +
              " has been deleted a product " +
              _vm._s(_vm.data.name) +
              " on " +
              _vm._s(
                _vm.$moment
                  .utc(_vm.data.created_at)
                  .local()
                  .fromNow()
              ) +
              " "
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-54996167", module.exports)
  }
}

/***/ }),

/***/ 1038:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(1039)
/* template */
var __vue_template__ = __webpack_require__(1040)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Activity\\updated_product.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63982f09", Component.options)
  } else {
    hotAPI.reload("data-v-63982f09", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['user', 'data']
});

/***/ }),

/***/ 1040:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c("div", [
        _c("p", [
          _vm._v(
            _vm._s(_vm.user) +
              "'s has been updated a product " +
              _vm._s(_vm.data.name) +
              " with " +
              _vm._s(_vm.data.quantity) +
              " " +
              _vm._s(_vm.data.quantity === 1 ? "item" : "items") +
              " on " +
              _vm._s(
                _vm.$moment
                  .utc(_vm.data.created_at)
                  .local()
                  .fromNow()
              )
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-63982f09", module.exports)
  }
}

/***/ }),

/***/ 1041:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(1042)
/* template */
var __vue_template__ = __webpack_require__(1043)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Activity\\updated_supply.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25b2b676", Component.options)
  } else {
    hotAPI.reload("data-v-25b2b676", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['user', 'data']
});

/***/ }),

/***/ 1043:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c("div", [
        _c("p", [
          _vm._v(
            _vm._s(_vm.data.name) +
              " has been updated a supply on " +
              _vm._s(
                _vm.$moment
                  .utc(_vm.data.created_at)
                  .local()
                  .fromNow()
              ) +
              " "
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-25b2b676", module.exports)
  }
}

/***/ }),

/***/ 1044:
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
                    loading: _vm.loading
                  },
                  on: { "query-change": _vm.loadData }
                },
                [
                  _c("el-table-column", {
                    attrs: { label: "Associated User", prop: "user.name" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "TYPE" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _c("type-column", {
                              attrs: { type: scope.row.type }
                            })
                          ]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "Data" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _c(scope.row.type, {
                              tag: "component",
                              attrs: {
                                user: scope.row.user.name,
                                data: scope.row.subject
                              }
                            })
                          ]
                        }
                      }
                    ])
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
    require("vue-hot-reload-api")      .rerender("data-v-1b3069f7", module.exports)
  }
}

/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(1016)
/* template */
var __vue_template__ = __webpack_require__(1044)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Activity\\view.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b3069f7", Component.options)
  } else {
    hotAPI.reload("data-v-1b3069f7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});