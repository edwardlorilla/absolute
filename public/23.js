webpackJsonp([23],{

/***/ 1008:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1009);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(98)("1d120bd6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ede6b78\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ede6b78\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1009:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1010:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            form: {
                name: '',
                description: '',
                reorder_point: '',
                dosage: '',
                medication: '',
                medicine_id: '',
                product_id: '',
                po_number: '',
                pr_number: '',
                quantity: '',
                vat: '',
                purchase_rate: '',
                mrp_rate: '',
                sale_rate: '',
                discount: 0,
                manufacture_date: '',
                expiry_date: '',
                packs: {
                    item_pack: '',
                    item_type: '',
                    sub_item: '',
                    sub_item_type: ''
                },
                category_id: '',
                package_id: '',
                rack: {
                    weight: 0,
                    rack_id: ''
                }
            },
            racks: [],
            categories: [],
            packages: [],
            isDisabled: false,
            labelPosition: 'left',
            errors: [],
            medicines: [],
            loading: false
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {

        if (to.params.id) {
            axios.get('/api/supplies/edit/' + to.params.id).then(function (response) {
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
            axios.get('/api/supplies/edit/' + to.params.id).then(function (response) {
                vm.setData(response.data);
                next();
            });
        } else {
            next();
        }
    },

    methods: {
        setData: function setData(data) {

            var vm = this;
            vm.form.name = data.name;
            vm.form.description = data.description;
            vm.form.reorder_point = data.reorder_point;
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
            vm.isDisabled = true;
            vm.errors = [];
            axios({
                method: 'post',
                url: '/api/' + vm.$route.meta.url + '?type=1',
                data: jsonObject
            }).then(function (response) {
                vm.$message({ message: response.statusText, type: 'success' });
                vm.isDisabled = false;
            }).catch(function (error) {
                if (error.response.data.errors && error.response.data.message) {
                    vm.errors = error.response.data.errors;
                    vm.$message({ message: error.response.data.message, type: 'error' });
                }
                vm.isDisabled = false;
            });
        }
    }
});

/***/ }),

/***/ 1011:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [
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
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Item Name")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.name,
                          expression: "form.name"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      attrs: {
                        required: "",
                        type: "text",
                        id: "name",
                        name: "name",
                        placeholder: "name"
                      },
                      domProps: { value: _vm.form.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "name", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "description" } }, [
                      _vm._v("Description")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.description,
                          expression: "form.description"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      attrs: {
                        required: "",
                        type: "text",
                        id: "description",
                        name: "description",
                        placeholder: "description"
                      },
                      domProps: { value: _vm.form.description },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "description", $event.target.value)
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
                          value: _vm.form.reorder_point,
                          expression: "form.reorder_point"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      attrs: {
                        required: "",
                        type: "number",
                        id: "reorder_point",
                        name: "reorder_point",
                        placeholder: "reorder_point"
                      },
                      domProps: { value: _vm.form.reorder_point },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "reorder_point",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "submit", loading: _vm.isDisabled }
                },
                [_vm._v("Save Information\n                    ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      _vm.$router.push("/" + _vm.$route.meta.url)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                        Cancel\n                    "
                  )
                ]
              )
            ])
          ])
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "m-0" }, [_vm._v("Add New Supply")])
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

/***/ }),

/***/ 853:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1008)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(1010)
/* template */
var __vue_template__ = __webpack_require__(1011)
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


/***/ })

});