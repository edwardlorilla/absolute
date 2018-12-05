webpackJsonp([4],{

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(892)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(894)
/* template */
var __vue_template__ = __webpack_require__(895)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Profile\\Setting.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ec9d8e2", Component.options)
  } else {
    hotAPI.reload("data-v-2ec9d8e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(861)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(863)
/* template */
var __vue_template__ = __webpack_require__(864)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-29097d12"
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\UploadFile\\UploadButton.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29097d12", Component.options)
  } else {
    hotAPI.reload("data-v-29097d12", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(862);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(98)("007ef53e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-29097d12\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UploadButton.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-29097d12\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UploadButton.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.jbtn-file[data-v-29097d12] {\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n}\n.jbtn-file input[type=file][data-v-29097d12] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    min-width: 100%;\n    min-height: 100%;\n    text-align: right;\n    filter: alpha(opacity=0);\n    opacity: 0;\n    outline: none;\n    cursor: inherit;\n    display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ 863:
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
    name: 'upload-button',
    props: {
        selectedCallback: Function,
        title: String,
        multipleupload: {
            type: Boolean,
            default: false
        },
        api: String,
        nameupload: String
    },
    methods: {
        fileSelected: function fileSelected(e) {
            var vm = this;
            var form = new FormData();
            form.append('file', e.target.files[0]);
            form.append('_id', vm.$root.store.state.user.id);

            if (vm.$root.store.state.user.photo) {
                form.append('photo', _.toString(vm.$root.store.state.user.photo.file));
                form.append('photo_id', _.toString(vm.$root.store.state.user.photo.id));
            }
            axios.post(vm.api, form).then(function (response) {
                console.log(response.data);
                vm.$root.store.state.user.photo = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
});

/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    { ref: "form", attrs: { method: "post", enctype: "multipart/form-data" } },
    [
      _c(
        "div",
        {
          staticClass: "btn btn-primary jbtn-file",
          staticStyle: { "margin-top": "10px" }
        },
        [
          _vm._v("\n        " + _vm._s(_vm.title) + "\n        "),
          _c("input", {
            ref: "inputFile",
            attrs: {
              type: "file",
              name: _vm.nameupload,
              multiple: _vm.multipleupload
            },
            on: { input: _vm.fileSelected }
          })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-29097d12", module.exports)
  }
}

/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(893);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(98)("23f4098a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ec9d8e2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Setting.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ec9d8e2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Setting.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\n.yum-file {\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n}\n.yum-file input[type=file] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    min-width: 100%;\n    min-height: 100%;\n    text-align: right;\n    filter: alpha(opacity=0);\n    opacity: 0;\n    outline: none;\n    cursor: inherit;\n    display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UploadFile_UploadButton_vue__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UploadFile_UploadButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UploadFile_UploadButton_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        UploadButton: __WEBPACK_IMPORTED_MODULE_0__UploadFile_UploadButton_vue___default.a
    },
    data: function data() {
        return {
            setting_d: []
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        axios.get('/api/settings/1').then(function (response) {
            next(function (vm) {
                return vm.setData(response.data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var vm = this;
        axios.get('/api/settings/1').then(function (response) {
            vm.setData(response.data);
            next();
        });
    },

    methods: {
        setData: function setData(response) {
            this.setting_d = response;
        },
        form_m: function form_m() {
            var vm = this;
            var formdata = new FormData(vm.$refs.form);
            axios.post('/api/settings', formdata).then(function (response) {
                vm.$root.store.dispatch('settingChange', response.data);
            });
        }
    }

});

/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.setting_d
    ? _c(
        "form",
        {
          ref: "form",
          staticClass: "form-horizontal",
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.form_m($event)
            }
          }
        },
        [
          _c("div", { staticClass: "form-group" }, [
            _c("div", { staticClass: "text-center" }, [
              _c("img", {
                staticClass: "profile-user-img img-fluid img-circle",
                attrs: {
                  src: _vm.$root.store.state.setting.photo
                    ? "/storage/images/" +
                      _vm.$root.store.state.setting.photo.file
                    : "/storage/AdminLTELogo.png",
                  alt: "avatar"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              {
                staticClass: "col-sm-2 control-label",
                attrs: { for: "inputName" }
              },
              [_vm._v("Name")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-10" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.setting_d.name,
                    expression: "setting_d.name"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", name: "name", placeholder: "Name" },
                domProps: { value: _vm.setting_d.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.setting_d, "name", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1)
        ]
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "label",
        { staticClass: "col-sm-2 control-label", attrs: { for: "upload" } },
        [_vm._v("Upload")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-10" }, [
        _c("div", { staticClass: "btn btn-primary yum-file" }, [
          _vm._v("\n                Upload Logo\n                "),
          _c("input", { attrs: { name: "file", type: "file" } })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "col-sm-offset-2 col-sm-10" }, [
        _c("input", {
          staticClass: "btn btn-danger",
          attrs: { type: "submit" }
        })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2ec9d8e2", module.exports)
  }
}

/***/ })

});