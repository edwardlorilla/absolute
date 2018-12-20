webpackJsonp([19],{

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1003);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(98)("20697783", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ff37e1c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./print_requisition.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ff37e1c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./print_requisition.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\np {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline\n}\ntable.report-container {\n    page-break-after: always;\n}\nthead.report-header {\n    display: table-header-group;\n}\ntfoot.report-footer {\n    display: table-footer-group;\n}\n", ""]);

// exports


/***/ }),

/***/ 1004:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        return {
            data: {
                supplies: []
            },
            iterateRow: 32,
            balanceQuantity: 0
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        getData('requisitions/print/' + to.params.id, to.query, function (err, data) {
            next(function (vm) {
                return vm.setData(err, data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var _this = this;

        getData('requisitions/print/' + to.params.id, to.query, function (err, data) {
            _this.setData(err, data);
            next();
        });
    },

    computed: {
        differenceResult: function differenceResult() {
            var vm = this;
            return vm.data ? vm.iterateRow - vm.data.supplies.length > 0 ? vm.iterateRow - vm.data.supplies.length : 0 : null;
        }
    },
    methods: {
        setData: function setData(err, data) {
            var vm = this;
            if (err) {

                if (err.response.status === 404) {
                    vm.$router.push({ name: 'error.not-found', params: { '0': '/' } });
                }

                vm.error = err.toString();
            } else {

                vm.data = data.data;
                vm.balanceQuantity = _.reduce(vm.data.supplies, function (sum, item) {
                    return sum + item.tracks[0].check * (item.unit_cost ? item.unit_cost : 0);
                }, 0);
            }
        }
    }
});

/***/ }),

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dv" }, [
    _c("div", { staticClass: "dv-header" }, [
      _c(
        "div",
        { staticClass: "dv-header-title" },
        [
          _c(
            "el-button",
            {
              directives: [
                {
                  name: "print",
                  rawName: "v-print",
                  value: "#y_request",
                  expression: "'#y_request'"
                }
              ],
              attrs: { size: "mini", type: "info" }
            },
            [_vm._v("Print Requisition And Issue Slip")]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "WordSection1", attrs: { id: "y_request" } }, [
      _c("div", { attrs: { align: "center" } }, [
        _c(
          "table",
          {
            staticClass: "MsoTableGrid report-container",
            staticStyle: {
              "border-collapse": "collapse",
              border: "none",
              "mso-border-alt": "solid windowtext .5pt",
              "mso-yfti-tbllook": "1184",
              "mso-padding-alt": "0in 5.4pt 0in 5.4pt"
            },
            attrs: { border: "1", cellspacing: "0", cellpadding: "0" }
          },
          [
            _c("thead", { staticClass: "report-header " }, [
              _vm._m(0),
              _vm._v(" "),
              _c("tr", { staticStyle: { "mso-yfti-irow": "1" } }, [
                _c(
                  "td",
                  {
                    staticStyle: {
                      width: "148.25pt",
                      border: "solid windowtext 1.0pt",
                      "border-top": "none",
                      "mso-border-top-alt": "solid windowtext .5pt",
                      "mso-border-alt": "solid windowtext .5pt",
                      padding: "0in 5.4pt 0in 5.4pt"
                    },
                    attrs: { width: "198", colspan: "4", valign: "top" }
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass: "MsoNormal",
                        staticStyle: {
                          "margin-bottom": ".0001pt",
                          "line-height": "normal"
                        }
                      },
                      [
                        _vm._v(
                          "\n                            Division: " +
                            _vm._s(
                              _vm.data.division_id ? _vm.data.division.name : ""
                            )
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticStyle: {
                      width: "2.25in",
                      "border-top": "none",
                      "border-left": "none",
                      "border-bottom": "solid windowtext 1.0pt",
                      "border-right": "solid windowtext 1.0pt",
                      "mso-border-top-alt": "solid windowtext .5pt",
                      "mso-border-left-alt": "solid windowtext .5pt",
                      "mso-border-alt": "solid windowtext .5pt",
                      padding: "0in 5.4pt 0in 5.4pt"
                    },
                    attrs: { width: "216", colspan: "3", valign: "top" }
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass: "MsoNormal",
                        staticStyle: {
                          "margin-bottom": ".0001pt",
                          "line-height": "normal"
                        }
                      },
                      [
                        _c("span", { staticClass: "SpellE" }, [
                          _vm._v(
                            "Responsibility: " +
                              _vm._s(_vm.data.responsibilities) +
                              " "
                          )
                        ]),
                        _vm._v(":")
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticStyle: {
                      width: "133.5pt",
                      "border-top": "none",
                      "border-left": "none",
                      "border-bottom": "solid windowtext 1.0pt",
                      "border-right": "solid windowtext 1.0pt",
                      "mso-border-top-alt": "solid windowtext .5pt",
                      "mso-border-left-alt": "solid windowtext .5pt",
                      "mso-border-alt": "solid windowtext .5pt",
                      padding: "0in 5.4pt 0in 5.4pt"
                    },
                    attrs: { width: "178", colspan: "4", valign: "top" }
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass: "MsoNormal",
                        staticStyle: {
                          "margin-bottom": ".0001pt",
                          "line-height": "normal"
                        }
                      },
                      [
                        _vm._v(
                          "\n                            Date: " +
                            _vm._s(
                              _vm
                                .$moment(_vm.data.updated_at)
                                .format("MM-DD-YY")
                            )
                        )
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("tr", { staticStyle: { "mso-yfti-irow": "2" } }, [
                _c(
                  "td",
                  {
                    staticStyle: {
                      width: "148.25pt",
                      border: "solid windowtext 1.0pt",
                      "border-top": "none",
                      "mso-border-top-alt": "solid windowtext .5pt",
                      "mso-border-alt": "solid windowtext .5pt",
                      padding: "0in 5.4pt 0in 5.4pt"
                    },
                    attrs: { width: "198", colspan: "4", valign: "top" }
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass: "MsoNormal",
                        staticStyle: {
                          "margin-bottom": ".0001pt",
                          "line-height": "normal"
                        }
                      },
                      [
                        _vm._v(
                          "\n                            Office: " +
                            _vm._s(_vm.data.office)
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticStyle: {
                      width: "133.5pt",
                      "border-top": "none",
                      "border-left": "none",
                      "border-bottom": "solid windowtext 1.0pt",
                      "border-right": "solid windowtext 1.0pt",
                      "mso-border-top-alt": "solid windowtext .5pt",
                      "mso-border-left-alt": "solid windowtext .5pt",
                      "mso-border-alt": "solid windowtext .5pt",
                      padding: "0in 5.4pt 0in 5.4pt"
                    },
                    attrs: { width: "178", colspan: "4", valign: "top" }
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass: "MsoNormal",
                        staticStyle: {
                          "margin-bottom": ".0001pt",
                          "line-height": "normal"
                        }
                      },
                      [
                        _vm._v(
                          "\n                            Date: " +
                            _vm._s(
                              _vm
                                .$moment(_vm.data.updated_at)
                                .format("MM-DD-YY")
                            )
                        )
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("tr", { staticStyle: { "mso-yfti-irow": "3" } }, [
                _c(
                  "td",
                  {
                    staticStyle: {
                      width: "539.5pt",
                      border: "solid windowtext 1.0pt",
                      "border-top": "none",
                      "mso-border-top-alt": "solid windowtext .5pt",
                      "mso-border-alt": "solid windowtext .5pt",
                      padding: "0in 5.4pt 0in 5.4pt"
                    },
                    attrs: { width: "719", colspan: "14", valign: "top" }
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass: "MsoNormal",
                        staticStyle: {
                          "margin-bottom": ".0001pt",
                          "line-height": "normal"
                        },
                        attrs: { align: "center" }
                      },
                      [
                        _vm._v(
                          "\n                            Source: " +
                            _vm._s(
                              _vm.data.source_id ? _vm.data.source.name : ""
                            )
                        )
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _vm._m(4),
              _vm._v(" "),
              _c("tr", { staticStyle: { "mso-yfti-irow": "5" } }, [
                _vm._m(5),
                _vm._v(" "),
                _vm._m(6),
                _vm._v(" "),
                _vm._m(7),
                _vm._v(" "),
                _vm._m(8),
                _vm._v(" "),
                _vm._m(9),
                _vm._v(" "),
                _vm._m(10),
                _vm._v(" "),
                _vm._m(11),
                _vm._v(" "),
                _vm._m(12),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticStyle: {
                      width: "60.7pt",
                      "border-top": "none",
                      "border-left": "none",
                      "border-bottom": "solid windowtext 1.0pt",
                      "border-right": "solid windowtext 1.0pt",
                      "mso-border-top-alt": "solid windowtext .5pt",
                      "mso-border-left-alt": "solid windowtext .5pt",
                      "mso-border-alt": "solid windowtext .5pt",
                      padding: "0in 5.4pt 0in 5.4pt"
                    },
                    attrs: { width: "81", colspan: "2" }
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass: "MsoNormal",
                        staticStyle: {
                          "margin-bottom": ".0001pt",
                          "text-align": "center",
                          "line-height": "normal"
                        },
                        attrs: { align: "center" }
                      },
                      [
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "9.0pt",
                              "font-family": '"Arial",sans-serif'
                            }
                          },
                          [
                            _vm._v("Total Cost\n                        "),
                            _c("p", [_vm._v(_vm._s(_vm.balanceQuantity))])
                          ]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(13)
              ])
            ]),
            _vm._v(" "),
            _c("tfoot", { staticClass: "report-footer" }, [
              _c("tr", { staticStyle: { "mso-yfti-irow": "7" } }, [
                _vm._m(14),
                _vm._v(" "),
                _vm._m(15),
                _vm._v(" "),
                _vm._m(16),
                _vm._v(" "),
                _vm._m(17),
                _vm._v(" "),
                _vm._m(18),
                _vm._v(" "),
                _vm._m(19),
                _vm._v(" "),
                _vm._m(20),
                _vm._v(" "),
                _vm._m(21),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticStyle: {
                      width: "60.7pt",
                      "border-top": "none",
                      "border-left": "none",
                      "border-bottom": "solid windowtext 1.0pt",
                      "border-right": "solid windowtext 1.0pt",
                      "mso-border-top-alt": "solid windowtext .5pt",
                      "mso-border-left-alt": "solid windowtext .5pt",
                      "mso-border-alt": "solid windowtext .5pt",
                      padding: "0in 5.4pt 0in 5.4pt"
                    },
                    attrs: { width: "81", colspan: "2" }
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass: "MsoNormal",
                        staticStyle: {
                          "margin-bottom": ".0001pt",
                          "text-align": "center",
                          "line-height": "normal"
                        },
                        attrs: { align: "center" }
                      },
                      [
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "9.0pt",
                              "font-family": '"Arial",sans-serif'
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.balanceQuantity) +
                                "\n                        "
                            ),
                            _c("p")
                          ]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(22)
              ]),
              _vm._v(" "),
              _vm._m(23),
              _vm._v(" "),
              _vm._m(24),
              _vm._v(" "),
              _vm._m(25),
              _vm._v(" "),
              _vm._m(26),
              _vm._v(" "),
              _c(
                "tr",
                { staticStyle: { "mso-yfti-irow": "12", height: "8.5pt" } },
                [
                  _vm._m(27),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticStyle: {
                        width: "140.7pt",
                        "border-top": "none",
                        "border-left": "none",
                        "border-bottom": "solid windowtext 1.0pt",
                        "border-right": "solid windowtext 1.0pt",
                        "mso-border-top-alt": "solid windowtext .5pt",
                        "mso-border-left-alt": "solid windowtext .5pt",
                        "mso-border-alt": "solid windowtext .5pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "8.5pt"
                      },
                      attrs: { width: "188", colspan: "3" }
                    },
                    [
                      _c(
                        "p",
                        {
                          staticClass: "MsoNormal",
                          staticStyle: {
                            "margin-bottom": ".0001pt",
                            "text-align": "center",
                            "line-height": "normal"
                          },
                          attrs: { align: "center" }
                        },
                        [
                          _c(
                            "b",
                            {
                              staticStyle: { "mso-bidi-font-weight": "normal" }
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticStyle: {
                                    "font-size": "9.0pt",
                                    "font-family": '"Arial",sans-serif'
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$root.store.state.user
                                        ? _vm.$root.store.state.user.name
                                        : ""
                                    ) + "\n                        "
                                  ),
                                  _c("p")
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticStyle: {
                        width: "107.9pt",
                        "border-top": "none",
                        "border-left": "none",
                        "border-bottom": "solid windowtext 1.0pt",
                        "border-right": "solid windowtext 1.0pt",
                        "mso-border-top-alt": "solid windowtext .5pt",
                        "mso-border-left-alt": "solid windowtext .5pt",
                        "mso-border-alt": "solid windowtext .5pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "8.5pt"
                      },
                      attrs: { width: "144", colspan: "4" }
                    },
                    [
                      _c(
                        "p",
                        {
                          staticClass: "MsoNormal",
                          staticStyle: {
                            "margin-bottom": ".0001pt",
                            "text-align": "center",
                            "line-height": "normal"
                          },
                          attrs: { align: "center" }
                        },
                        [
                          _c(
                            "b",
                            {
                              staticStyle: { "mso-bidi-font-weight": "normal" }
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticStyle: {
                                    "font-size": "9.0pt",
                                    "font-family": '"Arial",sans-serif'
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.data.division_id
                                        ? _vm.data.division.supply_division
                                        : ""
                                    ) + "\n                        "
                                  ),
                                  _c("p")
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticStyle: {
                        width: "107.9pt",
                        "border-top": "none",
                        "border-left": "none",
                        "border-bottom": "solid windowtext 1.0pt",
                        "border-right": "solid windowtext 1.0pt",
                        "mso-border-top-alt": "solid windowtext .5pt",
                        "mso-border-left-alt": "solid windowtext .5pt",
                        "mso-border-alt": "solid windowtext .5pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "8.5pt"
                      },
                      attrs: { width: "144", colspan: "2" }
                    },
                    [
                      _c(
                        "p",
                        {
                          staticClass: "MsoNormal",
                          staticStyle: {
                            "margin-bottom": ".0001pt",
                            "text-align": "center",
                            "line-height": "normal"
                          },
                          attrs: { align: "center" }
                        },
                        [
                          _c(
                            "b",
                            {
                              staticStyle: { "mso-bidi-font-weight": "normal" }
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticStyle: {
                                    "font-size": "9.0pt",
                                    "font-family": '"Arial",sans-serif'
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.data.location_id
                                        ? _vm.data.location.name
                                        : ""
                                    ) + "\n                        "
                                  ),
                                  _c("p")
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(28),
              _vm._v(" "),
              _vm._m(29),
              _vm._v(" "),
              _vm._m(30),
              _vm._v(" "),
              _vm._m(31),
              _vm._v(" "),
              _vm._m(32),
              _vm._v(" "),
              _vm._m(33)
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              { staticClass: "report-content" },
              [
                _vm._l(_vm.data.supplies, function(item) {
                  return _c("tr", { staticStyle: { "mso-yfti-irow": "6" } }, [
                    _c(
                      "td",
                      {
                        staticStyle: {
                          width: "58.25pt",
                          border: "solid windowtext 1.0pt",
                          "border-top": "none",
                          "mso-border-top-alt": "solid windowtext .5pt",
                          "mso-border-alt": "solid windowtext .5pt",
                          padding: "0in 5.4pt 0in 5.4pt"
                        },
                        attrs: { width: "78", colspan: "2" }
                      },
                      [
                        _c(
                          "p",
                          {
                            staticClass: "MsoNormal",
                            staticStyle: {
                              "margin-bottom": ".0001pt",
                              "text-align": "center",
                              "line-height": "normal"
                            },
                            attrs: { align: "center" }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-size": "9.0pt",
                                  "font-family": '"Arial",sans-serif'
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(item.supply_id) +
                                    "\n                        "
                                ),
                                _c("p")
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          width: "31.2pt",
                          "border-top": "none",
                          "border-left": "none",
                          "border-bottom": "solid windowtext 1.0pt",
                          "border-right": "solid windowtext 1.0pt",
                          "mso-border-top-alt": "solid windowtext .5pt",
                          "mso-border-left-alt": "solid windowtext .5pt",
                          "mso-border-alt": "solid windowtext .5pt",
                          padding: "0in 5.4pt 0in 5.4pt"
                        },
                        attrs: { width: "42" }
                      },
                      [
                        _c(
                          "p",
                          {
                            staticClass: "MsoNormal",
                            staticStyle: {
                              "margin-bottom": ".0001pt",
                              "text-align": "center",
                              "line-height": "normal"
                            },
                            attrs: { align: "center" }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-size": "9.0pt",
                                  "font-family": '"Arial",sans-serif'
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(item.unit_id ? item.unit.name : "") +
                                    "\n                        "
                                ),
                                _c("p")
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          width: "58.8pt",
                          "border-top": "none",
                          "border-left": "none",
                          "border-bottom": "solid windowtext 1.0pt",
                          "border-right": "solid windowtext 1.0pt",
                          "mso-border-top-alt": "solid windowtext .5pt",
                          "mso-border-left-alt": "solid windowtext .5pt",
                          "mso-border-alt": "solid windowtext .5pt",
                          padding: "0in 5.4pt 0in 5.4pt"
                        },
                        attrs: { width: "78" }
                      },
                      [
                        _c(
                          "p",
                          {
                            staticClass: "MsoNormal",
                            staticStyle: {
                              "margin-bottom": ".0001pt",
                              "text-align": "center",
                              "line-height": "normal"
                            },
                            attrs: { align: "center" }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-size": "9.0pt",
                                  "font-family": '"Arial",sans-serif'
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(item.description) +
                                    "\n                        "
                                ),
                                _c("p")
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          width: "34.75pt",
                          "border-top": "none",
                          "border-left": "none",
                          "border-bottom": "solid windowtext 1.0pt",
                          "border-right": "solid windowtext 1.0pt",
                          "mso-border-top-alt": "solid windowtext .5pt",
                          "mso-border-left-alt": "solid windowtext .5pt",
                          "mso-border-alt": "solid windowtext .5pt",
                          padding: "0in 5.4pt 0in 5.4pt"
                        },
                        attrs: { width: "46" }
                      },
                      [
                        _c(
                          "p",
                          {
                            staticClass: "MsoNormal",
                            staticStyle: {
                              "margin-bottom": ".0001pt",
                              "text-align": "center",
                              "line-height": "normal"
                            },
                            attrs: { align: "center" }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-size": "9.0pt",
                                  "font-family": '"Arial",sans-serif'
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(item.quantity) +
                                    "\n                        "
                                ),
                                _c("p")
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          width: "59.75pt",
                          "border-top": "none",
                          "border-left": "none",
                          "border-bottom": "solid windowtext 1.0pt",
                          "border-right": "solid windowtext 1.0pt",
                          "mso-border-top-alt": "solid windowtext .5pt",
                          "mso-border-left-alt": "solid windowtext .5pt",
                          "mso-border-alt": "solid windowtext .5pt",
                          padding: "0in 5.4pt 0in 5.4pt"
                        },
                        attrs: { width: "80" }
                      },
                      [
                        _c(
                          "p",
                          {
                            staticClass: "MsoNormal",
                            staticStyle: {
                              "margin-bottom": ".0001pt",
                              "text-align": "center",
                              "line-height": "normal"
                            },
                            attrs: { align: "center" }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-size": "9.0pt",
                                  "font-family": '"Arial",sans-serif'
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(item.unit_cost) +
                                    "\n                        "
                                ),
                                _c("p")
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          width: "67.5pt",
                          "border-top": "none",
                          "border-left": "none",
                          "border-bottom": "solid windowtext 1.0pt",
                          "border-right": "solid windowtext 1.0pt",
                          "mso-border-top-alt": "solid windowtext .5pt",
                          "mso-border-left-alt": "solid windowtext .5pt",
                          "mso-border-alt": "solid windowtext .5pt",
                          padding: "0in 5.4pt 0in 5.4pt"
                        },
                        attrs: { width: "90" }
                      },
                      [
                        _c(
                          "p",
                          {
                            staticClass: "MsoNormal",
                            staticStyle: {
                              "margin-bottom": ".0001pt",
                              "text-align": "center",
                              "line-height": "normal"
                            },
                            attrs: { align: "center" }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-size": "9.0pt",
                                  "font-family": '"Arial",sans-serif'
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    item.unit_cost
                                      ? item.unit_cost * item.quantity
                                      : ""
                                  ) + "\n                        "
                                ),
                                _c("p")
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          width: "47.15pt",
                          "border-top": "none",
                          "border-left": "none",
                          "border-bottom": "solid windowtext 1.0pt",
                          "border-right": "solid windowtext 1.0pt",
                          "mso-border-top-alt": "solid windowtext .5pt",
                          "mso-border-left-alt": "solid windowtext .5pt",
                          "mso-border-alt": "solid windowtext .5pt",
                          padding: "0in 5.4pt 0in 5.4pt"
                        },
                        attrs: { width: "63", colspan: "2" }
                      },
                      [
                        _c(
                          "p",
                          {
                            staticClass: "MsoNormal",
                            staticStyle: {
                              "margin-bottom": ".0001pt",
                              "text-align": "center",
                              "line-height": "normal"
                            },
                            attrs: { align: "center" }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-size": "9.0pt",
                                  "font-family": '"Arial",sans-serif'
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    item.tracks ? item.tracks[0].check : ""
                                  ) + "\n                        "
                                ),
                                _c("p")
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          width: "60.7pt",
                          "border-top": "none",
                          "border-left": "none",
                          "border-bottom": "solid windowtext 1.0pt",
                          "border-right": "solid windowtext 1.0pt",
                          "mso-border-top-alt": "solid windowtext .5pt",
                          "mso-border-left-alt": "solid windowtext .5pt",
                          "mso-border-alt": "solid windowtext .5pt",
                          padding: "0in 5.4pt 0in 5.4pt"
                        },
                        attrs: { width: "81", colspan: "2" }
                      },
                      [
                        _c(
                          "p",
                          {
                            staticClass: "MsoNormal",
                            staticStyle: {
                              "margin-bottom": ".0001pt",
                              "text-align": "center",
                              "line-height": "normal"
                            },
                            attrs: { align: "center" }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-size": "9.0pt",
                                  "font-family": '"Arial",sans-serif'
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(item.tracks ? item.unit_cost : "") +
                                    "\n                        "
                                ),
                                _c("p")
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          width: "60.7pt",
                          "border-top": "none",
                          "border-left": "none",
                          "border-bottom": "solid windowtext 1.0pt",
                          "border-right": "solid windowtext 1.0pt",
                          "mso-border-top-alt": "solid windowtext .5pt",
                          "mso-border-left-alt": "solid windowtext .5pt",
                          "mso-border-alt": "solid windowtext .5pt",
                          padding: "0in 5.4pt 0in 5.4pt"
                        },
                        attrs: { width: "81", colspan: "2" }
                      },
                      [
                        _c(
                          "p",
                          {
                            staticClass: "MsoNormal",
                            staticStyle: {
                              "margin-bottom": ".0001pt",
                              "text-align": "center",
                              "line-height": "normal"
                            },
                            attrs: { align: "center" }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-size": "9.0pt",
                                  "font-family": '"Arial",sans-serif'
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    item.tracks
                                      ? item.tracks[0].check * item.unit_cost
                                      : ""
                                  ) + "\n                        "
                                ),
                                _c("p")
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          width: "60.7pt",
                          "border-top": "none",
                          "border-left": "none",
                          "border-bottom": "solid windowtext 1.0pt",
                          "border-right": "solid windowtext 1.0pt",
                          "mso-border-top-alt": "solid windowtext .5pt",
                          "mso-border-left-alt": "solid windowtext .5pt",
                          "mso-border-alt": "solid windowtext .5pt",
                          padding: "0in 5.4pt 0in 5.4pt"
                        },
                        attrs: { width: "81" }
                      },
                      [
                        _c(
                          "p",
                          {
                            staticClass: "MsoNormal",
                            staticStyle: {
                              "margin-bottom": ".0001pt",
                              "text-align": "center",
                              "line-height": "normal"
                            },
                            attrs: { align: "center" }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-size": "9.0pt",
                                  "font-family": '"Arial",sans-serif'
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    item.tracks ? item.tracks[0].remarks : ""
                                  ) + "\n                        "
                                ),
                                _c("p")
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ])
                }),
                _vm._v(" "),
                _vm._l(_vm.differenceResult, function(item) {
                  return _vm.differenceResult
                    ? _c("tr", { staticStyle: { "mso-yfti-irow": "7" } }, [
                        _vm._m(34, true),
                        _vm._v(" "),
                        _vm._m(35, true),
                        _vm._v(" "),
                        _vm._m(36, true),
                        _vm._v(" "),
                        _vm._m(37, true),
                        _vm._v(" "),
                        _vm._m(38, true),
                        _vm._v(" "),
                        _vm._m(39, true),
                        _vm._v(" "),
                        _vm._m(40, true),
                        _vm._v(" "),
                        _vm._m(41, true),
                        _vm._v(" "),
                        _vm._m(42, true),
                        _vm._v(" "),
                        _vm._m(43, true)
                      ])
                    : _vm._e()
                })
              ],
              2
            )
          ]
        )
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
      "tr",
      { staticStyle: { "mso-yfti-irow": "0", "mso-yfti-firstrow": "yes" } },
      [
        _c(
          "td",
          {
            staticStyle: {
              width: "539.5pt",
              border: "solid windowtext 1.0pt",
              "mso-border-alt": "solid windowtext .5pt",
              padding: "0in 5.4pt 0in 5.4pt"
            },
            attrs: { width: "719", colspan: "14" }
          },
          [
            _c(
              "p",
              {
                staticClass: "MsoNormal",
                staticStyle: {
                  "margin-bottom": ".0001pt",
                  "text-align": "center",
                  "line-height": "normal"
                },
                attrs: { align: "center" }
              },
              [
                _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                  _vm._v(
                    "REQUISITION AND ISSUE SLIP\n                        "
                  ),
                  _c("p")
                ])
              ]
            ),
            _c(
              "p",
              {
                staticClass: "MsoNormal",
                staticStyle: {
                  "margin-bottom": ".0001pt",
                  "text-align": "center",
                  "line-height": "normal"
                },
                attrs: { align: "center" }
              },
              [
                _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                  _vm._v("City Government of Davao\n                        "),
                  _c("p")
                ])
              ]
            ),
            _c(
              "p",
              {
                staticClass: "MsoNormal",
                staticStyle: {
                  "margin-bottom": ".0001pt",
                  "text-align": "center",
                  "line-height": "normal"
                },
                attrs: { align: "center" }
              },
              [
                _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                  _vm._v("LGU ")
                ])
              ]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "95.75pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "128", colspan: "3", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt", "line-height": "normal" }
          },
          [_vm._v("\n                            RIS No. ")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "2.25in",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "216", colspan: "3", valign: "top" }
      },
      [
        _c("p", {
          staticClass: "MsoNormal",
          staticStyle: { "margin-bottom": ".0001pt", "line-height": "normal" }
        }),
        _c("p", [_vm._v(" ")]),
        _c("p")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "95.75pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "128", colspan: "3", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt", "line-height": "normal" }
          },
          [_vm._v("\n                            SAI No ")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticStyle: { "mso-yfti-irow": "4" } }, [
      _c(
        "td",
        {
          staticStyle: {
            width: "310.25pt",
            border: "solid windowtext 1.0pt",
            "border-top": "none",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "414", colspan: "7" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                _vm._v("Requisitions ")
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "td",
        {
          staticStyle: {
            width: "229.25pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "306", colspan: "7" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                _vm._v("Issuance ")
              ])
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "58.25pt",
          border: "solid windowtext 1.0pt",
          "border-top": "none",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "78", colspan: "2" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_vm._v("Stock No.\n                        "), _c("p")]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "31.2pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "42" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_vm._v("Unit\n                        "), _c("p")]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "58.8pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "78" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_vm._v("Description\n                        "), _c("p")]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "34.75pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "46" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_vm._v("QTY\n                        "), _c("p")]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "59.75pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "80" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_vm._v("Unit Cost\n                        "), _c("p")]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "67.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "90" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_vm._v("Total Cost\n                        "), _c("p")]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "47.15pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "63", colspan: "2" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_vm._v("QTY\n                        "), _c("p")]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "60.7pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "81", colspan: "2" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_vm._v("Unit Cost\n                        "), _c("p")]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "60.7pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "81" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_vm._v("Remarks\n                        "), _c("p")]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "58.25pt",
          border: "solid windowtext 1.0pt",
          "border-top": "none",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "78", colspan: "2" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_c("p", [_vm._v(" ")])]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "31.2pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "42" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_c("p", [_vm._v(" ")])]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "58.8pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "78" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_c("p", [_vm._v(" ")])]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "34.75pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "46" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_c("p", [_vm._v(" ")])]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "59.75pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "80" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_c("p", [_vm._v(" ")])]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "67.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "90" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_c("p", [_vm._v(" ")])]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "47.15pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "63", colspan: "2" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_c("p", [_vm._v(" ")])]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "60.7pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "81", colspan: "2" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-size": "9.0pt",
                    "font-family": '"Arial",sans-serif'
                  }
                },
                [_vm._v("Total:\n                        "), _c("p")]
              )
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "60.7pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "81" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_c("p", [_vm._v(" ")])]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticStyle: { "mso-yfti-irow": "8" } }, [
      _c(
        "td",
        {
          staticStyle: {
            width: "539.5pt",
            border: "solid windowtext 1.0pt",
            "border-top": "none",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "719", colspan: "14" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-size": "9.0pt",
                    "font-family": '"Arial",sans-serif'
                  }
                },
                [_c("p", [_vm._v(" ")])]
              )
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticStyle: { "mso-yfti-irow": "9" } }, [
      _c(
        "td",
        {
          staticStyle: {
            width: "539.5pt",
            border: "solid windowtext 1.0pt",
            "border-top": "none",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "719", colspan: "14" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-size": "9.0pt",
                    "font-family": '"Arial",sans-serif'
                  }
                },
                [_c("p", [_vm._v(" ")])]
              )
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticStyle: { "mso-yfti-irow": "10" } }, [
      _c(
        "td",
        {
          staticStyle: {
            width: "40.25pt",
            border: "solid windowtext 1.0pt",
            "border-top": "none",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "54" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-size": "9.0pt",
                    "font-family": '"Arial",sans-serif'
                  }
                },
                [_c("p", [_vm._v(" ")])]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "td",
        {
          staticStyle: {
            width: "142.75pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "190", colspan: "4" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "9.0pt",
                      "font-family": '"Arial",sans-serif'
                    }
                  },
                  [_vm._v("Requested By:\n                        "), _c("p")]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "td",
        {
          staticStyle: {
            width: "140.7pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "188", colspan: "3" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "9.0pt",
                      "font-family": '"Arial",sans-serif'
                    }
                  },
                  [_vm._v("Approved By:\n                        "), _c("p")]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "td",
        {
          staticStyle: {
            width: "107.9pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "144", colspan: "4" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "9.0pt",
                      "font-family": '"Arial",sans-serif'
                    }
                  },
                  [_vm._v("Issued By:\n                        "), _c("p")]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "td",
        {
          staticStyle: {
            width: "107.9pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "144", colspan: "2" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "9.0pt",
                      "font-family": '"Arial",sans-serif'
                    }
                  },
                  [_vm._v("Received By:\n                        "), _c("p")]
                )
              ])
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticStyle: { "mso-yfti-irow": "11" } }, [
      _c(
        "td",
        {
          staticStyle: {
            width: "40.25pt",
            border: "solid windowtext 1.0pt",
            "border-top": "none",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "54", rowspan: "4" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-size": "9.0pt",
                    "font-family": '"Arial",sans-serif'
                  }
                },
                [_c("p", [_vm._v(" ")])]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "td",
        {
          staticStyle: {
            width: "142.75pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "190", colspan: "4" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "9.0pt",
                      "font-family": '"Arial",sans-serif'
                    }
                  },
                  [_c("p", [_vm._v(" ")])]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "td",
        {
          staticStyle: {
            width: "140.7pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "188", colspan: "3" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "9.0pt",
                      "font-family": '"Arial",sans-serif'
                    }
                  },
                  [_c("p", [_vm._v(" ")])]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "td",
        {
          staticStyle: {
            width: "107.9pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "144", colspan: "4" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "9.0pt",
                      "font-family": '"Arial",sans-serif'
                    }
                  },
                  [_c("p", [_vm._v(" ")])]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "td",
        {
          staticStyle: {
            width: "107.9pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "144", colspan: "2" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "9.0pt",
                      "font-family": '"Arial",sans-serif'
                    }
                  },
                  [_c("p", [_vm._v(" ")])]
                )
              ])
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "142.75pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt",
          height: "8.5pt"
        },
        attrs: { width: "190", colspan: "4" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-size": "9.0pt",
                    "font-family": '"Arial",sans-serif'
                  }
                },
                [_vm._v("request\n                        "), _c("p")]
              )
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticStyle: { "mso-yfti-irow": "13" } }, [
      _c(
        "td",
        {
          staticStyle: {
            width: "142.75pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "190", colspan: "4" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "9.0pt",
                      "font-family": '"Arial",sans-serif'
                    }
                  },
                  [_c("p", [_vm._v(" ")])]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "td",
        {
          staticStyle: {
            width: "140.7pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "188", colspan: "3" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "8.0pt",
                      "font-family": '"Arial",sans-serif'
                    }
                  },
                  [
                    _vm._v(
                      "City Health Office/PSO-Designate\n                        "
                    ),
                    _c("p")
                  ]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "td",
        {
          staticStyle: {
            width: "107.9pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "144", colspan: "4" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "9.0pt",
                      "font-family": '"Arial",sans-serif'
                    }
                  },
                  [_vm._v("Supply Division\n                        "), _c("p")]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "td",
        {
          staticStyle: {
            width: "107.9pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "144", colspan: "2" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "9.0pt",
                      "font-family": '"Arial",sans-serif'
                    }
                  },
                  [_vm._v("title\n                        "), _c("p")]
                )
              ])
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticStyle: { "mso-yfti-irow": "14" } }, [
      _c(
        "td",
        {
          staticStyle: {
            width: "142.75pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "190", colspan: "4" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "9.0pt",
                      "font-family": '"Arial",sans-serif'
                    }
                  },
                  [_c("p", [_vm._v(" ")])]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "td",
        {
          staticStyle: {
            width: "140.7pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "188", colspan: "3" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "9.0pt",
                      "font-family": '"Arial",sans-serif'
                    }
                  },
                  [_c("p", [_vm._v(" ")])]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "td",
        {
          staticStyle: {
            width: "107.9pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "144", colspan: "4" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "9.0pt",
                      "font-family": '"Arial",sans-serif'
                    }
                  },
                  [_c("p", [_vm._v(" ")])]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "td",
        {
          staticStyle: {
            width: "107.9pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "144", colspan: "2" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            },
            [
              _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "9.0pt",
                      "font-family": '"Arial",sans-serif'
                    }
                  },
                  [_c("p", [_vm._v(" ")])]
                )
              ])
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "tr",
      { staticStyle: { "mso-yfti-irow": "15", height: "5.0pt" } },
      [
        _c(
          "td",
          {
            staticStyle: {
              width: "539.5pt",
              border: "none",
              padding: "0in 5.4pt 0in 5.4pt",
              height: "5.0pt"
            },
            attrs: { width: "719", colspan: "14", valign: "top" }
          },
          [
            _c("p", {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            }),
            _c("p", [_vm._v(" ")]),
            _c("p")
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "tr",
      { staticStyle: { "mso-yfti-irow": "16", height: "5.0pt" } },
      [
        _c(
          "td",
          {
            staticStyle: {
              width: "539.5pt",
              border: "none",
              padding: "0in 5.4pt 0in 5.4pt",
              height: "5.0pt"
            },
            attrs: { width: "719", colspan: "14", valign: "top" }
          },
          [
            _c("p", {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            }),
            _c("p", [_vm._v(" ")]),
            _c("p")
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "tr",
      {
        staticStyle: {
          "mso-yfti-irow": "17",
          "mso-yfti-lastrow": "yes",
          height: "5.0pt"
        }
      },
      [
        _c(
          "td",
          {
            staticStyle: {
              width: "539.5pt",
              border: "none",
              padding: "0in 5.4pt 0in 5.4pt",
              height: "5.0pt"
            },
            attrs: { width: "719", colspan: "14", valign: "top" }
          },
          [
            _c("p", {
              staticClass: "MsoNormal",
              staticStyle: {
                "margin-bottom": ".0001pt",
                "text-align": "center",
                "line-height": "normal"
              },
              attrs: { align: "center" }
            }),
            _c("p", [_vm._v(" ")]),
            _c("p")
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { attrs: { height: "0" } }, [
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "61" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "27" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "48" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "90" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "53" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "90" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "101" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "21" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "51" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "74" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "18" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "21" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "71" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "93" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "58.25pt",
          border: "solid windowtext 1.0pt",
          "border-top": "none",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "78", colspan: "2" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_c("p", [_vm._v(" ")])]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "31.2pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "42" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_c("p", [_vm._v(" ")])]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "58.8pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "78" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_c("p", [_vm._v(" ")])]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "34.75pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "46" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_c("p", [_vm._v(" ")])]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "59.75pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "80" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_c("p", [_vm._v(" ")])]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "67.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "90" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_c("p", [_vm._v(" ")])]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "47.15pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "63", colspan: "2" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_c("p", [_vm._v(" ")])]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "60.7pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "81", colspan: "2" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c("b", { staticStyle: { "mso-bidi-font-weight": "normal" } }, [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-size": "9.0pt",
                    "font-family": '"Arial",sans-serif'
                  }
                },
                [_c("p")]
              )
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "60.7pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "81", colspan: "2" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_c("p")]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "60.7pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "81" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: {
              "margin-bottom": ".0001pt",
              "text-align": "center",
              "line-height": "normal"
            },
            attrs: { align: "center" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_c("p", [_vm._v(" ")])]
            )
          ]
        )
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5ff37e1c", module.exports)
  }
}

/***/ }),

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1002)
}
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(1004)
/* template */
var __vue_template__ = __webpack_require__(1005)
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
Component.options.__file = "resources\\assets\\js\\components\\Supplies\\print_requisition.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ff37e1c", Component.options)
  } else {
    hotAPI.reload("data-v-5ff37e1c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});