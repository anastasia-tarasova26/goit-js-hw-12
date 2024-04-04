var q =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Dt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var kt = { exports: {} };
(function (e, o) {
  (function (n, i) {
    e.exports = i(n);
  })(typeof q < "u" ? q : window || q.window || q.global, function (n) {
    var i = {},
      a = "iziToast";
    document.querySelector("body");
    var c = !!/Mobi/.test(navigator.userAgent),
      d =
        /Chrome/.test(navigator.userAgent) &&
        /Google Inc/.test(navigator.vendor),
      w = typeof InstallTrigger < "u",
      I = "ontouchstart" in document.documentElement,
      T = [
        "bottomRight",
        "bottomLeft",
        "bottomCenter",
        "topRight",
        "topLeft",
        "topCenter",
        "center",
      ],
      S = {
        info: { color: "blue", icon: "ico-info" },
        success: { color: "green", icon: "ico-success" },
        warning: { color: "orange", icon: "ico-warning" },
        error: { color: "red", icon: "ico-error" },
        question: { color: "yellow", icon: "ico-question" },
      },
      v = 568,
      L = {};
    i.children = {};
    var k = {
      id: null,
      class: "",
      title: "",
      titleColor: "",
      titleSize: "",
      titleLineHeight: "",
      message: "",
      messageColor: "",
      messageSize: "",
      messageLineHeight: "",
      backgroundColor: "",
      theme: "light",
      color: "",
      icon: "",
      iconText: "",
      iconColor: "",
      iconUrl: null,
      image: "",
      imageWidth: 50,
      maxWidth: null,
      zindex: null,
      layout: 1,
      balloon: !1,
      close: !0,
      closeOnEscape: !1,
      closeOnClick: !1,
      displayMode: 0,
      position: "bottomRight",
      target: "",
      targetFirst: !0,
      timeout: 5e3,
      rtl: !1,
      animateInside: !0,
      drag: !0,
      pauseOnHover: !0,
      resetOnHover: !1,
      progressBar: !0,
      progressBarColor: "",
      progressBarEasing: "linear",
      overlay: !1,
      overlayClose: !1,
      overlayColor: "rgba(0, 0, 0, 0.6)",
      transitionIn: "fadeInUp",
      transitionOut: "fadeOut",
      transitionInMobile: "fadeInUp",
      transitionOutMobile: "fadeOutDown",
      buttons: {},
      inputs: {},
      onOpening: function () {},
      onOpened: function () {},
      onClosing: function () {},
      onClosed: function () {},
    };
    if (
      ("remove" in Element.prototype ||
        (Element.prototype.remove = function () {
          this.parentNode && this.parentNode.removeChild(this);
        }),
      typeof window.CustomEvent != "function")
    ) {
      var x = function (p, u) {
        u = u || { bubbles: !1, cancelable: !1, detail: void 0 };
        var r = document.createEvent("CustomEvent");
        return r.initCustomEvent(p, u.bubbles, u.cancelable, u.detail), r;
      };
      (x.prototype = window.Event.prototype), (window.CustomEvent = x);
    }
    var h = function (p, u, r) {
        if (Object.prototype.toString.call(p) === "[object Object]")
          for (var l in p)
            Object.prototype.hasOwnProperty.call(p, l) && u.call(r, p[l], l, p);
        else if (p)
          for (var b = 0, O = p.length; b < O; b++) u.call(r, p[b], b, p);
      },
      g = function (p, u) {
        var r = {};
        return (
          h(p, function (l, b) {
            r[b] = p[b];
          }),
          h(u, function (l, b) {
            r[b] = u[b];
          }),
          r
        );
      },
      t = function (p) {
        var u = document.createDocumentFragment(),
          r = document.createElement("div");
        for (r.innerHTML = p; r.firstChild; ) u.appendChild(r.firstChild);
        return u;
      },
      s = function (p) {
        var u = btoa(encodeURIComponent(p));
        return u.replace(/=/g, "");
      },
      f = function (p) {
        return (
          p.substring(0, 1) == "#" ||
          p.substring(0, 3) == "rgb" ||
          p.substring(0, 3) == "hsl"
        );
      },
      C = function (p) {
        try {
          return btoa(atob(p)) == p;
        } catch {
          return !1;
        }
      },
      E = (function () {
        return {
          move: function (p, u, r, l) {
            var b,
              O = 0.3,
              y = 180;
            l !== 0 &&
              (p.classList.add(a + "-dragged"),
              (p.style.transform = "translateX(" + l + "px)"),
              l > 0
                ? ((b = (y - l) / y),
                  b < O &&
                    u.hide(
                      g(r, {
                        transitionOut: "fadeOutRight",
                        transitionOutMobile: "fadeOutRight",
                      }),
                      p,
                      "drag"
                    ))
                : ((b = (y + l) / y),
                  b < O &&
                    u.hide(
                      g(r, {
                        transitionOut: "fadeOutLeft",
                        transitionOutMobile: "fadeOutLeft",
                      }),
                      p,
                      "drag"
                    )),
              (p.style.opacity = b),
              b < O &&
                ((d || w) && (p.style.left = l + "px"),
                (p.parentNode.style.opacity = O),
                this.stopMoving(p, null)));
          },
          startMoving: function (p, u, r, l) {
            l = l || window.event;
            var b = I ? l.touches[0].clientX : l.clientX,
              O = p.style.transform.replace("px)", "");
            O = O.replace("translateX(", "");
            var y = b - O;
            r.transitionIn && p.classList.remove(r.transitionIn),
              r.transitionInMobile && p.classList.remove(r.transitionInMobile),
              (p.style.transition = ""),
              I
                ? (document.ontouchmove = function (N) {
                    N.preventDefault(), (N = N || window.event);
                    var A = N.touches[0].clientX,
                      P = A - y;
                    E.move(p, u, r, P);
                  })
                : (document.onmousemove = function (N) {
                    N.preventDefault(), (N = N || window.event);
                    var A = N.clientX,
                      P = A - y;
                    E.move(p, u, r, P);
                  });
          },
          stopMoving: function (p, u) {
            I
              ? (document.ontouchmove = function () {})
              : (document.onmousemove = function () {}),
              (p.style.opacity = ""),
              (p.style.transform = ""),
              p.classList.contains(a + "-dragged") &&
                (p.classList.remove(a + "-dragged"),
                (p.style.transition = "transform 0.4s ease, opacity 0.4s ease"),
                setTimeout(function () {
                  p.style.transition = "";
                }, 400));
          },
        };
      })();
    return (
      (i.setSetting = function (p, u, r) {
        i.children[p][u] = r;
      }),
      (i.getSetting = function (p, u) {
        return i.children[p][u];
      }),
      (i.destroy = function () {
        h(document.querySelectorAll("." + a + "-overlay"), function (p, u) {
          p.remove();
        }),
          h(document.querySelectorAll("." + a + "-wrapper"), function (p, u) {
            p.remove();
          }),
          h(document.querySelectorAll("." + a), function (p, u) {
            p.remove();
          }),
          (this.children = {}),
          document.removeEventListener(a + "-opened", {}, !1),
          document.removeEventListener(a + "-opening", {}, !1),
          document.removeEventListener(a + "-closing", {}, !1),
          document.removeEventListener(a + "-closed", {}, !1),
          document.removeEventListener("keyup", {}, !1),
          (L = {});
      }),
      (i.settings = function (p) {
        i.destroy(), (L = p), (k = g(k, p || {}));
      }),
      h(S, function (p, u) {
        i[u] = function (r) {
          var l = g(L, r || {});
          (l = g(p, l || {})), this.show(l);
        };
      }),
      (i.progress = function (p, u, r) {
        var l = this,
          b = u.getAttribute("data-iziToast-ref"),
          O = g(this.children[b], p || {}),
          y = u.querySelector("." + a + "-progressbar div");
        return {
          start: function () {
            typeof O.time.REMAINING > "u" &&
              (u.classList.remove(a + "-reseted"),
              y !== null &&
                ((y.style.transition =
                  "width " + O.timeout + "ms " + O.progressBarEasing),
                (y.style.width = "0%")),
              (O.time.START = new Date().getTime()),
              (O.time.END = O.time.START + O.timeout),
              (O.time.TIMER = setTimeout(function () {
                clearTimeout(O.time.TIMER),
                  u.classList.contains(a + "-closing") ||
                    (l.hide(O, u, "timeout"),
                    typeof r == "function" && r.apply(l));
              }, O.timeout)),
              l.setSetting(b, "time", O.time));
          },
          pause: function () {
            if (
              typeof O.time.START < "u" &&
              !u.classList.contains(a + "-paused") &&
              !u.classList.contains(a + "-reseted")
            ) {
              if (
                (u.classList.add(a + "-paused"),
                (O.time.REMAINING = O.time.END - new Date().getTime()),
                clearTimeout(O.time.TIMER),
                l.setSetting(b, "time", O.time),
                y !== null)
              ) {
                var N = window.getComputedStyle(y),
                  A = N.getPropertyValue("width");
                (y.style.transition = "none"), (y.style.width = A);
              }
              typeof r == "function" &&
                setTimeout(function () {
                  r.apply(l);
                }, 10);
            }
          },
          resume: function () {
            typeof O.time.REMAINING < "u"
              ? (u.classList.remove(a + "-paused"),
                y !== null &&
                  ((y.style.transition =
                    "width " + O.time.REMAINING + "ms " + O.progressBarEasing),
                  (y.style.width = "0%")),
                (O.time.END = new Date().getTime() + O.time.REMAINING),
                (O.time.TIMER = setTimeout(function () {
                  clearTimeout(O.time.TIMER),
                    u.classList.contains(a + "-closing") ||
                      (l.hide(O, u, "timeout"),
                      typeof r == "function" && r.apply(l));
                }, O.time.REMAINING)),
                l.setSetting(b, "time", O.time))
              : this.start();
          },
          reset: function () {
            clearTimeout(O.time.TIMER),
              delete O.time.REMAINING,
              l.setSetting(b, "time", O.time),
              u.classList.add(a + "-reseted"),
              u.classList.remove(a + "-paused"),
              y !== null &&
                ((y.style.transition = "none"), (y.style.width = "100%")),
              typeof r == "function" &&
                setTimeout(function () {
                  r.apply(l);
                }, 10);
          },
        };
      }),
      (i.hide = function (p, u, r) {
        typeof u != "object" && (u = document.querySelector(u));
        var l = this,
          b = g(this.children[u.getAttribute("data-iziToast-ref")], p || {});
        (b.closedBy = r || null),
          delete b.time.REMAINING,
          u.classList.add(a + "-closing"),
          (function () {
            var N = document.querySelector("." + a + "-overlay");
            if (N !== null) {
              var A = N.getAttribute("data-iziToast-ref");
              A = A.split(",");
              var P = A.indexOf(String(b.ref));
              P !== -1 && A.splice(P, 1),
                N.setAttribute("data-iziToast-ref", A.join()),
                A.length === 0 &&
                  (N.classList.remove("fadeIn"),
                  N.classList.add("fadeOut"),
                  setTimeout(function () {
                    N.remove();
                  }, 700));
            }
          })(),
          b.transitionIn && u.classList.remove(b.transitionIn),
          b.transitionInMobile && u.classList.remove(b.transitionInMobile),
          c || window.innerWidth <= v
            ? b.transitionOutMobile && u.classList.add(b.transitionOutMobile)
            : b.transitionOut && u.classList.add(b.transitionOut);
        var O = u.parentNode.offsetHeight;
        (u.parentNode.style.height = O + "px"),
          (u.style.pointerEvents = "none"),
          (!c || window.innerWidth > v) &&
            (u.parentNode.style.transitionDelay = "0.2s");
        try {
          var y = new CustomEvent(a + "-closing", {
            detail: b,
            bubbles: !0,
            cancelable: !0,
          });
          document.dispatchEvent(y);
        } catch (N) {
          console.warn(N);
        }
        setTimeout(function () {
          (u.parentNode.style.height = "0px"),
            (u.parentNode.style.overflow = ""),
            setTimeout(function () {
              delete l.children[b.ref], u.parentNode.remove();
              try {
                var N = new CustomEvent(a + "-closed", {
                  detail: b,
                  bubbles: !0,
                  cancelable: !0,
                });
                document.dispatchEvent(N);
              } catch (A) {
                console.warn(A);
              }
              typeof b.onClosed < "u" && b.onClosed.apply(null, [b, u, r]);
            }, 1e3);
        }, 200),
          typeof b.onClosing < "u" && b.onClosing.apply(null, [b, u, r]);
      }),
      (i.show = function (p) {
        var u = this,
          r = g(L, p || {});
        if (
          ((r = g(k, r)),
          (r.time = {}),
          r.id === null && (r.id = s(r.title + r.message + r.color)),
          r.displayMode === 1 || r.displayMode == "once")
        )
          try {
            if (document.querySelectorAll("." + a + "#" + r.id).length > 0)
              return !1;
          } catch {
            console.warn(
              "[" +
                a +
                "] Could not find an element with this selector: #" +
                r.id +
                ". Try to set an valid id."
            );
          }
        if (r.displayMode === 2 || r.displayMode == "replace")
          try {
            h(document.querySelectorAll("." + a + "#" + r.id), function (y, N) {
              u.hide(r, y, "replaced");
            });
          } catch {
            console.warn(
              "[" +
                a +
                "] Could not find an element with this selector: #" +
                r.id +
                ". Try to set an valid id."
            );
          }
        (r.ref = new Date().getTime() + Math.floor(Math.random() * 1e7 + 1)),
          (i.children[r.ref] = r);
        var l = {
          body: document.querySelector("body"),
          overlay: document.createElement("div"),
          toast: document.createElement("div"),
          toastBody: document.createElement("div"),
          toastTexts: document.createElement("div"),
          toastCapsule: document.createElement("div"),
          cover: document.createElement("div"),
          buttons: document.createElement("div"),
          inputs: document.createElement("div"),
          icon: r.iconUrl
            ? document.createElement("img")
            : document.createElement("i"),
          wrapper: null,
        };
        l.toast.setAttribute("data-iziToast-ref", r.ref),
          l.toast.appendChild(l.toastBody),
          l.toastCapsule.appendChild(l.toast),
          (function () {
            if (
              (l.toast.classList.add(a),
              l.toast.classList.add(a + "-opening"),
              l.toastCapsule.classList.add(a + "-capsule"),
              l.toastBody.classList.add(a + "-body"),
              l.toastTexts.classList.add(a + "-texts"),
              c || window.innerWidth <= v
                ? r.transitionInMobile &&
                  l.toast.classList.add(r.transitionInMobile)
                : r.transitionIn && l.toast.classList.add(r.transitionIn),
              r.class)
            ) {
              var y = r.class.split(" ");
              h(y, function (N, A) {
                l.toast.classList.add(N);
              });
            }
            r.id && (l.toast.id = r.id),
              r.rtl &&
                (l.toast.classList.add(a + "-rtl"),
                l.toast.setAttribute("dir", "rtl")),
              r.layout > 1 && l.toast.classList.add(a + "-layout" + r.layout),
              r.balloon && l.toast.classList.add(a + "-balloon"),
              r.maxWidth &&
                (isNaN(r.maxWidth)
                  ? (l.toast.style.maxWidth = r.maxWidth)
                  : (l.toast.style.maxWidth = r.maxWidth + "px")),
              (r.theme !== "" || r.theme !== "light") &&
                l.toast.classList.add(a + "-theme-" + r.theme),
              r.color &&
                (f(r.color)
                  ? (l.toast.style.background = r.color)
                  : l.toast.classList.add(a + "-color-" + r.color)),
              r.backgroundColor &&
                ((l.toast.style.background = r.backgroundColor),
                r.balloon && (l.toast.style.borderColor = r.backgroundColor));
          })(),
          (function () {
            r.image &&
              (l.cover.classList.add(a + "-cover"),
              (l.cover.style.width = r.imageWidth + "px"),
              C(r.image.replace(/ /g, ""))
                ? (l.cover.style.backgroundImage =
                    "url(data:image/png;base64," +
                    r.image.replace(/ /g, "") +
                    ")")
                : (l.cover.style.backgroundImage = "url(" + r.image + ")"),
              r.rtl
                ? (l.toastBody.style.marginRight = r.imageWidth + 10 + "px")
                : (l.toastBody.style.marginLeft = r.imageWidth + 10 + "px"),
              l.toast.appendChild(l.cover));
          })(),
          (function () {
            r.close
              ? ((l.buttonClose = document.createElement("button")),
                (l.buttonClose.type = "button"),
                l.buttonClose.classList.add(a + "-close"),
                l.buttonClose.addEventListener("click", function (y) {
                  y.target, u.hide(r, l.toast, "button");
                }),
                l.toast.appendChild(l.buttonClose))
              : r.rtl
              ? (l.toast.style.paddingLeft = "18px")
              : (l.toast.style.paddingRight = "18px");
          })(),
          (function () {
            r.progressBar &&
              ((l.progressBar = document.createElement("div")),
              (l.progressBarDiv = document.createElement("div")),
              l.progressBar.classList.add(a + "-progressbar"),
              (l.progressBarDiv.style.background = r.progressBarColor),
              l.progressBar.appendChild(l.progressBarDiv),
              l.toast.appendChild(l.progressBar)),
              r.timeout &&
                (r.pauseOnHover &&
                  !r.resetOnHover &&
                  (l.toast.addEventListener("mouseenter", function (y) {
                    u.progress(r, l.toast).pause();
                  }),
                  l.toast.addEventListener("mouseleave", function (y) {
                    u.progress(r, l.toast).resume();
                  })),
                r.resetOnHover &&
                  (l.toast.addEventListener("mouseenter", function (y) {
                    u.progress(r, l.toast).reset();
                  }),
                  l.toast.addEventListener("mouseleave", function (y) {
                    u.progress(r, l.toast).start();
                  })));
          })(),
          (function () {
            r.iconUrl
              ? (l.icon.setAttribute("class", a + "-icon"),
                l.icon.setAttribute("src", r.iconUrl))
              : r.icon &&
                (l.icon.setAttribute("class", a + "-icon " + r.icon),
                r.iconText &&
                  l.icon.appendChild(document.createTextNode(r.iconText)),
                r.iconColor && (l.icon.style.color = r.iconColor)),
              (r.icon || r.iconUrl) &&
                (r.rtl
                  ? (l.toastBody.style.paddingRight = "33px")
                  : (l.toastBody.style.paddingLeft = "33px"),
                l.toastBody.appendChild(l.icon));
          })(),
          (function () {
            r.title.length > 0 &&
              ((l.strong = document.createElement("strong")),
              l.strong.classList.add(a + "-title"),
              l.strong.appendChild(t(r.title)),
              l.toastTexts.appendChild(l.strong),
              r.titleColor && (l.strong.style.color = r.titleColor),
              r.titleSize &&
                (isNaN(r.titleSize)
                  ? (l.strong.style.fontSize = r.titleSize)
                  : (l.strong.style.fontSize = r.titleSize + "px")),
              r.titleLineHeight &&
                (isNaN(r.titleSize)
                  ? (l.strong.style.lineHeight = r.titleLineHeight)
                  : (l.strong.style.lineHeight = r.titleLineHeight + "px"))),
              r.message.length > 0 &&
                ((l.p = document.createElement("p")),
                l.p.classList.add(a + "-message"),
                l.p.appendChild(t(r.message)),
                l.toastTexts.appendChild(l.p),
                r.messageColor && (l.p.style.color = r.messageColor),
                r.messageSize &&
                  (isNaN(r.titleSize)
                    ? (l.p.style.fontSize = r.messageSize)
                    : (l.p.style.fontSize = r.messageSize + "px")),
                r.messageLineHeight &&
                  (isNaN(r.titleSize)
                    ? (l.p.style.lineHeight = r.messageLineHeight)
                    : (l.p.style.lineHeight = r.messageLineHeight + "px"))),
              r.title.length > 0 &&
                r.message.length > 0 &&
                (r.rtl
                  ? (l.strong.style.marginLeft = "10px")
                  : r.layout !== 2 &&
                    !r.rtl &&
                    (l.strong.style.marginRight = "10px"));
          })(),
          l.toastBody.appendChild(l.toastTexts);
        var b;
        (function () {
          r.inputs.length > 0 &&
            (l.inputs.classList.add(a + "-inputs"),
            h(r.inputs, function (y, N) {
              l.inputs.appendChild(t(y[0])),
                (b = l.inputs.childNodes),
                b[N].classList.add(a + "-inputs-child"),
                y[3] &&
                  setTimeout(function () {
                    b[N].focus();
                  }, 300),
                b[N].addEventListener(y[1], function (A) {
                  var P = y[2];
                  return P(u, l.toast, this, A);
                });
            }),
            l.toastBody.appendChild(l.inputs));
        })(),
          (function () {
            r.buttons.length > 0 &&
              (l.buttons.classList.add(a + "-buttons"),
              h(r.buttons, function (y, N) {
                l.buttons.appendChild(t(y[0]));
                var A = l.buttons.childNodes;
                A[N].classList.add(a + "-buttons-child"),
                  y[2] &&
                    setTimeout(function () {
                      A[N].focus();
                    }, 300),
                  A[N].addEventListener("click", function (P) {
                    P.preventDefault();
                    var B = y[1];
                    return B(u, l.toast, this, P, b);
                  });
              })),
              l.toastBody.appendChild(l.buttons);
          })(),
          r.message.length > 0 &&
            (r.inputs.length > 0 || r.buttons.length > 0) &&
            (l.p.style.marginBottom = "0"),
          (r.inputs.length > 0 || r.buttons.length > 0) &&
            (r.rtl
              ? (l.toastTexts.style.marginLeft = "10px")
              : (l.toastTexts.style.marginRight = "10px"),
            r.inputs.length > 0 &&
              r.buttons.length > 0 &&
              (r.rtl
                ? (l.inputs.style.marginLeft = "8px")
                : (l.inputs.style.marginRight = "8px"))),
          (function () {
            (l.toastCapsule.style.visibility = "hidden"),
              setTimeout(function () {
                var y = l.toast.offsetHeight,
                  N = l.toast.currentStyle || window.getComputedStyle(l.toast),
                  A = N.marginTop;
                (A = A.split("px")), (A = parseInt(A[0]));
                var P = N.marginBottom;
                (P = P.split("px")),
                  (P = parseInt(P[0])),
                  (l.toastCapsule.style.visibility = ""),
                  (l.toastCapsule.style.height = y + P + A + "px"),
                  setTimeout(function () {
                    (l.toastCapsule.style.height = "auto"),
                      r.target && (l.toastCapsule.style.overflow = "visible");
                  }, 500),
                  r.timeout && u.progress(r, l.toast).start();
              }, 100);
          })(),
          (function () {
            var y = r.position;
            if (r.target)
              (l.wrapper = document.querySelector(r.target)),
                l.wrapper.classList.add(a + "-target"),
                r.targetFirst
                  ? l.wrapper.insertBefore(l.toastCapsule, l.wrapper.firstChild)
                  : l.wrapper.appendChild(l.toastCapsule);
            else {
              if (T.indexOf(r.position) == -1) {
                console.warn(
                  "[" +
                    a +
                    `] Incorrect position.
It can be › ` +
                    T
                );
                return;
              }
              c || window.innerWidth <= v
                ? r.position == "bottomLeft" ||
                  r.position == "bottomRight" ||
                  r.position == "bottomCenter"
                  ? (y = a + "-wrapper-bottomCenter")
                  : r.position == "topLeft" ||
                    r.position == "topRight" ||
                    r.position == "topCenter"
                  ? (y = a + "-wrapper-topCenter")
                  : (y = a + "-wrapper-center")
                : (y = a + "-wrapper-" + y),
                (l.wrapper = document.querySelector("." + a + "-wrapper." + y)),
                l.wrapper ||
                  ((l.wrapper = document.createElement("div")),
                  l.wrapper.classList.add(a + "-wrapper"),
                  l.wrapper.classList.add(y),
                  document.body.appendChild(l.wrapper)),
                r.position == "topLeft" ||
                r.position == "topCenter" ||
                r.position == "topRight"
                  ? l.wrapper.insertBefore(l.toastCapsule, l.wrapper.firstChild)
                  : l.wrapper.appendChild(l.toastCapsule);
            }
            isNaN(r.zindex)
              ? console.warn("[" + a + "] Invalid zIndex.")
              : (l.wrapper.style.zIndex = r.zindex);
          })(),
          (function () {
            r.overlay &&
              (document.querySelector("." + a + "-overlay.fadeIn") !== null
                ? ((l.overlay = document.querySelector("." + a + "-overlay")),
                  l.overlay.setAttribute(
                    "data-iziToast-ref",
                    l.overlay.getAttribute("data-iziToast-ref") + "," + r.ref
                  ),
                  !isNaN(r.zindex) &&
                    r.zindex !== null &&
                    (l.overlay.style.zIndex = r.zindex - 1))
                : (l.overlay.classList.add(a + "-overlay"),
                  l.overlay.classList.add("fadeIn"),
                  (l.overlay.style.background = r.overlayColor),
                  l.overlay.setAttribute("data-iziToast-ref", r.ref),
                  !isNaN(r.zindex) &&
                    r.zindex !== null &&
                    (l.overlay.style.zIndex = r.zindex - 1),
                  document.querySelector("body").appendChild(l.overlay)),
              r.overlayClose
                ? (l.overlay.removeEventListener("click", {}),
                  l.overlay.addEventListener("click", function (y) {
                    u.hide(r, l.toast, "overlay");
                  }))
                : l.overlay.removeEventListener("click", {}));
          })(),
          (function () {
            if (r.animateInside) {
              l.toast.classList.add(a + "-animateInside");
              var y = [200, 100, 300];
              (r.transitionIn == "bounceInLeft" ||
                r.transitionIn == "bounceInRight") &&
                (y = [400, 200, 400]),
                r.title.length > 0 &&
                  setTimeout(function () {
                    l.strong.classList.add("slideIn");
                  }, y[0]),
                r.message.length > 0 &&
                  setTimeout(function () {
                    l.p.classList.add("slideIn");
                  }, y[1]),
                (r.icon || r.iconUrl) &&
                  setTimeout(function () {
                    l.icon.classList.add("revealIn");
                  }, y[2]);
              var N = 150;
              r.buttons.length > 0 &&
                l.buttons &&
                setTimeout(
                  function () {
                    h(l.buttons.childNodes, function (A, P) {
                      setTimeout(function () {
                        A.classList.add("revealIn");
                      }, N),
                        (N = N + 150);
                    });
                  },
                  r.inputs.length > 0 ? 150 : 0
                ),
                r.inputs.length > 0 &&
                  l.inputs &&
                  ((N = 150),
                  h(l.inputs.childNodes, function (A, P) {
                    setTimeout(function () {
                      A.classList.add("revealIn");
                    }, N),
                      (N = N + 150);
                  }));
            }
          })(),
          r.onOpening.apply(null, [r, l.toast]);
        try {
          var O = new CustomEvent(a + "-opening", {
            detail: r,
            bubbles: !0,
            cancelable: !0,
          });
          document.dispatchEvent(O);
        } catch (y) {
          console.warn(y);
        }
        setTimeout(function () {
          l.toast.classList.remove(a + "-opening"),
            l.toast.classList.add(a + "-opened");
          try {
            var y = new CustomEvent(a + "-opened", {
              detail: r,
              bubbles: !0,
              cancelable: !0,
            });
            document.dispatchEvent(y);
          } catch (N) {
            console.warn(N);
          }
          r.onOpened.apply(null, [r, l.toast]);
        }, 1e3),
          r.drag &&
            (I
              ? (l.toast.addEventListener(
                  "touchstart",
                  function (y) {
                    E.startMoving(this, u, r, y);
                  },
                  !1
                ),
                l.toast.addEventListener(
                  "touchend",
                  function (y) {
                    E.stopMoving(this, y);
                  },
                  !1
                ))
              : (l.toast.addEventListener(
                  "mousedown",
                  function (y) {
                    y.preventDefault(), E.startMoving(this, u, r, y);
                  },
                  !1
                ),
                l.toast.addEventListener(
                  "mouseup",
                  function (y) {
                    y.preventDefault(), E.stopMoving(this, y);
                  },
                  !1
                ))),
          r.closeOnEscape &&
            document.addEventListener("keyup", function (y) {
              (y = y || window.event),
                y.keyCode == 27 && u.hide(r, l.toast, "esc");
            }),
          r.closeOnClick &&
            l.toast.addEventListener("click", function (y) {
              u.hide(r, l.toast, "toast");
            }),
          (u.toast = l.toast);
      }),
      i
    );
  });
})(kt);
var oe = kt.exports;
const bo = Dt(oe);
var Ht = {};
/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.com
	Available for use under the MIT License
	Version 2.14.2
*/ (function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  function o(h) {
    "@babel/helpers - typeof";
    return (
      (o =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (g) {
              return typeof g;
            }
          : function (g) {
              return g &&
                typeof Symbol == "function" &&
                g.constructor === Symbol &&
                g !== Symbol.prototype
                ? "symbol"
                : typeof g;
            }),
      o(h)
    );
  }
  function n(h, g) {
    var t = (typeof Symbol < "u" && h[Symbol.iterator]) || h["@@iterator"];
    if (!t) {
      if (
        Array.isArray(h) ||
        (t = c(h)) ||
        (g && h && typeof h.length == "number")
      ) {
        t && (h = t);
        var s = 0,
          f = function () {};
        return {
          s: f,
          n: function () {
            return s >= h.length ? { done: !0 } : { done: !1, value: h[s++] };
          },
          e: function (r) {
            throw r;
          },
          f,
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var C = !0,
      E = !1,
      p;
    return {
      s: function () {
        t = t.call(h);
      },
      n: function () {
        var r = t.next();
        return (C = r.done), r;
      },
      e: function (r) {
        (E = !0), (p = r);
      },
      f: function () {
        try {
          !C && t.return != null && t.return();
        } finally {
          if (E) throw p;
        }
      },
    };
  }
  function i(h) {
    return w(h) || d(h) || c(h) || a();
  }
  function a() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function c(h, g) {
    if (h) {
      if (typeof h == "string") return I(h, g);
      var t = Object.prototype.toString.call(h).slice(8, -1);
      if (
        (t === "Object" && h.constructor && (t = h.constructor.name),
        t === "Map" || t === "Set")
      )
        return Array.from(h);
      if (
        t === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
      )
        return I(h, g);
    }
  }
  function d(h) {
    if (
      (typeof Symbol < "u" && h[Symbol.iterator] != null) ||
      h["@@iterator"] != null
    )
      return Array.from(h);
  }
  function w(h) {
    if (Array.isArray(h)) return I(h);
  }
  function I(h, g) {
    (g == null || g > h.length) && (g = h.length);
    for (var t = 0, s = new Array(g); t < g; t++) s[t] = h[t];
    return s;
  }
  function T(h, g) {
    if (!(h instanceof g))
      throw new TypeError("Cannot call a class as a function");
  }
  function S(h, g) {
    for (var t = 0; t < g.length; t++) {
      var s = g[t];
      (s.enumerable = s.enumerable || !1),
        (s.configurable = !0),
        "value" in s && (s.writable = !0),
        Object.defineProperty(h, s.key, s);
    }
  }
  function v(h, g, t) {
    return (
      g && S(h.prototype, g),
      t && S(h, t),
      Object.defineProperty(h, "prototype", { writable: !1 }),
      h
    );
  }
  function L(h, g, t) {
    return (
      g in h
        ? Object.defineProperty(h, g, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (h[g] = t),
      h
    );
  }
  var k = (function () {
      function h(g, t) {
        var s = this;
        if (
          (T(this, h),
          L(this, "defaultOptions", {
            sourceAttr: "href",
            overlay: !0,
            overlayOpacity: 0.7,
            spinner: !0,
            nav: !0,
            navText: ["&lsaquo;", "&rsaquo;"],
            captions: !0,
            captionDelay: 0,
            captionSelector: "img",
            captionType: "attr",
            captionsData: "title",
            captionPosition: "bottom",
            captionClass: "",
            captionHTML: !0,
            close: !0,
            closeText: "&times;",
            swipeClose: !0,
            showCounter: !0,
            fileExt: "png|jpg|jpeg|gif|webp",
            animationSlide: !0,
            animationSpeed: 250,
            preloading: !0,
            enableKeyboard: !0,
            loop: !0,
            rel: !1,
            docClose: !0,
            swipeTolerance: 50,
            className: "simple-lightbox",
            widthRatio: 0.8,
            heightRatio: 0.9,
            scaleImageToRatio: !1,
            disableRightClick: !1,
            disableScroll: !0,
            alertError: !0,
            alertErrorMessage: "Image not found, next image will be loaded",
            additionalHtml: !1,
            history: !0,
            throttleInterval: 0,
            doubleTapZoom: 2,
            maxZoom: 10,
            htmlClass: "has-lightbox",
            rtl: !1,
            fixedClass: "sl-fixed",
            fadeSpeed: 300,
            uniqueImages: !0,
            focus: !0,
            scrollZoom: !0,
            scrollZoomFactor: 0.5,
            download: !1,
          }),
          L(this, "transitionPrefix", void 0),
          L(this, "isPassiveEventsSupported", void 0),
          L(this, "transitionCapable", !1),
          L(this, "isTouchDevice", "ontouchstart" in window),
          L(
            this,
            "isAppleDevice",
            /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
          ),
          L(this, "initialLocationHash", void 0),
          L(this, "pushStateSupport", "pushState" in history),
          L(this, "isOpen", !1),
          L(this, "isAnimating", !1),
          L(this, "isClosing", !1),
          L(this, "isFadeIn", !1),
          L(this, "urlChangedOnce", !1),
          L(this, "hashReseted", !1),
          L(this, "historyHasChanges", !1),
          L(this, "historyUpdateTimeout", null),
          L(this, "currentImage", void 0),
          L(this, "eventNamespace", "simplelightbox"),
          L(this, "domNodes", {}),
          L(this, "loadedImages", []),
          L(this, "initialImageIndex", 0),
          L(this, "currentImageIndex", 0),
          L(this, "initialSelector", null),
          L(this, "globalScrollbarWidth", 0),
          L(this, "controlCoordinates", {
            swipeDiff: 0,
            swipeYDiff: 0,
            swipeStart: 0,
            swipeEnd: 0,
            swipeYStart: 0,
            swipeYEnd: 0,
            mousedown: !1,
            imageLeft: 0,
            zoomed: !1,
            containerHeight: 0,
            containerWidth: 0,
            containerOffsetX: 0,
            containerOffsetY: 0,
            imgHeight: 0,
            imgWidth: 0,
            capture: !1,
            initialOffsetX: 0,
            initialOffsetY: 0,
            initialPointerOffsetX: 0,
            initialPointerOffsetY: 0,
            initialPointerOffsetX2: 0,
            initialPointerOffsetY2: 0,
            initialScale: 1,
            initialPinchDistance: 0,
            pointerOffsetX: 0,
            pointerOffsetY: 0,
            pointerOffsetX2: 0,
            pointerOffsetY2: 0,
            targetOffsetX: 0,
            targetOffsetY: 0,
            targetScale: 0,
            pinchOffsetX: 0,
            pinchOffsetY: 0,
            limitOffsetX: 0,
            limitOffsetY: 0,
            scaleDifference: 0,
            targetPinchDistance: 0,
            touchCount: 0,
            doubleTapped: !1,
            touchmoveCount: 0,
          }),
          (this.options = Object.assign(this.defaultOptions, t)),
          (this.isPassiveEventsSupported = this.checkPassiveEventsSupport()),
          typeof g == "string"
            ? ((this.initialSelector = g),
              (this.elements = Array.from(document.querySelectorAll(g))))
            : (this.elements =
                typeof g.length < "u" && g.length > 0 ? Array.from(g) : [g]),
          (this.relatedElements = []),
          (this.transitionPrefix = this.calculateTransitionPrefix()),
          (this.transitionCapable = this.transitionPrefix !== !1),
          (this.initialLocationHash = this.hash),
          this.options.rel &&
            (this.elements = this.getRelated(this.options.rel)),
          this.options.uniqueImages)
        ) {
          var f = [];
          this.elements = Array.from(this.elements).filter(function (C) {
            var E = C.getAttribute(s.options.sourceAttr);
            return f.indexOf(E) === -1 ? (f.push(E), !0) : !1;
          });
        }
        this.createDomNodes(),
          this.options.close &&
            this.domNodes.wrapper.appendChild(this.domNodes.closeButton),
          this.options.nav &&
            this.domNodes.wrapper.appendChild(this.domNodes.navigation),
          this.options.spinner &&
            this.domNodes.wrapper.appendChild(this.domNodes.spinner),
          this.addEventListener(
            this.elements,
            "click." + this.eventNamespace,
            function (C) {
              if (s.isValidLink(C.currentTarget)) {
                if ((C.preventDefault(), s.isAnimating)) return !1;
                (s.initialImageIndex = s.elements.indexOf(C.currentTarget)),
                  s.openImage(C.currentTarget);
              }
            }
          ),
          this.options.docClose &&
            this.addEventListener(
              this.domNodes.wrapper,
              [
                "click." + this.eventNamespace,
                "touchstart." + this.eventNamespace,
              ],
              function (C) {
                s.isOpen && C.target === C.currentTarget && s.close();
              }
            ),
          this.options.disableRightClick &&
            this.addEventListener(
              document.body,
              "contextmenu." + this.eventNamespace,
              function (C) {
                C.target.parentElement.classList.contains("sl-image") &&
                  C.preventDefault();
              }
            ),
          this.options.enableKeyboard &&
            this.addEventListener(
              document.body,
              "keyup." + this.eventNamespace,
              this.throttle(function (C) {
                if (
                  ((s.controlCoordinates.swipeDiff = 0),
                  s.isAnimating && C.key === "Escape")
                ) {
                  s.currentImage.setAttribute("src", ""),
                    (s.isAnimating = !1),
                    s.close();
                  return;
                }
                s.isOpen &&
                  (C.preventDefault(),
                  C.key === "Escape" && s.close(),
                  !s.isAnimating &&
                    ["ArrowLeft", "ArrowRight"].indexOf(C.key) > -1 &&
                    s.loadImage(C.key === "ArrowRight" ? 1 : -1));
              }, this.options.throttleInterval)
            ),
          this.addEvents();
      }
      return (
        v(h, [
          {
            key: "checkPassiveEventsSupport",
            value: function () {
              var t = !1;
              try {
                var s = Object.defineProperty({}, "passive", {
                  get: function () {
                    t = !0;
                  },
                });
                window.addEventListener("testPassive", null, s),
                  window.removeEventListener("testPassive", null, s);
              } catch {}
              return t;
            },
          },
          {
            key: "getCaptionElement",
            value: function (t) {
              if (this.options.captionSelector.startsWith("+")) {
                var s = this.options.captionSelector
                    .replace(/^\+/, "")
                    .trimStart(),
                  f = t.nextElementSibling;
                return f && f.matches(s) ? f : !1;
              } else if (this.options.captionSelector.startsWith(">")) {
                var C = this.options.captionSelector
                  .replace(/^>/, "")
                  .trimStart();
                return t.querySelector(C);
              } else return t.querySelector(this.options.captionSelector);
            },
          },
          {
            key: "generateQuerySelector",
            value: function (t) {
              var s = t.tagName,
                f = t.id,
                C = t.className,
                E = t.parentNode;
              if (s === "HTML") return "HTML";
              var p = s;
              if (((p += f !== "" ? "#".concat(f) : ""), C))
                for (var u = C.trim().split(/\s/), r = 0; r < u.length; r++)
                  p += ".".concat(u[r]);
              for (
                var l = 1, b = t;
                b.previousElementSibling;
                b = b.previousElementSibling
              )
                l += 1;
              return (
                (p += ":nth-child(".concat(l, ")")),
                "".concat(this.generateQuerySelector(E), " > ").concat(p)
              );
            },
          },
          {
            key: "createDomNodes",
            value: function () {
              if (
                ((this.domNodes.overlay = document.createElement("div")),
                this.domNodes.overlay.classList.add("sl-overlay"),
                (this.domNodes.overlay.dataset.opacityTarget =
                  this.options.overlayOpacity),
                (this.domNodes.closeButton = document.createElement("button")),
                this.domNodes.closeButton.classList.add("sl-close"),
                (this.domNodes.closeButton.innerHTML = this.options.closeText),
                (this.domNodes.spinner = document.createElement("div")),
                this.domNodes.spinner.classList.add("sl-spinner"),
                (this.domNodes.spinner.innerHTML = "<div></div>"),
                (this.domNodes.navigation = document.createElement("div")),
                this.domNodes.navigation.classList.add("sl-navigation"),
                (this.domNodes.navigation.innerHTML = '<button class="sl-prev">'
                  .concat(
                    this.options.navText[0],
                    '</button><button class="sl-next">'
                  )
                  .concat(this.options.navText[1], "</button>")),
                (this.domNodes.counter = document.createElement("div")),
                this.domNodes.counter.classList.add("sl-counter"),
                (this.domNodes.counter.innerHTML =
                  '<span class="sl-current"></span>/<span class="sl-total"></span>'),
                (this.domNodes.download = document.createElement("div")),
                this.domNodes.download.classList.add("sl-download"),
                (this.domNodes.downloadLink = document.createElement("a")),
                this.domNodes.downloadLink.setAttribute("download", ""),
                (this.domNodes.downloadLink.textContent =
                  this.options.download),
                this.domNodes.download.appendChild(this.domNodes.downloadLink),
                (this.domNodes.caption = document.createElement("div")),
                this.domNodes.caption.classList.add(
                  "sl-caption",
                  "pos-" + this.options.captionPosition
                ),
                this.options.captionClass)
              ) {
                var t,
                  s = this.options.captionClass.split(/[\s,]+/);
                (t = this.domNodes.caption.classList).add.apply(t, i(s));
              }
              (this.domNodes.image = document.createElement("div")),
                this.domNodes.image.classList.add("sl-image"),
                (this.domNodes.wrapper = document.createElement("div")),
                this.domNodes.wrapper.classList.add("sl-wrapper"),
                this.domNodes.wrapper.setAttribute("tabindex", -1),
                this.domNodes.wrapper.setAttribute("role", "dialog"),
                this.domNodes.wrapper.setAttribute("aria-hidden", !1),
                this.options.className &&
                  this.domNodes.wrapper.classList.add(this.options.className),
                this.options.rtl &&
                  this.domNodes.wrapper.classList.add("sl-dir-rtl");
            },
          },
          {
            key: "throttle",
            value: function (t, s) {
              var f;
              return function () {
                f ||
                  (t.apply(this, arguments),
                  (f = !0),
                  setTimeout(function () {
                    return (f = !1);
                  }, s));
              };
            },
          },
          {
            key: "isValidLink",
            value: function (t) {
              return (
                !this.options.fileExt ||
                (t.getAttribute(this.options.sourceAttr) &&
                  new RegExp(
                    "(" + this.options.fileExt + ")($|\\?.*$)",
                    "i"
                  ).test(t.getAttribute(this.options.sourceAttr)))
              );
            },
          },
          {
            key: "calculateTransitionPrefix",
            value: function () {
              var t = (document.body || document.documentElement).style;
              return "transition" in t
                ? ""
                : "WebkitTransition" in t
                ? "-webkit-"
                : "MozTransition" in t
                ? "-moz-"
                : "OTransition" in t
                ? "-o"
                : !1;
            },
          },
          {
            key: "getScrollbarWidth",
            value: function () {
              var t = 0,
                s = document.createElement("div");
              return (
                s.classList.add("sl-scrollbar-measure"),
                document.body.appendChild(s),
                (t = s.offsetWidth - s.clientWidth),
                document.body.removeChild(s),
                t
              );
            },
          },
          {
            key: "toggleScrollbar",
            value: function (t) {
              var s = 0,
                f = [].slice.call(
                  document.querySelectorAll("." + this.options.fixedClass)
                );
              if (t === "hide") {
                var C = window.innerWidth;
                if (!C) {
                  var E = document.documentElement.getBoundingClientRect();
                  C = E.right - Math.abs(E.left);
                }
                if (document.body.clientWidth < C || this.isAppleDevice) {
                  var p = parseInt(
                    window.getComputedStyle(document.body).paddingRight || 0,
                    10
                  );
                  (s = this.getScrollbarWidth()),
                    (document.body.dataset.originalPaddingRight = p),
                    (s > 0 || (s == 0 && this.isAppleDevice)) &&
                      (document.body.classList.add("hidden-scroll"),
                      (document.body.style.paddingRight = p + s + "px"),
                      f.forEach(function (u) {
                        var r = u.style.paddingRight,
                          l = window.getComputedStyle(u)["padding-right"];
                        (u.dataset.originalPaddingRight = r),
                          (u.style.paddingRight = "".concat(
                            parseFloat(l) + s,
                            "px"
                          ));
                      }));
                }
              } else
                document.body.classList.remove("hidden-scroll"),
                  (document.body.style.paddingRight =
                    document.body.dataset.originalPaddingRight + "px"),
                  f.forEach(function (u) {
                    var r = u.dataset.originalPaddingRight;
                    typeof r < "u" && (u.style.paddingRight = r);
                  });
              return s;
            },
          },
          {
            key: "close",
            value: function () {
              var t = this;
              if (!this.isOpen || this.isAnimating || this.isClosing) return !1;
              this.isClosing = !0;
              var s = this.relatedElements[this.currentImageIndex];
              s.dispatchEvent(new Event("close.simplelightbox")),
                this.options.history &&
                  ((this.historyHasChanges = !1),
                  this.hashReseted || this.resetHash()),
                this.removeEventListener(
                  document,
                  "focusin." + this.eventNamespace
                ),
                this.fadeOut(this.domNodes.overlay, this.options.fadeSpeed),
                this.fadeOut(
                  document.querySelectorAll(
                    ".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"
                  ),
                  this.options.fadeSpeed,
                  function () {
                    t.options.disableScroll && t.toggleScrollbar("show"),
                      t.options.htmlClass &&
                        t.options.htmlClass !== "" &&
                        document
                          .querySelector("html")
                          .classList.remove(t.options.htmlClass),
                      document.body.removeChild(t.domNodes.wrapper),
                      t.options.overlay &&
                        document.body.removeChild(t.domNodes.overlay),
                      (t.domNodes.additionalHtml = null),
                      (t.domNodes.download = null),
                      s.dispatchEvent(new Event("closed.simplelightbox")),
                      (t.isClosing = !1);
                  }
                ),
                (this.currentImage = null),
                (this.isOpen = !1),
                (this.isAnimating = !1);
              for (var f in this.controlCoordinates)
                this.controlCoordinates[f] = 0;
              (this.controlCoordinates.mousedown = !1),
                (this.controlCoordinates.zoomed = !1),
                (this.controlCoordinates.capture = !1),
                (this.controlCoordinates.initialScale = this.minMax(
                  1,
                  1,
                  this.options.maxZoom
                )),
                (this.controlCoordinates.doubleTapped = !1);
            },
          },
          {
            key: "hash",
            get: function () {
              return window.location.hash.substring(1);
            },
          },
          {
            key: "preload",
            value: function () {
              var t = this,
                s = this.currentImageIndex,
                f = this.relatedElements.length,
                C = s + 1 < 0 ? f - 1 : s + 1 >= f - 1 ? 0 : s + 1,
                E = s - 1 < 0 ? f - 1 : s - 1 >= f - 1 ? 0 : s - 1,
                p = new Image(),
                u = new Image();
              p.addEventListener("load", function (r) {
                var l = r.target.getAttribute("src");
                t.loadedImages.indexOf(l) === -1 && t.loadedImages.push(l),
                  t.relatedElements[s].dispatchEvent(
                    new Event("nextImageLoaded." + t.eventNamespace)
                  );
              }),
                p.setAttribute(
                  "src",
                  this.relatedElements[C].getAttribute(this.options.sourceAttr)
                ),
                u.addEventListener("load", function (r) {
                  var l = r.target.getAttribute("src");
                  t.loadedImages.indexOf(l) === -1 && t.loadedImages.push(l),
                    t.relatedElements[s].dispatchEvent(
                      new Event("prevImageLoaded." + t.eventNamespace)
                    );
                }),
                u.setAttribute(
                  "src",
                  this.relatedElements[E].getAttribute(this.options.sourceAttr)
                );
            },
          },
          {
            key: "loadImage",
            value: function (t) {
              var s = this,
                f = t;
              this.options.rtl && (t = -t),
                this.relatedElements[this.currentImageIndex].dispatchEvent(
                  new Event("change." + this.eventNamespace)
                ),
                this.relatedElements[this.currentImageIndex].dispatchEvent(
                  new Event(
                    (t === 1 ? "next" : "prev") + "." + this.eventNamespace
                  )
                );
              var C = this.currentImageIndex + t;
              if (
                this.isAnimating ||
                ((C < 0 || C >= this.relatedElements.length) &&
                  this.options.loop === !1)
              )
                return !1;
              (this.currentImageIndex =
                C < 0
                  ? this.relatedElements.length - 1
                  : C > this.relatedElements.length - 1
                  ? 0
                  : C),
                (this.domNodes.counter.querySelector(".sl-current").innerHTML =
                  this.currentImageIndex + 1),
                this.options.animationSlide &&
                  this.slide(
                    this.options.animationSpeed / 1e3,
                    -100 * f - this.controlCoordinates.swipeDiff + "px"
                  ),
                this.fadeOut(
                  this.domNodes.image,
                  this.options.fadeSpeed,
                  function () {
                    (s.isAnimating = !0),
                      s.isClosing
                        ? (s.isAnimating = !1)
                        : setTimeout(function () {
                            var E = s.relatedElements[s.currentImageIndex];
                            s.currentImage &&
                              (s.currentImage.setAttribute(
                                "src",
                                E.getAttribute(s.options.sourceAttr)
                              ),
                              s.loadedImages.indexOf(
                                E.getAttribute(s.options.sourceAttr)
                              ) === -1 && s.show(s.domNodes.spinner),
                              s.domNodes.image.contains(s.domNodes.caption) &&
                                s.domNodes.image.removeChild(
                                  s.domNodes.caption
                                ),
                              s.adjustImage(f),
                              s.options.preloading && s.preload());
                          }, 100);
                  }
                );
            },
          },
          {
            key: "adjustImage",
            value: function (t) {
              var s = this;
              if (!this.currentImage) return !1;
              var f = new Image(),
                C = window.innerWidth * this.options.widthRatio,
                E = window.innerHeight * this.options.heightRatio;
              f.setAttribute("src", this.currentImage.getAttribute("src")),
                (this.currentImage.dataset.scale = 1),
                (this.currentImage.dataset.translateX = 0),
                (this.currentImage.dataset.translateY = 0),
                this.zoomPanElement(0, 0, 1),
                f.addEventListener("error", function (p) {
                  s.relatedElements[s.currentImageIndex].dispatchEvent(
                    new Event("error." + s.eventNamespace)
                  ),
                    (s.isAnimating = !1),
                    (s.isOpen = !0),
                    (s.domNodes.spinner.style.display = "none");
                  var u = t === 1 || t === -1;
                  if (s.initialImageIndex === s.currentImageIndex && u)
                    return s.close();
                  s.options.alertError && alert(s.options.alertErrorMessage),
                    s.loadImage(u ? t : 1);
                }),
                f.addEventListener("load", function (p) {
                  typeof t < "u" &&
                    (s.relatedElements[s.currentImageIndex].dispatchEvent(
                      new Event("changed." + s.eventNamespace)
                    ),
                    s.relatedElements[s.currentImageIndex].dispatchEvent(
                      new Event(
                        (t === 1 ? "nextDone" : "prevDone") +
                          "." +
                          s.eventNamespace
                      )
                    )),
                    s.options.history && s.updateURL(),
                    s.loadedImages.indexOf(
                      s.currentImage.getAttribute("src")
                    ) === -1 &&
                      s.loadedImages.push(s.currentImage.getAttribute("src"));
                  var u = p.target.width,
                    r = p.target.height;
                  if (s.options.scaleImageToRatio || u > C || r > E) {
                    var l = u / r > C / E ? u / C : r / E;
                    (u /= l), (r /= l);
                  }
                  (s.domNodes.image.style.top =
                    (window.innerHeight - r) / 2 + "px"),
                    (s.domNodes.image.style.left =
                      (window.innerWidth - u - s.globalScrollbarWidth) / 2 +
                      "px"),
                    (s.domNodes.image.style.width = u + "px"),
                    (s.domNodes.image.style.height = r + "px"),
                    (s.domNodes.spinner.style.display = "none"),
                    s.options.focus && s.forceFocus(),
                    s.fadeIn(s.currentImage, s.options.fadeSpeed, function () {
                      s.options.focus && s.domNodes.wrapper.focus();
                    }),
                    (s.isOpen = !0);
                  var b, O;
                  typeof s.options.captionSelector == "string"
                    ? (b =
                        s.options.captionSelector === "self"
                          ? s.relatedElements[s.currentImageIndex]
                          : s.getCaptionElement(
                              s.relatedElements[s.currentImageIndex]
                            ))
                    : typeof s.options.captionSelector == "function" &&
                      (b = s.options.captionSelector(
                        s.relatedElements[s.currentImageIndex]
                      )),
                    s.options.captions &&
                      b &&
                      (s.options.captionType === "data"
                        ? (O = b.dataset[s.options.captionsData])
                        : s.options.captionType === "text"
                        ? (O = b.innerHTML)
                        : (O = b.getAttribute(s.options.captionsData))),
                    s.options.loop
                      ? s.relatedElements.length === 1
                        ? s.hide(
                            s.domNodes.navigation.querySelectorAll(
                              ".sl-prev, .sl-next"
                            )
                          )
                        : s.show(
                            s.domNodes.navigation.querySelectorAll(
                              ".sl-prev, .sl-next"
                            )
                          )
                      : (s.currentImageIndex === 0 &&
                          s.hide(
                            s.domNodes.navigation.querySelector(".sl-prev")
                          ),
                        s.currentImageIndex >= s.relatedElements.length - 1 &&
                          s.hide(
                            s.domNodes.navigation.querySelector(".sl-next")
                          ),
                        s.currentImageIndex > 0 &&
                          s.show(
                            s.domNodes.navigation.querySelector(".sl-prev")
                          ),
                        s.currentImageIndex < s.relatedElements.length - 1 &&
                          s.show(
                            s.domNodes.navigation.querySelector(".sl-next")
                          )),
                    t === 1 || t === -1
                      ? (s.options.animationSlide &&
                          (s.slide(0, 100 * t + "px"),
                          setTimeout(function () {
                            s.slide(s.options.animationSpeed / 1e3, "0px");
                          }, 50)),
                        s.fadeIn(
                          s.domNodes.image,
                          s.options.fadeSpeed,
                          function () {
                            (s.isAnimating = !1), s.setCaption(O, u);
                          }
                        ))
                      : ((s.isAnimating = !1), s.setCaption(O, u)),
                    s.options.additionalHtml &&
                      !s.domNodes.additionalHtml &&
                      ((s.domNodes.additionalHtml =
                        document.createElement("div")),
                      s.domNodes.additionalHtml.classList.add(
                        "sl-additional-html"
                      ),
                      (s.domNodes.additionalHtml.innerHTML =
                        s.options.additionalHtml),
                      s.domNodes.image.appendChild(s.domNodes.additionalHtml)),
                    s.options.download &&
                      s.domNodes.downloadLink.setAttribute(
                        "href",
                        s.currentImage.getAttribute("src")
                      );
                });
            },
          },
          {
            key: "zoomPanElement",
            value: function (t, s, f) {
              this.currentImage.style[this.transitionPrefix + "transform"] =
                "translate(" + t + "," + s + ") scale(" + f + ")";
            },
          },
          {
            key: "minMax",
            value: function (t, s, f) {
              return t < s ? s : t > f ? f : t;
            },
          },
          {
            key: "setZoomData",
            value: function (t, s, f) {
              (this.currentImage.dataset.scale = t),
                (this.currentImage.dataset.translateX = s),
                (this.currentImage.dataset.translateY = f);
            },
          },
          {
            key: "hashchangeHandler",
            value: function () {
              this.isOpen &&
                this.hash === this.initialLocationHash &&
                ((this.hashReseted = !0), this.close());
            },
          },
          {
            key: "addEvents",
            value: function () {
              var t = this;
              if (
                (this.addEventListener(
                  window,
                  "resize." + this.eventNamespace,
                  function (f) {
                    t.isOpen && t.adjustImage();
                  }
                ),
                this.addEventListener(
                  this.domNodes.closeButton,
                  [
                    "click." + this.eventNamespace,
                    "touchstart." + this.eventNamespace,
                  ],
                  this.close.bind(this)
                ),
                this.options.history &&
                  setTimeout(function () {
                    t.addEventListener(
                      window,
                      "hashchange." + t.eventNamespace,
                      function (f) {
                        t.isOpen && t.hashchangeHandler();
                      }
                    );
                  }, 40),
                this.addEventListener(
                  this.domNodes.navigation.getElementsByTagName("button"),
                  "click." + this.eventNamespace,
                  function (f) {
                    if (!f.currentTarget.tagName.match(/button/i)) return !0;
                    f.preventDefault(),
                      (t.controlCoordinates.swipeDiff = 0),
                      t.loadImage(
                        f.currentTarget.classList.contains("sl-next") ? 1 : -1
                      );
                  }
                ),
                this.options.scrollZoom)
              ) {
                var s = 1;
                this.addEventListener(
                  this.domNodes.image,
                  ["mousewheel", "DOMMouseScroll"],
                  function (f) {
                    if (
                      t.controlCoordinates.mousedown ||
                      t.isAnimating ||
                      t.isClosing ||
                      !t.isOpen
                    )
                      return !0;
                    t.controlCoordinates.containerHeight == 0 &&
                      ((t.controlCoordinates.containerHeight = t.getDimensions(
                        t.domNodes.image
                      ).height),
                      (t.controlCoordinates.containerWidth = t.getDimensions(
                        t.domNodes.image
                      ).width),
                      (t.controlCoordinates.imgHeight = t.getDimensions(
                        t.currentImage
                      ).height),
                      (t.controlCoordinates.imgWidth = t.getDimensions(
                        t.currentImage
                      ).width),
                      (t.controlCoordinates.containerOffsetX =
                        t.domNodes.image.offsetLeft),
                      (t.controlCoordinates.containerOffsetY =
                        t.domNodes.image.offsetTop),
                      (t.controlCoordinates.initialOffsetX = parseFloat(
                        t.currentImage.dataset.translateX
                      )),
                      (t.controlCoordinates.initialOffsetY = parseFloat(
                        t.currentImage.dataset.translateY
                      )));
                    var C = f.delta || f.wheelDelta;
                    C === void 0 && (C = f.detail),
                      (C = Math.max(-1, Math.min(1, C))),
                      (s += C * t.options.scrollZoomFactor * s),
                      (s = Math.max(1, Math.min(t.options.maxZoom, s))),
                      (t.controlCoordinates.targetScale = s);
                    var E =
                      document.documentElement.scrollTop ||
                      document.body.scrollTop;
                    (t.controlCoordinates.pinchOffsetX = f.pageX),
                      (t.controlCoordinates.pinchOffsetY = f.pageY - E || 0),
                      (t.controlCoordinates.limitOffsetX =
                        (t.controlCoordinates.imgWidth *
                          t.controlCoordinates.targetScale -
                          t.controlCoordinates.containerWidth) /
                        2),
                      (t.controlCoordinates.limitOffsetY =
                        (t.controlCoordinates.imgHeight *
                          t.controlCoordinates.targetScale -
                          t.controlCoordinates.containerHeight) /
                        2),
                      (t.controlCoordinates.scaleDifference =
                        t.controlCoordinates.targetScale -
                        t.controlCoordinates.initialScale),
                      (t.controlCoordinates.targetOffsetX =
                        t.controlCoordinates.imgWidth *
                          t.controlCoordinates.targetScale <=
                        t.controlCoordinates.containerWidth
                          ? 0
                          : t.minMax(
                              t.controlCoordinates.initialOffsetX -
                                ((t.controlCoordinates.pinchOffsetX -
                                  t.controlCoordinates.containerOffsetX -
                                  t.controlCoordinates.containerWidth / 2 -
                                  t.controlCoordinates.initialOffsetX) /
                                  (t.controlCoordinates.targetScale -
                                    t.controlCoordinates.scaleDifference)) *
                                  t.controlCoordinates.scaleDifference,
                              t.controlCoordinates.limitOffsetX * -1,
                              t.controlCoordinates.limitOffsetX
                            )),
                      (t.controlCoordinates.targetOffsetY =
                        t.controlCoordinates.imgHeight *
                          t.controlCoordinates.targetScale <=
                        t.controlCoordinates.containerHeight
                          ? 0
                          : t.minMax(
                              t.controlCoordinates.initialOffsetY -
                                ((t.controlCoordinates.pinchOffsetY -
                                  t.controlCoordinates.containerOffsetY -
                                  t.controlCoordinates.containerHeight / 2 -
                                  t.controlCoordinates.initialOffsetY) /
                                  (t.controlCoordinates.targetScale -
                                    t.controlCoordinates.scaleDifference)) *
                                  t.controlCoordinates.scaleDifference,
                              t.controlCoordinates.limitOffsetY * -1,
                              t.controlCoordinates.limitOffsetY
                            )),
                      t.zoomPanElement(
                        t.controlCoordinates.targetOffsetX + "px",
                        t.controlCoordinates.targetOffsetY + "px",
                        t.controlCoordinates.targetScale
                      ),
                      t.controlCoordinates.targetScale > 1
                        ? ((t.controlCoordinates.zoomed = !0),
                          (!t.domNodes.caption.style.opacity ||
                            t.domNodes.caption.style.opacity > 0) &&
                            t.domNodes.caption.style.display !== "none" &&
                            t.fadeOut(t.domNodes.caption, t.options.fadeSpeed))
                        : (t.controlCoordinates.initialScale === 1 &&
                            ((t.controlCoordinates.zoomed = !1),
                            t.domNodes.caption.style.display === "none" &&
                              t.fadeIn(
                                t.domNodes.caption,
                                t.options.fadeSpeed
                              )),
                          (t.controlCoordinates.initialPinchDistance = null),
                          (t.controlCoordinates.capture = !1)),
                      (t.controlCoordinates.initialPinchDistance =
                        t.controlCoordinates.targetPinchDistance),
                      (t.controlCoordinates.initialScale =
                        t.controlCoordinates.targetScale),
                      (t.controlCoordinates.initialOffsetX =
                        t.controlCoordinates.targetOffsetX),
                      (t.controlCoordinates.initialOffsetY =
                        t.controlCoordinates.targetOffsetY),
                      t.setZoomData(
                        t.controlCoordinates.targetScale,
                        t.controlCoordinates.targetOffsetX,
                        t.controlCoordinates.targetOffsetY
                      ),
                      t.zoomPanElement(
                        t.controlCoordinates.targetOffsetX + "px",
                        t.controlCoordinates.targetOffsetY + "px",
                        t.controlCoordinates.targetScale
                      );
                  }
                );
              }
              this.addEventListener(
                this.domNodes.image,
                [
                  "touchstart." + this.eventNamespace,
                  "mousedown." + this.eventNamespace,
                ],
                function (f) {
                  if (f.target.tagName === "A" && f.type === "touchstart")
                    return !0;
                  if (f.type === "mousedown")
                    f.preventDefault(),
                      (t.controlCoordinates.initialPointerOffsetX = f.clientX),
                      (t.controlCoordinates.initialPointerOffsetY = f.clientY),
                      (t.controlCoordinates.containerHeight = t.getDimensions(
                        t.domNodes.image
                      ).height),
                      (t.controlCoordinates.containerWidth = t.getDimensions(
                        t.domNodes.image
                      ).width),
                      (t.controlCoordinates.imgHeight = t.getDimensions(
                        t.currentImage
                      ).height),
                      (t.controlCoordinates.imgWidth = t.getDimensions(
                        t.currentImage
                      ).width),
                      (t.controlCoordinates.containerOffsetX =
                        t.domNodes.image.offsetLeft),
                      (t.controlCoordinates.containerOffsetY =
                        t.domNodes.image.offsetTop),
                      (t.controlCoordinates.initialOffsetX = parseFloat(
                        t.currentImage.dataset.translateX
                      )),
                      (t.controlCoordinates.initialOffsetY = parseFloat(
                        t.currentImage.dataset.translateY
                      )),
                      (t.controlCoordinates.capture = !0);
                  else {
                    if (
                      ((t.controlCoordinates.touchCount = f.touches.length),
                      (t.controlCoordinates.initialPointerOffsetX =
                        f.touches[0].clientX),
                      (t.controlCoordinates.initialPointerOffsetY =
                        f.touches[0].clientY),
                      (t.controlCoordinates.containerHeight = t.getDimensions(
                        t.domNodes.image
                      ).height),
                      (t.controlCoordinates.containerWidth = t.getDimensions(
                        t.domNodes.image
                      ).width),
                      (t.controlCoordinates.imgHeight = t.getDimensions(
                        t.currentImage
                      ).height),
                      (t.controlCoordinates.imgWidth = t.getDimensions(
                        t.currentImage
                      ).width),
                      (t.controlCoordinates.containerOffsetX =
                        t.domNodes.image.offsetLeft),
                      (t.controlCoordinates.containerOffsetY =
                        t.domNodes.image.offsetTop),
                      t.controlCoordinates.touchCount === 1)
                    ) {
                      if (!t.controlCoordinates.doubleTapped)
                        (t.controlCoordinates.doubleTapped = !0),
                          setTimeout(function () {
                            t.controlCoordinates.doubleTapped = !1;
                          }, 300);
                      else
                        return (
                          t.currentImage.classList.add("sl-transition"),
                          t.controlCoordinates.zoomed
                            ? ((t.controlCoordinates.initialScale = 1),
                              t.setZoomData(
                                t.controlCoordinates.initialScale,
                                0,
                                0
                              ),
                              t.zoomPanElement(
                                "0px",
                                "0px",
                                t.controlCoordinates.initialScale
                              ),
                              (t.controlCoordinates.zoomed = !1))
                            : ((t.controlCoordinates.initialScale =
                                t.options.doubleTapZoom),
                              t.setZoomData(
                                t.controlCoordinates.initialScale,
                                0,
                                0
                              ),
                              t.zoomPanElement(
                                "0px",
                                "0px",
                                t.controlCoordinates.initialScale
                              ),
                              (!t.domNodes.caption.style.opacity ||
                                t.domNodes.caption.style.opacity > 0) &&
                                t.domNodes.caption.style.display !== "none" &&
                                t.fadeOut(
                                  t.domNodes.caption,
                                  t.options.fadeSpeed
                                ),
                              (t.controlCoordinates.zoomed = !0)),
                          setTimeout(function () {
                            t.currentImage &&
                              t.currentImage.classList.remove("sl-transition");
                          }, 200),
                          !1
                        );
                      (t.controlCoordinates.initialOffsetX = parseFloat(
                        t.currentImage.dataset.translateX
                      )),
                        (t.controlCoordinates.initialOffsetY = parseFloat(
                          t.currentImage.dataset.translateY
                        ));
                    } else
                      t.controlCoordinates.touchCount === 2 &&
                        ((t.controlCoordinates.initialPointerOffsetX2 =
                          f.touches[1].clientX),
                        (t.controlCoordinates.initialPointerOffsetY2 =
                          f.touches[1].clientY),
                        (t.controlCoordinates.initialOffsetX = parseFloat(
                          t.currentImage.dataset.translateX
                        )),
                        (t.controlCoordinates.initialOffsetY = parseFloat(
                          t.currentImage.dataset.translateY
                        )),
                        (t.controlCoordinates.pinchOffsetX =
                          (t.controlCoordinates.initialPointerOffsetX +
                            t.controlCoordinates.initialPointerOffsetX2) /
                          2),
                        (t.controlCoordinates.pinchOffsetY =
                          (t.controlCoordinates.initialPointerOffsetY +
                            t.controlCoordinates.initialPointerOffsetY2) /
                          2),
                        (t.controlCoordinates.initialPinchDistance = Math.sqrt(
                          (t.controlCoordinates.initialPointerOffsetX -
                            t.controlCoordinates.initialPointerOffsetX2) *
                            (t.controlCoordinates.initialPointerOffsetX -
                              t.controlCoordinates.initialPointerOffsetX2) +
                            (t.controlCoordinates.initialPointerOffsetY -
                              t.controlCoordinates.initialPointerOffsetY2) *
                              (t.controlCoordinates.initialPointerOffsetY -
                                t.controlCoordinates.initialPointerOffsetY2)
                        )));
                    t.controlCoordinates.capture = !0;
                  }
                  return t.controlCoordinates.mousedown
                    ? !0
                    : (t.transitionCapable &&
                        (t.controlCoordinates.imageLeft = parseInt(
                          t.domNodes.image.style.left,
                          10
                        )),
                      (t.controlCoordinates.mousedown = !0),
                      (t.controlCoordinates.swipeDiff = 0),
                      (t.controlCoordinates.swipeYDiff = 0),
                      (t.controlCoordinates.swipeStart =
                        f.pageX || f.touches[0].pageX),
                      (t.controlCoordinates.swipeYStart =
                        f.pageY || f.touches[0].pageY),
                      !1);
                }
              ),
                this.addEventListener(
                  this.domNodes.image,
                  [
                    "touchmove." + this.eventNamespace,
                    "mousemove." + this.eventNamespace,
                    "MSPointerMove",
                  ],
                  function (f) {
                    if (!t.controlCoordinates.mousedown) return !0;
                    if (f.type === "touchmove") {
                      if (t.controlCoordinates.capture === !1) return !1;
                      (t.controlCoordinates.pointerOffsetX =
                        f.touches[0].clientX),
                        (t.controlCoordinates.pointerOffsetY =
                          f.touches[0].clientY),
                        (t.controlCoordinates.touchCount = f.touches.length),
                        t.controlCoordinates.touchmoveCount++,
                        t.controlCoordinates.touchCount > 1
                          ? ((t.controlCoordinates.pointerOffsetX2 =
                              f.touches[1].clientX),
                            (t.controlCoordinates.pointerOffsetY2 =
                              f.touches[1].clientY),
                            (t.controlCoordinates.targetPinchDistance =
                              Math.sqrt(
                                (t.controlCoordinates.pointerOffsetX -
                                  t.controlCoordinates.pointerOffsetX2) *
                                  (t.controlCoordinates.pointerOffsetX -
                                    t.controlCoordinates.pointerOffsetX2) +
                                  (t.controlCoordinates.pointerOffsetY -
                                    t.controlCoordinates.pointerOffsetY2) *
                                    (t.controlCoordinates.pointerOffsetY -
                                      t.controlCoordinates.pointerOffsetY2)
                              )),
                            t.controlCoordinates.initialPinchDistance ===
                              null &&
                              (t.controlCoordinates.initialPinchDistance =
                                t.controlCoordinates.targetPinchDistance),
                            Math.abs(
                              t.controlCoordinates.initialPinchDistance -
                                t.controlCoordinates.targetPinchDistance
                            ) >= 1 &&
                              ((t.controlCoordinates.targetScale = t.minMax(
                                (t.controlCoordinates.targetPinchDistance /
                                  t.controlCoordinates.initialPinchDistance) *
                                  t.controlCoordinates.initialScale,
                                1,
                                t.options.maxZoom
                              )),
                              (t.controlCoordinates.limitOffsetX =
                                (t.controlCoordinates.imgWidth *
                                  t.controlCoordinates.targetScale -
                                  t.controlCoordinates.containerWidth) /
                                2),
                              (t.controlCoordinates.limitOffsetY =
                                (t.controlCoordinates.imgHeight *
                                  t.controlCoordinates.targetScale -
                                  t.controlCoordinates.containerHeight) /
                                2),
                              (t.controlCoordinates.scaleDifference =
                                t.controlCoordinates.targetScale -
                                t.controlCoordinates.initialScale),
                              (t.controlCoordinates.targetOffsetX =
                                t.controlCoordinates.imgWidth *
                                  t.controlCoordinates.targetScale <=
                                t.controlCoordinates.containerWidth
                                  ? 0
                                  : t.minMax(
                                      t.controlCoordinates.initialOffsetX -
                                        ((t.controlCoordinates.pinchOffsetX -
                                          t.controlCoordinates
                                            .containerOffsetX -
                                          t.controlCoordinates.containerWidth /
                                            2 -
                                          t.controlCoordinates.initialOffsetX) /
                                          (t.controlCoordinates.targetScale -
                                            t.controlCoordinates
                                              .scaleDifference)) *
                                          t.controlCoordinates.scaleDifference,
                                      t.controlCoordinates.limitOffsetX * -1,
                                      t.controlCoordinates.limitOffsetX
                                    )),
                              (t.controlCoordinates.targetOffsetY =
                                t.controlCoordinates.imgHeight *
                                  t.controlCoordinates.targetScale <=
                                t.controlCoordinates.containerHeight
                                  ? 0
                                  : t.minMax(
                                      t.controlCoordinates.initialOffsetY -
                                        ((t.controlCoordinates.pinchOffsetY -
                                          t.controlCoordinates
                                            .containerOffsetY -
                                          t.controlCoordinates.containerHeight /
                                            2 -
                                          t.controlCoordinates.initialOffsetY) /
                                          (t.controlCoordinates.targetScale -
                                            t.controlCoordinates
                                              .scaleDifference)) *
                                          t.controlCoordinates.scaleDifference,
                                      t.controlCoordinates.limitOffsetY * -1,
                                      t.controlCoordinates.limitOffsetY
                                    )),
                              t.zoomPanElement(
                                t.controlCoordinates.targetOffsetX + "px",
                                t.controlCoordinates.targetOffsetY + "px",
                                t.controlCoordinates.targetScale
                              ),
                              t.controlCoordinates.targetScale > 1 &&
                                ((t.controlCoordinates.zoomed = !0),
                                (!t.domNodes.caption.style.opacity ||
                                  t.domNodes.caption.style.opacity > 0) &&
                                  t.domNodes.caption.style.display !== "none" &&
                                  t.fadeOut(
                                    t.domNodes.caption,
                                    t.options.fadeSpeed
                                  )),
                              (t.controlCoordinates.initialPinchDistance =
                                t.controlCoordinates.targetPinchDistance),
                              (t.controlCoordinates.initialScale =
                                t.controlCoordinates.targetScale),
                              (t.controlCoordinates.initialOffsetX =
                                t.controlCoordinates.targetOffsetX),
                              (t.controlCoordinates.initialOffsetY =
                                t.controlCoordinates.targetOffsetY)))
                          : ((t.controlCoordinates.targetScale =
                              t.controlCoordinates.initialScale),
                            (t.controlCoordinates.limitOffsetX =
                              (t.controlCoordinates.imgWidth *
                                t.controlCoordinates.targetScale -
                                t.controlCoordinates.containerWidth) /
                              2),
                            (t.controlCoordinates.limitOffsetY =
                              (t.controlCoordinates.imgHeight *
                                t.controlCoordinates.targetScale -
                                t.controlCoordinates.containerHeight) /
                              2),
                            (t.controlCoordinates.targetOffsetX =
                              t.controlCoordinates.imgWidth *
                                t.controlCoordinates.targetScale <=
                              t.controlCoordinates.containerWidth
                                ? 0
                                : t.minMax(
                                    t.controlCoordinates.pointerOffsetX -
                                      (t.controlCoordinates
                                        .initialPointerOffsetX -
                                        t.controlCoordinates.initialOffsetX),
                                    t.controlCoordinates.limitOffsetX * -1,
                                    t.controlCoordinates.limitOffsetX
                                  )),
                            (t.controlCoordinates.targetOffsetY =
                              t.controlCoordinates.imgHeight *
                                t.controlCoordinates.targetScale <=
                              t.controlCoordinates.containerHeight
                                ? 0
                                : t.minMax(
                                    t.controlCoordinates.pointerOffsetY -
                                      (t.controlCoordinates
                                        .initialPointerOffsetY -
                                        t.controlCoordinates.initialOffsetY),
                                    t.controlCoordinates.limitOffsetY * -1,
                                    t.controlCoordinates.limitOffsetY
                                  )),
                            Math.abs(t.controlCoordinates.targetOffsetX) ===
                              Math.abs(t.controlCoordinates.limitOffsetX) &&
                              ((t.controlCoordinates.initialOffsetX =
                                t.controlCoordinates.targetOffsetX),
                              (t.controlCoordinates.initialPointerOffsetX =
                                t.controlCoordinates.pointerOffsetX)),
                            Math.abs(t.controlCoordinates.targetOffsetY) ===
                              Math.abs(t.controlCoordinates.limitOffsetY) &&
                              ((t.controlCoordinates.initialOffsetY =
                                t.controlCoordinates.targetOffsetY),
                              (t.controlCoordinates.initialPointerOffsetY =
                                t.controlCoordinates.pointerOffsetY)),
                            t.setZoomData(
                              t.controlCoordinates.initialScale,
                              t.controlCoordinates.targetOffsetX,
                              t.controlCoordinates.targetOffsetY
                            ),
                            t.zoomPanElement(
                              t.controlCoordinates.targetOffsetX + "px",
                              t.controlCoordinates.targetOffsetY + "px",
                              t.controlCoordinates.targetScale
                            ));
                    }
                    if (
                      f.type === "mousemove" &&
                      t.controlCoordinates.mousedown
                    ) {
                      if (f.type == "touchmove") return !0;
                      if (
                        (f.preventDefault(),
                        t.controlCoordinates.capture === !1)
                      )
                        return !1;
                      (t.controlCoordinates.pointerOffsetX = f.clientX),
                        (t.controlCoordinates.pointerOffsetY = f.clientY),
                        (t.controlCoordinates.targetScale =
                          t.controlCoordinates.initialScale),
                        (t.controlCoordinates.limitOffsetX =
                          (t.controlCoordinates.imgWidth *
                            t.controlCoordinates.targetScale -
                            t.controlCoordinates.containerWidth) /
                          2),
                        (t.controlCoordinates.limitOffsetY =
                          (t.controlCoordinates.imgHeight *
                            t.controlCoordinates.targetScale -
                            t.controlCoordinates.containerHeight) /
                          2),
                        (t.controlCoordinates.targetOffsetX =
                          t.controlCoordinates.imgWidth *
                            t.controlCoordinates.targetScale <=
                          t.controlCoordinates.containerWidth
                            ? 0
                            : t.minMax(
                                t.controlCoordinates.pointerOffsetX -
                                  (t.controlCoordinates.initialPointerOffsetX -
                                    t.controlCoordinates.initialOffsetX),
                                t.controlCoordinates.limitOffsetX * -1,
                                t.controlCoordinates.limitOffsetX
                              )),
                        (t.controlCoordinates.targetOffsetY =
                          t.controlCoordinates.imgHeight *
                            t.controlCoordinates.targetScale <=
                          t.controlCoordinates.containerHeight
                            ? 0
                            : t.minMax(
                                t.controlCoordinates.pointerOffsetY -
                                  (t.controlCoordinates.initialPointerOffsetY -
                                    t.controlCoordinates.initialOffsetY),
                                t.controlCoordinates.limitOffsetY * -1,
                                t.controlCoordinates.limitOffsetY
                              )),
                        Math.abs(t.controlCoordinates.targetOffsetX) ===
                          Math.abs(t.controlCoordinates.limitOffsetX) &&
                          ((t.controlCoordinates.initialOffsetX =
                            t.controlCoordinates.targetOffsetX),
                          (t.controlCoordinates.initialPointerOffsetX =
                            t.controlCoordinates.pointerOffsetX)),
                        Math.abs(t.controlCoordinates.targetOffsetY) ===
                          Math.abs(t.controlCoordinates.limitOffsetY) &&
                          ((t.controlCoordinates.initialOffsetY =
                            t.controlCoordinates.targetOffsetY),
                          (t.controlCoordinates.initialPointerOffsetY =
                            t.controlCoordinates.pointerOffsetY)),
                        t.setZoomData(
                          t.controlCoordinates.initialScale,
                          t.controlCoordinates.targetOffsetX,
                          t.controlCoordinates.targetOffsetY
                        ),
                        t.zoomPanElement(
                          t.controlCoordinates.targetOffsetX + "px",
                          t.controlCoordinates.targetOffsetY + "px",
                          t.controlCoordinates.targetScale
                        );
                    }
                    t.controlCoordinates.zoomed ||
                      ((t.controlCoordinates.swipeEnd =
                        f.pageX || f.touches[0].pageX),
                      (t.controlCoordinates.swipeYEnd =
                        f.pageY || f.touches[0].pageY),
                      (t.controlCoordinates.swipeDiff =
                        t.controlCoordinates.swipeStart -
                        t.controlCoordinates.swipeEnd),
                      (t.controlCoordinates.swipeYDiff =
                        t.controlCoordinates.swipeYStart -
                        t.controlCoordinates.swipeYEnd),
                      t.options.animationSlide &&
                        t.slide(0, -t.controlCoordinates.swipeDiff + "px"));
                  }
                ),
                this.addEventListener(
                  this.domNodes.image,
                  [
                    "touchend." + this.eventNamespace,
                    "mouseup." + this.eventNamespace,
                    "touchcancel." + this.eventNamespace,
                    "mouseleave." + this.eventNamespace,
                    "pointerup",
                    "pointercancel",
                    "MSPointerUp",
                    "MSPointerCancel",
                  ],
                  function (f) {
                    if (
                      (t.isTouchDevice &&
                        f.type === "touchend" &&
                        ((t.controlCoordinates.touchCount = f.touches.length),
                        t.controlCoordinates.touchCount === 0
                          ? (t.currentImage &&
                              t.setZoomData(
                                t.controlCoordinates.initialScale,
                                t.controlCoordinates.targetOffsetX,
                                t.controlCoordinates.targetOffsetY
                              ),
                            t.controlCoordinates.initialScale === 1 &&
                              ((t.controlCoordinates.zoomed = !1),
                              t.domNodes.caption.style.display === "none" &&
                                t.fadeIn(
                                  t.domNodes.caption,
                                  t.options.fadeSpeed
                                )),
                            (t.controlCoordinates.initialPinchDistance = null),
                            (t.controlCoordinates.capture = !1))
                          : t.controlCoordinates.touchCount === 1
                          ? ((t.controlCoordinates.initialPointerOffsetX =
                              f.touches[0].clientX),
                            (t.controlCoordinates.initialPointerOffsetY =
                              f.touches[0].clientY))
                          : t.controlCoordinates.touchCount > 1 &&
                            (t.controlCoordinates.initialPinchDistance = null)),
                      t.controlCoordinates.mousedown)
                    ) {
                      t.controlCoordinates.mousedown = !1;
                      var C = !0;
                      t.options.loop ||
                        (t.currentImageIndex === 0 &&
                          t.controlCoordinates.swipeDiff < 0 &&
                          (C = !1),
                        t.currentImageIndex >= t.relatedElements.length - 1 &&
                          t.controlCoordinates.swipeDiff > 0 &&
                          (C = !1)),
                        Math.abs(t.controlCoordinates.swipeDiff) >
                          t.options.swipeTolerance && C
                          ? t.loadImage(
                              t.controlCoordinates.swipeDiff > 0 ? 1 : -1
                            )
                          : t.options.animationSlide &&
                            t.slide(t.options.animationSpeed / 1e3, "0px"),
                        t.options.swipeClose &&
                          Math.abs(t.controlCoordinates.swipeYDiff) > 50 &&
                          Math.abs(t.controlCoordinates.swipeDiff) <
                            t.options.swipeTolerance &&
                          t.close();
                    }
                  }
                ),
                this.addEventListener(
                  this.domNodes.image,
                  ["dblclick"],
                  function (f) {
                    if (!t.isTouchDevice)
                      return (
                        (t.controlCoordinates.initialPointerOffsetX =
                          f.clientX),
                        (t.controlCoordinates.initialPointerOffsetY =
                          f.clientY),
                        (t.controlCoordinates.containerHeight = t.getDimensions(
                          t.domNodes.image
                        ).height),
                        (t.controlCoordinates.containerWidth = t.getDimensions(
                          t.domNodes.image
                        ).width),
                        (t.controlCoordinates.imgHeight = t.getDimensions(
                          t.currentImage
                        ).height),
                        (t.controlCoordinates.imgWidth = t.getDimensions(
                          t.currentImage
                        ).width),
                        (t.controlCoordinates.containerOffsetX =
                          t.domNodes.image.offsetLeft),
                        (t.controlCoordinates.containerOffsetY =
                          t.domNodes.image.offsetTop),
                        t.currentImage.classList.add("sl-transition"),
                        t.controlCoordinates.zoomed
                          ? ((t.controlCoordinates.initialScale = 1),
                            t.setZoomData(
                              t.controlCoordinates.initialScale,
                              0,
                              0
                            ),
                            t.zoomPanElement(
                              "0px",
                              "0px",
                              t.controlCoordinates.initialScale
                            ),
                            (t.controlCoordinates.zoomed = !1),
                            t.domNodes.caption.style.display === "none" &&
                              t.fadeIn(t.domNodes.caption, t.options.fadeSpeed))
                          : ((t.controlCoordinates.initialScale =
                              t.options.doubleTapZoom),
                            t.setZoomData(
                              t.controlCoordinates.initialScale,
                              0,
                              0
                            ),
                            t.zoomPanElement(
                              "0px",
                              "0px",
                              t.controlCoordinates.initialScale
                            ),
                            (!t.domNodes.caption.style.opacity ||
                              t.domNodes.caption.style.opacity > 0) &&
                              t.domNodes.caption.style.display !== "none" &&
                              t.fadeOut(
                                t.domNodes.caption,
                                t.options.fadeSpeed
                              ),
                            (t.controlCoordinates.zoomed = !0)),
                        setTimeout(function () {
                          t.currentImage &&
                            (t.currentImage.classList.remove("sl-transition"),
                            (t.currentImage.style[
                              t.transitionPrefix + "transform-origin"
                            ] = null));
                        }, 200),
                        (t.controlCoordinates.capture = !0),
                        !1
                      );
                  }
                );
            },
          },
          {
            key: "getDimensions",
            value: function (t) {
              var s = window.getComputedStyle(t),
                f = t.offsetHeight,
                C = t.offsetWidth,
                E = parseFloat(s.borderTopWidth),
                p = parseFloat(s.borderBottomWidth),
                u = parseFloat(s.paddingTop),
                r = parseFloat(s.paddingBottom),
                l = parseFloat(s.borderLeftWidth),
                b = parseFloat(s.borderRightWidth),
                O = parseFloat(s.paddingLeft),
                y = parseFloat(s.paddingRight);
              return { height: f - p - E - u - r, width: C - l - b - O - y };
            },
          },
          {
            key: "updateHash",
            value: function () {
              var t = "pid=" + (this.currentImageIndex + 1),
                s = window.location.href.split("#")[0] + "#" + t;
              (this.hashReseted = !1),
                this.pushStateSupport
                  ? window.history[
                      this.historyHasChanges ? "replaceState" : "pushState"
                    ]("", document.title, s)
                  : this.historyHasChanges
                  ? window.location.replace(s)
                  : (window.location.hash = t),
                this.historyHasChanges || (this.urlChangedOnce = !0),
                (this.historyHasChanges = !0);
            },
          },
          {
            key: "resetHash",
            value: function () {
              (this.hashReseted = !0),
                this.urlChangedOnce
                  ? history.back()
                  : this.pushStateSupport
                  ? history.pushState(
                      "",
                      document.title,
                      window.location.pathname + window.location.search
                    )
                  : (window.location.hash = ""),
                clearTimeout(this.historyUpdateTimeout);
            },
          },
          {
            key: "updateURL",
            value: function () {
              clearTimeout(this.historyUpdateTimeout),
                this.historyHasChanges
                  ? (this.historyUpdateTimeout = setTimeout(
                      this.updateHash.bind(this),
                      800
                    ))
                  : this.updateHash();
            },
          },
          {
            key: "setCaption",
            value: function (t, s, f) {
              var C = this;
              if (this.options.captions && t && t !== "" && typeof t < "u") {
                var E,
                  p =
                    !(
                      (E = f ?? this.options.captionHTML) !== null &&
                      E !== void 0
                    ) || E
                      ? "innerHTML"
                      : "innerText";
                this.hide(this.domNodes.caption),
                  (this.domNodes.caption.style.width = s + "px"),
                  (this.domNodes.caption[p] = t),
                  this.domNodes.image.appendChild(this.domNodes.caption),
                  setTimeout(function () {
                    C.fadeIn(C.domNodes.caption, C.options.fadeSpeed);
                  }, this.options.captionDelay);
              }
            },
          },
          {
            key: "slide",
            value: function (t, s) {
              if (!this.transitionCapable)
                return (this.domNodes.image.style.left = s);
              (this.domNodes.image.style[this.transitionPrefix + "transform"] =
                "translateX(" + s + ")"),
                (this.domNodes.image.style[
                  this.transitionPrefix + "transition"
                ] = this.transitionPrefix + "transform " + t + "s linear");
            },
          },
          {
            key: "getRelated",
            value: function (t) {
              var s;
              return (
                t && t !== !1 && t !== "nofollow"
                  ? (s = Array.from(this.elements).filter(function (f) {
                      return f.getAttribute("rel") === t;
                    }))
                  : (s = this.elements),
                s
              );
            },
          },
          {
            key: "openImage",
            value: function (t) {
              var s = this;
              t.dispatchEvent(new Event("show." + this.eventNamespace)),
                (this.globalScrollbarWidth = this.getScrollbarWidth()),
                this.options.disableScroll &&
                  (this.toggleScrollbar("hide"),
                  (this.globalScrollbarWidth = 0)),
                this.options.htmlClass &&
                  this.options.htmlClass !== "" &&
                  document
                    .querySelector("html")
                    .classList.add(this.options.htmlClass),
                document.body.appendChild(this.domNodes.wrapper),
                this.domNodes.wrapper.appendChild(this.domNodes.image),
                this.options.overlay &&
                  document.body.appendChild(this.domNodes.overlay),
                (this.relatedElements = this.getRelated(t.rel)),
                this.options.showCounter &&
                  (this.relatedElements.length == 1 &&
                  this.domNodes.wrapper.contains(this.domNodes.counter)
                    ? this.domNodes.wrapper.removeChild(this.domNodes.counter)
                    : this.relatedElements.length > 1 &&
                      !this.domNodes.wrapper.contains(this.domNodes.counter) &&
                      this.domNodes.wrapper.appendChild(this.domNodes.counter)),
                this.options.download &&
                  this.domNodes.download &&
                  this.domNodes.wrapper.appendChild(this.domNodes.download),
                (this.isAnimating = !0),
                (this.currentImageIndex = this.relatedElements.indexOf(t));
              var f = t.getAttribute(this.options.sourceAttr);
              (this.currentImage = document.createElement("img")),
                (this.currentImage.style.display = "none"),
                this.currentImage.setAttribute("src", f),
                (this.currentImage.dataset.scale = 1),
                (this.currentImage.dataset.translateX = 0),
                (this.currentImage.dataset.translateY = 0),
                this.loadedImages.indexOf(f) === -1 &&
                  this.loadedImages.push(f),
                (this.domNodes.image.innerHTML = ""),
                this.domNodes.image.setAttribute("style", ""),
                this.domNodes.image.appendChild(this.currentImage),
                this.fadeIn(this.domNodes.overlay, this.options.fadeSpeed),
                this.fadeIn(
                  [
                    this.domNodes.counter,
                    this.domNodes.navigation,
                    this.domNodes.closeButton,
                    this.domNodes.download,
                  ],
                  this.options.fadeSpeed
                ),
                this.show(this.domNodes.spinner),
                (this.domNodes.counter.querySelector(".sl-current").innerHTML =
                  this.currentImageIndex + 1),
                (this.domNodes.counter.querySelector(".sl-total").innerHTML =
                  this.relatedElements.length),
                this.adjustImage(),
                this.options.preloading && this.preload(),
                setTimeout(function () {
                  t.dispatchEvent(new Event("shown." + s.eventNamespace));
                }, this.options.animationSpeed);
            },
          },
          {
            key: "forceFocus",
            value: function () {
              var t = this;
              this.removeEventListener(
                document,
                "focusin." + this.eventNamespace
              ),
                this.addEventListener(
                  document,
                  "focusin." + this.eventNamespace,
                  function (s) {
                    document !== s.target &&
                      t.domNodes.wrapper !== s.target &&
                      !t.domNodes.wrapper.contains(s.target) &&
                      t.domNodes.wrapper.focus();
                  }
                );
            },
          },
          {
            key: "addEventListener",
            value: function (t, s, f, C) {
              (t = this.wrap(t)), (s = this.wrap(s));
              var E = n(t),
                p;
              try {
                for (E.s(); !(p = E.n()).done; ) {
                  var u = p.value;
                  u.namespaces || (u.namespaces = {});
                  var r = n(s),
                    l;
                  try {
                    for (r.s(); !(l = r.n()).done; ) {
                      var b = l.value,
                        O = C || !1,
                        y =
                          [
                            "touchstart",
                            "touchmove",
                            "mousewheel",
                            "DOMMouseScroll",
                          ].indexOf(b.split(".")[0]) >= 0;
                      y &&
                        this.isPassiveEventsSupported &&
                        (o(O) === "object"
                          ? (O.passive = !0)
                          : (O = { passive: !0 })),
                        (u.namespaces[b] = f),
                        u.addEventListener(b.split(".")[0], f, O);
                    }
                  } catch (N) {
                    r.e(N);
                  } finally {
                    r.f();
                  }
                }
              } catch (N) {
                E.e(N);
              } finally {
                E.f();
              }
            },
          },
          {
            key: "removeEventListener",
            value: function (t, s) {
              (t = this.wrap(t)), (s = this.wrap(s));
              var f = n(t),
                C;
              try {
                for (f.s(); !(C = f.n()).done; ) {
                  var E = C.value,
                    p = n(s),
                    u;
                  try {
                    for (p.s(); !(u = p.n()).done; ) {
                      var r = u.value;
                      E.namespaces &&
                        E.namespaces[r] &&
                        (E.removeEventListener(
                          r.split(".")[0],
                          E.namespaces[r]
                        ),
                        delete E.namespaces[r]);
                    }
                  } catch (l) {
                    p.e(l);
                  } finally {
                    p.f();
                  }
                }
              } catch (l) {
                f.e(l);
              } finally {
                f.f();
              }
            },
          },
          {
            key: "fadeOut",
            value: function (t, s, f) {
              var C = this;
              t = this.wrap(t);
              var E = n(t),
                p;
              try {
                for (E.s(); !(p = E.n()).done; ) {
                  var u = p.value;
                  u.style.opacity =
                    parseFloat(u) ||
                    window.getComputedStyle(u).getPropertyValue("opacity");
                }
              } catch (b) {
                E.e(b);
              } finally {
                E.f();
              }
              this.isFadeIn = !1;
              var r = 16.66666 / (s || this.options.fadeSpeed),
                l = function b() {
                  var O = parseFloat(t[0].style.opacity);
                  if ((O -= r) < 0) {
                    var y = n(t),
                      N;
                    try {
                      for (y.s(); !(N = y.n()).done; ) {
                        var A = N.value;
                        (A.style.display = "none"), (A.style.opacity = 1);
                      }
                    } catch (W) {
                      y.e(W);
                    } finally {
                      y.f();
                    }
                    f && f.call(C, t);
                  } else {
                    var P = n(t),
                      B;
                    try {
                      for (P.s(); !(B = P.n()).done; ) {
                        var z = B.value;
                        z.style.opacity = O;
                      }
                    } catch (W) {
                      P.e(W);
                    } finally {
                      P.f();
                    }
                    requestAnimationFrame(b);
                  }
                };
              l();
            },
          },
          {
            key: "fadeIn",
            value: function (t, s, f, C) {
              var E = this;
              t = this.wrap(t);
              var p = n(t),
                u;
              try {
                for (p.s(); !(u = p.n()).done; ) {
                  var r = u.value;
                  r &&
                    ((r.style.opacity = 0), (r.style.display = C || "block"));
                }
              } catch (y) {
                p.e(y);
              } finally {
                p.f();
              }
              this.isFadeIn = !0;
              var l = parseFloat(t[0].dataset.opacityTarget || 1),
                b = (16.66666 * l) / (s || this.options.fadeSpeed),
                O = function y() {
                  var N = parseFloat(t[0].style.opacity);
                  if ((N += b) > l) {
                    var z = n(t),
                      W;
                    try {
                      for (z.s(); !(W = z.n()).done; ) {
                        var bt = W.value;
                        bt && (bt.style.opacity = l);
                      }
                    } catch (st) {
                      z.e(st);
                    } finally {
                      z.f();
                    }
                    f && f.call(E, t);
                  } else {
                    var A = n(t),
                      P;
                    try {
                      for (A.s(); !(P = A.n()).done; ) {
                        var B = P.value;
                        B && (B.style.opacity = N);
                      }
                    } catch (st) {
                      A.e(st);
                    } finally {
                      A.f();
                    }
                    if (!E.isFadeIn) return;
                    requestAnimationFrame(y);
                  }
                };
              O();
            },
          },
          {
            key: "hide",
            value: function (t) {
              t = this.wrap(t);
              var s = n(t),
                f;
              try {
                for (s.s(); !(f = s.n()).done; ) {
                  var C = f.value;
                  C.style.display != "none" &&
                    (C.dataset.initialDisplay = C.style.display),
                    (C.style.display = "none");
                }
              } catch (E) {
                s.e(E);
              } finally {
                s.f();
              }
            },
          },
          {
            key: "show",
            value: function (t, s) {
              t = this.wrap(t);
              var f = n(t),
                C;
              try {
                for (f.s(); !(C = f.n()).done; ) {
                  var E = C.value;
                  E.style.display = E.dataset.initialDisplay || s || "block";
                }
              } catch (p) {
                f.e(p);
              } finally {
                f.f();
              }
            },
          },
          {
            key: "wrap",
            value: function (t) {
              return typeof t[Symbol.iterator] == "function" &&
                typeof t != "string"
                ? t
                : [t];
            },
          },
          {
            key: "on",
            value: function (t, s) {
              t = this.wrap(t);
              var f = n(this.elements),
                C;
              try {
                for (f.s(); !(C = f.n()).done; ) {
                  var E = C.value;
                  E.fullyNamespacedEvents || (E.fullyNamespacedEvents = {});
                  var p = n(t),
                    u;
                  try {
                    for (p.s(); !(u = p.n()).done; ) {
                      var r = u.value;
                      (E.fullyNamespacedEvents[r] = s),
                        E.addEventListener(r, s);
                    }
                  } catch (l) {
                    p.e(l);
                  } finally {
                    p.f();
                  }
                }
              } catch (l) {
                f.e(l);
              } finally {
                f.f();
              }
              return this;
            },
          },
          {
            key: "off",
            value: function (t) {
              t = this.wrap(t);
              var s = n(this.elements),
                f;
              try {
                for (s.s(); !(f = s.n()).done; ) {
                  var C = f.value,
                    E = n(t),
                    p;
                  try {
                    for (E.s(); !(p = E.n()).done; ) {
                      var u = p.value;
                      typeof C.fullyNamespacedEvents < "u" &&
                        u in C.fullyNamespacedEvents &&
                        C.removeEventListener(u, C.fullyNamespacedEvents[u]);
                    }
                  } catch (r) {
                    E.e(r);
                  } finally {
                    E.f();
                  }
                }
              } catch (r) {
                s.e(r);
              } finally {
                s.f();
              }
              return this;
            },
          },
          {
            key: "open",
            value: function (t) {
              var s =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : 0;
              (t = t || this.elements[0]),
                typeof jQuery < "u" && t instanceof jQuery && (t = t.get(0)),
                s > 0 && (t = this.elements[s]),
                (this.initialImageIndex = this.elements.indexOf(t)),
                this.initialImageIndex > -1 && this.openImage(t);
            },
          },
          {
            key: "openPosition",
            value: function (t) {
              var s = this.elements[t];
              this.open(s, t);
            },
          },
          {
            key: "next",
            value: function () {
              this.loadImage(1);
            },
          },
          {
            key: "prev",
            value: function () {
              this.loadImage(-1);
            },
          },
          {
            key: "getLighboxData",
            value: function () {
              return {
                currentImageIndex: this.currentImageIndex,
                currentImage: this.currentImage,
                globalScrollbarWidth: this.globalScrollbarWidth,
              };
            },
          },
          {
            key: "destroy",
            value: function () {
              this.off([
                "close." + this.eventNamespace,
                "closed." + this.eventNamespace,
                "nextImageLoaded." + this.eventNamespace,
                "prevImageLoaded." + this.eventNamespace,
                "change." + this.eventNamespace,
                "nextDone." + this.eventNamespace,
                "prevDone." + this.eventNamespace,
                "error." + this.eventNamespace,
                "changed." + this.eventNamespace,
                "next." + this.eventNamespace,
                "prev." + this.eventNamespace,
                "show." + this.eventNamespace,
                "shown." + this.eventNamespace,
              ]),
                this.removeEventListener(
                  this.elements,
                  "click." + this.eventNamespace
                ),
                this.removeEventListener(
                  document,
                  "focusin." + this.eventNamespace
                ),
                this.removeEventListener(
                  document.body,
                  "contextmenu." + this.eventNamespace
                ),
                this.removeEventListener(
                  document.body,
                  "keyup." + this.eventNamespace
                ),
                this.removeEventListener(
                  this.domNodes.navigation.getElementsByTagName("button"),
                  "click." + this.eventNamespace
                ),
                this.removeEventListener(
                  this.domNodes.closeButton,
                  "click." + this.eventNamespace
                ),
                this.removeEventListener(
                  window,
                  "resize." + this.eventNamespace
                ),
                this.removeEventListener(
                  window,
                  "hashchange." + this.eventNamespace
                ),
                this.close(),
                this.isOpen &&
                  (document.body.removeChild(this.domNodes.wrapper),
                  document.body.removeChild(this.domNodes.overlay)),
                (this.elements = null);
            },
          },
          {
            key: "refresh",
            value: function () {
              if (!this.initialSelector)
                throw "refreshing only works when you initialize using a selector!";
              var t = this.options,
                s = this.initialSelector;
              return this.destroy(), this.constructor(s, t), this;
            },
          },
        ]),
        h
      );
    })(),
    x = k;
  (e.default = x), (q.SimpleLightbox = k);
})(Ht);
const Eo = Dt(Ht);
function Mt(e, o) {
  return function () {
    return e.apply(o, arguments);
  };
}
const { toString: ne } = Object.prototype,
  { getPrototypeOf: mt } = Object,
  tt = ((e) => (o) => {
    const n = ne.call(o);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  X = (e) => ((e = e.toLowerCase()), (o) => tt(o) === e),
  et = (e) => (o) => typeof o === e,
  { isArray: _ } = Array,
  J = et("undefined");
function ie(e) {
  return (
    e !== null &&
    !J(e) &&
    e.constructor !== null &&
    !J(e.constructor) &&
    H(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Xt = X("ArrayBuffer");
function se(e) {
  let o;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (o = ArrayBuffer.isView(e))
      : (o = e && e.buffer && Xt(e.buffer)),
    o
  );
}
const re = et("string"),
  H = et("function"),
  Ft = et("number"),
  ot = (e) => e !== null && typeof e == "object",
  ae = (e) => e === !0 || e === !1,
  G = (e) => {
    if (tt(e) !== "object") return !1;
    const o = mt(e);
    return (
      (o === null ||
        o === Object.prototype ||
        Object.getPrototypeOf(o) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  le = X("Date"),
  ce = X("File"),
  de = X("Blob"),
  fe = X("FileList"),
  ue = (e) => ot(e) && H(e.pipe),
  pe = (e) => {
    let o;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (H(e.append) &&
          ((o = tt(e)) === "formdata" ||
            (o === "object" &&
              H(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  he = X("URLSearchParams"),
  me = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function V(e, o, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let i, a;
  if ((typeof e != "object" && (e = [e]), _(e)))
    for (i = 0, a = e.length; i < a; i++) o.call(null, e[i], i, e);
  else {
    const c = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      d = c.length;
    let w;
    for (i = 0; i < d; i++) (w = c[i]), o.call(null, e[w], w, e);
  }
}
function Yt(e, o) {
  o = o.toLowerCase();
  const n = Object.keys(e);
  let i = n.length,
    a;
  for (; i-- > 0; ) if (((a = n[i]), o === a.toLowerCase())) return a;
  return null;
}
const Bt = (e) => !J(e) && e !== {};
function dt() {
  const { caseless: e } = (Bt(this) && this) || {},
    o = {},
    n = (i, a) => {
      const c = (e && Yt(o, a)) || a;
      G(o[c]) && G(i)
        ? (o[c] = dt(o[c], i))
        : G(i)
        ? (o[c] = dt({}, i))
        : _(i)
        ? (o[c] = i.slice())
        : (o[c] = i);
    };
  for (let i = 0, a = arguments.length; i < a; i++)
    arguments[i] && V(arguments[i], n);
  return o;
}
const ge = (e, o, n, { allOwnKeys: i } = {}) => (
    V(
      o,
      (a, c) => {
        n && H(a) ? (e[c] = Mt(a, n)) : (e[c] = a);
      },
      { allOwnKeys: i }
    ),
    e
  ),
  ye = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Ce = (e, o, n, i) => {
    (e.prototype = Object.create(o.prototype, i)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: o.prototype }),
      n && Object.assign(e.prototype, n);
  },
  ve = (e, o, n, i) => {
    let a, c, d;
    const w = {};
    if (((o = o || {}), e == null)) return o;
    do {
      for (a = Object.getOwnPropertyNames(e), c = a.length; c-- > 0; )
        (d = a[c]), (!i || i(d, e, o)) && !w[d] && ((o[d] = e[d]), (w[d] = !0));
      e = n !== !1 && mt(e);
    } while (e && (!n || n(e, o)) && e !== Object.prototype);
    return o;
  },
  we = (e, o, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= o.length);
    const i = e.indexOf(o, n);
    return i !== -1 && i === n;
  },
  be = (e) => {
    if (!e) return null;
    if (_(e)) return e;
    let o = e.length;
    if (!Ft(o)) return null;
    const n = new Array(o);
    for (; o-- > 0; ) n[o] = e[o];
    return n;
  },
  Ee = (
    (e) => (o) =>
      e && o instanceof e
  )(typeof Uint8Array < "u" && mt(Uint8Array)),
  Oe = (e, o) => {
    const i = (e && e[Symbol.iterator]).call(e);
    let a;
    for (; (a = i.next()) && !a.done; ) {
      const c = a.value;
      o.call(e, c[0], c[1]);
    }
  },
  Se = (e, o) => {
    let n;
    const i = [];
    for (; (n = e.exec(o)) !== null; ) i.push(n);
    return i;
  },
  Ne = X("HTMLFormElement"),
  xe = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, i, a) {
      return i.toUpperCase() + a;
    }),
  Et = (
    ({ hasOwnProperty: e }) =>
    (o, n) =>
      e.call(o, n)
  )(Object.prototype),
  Ie = X("RegExp"),
  zt = (e, o) => {
    const n = Object.getOwnPropertyDescriptors(e),
      i = {};
    V(n, (a, c) => {
      let d;
      (d = o(a, c, e)) !== !1 && (i[c] = d || a);
    }),
      Object.defineProperties(e, i);
  },
  Le = (e) => {
    zt(e, (o, n) => {
      if (H(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const i = e[n];
      if (H(i)) {
        if (((o.enumerable = !1), "writable" in o)) {
          o.writable = !1;
          return;
        }
        o.set ||
          (o.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Te = (e, o) => {
    const n = {},
      i = (a) => {
        a.forEach((c) => {
          n[c] = !0;
        });
      };
    return _(e) ? i(e) : i(String(e).split(o)), n;
  },
  Ae = () => {},
  Re = (e, o) => ((e = +e), Number.isFinite(e) ? e : o),
  rt = "abcdefghijklmnopqrstuvwxyz",
  Ot = "0123456789",
  Wt = { DIGIT: Ot, ALPHA: rt, ALPHA_DIGIT: rt + rt.toUpperCase() + Ot },
  Pe = (e = 16, o = Wt.ALPHA_DIGIT) => {
    let n = "";
    const { length: i } = o;
    for (; e--; ) n += o[(Math.random() * i) | 0];
    return n;
  };
function De(e) {
  return !!(
    e &&
    H(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const ke = (e) => {
    const o = new Array(10),
      n = (i, a) => {
        if (ot(i)) {
          if (o.indexOf(i) >= 0) return;
          if (!("toJSON" in i)) {
            o[a] = i;
            const c = _(i) ? [] : {};
            return (
              V(i, (d, w) => {
                const I = n(d, a + 1);
                !J(I) && (c[w] = I);
              }),
              (o[a] = void 0),
              c
            );
          }
        }
        return i;
      };
    return n(e, 0);
  },
  He = X("AsyncFunction"),
  Me = (e) => e && (ot(e) || H(e)) && H(e.then) && H(e.catch),
  m = {
    isArray: _,
    isArrayBuffer: Xt,
    isBuffer: ie,
    isFormData: pe,
    isArrayBufferView: se,
    isString: re,
    isNumber: Ft,
    isBoolean: ae,
    isObject: ot,
    isPlainObject: G,
    isUndefined: J,
    isDate: le,
    isFile: ce,
    isBlob: de,
    isRegExp: Ie,
    isFunction: H,
    isStream: ue,
    isURLSearchParams: he,
    isTypedArray: Ee,
    isFileList: fe,
    forEach: V,
    merge: dt,
    extend: ge,
    trim: me,
    stripBOM: ye,
    inherits: Ce,
    toFlatObject: ve,
    kindOf: tt,
    kindOfTest: X,
    endsWith: we,
    toArray: be,
    forEachEntry: Oe,
    matchAll: Se,
    isHTMLForm: Ne,
    hasOwnProperty: Et,
    hasOwnProp: Et,
    reduceDescriptors: zt,
    freezeMethods: Le,
    toObjectSet: Te,
    toCamelCase: xe,
    noop: Ae,
    toFiniteNumber: Re,
    findKey: Yt,
    global: {},
    isContextDefined: Bt,
    ALPHABET: Wt,
    generateString: Pe,
    isSpecCompliantForm: De,
    toJSONObject: ke,
    isAsyncFn: He,
    isThenable: Me,
  };
function R(e, o, n, i, a) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    o && (this.code = o),
    n && (this.config = n),
    i && (this.request = i),
    a && (this.response = a);
}
m.inherits(R, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: m.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Ut = R.prototype,
  _t = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  _t[e] = { value: e };
});
Object.defineProperties(R, _t);
Object.defineProperty(Ut, "isAxiosError", { value: !0 });
R.from = (e, o, n, i, a, c) => {
  const d = Object.create(Ut);
  return (
    m.toFlatObject(
      e,
      d,
      function (I) {
        return I !== Error.prototype;
      },
      (w) => w !== "isAxiosError"
    ),
    R.call(d, e.message, o, n, i, a),
    (d.cause = e),
    (d.name = e.name),
    c && Object.assign(d, c),
    d
  );
};
const Xe = null;
function ft(e) {
  return m.isPlainObject(e) || m.isArray(e);
}
function jt(e) {
  return m.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function St(e, o, n) {
  return e
    ? e
        .concat(o)
        .map(function (a, c) {
          return (a = jt(a)), !n && c ? "[" + a + "]" : a;
        })
        .join(n ? "." : "")
    : o;
}
function Fe(e) {
  return m.isArray(e) && !e.some(ft);
}
const Ye = m.toFlatObject(m, {}, null, function (o) {
  return /^is[A-Z]/.test(o);
});
function nt(e, o, n) {
  if (!m.isObject(e)) throw new TypeError("target must be an object");
  (o = o || new FormData()),
    (n = m.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (h, g) {
        return !m.isUndefined(g[h]);
      }
    ));
  const i = n.metaTokens,
    a = n.visitor || S,
    c = n.dots,
    d = n.indexes,
    I = (n.Blob || (typeof Blob < "u" && Blob)) && m.isSpecCompliantForm(o);
  if (!m.isFunction(a)) throw new TypeError("visitor must be a function");
  function T(x) {
    if (x === null) return "";
    if (m.isDate(x)) return x.toISOString();
    if (!I && m.isBlob(x))
      throw new R("Blob is not supported. Use a Buffer instead.");
    return m.isArrayBuffer(x) || m.isTypedArray(x)
      ? I && typeof Blob == "function"
        ? new Blob([x])
        : Buffer.from(x)
      : x;
  }
  function S(x, h, g) {
    let t = x;
    if (x && !g && typeof x == "object") {
      if (m.endsWith(h, "{}"))
        (h = i ? h : h.slice(0, -2)), (x = JSON.stringify(x));
      else if (
        (m.isArray(x) && Fe(x)) ||
        ((m.isFileList(x) || m.endsWith(h, "[]")) && (t = m.toArray(x)))
      )
        return (
          (h = jt(h)),
          t.forEach(function (f, C) {
            !(m.isUndefined(f) || f === null) &&
              o.append(
                d === !0 ? St([h], C, c) : d === null ? h : h + "[]",
                T(f)
              );
          }),
          !1
        );
    }
    return ft(x) ? !0 : (o.append(St(g, h, c), T(x)), !1);
  }
  const v = [],
    L = Object.assign(Ye, {
      defaultVisitor: S,
      convertValue: T,
      isVisitable: ft,
    });
  function k(x, h) {
    if (!m.isUndefined(x)) {
      if (v.indexOf(x) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      v.push(x),
        m.forEach(x, function (t, s) {
          (!(m.isUndefined(t) || t === null) &&
            a.call(o, t, m.isString(s) ? s.trim() : s, h, L)) === !0 &&
            k(t, h ? h.concat(s) : [s]);
        }),
        v.pop();
    }
  }
  if (!m.isObject(e)) throw new TypeError("data must be an object");
  return k(e), o;
}
function Nt(e) {
  const o = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (i) {
    return o[i];
  });
}
function gt(e, o) {
  (this._pairs = []), e && nt(e, this, o);
}
const qt = gt.prototype;
qt.append = function (o, n) {
  this._pairs.push([o, n]);
};
qt.toString = function (o) {
  const n = o
    ? function (i) {
        return o.call(this, i, Nt);
      }
    : Nt;
  return this._pairs
    .map(function (a) {
      return n(a[0]) + "=" + n(a[1]);
    }, "")
    .join("&");
};
function Be(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Jt(e, o, n) {
  if (!o) return e;
  const i = (n && n.encode) || Be,
    a = n && n.serialize;
  let c;
  if (
    (a
      ? (c = a(o, n))
      : (c = m.isURLSearchParams(o) ? o.toString() : new gt(o, n).toString(i)),
    c)
  ) {
    const d = e.indexOf("#");
    d !== -1 && (e = e.slice(0, d)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + c);
  }
  return e;
}
class ze {
  constructor() {
    this.handlers = [];
  }
  use(o, n, i) {
    return (
      this.handlers.push({
        fulfilled: o,
        rejected: n,
        synchronous: i ? i.synchronous : !1,
        runWhen: i ? i.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(o) {
    this.handlers[o] && (this.handlers[o] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(o) {
    m.forEach(this.handlers, function (i) {
      i !== null && o(i);
    });
  }
}
const xt = ze,
  Vt = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  We = typeof URLSearchParams < "u" ? URLSearchParams : gt,
  Ue = typeof FormData < "u" ? FormData : null,
  _e = typeof Blob < "u" ? Blob : null,
  je = {
    isBrowser: !0,
    classes: { URLSearchParams: We, FormData: Ue, Blob: _e },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Zt = typeof window < "u" && typeof document < "u",
  qe = ((e) => Zt && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  Je = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  Ve = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Zt,
        hasStandardBrowserEnv: qe,
        hasStandardBrowserWebWorkerEnv: Je,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  M = { ...Ve, ...je };
function Ze(e, o) {
  return nt(
    e,
    new M.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, i, a, c) {
          return M.isNode && m.isBuffer(n)
            ? (this.append(i, n.toString("base64")), !1)
            : c.defaultVisitor.apply(this, arguments);
        },
      },
      o
    )
  );
}
function Ge(e) {
  return m
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((o) => (o[0] === "[]" ? "" : o[1] || o[0]));
}
function Ke(e) {
  const o = {},
    n = Object.keys(e);
  let i;
  const a = n.length;
  let c;
  for (i = 0; i < a; i++) (c = n[i]), (o[c] = e[c]);
  return o;
}
function Gt(e) {
  function o(n, i, a, c) {
    let d = n[c++];
    if (d === "__proto__") return !0;
    const w = Number.isFinite(+d),
      I = c >= n.length;
    return (
      (d = !d && m.isArray(a) ? a.length : d),
      I
        ? (m.hasOwnProp(a, d) ? (a[d] = [a[d], i]) : (a[d] = i), !w)
        : ((!a[d] || !m.isObject(a[d])) && (a[d] = []),
          o(n, i, a[d], c) && m.isArray(a[d]) && (a[d] = Ke(a[d])),
          !w)
    );
  }
  if (m.isFormData(e) && m.isFunction(e.entries)) {
    const n = {};
    return (
      m.forEachEntry(e, (i, a) => {
        o(Ge(i), a, n, 0);
      }),
      n
    );
  }
  return null;
}
function Qe(e, o, n) {
  if (m.isString(e))
    try {
      return (o || JSON.parse)(e), m.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError") throw i;
    }
  return (n || JSON.stringify)(e);
}
const yt = {
  transitional: Vt,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (o, n) {
      const i = n.getContentType() || "",
        a = i.indexOf("application/json") > -1,
        c = m.isObject(o);
      if ((c && m.isHTMLForm(o) && (o = new FormData(o)), m.isFormData(o)))
        return a ? JSON.stringify(Gt(o)) : o;
      if (
        m.isArrayBuffer(o) ||
        m.isBuffer(o) ||
        m.isStream(o) ||
        m.isFile(o) ||
        m.isBlob(o)
      )
        return o;
      if (m.isArrayBufferView(o)) return o.buffer;
      if (m.isURLSearchParams(o))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          o.toString()
        );
      let w;
      if (c) {
        if (i.indexOf("application/x-www-form-urlencoded") > -1)
          return Ze(o, this.formSerializer).toString();
        if ((w = m.isFileList(o)) || i.indexOf("multipart/form-data") > -1) {
          const I = this.env && this.env.FormData;
          return nt(
            w ? { "files[]": o } : o,
            I && new I(),
            this.formSerializer
          );
        }
      }
      return c || a ? (n.setContentType("application/json", !1), Qe(o)) : o;
    },
  ],
  transformResponse: [
    function (o) {
      const n = this.transitional || yt.transitional,
        i = n && n.forcedJSONParsing,
        a = this.responseType === "json";
      if (o && m.isString(o) && ((i && !this.responseType) || a)) {
        const d = !(n && n.silentJSONParsing) && a;
        try {
          return JSON.parse(o);
        } catch (w) {
          if (d)
            throw w.name === "SyntaxError"
              ? R.from(w, R.ERR_BAD_RESPONSE, this, null, this.response)
              : w;
        }
      }
      return o;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: M.classes.FormData, Blob: M.classes.Blob },
  validateStatus: function (o) {
    return o >= 200 && o < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
m.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  yt.headers[e] = {};
});
const Ct = yt,
  $e = m.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  to = (e) => {
    const o = {};
    let n, i, a;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (d) {
            (a = d.indexOf(":")),
              (n = d.substring(0, a).trim().toLowerCase()),
              (i = d.substring(a + 1).trim()),
              !(!n || (o[n] && $e[n])) &&
                (n === "set-cookie"
                  ? o[n]
                    ? o[n].push(i)
                    : (o[n] = [i])
                  : (o[n] = o[n] ? o[n] + ", " + i : i));
          }),
      o
    );
  },
  It = Symbol("internals");
function j(e) {
  return e && String(e).trim().toLowerCase();
}
function K(e) {
  return e === !1 || e == null ? e : m.isArray(e) ? e.map(K) : String(e);
}
function eo(e) {
  const o = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; (i = n.exec(e)); ) o[i[1]] = i[2];
  return o;
}
const oo = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function at(e, o, n, i, a) {
  if (m.isFunction(i)) return i.call(this, o, n);
  if ((a && (o = n), !!m.isString(o))) {
    if (m.isString(i)) return o.indexOf(i) !== -1;
    if (m.isRegExp(i)) return i.test(o);
  }
}
function no(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (o, n, i) => n.toUpperCase() + i);
}
function io(e, o) {
  const n = m.toCamelCase(" " + o);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(e, i + n, {
      value: function (a, c, d) {
        return this[i].call(this, o, a, c, d);
      },
      configurable: !0,
    });
  });
}
class it {
  constructor(o) {
    o && this.set(o);
  }
  set(o, n, i) {
    const a = this;
    function c(w, I, T) {
      const S = j(I);
      if (!S) throw new Error("header name must be a non-empty string");
      const v = m.findKey(a, S);
      (!v || a[v] === void 0 || T === !0 || (T === void 0 && a[v] !== !1)) &&
        (a[v || I] = K(w));
    }
    const d = (w, I) => m.forEach(w, (T, S) => c(T, S, I));
    return (
      m.isPlainObject(o) || o instanceof this.constructor
        ? d(o, n)
        : m.isString(o) && (o = o.trim()) && !oo(o)
        ? d(to(o), n)
        : o != null && c(n, o, i),
      this
    );
  }
  get(o, n) {
    if (((o = j(o)), o)) {
      const i = m.findKey(this, o);
      if (i) {
        const a = this[i];
        if (!n) return a;
        if (n === !0) return eo(a);
        if (m.isFunction(n)) return n.call(this, a, i);
        if (m.isRegExp(n)) return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(o, n) {
    if (((o = j(o)), o)) {
      const i = m.findKey(this, o);
      return !!(i && this[i] !== void 0 && (!n || at(this, this[i], i, n)));
    }
    return !1;
  }
  delete(o, n) {
    const i = this;
    let a = !1;
    function c(d) {
      if (((d = j(d)), d)) {
        const w = m.findKey(i, d);
        w && (!n || at(i, i[w], w, n)) && (delete i[w], (a = !0));
      }
    }
    return m.isArray(o) ? o.forEach(c) : c(o), a;
  }
  clear(o) {
    const n = Object.keys(this);
    let i = n.length,
      a = !1;
    for (; i--; ) {
      const c = n[i];
      (!o || at(this, this[c], c, o, !0)) && (delete this[c], (a = !0));
    }
    return a;
  }
  normalize(o) {
    const n = this,
      i = {};
    return (
      m.forEach(this, (a, c) => {
        const d = m.findKey(i, c);
        if (d) {
          (n[d] = K(a)), delete n[c];
          return;
        }
        const w = o ? no(c) : String(c).trim();
        w !== c && delete n[c], (n[w] = K(a)), (i[w] = !0);
      }),
      this
    );
  }
  concat(...o) {
    return this.constructor.concat(this, ...o);
  }
  toJSON(o) {
    const n = Object.create(null);
    return (
      m.forEach(this, (i, a) => {
        i != null && i !== !1 && (n[a] = o && m.isArray(i) ? i.join(", ") : i);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([o, n]) => o + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(o) {
    return o instanceof this ? o : new this(o);
  }
  static concat(o, ...n) {
    const i = new this(o);
    return n.forEach((a) => i.set(a)), i;
  }
  static accessor(o) {
    const i = (this[It] = this[It] = { accessors: {} }).accessors,
      a = this.prototype;
    function c(d) {
      const w = j(d);
      i[w] || (io(a, d), (i[w] = !0));
    }
    return m.isArray(o) ? o.forEach(c) : c(o), this;
  }
}
it.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
m.reduceDescriptors(it.prototype, ({ value: e }, o) => {
  let n = o[0].toUpperCase() + o.slice(1);
  return {
    get: () => e,
    set(i) {
      this[n] = i;
    },
  };
});
m.freezeMethods(it);
const F = it;
function lt(e, o) {
  const n = this || Ct,
    i = o || n,
    a = F.from(i.headers);
  let c = i.data;
  return (
    m.forEach(e, function (w) {
      c = w.call(n, c, a.normalize(), o ? o.status : void 0);
    }),
    a.normalize(),
    c
  );
}
function Kt(e) {
  return !!(e && e.__CANCEL__);
}
function Z(e, o, n) {
  R.call(this, e ?? "canceled", R.ERR_CANCELED, o, n),
    (this.name = "CanceledError");
}
m.inherits(Z, R, { __CANCEL__: !0 });
function so(e, o, n) {
  const i = n.config.validateStatus;
  !n.status || !i || i(n.status)
    ? e(n)
    : o(
        new R(
          "Request failed with status code " + n.status,
          [R.ERR_BAD_REQUEST, R.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const ro = M.hasStandardBrowserEnv
  ? {
      write(e, o, n, i, a, c) {
        const d = [e + "=" + encodeURIComponent(o)];
        m.isNumber(n) && d.push("expires=" + new Date(n).toGMTString()),
          m.isString(i) && d.push("path=" + i),
          m.isString(a) && d.push("domain=" + a),
          c === !0 && d.push("secure"),
          (document.cookie = d.join("; "));
      },
      read(e) {
        const o = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return o ? decodeURIComponent(o[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function ao(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function lo(e, o) {
  return o ? e.replace(/\/?\/$/, "") + "/" + o.replace(/^\/+/, "") : e;
}
function Qt(e, o) {
  return e && !ao(o) ? lo(e, o) : o;
}
const co = M.hasStandardBrowserEnv
  ? (function () {
      const o = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let i;
      function a(c) {
        let d = c;
        return (
          o && (n.setAttribute("href", d), (d = n.href)),
          n.setAttribute("href", d),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (i = a(window.location.href)),
        function (d) {
          const w = m.isString(d) ? a(d) : d;
          return w.protocol === i.protocol && w.host === i.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function fo(e) {
  const o = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (o && o[1]) || "";
}
function uo(e, o) {
  e = e || 10;
  const n = new Array(e),
    i = new Array(e);
  let a = 0,
    c = 0,
    d;
  return (
    (o = o !== void 0 ? o : 1e3),
    function (I) {
      const T = Date.now(),
        S = i[c];
      d || (d = T), (n[a] = I), (i[a] = T);
      let v = c,
        L = 0;
      for (; v !== a; ) (L += n[v++]), (v = v % e);
      if (((a = (a + 1) % e), a === c && (c = (c + 1) % e), T - d < o)) return;
      const k = S && T - S;
      return k ? Math.round((L * 1e3) / k) : void 0;
    }
  );
}
function Lt(e, o) {
  let n = 0;
  const i = uo(50, 250);
  return (a) => {
    const c = a.loaded,
      d = a.lengthComputable ? a.total : void 0,
      w = c - n,
      I = i(w),
      T = c <= d;
    n = c;
    const S = {
      loaded: c,
      total: d,
      progress: d ? c / d : void 0,
      bytes: w,
      rate: I || void 0,
      estimated: I && d && T ? (d - c) / I : void 0,
      event: a,
    };
    (S[o ? "download" : "upload"] = !0), e(S);
  };
}
const po = typeof XMLHttpRequest < "u",
  ho =
    po &&
    function (e) {
      return new Promise(function (n, i) {
        let a = e.data;
        const c = F.from(e.headers).normalize();
        let { responseType: d, withXSRFToken: w } = e,
          I;
        function T() {
          e.cancelToken && e.cancelToken.unsubscribe(I),
            e.signal && e.signal.removeEventListener("abort", I);
        }
        let S;
        if (m.isFormData(a)) {
          if (M.hasStandardBrowserEnv || M.hasStandardBrowserWebWorkerEnv)
            c.setContentType(!1);
          else if ((S = c.getContentType()) !== !1) {
            const [h, ...g] = S
              ? S.split(";")
                  .map((t) => t.trim())
                  .filter(Boolean)
              : [];
            c.setContentType([h || "multipart/form-data", ...g].join("; "));
          }
        }
        let v = new XMLHttpRequest();
        if (e.auth) {
          const h = e.auth.username || "",
            g = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          c.set("Authorization", "Basic " + btoa(h + ":" + g));
        }
        const L = Qt(e.baseURL, e.url);
        v.open(e.method.toUpperCase(), Jt(L, e.params, e.paramsSerializer), !0),
          (v.timeout = e.timeout);
        function k() {
          if (!v) return;
          const h = F.from(
              "getAllResponseHeaders" in v && v.getAllResponseHeaders()
            ),
            t = {
              data:
                !d || d === "text" || d === "json"
                  ? v.responseText
                  : v.response,
              status: v.status,
              statusText: v.statusText,
              headers: h,
              config: e,
              request: v,
            };
          so(
            function (f) {
              n(f), T();
            },
            function (f) {
              i(f), T();
            },
            t
          ),
            (v = null);
        }
        if (
          ("onloadend" in v
            ? (v.onloadend = k)
            : (v.onreadystatechange = function () {
                !v ||
                  v.readyState !== 4 ||
                  (v.status === 0 &&
                    !(v.responseURL && v.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(k);
              }),
          (v.onabort = function () {
            v &&
              (i(new R("Request aborted", R.ECONNABORTED, e, v)), (v = null));
          }),
          (v.onerror = function () {
            i(new R("Network Error", R.ERR_NETWORK, e, v)), (v = null);
          }),
          (v.ontimeout = function () {
            let g = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const t = e.transitional || Vt;
            e.timeoutErrorMessage && (g = e.timeoutErrorMessage),
              i(
                new R(
                  g,
                  t.clarifyTimeoutError ? R.ETIMEDOUT : R.ECONNABORTED,
                  e,
                  v
                )
              ),
              (v = null);
          }),
          M.hasStandardBrowserEnv &&
            (w && m.isFunction(w) && (w = w(e)), w || (w !== !1 && co(L))))
        ) {
          const h =
            e.xsrfHeaderName && e.xsrfCookieName && ro.read(e.xsrfCookieName);
          h && c.set(e.xsrfHeaderName, h);
        }
        a === void 0 && c.setContentType(null),
          "setRequestHeader" in v &&
            m.forEach(c.toJSON(), function (g, t) {
              v.setRequestHeader(t, g);
            }),
          m.isUndefined(e.withCredentials) ||
            (v.withCredentials = !!e.withCredentials),
          d && d !== "json" && (v.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            v.addEventListener("progress", Lt(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            v.upload &&
            v.upload.addEventListener("progress", Lt(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((I = (h) => {
              v &&
                (i(!h || h.type ? new Z(null, e, v) : h),
                v.abort(),
                (v = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(I),
            e.signal &&
              (e.signal.aborted ? I() : e.signal.addEventListener("abort", I)));
        const x = fo(L);
        if (x && M.protocols.indexOf(x) === -1) {
          i(new R("Unsupported protocol " + x + ":", R.ERR_BAD_REQUEST, e));
          return;
        }
        v.send(a || null);
      });
    },
  ut = { http: Xe, xhr: ho };
m.forEach(ut, (e, o) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: o });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: o });
  }
});
const Tt = (e) => `- ${e}`,
  mo = (e) => m.isFunction(e) || e === null || e === !1,
  $t = {
    getAdapter: (e) => {
      e = m.isArray(e) ? e : [e];
      const { length: o } = e;
      let n, i;
      const a = {};
      for (let c = 0; c < o; c++) {
        n = e[c];
        let d;
        if (
          ((i = n),
          !mo(n) && ((i = ut[(d = String(n)).toLowerCase()]), i === void 0))
        )
          throw new R(`Unknown adapter '${d}'`);
        if (i) break;
        a[d || "#" + c] = i;
      }
      if (!i) {
        const c = Object.entries(a).map(
          ([w, I]) =>
            `adapter ${w} ` +
            (I === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let d = o
          ? c.length > 1
            ? `since :
` +
              c.map(Tt).join(`
`)
            : " " + Tt(c[0])
          : "as no adapter specified";
        throw new R(
          "There is no suitable adapter to dispatch the request " + d,
          "ERR_NOT_SUPPORT"
        );
      }
      return i;
    },
    adapters: ut,
  };
function ct(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Z(null, e);
}
function At(e) {
  return (
    ct(e),
    (e.headers = F.from(e.headers)),
    (e.data = lt.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    $t
      .getAdapter(e.adapter || Ct.adapter)(e)
      .then(
        function (i) {
          return (
            ct(e),
            (i.data = lt.call(e, e.transformResponse, i)),
            (i.headers = F.from(i.headers)),
            i
          );
        },
        function (i) {
          return (
            Kt(i) ||
              (ct(e),
              i &&
                i.response &&
                ((i.response.data = lt.call(
                  e,
                  e.transformResponse,
                  i.response
                )),
                (i.response.headers = F.from(i.response.headers)))),
            Promise.reject(i)
          );
        }
      )
  );
}
const Rt = (e) => (e instanceof F ? e.toJSON() : e);
function U(e, o) {
  o = o || {};
  const n = {};
  function i(T, S, v) {
    return m.isPlainObject(T) && m.isPlainObject(S)
      ? m.merge.call({ caseless: v }, T, S)
      : m.isPlainObject(S)
      ? m.merge({}, S)
      : m.isArray(S)
      ? S.slice()
      : S;
  }
  function a(T, S, v) {
    if (m.isUndefined(S)) {
      if (!m.isUndefined(T)) return i(void 0, T, v);
    } else return i(T, S, v);
  }
  function c(T, S) {
    if (!m.isUndefined(S)) return i(void 0, S);
  }
  function d(T, S) {
    if (m.isUndefined(S)) {
      if (!m.isUndefined(T)) return i(void 0, T);
    } else return i(void 0, S);
  }
  function w(T, S, v) {
    if (v in o) return i(T, S);
    if (v in e) return i(void 0, T);
  }
  const I = {
    url: c,
    method: c,
    data: c,
    baseURL: d,
    transformRequest: d,
    transformResponse: d,
    paramsSerializer: d,
    timeout: d,
    timeoutMessage: d,
    withCredentials: d,
    withXSRFToken: d,
    adapter: d,
    responseType: d,
    xsrfCookieName: d,
    xsrfHeaderName: d,
    onUploadProgress: d,
    onDownloadProgress: d,
    decompress: d,
    maxContentLength: d,
    maxBodyLength: d,
    beforeRedirect: d,
    transport: d,
    httpAgent: d,
    httpsAgent: d,
    cancelToken: d,
    socketPath: d,
    responseEncoding: d,
    validateStatus: w,
    headers: (T, S) => a(Rt(T), Rt(S), !0),
  };
  return (
    m.forEach(Object.keys(Object.assign({}, e, o)), function (S) {
      const v = I[S] || a,
        L = v(e[S], o[S], S);
      (m.isUndefined(L) && v !== w) || (n[S] = L);
    }),
    n
  );
}
const te = "1.6.7",
  vt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, o) => {
    vt[e] = function (i) {
      return typeof i === e || "a" + (o < 1 ? "n " : " ") + e;
    };
  }
);
const Pt = {};
vt.transitional = function (o, n, i) {
  function a(c, d) {
    return (
      "[Axios v" +
      te +
      "] Transitional option '" +
      c +
      "'" +
      d +
      (i ? ". " + i : "")
    );
  }
  return (c, d, w) => {
    if (o === !1)
      throw new R(
        a(d, " has been removed" + (n ? " in " + n : "")),
        R.ERR_DEPRECATED
      );
    return (
      n &&
        !Pt[d] &&
        ((Pt[d] = !0),
        console.warn(
          a(
            d,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      o ? o(c, d, w) : !0
    );
  };
};
function go(e, o, n) {
  if (typeof e != "object")
    throw new R("options must be an object", R.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(e);
  let a = i.length;
  for (; a-- > 0; ) {
    const c = i[a],
      d = o[c];
    if (d) {
      const w = e[c],
        I = w === void 0 || d(w, c, e);
      if (I !== !0)
        throw new R("option " + c + " must be " + I, R.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new R("Unknown option " + c, R.ERR_BAD_OPTION);
  }
}
const pt = { assertOptions: go, validators: vt },
  Y = pt.validators;
class $ {
  constructor(o) {
    (this.defaults = o),
      (this.interceptors = { request: new xt(), response: new xt() });
  }
  async request(o, n) {
    try {
      return await this._request(o, n);
    } catch (i) {
      if (i instanceof Error) {
        let a;
        Error.captureStackTrace
          ? Error.captureStackTrace((a = {}))
          : (a = new Error());
        const c = a.stack ? a.stack.replace(/^.+\n/, "") : "";
        i.stack
          ? c &&
            !String(i.stack).endsWith(c.replace(/^.+\n.+\n/, "")) &&
            (i.stack +=
              `
` + c)
          : (i.stack = c);
      }
      throw i;
    }
  }
  _request(o, n) {
    typeof o == "string" ? ((n = n || {}), (n.url = o)) : (n = o || {}),
      (n = U(this.defaults, n));
    const { transitional: i, paramsSerializer: a, headers: c } = n;
    i !== void 0 &&
      pt.assertOptions(
        i,
        {
          silentJSONParsing: Y.transitional(Y.boolean),
          forcedJSONParsing: Y.transitional(Y.boolean),
          clarifyTimeoutError: Y.transitional(Y.boolean),
        },
        !1
      ),
      a != null &&
        (m.isFunction(a)
          ? (n.paramsSerializer = { serialize: a })
          : pt.assertOptions(
              a,
              { encode: Y.function, serialize: Y.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let d = c && m.merge(c.common, c[n.method]);
    c &&
      m.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (x) => {
          delete c[x];
        }
      ),
      (n.headers = F.concat(d, c));
    const w = [];
    let I = !0;
    this.interceptors.request.forEach(function (h) {
      (typeof h.runWhen == "function" && h.runWhen(n) === !1) ||
        ((I = I && h.synchronous), w.unshift(h.fulfilled, h.rejected));
    });
    const T = [];
    this.interceptors.response.forEach(function (h) {
      T.push(h.fulfilled, h.rejected);
    });
    let S,
      v = 0,
      L;
    if (!I) {
      const x = [At.bind(this), void 0];
      for (
        x.unshift.apply(x, w),
          x.push.apply(x, T),
          L = x.length,
          S = Promise.resolve(n);
        v < L;

      )
        S = S.then(x[v++], x[v++]);
      return S;
    }
    L = w.length;
    let k = n;
    for (v = 0; v < L; ) {
      const x = w[v++],
        h = w[v++];
      try {
        k = x(k);
      } catch (g) {
        h.call(this, g);
        break;
      }
    }
    try {
      S = At.call(this, k);
    } catch (x) {
      return Promise.reject(x);
    }
    for (v = 0, L = T.length; v < L; ) S = S.then(T[v++], T[v++]);
    return S;
  }
  getUri(o) {
    o = U(this.defaults, o);
    const n = Qt(o.baseURL, o.url);
    return Jt(n, o.params, o.paramsSerializer);
  }
}
m.forEach(["delete", "get", "head", "options"], function (o) {
  $.prototype[o] = function (n, i) {
    return this.request(
      U(i || {}, { method: o, url: n, data: (i || {}).data })
    );
  };
});
m.forEach(["post", "put", "patch"], function (o) {
  function n(i) {
    return function (c, d, w) {
      return this.request(
        U(w || {}, {
          method: o,
          headers: i ? { "Content-Type": "multipart/form-data" } : {},
          url: c,
          data: d,
        })
      );
    };
  }
  ($.prototype[o] = n()), ($.prototype[o + "Form"] = n(!0));
});
const Q = $;
class wt {
  constructor(o) {
    if (typeof o != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (c) {
      n = c;
    });
    const i = this;
    this.promise.then((a) => {
      if (!i._listeners) return;
      let c = i._listeners.length;
      for (; c-- > 0; ) i._listeners[c](a);
      i._listeners = null;
    }),
      (this.promise.then = (a) => {
        let c;
        const d = new Promise((w) => {
          i.subscribe(w), (c = w);
        }).then(a);
        return (
          (d.cancel = function () {
            i.unsubscribe(c);
          }),
          d
        );
      }),
      o(function (c, d, w) {
        i.reason || ((i.reason = new Z(c, d, w)), n(i.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(o) {
    if (this.reason) {
      o(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(o) : (this._listeners = [o]);
  }
  unsubscribe(o) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(o);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let o;
    return {
      token: new wt(function (a) {
        o = a;
      }),
      cancel: o,
    };
  }
}
const yo = wt;
function Co(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function vo(e) {
  return m.isObject(e) && e.isAxiosError === !0;
}
const ht = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ht).forEach(([e, o]) => {
  ht[o] = e;
});
const wo = ht;
function ee(e) {
  const o = new Q(e),
    n = Mt(Q.prototype.request, o);
  return (
    m.extend(n, Q.prototype, o, { allOwnKeys: !0 }),
    m.extend(n, o, null, { allOwnKeys: !0 }),
    (n.create = function (a) {
      return ee(U(e, a));
    }),
    n
  );
}
const D = ee(Ct);
D.Axios = Q;
D.CanceledError = Z;
D.CancelToken = yo;
D.isCancel = Kt;
D.VERSION = te;
D.toFormData = nt;
D.AxiosError = R;
D.Cancel = D.CanceledError;
D.all = function (o) {
  return Promise.all(o);
};
D.spread = Co;
D.isAxiosError = vo;
D.mergeConfig = U;
D.AxiosHeaders = F;
D.formToJSON = (e) => Gt(m.isHTMLForm(e) ? new FormData(e) : e);
D.getAdapter = $t.getAdapter;
D.HttpStatusCode = wo;
D.default = D;
const Oo = D;
export { Eo as S, Oo as a, bo as i };
//# sourceMappingURL=vendor-5401a4b0.js.map
