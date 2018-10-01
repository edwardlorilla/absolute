webpackJsonp([10],{

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(16)
/* script */
var __vue_script__ = __webpack_require__(885)
/* template */
var __vue_template__ = __webpack_require__(886)
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


/***/ }),

/***/ 885:
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

var getData = function getData(url, page, callback) {
    axios.get('/api/' + url, { params: page }).then(function (response) {
        callback(null, { data: response.data, page: page });
    }).catch(function (error) {
        callback(error, error.response.data);
    });
};
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var sortOrders = {};
        return {
            supply: {},
            filters: [{
                value: '',
                'search_prop': 'id' // define search_prop for backend usage.
            }, {
                value: '1',
                'search_prop': 'type' // define search_prop for backend usage.
            }],
            dialogMessage: { title: '', message: '' },
            dialogVisible: false,

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
        getData('tracks/' + to.params.id, to.query, function (err, data) {
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
        getData('tracks/' + to.params.id, to.query, function (err, data) {
            _this.setData(err, data);
            next();
        });
    },

    methods: {
        post_m: function post_m() {
            var vm = this;
            var formData = new FormData(vm.$refs.form);
            var jsonObject = {};
            if (vm.$route.params.id) {
                jsonObject['id'] = vm.$route.params.id;
            }

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

            axios.put('/api/supplies/' + vm.$route.params.id, jsonObject).then(function (response) {
                vm.data.push(response.data);
            }).catch(function (response) {
                console.log(response);
            });
        },
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

                if (event.type === 'filter' && vm.filters[0].value.length != 0 && vm.filters[1].value.length != 0) {
                    option.search_column = vm.query.search_column;
                    option.search_operator = vm.query.search_operator;
                    option.search_input = vm.filters[0].value;
                } else if (event.type === 'filter' && !_.isEmpty(vm.filters[1].value)) {
                    option.type = vm.filters[1].value.toString();
                } else {
                    delete option.search_input;
                    delete option.type;
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
            if (err) {

                if (err.response.status === 404) {
                    vm.$router.push({ name: 'error.not-found', params: { '0': '/' } });
                }

                vm.error = err.toString();
            } else {
                vm.data = data.data.model.data;
                vm.supply = data.data.supply;
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
            }
        }
    }
});

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c("div", { staticClass: "dv" }, [
        _c("div", { staticClass: "dv-header" }, [
          _c("div", { staticClass: "dv-header-title" }, [
            _vm._v(
              "\n        Check in " +
                _vm._s(_vm.supply.name ? _vm.supply.name : "") +
                "\n    "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-6" }, [
            _c(
              "form",
              {
                ref: "form",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.post_m($event)
                  }
                }
              },
              [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2)]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-lg-6" },
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
                        model: {
                          value: _vm.filters[1].value,
                          callback: function($$v) {
                            _vm.$set(_vm.filters[1], "value", $$v)
                          },
                          expression: "filters[1].value"
                        }
                      },
                      [
                        _c("el-option", { attrs: { label: "IN", value: "1" } }),
                        _vm._v(" "),
                        _c("el-option", { attrs: { label: "OUT", value: "0" } })
                      ],
                      1
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
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "quantity" } }, [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "number", id: "quantity", name: "quantity" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "type" } }, [_vm._v("Type")]),
        _vm._v(" "),
        _c(
          "select",
          { staticClass: "form-control", attrs: { name: "type", id: "type" } },
          [
            _c("option", { attrs: { value: "1" } }, [_vm._v("IN")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "0" } }, [_vm._v("OUT")])
          ]
        )
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
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
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
    require("vue-hot-reload-api")      .rerender("data-v-76e634d6", module.exports)
  }
}

/***/ })

});