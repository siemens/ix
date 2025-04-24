(function() {
  var aa = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
  function g(a) {
    var b = aa.has(a);
    a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);
    return !b && a;
  }
  function l(a) {
    var b = a.isConnected;
    if (void 0 !== b)
      return b;
    for (; a && !(a.__CE_isImportDocument || a instanceof Document); )
      a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
    return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
  }
  function n(a, b) {
    for (; b && b !== a && !b.nextSibling; )
      b = b.parentNode;
    return b && b !== a ? b.nextSibling : null;
  }
  function p(a, b, d) {
    d = void 0 === d ? /* @__PURE__ */ new Set() : d;
    for (var c = a; c; ) {
      if (c.nodeType === Node.ELEMENT_NODE) {
        var e = c;
        b(e);
        var f = e.localName;
        if ("link" === f && "import" === e.getAttribute("rel")) {
          c = e.import;
          if (c instanceof Node && !d.has(c))
            for (d.add(c), c = c.firstChild; c; c = c.nextSibling)
              p(c, b, d);
          c = n(a, e);
          continue;
        } else if ("template" === f) {
          c = n(a, e);
          continue;
        }
        if (e = e.__CE_shadowRoot)
          for (e = e.firstChild; e; e = e.nextSibling)
            p(e, b, d);
      }
      c = c.firstChild ? c.firstChild : n(a, c);
    }
  }
  function r(a, b, d) {
    a[b] = d;
  }
  function u() {
    this.a = /* @__PURE__ */ new Map();
    this.g = /* @__PURE__ */ new Map();
    this.c = [];
    this.f = [];
    this.b = false;
  }
  function ba(a, b, d) {
    a.a.set(b, d);
    a.g.set(d.constructorFunction, d);
  }
  function ca(a, b) {
    a.b = true;
    a.c.push(b);
  }
  function da(a, b) {
    a.b = true;
    a.f.push(b);
  }
  function v(a, b) {
    a.b && p(b, function(b2) {
      return w(a, b2);
    });
  }
  function w(a, b) {
    if (a.b && !b.__CE_patched) {
      b.__CE_patched = true;
      for (var d = 0; d < a.c.length; d++)
        a.c[d](b);
      for (d = 0; d < a.f.length; d++)
        a.f[d](b);
    }
  }
  function x(a, b) {
    var d = [];
    p(b, function(b2) {
      return d.push(b2);
    });
    for (b = 0; b < d.length; b++) {
      var c = d[b];
      1 === c.__CE_state ? a.connectedCallback(c) : y(a, c);
    }
  }
  function z(a, b) {
    var d = [];
    p(b, function(b2) {
      return d.push(b2);
    });
    for (b = 0; b < d.length; b++) {
      var c = d[b];
      1 === c.__CE_state && a.disconnectedCallback(c);
    }
  }
  function A(a, b, d) {
    d = void 0 === d ? {} : d;
    var c = d.u || /* @__PURE__ */ new Set(), e = d.i || function(b2) {
      return y(a, b2);
    }, f = [];
    p(b, function(b2) {
      if ("link" === b2.localName && "import" === b2.getAttribute("rel")) {
        var d2 = b2.import;
        d2 instanceof Node && (d2.__CE_isImportDocument = true, d2.__CE_hasRegistry = true);
        d2 && "complete" === d2.readyState ? d2.__CE_documentLoadHandled = true : b2.addEventListener("load", function() {
          var d3 = b2.import;
          if (!d3.__CE_documentLoadHandled) {
            d3.__CE_documentLoadHandled = true;
            var f2 = new Set(c);
            f2.delete(d3);
            A(a, d3, { u: f2, i: e });
          }
        });
      } else
        f.push(b2);
    }, c);
    if (a.b)
      for (b = 0; b < f.length; b++)
        w(a, f[b]);
    for (b = 0; b < f.length; b++)
      e(f[b]);
  }
  function y(a, b) {
    if (void 0 === b.__CE_state) {
      var d = b.ownerDocument;
      if (d.defaultView || d.__CE_isImportDocument && d.__CE_hasRegistry) {
        if (d = a.a.get(b.localName)) {
          d.constructionStack.push(b);
          var c = d.constructorFunction;
          try {
            try {
              if (new c() !== b)
                throw Error("The custom element constructor did not produce the element being upgraded.");
            } finally {
              d.constructionStack.pop();
            }
          } catch (t) {
            throw b.__CE_state = 2, t;
          }
          b.__CE_state = 1;
          b.__CE_definition = d;
          if (d.attributeChangedCallback)
            for (d = d.observedAttributes, c = 0; c < d.length; c++) {
              var e = d[c], f = b.getAttribute(e);
              null !== f && a.attributeChangedCallback(b, e, null, f, null);
            }
          l(b) && a.connectedCallback(b);
        }
      }
    }
  }
  u.prototype.connectedCallback = function(a) {
    var b = a.__CE_definition;
    b.connectedCallback && b.connectedCallback.call(a);
  };
  u.prototype.disconnectedCallback = function(a) {
    var b = a.__CE_definition;
    b.disconnectedCallback && b.disconnectedCallback.call(a);
  };
  u.prototype.attributeChangedCallback = function(a, b, d, c, e) {
    var f = a.__CE_definition;
    f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) && f.attributeChangedCallback.call(a, b, d, c, e);
  };
  function B(a) {
    var b = document;
    this.c = a;
    this.a = b;
    this.b = void 0;
    A(this.c, this.a);
    "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), this.b.observe(this.a, { childList: true, subtree: true }));
  }
  function C(a) {
    a.b && a.b.disconnect();
  }
  B.prototype.f = function(a) {
    var b = this.a.readyState;
    "interactive" !== b && "complete" !== b || C(this);
    for (b = 0; b < a.length; b++)
      for (var d = a[b].addedNodes, c = 0; c < d.length; c++)
        A(this.c, d[c]);
  };
  function ea() {
    var a = this;
    this.b = this.a = void 0;
    this.c = new Promise(function(b) {
      a.b = b;
      a.a && b(a.a);
    });
  }
  function D(a) {
    if (a.a)
      throw Error("Already resolved.");
    a.a = void 0;
    a.b && a.b(void 0);
  }
  function E(a) {
    this.c = false;
    this.a = a;
    this.j = /* @__PURE__ */ new Map();
    this.f = function(b) {
      return b();
    };
    this.b = false;
    this.g = [];
    this.o = new B(a);
  }
  E.prototype.l = function(a, b) {
    var d = this;
    if (!(b instanceof Function))
      throw new TypeError("Custom element constructors must be functions.");
    if (!g(a))
      throw new SyntaxError("The element name '" + a + "' is not valid.");
    if (this.a.a.get(a))
      throw Error("A custom element with name '" + a + "' has already been defined.");
    if (this.c)
      throw Error("A custom element is already being defined.");
    this.c = true;
    try {
      var c = function(b2) {
        var a2 = e[b2];
        if (void 0 !== a2 && !(a2 instanceof Function))
          throw Error("The '" + b2 + "' callback must be a function.");
        return a2;
      }, e = b.prototype;
      if (!(e instanceof Object))
        throw new TypeError("The custom element constructor's prototype is not an object.");
      var f = c("connectedCallback");
      var t = c("disconnectedCallback");
      var k = c("adoptedCallback");
      var h = c("attributeChangedCallback");
      var m = b.observedAttributes || [];
    } catch (q) {
      return;
    } finally {
      this.c = false;
    }
    b = { localName: a, constructorFunction: b, connectedCallback: f, disconnectedCallback: t, adoptedCallback: k, attributeChangedCallback: h, observedAttributes: m, constructionStack: [] };
    ba(
      this.a,
      a,
      b
    );
    this.g.push(b);
    this.b || (this.b = true, this.f(function() {
      return fa(d);
    }));
  };
  E.prototype.i = function(a) {
    A(this.a, a);
  };
  function fa(a) {
    if (false !== a.b) {
      a.b = false;
      for (var b = a.g, d = [], c = /* @__PURE__ */ new Map(), e = 0; e < b.length; e++)
        c.set(b[e].localName, []);
      A(a.a, document, { i: function(b2) {
        if (void 0 === b2.__CE_state) {
          var e2 = b2.localName, f2 = c.get(e2);
          f2 ? f2.push(b2) : a.a.a.get(e2) && d.push(b2);
        }
      } });
      for (e = 0; e < d.length; e++)
        y(a.a, d[e]);
      for (; 0 < b.length; ) {
        var f = b.shift();
        e = f.localName;
        f = c.get(f.localName);
        for (var t = 0; t < f.length; t++)
          y(a.a, f[t]);
        (e = a.j.get(e)) && D(e);
      }
    }
  }
  E.prototype.get = function(a) {
    if (a = this.a.a.get(a))
      return a.constructorFunction;
  };
  E.prototype.m = function(a) {
    if (!g(a))
      return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
    var b = this.j.get(a);
    if (b)
      return b.c;
    b = new ea();
    this.j.set(a, b);
    this.a.a.get(a) && !this.g.some(function(b2) {
      return b2.localName === a;
    }) && D(b);
    return b.c;
  };
  E.prototype.s = function(a) {
    C(this.o);
    var b = this.f;
    this.f = function(d) {
      return a(function() {
        return b(d);
      });
    };
  };
  window.CustomElementRegistry = E;
  E.prototype.define = E.prototype.l;
  E.prototype.upgrade = E.prototype.i;
  E.prototype.get = E.prototype.get;
  E.prototype.whenDefined = E.prototype.m;
  E.prototype.polyfillWrapFlushCallback = E.prototype.s;
  var F = window.Document.prototype.createElement, G = window.Document.prototype.createElementNS, ha = window.Document.prototype.importNode, ia = window.Document.prototype.prepend, ja = window.Document.prototype.append, ka = window.DocumentFragment.prototype.prepend, la = window.DocumentFragment.prototype.append, H = window.Node.prototype.cloneNode, I = window.Node.prototype.appendChild, J = window.Node.prototype.insertBefore, K = window.Node.prototype.removeChild, L = window.Node.prototype.replaceChild, M = Object.getOwnPropertyDescriptor(
    window.Node.prototype,
    "textContent"
  ), N = window.Element.prototype.attachShadow, O = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), P = window.Element.prototype.getAttribute, Q = window.Element.prototype.setAttribute, R = window.Element.prototype.removeAttribute, S = window.Element.prototype.getAttributeNS, T = window.Element.prototype.setAttributeNS, U = window.Element.prototype.removeAttributeNS, ma = window.Element.prototype.insertAdjacentElement, na = window.Element.prototype.insertAdjacentHTML, oa = window.Element.prototype.prepend, pa = window.Element.prototype.append, V = window.Element.prototype.before, qa = window.Element.prototype.after, ra = window.Element.prototype.replaceWith, sa = window.Element.prototype.remove, ta = window.HTMLElement, W = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), ua = window.HTMLElement.prototype.insertAdjacentElement, va = window.HTMLElement.prototype.insertAdjacentHTML;
  var wa = new function() {
  }();
  function xa() {
    var a = X;
    window.HTMLElement = function() {
      function b() {
        var b2 = this.constructor, c = a.g.get(b2);
        if (!c)
          throw Error("The custom element being constructed was not registered with `customElements`.");
        var e = c.constructionStack;
        if (0 === e.length)
          return e = F.call(document, c.localName), Object.setPrototypeOf(e, b2.prototype), e.__CE_state = 1, e.__CE_definition = c, w(a, e), e;
        c = e.length - 1;
        var f = e[c];
        if (f === wa)
          throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
        e[c] = wa;
        Object.setPrototypeOf(f, b2.prototype);
        w(a, f);
        return f;
      }
      b.prototype = ta.prototype;
      Object.defineProperty(b.prototype, "constructor", { writable: true, configurable: true, enumerable: false, value: b });
      return b;
    }();
  }
  function Y(a, b, d) {
    function c(b2) {
      return function(d2) {
        for (var e = [], c2 = 0; c2 < arguments.length; ++c2)
          e[c2] = arguments[c2];
        c2 = [];
        for (var f = [], m = 0; m < e.length; m++) {
          var q = e[m];
          q instanceof Element && l(q) && f.push(q);
          if (q instanceof DocumentFragment)
            for (q = q.firstChild; q; q = q.nextSibling)
              c2.push(q);
          else
            c2.push(q);
        }
        b2.apply(this, e);
        for (e = 0; e < f.length; e++)
          z(a, f[e]);
        if (l(this))
          for (e = 0; e < c2.length; e++)
            f = c2[e], f instanceof Element && x(a, f);
      };
    }
    void 0 !== d.h && (b.prepend = c(d.h));
    void 0 !== d.append && (b.append = c(d.append));
  }
  function ya() {
    var a = X;
    r(Document.prototype, "createElement", function(b) {
      if (this.__CE_hasRegistry) {
        var d = a.a.get(b);
        if (d)
          return new d.constructorFunction();
      }
      b = F.call(this, b);
      w(a, b);
      return b;
    });
    r(Document.prototype, "importNode", function(b, d) {
      b = ha.call(this, b, !!d);
      this.__CE_hasRegistry ? A(a, b) : v(a, b);
      return b;
    });
    r(Document.prototype, "createElementNS", function(b, d) {
      if (this.__CE_hasRegistry && (null === b || "http://www.w3.org/1999/xhtml" === b)) {
        var c = a.a.get(d);
        if (c)
          return new c.constructorFunction();
      }
      b = G.call(
        this,
        b,
        d
      );
      w(a, b);
      return b;
    });
    Y(a, Document.prototype, { h: ia, append: ja });
  }
  function za() {
    function a(a2, c) {
      Object.defineProperty(a2, "textContent", { enumerable: c.enumerable, configurable: true, get: c.get, set: function(a3) {
        if (this.nodeType === Node.TEXT_NODE)
          c.set.call(this, a3);
        else {
          var d = void 0;
          if (this.firstChild) {
            var e = this.childNodes, k = e.length;
            if (0 < k && l(this)) {
              d = Array(k);
              for (var h = 0; h < k; h++)
                d[h] = e[h];
            }
          }
          c.set.call(this, a3);
          if (d)
            for (a3 = 0; a3 < d.length; a3++)
              z(b, d[a3]);
        }
      } });
    }
    var b = X;
    r(Node.prototype, "insertBefore", function(a2, c) {
      if (a2 instanceof DocumentFragment) {
        var e = Array.prototype.slice.apply(a2.childNodes);
        a2 = J.call(this, a2, c);
        if (l(this))
          for (c = 0; c < e.length; c++)
            x(b, e[c]);
        return a2;
      }
      e = l(a2);
      c = J.call(this, a2, c);
      e && z(b, a2);
      l(this) && x(b, a2);
      return c;
    });
    r(Node.prototype, "appendChild", function(a2) {
      if (a2 instanceof DocumentFragment) {
        var c = Array.prototype.slice.apply(a2.childNodes);
        a2 = I.call(this, a2);
        if (l(this))
          for (var e = 0; e < c.length; e++)
            x(b, c[e]);
        return a2;
      }
      c = l(a2);
      e = I.call(this, a2);
      c && z(b, a2);
      l(this) && x(b, a2);
      return e;
    });
    r(Node.prototype, "cloneNode", function(a2) {
      a2 = H.call(this, !!a2);
      this.ownerDocument.__CE_hasRegistry ? A(b, a2) : v(
        b,
        a2
      );
      return a2;
    });
    r(Node.prototype, "removeChild", function(a2) {
      var c = l(a2), e = K.call(this, a2);
      c && z(b, a2);
      return e;
    });
    r(Node.prototype, "replaceChild", function(a2, c) {
      if (a2 instanceof DocumentFragment) {
        var e = Array.prototype.slice.apply(a2.childNodes);
        a2 = L.call(this, a2, c);
        if (l(this))
          for (z(b, c), c = 0; c < e.length; c++)
            x(b, e[c]);
        return a2;
      }
      e = l(a2);
      var f = L.call(this, a2, c), d = l(this);
      d && z(b, c);
      e && z(b, a2);
      d && x(b, a2);
      return f;
    });
    M && M.get ? a(Node.prototype, M) : ca(b, function(b2) {
      a(b2, { enumerable: true, configurable: true, get: function() {
        for (var a2 = [], b3 = 0; b3 < this.childNodes.length; b3++) {
          var f = this.childNodes[b3];
          f.nodeType !== Node.COMMENT_NODE && a2.push(f.textContent);
        }
        return a2.join("");
      }, set: function(a2) {
        for (; this.firstChild; )
          K.call(this, this.firstChild);
        null != a2 && "" !== a2 && I.call(this, document.createTextNode(a2));
      } });
    });
  }
  function Aa(a) {
    function b(b2) {
      return function(e) {
        for (var c = [], d2 = 0; d2 < arguments.length; ++d2)
          c[d2] = arguments[d2];
        d2 = [];
        for (var k = [], h = 0; h < c.length; h++) {
          var m = c[h];
          m instanceof Element && l(m) && k.push(m);
          if (m instanceof DocumentFragment)
            for (m = m.firstChild; m; m = m.nextSibling)
              d2.push(m);
          else
            d2.push(m);
        }
        b2.apply(this, c);
        for (c = 0; c < k.length; c++)
          z(a, k[c]);
        if (l(this))
          for (c = 0; c < d2.length; c++)
            k = d2[c], k instanceof Element && x(a, k);
      };
    }
    var d = Element.prototype;
    void 0 !== V && (d.before = b(V));
    void 0 !== V && (d.after = b(qa));
    void 0 !== ra && r(d, "replaceWith", function(b2) {
      for (var e = [], c = 0; c < arguments.length; ++c)
        e[c] = arguments[c];
      c = [];
      for (var d2 = [], k = 0; k < e.length; k++) {
        var h = e[k];
        h instanceof Element && l(h) && d2.push(h);
        if (h instanceof DocumentFragment)
          for (h = h.firstChild; h; h = h.nextSibling)
            c.push(h);
        else
          c.push(h);
      }
      k = l(this);
      ra.apply(this, e);
      for (e = 0; e < d2.length; e++)
        z(a, d2[e]);
      if (k)
        for (z(a, this), e = 0; e < c.length; e++)
          d2 = c[e], d2 instanceof Element && x(a, d2);
    });
    void 0 !== sa && r(d, "remove", function() {
      var b2 = l(this);
      sa.call(this);
      b2 && z(a, this);
    });
  }
  function Ba() {
    function a(a2, b2) {
      Object.defineProperty(a2, "innerHTML", { enumerable: b2.enumerable, configurable: true, get: b2.get, set: function(a3) {
        var e = this, d2 = void 0;
        l(this) && (d2 = [], p(this, function(a4) {
          a4 !== e && d2.push(a4);
        }));
        b2.set.call(this, a3);
        if (d2)
          for (var f = 0; f < d2.length; f++) {
            var t = d2[f];
            1 === t.__CE_state && c.disconnectedCallback(t);
          }
        this.ownerDocument.__CE_hasRegistry ? A(c, this) : v(c, this);
        return a3;
      } });
    }
    function b(a2, b2) {
      r(a2, "insertAdjacentElement", function(a3, e) {
        var d2 = l(e);
        a3 = b2.call(this, a3, e);
        d2 && z(c, e);
        l(a3) && x(c, e);
        return a3;
      });
    }
    function d(a2, b2) {
      function e(a3, b3) {
        for (var e2 = []; a3 !== b3; a3 = a3.nextSibling)
          e2.push(a3);
        for (b3 = 0; b3 < e2.length; b3++)
          A(c, e2[b3]);
      }
      r(a2, "insertAdjacentHTML", function(a3, c2) {
        a3 = a3.toLowerCase();
        if ("beforebegin" === a3) {
          var d2 = this.previousSibling;
          b2.call(this, a3, c2);
          e(d2 || this.parentNode.firstChild, this);
        } else if ("afterbegin" === a3)
          d2 = this.firstChild, b2.call(this, a3, c2), e(this.firstChild, d2);
        else if ("beforeend" === a3)
          d2 = this.lastChild, b2.call(this, a3, c2), e(d2 || this.firstChild, null);
        else if ("afterend" === a3)
          d2 = this.nextSibling, b2.call(this, a3, c2), e(
            this.nextSibling,
            d2
          );
        else
          throw new SyntaxError("The value provided (" + String(a3) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
      });
    }
    var c = X;
    N && r(Element.prototype, "attachShadow", function(a2) {
      a2 = N.call(this, a2);
      var b2 = c;
      if (b2.b && !a2.__CE_patched) {
        a2.__CE_patched = true;
        for (var e = 0; e < b2.c.length; e++)
          b2.c[e](a2);
      }
      return this.__CE_shadowRoot = a2;
    });
    O && O.get ? a(Element.prototype, O) : W && W.get ? a(HTMLElement.prototype, W) : da(c, function(b2) {
      a(b2, {
        enumerable: true,
        configurable: true,
        get: function() {
          return H.call(this, true).innerHTML;
        },
        set: function(a2) {
          var b3 = "template" === this.localName, c2 = b3 ? this.content : this, e = G.call(document, this.namespaceURI, this.localName);
          for (e.innerHTML = a2; 0 < c2.childNodes.length; )
            K.call(c2, c2.childNodes[0]);
          for (a2 = b3 ? e.content : e; 0 < a2.childNodes.length; )
            I.call(c2, a2.childNodes[0]);
        }
      });
    });
    r(Element.prototype, "setAttribute", function(a2, b2) {
      if (1 !== this.__CE_state)
        return Q.call(this, a2, b2);
      var e = P.call(this, a2);
      Q.call(this, a2, b2);
      b2 = P.call(this, a2);
      c.attributeChangedCallback(this, a2, e, b2, null);
    });
    r(Element.prototype, "setAttributeNS", function(a2, b2, d2) {
      if (1 !== this.__CE_state)
        return T.call(this, a2, b2, d2);
      var e = S.call(this, a2, b2);
      T.call(this, a2, b2, d2);
      d2 = S.call(this, a2, b2);
      c.attributeChangedCallback(this, b2, e, d2, a2);
    });
    r(Element.prototype, "removeAttribute", function(a2) {
      if (1 !== this.__CE_state)
        return R.call(this, a2);
      var b2 = P.call(this, a2);
      R.call(this, a2);
      null !== b2 && c.attributeChangedCallback(this, a2, b2, null, null);
    });
    r(Element.prototype, "removeAttributeNS", function(a2, b2) {
      if (1 !== this.__CE_state)
        return U.call(this, a2, b2);
      var d2 = S.call(this, a2, b2);
      U.call(this, a2, b2);
      var e = S.call(
        this,
        a2,
        b2
      );
      d2 !== e && c.attributeChangedCallback(this, b2, d2, e, a2);
    });
    ua ? b(HTMLElement.prototype, ua) : ma ? b(Element.prototype, ma) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");
    va ? d(HTMLElement.prototype, va) : na ? d(Element.prototype, na) : console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");
    Y(c, Element.prototype, { h: oa, append: pa });
    Aa(c);
  }
  var Z = window.customElements;
  if (!Z || Z.forcePolyfill || "function" != typeof Z.define || "function" != typeof Z.get) {
    var X = new u();
    xa();
    ya();
    Y(X, DocumentFragment.prototype, { h: ka, append: la });
    za();
    Ba();
    document.__CE_hasRegistry = true;
    var customElements = new E(X);
    Object.defineProperty(window, "customElements", { configurable: true, enumerable: true, value: customElements });
  }
}).call(self);
"string" !== typeof document.baseURI && Object.defineProperty(Document.prototype, "baseURI", { enumerable: true, configurable: true, get: function() {
  var a = document.querySelector("base");
  return a && a.href ? a.href : document.URL;
} });
"function" !== typeof window.CustomEvent && (window.CustomEvent = function(c, a) {
  a = a || { bubbles: false, cancelable: false, detail: void 0 };
  var b = document.createEvent("CustomEvent");
  b.initCustomEvent(c, a.bubbles, a.cancelable, a.detail);
  return b;
}, window.CustomEvent.prototype = window.Event.prototype);
(function(b, c, d) {
  b.composedPath || (b.composedPath = function() {
    if (this.path)
      return this.path;
    var a = this.target;
    for (this.path = []; null !== a.parentNode; )
      this.path.push(a), a = a.parentNode;
    this.path.push(c, d);
    return this.path;
  });
})(Event.prototype, document, window);
/*!
Element.closest and Element.matches
https://github.com/jonathantneal/closest
Creative Commons Zero v1.0 Universal
*/
(function(a) {
  "function" !== typeof a.matches && (a.matches = a.msMatchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || function(a2) {
    a2 = (this.document || this.ownerDocument).querySelectorAll(a2);
    for (var b = 0; a2[b] && a2[b] !== this; )
      ++b;
    return !!a2[b];
  });
  "function" !== typeof a.closest && (a.closest = function(a2) {
    for (var b = this; b && 1 === b.nodeType; ) {
      if (b.matches(a2))
        return b;
      b = b.parentNode;
    }
    return null;
  });
})(window.Element.prototype);
/*!
Element.getRootNode()
*/
(function(c) {
  function d(a) {
    a = b(a);
    return a && 11 === a.nodeType ? d(a.host) : a;
  }
  function b(a) {
    return a && a.parentNode ? b(a.parentNode) : a;
  }
  "function" !== typeof c.getRootNode && (c.getRootNode = function(a) {
    return a && a.composed ? d(this) : b(this);
  });
})(Element.prototype);
/*!
Element.isConnected()
*/
(function(a) {
  "isConnected" in a || Object.defineProperty(a, "isConnected", { configurable: true, enumerable: true, get: function() {
    var a2 = this.getRootNode({ composed: true });
    return a2 && 9 === a2.nodeType;
  } });
})(Element.prototype);
/*!
Element.remove()
*/
(function(b) {
  b.forEach(function(a) {
    a.hasOwnProperty("remove") || Object.defineProperty(a, "remove", { configurable: true, enumerable: true, writable: true, value: function() {
      null !== this.parentNode && this.parentNode.removeChild(this);
    } });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
/*!
Element.classList
*/
!function(e) {
  "classList" in e || Object.defineProperty(e, "classList", { get: function() {
    var e2 = this, t = (e2.getAttribute("class") || "").replace(/^\s+|\s$/g, "").split(/\s+/g);
    function n() {
      t.length > 0 ? e2.setAttribute("class", t.join(" ")) : e2.removeAttribute("class");
    }
    return "" === t[0] && t.splice(0, 1), t.toggle = function(e3, i) {
      void 0 !== i ? i ? t.add(e3) : t.remove(e3) : -1 !== t.indexOf(e3) ? t.splice(t.indexOf(e3), 1) : t.push(e3), n();
    }, t.add = function() {
      for (var e3 = [].slice.call(arguments), i = 0, s = e3.length; i < s; i++)
        -1 === t.indexOf(e3[i]) && t.push(e3[i]);
      n();
    }, t.remove = function() {
      for (var e3 = [].slice.call(arguments), i = 0, s = e3.length; i < s; i++)
        -1 !== t.indexOf(e3[i]) && t.splice(t.indexOf(e3[i]), 1);
      n();
    }, t.item = function(e3) {
      return t[e3];
    }, t.contains = function(e3) {
      return -1 !== t.indexOf(e3);
    }, t.replace = function(e3, i) {
      -1 !== t.indexOf(e3) && t.splice(t.indexOf(e3), 1, i), n();
    }, t.value = e2.getAttribute("class") || "", t;
  } });
}(Element.prototype);
/*!
DOMTokenList
*/
(function(b) {
  try {
    document.body.classList.add();
  } catch (e) {
    var c = b.add, d = b.remove;
    b.add = function() {
      for (var a = 0; a < arguments.length; a++)
        c.call(this, arguments[a]);
    };
    b.remove = function() {
      for (var a = 0; a < arguments.length; a++)
        d.call(this, arguments[a]);
    };
  }
})(DOMTokenList.prototype);
