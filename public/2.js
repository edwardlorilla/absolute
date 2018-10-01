webpackJsonp([2],{

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(16)
/* script */
var __vue_script__ = __webpack_require__(881)
/* template */
var __vue_template__ = __webpack_require__(882)
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
Component.options.__file = "resources\\assets\\js\\components\\Supplies\\create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ede6b78", Component.options)
  } else {
    hotAPI.reload("data-v-7ede6b78", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 881:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            supply: {
                supply_id: '',
                name: '',
                quantity: '',
                purchase_order: '',
                reorder_point: ''
            }
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        if (to.params.id) {
            axios.get('/api/supplies' + (to.params.id ? '/' + to.params.id : '')).then(function (response) {
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
            axios.get('/api/supplies' + (to.params.id ? '/' + to.params.id : '')).then(function (response) {
                vm.setData(response.data);
                next();
            });
        } else {
            next();
        }
    },

    methods: {
        setData: function setData(response) {
            this.supply = response;
        },
        post_m: function post_m() {
            console.log('wow');
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

            axios.post('/api/supplies', jsonObject).then(function (response) {
                console.log(response.data);
            }).catch(function (response) {});
        }
    }
});

/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
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
        [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "supply_id" } }, [
                _vm._v("Supply ID")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.supply.supply_id,
                    expression: "supply.supply_id"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "supply_id", name: "supply_id" },
                domProps: { value: _vm.supply.supply_id },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.supply, "supply_id", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.supply.name,
                    expression: "supply.name"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "name", name: "name" },
                domProps: { value: _vm.supply.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.supply, "name", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "quantity" } }, [_vm._v("Quantity")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.supply.quantity,
                    expression: "supply.quantity"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "number", id: "quantity", name: "quantity" },
                domProps: { value: _vm.supply.quantity },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.supply, "quantity", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "purchase_order" } }, [
                _vm._v("Purchase Order")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.supply.purchase_order,
                    expression: "supply.purchase_order"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  id: "purchase_order",
                  name: "purchase_order"
                },
                domProps: { value: _vm.supply.purchase_order },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.supply, "purchase_order", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "reorder_point" } }, [
                _vm._v("Reorder Point")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.supply.reorder_point,
                    expression: "supply.reorder_point"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  id: "reorder_point",
                  name: "reorder_point"
                },
                domProps: { value: _vm.supply.reorder_point },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.supply, "reorder_point", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _vm._m(0)
        ]
      )
    ])
  ])
}
var staticRenderFns = [
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
    require("vue-hot-reload-api")      .rerender("data-v-7ede6b78", module.exports)
  }
}

/***/ })

});