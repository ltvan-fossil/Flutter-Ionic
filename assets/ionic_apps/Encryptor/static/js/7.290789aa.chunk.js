(this.webpackJsonpDemoReactIonic = this.webpackJsonpDemoReactIonic || []).push([
  [7],
  {
    110: function (t, o, e) {
      "use strict";
      e.d(o, "a", function () {
        return r;
      }),
        e.d(o, "b", function () {
          return a;
        }),
        e.d(o, "c", function () {
          return i;
        }),
        e.d(o, "d", function () {
          return l;
        });
      var n = e(1),
        i = function (t, o) {
          return null !== o.closest(t);
        },
        r = function (t, o) {
          var e;
          return "string" === typeof t && t.length > 0
            ? Object.assign(
                (((e = { "ion-color": !0 })["ion-color-" + t] = !0), e),
                o
              )
            : o;
        },
        a = function (t) {
          var o = {};
          return (
            (function (t) {
              return void 0 !== t
                ? (Array.isArray(t) ? t : t.split(" "))
                    .filter(function (t) {
                      return null != t;
                    })
                    .map(function (t) {
                      return t.trim();
                    })
                    .filter(function (t) {
                      return "" !== t;
                    })
                : [];
            })(t).forEach(function (t) {
              return (o[t] = !0);
            }),
            o
          );
        },
        s = /^[a-z][a-z0-9+\-.]*:/,
        l = function (t, o, e, i) {
          return Object(n.a)(void 0, void 0, void 0, function () {
            var r;
            return Object(n.c)(this, function (n) {
              return null != t &&
                "#" !== t[0] &&
                !s.test(t) &&
                (r = document.querySelector("ion-router"))
                ? (null != o && o.preventDefault(), [2, r.push(t, e, i)])
                : [2, !1];
            });
          });
        };
    },
    112: function (t, o, e) {
      "use strict";
      e.d(o, "a", function () {
        return r;
      }),
        e.d(o, "b", function () {
          return a;
        });
      var n = e(1),
        i = e(12),
        r = function (t, o, e, r, a) {
          return Object(n.a)(void 0, void 0, void 0, function () {
            var s;
            return Object(n.c)(this, function (n) {
              switch (n.label) {
                case 0:
                  if (t) return [2, t.attachViewToDom(o, e, a, r)];
                  if ("string" !== typeof e && !(e instanceof HTMLElement))
                    throw new Error("framework delegate is missing");
                  return (
                    (s =
                      "string" === typeof e
                        ? o.ownerDocument && o.ownerDocument.createElement(e)
                        : e),
                    r &&
                      r.forEach(function (t) {
                        return s.classList.add(t);
                      }),
                    a && Object.assign(s, a),
                    o.appendChild(s),
                    [
                      4,
                      new Promise(function (t) {
                        return Object(i.c)(s, t);
                      }),
                    ]
                  );
                case 1:
                  return n.sent(), [2, s];
              }
            });
          });
        },
        a = function (t, o) {
          if (o) {
            if (t) {
              var e = o.parentElement;
              return t.removeViewFromDom(e, o);
            }
            o.remove();
          }
          return Promise.resolve();
        };
    },
    67: function (t, o, e) {
      "use strict";
      e.r(o),
        e.d(o, "ion_app", function () {
          return b;
        }),
        e.d(o, "ion_buttons", function () {
          return g;
        }),
        e.d(o, "ion_content", function () {
          return h;
        }),
        e.d(o, "ion_footer", function () {
          return v;
        }),
        e.d(o, "ion_header", function () {
          return O;
        }),
        e.d(o, "ion_router_outlet", function () {
          return S;
        }),
        e.d(o, "ion_title", function () {
          return z;
        }),
        e.d(o, "ion_toolbar", function () {
          return E;
        });
      var n = e(1),
        i = e(14),
        r = e(15),
        a = e(110),
        s = e(12),
        l = e(35),
        c = e(112),
        d = e(19),
        b = (function () {
          function t(t) {
            Object(i.o)(this, t);
          }
          return (
            (t.prototype.componentDidLoad = function () {
              var t = this;
              p(function () {
                return Object(n.a)(t, void 0, void 0, function () {
                  var t, o;
                  return Object(n.c)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          (t = Object(r.a)(window, "hybrid")),
                          r.c.getBoolean("_testing") ||
                            e
                              .e(55)
                              .then(e.bind(null, 116))
                              .then(function (t) {
                                return t.startTapClick(r.c);
                              }),
                          r.c.getBoolean("statusTap", t) &&
                            e
                              .e(53)
                              .then(e.bind(null, 117))
                              .then(function (t) {
                                return t.startStatusTap();
                              }),
                          r.c.getBoolean("inputShims", u()) &&
                            e
                              .e(42)
                              .then(e.bind(null, 118))
                              .then(function (t) {
                                return t.startInputShims(r.c);
                              }),
                          [4, Promise.resolve().then(e.bind(null, 25))]
                        );
                      case 1:
                        return (
                          (o = n.sent()),
                          r.c.getBoolean("hardwareBackButton", t)
                            ? o.startHardwareBackButton()
                            : o.blockHardwareBackButton(),
                          "undefined" !== typeof window &&
                            e
                              .e(51)
                              .then(e.bind(null, 119))
                              .then(function (t) {
                                return t.startKeyboardAssist(window);
                              }),
                          e
                            .e(41)
                            .then(e.bind(null, 120))
                            .then(function (t) {
                              return t.startFocusVisible();
                            }),
                          [2]
                        );
                    }
                  });
                });
              });
            }),
            (t.prototype.render = function () {
              var t,
                o = Object(r.b)(this);
              return Object(i.j)(i.c, {
                class:
                  ((t = {}),
                  (t[o] = !0),
                  (t["ion-page"] = !0),
                  (t["force-statusbar-padding"] = r.c.getBoolean(
                    "_forceStatusbarPadding"
                  )),
                  t),
              });
            }),
            Object.defineProperty(t.prototype, "el", {
              get: function () {
                return Object(i.k)(this);
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })(),
        u = function () {
          return Object(r.a)(window, "ios") && Object(r.a)(window, "mobile");
        },
        p = function (t) {
          "requestIdleCallback" in window
            ? window.requestIdleCallback(t)
            : setTimeout(t, 32);
        };
      b.style =
        "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";
      var g = (function () {
        function t(t) {
          Object(i.o)(this, t), (this.collapse = !1);
        }
        return (
          (t.prototype.render = function () {
            var t,
              o = Object(r.b)(this);
            return Object(i.j)(i.c, {
              class:
                ((t = {}),
                (t[o] = !0),
                (t["buttons-collapse"] = this.collapse),
                t),
            });
          }),
          t
        );
      })();
      g.style = {
        ios: ".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-ios-s ion-button{--padding-start:5px;--padding-end:5px;margin-left:2px;margin-right:2px;height:32px;font-size:17px;font-weight:400}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-ios-s ion-button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-ios-s ion-button:not(.button-round){--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button{--color:initial;--border-color:initial;--background-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-solid,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-solid{--background:var(--ion-color-contrast);--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12;--background-hover:var(--ion-color-base);--background-hover-opacity:0.45;--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-clear,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-clear{--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-outline,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-outline{--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-s .button-clear,.sc-ion-buttons-ios-s .button-outline{--background-activated:transparent;--background-focused:currentColor;--background-hover:transparent}.sc-ion-buttons-ios-s .button-solid:not(.ion-color){--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12}.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:0.3em;font-size:24px;line-height:0.67}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-right:unset;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:0.4em;font-size:24px;line-height:0.67}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:unset;-webkit-margin-start:0.4em;margin-inline-start:0.4em}}.sc-ion-buttons-ios-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:28px;line-height:0.67}",
        md: ".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;margin-left:2px;margin-right:2px;height:32px;font-size:14px;font-weight:500}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-md-s ion-button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-md-s ion-button:not(.button-round){--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button{--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-contrast);--background-hover:var(--ion-color-contrast)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-solid,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-solid{--background:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-base);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-outline,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-outline{--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s .button-has-icon-only.button-clear{--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s .button{--background-hover:currentColor}.sc-ion-buttons-md-s .button-solid{--color:var(--ion-toolbar-background, var(--ion-background-color, #fff));--background:var(--ion-toolbar-color, var(--ion-text-color, #424242));--background-activated:transparent;--background-focused:currentColor}.sc-ion-buttons-md-s .button-outline{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--border-color:currentColor}.sc-ion-buttons-md-s .button-clear{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor}.sc-ion-buttons-md-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:0.3em;font-size:1.4em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-md-s ion-icon[slot=start]{margin-right:unset;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:0.4em;font-size:1.4em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:unset;-webkit-margin-start:0.4em;margin-inline-start:0.4em}}.sc-ion-buttons-md-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}",
      };
      var h = (function () {
          function t(t) {
            Object(i.o)(this, t),
              (this.ionScrollStart = Object(i.g)(this, "ionScrollStart", 7)),
              (this.ionScroll = Object(i.g)(this, "ionScroll", 7)),
              (this.ionScrollEnd = Object(i.g)(this, "ionScrollEnd", 7)),
              (this.isScrolling = !1),
              (this.lastScroll = 0),
              (this.queued = !1),
              (this.cTop = -1),
              (this.cBottom = -1),
              (this.isMainContent = !0),
              (this.detail = {
                scrollTop: 0,
                scrollLeft: 0,
                type: "scroll",
                event: void 0,
                startX: 0,
                startY: 0,
                startTime: 0,
                currentX: 0,
                currentY: 0,
                velocityX: 0,
                velocityY: 0,
                deltaX: 0,
                deltaY: 0,
                currentTime: 0,
                data: void 0,
                isScrolling: !0,
              }),
              (this.fullscreen = !1),
              (this.scrollX = !1),
              (this.scrollY = !0),
              (this.scrollEvents = !1);
          }
          return (
            (t.prototype.connectedCallback = function () {
              this.isMainContent =
                null === this.el.closest("ion-menu, ion-popover, ion-modal");
            }),
            (t.prototype.disconnectedCallback = function () {
              this.onScrollEnd();
            }),
            (t.prototype.onAppLoad = function () {
              this.resize();
            }),
            (t.prototype.onClick = function (t) {
              this.isScrolling && (t.preventDefault(), t.stopPropagation());
            }),
            (t.prototype.shouldForceOverscroll = function () {
              var t = this.forceOverscroll,
                o = Object(r.b)(this);
              return void 0 === t ? "ios" === o && Object(r.a)("ios") : t;
            }),
            (t.prototype.resize = function () {
              var t = this;
              this.fullscreen
                ? Object(i.h)(function () {
                    return t.readDimensions();
                  })
                : (0 === this.cTop && 0 === this.cBottom) ||
                  ((this.cTop = this.cBottom = 0), Object(i.l)(this));
            }),
            (t.prototype.readDimensions = function () {
              var t = f(this.el),
                o = Math.max(this.el.offsetTop, 0),
                e = Math.max(t.offsetHeight - o - this.el.offsetHeight, 0);
              (o !== this.cTop || e !== this.cBottom) &&
                ((this.cTop = o), (this.cBottom = e), Object(i.l)(this));
            }),
            (t.prototype.onScroll = function (t) {
              var o = this,
                e = Date.now(),
                n = !this.isScrolling;
              (this.lastScroll = e),
                n && this.onScrollStart(),
                !this.queued &&
                  this.scrollEvents &&
                  ((this.queued = !0),
                  Object(i.h)(function (e) {
                    (o.queued = !1),
                      (o.detail.event = t),
                      m(o.detail, o.scrollEl, e, n),
                      o.ionScroll.emit(o.detail);
                  }));
            }),
            (t.prototype.getScrollElement = function () {
              return Promise.resolve(this.scrollEl);
            }),
            (t.prototype.scrollToTop = function (t) {
              return void 0 === t && (t = 0), this.scrollToPoint(void 0, 0, t);
            }),
            (t.prototype.scrollToBottom = function (t) {
              void 0 === t && (t = 0);
              var o = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
              return this.scrollToPoint(void 0, o, t);
            }),
            (t.prototype.scrollByPoint = function (t, o, e) {
              return this.scrollToPoint(
                t + this.scrollEl.scrollLeft,
                o + this.scrollEl.scrollTop,
                e
              );
            }),
            (t.prototype.scrollToPoint = function (t, o, e) {
              return (
                void 0 === e && (e = 0),
                Object(n.a)(this, void 0, void 0, function () {
                  var i, r, a, s, l, c, d, b, u;
                  return Object(n.c)(this, function (n) {
                    return (
                      (i = this.scrollEl),
                      e < 32
                        ? (null != o && (i.scrollTop = o),
                          null != t && (i.scrollLeft = t),
                          [2])
                        : ((a = 0),
                          (s = new Promise(function (t) {
                            return (r = t);
                          })),
                          (l = i.scrollTop),
                          (c = i.scrollLeft),
                          (d = null != o ? o - l : 0),
                          (b = null != t ? t - c : 0),
                          (u = function (t) {
                            var o = Math.min(1, (t - a) / e) - 1,
                              n = Math.pow(o, 3) + 1;
                            0 !== d && (i.scrollTop = Math.floor(n * d + l)),
                              0 !== b && (i.scrollLeft = Math.floor(n * b + c)),
                              n < 1 ? requestAnimationFrame(u) : r();
                          }),
                          requestAnimationFrame(function (t) {
                            (a = t), u(t);
                          }),
                          [2, s])
                    );
                  });
                })
              );
            }),
            (t.prototype.onScrollStart = function () {
              var t = this;
              (this.isScrolling = !0),
                this.ionScrollStart.emit({ isScrolling: !0 }),
                this.watchDog && clearInterval(this.watchDog),
                (this.watchDog = setInterval(function () {
                  t.lastScroll < Date.now() - 120 && t.onScrollEnd();
                }, 100));
            }),
            (t.prototype.onScrollEnd = function () {
              clearInterval(this.watchDog),
                (this.watchDog = null),
                this.isScrolling &&
                  ((this.isScrolling = !1),
                  this.ionScrollEnd.emit({ isScrolling: !1 }));
            }),
            (t.prototype.render = function () {
              var t,
                o = this,
                e = this,
                n = e.isMainContent,
                s = e.scrollX,
                l = e.scrollY,
                c = Object(r.b)(this),
                d = this.shouldForceOverscroll(),
                b = n ? "main" : "div",
                u =
                  "ios" === c &&
                  r.c.getBoolean("experimentalTransitionShadow", !0);
              return (
                this.resize(),
                Object(i.j)(
                  i.c,
                  {
                    class: Object(a.a)(
                      this.color,
                      ((t = {}),
                      (t[c] = !0),
                      (t["content-sizing"] = Object(a.c)(
                        "ion-popover",
                        this.el
                      )),
                      (t.overscroll = d),
                      t)
                    ),
                    style: {
                      "--offset-top": this.cTop + "px",
                      "--offset-bottom": this.cBottom + "px",
                    },
                  },
                  Object(i.j)("div", {
                    id: "background-content",
                    part: "background",
                  }),
                  Object(i.j)(
                    b,
                    {
                      class: {
                        "inner-scroll": !0,
                        "scroll-x": s,
                        "scroll-y": l,
                        overscroll: (s || l) && d,
                      },
                      ref: function (t) {
                        return (o.scrollEl = t);
                      },
                      onScroll: this.scrollEvents
                        ? function (t) {
                            return o.onScroll(t);
                          }
                        : void 0,
                      part: "scroll",
                    },
                    Object(i.j)("slot", null)
                  ),
                  u
                    ? Object(i.j)(
                        "div",
                        { class: "transition-effect" },
                        Object(i.j)("div", { class: "transition-cover" }),
                        Object(i.j)("div", { class: "transition-shadow" })
                      )
                    : null,
                  Object(i.j)("slot", { name: "fixed" })
                )
              );
            }),
            Object.defineProperty(t.prototype, "el", {
              get: function () {
                return Object(i.k)(this);
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })(),
        f = function (t) {
          var o = t.closest("ion-tabs");
          if (o) return o;
          var e = t.closest("ion-app,ion-page,.ion-page,page-inner");
          return (
            e ||
            (function (t) {
              return t.parentElement
                ? t.parentElement
                : t.parentNode && t.parentNode.host
                ? t.parentNode.host
                : null;
            })(t)
          );
        },
        m = function (t, o, e, n) {
          var i = t.currentX,
            r = t.currentY,
            a = t.currentTime,
            s = o.scrollLeft,
            l = o.scrollTop,
            c = e - a;
          if (
            (n &&
              ((t.startTime = e),
              (t.startX = s),
              (t.startY = l),
              (t.velocityX = t.velocityY = 0)),
            (t.currentTime = e),
            (t.currentX = t.scrollLeft = s),
            (t.currentY = t.scrollTop = l),
            (t.deltaX = s - t.startX),
            (t.deltaY = l - t.startY),
            c > 0 && c < 100)
          ) {
            var d = (s - i) / c,
              b = (l - r) / c;
            (t.velocityX = 0.7 * d + 0.3 * t.velocityX),
              (t.velocityY = 0.7 * b + 0.3 * t.velocityY);
          }
        };
      h.style =
        ':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow);overscroll-behavior-x:contain}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{display:none;position:absolute;left:-100%;width:100%;height:100vh;opacity:0;pointer-events:none}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}::slotted([slot=fixed]){position:absolute}';
      var v = (function () {
        function t(t) {
          Object(i.o)(this, t), (this.translucent = !1);
        }
        return (
          (t.prototype.render = function () {
            var t,
              o = Object(r.b)(this),
              e = this.translucent;
            return Object(i.j)(
              i.c,
              {
                role: "contentinfo",
                class:
                  ((t = {}),
                  (t[o] = !0),
                  (t["footer-" + o] = !0),
                  (t["footer-translucent"] = e),
                  (t["footer-translucent-" + o] = e),
                  t),
              },
              "ios" === o &&
                e &&
                Object(i.j)("div", { class: "footer-background" }),
              Object(i.j)("slot", null)
            );
          }),
          t
        );
      })();
      v.style = {
        ios: "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-ios ion-toolbar:first-of-type{--border-width:0.55px 0 0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.footer-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8}}.footer-ios.ion-no-border ion-toolbar:first-of-type{--border-width:0}",
        md: 'ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-md::before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==");background-repeat:repeat-x;content:""}[dir=rtl] .footer-md::before,:host-context([dir=rtl]) .footer-md::before{left:unset;right:unset;right:0}[dir=rtl] .footer-md::before,:host-context([dir=rtl]) .footer-md::before{background-position:right 0 top 0}.footer-md.ion-no-border::before{display:none}',
      };
      var x = function (t) {
          var o = document.querySelector(t + ".ion-cloned-element");
          if (null !== o) return o;
          var e = document.createElement(t);
          return (
            e.classList.add("ion-cloned-element"),
            e.style.setProperty("display", "none"),
            document.body.appendChild(e),
            e
          );
        },
        k = function (t) {
          if (t) {
            var o = t.querySelectorAll("ion-toolbar");
            return {
              el: t,
              toolbars:
                Array.from(o).map(function (t) {
                  var o = t.querySelector("ion-title");
                  return {
                    el: t,
                    background: t.shadowRoot.querySelector(
                      ".toolbar-background"
                    ),
                    ionTitleEl: o,
                    innerTitleEl: o
                      ? o.shadowRoot.querySelector(".toolbar-title")
                      : null,
                    ionButtonsEl:
                      Array.from(t.querySelectorAll("ion-buttons")) || [],
                  };
                }) || [],
            };
          }
        },
        w = function (t, o) {
          void 0 === o
            ? t.background.style.removeProperty("--opacity")
            : t.background.style.setProperty("--opacity", o.toString());
        },
        y = function (t, o, e, n) {
          Object(i.f)(function () {
            var i = n.scrollTop;
            !(function (t, o, e) {
              if (t[0].isIntersecting) {
                var n =
                  t[0].intersectionRatio > 0.9 || e <= 0
                    ? 0
                    : (100 * (1 - t[0].intersectionRatio)) / 75;
                o.toolbars.forEach(function (t) {
                  w(t, 1 === n ? void 0 : n);
                });
              }
            })(t, o, i);
            var r = t[0],
              a = r.intersectionRect,
              s = a.width * a.height,
              l = r.rootBounds.width * r.rootBounds.height,
              c = 0 === s && 0 === l,
              d = Math.abs(a.left - r.boundingClientRect.left),
              b = Math.abs(a.right - r.boundingClientRect.right);
            c ||
              (s > 0 && (d >= 5 || b >= 5)) ||
              (r.isIntersecting
                ? (j(o, !1), j(e))
                : ((0 === a.x && 0 === a.y) ||
                    (0 !== a.width && 0 !== a.height)) &&
                  i > 0 &&
                  (j(o), j(e, !1), w(o.toolbars[0])));
          });
        },
        j = function (t, o) {
          void 0 === o && (o = !0),
            o
              ? t.el.classList.remove("header-collapse-condense-inactive")
              : t.el.classList.add("header-collapse-condense-inactive");
        },
        A = function (t, o, e) {
          void 0 === t && (t = []),
            void 0 === o && (o = 1),
            void 0 === e && (e = !1),
            t.forEach(function (t) {
              var n = t.ionTitleEl,
                i = t.innerTitleEl;
              n &&
                "large" === n.size &&
                ((i.style.transition = e ? "all 0.2s ease-in-out" : ""),
                (i.style.transform = "scale3d(" + o + ", " + o + ", 1)"));
            });
        },
        O = (function () {
          function t(t) {
            Object(i.o)(this, t),
              (this.collapsibleHeaderInitialized = !1),
              (this.translucent = !1);
          }
          return (
            (t.prototype.componentDidLoad = function () {
              return Object(n.a)(this, void 0, void 0, function () {
                return Object(n.c)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.checkCollapsibleHeader()];
                    case 1:
                      return t.sent(), [2];
                  }
                });
              });
            }),
            (t.prototype.componentDidUpdate = function () {
              return Object(n.a)(this, void 0, void 0, function () {
                return Object(n.c)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.checkCollapsibleHeader()];
                    case 1:
                      return t.sent(), [2];
                  }
                });
              });
            }),
            (t.prototype.disconnectedCallback = function () {
              this.destroyCollapsibleHeader();
            }),
            (t.prototype.checkCollapsibleHeader = function () {
              return Object(n.a)(this, void 0, void 0, function () {
                var t, o, e, a;
                return Object(n.c)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (t = "condense" === this.collapse),
                        (o = !(!t || "ios" !== Object(r.b)(this)) && t) ||
                        !this.collapsibleHeaderInitialized
                          ? [3, 1]
                          : (this.destroyCollapsibleHeader(), [3, 3])
                      );
                    case 1:
                      return !o || this.collapsibleHeaderInitialized
                        ? [3, 3]
                        : ((e = this.el.closest(
                            "ion-app,ion-page,.ion-page,page-inner"
                          )),
                          (a = e ? e.querySelector("ion-content") : null),
                          Object(i.f)(function () {
                            (x("ion-title").size = "large"),
                              x("ion-back-button");
                          }),
                          [4, this.setupCollapsibleHeader(a, e)]);
                    case 2:
                      n.sent(), (n.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.destroyCollapsibleHeader = function () {
              this.intersectionObserver &&
                (this.intersectionObserver.disconnect(),
                (this.intersectionObserver = void 0)),
                this.scrollEl &&
                  this.contentScrollCallback &&
                  (this.scrollEl.removeEventListener(
                    "scroll",
                    this.contentScrollCallback
                  ),
                  (this.contentScrollCallback = void 0)),
                this.collapsibleMainHeader &&
                  (this.collapsibleMainHeader.classList.remove(
                    "header-collapse-main"
                  ),
                  (this.collapsibleMainHeader = void 0));
            }),
            (t.prototype.setupCollapsibleHeader = function (t, o) {
              return Object(n.a)(this, void 0, void 0, function () {
                var e,
                  r,
                  a,
                  l,
                  c,
                  d = this;
                return Object(n.c)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return t && o
                        ? "undefined" === typeof IntersectionObserver
                          ? [2]
                          : ((e = this), [4, t.getScrollElement()])
                        : (console.error(
                            "ion-header requires a content to collapse, make sure there is an ion-content."
                          ),
                          [2]);
                    case 1:
                      return (
                        (e.scrollEl = n.sent()),
                        (r = o.querySelectorAll("ion-header")),
                        (this.collapsibleMainHeader = Array.from(r).find(
                          function (t) {
                            return "condense" !== t.collapse;
                          }
                        )),
                        this.collapsibleMainHeader
                          ? ((a = k(this.collapsibleMainHeader)),
                            (l = k(this.el)),
                            a && l
                              ? (j(a, !1),
                                a.toolbars.forEach(function (t) {
                                  w(t, 0);
                                }),
                                (c = function (t) {
                                  y(t, a, l, d.scrollEl);
                                }),
                                (this.intersectionObserver =
                                  new IntersectionObserver(c, {
                                    root: t,
                                    threshold: [
                                      0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9,
                                      1,
                                    ],
                                  })),
                                this.intersectionObserver.observe(
                                  l.toolbars[l.toolbars.length - 1].el
                                ),
                                (this.contentScrollCallback = function () {
                                  !(function (t, o, e) {
                                    Object(i.h)(function () {
                                      var n = t.scrollTop,
                                        r = Object(s.j)(1, 1 + -n / 500, 1.1);
                                      null ===
                                        e.querySelector(
                                          "ion-refresher.refresher-native"
                                        ) &&
                                        Object(i.f)(function () {
                                          A(o.toolbars, r);
                                        });
                                    });
                                  })(d.scrollEl, l, t);
                                }),
                                this.scrollEl.addEventListener(
                                  "scroll",
                                  this.contentScrollCallback
                                ),
                                Object(i.f)(function () {
                                  void 0 !== d.collapsibleMainHeader &&
                                    d.collapsibleMainHeader.classList.add(
                                      "header-collapse-main"
                                    );
                                }),
                                (this.collapsibleHeaderInitialized = !0),
                                [2])
                              : [2])
                          : [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.render = function () {
              var t,
                o = this.translucent,
                e = Object(r.b)(this),
                n = this.collapse || "none";
              return Object(i.j)(
                i.c,
                {
                  role: "banner",
                  class:
                    ((t = {}),
                    (t[e] = !0),
                    (t["header-" + e] = !0),
                    (t["header-translucent"] = this.translucent),
                    (t["header-collapse-" + n] = !0),
                    (t["header-translucent-" + e] = this.translucent),
                    t),
                },
                "ios" === e &&
                  o &&
                  Object(i.j)("div", { class: "header-background" }),
                Object(i.j)("slot", null)
              );
            }),
            Object.defineProperty(t.prototype, "el", {
              get: function () {
                return Object(i.k)(this);
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })();
      O.style = {
        ios: "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}",
        md: 'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md::after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{left:unset;right:unset;right:0}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{background-position:right 0 top -2px}.header-collapse-condense{display:none}.header-md.ion-no-border::after{display:none}',
      };
      var S = (function () {
        function t(t) {
          Object(i.o)(this, t),
            (this.ionNavWillLoad = Object(i.g)(this, "ionNavWillLoad", 7)),
            (this.ionNavWillChange = Object(i.g)(this, "ionNavWillChange", 3)),
            (this.ionNavDidChange = Object(i.g)(this, "ionNavDidChange", 3)),
            (this.animationEnabled = !0),
            (this.mode = Object(r.b)(this)),
            (this.animated = !0);
        }
        return (
          (t.prototype.swipeHandlerChanged = function () {
            this.gesture && this.gesture.enable(void 0 !== this.swipeHandler);
          }),
          (t.prototype.connectedCallback = function () {
            return Object(n.a)(this, void 0, void 0, function () {
              var t,
                o = this;
              return Object(n.c)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (t = this), [4, e.e(0).then(e.bind(null, 115))];
                  case 1:
                    return (
                      (t.gesture = n.sent().createSwipeBackGesture(
                        this.el,
                        function () {
                          return (
                            !!o.swipeHandler &&
                            o.swipeHandler.canStart() &&
                            o.animationEnabled
                          );
                        },
                        function () {
                          return o.swipeHandler && o.swipeHandler.onStart();
                        },
                        function (t) {
                          return o.ani && o.ani.progressStep(t);
                        },
                        function (t, e, n) {
                          if (o.ani) {
                            (o.animationEnabled = !1),
                              o.ani.onFinish(
                                function () {
                                  (o.animationEnabled = !0),
                                    o.swipeHandler && o.swipeHandler.onEnd(t);
                                },
                                { oneTimeCallback: !0 }
                              );
                            var i = t ? -0.001 : 0.001;
                            t
                              ? (i += Object(l.a)(
                                  [0, 0],
                                  [0.32, 0.72],
                                  [0, 1],
                                  [1, 1],
                                  e
                                )[0])
                              : (o.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),
                                (i += Object(l.a)(
                                  [0, 0],
                                  [1, 0],
                                  [0.68, 0.28],
                                  [1, 1],
                                  e
                                )[0])),
                              o.ani.progressEnd(t ? 1 : 0, i, n);
                          }
                        }
                      )),
                      this.swipeHandlerChanged(),
                      [2]
                    );
                }
              });
            });
          }),
          (t.prototype.componentWillLoad = function () {
            this.ionNavWillLoad.emit();
          }),
          (t.prototype.disconnectedCallback = function () {
            this.gesture && (this.gesture.destroy(), (this.gesture = void 0));
          }),
          (t.prototype.commit = function (t, o, e) {
            return Object(n.a)(this, void 0, void 0, function () {
              var i, r, a;
              return Object(n.c)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.lock()];
                  case 1:
                    (i = n.sent()), (r = !1), (n.label = 2);
                  case 2:
                    return (
                      n.trys.push([2, 4, , 5]), [4, this.transition(t, o, e)]
                    );
                  case 3:
                    return (r = n.sent()), [3, 5];
                  case 4:
                    return (a = n.sent()), console.error(a), [3, 5];
                  case 5:
                    return i(), [2, r];
                }
              });
            });
          }),
          (t.prototype.setRouteId = function (t, o, e, i) {
            return Object(n.a)(this, void 0, void 0, function () {
              return Object(n.c)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [
                      4,
                      this.setRoot(t, o, {
                        duration: "root" === e ? 0 : void 0,
                        direction: "back" === e ? "back" : "forward",
                        animationBuilder: i,
                      }),
                    ];
                  case 1:
                    return [2, { changed: n.sent(), element: this.activeEl }];
                }
              });
            });
          }),
          (t.prototype.getRouteId = function () {
            return Object(n.a)(this, void 0, void 0, function () {
              var t;
              return Object(n.c)(this, function (o) {
                return [
                  2,
                  (t = this.activeEl) ? { id: t.tagName, element: t } : void 0,
                ];
              });
            });
          }),
          (t.prototype.setRoot = function (t, o, e) {
            return Object(n.a)(this, void 0, void 0, function () {
              var i, r;
              return Object(n.c)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return this.activeComponent === t
                      ? [2, !1]
                      : ((i = this.activeEl),
                        [
                          4,
                          Object(c.a)(
                            this.delegate,
                            this.el,
                            t,
                            ["ion-page", "ion-page-invisible"],
                            o
                          ),
                        ]);
                  case 1:
                    return (
                      (r = n.sent()),
                      (this.activeComponent = t),
                      (this.activeEl = r),
                      [4, this.commit(r, i, e)]
                    );
                  case 2:
                    return n.sent(), [4, Object(c.b)(this.delegate, i)];
                  case 3:
                    return n.sent(), [2, !0];
                }
              });
            });
          }),
          (t.prototype.transition = function (t, o, e) {
            return (
              void 0 === e && (e = {}),
              Object(n.a)(this, void 0, void 0, function () {
                var i,
                  a,
                  s,
                  l,
                  c,
                  b = this;
                return Object(n.c)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return o === t
                        ? [2, !1]
                        : (this.ionNavWillChange.emit(),
                          (a = (i = this).el),
                          (s = i.mode),
                          (l = this.animated && r.c.getBoolean("animated", !0)),
                          (c =
                            this.animation ||
                            e.animationBuilder ||
                            r.c.get("navAnimation")),
                          [
                            4,
                            Object(d.h)(
                              Object.assign(
                                Object.assign(
                                  {
                                    mode: s,
                                    animated: l,
                                    enteringEl: t,
                                    leavingEl: o,
                                    baseEl: a,
                                    progressCallback: e.progressAnimation
                                      ? function (t) {
                                          return (b.ani = t);
                                        }
                                      : void 0,
                                  },
                                  e
                                ),
                                { animationBuilder: c }
                              )
                            ),
                          ]);
                    case 1:
                      return n.sent(), this.ionNavDidChange.emit(), [2, !0];
                  }
                });
              })
            );
          }),
          (t.prototype.lock = function () {
            return Object(n.a)(this, void 0, void 0, function () {
              var t, o;
              return Object(n.c)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = this.waitPromise),
                      (this.waitPromise = new Promise(function (t) {
                        return (o = t);
                      })),
                      void 0 === t ? [3, 2] : [4, t]
                    );
                  case 1:
                    e.sent(), (e.label = 2);
                  case 2:
                    return [2, o];
                }
              });
            });
          }),
          (t.prototype.render = function () {
            return Object(i.j)("slot", null);
          }),
          Object.defineProperty(t.prototype, "el", {
            get: function () {
              return Object(i.k)(this);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, "watchers", {
            get: function () {
              return { swipeHandler: ["swipeHandlerChanged"] };
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })();
      S.style =
        ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";
      var z = (function () {
        function t(t) {
          Object(i.o)(this, t),
            (this.ionStyle = Object(i.g)(this, "ionStyle", 7));
        }
        return (
          (t.prototype.sizeChanged = function () {
            this.emitStyle();
          }),
          (t.prototype.connectedCallback = function () {
            this.emitStyle();
          }),
          (t.prototype.emitStyle = function () {
            var t,
              o = this.getSize();
            this.ionStyle.emit((((t = {})["title-" + o] = !0), t));
          }),
          (t.prototype.getSize = function () {
            return void 0 !== this.size ? this.size : "default";
          }),
          (t.prototype.render = function () {
            var t,
              o = Object(r.b)(this),
              e = this.getSize();
            return Object(i.j)(
              i.c,
              {
                class: Object(a.a)(
                  this.color,
                  ((t = {}),
                  (t[o] = !0),
                  (t["title-" + e] = !0),
                  (t["title-rtl"] = "rtl" === document.dir),
                  t)
                ),
              },
              Object(i.j)(
                "div",
                { class: "toolbar-title" },
                Object(i.j)("slot", null)
              )
            );
          }),
          Object.defineProperty(t.prototype, "el", {
            get: function () {
              return Object(i.k)(this);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, "watchers", {
            get: function () {
              return { size: ["sizeChanged"] };
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })();
      z.style = {
        ios: ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:13px;font-weight:normal}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;-webkit-transform-origin:left center;transform-origin:left center;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}",
        md: ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:0.0125em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:normal}",
      };
      var E = (function () {
        function t(t) {
          Object(i.o)(this, t), (this.childrenStyles = new Map());
        }
        return (
          (t.prototype.componentWillLoad = function () {
            var t = Array.from(this.el.querySelectorAll("ion-buttons")),
              o = t.find(function (t) {
                return "start" === t.slot;
              });
            o && o.classList.add("buttons-first-slot");
            var e = t.reverse(),
              n =
                e.find(function (t) {
                  return "end" === t.slot;
                }) ||
                e.find(function (t) {
                  return "primary" === t.slot;
                }) ||
                e.find(function (t) {
                  return "secondary" === t.slot;
                });
            n && n.classList.add("buttons-last-slot");
          }),
          (t.prototype.childrenStyle = function (t) {
            t.stopPropagation();
            var o = t.target.tagName,
              e = t.detail,
              n = {},
              r = this.childrenStyles.get(o) || {},
              a = !1;
            Object.keys(e).forEach(function (t) {
              var o = "toolbar-" + t,
                i = e[t];
              i !== r[o] && (a = !0), i && (n[o] = !0);
            }),
              a && (this.childrenStyles.set(o, n), Object(i.l)(this));
          }),
          (t.prototype.render = function () {
            var t,
              o = Object(r.b)(this),
              e = {};
            return (
              this.childrenStyles.forEach(function (t) {
                Object.assign(e, t);
              }),
              Object(i.j)(
                i.c,
                {
                  class: Object.assign(
                    Object.assign({}, e),
                    Object(a.a)(
                      this.color,
                      ((t = {}),
                      (t[o] = !0),
                      (t["in-toolbar"] = Object(a.c)("ion-toolbar", this.el)),
                      t)
                    )
                  ),
                },
                Object(i.j)("div", { class: "toolbar-background" }),
                Object(i.j)(
                  "div",
                  { class: "toolbar-container" },
                  Object(i.j)("slot", { name: "start" }),
                  Object(i.j)("slot", { name: "secondary" }),
                  Object(i.j)(
                    "div",
                    { class: "toolbar-content" },
                    Object(i.j)("slot", null)
                  ),
                  Object(i.j)("slot", { name: "primary" }),
                  Object(i.j)("slot", { name: "end" })
                )
              )
            );
          }),
          Object.defineProperty(t.prototype, "el", {
            get: function () {
              return Object(i.k)(this);
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })();
      E.style = {
        ios: ":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}",
        md: ":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}",
      };
    },
  },
]);
//# sourceMappingURL=7.290789aa.chunk.js.map
