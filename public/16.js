webpackJsonp([16],{

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(16)
/* script */
var __vue_script__ = __webpack_require__(831)
/* template */
var __vue_template__ = __webpack_require__(832)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Profile\\Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78c24430", Component.options)
  } else {
    hotAPI.reload("data-v-78c24430", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 831:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            edit_d: {}
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        axios.get('/api/users/edit/' + window.Laravel.userId).then(function (response) {
            next(function (vm) {
                return vm.setData(response.data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var vm = this;
        axios.get('/api/users/edit/' + window.Laravel.userId).then(function (response) {
            vm.setData(response.data);
            next();
        });
    },

    methods: {
        setData: function setData(response) {
            this.edit_d = response;
        },
        edit_m: function edit_m() {
            var vm = this;

            axios.post('/api/users', vm.edit_d).then(function (response) {
                vm.$root.store.dispatch('userChange', response.data);
            });
        }
    }
});

/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      ref: "form",
      staticClass: "form-horizontal",
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.edit_m($event)
        }
      }
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c(
          "label",
          { staticClass: "col-sm-2 control-label", attrs: { for: "name" } },
          [_vm._v("Name")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-10" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.edit_d.name,
                expression: "edit_d.name"
              }
            ],
            staticClass: "form-control",
            attrs: {
              name: "name",
              type: "name",
              id: "name",
              placeholder: "Name"
            },
            domProps: { value: _vm.edit_d.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.edit_d, "name", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c(
          "label",
          { staticClass: "col-sm-2 control-label", attrs: { for: "email" } },
          [_vm._v("Email")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-10" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.edit_d.email,
                expression: "edit_d.email"
              }
            ],
            staticClass: "form-control",
            attrs: {
              name: "email",
              type: "email",
              id: "email",
              placeholder: "Email"
            },
            domProps: { value: _vm.edit_d.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.edit_d, "email", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c(
          "label",
          { staticClass: "col-sm-2 control-label", attrs: { for: "address" } },
          [_vm._v("Address")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-10" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.edit_d.address,
                expression: "edit_d.address"
              }
            ],
            staticClass: "form-control",
            attrs: {
              name: "address",
              type: "text",
              id: "address",
              placeholder: "Address"
            },
            domProps: { value: _vm.edit_d.address },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.edit_d, "address", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c(
          "label",
          { staticClass: "col-sm-2 control-label", attrs: { for: "phone" } },
          [_vm._v("Phone")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-10" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.edit_d.phone,
                expression: "edit_d.phone"
              }
            ],
            staticClass: "form-control",
            attrs: {
              name: "phone",
              type: "number",
              id: "phone",
              placeholder: "Phone"
            },
            domProps: { value: _vm.edit_d.phone },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.edit_d, "phone", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _vm._m(0)
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "col-sm-offset-2 col-sm-10" }, [
        _c(
          "button",
          { staticClass: "btn btn-danger", attrs: { type: "submit" } },
          [_vm._v("Submit")]
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-78c24430", module.exports)
  }
}

/***/ })

});