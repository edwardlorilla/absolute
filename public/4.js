webpackJsonp([4],{

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(16)
/* script */
var __vue_script__ = __webpack_require__(839)
/* template */
var __vue_template__ = __webpack_require__(848)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Dashboard\\wrapper.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a9d63220", Component.options)
  } else {
    hotAPI.reload("data-v-a9d63220", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Chart_Transactions_chart_vue__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Chart_Transactions_chart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Chart_Transactions_chart_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Chart_Product_LineChart_vue__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Chart_Product_LineChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Chart_Product_LineChart_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        Transaction: __WEBPACK_IMPORTED_MODULE_0__Chart_Transactions_chart_vue___default.a,
        Product: __WEBPACK_IMPORTED_MODULE_1__Chart_Product_LineChart_vue___default.a
    },
    data: function data() {
        return {
            transactions: []
        };
    },
    beforeRouteEnter: function beforeRouteEnter(a, b, c) {
        axios.get('/api/dashboard').then(function (d) {
            c(function (e) {
                return e.setData(d.data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(a, b, c) {
        var d = this;
        axios.get('/api/dashboard').then(function (e) {
            d.setData(e.data), c();
        });
    },

    methods: {
        test: function test() {
            alert(1);
        },
        setData: function setData(a) {
            var b = this;
            b.transactions = a;
        }
    }
});

/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(841)
}
var normalizeComponent = __webpack_require__(16)
/* script */
var __vue_script__ = __webpack_require__(843)
/* template */
var __vue_template__ = __webpack_require__(844)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Chart\\Transactions\\chart.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b5caf740", Component.options)
  } else {
    hotAPI.reload("data-v-b5caf740", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 841:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(842);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(61)("41a174fb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b5caf740\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chart.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b5caf740\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chart.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 843:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['data$'],
    data: function data() {
        return {
            transform: { chart: [{ "name": "IN", "data": {} }, { "name": "OUT", "data": {} }] }
        };
    },

    computed: {
        getChartData: function getChartData() {
            var vm = this;
            var counter = {};
            var date = [];
            _.map(vm.data$, function (response) {
                var index = _.findIndex(vm.transform.chart, ['name', response.type === 0 ? 'OUT' : 'IN']);
                var pick = {};
                date.push("" + response.created_at.split(' ')[0]);
                pick["" + response.created_at.split(' ')[0]] = response.type === 0 ? counter[response.created_at.split(' ')[0] + "_out"] >= 0 ? ++counter[response.created_at.split(' ')[0] + "_out"] : counter[response.created_at.split(' ')[0] + "_out"] = 1 : counter[response.created_at.split(' ')[0] + "_in"] >= 0 ? ++counter[response.created_at.split(' ')[0] + "_in"] : counter[response.created_at.split(' ')[0] + "_in"] = 1;
                _.merge(vm.transform.chart[index].data, _.clone(pick));
            });
            var i,
                j,
                undefinedObject = {},
                k,
                unique = _.uniq(date);

            for (i = 0; i < vm.transform.chart.length; i++) {
                undefinedObject = {};
                for (j = 0; j < unique.length; j++) {
                    if (_.isUndefined(vm.transform.chart[i].data[unique[j]])) {
                        undefinedObject[unique[j]] = 0;
                    }
                }
                _.merge(vm.transform.chart[i].data, undefinedObject);
            }
            return unique;
        }
    }
});

/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.getChartData.length != 0
        ? _c("line-chart", {
            attrs: { download: true, data: _vm.transform.chart }
          })
        : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-b5caf740", module.exports)
  }
}

/***/ }),

/***/ 845:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(16)
/* script */
var __vue_script__ = __webpack_require__(846)
/* template */
var __vue_template__ = __webpack_require__(847)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Chart\\Product\\LineChart.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4cb648c4", Component.options)
  } else {
    hotAPI.reload("data-v-4cb648c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['data$'],
    data: function data() {
        return {
            reload: true,
            transform: { chart: [] }
        };
    },

    computed: {
        getChartData: function getChartData() {
            var vm = this;
            var counter = {};
            var date = [];
            _.map(vm.data$, function (response) {
                var index = _.findIndex(vm.transform.chart, ['name', response.product.name]);
                if (index === -1) {
                    vm.transform.chart.push({ name: response.product.name, data: {} });
                    index = _.findIndex(vm.transform.chart, ['name', response.product.name]);
                }
                var pick = {};
                date.push('' + response.created_at.split(' ')[0]);
                if (response.type === 0) {
                    pick['' + response.created_at.split(' ')[0]] = !_.isUndefined(counter[response.created_at.split(' ')[0] + '-out-' + response.product.id]) ? counter[response.created_at.split(' ')[0] + '-out-' + response.product.id] += response.out_quantity : counter[response.created_at.split(' ')[0] + '-out-' + response.product.id] = response.out_quantity;
                }
                _.merge(vm.transform.chart[index].data, pick);
            });
            var i,
                j,
                undefinedObject = {},
                k,
                unique = _.uniq(date);

            for (i = 0; i < vm.transform.chart.length; i++) {
                undefinedObject = {};
                for (j = 0; j < unique.length; j++) {
                    if (_.isUndefined(vm.transform.chart[i].data[unique[j]])) {
                        undefinedObject[unique[j]] = 0;
                    }
                }
                _.merge(vm.transform.chart[i].data, undefinedObject);
            }
            return unique;
        }
    }

});

/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.getChartData.length != 0
    ? _c("line-chart", { attrs: { download: true, data: _vm.transform.chart } })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4cb648c4", module.exports)
  }
}

/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [_c("transaction", { attrs: { data$: _vm.transactions } })],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [_c("product", { attrs: { data$: _vm.transactions } })],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "card-header d-flex p-0 ui-sortable-handle",
        staticStyle: { cursor: "move" }
      },
      [
        _c("h3", { staticClass: "card-title p-3" }, [
          _c("i", { staticClass: "fa fa-pie-chart mr-1" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "card-header d-flex p-0 ui-sortable-handle",
        staticStyle: { cursor: "move" }
      },
      [
        _c("h3", { staticClass: "card-title p-3" }, [
          _c("i", { staticClass: "fa fa-pie-chart mr-1" }),
          _vm._v("\n                        Products\n                    ")
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a9d63220", module.exports)
  }
}

/***/ })

});