webpackJsonp([36],{

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(888)
/* template */
var __vue_template__ = __webpack_require__(889)
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
Component.options.__file = "resources\\assets\\js\\components\\Layout\\Profile\\Signature.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c4464e6c", Component.options)
  } else {
    hotAPI.reload("data-v-c4464e6c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 888:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            changeSignature: !!this.$root.store.state.user.file,
            option: {
                penColor: "rgb(0, 0, 0)",
                backgroundColor: "rgb(255,255,255)"
            }
        };
    },

    methods: {
        dataURItoBlob: function dataURItoBlob(dataURI) {
            var byteString = atob(dataURI.split(',')[1]);
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            var blob = new Blob([ab], { type: mimeString });
            return blob;
        },
        clear: function clear() {
            var _this = this;
            _this.$refs.signature.clear();
        },
        undo: function undo() {
            var _this = this;
            _this.$refs.signature.undo();
        },
        save: function save() {
            var vm = this;
            var png = vm.$refs.signature.save();
            var data = new FormData();
            data.append('file', vm.dataURItoBlob(png), 'file.png');
            data.append('photo', vm.$root.store.state.user.file);
            axios.post('/api/users/sign', data).then(function (response) {
                vm.$message({ message: response.statusText, type: 'success' });
                vm.isDisabled = false;
                vm.dialogVisible = false;
                vm.changeSignature = true;
                vm.$root.store.state.user.file = response.data.file;
            }).catch(function (error) {
                console.log(error);
                if (error) {
                    if (error.response.data.errors && error.response.data.message) {
                        vm.$message({ message: error.response.data.message, type: 'error' });
                    }
                }
                vm.isDisabled = false;
            });
        }
    }

});

/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("form", { ref: "form", staticClass: "form-horizontal" }, [
    _c("div", { staticClass: "card-body" }, [
      _c("div", { staticClass: "form-group" }, [
        _c(
          "label",
          { staticClass: "col-sm-2 control-label", attrs: { for: "name" } },
          [_vm._v("User Signature")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticStyle: {
              display: "block",
              "margin-right": "auto",
              "margin-left": "auto",
              border: "1px solid #000000"
            }
          },
          [
            _vm.changeSignature
              ? _c("img", {
                  attrs: {
                    height: "200px",
                    width: "400px",
                    src: "/storage/images/" + _vm.$root.store.state.user.file,
                    alt: "user-signature"
                  }
                })
              : _c("vue-signature", {
                  ref: "signature",
                  attrs: { sigOption: _vm.option, w: "400px", h: "200px" }
                })
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-footer" }, [
      _vm.changeSignature
        ? _c(
            "div",
            [
              _c(
                "el-button",
                {
                  attrs: { type: "success" },
                  on: {
                    click: function($event) {
                      _vm.changeSignature = !_vm.changeSignature
                    }
                  }
                },
                [_vm._v("Edit Signature")]
              )
            ],
            1
          )
        : _c(
            "div",
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.changeSignature = !_vm.changeSignature
                    }
                  }
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.clear } }, [_vm._v("Clear")]),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.undo } }, [_vm._v("Undo")]),
              _vm._v(" "),
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.save } },
                [_vm._v("Confirm")]
              )
            ],
            1
          )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c4464e6c", module.exports)
  }
}

/***/ })

});