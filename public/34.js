webpackJsonp([34],{

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(913)
/* template */
var __vue_template__ = __webpack_require__(914)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Requests\\print.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54c2a540", Component.options)
  } else {
    hotAPI.reload("data-v-54c2a540", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 913:
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
    data: function data() {
        return {
            form: null
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        if (to.params.id) {
            axios.get("/api/" + to.meta.url + "/" + to.params.id).then(function (response) {
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
            axios.get("/api/" + to.meta.url + "/" + to.params.id).then(function (response) {
                vm.setData(response.data);
                next();
            });
        }
    },

    methods: {
        setData: function setData(response) {
            var vm = this;
            vm.form = response;
        }
    }
});

/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wrapper" }, [
    _c(
      "button",
      {
        directives: [
          {
            name: "print",
            rawName: "v-print",
            value: "#y_request",
            expression: "'#y_request'"
          }
        ],
        staticClass: "btn btn-primary"
      },
      [_vm._v("Print")]
    ),
    _vm._v(" "),
    _vm.form
      ? _c("section", { staticClass: "invoice", attrs: { id: "y_request" } }, [
          _c("div", { staticClass: "row invoice-info" }, [
            _c("div", { staticClass: "col-sm-4 invoice-col" }, [
              _vm._v("\n                From\n                "),
              _c("address", [
                _c("strong", [_vm._v(_vm._s(_vm.form.user.name))]),
                _c("br"),
                _vm._v(
                  "\n                    " + _vm._s(_vm.form.user.address)
                ),
                _c("br"),
                _vm._v(
                  "\n                    Email: " +
                    _vm._s(_vm.form.user.email) +
                    "\n                "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4 invoice-col" }, [
              _vm._v(
                "\n                Date: " +
                  _vm._s(_vm.form.request_date) +
                  "\n            "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12 table-responsive" }, [
              _c("table", { staticClass: "table table-striped" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.form.transactions, function(transaction) {
                    return _c("tr", [
                      _c("td", [
                        _vm._v(_vm._s(transaction.product.product_id))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(transaction.product.name))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(transaction.product.category.name))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(transaction.out_quantity))])
                    ])
                  })
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _vm._m(1),
            _vm._v(" "),
            _vm.$root.store.state.user.file
              ? _c("div", { staticClass: "col-6" }, [
                  _c(
                    "label",
                    { staticClass: "lead", attrs: { for: "signature" } },
                    [_vm._v("Signature")]
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("img", {
                    attrs: {
                      src: "/storage/images/" + _vm.$root.store.state.user.file,
                      name: "signature",
                      alt: "signature"
                    }
                  })
                ])
              : _vm._e()
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Product Id")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Category")]),
        _vm._v(" "),
        _c("th", [_vm._v("Out Quantity")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("p", {
        staticClass: "text-muted well well-sm no-shadow",
        staticStyle: { "margin-top": "10px" }
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-54c2a540", module.exports)
  }
}

/***/ })

});