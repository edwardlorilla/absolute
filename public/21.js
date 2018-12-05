webpackJsonp([21],{

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(988)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(990)
/* template */
var __vue_template__ = __webpack_require__(991)
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
Component.options.__file = "resources\\assets\\js\\components\\Supplies\\create_supply.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ff85f0c", Component.options)
  } else {
    hotAPI.reload("data-v-7ff85f0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(989);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(98)("5360b78c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ff85f0c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create_supply.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ff85f0c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create_supply.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 990:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            form: {

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


    methods: {
        onSubmit: function onSubmit() {
            var vm = this;
            var formData = new FormData(vm.$refs.form);

            vm.isDisabled = true;
            vm.errors = [];
            axios.post('/api/' + vm.$route.meta.url, formData).then(function (response) {
                vm.$message({ message: response.statusText, type: 'success' });
                vm.isDisabled = false;
                vm.$refs.form.resetFields();
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

/***/ 991:
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
            _vm._m(1),
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "name" } }, [_vm._v("Item Name")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control form-control-sm",
              attrs: {
                required: "",
                type: "text",
                id: "name",
                name: "name",
                placeholder: "name"
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
              staticClass: "form-control form-control-sm",
              attrs: {
                required: "",
                type: "text",
                id: "description",
                name: "description",
                placeholder: "description"
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
              staticClass: "form-control form-control-sm",
              attrs: {
                required: "",
                type: "number",
                id: "reorder_point",
                name: "reorder_point",
                placeholder: "reorder_point"
              }
            })
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ff85f0c", module.exports)
  }
}

/***/ })

});