webpackJsonp([26],{

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(916)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(918)
/* template */
var __vue_template__ = __webpack_require__(919)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Transactions\\Transaction.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33af0abc", Component.options)
  } else {
    hotAPI.reload("data-v-33af0abc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(917);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(98)("b2309f0e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-33af0abc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Transaction.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-33af0abc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Transaction.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.el-table .warning-row {\n    background: oldlace;\n}\n.el-table .success-row {\n    background: aliceblue;\n}\n", ""]);

// exports


/***/ }),

/***/ 918:
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
            filters: [{
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
                } else {
                    delete option.user_id;
                    delete option.search_input;
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

/***/ 919:
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
            _c("div", { staticClass: "dv-header-search" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-6" },
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
                  { staticClass: "col-lg-6" },
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
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-33af0abc", module.exports)
  }
}

/***/ })

});