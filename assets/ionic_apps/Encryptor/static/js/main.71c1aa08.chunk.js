(this.webpackJsonpDemoReactIonic = this.webpackJsonpDemoReactIonic || []).push([
  [1],
  {
    48: function (n, e, t) {
      var r = {
        "./ion-action-sheet.entry.js": [65, 5],
        "./ion-alert.entry.js": [66, 6],
        "./ion-app_8.entry.js": [67, 7],
        "./ion-avatar_3.entry.js": [68, 17],
        "./ion-back-button.entry.js": [69, 18],
        "./ion-backdrop.entry.js": [70, 43],
        "./ion-button_2.entry.js": [71, 19],
        "./ion-card_5.entry.js": [72, 20],
        "./ion-checkbox.entry.js": [73, 21],
        "./ion-chip.entry.js": [74, 22],
        "./ion-col_3.entry.js": [75, 44],
        "./ion-datetime_3.entry.js": [76, 10],
        "./ion-fab_3.entry.js": [77, 23],
        "./ion-img.entry.js": [78, 45],
        "./ion-infinite-scroll_2.entry.js": [79, 46],
        "./ion-input.entry.js": [80, 24],
        "./ion-item-option_3.entry.js": [81, 25],
        "./ion-item_8.entry.js": [82, 26],
        "./ion-loading.entry.js": [83, 27],
        "./ion-menu_3.entry.js": [84, 28],
        "./ion-modal.entry.js": [85, 8],
        "./ion-nav_2.entry.js": [86, 14],
        "./ion-popover.entry.js": [87, 9],
        "./ion-progress-bar.entry.js": [88, 29],
        "./ion-radio_2.entry.js": [89, 30],
        "./ion-range.entry.js": [90, 31],
        "./ion-refresher_2.entry.js": [91, 11],
        "./ion-reorder_2.entry.js": [92, 16],
        "./ion-ripple-effect.entry.js": [93, 47],
        "./ion-route_4.entry.js": [94, 32],
        "./ion-searchbar.entry.js": [95, 33],
        "./ion-segment_2.entry.js": [96, 34],
        "./ion-select_3.entry.js": [97, 35],
        "./ion-slide_2.entry.js": [98, 48],
        "./ion-spinner.entry.js": [99, 13],
        "./ion-split-pane.entry.js": [100, 49],
        "./ion-tab-bar_2.entry.js": [101, 36],
        "./ion-tab_2.entry.js": [102, 15],
        "./ion-text.entry.js": [103, 37],
        "./ion-textarea.entry.js": [104, 38],
        "./ion-toast.entry.js": [105, 39],
        "./ion-toggle.entry.js": [106, 12],
        "./ion-virtual-scroll.entry.js": [107, 50],
      };
      function o(n) {
        if (!t.o(r, n))
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + n + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
        var e = r[n],
          o = e[0];
        return t.e(e[1]).then(function () {
          return t(o);
        });
      }
      (o.keys = function () {
        return Object.keys(r);
      }),
        (o.id = 48),
        (n.exports = o);
    },
    50: function (n, e, t) {
      var r = { "./ion-icon.entry.js": [108, 57] };
      function o(n) {
        if (!t.o(r, n))
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + n + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
        var e = r[n],
          o = e[0];
        return t.e(e[1]).then(function () {
          return t(o);
        });
      }
      (o.keys = function () {
        return Object.keys(r);
      }),
        (o.id = 50),
        (n.exports = o);
    },
    62: function (n, e, t) {},
    63: function (n, e, t) {
      "use strict";
      t.r(e);
      var r = t(0),
        o = t.n(r),
        i = t(24),
        s = t.n(i),
        c = t(2),
        j = t.n(c),
        a = t(8),
        u = t(18),
        l = t(11),
        y = t(17),
        b = t(4),
        d = function (n) {
          return Object(b.jsx)(l.n, {
            children: Object(b.jsx)(l.f, {
              className: "ion-text-left",
              children: Object(b.jsxs)(l.c, {
                onClick: n.onEncrypt,
                children: [
                  Object(b.jsx)(l.j, { slot: "start", icon: y.b }),
                  "Encrypt",
                ],
              }),
            }),
          });
        },
        h = t(39),
        f = Object(h.a)("EncryptionPlugin"),
        O =
          (t(52),
          t(53),
          t(54),
          t(55),
          t(56),
          t(57),
          t(58),
          t(59),
          t(60),
          t(61),
          t(62),
          function (n) {
            return Object(b.jsx)(l.n, {
              children: Object(b.jsx)(l.f, {
                children: Object(b.jsx)(l.d, {
                  children: Object(b.jsx)(l.e, {
                    children: Object(b.jsx)("h2", { children: n.result }),
                  }),
                }),
              }),
            });
          }),
        p = function () {
          var n = Object(r.useState)(),
            e = Object(u.a)(n, 2),
            t = e[0],
            i = e[1],
            s = Object(r.useState)(),
            c = Object(u.a)(s, 2),
            y = c[0],
            h = c[1],
            p = Object(r.useRef)(null),
            x = (function () {
              var n = Object(a.a)(
                j.a.mark(function n() {
                  var e, t, r, o;
                  return j.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            (t =
                              null === (e = p.current) || void 0 === e
                                ? void 0
                                : e.value)
                          ) {
                            n.next = 4;
                            break;
                          }
                          return h("Uh oh"), n.abrupt("return");
                        case 4:
                          return (
                            (n.next = 6), f.encrypt({ plainText: t.toString() })
                          );
                        case 6:
                          (r = n.sent), (o = r.encryptedText), i(o);
                        case 9:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
              return function () {
                return n.apply(this, arguments);
              };
            })();
          return Object(b.jsxs)(o.a.Fragment, {
            children: [
              Object(b.jsx)(l.a, {
                isOpen: !!y,
                message: y,
                buttons: [
                  {
                    text: "Okay",
                    handler: function () {
                      h("");
                    },
                  },
                ],
              }),
              Object(b.jsxs)(l.b, {
                children: [
                  Object(b.jsx)(l.i, {
                    children: Object(b.jsx)(l.p, {
                      color: "primary",
                      children: Object(b.jsx)(l.o, {
                        children: "RSA Encryption Tools",
                      }),
                    }),
                  }),
                  Object(b.jsx)(l.g, {
                    className: "ion-padding",
                    children: Object(b.jsxs)(l.h, {
                      children: [
                        Object(b.jsx)(l.n, {
                          children: Object(b.jsx)(l.f, {
                            children: Object(b.jsxs)(l.l, {
                              children: [
                                Object(b.jsx)(l.m, {
                                  position: "floating",
                                  children: "Your String",
                                }),
                                Object(b.jsx)(l.k, { ref: p }),
                              ],
                            }),
                          }),
                        }),
                        Object(b.jsx)(d, { onEncrypt: x }),
                        t && Object(b.jsx)(O, { result: t }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var x = function (n) {
        n &&
          n instanceof Function &&
          t
            .e(58)
            .then(t.bind(null, 125))
            .then(function (e) {
              var t = e.getCLS,
                r = e.getFID,
                o = e.getFCP,
                i = e.getLCP,
                s = e.getTTFB;
              t(n), r(n), o(n), i(n), s(n);
            });
      };
      s.a.render(
        Object(b.jsx)(o.a.StrictMode, { children: Object(b.jsx)(p, {}) }),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (n) {
              n.unregister();
            })
            .catch(function (n) {
              console.error(n.message);
            }),
        x();
    },
  },
  [[63, 3, 4]],
]);
//# sourceMappingURL=main.71c1aa08.chunk.js.map
