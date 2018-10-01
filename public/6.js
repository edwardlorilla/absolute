webpackJsonp([6],{

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(16)
/* script */
var __vue_script__ = __webpack_require__(829)
/* template */
var __vue_template__ = __webpack_require__(830)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Profile\\Profile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40a9ffbb", Component.options)
  } else {
    hotAPI.reload("data-v-40a9ffbb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(823)
}
var normalizeComponent = __webpack_require__(16)
/* script */
var __vue_script__ = __webpack_require__(825)
/* template */
var __vue_template__ = __webpack_require__(826)
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

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(824);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(61)("007ef53e", content, false, {});
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

/***/ 824:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "\n.jbtn-file[data-v-29097d12] {\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n}\n.jbtn-file input[type=file][data-v-29097d12] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    min-width: 100%;\n    min-height: 100%;\n    text-align: right;\n    filter: alpha(opacity=0);\n    opacity: 0;\n    outline: none;\n    cursor: inherit;\n    display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ 825:
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

/***/ 826:
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

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UploadFile_UploadButton_vue__ = __webpack_require__(822);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            dataToggle: 'edit'
        };
    },


    computed: {
        filterRoute: function filterRoute() {
            var vm = this,
                routes = [{
                to: "profile.edit",
                name: 'Profile',
                roles: ['superadministrator', 'administrator', 'doctor', 'customer']
            }, {
                to: "setting.index",
                name: 'Setting',
                roles: ['superadministrator']
            }, {
                to: "change.password",
                name: 'Change Password',
                roles: ['superadministrator', 'administrator', 'doctor', 'customer']
            }],
                selectedFilter = _.map(routes, function (select) {
                var filter = _.filter(select.roles, function (role) {
                    return window.Laravel.permissions.indexOf(role) !== -1;
                });
                return !_.isEmpty(filter) ? select : null;
            });
            return _.compact(selectedFilter);
        },
        user_$: function user_$() {
            return this.$root.store.state.user;
        }
    }
});

/***/ }),

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticClass: "card card-primary card-outline" }, [
        _c(
          "div",
          { staticClass: "card-body box-profile" },
          [
            _c("div", { staticClass: "text-center" }, [
              _c("img", {
                staticClass: "profile-user-img img-fluid img-circle",
                attrs: {
                  src: _vm.user_$.photo
                    ? "/storage/images/" + _vm.user_$.photo.file
                    : "/storage/avatar.png",
                  alt: "avatar"
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "text-center" },
              [
                _c("upload-button", {
                  attrs: { api: "/api/uploads", title: "Upload" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("h3", { staticClass: "profile-username text-center" }, [
              _vm._v(_vm._s(_vm.user_$.name))
            ]),
            _vm._v(" "),
            _vm._l(_vm.$root.store.state.user.roles, function(role) {
              return _c("p", { staticClass: "text-muted text-center" }, [
                _vm._v("\n                    " + _vm._s(role.display_name))
              ])
            })
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card card-primary" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("p", { staticClass: "text-muted" }, [
            _vm._v(
              "\n                    " +
                _vm._s(_vm.$root.store.state.user.email) +
                "\n                "
            )
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("p", { staticClass: "text-muted" }, [
            _vm._v(_vm._s(_vm.$root.store.state.user.address))
          ]),
          _vm._v(" "),
          _c("hr")
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-9" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header p-2" }, [
          _c(
            "ul",
            { staticClass: "nav nav-pills" },
            _vm._l(_vm.filterRoute, function(route, index) {
              return _c(
                "li",
                { key: index, staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: route.to } }
                    },
                    [_vm._v(_vm._s(route.name) + "\n                        ")]
                  )
                ],
                1
              )
            })
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", [_c("router-view")], 1)
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("About Me")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("strong", [
      _c("i", { staticClass: "fa fa-book mr-1" }),
      _vm._v(" Email")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("strong", [
      _c("i", { staticClass: "fa fa-map-marker mr-1" }),
      _vm._v(" Location")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-40a9ffbb", module.exports)
  }
}

/***/ })

});