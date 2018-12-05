webpackJsonp([20],{

/***/ 1000:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            data: [],
            supply: {},
            iterateRow: 48,
            balanceQuantity: 0
        };
    },

    computed: {
        iterateData: function iterateData() {
            var vm = this;
            var supply = vm.supply.quantity + vm.balanceQuantity;
            return _.map(vm.data, function (response) {
                supply -= response.receive_id ? response.receive.quantity : 0;
                response['balance'] = supply;
                return response;
            });
        },
        differenceResult: function differenceResult() {
            var vm = this;
            return vm.iterateRow - vm.data.length > 0 ? vm.iterateRow - vm.data.length : 0;
        }
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        getData('tracks/print/' + to.params.id, to.query, function (err, data) {
            next(function (vm) {
                return vm.setData(err, data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var _this = this;

        getData('tracks/print/' + to.params.id, to.query, function (err, data) {
            _this.setData(err, data);
            next();
        });
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

                vm.data = data.data.model.data;
                vm.balanceQuantity = _.reduce(vm.data, function (sum, n) {
                    return sum + (n.receive_id ? n.receive.quantity : 0);
                }, 0);
                vm.supply = data.data.supply;
            }
        }
    }
});

/***/ }),

/***/ 1001:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c("div", { staticClass: "dv" }, [
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
                [_vm._v("Print Supply Legder")]
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
                staticClass: "MsoTableGrid",
                staticStyle: {
                  width: "575.75pt",
                  "border-collapse": "collapse",
                  border: "none",
                  "mso-yfti-tbllook": "1184",
                  "mso-padding-alt": "0in 5.4pt 0in 5.4pt"
                },
                attrs: {
                  border: "1",
                  cellspacing: "0",
                  cellpadding: "0",
                  width: "768"
                }
              },
              [
                _c(
                  "tr",
                  {
                    staticStyle: {
                      "mso-yfti-irow": "0",
                      "mso-yfti-firstrow": "yes"
                    }
                  },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          width: "117.0pt",
                          border: "none",
                          padding: "0in 5.4pt 0in 5.4pt"
                        },
                        attrs: { width: "156", colspan: "3" }
                      },
                      [
                        _c(
                          "p",
                          {
                            staticClass: "MsoNormal",
                            staticStyle: { "margin-bottom": ".0001pt" }
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
                                  "Stock\nNo: " +
                                    _vm._s(_vm.supply.supply_id) +
                                    "\n                            "
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
                _vm._m(1),
                _vm._v(" "),
                _c("tr", { staticStyle: { "mso-yfti-irow": "2" } }, [
                  _c(
                    "td",
                    {
                      staticStyle: {
                        width: "323.75pt",
                        border: "solid windowtext 1.0pt",
                        "border-top": "none",
                        "mso-border-top-alt": "solid windowtext .5pt",
                        "mso-border-alt": "solid windowtext .5pt",
                        padding: "0in 5.4pt 0in 5.4pt"
                      },
                      attrs: { width: "432", colspan: "6", valign: "top" }
                    },
                    [
                      _c(
                        "p",
                        {
                          staticClass: "MsoNormal",
                          staticStyle: { "margin-bottom": ".0001pt" }
                        },
                        [_vm._v("Item: " + _vm._s(_vm.supply.name))]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticStyle: {
                        width: "3.5in",
                        "border-top": "none",
                        "border-left": "none",
                        "border-bottom": "solid windowtext 1.0pt",
                        "border-right": "solid windowtext 1.0pt",
                        "mso-border-top-alt": "solid windowtext .5pt",
                        "mso-border-left-alt": "solid windowtext .5pt",
                        "mso-border-alt": "solid windowtext .5pt",
                        padding: "0in 5.4pt 0in 5.4pt"
                      },
                      attrs: { width: "336", colspan: "7", valign: "top" }
                    },
                    [
                      _c(
                        "p",
                        {
                          staticClass: "MsoNormal",
                          staticStyle: { "margin-bottom": ".0001pt" }
                        },
                        [
                          _vm._v(
                            "Code: " +
                              _vm._s(_vm.supply.code ? _vm.supply.code : "")
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
                        width: "323.75pt",
                        border: "solid windowtext 1.0pt",
                        "border-top": "none",
                        "mso-border-top-alt": "solid windowtext .5pt",
                        "mso-border-alt": "solid windowtext .5pt",
                        padding: "0in 5.4pt 0in 5.4pt"
                      },
                      attrs: { width: "432", colspan: "6", valign: "top" }
                    },
                    [
                      _c(
                        "p",
                        {
                          staticClass: "MsoNormal",
                          staticStyle: { "margin-bottom": ".0001pt" }
                        },
                        [
                          _vm._v(
                            "Description: " + _vm._s(_vm.supply.description)
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
                        width: "3.5in",
                        "border-top": "none",
                        "border-left": "none",
                        "border-bottom": "solid windowtext 1.0pt",
                        "border-right": "solid windowtext 1.0pt",
                        "mso-border-top-alt": "solid windowtext .5pt",
                        "mso-border-left-alt": "solid windowtext .5pt",
                        "mso-border-alt": "solid windowtext .5pt",
                        padding: "0in 5.4pt 0in 5.4pt"
                      },
                      attrs: { width: "336", colspan: "7", valign: "top" }
                    },
                    [
                      _c(
                        "p",
                        {
                          staticClass: "MsoNormal",
                          staticStyle: { "margin-bottom": ".0001pt" }
                        },
                        [
                          _vm._v(
                            "Unit: " +
                              _vm._s(
                                _vm.supply.unit_id ? _vm.supply.unit.name : ""
                              )
                          )
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("tr", { staticStyle: { "mso-yfti-irow": "4" } }, [
                  _c(
                    "td",
                    {
                      staticStyle: {
                        width: "44.6pt",
                        border: "solid windowtext 1.0pt",
                        "border-top": "none",
                        "mso-border-top-alt": "solid windowtext .5pt",
                        "mso-border-alt": "solid windowtext .5pt",
                        padding: "0in 5.4pt 0in 5.4pt"
                      },
                      attrs: { width: "59", rowspan: "2" }
                    },
                    [
                      _c(
                        "p",
                        {
                          staticClass: "MsoNormal",
                          staticStyle: {
                            "font-size": "8.0pt",
                            "margin-bottom": ".0001pt"
                          }
                        },
                        [
                          _vm._v(
                            "Date: " +
                              _vm._s(
                                _vm
                                  .$moment(_vm.supply.updated_at)
                                  .format("MM-DD-YY")
                              )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("p", {
                        staticClass: "MsoNormal",
                        staticStyle: { "margin-bottom": ".0001pt" }
                      }),
                      _c("p", [_vm._v(" ")]),
                      _c("p")
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _vm._m(5)
                ]),
                _vm._v(" "),
                _c("tr", { staticStyle: { "mso-yfti-irow": "5" } }, [
                  _c(
                    "td",
                    {
                      staticStyle: {
                        width: "37.95pt",
                        "border-top": "none",
                        "border-bottom": "solid windowtext 1.0pt",
                        "border-right": "solid windowtext 1.0pt",
                        "mso-border-top-alt": "solid windowtext .5pt",
                        "mso-border-left-alt": "solid windowtext .5pt",
                        "mso-border-alt": "solid windowtext .5pt",
                        padding: "0in 5.4pt 0in 5.4pt"
                      },
                      attrs: { width: "51", valign: "top" }
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
                                "font-size": "8.0pt",
                                "font-family": '"Arial",sans-serif'
                              }
                            },
                            [
                              _vm._v(
                                "RIV/PO\n                            " +
                                  _vm._s(_vm.supply.po)
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  ),
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
                  _vm._m(13),
                  _vm._v(" "),
                  _vm._m(14),
                  _vm._v(" "),
                  _vm._m(15)
                ]),
                _vm._v(" "),
                _vm._m(16),
                _vm._v(" "),
                _c("tr", { staticStyle: { "mso-yfti-irow": "7" } }, [
                  _c(
                    "td",
                    {
                      staticStyle: {
                        width: "36.45pt",
                        "border-top": "none",
                        "border-bottom": "solid windowtext 1.0pt",
                        "border-right": "solid windowtext 1.0pt",
                        "mso-border-top-alt": "solid windowtext .5pt",
                        "mso-border-left-alt": "solid windowtext .5pt",
                        "mso-border-alt": "solid windowtext .5pt",
                        padding: "0in 5.4pt 0in 5.4pt"
                      },
                      attrs: { width: "49", valign: "top" }
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
                                "\n                            " +
                                  _vm._s(
                                    _vm.supply.quantity + _vm.balanceQuantity
                                  )
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  ),
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
                  _vm._m(22),
                  _vm._v(" "),
                  _vm._m(23),
                  _vm._v(" "),
                  _vm._m(24)
                ]),
                _vm._v(" "),
                _vm._l(_vm.iterateData, function(item) {
                  return _c("tr", [
                    _c(
                      "td",
                      {
                        staticStyle: {
                          width: "44.6pt",
                          border: "solid windowtext 1.0pt",
                          "border-top": "none",
                          "mso-border-top-alt": "solid windowtext .5pt",
                          "mso-border-alt": "solid windowtext .5pt",
                          padding: "0in 5.4pt 0in 5.4pt"
                        },
                        attrs: { width: "59", valign: "top" }
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
                                  "font-size": "8.0pt",
                                  "font-family": '"Arial",sans-serif'
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      _vm
                                        .$moment(item.updated_at)
                                        .format("MM-DD")
                                    )
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(25, true),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          width: "92.25pt",
                          "border-top": "none",
                          "border-bottom": "solid windowtext 1.0pt",
                          "border-right": "solid windowtext 1.0pt",
                          "mso-border-top-alt": "solid windowtext .5pt",
                          "mso-border-left-alt": "solid windowtext .5pt",
                          "mso-border-alt": "solid windowtext .5pt",
                          padding: "0in 5.4pt 0in 5.4pt"
                        },
                        attrs: { width: "123", valign: "top" }
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
                                  "font-size": "8.0pt",
                                  "font-family": '"Arial",sans-serif'
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      item.receive_id &&
                                      item.receive.location_id
                                        ? item.receive.location.name
                                        : ""
                                    )
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(26, true),
                    _vm._v(" "),
                    _vm._m(27, true),
                    _vm._v(" "),
                    _vm._m(28, true),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          width: "31.5pt",
                          "border-top": "none",
                          "border-left": "none",
                          "border-bottom": "solid windowtext 1.0pt",
                          "border-right": "solid windowtext 1.0pt",
                          "mso-border-top-alt": "solid windowtext .5pt",
                          "mso-border-left-alt": "solid windowtext .5pt",
                          "mso-border-alt": "solid windowtext .5pt",
                          padding: "0in 5.4pt 0in 5.4pt"
                        },
                        attrs: { width: "42", valign: "top" }
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
                                  "font-size": "8.0pt",
                                  "font-family": '"Arial",sans-serif'
                                }
                              },
                              [
                                _vm._v(
                                  "\n                           " +
                                    _vm._s(
                                      item.receive_id
                                        ? item.receive.quantity
                                        : 0
                                    )
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
                          width: "49.5pt",
                          "border-top": "none",
                          "border-left": "none",
                          "border-bottom": "solid windowtext 1.0pt",
                          "border-right": "solid windowtext 1.0pt",
                          "mso-border-top-alt": "solid windowtext .5pt",
                          "mso-border-left-alt": "solid windowtext .5pt",
                          "mso-border-alt": "solid windowtext .5pt",
                          padding: "0in 5.4pt 0in 5.4pt"
                        },
                        attrs: { width: "66", valign: "top" }
                      },
                      [
                        _c(
                          "p",
                          {
                            staticClass: "MsoNormal",
                            staticStyle: { "margin-bottom": ".0001pt" }
                          },
                          [
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
                                  "\n                                " +
                                    _vm._s(
                                      _vm.supply.unit_cost
                                        ? _vm.supply.unit_cost
                                        : ""
                                    ) +
                                    "\n                                "
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
                          width: "49.5pt",
                          "border-top": "none",
                          "border-left": "none",
                          "border-bottom": "solid windowtext 1.0pt",
                          "border-right": "solid windowtext 1.0pt",
                          "mso-border-top-alt": "solid windowtext .5pt",
                          "mso-border-left-alt": "solid windowtext .5pt",
                          "mso-border-alt": "solid windowtext .5pt",
                          padding: "0in 5.4pt 0in 5.4pt"
                        },
                        attrs: { width: "66", valign: "top" }
                      },
                      [
                        _c(
                          "p",
                          {
                            staticClass: "MsoNormal",
                            staticStyle: { "margin-bottom": ".0001pt" }
                          },
                          [
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
                                  "\n                             " +
                                    _vm._s(
                                      _vm.supply.unit_cost
                                        ? item.check * _vm.supply.unit_cost
                                        : ""
                                    ) +
                                    "\n                            "
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
                          width: "27.0pt",
                          "border-top": "none",
                          "border-left": "none",
                          "border-bottom": "solid windowtext 1.0pt",
                          "border-right": "solid windowtext 1.0pt",
                          "mso-border-top-alt": "solid windowtext .5pt",
                          "mso-border-left-alt": "solid windowtext .5pt",
                          "mso-border-alt": "solid windowtext .5pt",
                          padding: "0in 5.4pt 0in 5.4pt"
                        },
                        attrs: { width: "36", colspan: "2", valign: "top" }
                      },
                      [
                        _c(
                          "p",
                          {
                            staticClass: "MsoNormal",
                            staticStyle: { "margin-bottom": ".0001pt" }
                          },
                          [
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
                                  "\n                            " +
                                    _vm._s(item.balance)
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
                          width: "45.0pt",
                          "border-top": "none",
                          "border-left": "none",
                          "border-bottom": "solid windowtext 1.0pt",
                          "border-right": "solid windowtext 1.0pt",
                          "mso-border-top-alt": "solid windowtext .5pt",
                          "mso-border-left-alt": "solid windowtext .5pt",
                          "mso-border-alt": "solid windowtext .5pt",
                          padding: "0in 5.4pt 0in 5.4pt"
                        },
                        attrs: { width: "60", valign: "top" }
                      },
                      [
                        _c(
                          "p",
                          {
                            staticClass: "MsoNormal",
                            staticStyle: { "margin-bottom": ".0001pt" }
                          },
                          [
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
                                  "\n                            " +
                                    _vm._s(
                                      _vm.supply.unit_cost
                                        ? _vm.supply.unit_cost
                                        : ""
                                    ) +
                                    "\n                            "
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
                          width: "49.5pt",
                          "border-top": "none",
                          "border-left": "none",
                          "border-bottom": "solid windowtext 1.0pt",
                          "border-right": "solid windowtext 1.0pt",
                          "mso-border-top-alt": "solid windowtext .5pt",
                          "mso-border-left-alt": "solid windowtext .5pt",
                          "mso-border-alt": "solid windowtext .5pt",
                          padding: "0in 5.4pt 0in 5.4pt"
                        },
                        attrs: { width: "66", valign: "top" }
                      },
                      [
                        _c(
                          "p",
                          {
                            staticClass: "MsoNormal",
                            staticStyle: { "margin-bottom": ".0001pt" }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-size": "8.0pt",
                                  "font-family": '"Arial",sans-serif'
                                }
                              },
                              [
                                _c("p", [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(
                                        _vm.supply.unit_cost
                                          ? item.balance * _vm.supply.unit_cost
                                          : ""
                                      ) +
                                      "\n                        "
                                  )
                                ])
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
                  return _c("tr", [
                    _vm._m(29, true),
                    _vm._v(" "),
                    _vm._m(30, true),
                    _vm._v(" "),
                    _vm._m(31, true),
                    _vm._v(" "),
                    _vm._m(32, true),
                    _vm._v(" "),
                    _vm._m(33, true),
                    _vm._v(" "),
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
                    _vm._m(40, true)
                  ])
                }),
                _vm._v(" "),
                _vm._m(41),
                _vm._v(" "),
                _vm._m(42)
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "MsoNormal" }),
          _c("p", [_vm._v(" ")]),
          _c("p"),
          _vm._v(" "),
          _c("p", { staticClass: "MsoNormal" }),
          _c("p", [_vm._v(" ")]),
          _c("p"),
          _vm._v(" "),
          _c("p", { staticClass: "MsoNormal" }),
          _c("p", [_vm._v(" ")]),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          _vm._m(43)
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticStyle: {
          width: "458.75pt",
          border: "none",
          "border-bottom": "solid windowtext 1.0pt",
          "mso-border-bottom-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "612", colspan: "10", valign: "top" }
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
                  "font-size": "12.0pt",
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
    return _c("tr", { staticStyle: { "mso-yfti-irow": "1" } }, [
      _c(
        "td",
        {
          staticStyle: {
            width: "575.75pt",
            border: "solid windowtext 1.0pt",
            "border-top": "none",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt"
          },
          attrs: { width: "768", colspan: "13", valign: "top" }
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
                    "font-size": "12.0pt",
                    "font-family": '"Arial",sans-serif'
                  }
                },
                [
                  _vm._v("SUPPLIES LEDGER CARD\n                            "),
                  _c("p")
                ]
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
    return _c(
      "td",
      {
        staticStyle: {
          width: "130.2pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "174", colspan: "2", valign: "top" }
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
          [_vm._v("Reference")]
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
          width: "148.95pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "199", colspan: "3", valign: "top" }
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
          [_vm._v("RECEIPTS")]
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
          width: "130.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "174", colspan: "3", valign: "top" }
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
          [_vm._v("ISSUES")]
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
          width: "121.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "162", colspan: "4", valign: "top" }
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
          [_vm._v("BALANCES")]
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
          width: "92.25pt",
          "border-top": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "123", valign: "top" }
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
                  "font-size": "8.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [
                _vm._v(
                  "From Whom received or to whom issued\n                            "
                ),
                _c("p")
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
          width: "36.45pt",
          "border-top": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "49", valign: "top" }
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
              [_vm._v("Qty\n                            "), _c("p")]
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
          width: "58.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "78", valign: "top" }
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
              [_vm._v("Unit Cost\n                            "), _c("p")]
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
          width: ".75in",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "72", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt" }
          },
          [
            _c("span", { staticStyle: { "font-size": "9.0pt" } }, [
              _vm._v("Total Cost\n                            "),
              _c("p")
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
          width: "31.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "42", valign: "top" }
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
                  "font-size": "8.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_vm._v("Qty\n                            "), _c("p")]
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
          width: "49.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "66", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "8.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_vm._v("Unit Cost\n                            "), _c("p")]
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
          width: "49.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "66", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "8.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_vm._v("Total\nCost\n                            "), _c("p")]
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
          width: "27.0pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "36", colspan: "2", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "8.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_vm._v("Qty\n                            "), _c("p")]
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
          width: "45.0pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "60", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "8.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_vm._v("Unit\nCost\n                            "), _c("p")]
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
          width: "49.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "66", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "8.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              },
              [_vm._v("Total\nCost\n                            "), _c("p")]
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
    return _c("tr", { staticStyle: { "mso-yfti-irow": "6", height: ".1in" } }, [
      _c(
        "td",
        {
          staticStyle: {
            width: "174.8pt",
            border: "solid windowtext 1.0pt",
            "border-top": "none",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt",
            height: ".1in"
          },
          attrs: { width: "233", colspan: "3", rowspan: "2" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: { "margin-bottom": ".0001pt" }
            },
            [
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
                    "Balance Brought\nForward\n                            "
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
            width: "36.45pt",
            "border-top": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt",
            height: ".1in"
          },
          attrs: { width: "49", valign: "top" }
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
              _c("span", {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "td",
        {
          staticStyle: {
            width: "58.5pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt",
            height: ".1in"
          },
          attrs: { width: "78", valign: "top" }
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
              _c("span", {
                staticStyle: {
                  "font-size": "9.0pt",
                  "font-family": '"Arial",sans-serif'
                }
              })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "td",
        {
          staticStyle: {
            width: ".75in",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt",
            height: ".1in"
          },
          attrs: { width: "72", valign: "top" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: { "margin-bottom": ".0001pt" }
            },
            [
              _c("span", { staticStyle: { "font-size": "9.0pt" } }, [
                _c("p", [_vm._v(" ")])
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
            width: "31.5pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt",
            height: ".1in"
          },
          attrs: { width: "42", valign: "top" }
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
                    "font-size": "8.0pt",
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
            width: "49.5pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt",
            height: ".1in"
          },
          attrs: { width: "66", valign: "top" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: { "margin-bottom": ".0001pt" }
            },
            [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-size": "8.0pt",
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
            width: "49.5pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt",
            height: ".1in"
          },
          attrs: { width: "66", valign: "top" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: { "margin-bottom": ".0001pt" }
            },
            [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-size": "8.0pt",
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
            width: "27.0pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt",
            height: ".1in"
          },
          attrs: { width: "36", colspan: "2", valign: "top" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: { "margin-bottom": ".0001pt" }
            },
            [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-size": "8.0pt",
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
            width: "45.0pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt",
            height: ".1in"
          },
          attrs: { width: "60", valign: "top" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: { "margin-bottom": ".0001pt" }
            },
            [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-size": "8.0pt",
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
            width: "49.5pt",
            "border-top": "none",
            "border-left": "none",
            "border-bottom": "solid windowtext 1.0pt",
            "border-right": "solid windowtext 1.0pt",
            "mso-border-top-alt": "solid windowtext .5pt",
            "mso-border-left-alt": "solid windowtext .5pt",
            "mso-border-alt": "solid windowtext .5pt",
            padding: "0in 5.4pt 0in 5.4pt",
            height: ".1in"
          },
          attrs: { width: "66", valign: "top" }
        },
        [
          _c(
            "p",
            {
              staticClass: "MsoNormal",
              staticStyle: { "margin-bottom": ".0001pt" }
            },
            [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-size": "8.0pt",
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
    return _c(
      "td",
      {
        staticStyle: {
          width: "58.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "78", valign: "top" }
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
          width: ".75in",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "72", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt" }
          },
          [
            _c("span", { staticStyle: { "font-size": "9.0pt" } }, [
              _c("p", [_vm._v(" ")])
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
          width: "31.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "42", valign: "top" }
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
                  "font-size": "8.0pt",
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
          width: "49.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "66", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "8.0pt",
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
          width: "49.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "66", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "8.0pt",
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
          width: "27.0pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "36", colspan: "2", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "8.0pt",
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
          width: "45.0pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "60", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "8.0pt",
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
          width: "49.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "66", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "8.0pt",
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
          width: "37.95pt",
          "border-top": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "51", valign: "top" }
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
                  "font-size": "8.0pt",
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
          width: "36.45pt",
          "border-top": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "49", valign: "top" }
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
          width: "58.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "78", valign: "top" }
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
          width: ".75in",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "72", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt" }
          },
          [
            _c("span", { staticStyle: { "font-size": "9.0pt" } }, [
              _c("p", [_vm._v(" ")])
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
          width: "44.6pt",
          border: "solid windowtext 1.0pt",
          "border-top": "none",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "59", valign: "top" }
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
                  "font-size": "8.0pt",
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
          width: "37.95pt",
          "border-top": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "51", valign: "top" }
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
                  "font-size": "8.0pt",
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
          width: "92.25pt",
          "border-top": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "123", valign: "top" }
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
                  "font-size": "8.0pt",
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
          width: "36.45pt",
          "border-top": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "49", valign: "top" }
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
          width: "58.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "78", valign: "top" }
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
          width: ".75in",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "72", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt" }
          },
          [
            _c("span", { staticStyle: { "font-size": "9.0pt" } }, [
              _c("p", [_vm._v(" ")])
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
          width: "31.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "42", valign: "top" }
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
                  "font-size": "8.0pt",
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
          width: "49.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "66", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "8.0pt",
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
          width: "49.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "66", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "8.0pt",
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
          width: "27.0pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "36", colspan: "2", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "8.0pt",
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
          width: "45.0pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "60", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "8.0pt",
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
          width: "49.5pt",
          "border-top": "none",
          "border-left": "none",
          "border-bottom": "solid windowtext 1.0pt",
          "border-right": "solid windowtext 1.0pt",
          "mso-border-top-alt": "solid windowtext .5pt",
          "mso-border-left-alt": "solid windowtext .5pt",
          "mso-border-alt": "solid windowtext .5pt",
          padding: "0in 5.4pt 0in 5.4pt"
        },
        attrs: { width: "66", valign: "top" }
      },
      [
        _c(
          "p",
          {
            staticClass: "MsoNormal",
            staticStyle: { "margin-bottom": ".0001pt" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "8.0pt",
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
      "tr",
      {
        staticStyle: {
          "mso-yfti-irow": "54",
          "mso-yfti-lastrow": "yes",
          height: "7.6pt"
        }
      },
      [
        _c(
          "td",
          {
            staticStyle: {
              width: "174.8pt",
              border: "solid windowtext 1.0pt",
              "border-top": "none",
              "mso-border-top-alt": "solid windowtext .5pt",
              "mso-border-alt": "solid windowtext .5pt",
              padding: "0in 5.4pt 0in 5.4pt",
              height: "7.6pt"
            },
            attrs: { width: "233", colspan: "3" }
          },
          [
            _c(
              "p",
              {
                staticClass: "MsoNormal",
                staticStyle: { "margin-bottom": ".0001pt" }
              },
              [
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
                      "Balance\nCarried Forward\n                            "
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
              width: "36.45pt",
              "border-top": "none",
              "border-bottom": "solid windowtext 1.0pt",
              "border-right": "solid windowtext 1.0pt",
              "mso-border-top-alt": "solid windowtext .5pt",
              "mso-border-left-alt": "solid windowtext .5pt",
              "mso-border-alt": "solid windowtext .5pt",
              padding: "0in 5.4pt 0in 5.4pt",
              height: "7.6pt"
            },
            attrs: { width: "49", valign: "top" }
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
              width: "58.5pt",
              "border-top": "none",
              "border-left": "none",
              "border-bottom": "solid windowtext 1.0pt",
              "border-right": "solid windowtext 1.0pt",
              "mso-border-top-alt": "solid windowtext .5pt",
              "mso-border-left-alt": "solid windowtext .5pt",
              "mso-border-alt": "solid windowtext .5pt",
              padding: "0in 5.4pt 0in 5.4pt",
              height: "7.6pt"
            },
            attrs: { width: "78", valign: "top" }
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
              width: ".75in",
              "border-top": "none",
              "border-left": "none",
              "border-bottom": "solid windowtext 1.0pt",
              "border-right": "solid windowtext 1.0pt",
              "mso-border-top-alt": "solid windowtext .5pt",
              "mso-border-left-alt": "solid windowtext .5pt",
              "mso-border-alt": "solid windowtext .5pt",
              padding: "0in 5.4pt 0in 5.4pt",
              height: "7.6pt"
            },
            attrs: { width: "72", valign: "top" }
          },
          [
            _c(
              "p",
              {
                staticClass: "MsoNormal",
                staticStyle: { "margin-bottom": ".0001pt" }
              },
              [
                _c("span", { staticStyle: { "font-size": "9.0pt" } }, [
                  _c("p", [_vm._v(" ")])
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
              width: "31.5pt",
              "border-top": "none",
              "border-left": "none",
              "border-bottom": "solid windowtext 1.0pt",
              "border-right": "solid windowtext 1.0pt",
              "mso-border-top-alt": "solid windowtext .5pt",
              "mso-border-left-alt": "solid windowtext .5pt",
              "mso-border-alt": "solid windowtext .5pt",
              padding: "0in 5.4pt 0in 5.4pt",
              height: "7.6pt"
            },
            attrs: { width: "42", valign: "top" }
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
                      "font-size": "8.0pt",
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
              width: "49.5pt",
              "border-top": "none",
              "border-left": "none",
              "border-bottom": "solid windowtext 1.0pt",
              "border-right": "solid windowtext 1.0pt",
              "mso-border-top-alt": "solid windowtext .5pt",
              "mso-border-left-alt": "solid windowtext .5pt",
              "mso-border-alt": "solid windowtext .5pt",
              padding: "0in 5.4pt 0in 5.4pt",
              height: "7.6pt"
            },
            attrs: { width: "66", valign: "top" }
          },
          [
            _c(
              "p",
              {
                staticClass: "MsoNormal",
                staticStyle: { "margin-bottom": ".0001pt" }
              },
              [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "8.0pt",
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
              width: "49.5pt",
              "border-top": "none",
              "border-left": "none",
              "border-bottom": "solid windowtext 1.0pt",
              "border-right": "solid windowtext 1.0pt",
              "mso-border-top-alt": "solid windowtext .5pt",
              "mso-border-left-alt": "solid windowtext .5pt",
              "mso-border-alt": "solid windowtext .5pt",
              padding: "0in 5.4pt 0in 5.4pt",
              height: "7.6pt"
            },
            attrs: { width: "66", valign: "top" }
          },
          [
            _c(
              "p",
              {
                staticClass: "MsoNormal",
                staticStyle: { "margin-bottom": ".0001pt" }
              },
              [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "8.0pt",
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
              width: "27.0pt",
              "border-top": "none",
              "border-left": "none",
              "border-bottom": "solid windowtext 1.0pt",
              "border-right": "solid windowtext 1.0pt",
              "mso-border-top-alt": "solid windowtext .5pt",
              "mso-border-left-alt": "solid windowtext .5pt",
              "mso-border-alt": "solid windowtext .5pt",
              padding: "0in 5.4pt 0in 5.4pt",
              height: "7.6pt"
            },
            attrs: { colspan: "2", valign: "top" }
          },
          [
            _c(
              "p",
              {
                staticClass: "MsoNormal",
                staticStyle: { "margin-bottom": ".0001pt" }
              },
              [
                _c("span", {
                  staticStyle: {
                    "font-size": "8.0pt",
                    "font-family": '"Arial",sans-serif'
                  }
                })
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "td",
          {
            staticStyle: {
              width: "45.0pt",
              "border-top": "none",
              "border-left": "none",
              "border-bottom": "solid windowtext 1.0pt",
              "border-right": "solid windowtext 1.0pt",
              "mso-border-top-alt": "solid windowtext .5pt",
              "mso-border-left-alt": "solid windowtext .5pt",
              "mso-border-alt": "solid windowtext .5pt",
              padding: "0in 5.4pt 0in 5.4pt",
              height: "7.6pt"
            },
            attrs: { width: "60", valign: "top" }
          },
          [
            _c(
              "p",
              {
                staticClass: "MsoNormal",
                staticStyle: { "margin-bottom": ".0001pt" }
              },
              [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "8.0pt",
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
              width: "49.5pt",
              "border-top": "none",
              "border-left": "none",
              "border-bottom": "solid windowtext 1.0pt",
              "border-right": "solid windowtext 1.0pt",
              "mso-border-top-alt": "solid windowtext .5pt",
              "mso-border-left-alt": "solid windowtext .5pt",
              "mso-border-alt": "solid windowtext .5pt",
              padding: "0in 5.4pt 0in 5.4pt",
              height: "7.6pt"
            },
            attrs: { width: "66", valign: "top" }
          },
          [
            _c(
              "p",
              {
                staticClass: "MsoNormal",
                staticStyle: { "margin-bottom": ".0001pt" }
              },
              [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "8.0pt",
                      "font-family": '"Arial",sans-serif'
                    }
                  },
                  [_c("p", [_vm._v(" ")])]
                )
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
    return _c("tr", { attrs: { height: "0" } }, [
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "59" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "51" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "123" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "49" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "78" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "72" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "42" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "66" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "66" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "6" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "30" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "60" } }),
      _vm._v(" "),
      _c("td", { staticStyle: { border: "none" }, attrs: { width: "66" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticClass: "MsoNormal", staticStyle: { "tab-stops": "382.5pt" } },
      [_c("span", { staticStyle: { "mso-tab-count": "1" } })]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4b0ec7d6", module.exports)
  }
}

/***/ }),

/***/ 850:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(998)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(1000)
/* template */
var __vue_template__ = __webpack_require__(1001)
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
Component.options.__file = "resources\\assets\\js\\components\\Supplies\\print.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b0ec7d6", Component.options)
  } else {
    hotAPI.reload("data-v-4b0ec7d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 998:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(999);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(98)("b6f2c498", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4b0ec7d6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./print.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4b0ec7d6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./print.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "\np {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline\n}\n", ""]);

// exports


/***/ })

});