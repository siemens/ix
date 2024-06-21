(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep, importerUrl);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
function applyPolyfills() {
  var promises = [];
  if (typeof window !== "undefined") {
    var win2 = window;
    if (!win2.customElements || win2.Element && (!win2.Element.prototype.closest || !win2.Element.prototype.matches || !win2.Element.prototype.remove || !win2.Element.prototype.getRootNode)) {
      promises.push(__vitePreload(() => import(
        /* webpackChunkName: "polyfills-dom" */
        "./dom.29d9f284.js"
      ), true ? [] : void 0, import.meta.url));
    }
    var checkIfURLIsSupported = function() {
      try {
        var u = new URL("b", "http://a");
        u.pathname = "c%20d";
        return u.href === "http://a/c%20d" && u.searchParams;
      } catch (e) {
        return false;
      }
    };
    if ("function" !== typeof Object.assign || !Object.entries || !Array.prototype.find || !Array.prototype.includes || !String.prototype.startsWith || !String.prototype.endsWith || win2.NodeList && !win2.NodeList.prototype.forEach || !win2.fetch || !checkIfURLIsSupported() || typeof WeakMap == "undefined") {
      promises.push(__vitePreload(() => import(
        /* webpackChunkName: "polyfills-core-js" */
        "./core-js.43980675.js"
      ), true ? [] : void 0, import.meta.url));
    }
  }
  return Promise.all(promises);
}
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const NAMESPACE = "siemens-ix";
let scopeId;
let hostTagName;
let useNativeShadowDom = false;
let isSvgMode = false;
let queuePending = false;
const createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
const uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
const CONTENT_REF_ID = "r";
const ORG_LOCATION_ID = "o";
const SLOT_NODE_ID = "s";
const TEXT_NODE_ID = "t";
const HYDRATE_ID = "s-id";
const HYDRATED_STYLE_ID = "sty-id";
const HYDRATE_CHILD_ID = "c-id";
const HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
const SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
const XLINK_NS = "http://www.w3.org/1999/xlink";
const EMPTY_OBJ = {};
const SVG_NS = "http://www.w3.org/2000/svg";
const HTML_NS = "http://www.w3.org/1999/xhtml";
const isDef = (v) => v != null;
const isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};
function queryNonceMetaTagContent(doc2) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc2.head) === null || _a === void 0 ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) === null || _b === void 0 ? void 0 : _b.getAttribute("content")) !== null && _c !== void 0 ? _c : void 0;
}
const h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i = 0; i < c.length; i++) {
      child = c[i];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  if (typeof nodeName === "function") {
    return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  return vnode;
};
const newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  return vnode;
};
const Host = {};
const isHost = (node) => node && node.$tag$ === Host;
const vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
const convertToPublic = (node) => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
const convertToPrivate = (node) => {
  if (typeof node.vtag === "function") {
    const vnodeData = Object.assign({}, node.vattrs);
    if (node.vkey) {
      vnodeData.key = node.vkey;
    }
    if (node.vname) {
      vnodeData.name = node.vname;
    }
    return h(node.vtag, vnodeData, ...node.vchildren || []);
  }
  const vnode = newVNode(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};
const initializeClientHydrate = (hostElm, tagName, hostId, hostRef) => {
  const endHydrate = createTime("hydrateClient", tagName);
  const shadowRoot = hostElm.shadowRoot;
  const childRenderNodes = [];
  const slotNodes = [];
  const shadowRootNodes = shadowRoot ? [] : null;
  const vnode = hostRef.$vnode$ = newVNode(tagName, null);
  if (!plt.$orgLocNodes$) {
    initializeDocumentHydrate(doc.body, plt.$orgLocNodes$ = /* @__PURE__ */ new Map());
  }
  hostElm[HYDRATE_ID] = hostId;
  hostElm.removeAttribute(HYDRATE_ID);
  clientHydrate(vnode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, hostElm, hostId);
  childRenderNodes.map((c) => {
    const orgLocationId = c.$hostId$ + "." + c.$nodeId$;
    const orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
    const node = c.$elm$;
    if (orgLocationNode && supportsShadow && orgLocationNode["s-en"] === "") {
      orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
    }
    if (!shadowRoot) {
      node["s-hn"] = tagName;
      if (orgLocationNode) {
        node["s-ol"] = orgLocationNode;
        node["s-ol"]["s-nr"] = node;
      }
    }
    plt.$orgLocNodes$.delete(orgLocationId);
  });
  if (shadowRoot) {
    shadowRootNodes.map((shadowRootNode) => {
      if (shadowRootNode) {
        shadowRoot.appendChild(shadowRootNode);
      }
    });
  }
  endHydrate();
};
const clientHydrate = (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId) => {
  let childNodeType;
  let childIdSplt;
  let childVNode;
  let i;
  if (node.nodeType === 1) {
    childNodeType = node.getAttribute(HYDRATE_CHILD_ID);
    if (childNodeType) {
      childIdSplt = childNodeType.split(".");
      if (childIdSplt[0] === hostId || childIdSplt[0] === "0") {
        childVNode = {
          $flags$: 0,
          $hostId$: childIdSplt[0],
          $nodeId$: childIdSplt[1],
          $depth$: childIdSplt[2],
          $index$: childIdSplt[3],
          $tag$: node.tagName.toLowerCase(),
          $elm$: node,
          $attrs$: null,
          $children$: null,
          $key$: null,
          $name$: null,
          $text$: null
        };
        childRenderNodes.push(childVNode);
        node.removeAttribute(HYDRATE_CHILD_ID);
        if (!parentVNode.$children$) {
          parentVNode.$children$ = [];
        }
        parentVNode.$children$[childVNode.$index$] = childVNode;
        parentVNode = childVNode;
        if (shadowRootNodes && childVNode.$depth$ === "0") {
          shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
        }
      }
    }
    for (i = node.childNodes.length - 1; i >= 0; i--) {
      clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.childNodes[i], hostId);
    }
    if (node.shadowRoot) {
      for (i = node.shadowRoot.childNodes.length - 1; i >= 0; i--) {
        clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.shadowRoot.childNodes[i], hostId);
      }
    }
  } else if (node.nodeType === 8) {
    childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[1] === hostId || childIdSplt[1] === "0") {
      childNodeType = childIdSplt[0];
      childVNode = {
        $flags$: 0,
        $hostId$: childIdSplt[1],
        $nodeId$: childIdSplt[2],
        $depth$: childIdSplt[3],
        $index$: childIdSplt[4],
        $elm$: node,
        $attrs$: null,
        $children$: null,
        $key$: null,
        $name$: null,
        $tag$: null,
        $text$: null
      };
      if (childNodeType === TEXT_NODE_ID) {
        childVNode.$elm$ = node.nextSibling;
        if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3) {
          childVNode.$text$ = childVNode.$elm$.textContent;
          childRenderNodes.push(childVNode);
          node.remove();
          if (!parentVNode.$children$) {
            parentVNode.$children$ = [];
          }
          parentVNode.$children$[childVNode.$index$] = childVNode;
          if (shadowRootNodes && childVNode.$depth$ === "0") {
            shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
          }
        }
      } else if (childVNode.$hostId$ === hostId) {
        if (childNodeType === SLOT_NODE_ID) {
          childVNode.$tag$ = "slot";
          if (childIdSplt[5]) {
            node["s-sn"] = childVNode.$name$ = childIdSplt[5];
          } else {
            node["s-sn"] = "";
          }
          node["s-sr"] = true;
          if (shadowRootNodes) {
            childVNode.$elm$ = doc.createElement(childVNode.$tag$);
            if (childVNode.$name$) {
              childVNode.$elm$.setAttribute("name", childVNode.$name$);
            }
            node.parentNode.insertBefore(childVNode.$elm$, node);
            node.remove();
            if (childVNode.$depth$ === "0") {
              shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
            }
          }
          slotNodes.push(childVNode);
          if (!parentVNode.$children$) {
            parentVNode.$children$ = [];
          }
          parentVNode.$children$[childVNode.$index$] = childVNode;
        } else if (childNodeType === CONTENT_REF_ID) {
          if (shadowRootNodes) {
            node.remove();
          }
        }
      }
    }
  } else if (parentVNode && parentVNode.$tag$ === "style") {
    const vnode = newVNode(null, node.textContent);
    vnode.$elm$ = node;
    vnode.$index$ = "0";
    parentVNode.$children$ = [vnode];
  }
};
const initializeDocumentHydrate = (node, orgLocNodes) => {
  if (node.nodeType === 1) {
    let i = 0;
    for (; i < node.childNodes.length; i++) {
      initializeDocumentHydrate(node.childNodes[i], orgLocNodes);
    }
    if (node.shadowRoot) {
      for (i = 0; i < node.shadowRoot.childNodes.length; i++) {
        initializeDocumentHydrate(node.shadowRoot.childNodes[i], orgLocNodes);
      }
    }
  } else if (node.nodeType === 8) {
    const childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[0] === ORG_LOCATION_ID) {
      orgLocNodes.set(childIdSplt[1] + "." + childIdSplt[2], node);
      node.nodeValue = "";
      node["s-en"] = childIdSplt[3];
    }
  }
};
const parsePropertyValue = (propValue, propType) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4) {
      return propValue === "false" ? false : propValue === "" || !!propValue;
    }
    if (propType & 2) {
      return parseFloat(propValue);
    }
    if (propType & 1) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
const getElement = (ref) => getHostRef(ref).$hostElement$;
const createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: (detail) => {
      return emitEvent(elm, name, {
        bubbles: !!(flags & 4),
        composed: !!(flags & 2),
        cancelable: !!(flags & 1),
        detail
      });
    }
  };
};
const emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
const rootAppliedStyles = /* @__PURE__ */ new WeakMap();
const registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode) => {
  var _a;
  const scopeId2 = getScopeId(cmpMeta);
  const style = styles.get(scopeId2);
  styleContainerNode = styleContainerNode.nodeType === 11 ? styleContainerNode : doc;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        if (styleContainerNode.host && (styleElm = styleContainerNode.querySelector(`[${HYDRATED_STYLE_ID}="${scopeId2}"]`))) {
          styleElm.innerHTML = style;
        } else {
          styleElm = doc.createElement("style");
          styleElm.innerHTML = style;
          const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector("link"));
        }
        if (cmpMeta.$flags$ & 4) {
          styleElm.innerHTML += SLOT_FB_CSS;
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
    }
  }
  return scopeId2;
};
const attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta);
  if (flags & 10) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
    if (flags & 2) {
      elm.classList.add(scopeId2 + "-s");
    }
  }
  endAttachStyles();
};
const getScopeId = (cmp, mode) => "sc-" + cmp.$tagName$;
const convertScopedToShadow = (css) => css.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, "$1{");
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
  if (oldValue !== newValue) {
    let isProp = isMemberInElement(elm, memberName);
    let ln = memberName.toLowerCase();
    if (memberName === "class") {
      const classList = elm.classList;
      const oldClasses = parseClassList(oldValue);
      const newClasses = parseClassList(newValue);
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    } else if (memberName === "style") {
      {
        for (const prop in oldValue) {
          if (!newValue || newValue[prop] == null) {
            if (prop.includes("-")) {
              elm.style.removeProperty(prop);
            } else {
              elm.style[prop] = "";
            }
          }
        }
      }
      for (const prop in newValue) {
        if (!oldValue || newValue[prop] !== oldValue[prop]) {
          if (prop.includes("-")) {
            elm.style.setProperty(prop, newValue[prop]);
          } else {
            elm.style[prop] = newValue[prop];
          }
        }
      }
    } else if (memberName === "key")
      ;
    else if (memberName === "ref") {
      if (newValue) {
        newValue(elm);
      }
    } else if (!isProp && memberName[0] === "o" && memberName[1] === "n") {
      if (memberName[2] === "-") {
        memberName = memberName.slice(3);
      } else if (isMemberInElement(win, ln)) {
        memberName = ln.slice(2);
      } else {
        memberName = ln[2] + memberName.slice(3);
      }
      if (oldValue || newValue) {
        const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
        memberName = memberName.replace(CAPTURE_EVENT_REGEX, "");
        if (oldValue) {
          plt.rel(elm, memberName, oldValue, capture);
        }
        if (newValue) {
          plt.ael(elm, memberName, newValue, capture);
        }
      }
    } else {
      const isComplex = isComplexType(newValue);
      if ((isProp || isComplex && newValue !== null) && !isSvg) {
        try {
          if (!elm.tagName.includes("-")) {
            const n = newValue == null ? "" : newValue;
            if (memberName === "list") {
              isProp = false;
            } else if (oldValue == null || elm[memberName] != n) {
              elm[memberName] = n;
            }
          } else {
            elm[memberName] = newValue;
          }
        } catch (e) {
        }
      }
      let xlink = false;
      {
        if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
          memberName = ln;
          xlink = true;
        }
      }
      if (newValue == null || newValue === false) {
        if (newValue !== false || elm.getAttribute(memberName) === "") {
          if (xlink) {
            elm.removeAttributeNS(XLINK_NS, memberName);
          } else {
            elm.removeAttribute(memberName);
          }
        }
      } else if ((!isProp || flags & 4 || isSvg) && !isComplex) {
        newValue = newValue === true ? "" : newValue;
        if (xlink) {
          elm.setAttributeNS(XLINK_NS, memberName, newValue);
        } else {
          elm.setAttribute(memberName, newValue);
        }
      }
    }
  }
};
const parseClassListRegex = /\s/;
const parseClassList = (value) => !value ? [] : value.split(parseClassListRegex);
const CAPTURE_EVENT_SUFFIX = "Capture";
const CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");
const updateElement = (oldVnode, newVnode, isSvgMode2, memberName) => {
  const elm = newVnode.$elm$.nodeType === 11 && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || EMPTY_OBJ;
  const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
  {
    for (memberName in oldVnodeAttrs) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode2, newVnode.$flags$);
      }
    }
  }
  for (memberName in newVnodeAttrs) {
    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode2, newVnode.$flags$);
  }
};
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i = 0;
  let elm;
  let childNode;
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = doc.createTextNode(newVNode2.$text$);
  } else {
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    elm = newVNode2.$elm$ = doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, newVNode2.$tag$);
    if (isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    if (isDef(scopeId) && elm["s-si"] !== scopeId) {
      elm.classList.add(elm["s-si"] = scopeId);
    }
    if (newVNode2.$children$) {
      for (i = 0; i < newVNode2.$children$.length; ++i) {
        childNode = createElm(oldParentVNode, newVNode2, i);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
    {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  elm["s-hn"] = hostTagName;
  return elm;
};
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        containerElm.insertBefore(childNode, before);
      }
    }
  }
};
const removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);
      if (elm) {
        elm.remove();
      }
    }
  }
};
const updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      patch(oldStartVnode, newEndVnode, isInitialRender);
      parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      patch(oldEndVnode, newStartVnode, isInitialRender);
      parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i = oldStartIdx; i <= oldEndIdx; ++i) {
          if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
            idxInOld = i;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode2, newCh, newStartIdx, newEndIdx);
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
const isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (!isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    return true;
  }
  return false;
};
const patch = (oldVNode, newVNode2, isInitialRender = false) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  if (text === null) {
    {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      if (tag === "slot" && !useNativeShadowDom)
        ;
      else {
        updateElement(oldVNode, newVNode2, isSvgMode);
      }
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (oldChildren !== null) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    }
    if (isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
const updateFallbackSlotVisibility = (elm) => {
  const childNodes = elm.childNodes;
  for (const childNode of childNodes) {
    if (childNode.nodeType === 1) {
      if (childNode["s-sr"]) {
        const slotName = childNode["s-sn"];
        childNode.hidden = false;
        for (const siblingNode of childNodes) {
          if (siblingNode !== childNode) {
            if (siblingNode["s-hn"] !== childNode["s-hn"] || slotName !== "") {
              if (siblingNode.nodeType === 1 && (slotName === siblingNode.getAttribute("slot") || slotName === siblingNode["s-sn"])) {
                childNode.hidden = true;
                break;
              }
            } else {
              if (siblingNode.nodeType === 1 || siblingNode.nodeType === 3 && siblingNode.textContent.trim() !== "") {
                childNode.hidden = true;
                break;
              }
            }
          }
        }
      }
      updateFallbackSlotVisibility(childNode);
    }
  }
};
const nullifyVNodeRefs = (vNode) => {
  {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
const renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]);
  }
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm;
  {
    scopeId = hostElm["s-sc"];
  }
  useNativeShadowDom = (cmpMeta.$flags$ & 1) !== 0;
  patch(oldVNode, rootVnode, isInitialLoad);
};
const attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    ancestorComponent["s-p"].push(new Promise((r) => hostRef.$onRenderResolve$ = r));
  }
};
const scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16;
  }
  if (hostRef.$flags$ & 4) {
    hostRef.$flags$ |= 512;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  return writeTask(dispatch);
};
const dispatchHooks = (hostRef, isInitialLoad) => {
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$;
  let maybePromise;
  if (isInitialLoad) {
    {
      hostRef.$flags$ |= 256;
      if (hostRef.$queuedListeners$) {
        hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event));
        hostRef.$queuedListeners$ = void 0;
      }
    }
    {
      maybePromise = safeCall(instance, "componentWillLoad");
    }
  }
  {
    maybePromise = enqueue(maybePromise, () => safeCall(instance, "componentWillRender"));
  }
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
const enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn) : fn();
const isPromisey = (maybePromise) => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
const updateComponent = async (hostRef, instance, isInitialLoad) => {
  var _a;
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance, elm, isInitialLoad);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = (_a = elm["s-p"]) !== null && _a !== void 0 ? _a : [];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4;
      childrenPromises.length = 0;
    }
  }
};
const callRender = (hostRef, instance, elm, isInitialLoad) => {
  try {
    instance = instance.render();
    {
      hostRef.$flags$ &= ~16;
    }
    {
      hostRef.$flags$ |= 2;
    }
    {
      {
        {
          renderVdom(hostRef, instance, isInitialLoad);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
const postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = hostRef.$lazyInstance$;
  const ancestorComponent = hostRef.$ancestorComponent$;
  {
    safeCall(instance, "componentDidRender");
  }
  if (!(hostRef.$flags$ & 64)) {
    hostRef.$flags$ |= 64;
    {
      addHydratedFlag(elm);
    }
    {
      safeCall(instance, "componentDidLoad");
    }
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    endPostUpdate();
  }
  {
    hostRef.$onInstanceResolve$(elm);
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= ~(4 | 512);
  }
};
const forceUpdate = (ref) => {
  {
    const hostRef = getHostRef(ref);
    const isConnected = hostRef.$hostElement$.isConnected;
    if (isConnected && (hostRef.$flags$ & (2 | 16)) === 2) {
      scheduleUpdate(hostRef, false);
    }
    return isConnected;
  }
};
const appDidLoad = (who) => {
  {
    addHydratedFlag(doc.documentElement);
  }
  nextTick(() => emitEvent(win, "appload", { detail: { namespace: NAMESPACE } }));
};
const safeCall = (instance, method, arg) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e);
    }
  }
  return void 0;
};
const addHydratedFlag = (elm) => elm.classList.add("hydrated");
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  const elm = hostRef.$hostElement$;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$;
  newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (instance) {
      if (cmpMeta.$watchers$ && flags & 128) {
        const watchMethods = cmpMeta.$watchers$[propName];
        if (watchMethods) {
          watchMethods.map((watchMethodName) => {
            try {
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e) {
              consoleError(e, elm);
            }
          });
        }
      }
      if ((flags & (2 | 16)) === 2) {
        scheduleUpdate(hostRef, false);
      }
    }
  }
};
const proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a;
  const prototype = Cstr.prototype;
  if (cmpMeta.$members$) {
    if (Cstr.watchers) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries(cmpMeta.$members$);
    members.map(([memberName, [memberFlags]]) => {
      if (memberFlags & 31 || flags & 2 && memberFlags & 32) {
        Object.defineProperty(prototype, memberName, {
          get() {
            return getValue(this, memberName);
          },
          set(newValue) {
            setValue(this, memberName, newValue, cmpMeta);
          },
          configurable: true,
          enumerable: true
        });
      } else if (flags & 1 && memberFlags & 64) {
        Object.defineProperty(prototype, memberName, {
          value(...args) {
            var _a2;
            const ref = getHostRef(this);
            return (_a2 = ref === null || ref === void 0 ? void 0 : ref.$onInstancePromise$) === null || _a2 === void 0 ? void 0 : _a2.then(() => {
              var _a3;
              return (_a3 = ref.$lazyInstance$) === null || _a3 === void 0 ? void 0 : _a3[memberName](...args);
            });
          }
        });
      }
    });
    if (flags & 1) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName)) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const hostRef = getHostRef(this);
            const flags2 = hostRef === null || hostRef === void 0 ? void 0 : hostRef.$flags$;
            if (flags2 && !(flags2 & 8) && flags2 & 128 && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$;
              const entry = (_a2 = cmpMeta.$watchers$) === null || _a2 === void 0 ? void 0 : _a2[attrName];
              entry === null || entry === void 0 ? void 0 : entry.forEach((callbackName) => {
                if (instance[callbackName] != null) {
                  instance[callbackName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          this[propName] = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
        });
      };
      Cstr.observedAttributes = Array.from(/* @__PURE__ */ new Set([
        ...Object.keys((_a = cmpMeta.$watchers$) !== null && _a !== void 0 ? _a : {}),
        ...members.filter(([_, m]) => m[0] & 15).map(([propName, m]) => {
          var _a2;
          const attrName = m[1] || propName;
          attrNameToPropName.set(attrName, propName);
          if (m[0] & 512) {
            (_a2 = cmpMeta.$attrsToReflect$) === null || _a2 === void 0 ? void 0 : _a2.push([propName, attrName]);
          }
          return attrName;
        })
      ]));
    }
  }
  return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId) => {
  let Cstr;
  if ((hostRef.$flags$ & 32) === 0) {
    hostRef.$flags$ |= 32;
    const bundleId = cmpMeta.$lazyBundleId$;
    if (bundleId) {
      Cstr = loadModule(cmpMeta);
      if (Cstr.then) {
        const endLoad = uniqueTime();
        Cstr = await Cstr;
        endLoad();
      }
      if (!Cstr.isProxied) {
        {
          cmpMeta.$watchers$ = Cstr.watchers;
        }
        proxyComponent(Cstr, cmpMeta, 2);
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
      {
        hostRef.$flags$ |= 8;
      }
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e);
      }
      {
        hostRef.$flags$ &= ~8;
      }
      {
        hostRef.$flags$ |= 128;
      }
      endNewInstance();
      fireConnectedCallback(hostRef.$lazyInstance$);
    } else {
      Cstr = elm.constructor;
      customElements.whenDefined(cmpMeta.$tagName$).then(() => hostRef.$flags$ |= 128);
    }
    if (Cstr.style) {
      let style = Cstr.style;
      const scopeId2 = getScopeId(cmpMeta);
      if (!styles.has(scopeId2)) {
        const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
        registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1));
        endRegisterStyles();
      }
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
};
const fireConnectedCallback = (instance) => {
  {
    safeCall(instance, "connectedCallback");
  }
};
const connectedCallback = (elm) => {
  if ((plt.$flags$ & 1) === 0) {
    const hostRef = getHostRef(elm);
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1)) {
      hostRef.$flags$ |= 1;
      let hostId;
      {
        hostId = elm.getAttribute(HYDRATE_ID);
        if (hostId) {
          if (cmpMeta.$flags$ & 1) {
            const scopeId2 = addStyle(elm.shadowRoot, cmpMeta);
            elm.classList.remove(scopeId2 + "-h", scopeId2 + "-s");
          }
          initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef);
        }
      }
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent.nodeType === 1 && ancestorComponent.hasAttribute("s-id") && ancestorComponent["s-p"] || ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
      if (hostRef === null || hostRef === void 0 ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback(hostRef.$lazyInstance$);
      } else if (hostRef === null || hostRef === void 0 ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$));
      }
    }
    endConnected();
  }
};
const disconnectInstance = (instance) => {
  {
    safeCall(instance, "disconnectedCallback");
  }
};
const disconnectedCallback = async (elm) => {
  if ((plt.$flags$ & 1) === 0) {
    const hostRef = getHostRef(elm);
    {
      if (hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
    if (hostRef === null || hostRef === void 0 ? void 0 : hostRef.$lazyInstance$) {
      disconnectInstance(hostRef.$lazyInstance$);
    } else if (hostRef === null || hostRef === void 0 ? void 0 : hostRef.$onReadyPromise$) {
      hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$));
    }
  }
};
const patchSlotAppendChild = (HostElementPrototype) => {
  HostElementPrototype.__appendChild = HostElementPrototype.appendChild;
  HostElementPrototype.appendChild = function(newChild) {
    const slotName = newChild["s-sn"] = getSlotName(newChild);
    const slotNode = getHostSlotNode(this.childNodes, slotName);
    if (slotNode) {
      const slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
      const appendAfter = slotChildNodes[slotChildNodes.length - 1];
      const insertedNode = appendAfter.parentNode.insertBefore(newChild, appendAfter.nextSibling);
      updateFallbackSlotVisibility(this);
      return insertedNode;
    }
    return this.__appendChild(newChild);
  };
};
const patchTextContent = (hostElementPrototype) => {
  const descriptor = Object.getOwnPropertyDescriptor(Node.prototype, "textContent");
  Object.defineProperty(hostElementPrototype, "__textContent", descriptor);
  {
    Object.defineProperty(hostElementPrototype, "textContent", {
      get() {
        var _a;
        const slotNode = getHostSlotNode(this.childNodes, "");
        if (((_a = slotNode === null || slotNode === void 0 ? void 0 : slotNode.nextSibling) === null || _a === void 0 ? void 0 : _a.nodeType) === 3) {
          return slotNode.nextSibling.textContent;
        } else if (slotNode) {
          return slotNode.textContent;
        } else {
          return this.__textContent;
        }
      },
      set(value) {
        var _a;
        const slotNode = getHostSlotNode(this.childNodes, "");
        if (((_a = slotNode === null || slotNode === void 0 ? void 0 : slotNode.nextSibling) === null || _a === void 0 ? void 0 : _a.nodeType) === 3) {
          slotNode.nextSibling.textContent = value;
        } else if (slotNode) {
          slotNode.textContent = value;
        } else {
          this.__textContent = value;
          const contentRefElm = this["s-cr"];
          if (contentRefElm) {
            this.insertBefore(contentRefElm, this.firstChild);
          }
        }
      }
    });
  }
};
const patchChildSlotNodes = (elm, cmpMeta) => {
  class FakeNodeList extends Array {
    item(n) {
      return this[n];
    }
  }
  if (cmpMeta.$flags$ & 8) {
    const childNodesFn = elm.__lookupGetter__("childNodes");
    Object.defineProperty(elm, "children", {
      get() {
        return this.childNodes.map((n) => n.nodeType === 1);
      }
    });
    Object.defineProperty(elm, "childElementCount", {
      get() {
        return elm.children.length;
      }
    });
    Object.defineProperty(elm, "childNodes", {
      get() {
        const childNodes = childNodesFn.call(this);
        if ((plt.$flags$ & 1) === 0 && getHostRef(this).$flags$ & 2) {
          const result = new FakeNodeList();
          for (let i = 0; i < childNodes.length; i++) {
            const slot = childNodes[i]["s-nr"];
            if (slot) {
              result.push(slot);
            }
          }
          return result;
        }
        return FakeNodeList.from(childNodes);
      }
    });
  }
};
const getSlotName = (node) => node["s-sn"] || node.nodeType === 1 && node.getAttribute("slot") || "";
const getHostSlotNode = (childNodes, slotName) => {
  let i = 0;
  let childNode;
  for (; i < childNodes.length; i++) {
    childNode = childNodes[i];
    if (childNode["s-sr"] && childNode["s-sn"] === slotName) {
      return childNode;
    }
    childNode = getHostSlotNode(childNode.childNodes, slotName);
    if (childNode) {
      return childNode;
    }
  }
  return null;
};
const getHostSlotChildNodes = (n, slotName) => {
  const childNodes = [n];
  while ((n = n.nextSibling) && n["s-sn"] === slotName) {
    childNodes.push(n);
  }
  return childNodes;
};
const bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements2 = win.customElements;
  const head = doc.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const dataStyles = /* @__PURE__ */ doc.createElement("style");
  const deferredConnectedCallbacks = [];
  const styles2 = /* @__PURE__ */ doc.querySelectorAll(`[${HYDRATED_STYLE_ID}]`);
  let appLoadFallback;
  let isBootstrapping = true;
  let i = 0;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", doc.baseURI).href;
  {
    plt.$flags$ |= 2;
  }
  {
    for (; i < styles2.length; i++) {
      registerStyle(styles2[i].getAttribute(HYDRATED_STYLE_ID), convertScopedToShadow(styles2[i].innerHTML), true);
    }
  }
  let hasSlotRelocation = false;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      var _a2;
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      if (cmpMeta.$flags$ & 4) {
        hasSlotRelocation = true;
      }
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      {
        cmpMeta.$listeners$ = compactMeta[3];
      }
      {
        cmpMeta.$attrsToReflect$ = [];
      }
      {
        cmpMeta.$watchers$ = (_a2 = compactMeta[4]) !== null && _a2 !== void 0 ? _a2 : {};
      }
      const tagName = cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        constructor(self) {
          super(self);
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1) {
            {
              {
                self.attachShadow({ mode: "open" });
              }
            }
          }
        }
        connectedCallback() {
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
        }
        componentOnReady() {
          return getHostRef(this).$onReadyPromise$;
        }
      };
      {
        {
          patchChildSlotNodes(HostElement.prototype, cmpMeta);
        }
        {
          patchSlotAppendChild(HostElement.prototype);
        }
        if (cmpMeta.$flags$ & 2) {
          patchTextContent(HostElement.prototype);
        }
      }
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
        cmpTags.push(tagName);
        customElements2.define(tagName, proxyComponent(HostElement, cmpMeta, 1));
      }
    });
  });
  if (cmpTags.length > 0) {
    if (hasSlotRelocation) {
      dataStyles.textContent += SLOT_FB_CSS;
    }
    {
      dataStyles.textContent += cmpTags + HYDRATED_CSS;
    }
    if (dataStyles.innerHTML.length) {
      dataStyles.setAttribute("data-styles", "");
      const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
      if (nonce != null) {
        dataStyles.setAttribute("nonce", nonce);
      }
      head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map((host) => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};
const Fragment = (_, children) => children;
const addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (listeners) {
    listeners.map(([flags, name, method]) => {
      const target = getHostListenerTarget(elm, flags);
      const handler = hostListenerProxy(hostRef, method);
      const opts = hostListenerOpts(flags);
      plt.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
    });
  }
};
const hostListenerProxy = (hostRef, methodName) => (ev) => {
  try {
    {
      if (hostRef.$flags$ & 256) {
        hostRef.$lazyInstance$[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    }
  } catch (e) {
    consoleError(e);
  }
};
const getHostListenerTarget = (elm, flags) => {
  if (flags & 8)
    return win;
  return elm;
};
const hostListenerOpts = (flags) => supportsListenerOptions ? {
  passive: (flags & 1) !== 0,
  capture: (flags & 2) !== 0
} : (flags & 2) !== 0;
const hostRefs = /* @__PURE__ */ new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
const registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  }
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  addHostEventListeners(hostElement, hostRef, cmpMeta.$listeners$);
  return hostRefs.set(hostElement, hostRef);
};
const isMemberInElement = (elm, memberName) => memberName in elm;
const consoleError = (e, el) => (0, console.error)(e, el);
const cmpModules = /* @__PURE__ */ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  const module = cmpModules.get(bundleId);
  if (module) {
    return module[exportName];
  }
  if (!hmrVersionId || !BUILD.hotModuleReplacement) {
    const processMod = (importedModule) => {
      cmpModules.set(bundleId, importedModule);
      return importedModule[exportName];
    };
    switch (bundleId) {
      case "ix-playground-internal":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-playground-internal.entry.14acfd5f.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-action-card":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-action-card.entry.d6852682.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-application":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-application.entry.6bca610d.js"
        ), true ? ["./ix-application.entry.6bca610d.js","./context-c9078420.56584faa.js","./typed-event-ad6484c5.eb731a3b.js","./service-02cc9011.c0252da5.js","./breakpoints-d5c2f627.f0d6212d.js","./menu-service-f974814b.d8879f58.js","./shadow-dom-60e9243d.05aee9aa.js","./theme-switcher-b10fb4da.be4a72f4.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-application-sidebar":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-application-sidebar.entry.31b8edbd.js"
        ), true ? ["./ix-application-sidebar.entry.31b8edbd.js","./anime.es-a5520566.eae0a8f1.js","./animation-4a73b1c3.59b7eda0.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-application-switch-modal":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-application-switch-modal.entry.7c6a75a4.js"
        ), true ? ["./ix-application-switch-modal.entry.7c6a75a4.js","./animation-4a73b1c3.59b7eda0.js","./modal-54740f80.103c72e0.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-basic-navigation":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-basic-navigation.entry.e46c45db.js"
        ), true ? ["./ix-basic-navigation.entry.e46c45db.js","./context-c9078420.56584faa.js","./typed-event-ad6484c5.eb731a3b.js","./service-02cc9011.c0252da5.js","./breakpoints-d5c2f627.f0d6212d.js","./menu-service-f974814b.d8879f58.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-blind":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-blind.entry.a06cec8b.js"
        ), true ? ["./ix-blind.entry.a06cec8b.js","./anime.es-a5520566.eae0a8f1.js","./a11y-d5444a76.05d6fe5e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-breadcrumb":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-breadcrumb.entry.892c89e1.js"
        ), true ? ["./ix-breadcrumb.entry.892c89e1.js","./a11y-d5444a76.05d6fe5e.js","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-card-list":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-card-list.entry.1ddf928f.js"
        ), true ? ["./ix-card-list.entry.1ddf928f.js","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-category-filter":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-category-filter.entry.6b6a245f.js"
        ), true ? ["./ix-category-filter.entry.6b6a245f.js","./base-button-a1f04cd1.82f1d146.js","./logical-filter-operator-f6701df5.246c3a20.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-chip":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-chip.entry.b7bba143.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-content":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-content.entry.1d7853b9.js"
        ), true ? ["./ix-content.entry.1d7853b9.js","./shadow-dom-60e9243d.05aee9aa.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-content-header":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-content-header.entry.3936298c.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-css-grid":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-css-grid.entry.c1aa71ff.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-css-grid-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-css-grid-item.entry.31c657e3.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-date-dropdown":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-date-dropdown.entry.90d62beb.js"
        ), true ? ["./ix-date-dropdown.entry.90d62beb.js","./luxon-aa110584.36a0b316.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-datetime-picker":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-datetime-picker.entry.4cb7f4af.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-drawer":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-drawer.entry.db181bdf.js"
        ), true ? ["./ix-drawer.entry.db181bdf.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-dropdown-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-dropdown-button.entry.a49fc3b6.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-dropdown-header":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-dropdown-header.entry.a787d704.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-dropdown-quick-actions":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-dropdown-quick-actions.entry.c1895035.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-empty-state":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-empty-state.entry.fb956967.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-event-list":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-event-list.entry.c7a5f4f2.js"
        ), true ? ["./ix-event-list.entry.c7a5f4f2.js","./mutation-observer-db8757e6.4a24be36.js","./rwd.util-d8e00a88.087cdec0.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-event-list-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-event-list-item.entry.9e3d506f.js"
        ), true ? ["./ix-event-list-item.entry.9e3d506f.js","./a11y-d5444a76.05d6fe5e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-expanding-search":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-expanding-search.entry.86b6e1df.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-flip-tile":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-flip-tile.entry.4649390c.js"
        ), true ? ["./ix-flip-tile.entry.4649390c.js","./mutation-observer-db8757e6.4a24be36.js","./flip-tile-state-76dd224a.ffe63233.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-flip-tile-content":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-flip-tile-content.entry.e97f80f0.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-form-field":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-form-field.entry.72c5c80e.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-group":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-group.entry.7a9a7ecb.js"
        ), true ? ["./ix-group.entry.7a9a7ecb.js","./mutation-observer-db8757e6.4a24be36.js","./shadow-dom-60e9243d.05aee9aa.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-icon-toggle-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-icon-toggle-button.entry.32f2769a.js"
        ), true ? ["./ix-icon-toggle-button.entry.32f2769a.js","./base-icon-button-368f0241.2161a721.js","./base-button-a1f04cd1.82f1d146.js","./a11y-d5444a76.05d6fe5e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-input-group":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-input-group.entry.a2419aea.js"
        ), true ? ["./ix-input-group.entry.a2419aea.js","./shadow-dom-60e9243d.05aee9aa.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-key-value":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-key-value.entry.a0a680af.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-key-value-list":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-key-value-list.entry.f772e830.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-kpi":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-kpi.entry.5deeea84.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-link-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-link-button.entry.d2302200.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-map-navigation":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-map-navigation.entry.0fffef57.js"
        ), true ? ["./ix-map-navigation.entry.0fffef57.js","./anime.es-a5520566.eae0a8f1.js","./context-c9078420.56584faa.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu.entry.a8fa080b.js"
        ), true ? ["./ix-menu.entry.a8fa080b.js","./anime.es-a5520566.eae0a8f1.js","./index-76b9c8de.7f9dd1e6.js","./animation-4a73b1c3.59b7eda0.js","./modal-54740f80.103c72e0.js","./typed-event-ad6484c5.eb731a3b.js","./context-c9078420.56584faa.js","./service-02cc9011.c0252da5.js","./breakpoints-d5c2f627.f0d6212d.js","./menu-service-f974814b.d8879f58.js","./rwd.util-d8e00a88.087cdec0.js","./theme-switcher-b10fb4da.be4a72f4.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu-about":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu-about.entry.fef79649.js"
        ), true ? ["./ix-menu-about.entry.fef79649.js","./menu-tabs-fc-60ff0221.cb9b2f40.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu-about-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu-about-item.entry.0fd6f980.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu-about-news":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu-about-news.entry.7b252549.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu-avatar":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu-avatar.entry.f06c99ab.js"
        ), true ? ["./ix-menu-avatar.entry.f06c99ab.js","./shadow-dom-60e9243d.05aee9aa.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu-category":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu-category.entry.a81b7208.js"
        ), true ? ["./ix-menu-category.entry.a81b7208.js","./anime.es-a5520566.eae0a8f1.js","./context-c9078420.56584faa.js","./typed-event-ad6484c5.eb731a3b.js","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu-settings":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu-settings.entry.efa391bf.js"
        ), true ? ["./ix-menu-settings.entry.efa391bf.js","./menu-tabs-fc-60ff0221.cb9b2f40.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu-settings-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu-settings-item.entry.27400064.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-message-bar":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-message-bar.entry.1bbe6e41.js"
        ), true ? ["./ix-message-bar.entry.1bbe6e41.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-modal":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-modal.entry.9e83de88.js"
        ), true ? ["./ix-modal.entry.9e83de88.js","./anime.es-a5520566.eae0a8f1.js","./a11y-d5444a76.05d6fe5e.js","./animation-4a73b1c3.59b7eda0.js","./listener-2d09646e.b9f986e6.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-modal-example":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-modal-example.entry.efd16365.js"
        ), true ? ["./ix-modal-example.entry.efd16365.js","./animation-4a73b1c3.59b7eda0.js","./modal-54740f80.103c72e0.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-modal-footer":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-modal-footer.entry.83005109.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-modal-loading":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-modal-loading.entry.a6c8dd62.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-pagination":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-pagination.entry.e84d642a.js"
        ), true ? ["./ix-pagination.entry.e84d642a.js","./base-button-a1f04cd1.82f1d146.js","./a11y-d5444a76.05d6fe5e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-pane":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-pane.entry.38885579.js"
        ), true ? ["./ix-pane.entry.38885579.js","./anime.es-a5520566.eae0a8f1.js","./animation-4a73b1c3.59b7eda0.js","./service-02cc9011.c0252da5.js","./breakpoints-d5c2f627.f0d6212d.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-pane-layout":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-pane-layout.entry.0c0d3bd1.js"
        ), true ? ["./ix-pane-layout.entry.0c0d3bd1.js","./service-02cc9011.c0252da5.js","./breakpoints-d5c2f627.f0d6212d.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-pill":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-pill.entry.ae7c3982.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-push-card":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-push-card.entry.68d546d1.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-slider":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-slider.entry.f9d4e00c.js"
        ), true ? ["./ix-slider.entry.f9d4e00c.js","./a11y-d5444a76.05d6fe5e.js","./listener-2d09646e.b9f986e6.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-split-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-split-button.entry.48ad6358.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-split-button-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-split-button-item.entry.f62f2d8f.js"
        ), true ? ["./ix-split-button-item.entry.f62f2d8f.js","./make-ref-c80046bf.a5245335.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-tile":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-tile.entry.bb9fa185.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-toast-container":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-toast-container.entry.7c99d6c8.js"
        ), true ? ["./ix-toast-container.entry.7c99d6c8.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-toggle":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-toggle.entry.2230a46b.js"
        ), true ? ["./ix-toggle.entry.2230a46b.js","./a11y-d5444a76.05d6fe5e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-toggle-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-toggle-button.entry.a451609b.js"
        ), true ? ["./ix-toggle-button.entry.a451609b.js","./base-button-a1f04cd1.82f1d146.js","./a11y-d5444a76.05d6fe5e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-tree":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-tree.entry.db8ac91f.js"
        ), true ? ["./ix-tree.entry.db8ac91f.js","./_commonjsHelpers-e557d4a5.97812a83.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-upload":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-upload.entry.02ec78bf.js"
        ), true ? ["./ix-upload.entry.02ec78bf.js","./upload-file-state-de676cd5.96d9c6b3.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-validation-tooltip":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-validation-tooltip.entry.9f74a39c.js"
        ), true ? ["./ix-validation-tooltip.entry.9f74a39c.js","./floating-ui.dom.esm-6e7c098f.28127179.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-workflow-step":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-workflow-step.entry.24bc8af8.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-workflow-steps":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-workflow-steps.entry.010b7b86.js"
        ), true ? ["./ix-workflow-steps.entry.010b7b86.js","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-avatar_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-avatar_2.entry.f69fbdaf.js"
        ), true ? ["./ix-avatar_2.entry.f69fbdaf.js","./base-button-a1f04cd1.82f1d146.js","./shadow-dom-60e9243d.05aee9aa.js","./make-ref-c80046bf.a5245335.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-breadcrumb-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-breadcrumb-item.entry.b11985db.js"
        ), true ? ["./ix-breadcrumb-item.entry.b11985db.js","./anime.es-a5520566.eae0a8f1.js","./base-button-a1f04cd1.82f1d146.js","./a11y-d5444a76.05d6fe5e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-card-accordion_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-card-accordion_2.entry.b663a162.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-group-context-menu_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-group-context-menu_2.entry.84ace551.js"
        ), true ? ["./ix-group-context-menu_2.entry.84ace551.js","./shadow-dom-60e9243d.05aee9aa.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-map-navigation-overlay":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-map-navigation-overlay.entry.952ef0a8.js"
        ), true ? ["./ix-map-navigation-overlay.entry.952ef0a8.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-modal-content_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-modal-content_2.entry.15c7f1c5.js"
        ), true ? ["./ix-modal-content_2.entry.15c7f1c5.js","./shadow-dom-60e9243d.05aee9aa.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-select":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-select.entry.82360898.js"
        ), true ? ["./ix-select.entry.82360898.js","./focus-d4d3abaf.e4140cbf.js","./listener-2d09646e.b9f986e6.js","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-time-picker":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-time-picker.entry.de05c88d.js"
        ), true ? ["./ix-time-picker.entry.de05c88d.js","./luxon-aa110584.36a0b316.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-toast":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-toast.entry.4713829e.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-tree-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-tree-item.entry.3b643ef9.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-application-header":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-application-header.entry.2ff543fc.js"
        ), true ? ["./ix-application-header.entry.2ff543fc.js","./index-76b9c8de.7f9dd1e6.js","./animation-4a73b1c3.59b7eda0.js","./modal-54740f80.103c72e0.js","./typed-event-ad6484c5.eb731a3b.js","./service-02cc9011.c0252da5.js","./breakpoints-d5c2f627.f0d6212d.js","./context-c9078420.56584faa.js","./menu-service-f974814b.d8879f58.js","./shadow-dom-60e9243d.05aee9aa.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-col_4":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-col_4.entry.c18582d8.js"
        ), true ? ["./ix-col_4.entry.c18582d8.js","./breakpoints-d5c2f627.f0d6212d.js","./luxon-aa110584.36a0b316.js","./listener-2d09646e.b9f986e6.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu-item.entry.eafb2386.js"
        ), true ? ["./ix-menu-item.entry.eafb2386.js","./mutation-observer-db8757e6.4a24be36.js","./make-ref-c80046bf.a5245335.js","./menu-service-f974814b.d8879f58.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-filter-chip_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-filter-chip_2.entry.ab4e7fde.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-tab-item_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-tab-item_2.entry.ef0f1507.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-card_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-card_2.entry.bf3b3503.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-divider":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-divider.entry.1da32b91.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-date-time-card":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-date-time-card.entry.d205fdd1.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu-expand-icon":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu-expand-icon.entry.f9b41582.js"
        ), true ? ["./ix-menu-expand-icon.entry.f9b41582.js","./base-button-a1f04cd1.82f1d146.js","./a11y-d5444a76.05d6fe5e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-tooltip":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-tooltip.entry.eb0ca800.js"
        ), true ? ["./ix-tooltip.entry.eb0ca800.js","./floating-ui.dom.esm-6e7c098f.28127179.js","./listener-2d09646e.b9f986e6.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-dropdown-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-dropdown-item.entry.7dd66d62.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-button.entry.dae08f61.js"
        ), true ? ["./ix-button.entry.dae08f61.js","./base-button-a1f04cd1.82f1d146.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-dropdown":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-dropdown.entry.ec0161b7.js"
        ), true ? ["./ix-dropdown.entry.ec0161b7.js","./floating-ui.dom.esm-6e7c098f.28127179.js","./focus-d4d3abaf.e4140cbf.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-typography":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-typography.entry.acc70afc.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-icon-button_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-icon-button_2.entry.023837d1.js"
        ), true ? ["./ix-icon-button_2.entry.023837d1.js","./base-icon-button-368f0241.2161a721.js","./base-button-a1f04cd1.82f1d146.js","./a11y-d5444a76.05d6fe5e.js"] : void 0, import.meta.url).then(processMod, consoleError);
    }
  }
  return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./ix-action-card.entry.js": () => __vitePreload(() => import("./ix-action-card.entry.d6852682.js"), true ? [] : void 0, import.meta.url), "./ix-application-header.entry.js": () => __vitePreload(() => import("./ix-application-header.entry.2ff543fc.js"), true ? ["./ix-application-header.entry.2ff543fc.js","./index-76b9c8de.7f9dd1e6.js","./animation-4a73b1c3.59b7eda0.js","./modal-54740f80.103c72e0.js","./typed-event-ad6484c5.eb731a3b.js","./service-02cc9011.c0252da5.js","./breakpoints-d5c2f627.f0d6212d.js","./context-c9078420.56584faa.js","./menu-service-f974814b.d8879f58.js","./shadow-dom-60e9243d.05aee9aa.js"] : void 0, import.meta.url), "./ix-application-sidebar.entry.js": () => __vitePreload(() => import("./ix-application-sidebar.entry.31b8edbd.js"), true ? ["./ix-application-sidebar.entry.31b8edbd.js","./anime.es-a5520566.eae0a8f1.js","./animation-4a73b1c3.59b7eda0.js"] : void 0, import.meta.url), "./ix-application-switch-modal.entry.js": () => __vitePreload(() => import("./ix-application-switch-modal.entry.7c6a75a4.js"), true ? ["./ix-application-switch-modal.entry.7c6a75a4.js","./animation-4a73b1c3.59b7eda0.js","./modal-54740f80.103c72e0.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url), "./ix-application.entry.js": () => __vitePreload(() => import("./ix-application.entry.6bca610d.js"), true ? ["./ix-application.entry.6bca610d.js","./context-c9078420.56584faa.js","./typed-event-ad6484c5.eb731a3b.js","./service-02cc9011.c0252da5.js","./breakpoints-d5c2f627.f0d6212d.js","./menu-service-f974814b.d8879f58.js","./shadow-dom-60e9243d.05aee9aa.js","./theme-switcher-b10fb4da.be4a72f4.js"] : void 0, import.meta.url), "./ix-avatar_2.entry.js": () => __vitePreload(() => import("./ix-avatar_2.entry.f69fbdaf.js"), true ? ["./ix-avatar_2.entry.f69fbdaf.js","./base-button-a1f04cd1.82f1d146.js","./shadow-dom-60e9243d.05aee9aa.js","./make-ref-c80046bf.a5245335.js"] : void 0, import.meta.url), "./ix-basic-navigation.entry.js": () => __vitePreload(() => import("./ix-basic-navigation.entry.e46c45db.js"), true ? ["./ix-basic-navigation.entry.e46c45db.js","./context-c9078420.56584faa.js","./typed-event-ad6484c5.eb731a3b.js","./service-02cc9011.c0252da5.js","./breakpoints-d5c2f627.f0d6212d.js","./menu-service-f974814b.d8879f58.js"] : void 0, import.meta.url), "./ix-blind.entry.js": () => __vitePreload(() => import("./ix-blind.entry.a06cec8b.js"), true ? ["./ix-blind.entry.a06cec8b.js","./anime.es-a5520566.eae0a8f1.js","./a11y-d5444a76.05d6fe5e.js"] : void 0, import.meta.url), "./ix-breadcrumb-item.entry.js": () => __vitePreload(() => import("./ix-breadcrumb-item.entry.b11985db.js"), true ? ["./ix-breadcrumb-item.entry.b11985db.js","./anime.es-a5520566.eae0a8f1.js","./base-button-a1f04cd1.82f1d146.js","./a11y-d5444a76.05d6fe5e.js"] : void 0, import.meta.url), "./ix-breadcrumb.entry.js": () => __vitePreload(() => import("./ix-breadcrumb.entry.892c89e1.js"), true ? ["./ix-breadcrumb.entry.892c89e1.js","./a11y-d5444a76.05d6fe5e.js","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url), "./ix-button.entry.js": () => __vitePreload(() => import("./ix-button.entry.dae08f61.js"), true ? ["./ix-button.entry.dae08f61.js","./base-button-a1f04cd1.82f1d146.js"] : void 0, import.meta.url), "./ix-card-accordion_2.entry.js": () => __vitePreload(() => import("./ix-card-accordion_2.entry.b663a162.js"), true ? [] : void 0, import.meta.url), "./ix-card-list.entry.js": () => __vitePreload(() => import("./ix-card-list.entry.1ddf928f.js"), true ? ["./ix-card-list.entry.1ddf928f.js","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url), "./ix-card_2.entry.js": () => __vitePreload(() => import("./ix-card_2.entry.bf3b3503.js"), true ? [] : void 0, import.meta.url), "./ix-category-filter.entry.js": () => __vitePreload(() => import("./ix-category-filter.entry.6b6a245f.js"), true ? ["./ix-category-filter.entry.6b6a245f.js","./base-button-a1f04cd1.82f1d146.js","./logical-filter-operator-f6701df5.246c3a20.js"] : void 0, import.meta.url), "./ix-chip.entry.js": () => __vitePreload(() => import("./ix-chip.entry.b7bba143.js"), true ? [] : void 0, import.meta.url), "./ix-col_4.entry.js": () => __vitePreload(() => import("./ix-col_4.entry.c18582d8.js"), true ? ["./ix-col_4.entry.c18582d8.js","./breakpoints-d5c2f627.f0d6212d.js","./luxon-aa110584.36a0b316.js","./listener-2d09646e.b9f986e6.js"] : void 0, import.meta.url), "./ix-content-header.entry.js": () => __vitePreload(() => import("./ix-content-header.entry.3936298c.js"), true ? [] : void 0, import.meta.url), "./ix-content.entry.js": () => __vitePreload(() => import("./ix-content.entry.1d7853b9.js"), true ? ["./ix-content.entry.1d7853b9.js","./shadow-dom-60e9243d.05aee9aa.js"] : void 0, import.meta.url), "./ix-css-grid-item.entry.js": () => __vitePreload(() => import("./ix-css-grid-item.entry.31c657e3.js"), true ? [] : void 0, import.meta.url), "./ix-css-grid.entry.js": () => __vitePreload(() => import("./ix-css-grid.entry.c1aa71ff.js"), true ? [] : void 0, import.meta.url), "./ix-date-dropdown.entry.js": () => __vitePreload(() => import("./ix-date-dropdown.entry.90d62beb.js"), true ? ["./ix-date-dropdown.entry.90d62beb.js","./luxon-aa110584.36a0b316.js"] : void 0, import.meta.url), "./ix-date-time-card.entry.js": () => __vitePreload(() => import("./ix-date-time-card.entry.d205fdd1.js"), true ? [] : void 0, import.meta.url), "./ix-datetime-picker.entry.js": () => __vitePreload(() => import("./ix-datetime-picker.entry.4cb7f4af.js"), true ? [] : void 0, import.meta.url), "./ix-divider.entry.js": () => __vitePreload(() => import("./ix-divider.entry.1da32b91.js"), true ? [] : void 0, import.meta.url), "./ix-drawer.entry.js": () => __vitePreload(() => import("./ix-drawer.entry.db181bdf.js"), true ? ["./ix-drawer.entry.db181bdf.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url), "./ix-dropdown-button.entry.js": () => __vitePreload(() => import("./ix-dropdown-button.entry.a49fc3b6.js"), true ? [] : void 0, import.meta.url), "./ix-dropdown-header.entry.js": () => __vitePreload(() => import("./ix-dropdown-header.entry.a787d704.js"), true ? [] : void 0, import.meta.url), "./ix-dropdown-item.entry.js": () => __vitePreload(() => import("./ix-dropdown-item.entry.7dd66d62.js"), true ? [] : void 0, import.meta.url), "./ix-dropdown-quick-actions.entry.js": () => __vitePreload(() => import("./ix-dropdown-quick-actions.entry.c1895035.js"), true ? [] : void 0, import.meta.url), "./ix-dropdown.entry.js": () => __vitePreload(() => import("./ix-dropdown.entry.ec0161b7.js"), true ? ["./ix-dropdown.entry.ec0161b7.js","./floating-ui.dom.esm-6e7c098f.28127179.js","./focus-d4d3abaf.e4140cbf.js"] : void 0, import.meta.url), "./ix-empty-state.entry.js": () => __vitePreload(() => import("./ix-empty-state.entry.fb956967.js"), true ? [] : void 0, import.meta.url), "./ix-event-list-item.entry.js": () => __vitePreload(() => import("./ix-event-list-item.entry.9e3d506f.js"), true ? ["./ix-event-list-item.entry.9e3d506f.js","./a11y-d5444a76.05d6fe5e.js"] : void 0, import.meta.url), "./ix-event-list.entry.js": () => __vitePreload(() => import("./ix-event-list.entry.c7a5f4f2.js"), true ? ["./ix-event-list.entry.c7a5f4f2.js","./mutation-observer-db8757e6.4a24be36.js","./rwd.util-d8e00a88.087cdec0.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url), "./ix-expanding-search.entry.js": () => __vitePreload(() => import("./ix-expanding-search.entry.86b6e1df.js"), true ? [] : void 0, import.meta.url), "./ix-filter-chip_2.entry.js": () => __vitePreload(() => import("./ix-filter-chip_2.entry.ab4e7fde.js"), true ? [] : void 0, import.meta.url), "./ix-flip-tile-content.entry.js": () => __vitePreload(() => import("./ix-flip-tile-content.entry.e97f80f0.js"), true ? [] : void 0, import.meta.url), "./ix-flip-tile.entry.js": () => __vitePreload(() => import("./ix-flip-tile.entry.4649390c.js"), true ? ["./ix-flip-tile.entry.4649390c.js","./mutation-observer-db8757e6.4a24be36.js","./flip-tile-state-76dd224a.ffe63233.js"] : void 0, import.meta.url), "./ix-form-field.entry.js": () => __vitePreload(() => import("./ix-form-field.entry.72c5c80e.js"), true ? [] : void 0, import.meta.url), "./ix-group-context-menu_2.entry.js": () => __vitePreload(() => import("./ix-group-context-menu_2.entry.84ace551.js"), true ? ["./ix-group-context-menu_2.entry.84ace551.js","./shadow-dom-60e9243d.05aee9aa.js"] : void 0, import.meta.url), "./ix-group.entry.js": () => __vitePreload(() => import("./ix-group.entry.7a9a7ecb.js"), true ? ["./ix-group.entry.7a9a7ecb.js","./mutation-observer-db8757e6.4a24be36.js","./shadow-dom-60e9243d.05aee9aa.js"] : void 0, import.meta.url), "./ix-icon-button_2.entry.js": () => __vitePreload(() => import("./ix-icon-button_2.entry.023837d1.js"), true ? ["./ix-icon-button_2.entry.023837d1.js","./base-icon-button-368f0241.2161a721.js","./base-button-a1f04cd1.82f1d146.js","./a11y-d5444a76.05d6fe5e.js"] : void 0, import.meta.url), "./ix-icon-toggle-button.entry.js": () => __vitePreload(() => import("./ix-icon-toggle-button.entry.32f2769a.js"), true ? ["./ix-icon-toggle-button.entry.32f2769a.js","./base-icon-button-368f0241.2161a721.js","./base-button-a1f04cd1.82f1d146.js","./a11y-d5444a76.05d6fe5e.js"] : void 0, import.meta.url), "./ix-input-group.entry.js": () => __vitePreload(() => import("./ix-input-group.entry.a2419aea.js"), true ? ["./ix-input-group.entry.a2419aea.js","./shadow-dom-60e9243d.05aee9aa.js"] : void 0, import.meta.url), "./ix-key-value-list.entry.js": () => __vitePreload(() => import("./ix-key-value-list.entry.f772e830.js"), true ? [] : void 0, import.meta.url), "./ix-key-value.entry.js": () => __vitePreload(() => import("./ix-key-value.entry.a0a680af.js"), true ? [] : void 0, import.meta.url), "./ix-kpi.entry.js": () => __vitePreload(() => import("./ix-kpi.entry.5deeea84.js"), true ? [] : void 0, import.meta.url), "./ix-link-button.entry.js": () => __vitePreload(() => import("./ix-link-button.entry.d2302200.js"), true ? [] : void 0, import.meta.url), "./ix-map-navigation-overlay.entry.js": () => __vitePreload(() => import("./ix-map-navigation-overlay.entry.952ef0a8.js"), true ? ["./ix-map-navigation-overlay.entry.952ef0a8.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url), "./ix-map-navigation.entry.js": () => __vitePreload(() => import("./ix-map-navigation.entry.0fffef57.js"), true ? ["./ix-map-navigation.entry.0fffef57.js","./anime.es-a5520566.eae0a8f1.js","./context-c9078420.56584faa.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url), "./ix-menu-about-item.entry.js": () => __vitePreload(() => import("./ix-menu-about-item.entry.0fd6f980.js"), true ? [] : void 0, import.meta.url), "./ix-menu-about-news.entry.js": () => __vitePreload(() => import("./ix-menu-about-news.entry.7b252549.js"), true ? [] : void 0, import.meta.url), "./ix-menu-about.entry.js": () => __vitePreload(() => import("./ix-menu-about.entry.fef79649.js"), true ? ["./ix-menu-about.entry.fef79649.js","./menu-tabs-fc-60ff0221.cb9b2f40.js"] : void 0, import.meta.url), "./ix-menu-avatar.entry.js": () => __vitePreload(() => import("./ix-menu-avatar.entry.f06c99ab.js"), true ? ["./ix-menu-avatar.entry.f06c99ab.js","./shadow-dom-60e9243d.05aee9aa.js"] : void 0, import.meta.url), "./ix-menu-category.entry.js": () => __vitePreload(() => import("./ix-menu-category.entry.a81b7208.js"), true ? ["./ix-menu-category.entry.a81b7208.js","./anime.es-a5520566.eae0a8f1.js","./context-c9078420.56584faa.js","./typed-event-ad6484c5.eb731a3b.js","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url), "./ix-menu-expand-icon.entry.js": () => __vitePreload(() => import("./ix-menu-expand-icon.entry.f9b41582.js"), true ? ["./ix-menu-expand-icon.entry.f9b41582.js","./base-button-a1f04cd1.82f1d146.js","./a11y-d5444a76.05d6fe5e.js"] : void 0, import.meta.url), "./ix-menu-item.entry.js": () => __vitePreload(() => import("./ix-menu-item.entry.eafb2386.js"), true ? ["./ix-menu-item.entry.eafb2386.js","./mutation-observer-db8757e6.4a24be36.js","./make-ref-c80046bf.a5245335.js","./menu-service-f974814b.d8879f58.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url), "./ix-menu-settings-item.entry.js": () => __vitePreload(() => import("./ix-menu-settings-item.entry.27400064.js"), true ? [] : void 0, import.meta.url), "./ix-menu-settings.entry.js": () => __vitePreload(() => import("./ix-menu-settings.entry.efa391bf.js"), true ? ["./ix-menu-settings.entry.efa391bf.js","./menu-tabs-fc-60ff0221.cb9b2f40.js"] : void 0, import.meta.url), "./ix-menu.entry.js": () => __vitePreload(() => import("./ix-menu.entry.a8fa080b.js"), true ? ["./ix-menu.entry.a8fa080b.js","./anime.es-a5520566.eae0a8f1.js","./index-76b9c8de.7f9dd1e6.js","./animation-4a73b1c3.59b7eda0.js","./modal-54740f80.103c72e0.js","./typed-event-ad6484c5.eb731a3b.js","./context-c9078420.56584faa.js","./service-02cc9011.c0252da5.js","./breakpoints-d5c2f627.f0d6212d.js","./menu-service-f974814b.d8879f58.js","./rwd.util-d8e00a88.087cdec0.js","./theme-switcher-b10fb4da.be4a72f4.js"] : void 0, import.meta.url), "./ix-message-bar.entry.js": () => __vitePreload(() => import("./ix-message-bar.entry.1bbe6e41.js"), true ? ["./ix-message-bar.entry.1bbe6e41.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url), "./ix-modal-content_2.entry.js": () => __vitePreload(() => import("./ix-modal-content_2.entry.15c7f1c5.js"), true ? ["./ix-modal-content_2.entry.15c7f1c5.js","./shadow-dom-60e9243d.05aee9aa.js"] : void 0, import.meta.url), "./ix-modal-example.entry.js": () => __vitePreload(() => import("./ix-modal-example.entry.efd16365.js"), true ? ["./ix-modal-example.entry.efd16365.js","./animation-4a73b1c3.59b7eda0.js","./modal-54740f80.103c72e0.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url), "./ix-modal-footer.entry.js": () => __vitePreload(() => import("./ix-modal-footer.entry.83005109.js"), true ? [] : void 0, import.meta.url), "./ix-modal-loading.entry.js": () => __vitePreload(() => import("./ix-modal-loading.entry.a6c8dd62.js"), true ? [] : void 0, import.meta.url), "./ix-modal.entry.js": () => __vitePreload(() => import("./ix-modal.entry.9e83de88.js"), true ? ["./ix-modal.entry.9e83de88.js","./anime.es-a5520566.eae0a8f1.js","./a11y-d5444a76.05d6fe5e.js","./animation-4a73b1c3.59b7eda0.js","./listener-2d09646e.b9f986e6.js"] : void 0, import.meta.url), "./ix-pagination.entry.js": () => __vitePreload(() => import("./ix-pagination.entry.e84d642a.js"), true ? ["./ix-pagination.entry.e84d642a.js","./base-button-a1f04cd1.82f1d146.js","./a11y-d5444a76.05d6fe5e.js"] : void 0, import.meta.url), "./ix-pane-layout.entry.js": () => __vitePreload(() => import("./ix-pane-layout.entry.0c0d3bd1.js"), true ? ["./ix-pane-layout.entry.0c0d3bd1.js","./service-02cc9011.c0252da5.js","./breakpoints-d5c2f627.f0d6212d.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url), "./ix-pane.entry.js": () => __vitePreload(() => import("./ix-pane.entry.38885579.js"), true ? ["./ix-pane.entry.38885579.js","./anime.es-a5520566.eae0a8f1.js","./animation-4a73b1c3.59b7eda0.js","./service-02cc9011.c0252da5.js","./breakpoints-d5c2f627.f0d6212d.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url), "./ix-pill.entry.js": () => __vitePreload(() => import("./ix-pill.entry.ae7c3982.js"), true ? [] : void 0, import.meta.url), "./ix-playground-internal.entry.js": () => __vitePreload(() => import("./ix-playground-internal.entry.14acfd5f.js"), true ? [] : void 0, import.meta.url), "./ix-push-card.entry.js": () => __vitePreload(() => import("./ix-push-card.entry.68d546d1.js"), true ? [] : void 0, import.meta.url), "./ix-select.entry.js": () => __vitePreload(() => import("./ix-select.entry.82360898.js"), true ? ["./ix-select.entry.82360898.js","./focus-d4d3abaf.e4140cbf.js","./listener-2d09646e.b9f986e6.js","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url), "./ix-slider.entry.js": () => __vitePreload(() => import("./ix-slider.entry.f9d4e00c.js"), true ? ["./ix-slider.entry.f9d4e00c.js","./a11y-d5444a76.05d6fe5e.js","./listener-2d09646e.b9f986e6.js"] : void 0, import.meta.url), "./ix-split-button-item.entry.js": () => __vitePreload(() => import("./ix-split-button-item.entry.f62f2d8f.js"), true ? ["./ix-split-button-item.entry.f62f2d8f.js","./make-ref-c80046bf.a5245335.js"] : void 0, import.meta.url), "./ix-split-button.entry.js": () => __vitePreload(() => import("./ix-split-button.entry.48ad6358.js"), true ? [] : void 0, import.meta.url), "./ix-tab-item_2.entry.js": () => __vitePreload(() => import("./ix-tab-item_2.entry.ef0f1507.js"), true ? [] : void 0, import.meta.url), "./ix-tile.entry.js": () => __vitePreload(() => import("./ix-tile.entry.bb9fa185.js"), true ? [] : void 0, import.meta.url), "./ix-time-picker.entry.js": () => __vitePreload(() => import("./ix-time-picker.entry.de05c88d.js"), true ? ["./ix-time-picker.entry.de05c88d.js","./luxon-aa110584.36a0b316.js"] : void 0, import.meta.url), "./ix-toast-container.entry.js": () => __vitePreload(() => import("./ix-toast-container.entry.7c99d6c8.js"), true ? ["./ix-toast-container.entry.7c99d6c8.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url), "./ix-toast.entry.js": () => __vitePreload(() => import("./ix-toast.entry.4713829e.js"), true ? [] : void 0, import.meta.url), "./ix-toggle-button.entry.js": () => __vitePreload(() => import("./ix-toggle-button.entry.a451609b.js"), true ? ["./ix-toggle-button.entry.a451609b.js","./base-button-a1f04cd1.82f1d146.js","./a11y-d5444a76.05d6fe5e.js"] : void 0, import.meta.url), "./ix-toggle.entry.js": () => __vitePreload(() => import("./ix-toggle.entry.2230a46b.js"), true ? ["./ix-toggle.entry.2230a46b.js","./a11y-d5444a76.05d6fe5e.js"] : void 0, import.meta.url), "./ix-tooltip.entry.js": () => __vitePreload(() => import("./ix-tooltip.entry.eb0ca800.js"), true ? ["./ix-tooltip.entry.eb0ca800.js","./floating-ui.dom.esm-6e7c098f.28127179.js","./listener-2d09646e.b9f986e6.js"] : void 0, import.meta.url), "./ix-tree-item.entry.js": () => __vitePreload(() => import("./ix-tree-item.entry.3b643ef9.js"), true ? [] : void 0, import.meta.url), "./ix-tree.entry.js": () => __vitePreload(() => import("./ix-tree.entry.db8ac91f.js"), true ? ["./ix-tree.entry.db8ac91f.js","./_commonjsHelpers-e557d4a5.97812a83.js"] : void 0, import.meta.url), "./ix-typography.entry.js": () => __vitePreload(() => import("./ix-typography.entry.acc70afc.js"), true ? [] : void 0, import.meta.url), "./ix-upload.entry.js": () => __vitePreload(() => import("./ix-upload.entry.02ec78bf.js"), true ? ["./ix-upload.entry.02ec78bf.js","./upload-file-state-de676cd5.96d9c6b3.js"] : void 0, import.meta.url), "./ix-validation-tooltip.entry.js": () => __vitePreload(() => import("./ix-validation-tooltip.entry.9f74a39c.js"), true ? ["./ix-validation-tooltip.entry.9f74a39c.js","./floating-ui.dom.esm-6e7c098f.28127179.js"] : void 0, import.meta.url), "./ix-workflow-step.entry.js": () => __vitePreload(() => import("./ix-workflow-step.entry.24bc8af8.js"), true ? [] : void 0, import.meta.url), "./ix-workflow-steps.entry.js": () => __vitePreload(() => import("./ix-workflow-steps.entry.010b7b86.js"), true ? ["./ix-workflow-steps.entry.010b7b86.js","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url) }), `./${bundleId}.entry.js${""}`).then((importedModule) => {
    {
      cmpModules.set(bundleId, importedModule);
    }
    return importedModule[exportName];
  }, consoleError);
};
const styles = /* @__PURE__ */ new Map();
const win = typeof window !== "undefined" ? window : {};
const doc = win.document || { head: {} };
const plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
const supportsShadow = true;
const supportsListenerOptions = /* @__PURE__ */ (() => {
  let supportsListenerOptions2 = false;
  try {
    doc.addEventListener("e", null, Object.defineProperty({}, "passive", {
      get() {
        supportsListenerOptions2 = true;
      }
    }));
  } catch (e) {
  }
  return supportsListenerOptions2;
})();
const promiseResolve = (v) => Promise.resolve(v);
const supportsConstructableStylesheets = /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})();
const queueDomReads = [];
const queueDomWrites = [];
const queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
const consume = (queue) => {
  for (let i = 0; i < queue.length; i++) {
    try {
      queue[i](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
const flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
const nextTick = (cb) => promiseResolve().then(cb);
const readTask = /* @__PURE__ */ queueTask(queueDomReads, false);
const writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);
async function setupIcons() {
  if (typeof window === "undefined") {
    return;
  }
  const iconComponent = window.customElements.get("ix-icon");
  if (iconComponent) {
    return;
  }
  console.warn("ix-icon web component not loaded. Using local fallback version");
  const ixIcons = await __vitePreload(() => import("./index.es2017-93ac816c.00952f20.js"), true ? [] : void 0, import.meta.url).then(function(n) {
    return n.i;
  });
  await ixIcons.defineCustomElements();
}
async function appGlobalScript() {
  await setupIcons();
}
const globalScripts = appGlobalScript;
const defineCustomElements = async (win2, options) => {
  if (typeof window === "undefined")
    return void 0;
  await globalScripts();
  return bootstrapLazy(JSON.parse('[["ix-datetime-picker",[[1,"ix-datetime-picker",{"range":[4],"showHour":[4,"show-hour"],"showMinutes":[4,"show-minutes"],"showSeconds":[4,"show-seconds"],"minDate":[1,"min-date"],"maxDate":[1,"max-date"],"dateFormat":[1,"date-format"],"timeFormat":[1,"time-format"],"from":[1],"to":[1],"time":[1],"showTimeReference":[8,"show-time-reference"],"timeReference":[1,"time-reference"],"textSelectDate":[1,"text-select-date"],"i18nDone":[1,"i18n-done"],"weekStartIndex":[2,"week-start-index"],"locale":[1],"eventDelimiter":[1,"event-delimiter"]}]]],["ix-date-dropdown",[[1,"ix-date-dropdown",{"disabled":[4],"format":[1],"range":[4],"from":[1],"to":[1],"minDate":[1,"min-date"],"maxDate":[1,"max-date"],"dateRangeId":[1,"date-range-id"],"customRangeAllowed":[4,"custom-range-allowed"],"dateRangeOptions":[16],"i18nCustomItem":[1,"i18n-custom-item"],"i18nDone":[1,"i18n-done"],"i18nNoRange":[1,"i18n-no-range"],"today":[1],"selectedDateRangeId":[32],"currentRangeValue":[32],"triggerRef":[32],"getDateRange":[64]},null,{"dateRangeId":["onDateRangeIdChange"],"to":["onDateRangeIdChange"],"from":["onDateRangeIdChange"],"dateRangeOptions":["onDateRangeOptionsChange"],"disabled":["onDisabledChange"]}]]],["ix-pagination",[[1,"ix-pagination",{"advanced":[4],"itemCount":[2,"item-count"],"showItemCount":[4,"show-item-count"],"count":[2],"selectedPage":[1026,"selected-page"],"i18nPage":[1,"i-1-8n-page"],"i18nOf":[1,"i-1-8n-of"],"i18nItems":[1,"i-1-8n-items"]}]]],["ix-menu-avatar",[[1,"ix-menu-avatar",{"top":[1],"bottom":[1],"image":[1],"initials":[1],"i18nLogout":[1,"i-1-8n-logout"],"showLogoutButton":[4,"show-logout-button"],"showContextMenu":[32]}]]],["ix-card-list",[[1,"ix-card-list",{"label":[1],"collapse":[1028],"listStyle":[1,"list-style"],"maxVisibleCards":[2,"max-visible-cards"],"showAllCount":[2,"show-all-count"],"suppressOverflowHandling":[4,"suppress-overflow-handling"],"hideShowAll":[4,"hide-show-all"],"i18nShowAll":[1,"i-1-8n-show-all"],"i18nMoreCards":[1,"i-1-8n-more-cards"],"hasOverflowingElements":[32],"numberOfOverflowingElements":[32],"numberOfAllChildElements":[32],"leftScrollDistance":[32],"rightScrollDistance":[32]},[[9,"resize","detectOverflow"]]]]],["ix-map-navigation",[[1,"ix-map-navigation",{"applicationName":[1,"application-name"],"navigationTitle":[1,"navigation-title"],"hideContextMenu":[4,"hide-context-menu"],"isSidebarOpen":[32],"hasContentHeader":[32],"toggleSidebar":[64],"openOverlay":[64],"closeOverlay":[64]}]]],["ix-menu",[[1,"ix-menu",{"showSettings":[1028,"show-settings"],"showAbout":[1028,"show-about"],"enableToggleTheme":[4,"enable-toggle-theme"],"enableSettings":[4,"enable-settings"],"enableMapExpand":[4,"enable-map-expand"],"applicationName":[1,"application-name"],"applicationDescription":[1,"application-description"],"maxVisibleMenuItems":[2,"max-visible-menu-items"],"i18nExpandSidebar":[1,"i-1-8n-expand-sidebar"],"expand":[1540],"startExpanded":[4,"start-expanded"],"pinned":[4],"i18nLegal":[1,"i-1-8n-legal"],"i18nSettings":[1,"i-1-8n-settings"],"i18nToggleTheme":[1,"i-1-8n-toggle-theme"],"i18nExpand":[1,"i-1-8n-expand"],"i18nCollapse":[1,"i-1-8n-collapse"],"showPinned":[32],"mapExpand":[32],"activeTab":[32],"breakpoint":[32],"itemsScrollShadowTop":[32],"itemsScrollShadowBottom":[32],"applicationLayoutContext":[32],"toggleMapExpand":[64],"toggleMenu":[64],"toggleSettings":[64],"toggleAbout":[64]},[[9,"resize","handleOverflowIndicator"],[0,"close","onOverlayClose"]],{"pinned":["pinnedChange"]}]]],["ix-menu-category",[[1,"ix-menu-category",{"label":[1],"icon":[1],"notifications":[2],"menuExpand":[32],"showItems":[32],"showDropdown":[32],"nestedItems":[32]},[[8,"closeOtherCategories","onPointerLeave"]]]]],["ix-application-switch-modal",[[1,"ix-application-switch-modal",{"config":[16]}]]],["ix-basic-navigation",[[1,"ix-basic-navigation",{"applicationName":[1,"application-name"],"hideHeader":[4,"hide-header"],"forceBreakpoint":[1,"force-breakpoint"],"breakpoints":[16],"breakpoint":[32]},null,{"hideHeader":["onHideHeaderChange"],"breakpoints":["onBreakpointsChange"]}]]],["ix-push-card",[[1,"ix-push-card",{"icon":[1],"notification":[1],"heading":[1],"subheading":[1],"variant":[1],"collapse":[4]}]]],["ix-breadcrumb",[[1,"ix-breadcrumb",{"visibleItemCount":[2,"visible-item-count"],"nextItems":[16],"ghost":[4],"ariaLabelPreviousButton":[1,"aria-label-previous-button"],"previousButtonRef":[32],"nextButtonRef":[32],"items":[32],"isPreviousDropdownExpanded":[32]},null,{"nextItems":["onNextItemsChange"]}]]],["ix-category-filter",[[1,"ix-category-filter",{"disabled":[4],"readonly":[4],"filterState":[16],"placeholder":[1],"categories":[16],"nonSelectableCategories":[16],"suggestions":[16],"icon":[1],"hideIcon":[4,"hide-icon"],"staticOperator":[1,"static-operator"],"repeatCategories":[4,"repeat-categories"],"tmpDisableScrollIntoView":[4,"tmp-disable-scroll-into-view"],"labelCategories":[1,"label-categories"],"i18nPlainText":[1,"i-1-8n-plain-text"],"showDropdown":[32],"textInput":[32],"hasFocus":[32],"categoryLogicalOperator":[32],"inputValue":[32],"category":[32],"filterTokens":[32]},null,{"filterState":["watchFilterState"]}]]],["ix-dropdown-button",[[1,"ix-dropdown-button",{"variant":[1],"outline":[4],"ghost":[4],"disabled":[4],"label":[1],"icon":[1],"closeBehavior":[8,"close-behavior"],"placement":[1],"dropdownAnchor":[32]}]]],["ix-group",[[1,"ix-group",{"suppressHeaderSelection":[4,"suppress-header-selection"],"header":[1],"subHeader":[1,"sub-header"],"collapsed":[1540],"selected":[1540],"index":[1538],"expandOnHeaderClick":[4,"expand-on-header-click"],"itemSelected":[32],"dropdownTriggerRef":[32],"slotSize":[32],"footerVisible":[32],"showExpandCollapsedIcon":[32]}]]],["ix-menu-about",[[1,"ix-menu-about",{"activeTabLabel":[1025,"active-tab-label"],"label":[1],"show":[4],"items":[32]},null,{"activeTabLabel":["updateTab"]}]]],["ix-menu-about-news",[[1,"ix-menu-about-news",{"show":[1540],"label":[1],"i18nShowMore":[1,"i-1-8n-show-more"],"aboutItemLabel":[1,"about-item-label"],"offsetBottom":[2,"offset-bottom"],"expanded":[4]}]]],["ix-menu-settings",[[1,"ix-menu-settings",{"activeTabLabel":[1025,"active-tab-label"],"label":[1],"show":[4],"items":[32]},null,{"activeTabLabel":["updateTab"]}]]],["ix-split-button",[[1,"ix-split-button",{"variant":[1],"closeBehavior":[8,"close-behavior"],"outline":[4],"ghost":[4],"label":[1],"icon":[1],"splitIcon":[1,"split-icon"],"disabled":[4],"placement":[1],"toggle":[32]}]]],["ix-action-card",[[1,"ix-action-card",{"variant":[1],"icon":[1],"heading":[1],"subheading":[1],"selected":[4]}]]],["ix-content-header",[[1,"ix-content-header",{"variant":[1],"headerTitle":[1,"header-title"],"headerSubtitle":[1,"header-subtitle"],"hasBackButton":[4,"has-back-button"]}]]],["ix-empty-state",[[1,"ix-empty-state",{"layout":[1],"icon":[1],"header":[1],"subHeader":[1,"sub-header"],"action":[1]}]]],["ix-modal-example",[[0,"ix-modal-example"]]],["ix-pane",[[1,"ix-pane",{"heading":[1],"variant":[1],"hideOnCollapse":[4,"hide-on-collapse"],"size":[1],"borderless":[4],"expanded":[1028],"composition":[1025],"icon":[1],"ignoreLayoutSettings":[4,"ignore-layout-settings"],"isMobile":[1028,"is-mobile"],"expandIcon":[32],"showContent":[32],"minimizeIcon":[32],"floating":[32],"parentWidthPx":[32],"parentHeightPx":[32]},null,{"isMobile":["onMobileChange"],"composition":["onPositionChange"],"hideOnCollapse":["onHideOnCollapseChange"],"variant":["onVariantChange"],"borderless":["onBorderlessChange"],"expanded":["onExpandedChange"],"parentHeightPx":["onParentSizeChange"],"parentWidthPx":["onParentSizeChange"],"size":["onSizeChange"]}]]],["ix-toast-container",[[1,"ix-toast-container",{"containerId":[1,"container-id"],"containerClass":[1,"container-class"],"position":[1],"showToast":[64]},null,{"position":["onPositionChange"]}]]],["ix-chip",[[1,"ix-chip",{"variant":[513],"active":[4],"closable":[4],"icon":[1],"background":[1],"color":[1],"chipColor":[1,"chip-color"],"outline":[4]}]]],["ix-drawer",[[1,"ix-drawer",{"show":[1028],"closeOnClickOutside":[4,"close-on-click-outside"],"fullHeight":[4,"full-height"],"minWidth":[2,"min-width"],"maxWidth":[2,"max-width"],"width":[8],"toggleDrawer":[64]},null,{"show":["onShowChanged"]}]]],["ix-expanding-search",[[1,"ix-expanding-search",{"icon":[1],"placeholder":[1],"value":[1025],"fullWidth":[4,"full-width"],"isFieldChanged":[32],"expanded":[32],"hasFocus":[32]}]]],["ix-flip-tile",[[1,"ix-flip-tile",{"state":[1],"height":[8],"width":[8],"index":[32],"isFlipAnimationActive":[32]}]]],["ix-message-bar",[[1,"ix-message-bar",{"type":[1],"dismissible":[4],"icon":[32],"color":[32]}]]],["ix-slider",[[1,"ix-slider",{"step":[2],"min":[2],"max":[2],"value":[2],"marker":[16],"trace":[4],"traceReference":[2,"trace-reference"],"disabled":[4],"error":[8],"rangeInput":[32],"rangeMin":[32],"rangeMax":[32],"rangeTraceReference":[32],"showTooltip":[32]},null,{"showTooltip":["onShowTooltipChange"],"value":["updateRangeVariables"],"max":["updateRangeVariables"],"min":["updateRangeVariables"],"traceReference":["updateRangeVariables"]}]]],["ix-upload",[[1,"ix-upload",{"accept":[1],"multiple":[4],"multiline":[4],"disabled":[4],"state":[1],"selectFileText":[1,"select-file-text"],"loadingText":[1,"loading-text"],"uploadFailedText":[1,"upload-failed-text"],"uploadSuccessText":[1,"upload-success-text"],"i18nUploadFile":[1,"i-1-8n-upload-file"],"i18nUploadDisabled":[1,"i-1-8n-upload-disabled"],"isFileOver":[32],"setFilesToUpload":[64]}]]],["ix-blind",[[1,"ix-blind",{"collapsed":[1540],"label":[1],"sublabel":[1],"icon":[1],"variant":[1]},null,{"collapsed":["animation"]}]]],["ix-dropdown-header",[[1,"ix-dropdown-header",{"label":[1]}]]],["ix-icon-toggle-button",[[1,"ix-icon-toggle-button",{"variant":[1],"outline":[4],"ghost":[4],"icon":[1],"pressed":[4],"size":[1],"disabled":[516],"loading":[4]},null,{"variant":["onVariantChange"],"ghost":["onGhostChange"],"outline":["onOutlineChange"]}]]],["ix-modal-loading",[[1,"ix-modal-loading"]]],["ix-split-button-item",[[1,"ix-split-button-item",{"icon":[1],"label":[1],"getDropdownItemElement":[64]}]]],["ix-toggle-button",[[1,"ix-toggle-button",{"variant":[1],"outline":[4],"ghost":[4],"disabled":[516],"loading":[4],"icon":[1],"pressed":[4]},null,{"variant":["onVariantChange"],"ghost":["onGhostChange"],"outline":["onOutlineChange"]}]]],["ix-tree",[[1,"ix-tree",{"root":[1],"model":[16],"renderItem":[16],"context":[1040]},null,{"model":["modelChange"]}]]],["ix-application",[[1,"ix-application",{"theme":[1],"themeSystemAppearance":[4,"theme-system-appearance"],"forceBreakpoint":[1,"force-breakpoint"],"breakpoints":[16],"appSwitchConfig":[16],"breakpoint":[32],"applicationSidebarSlotted":[32]},null,{"breakpoints":["onBreakpointsChange"],"theme":["changeTheme"],"themeSystemAppearance":["changeTheme"],"appSwitchConfig":["onApplicationSidebarChange"],"applicationSidebarSlotted":["onApplicationSidebarChange"]}]]],["ix-application-sidebar",[[1,"ix-application-sidebar",{"visible":[32]},[[8,"application-sidebar-toggle","listenToggleEvent"]]]]],["ix-content",[[1,"ix-content",{"isContentHeaderSlotted":[32]}]]],["ix-css-grid",[[1,"ix-css-grid",{"templates":[16],"currentTemplate":[32]}]]],["ix-css-grid-item",[[1,"ix-css-grid-item",{"itemName":[1,"item-name"]}]]],["ix-dropdown-quick-actions",[[1,"ix-dropdown-quick-actions"]]],["ix-event-list",[[1,"ix-event-list",{"itemHeight":[8,"item-height"],"compact":[4],"animated":[4],"chevron":[4]},null,{"chevron":["watchChevron"]}]]],["ix-event-list-item",[[1,"ix-event-list-item",{"color":[1],"itemColor":[1,"item-color"],"selected":[4],"disabled":[4],"chevron":[4]},[[1,"click","handleItemClick"]]]]],["ix-flip-tile-content",[[1,"ix-flip-tile-content",{"contentVisible":[4,"content-visible"]}]]],["ix-form-field",[[1,"ix-form-field",{"label":[1]}]]],["ix-input-group",[[1,"ix-input-group",{"disabled":[32],"inputPaddingLeft":[32],"inputPaddingRight":[32]}]]],["ix-key-value",[[1,"ix-key-value",{"icon":[1],"label":[1],"labelPosition":[1,"label-position"],"value":[1]}]]],["ix-key-value-list",[[1,"ix-key-value-list",{"striped":[4]}]]],["ix-kpi",[[1,"ix-kpi",{"label":[1],"value":[8],"unit":[1],"state":[1],"orientation":[1]}]]],["ix-link-button",[[1,"ix-link-button",{"disabled":[4],"url":[1],"target":[1]}]]],["ix-menu-about-item",[[1,"ix-menu-about-item",{"label":[513]},null,{"label":["watchLabel"]}]]],["ix-menu-settings-item",[[1,"ix-menu-settings-item",{"label":[513]},null,{"label":["watchLabel"]}]]],["ix-modal",[[1,"ix-modal",{"size":[1],"animation":[4],"backdrop":[4],"closeOnBackdropClick":[4,"close-on-backdrop-click"],"beforeDismiss":[16],"centered":[4],"keyboard":[4],"closeOnEscape":[4,"close-on-escape"],"modalVisible":[32],"showModal":[64],"dismissModal":[64],"closeModal":[64]}]]],["ix-modal-footer",[[1,"ix-modal-footer"]]],["ix-pane-layout",[[1,"ix-pane-layout",{"layout":[1],"variant":[1],"borderless":[4],"isMobile":[32],"paneElements":[32]},[[0,"slotChanged","onSlotChanged"],[0,"hideOnCollapseChanged","onCollapsibleChanged"],[0,"variantChanged","onVariantChanged"]],{"paneElements":["onPaneElementsChange"],"variant":["onVariableChange"],"borderless":["onBorderChange"],"layout":["onLayoutChange"],"isMobile":["onMobileChange"]}]]],["ix-pill",[[1,"ix-pill",{"variant":[513],"outline":[4],"icon":[1],"background":[1],"color":[1],"pillColor":[1,"pill-color"],"alignLeft":[4,"align-left"]}]]],["ix-playground-internal",[[2,"ix-playground-internal"]]],["ix-tile",[[1,"ix-tile",{"size":[1],"hasHeaderSlot":[32],"hasFooterSlot":[32]}]]],["ix-toggle",[[1,"ix-toggle",{"checked":[1540],"disabled":[4],"indeterminate":[1540],"textOn":[1,"text-on"],"textOff":[1,"text-off"],"textIndeterminate":[1,"text-indeterminate"],"hideText":[4,"hide-text"]}]]],["ix-validation-tooltip",[[1,"ix-validation-tooltip",{"message":[1],"placement":[1],"suppressAutomaticPlacement":[4,"suppress-automatic-placement"],"isInputValid":[32],"tooltipPosition":[32],"arrowPosition":[32]},null,{"isInputValid":["validationChanged"]}]]],["ix-workflow-step",[[1,"ix-workflow-step",{"vertical":[4],"disabled":[4],"status":[1],"clickable":[4],"selected":[4],"position":[1],"iconName":[32],"iconColor":[32]},null,{"selected":["selectedHandler"],"disabled":["watchPropHandler"],"status":["watchPropHandler"]}]]],["ix-workflow-steps",[[1,"ix-workflow-steps",{"vertical":[4],"clickable":[4],"selectedIndex":[2,"selected-index"]},[[0,"selectedChanged","onStepSelectionChanged"]]]]],["ix-dropdown-item",[[1,"ix-dropdown-item",{"label":[1],"icon":[1],"hover":[4],"disabled":[4],"checked":[4],"isSubMenu":[4,"is-sub-menu"],"suppressChecked":[4,"suppress-checked"],"emitItemClick":[64],"getDropdownItemElement":[64]}]]],["ix-dropdown",[[1,"ix-dropdown",{"suppressAutomaticPlacement":[4,"suppress-automatic-placement"],"show":[1540],"trigger":[1],"anchor":[1],"closeBehavior":[8,"close-behavior"],"placement":[1],"positioningStrategy":[1,"positioning-strategy"],"header":[1],"offset":[16],"overwriteDropdownStyle":[16],"discoverAllSubmenus":[4,"discover-all-submenus"],"ignoreRelatedSubmenu":[4,"ignore-related-submenu"],"discoverSubmenu":[64],"updatePosition":[64]},[[0,"ix-assign-sub-menu","cacheSubmenuId"]],{"show":["changedShow"],"trigger":["changedTrigger"]}]]],["ix-icon-button_2",[[1,"ix-icon-button",{"a11yLabel":[1,"a11y-label"],"variant":[1],"outline":[4],"ghost":[4],"oval":[4],"icon":[1],"size":[1],"color":[1],"iconColor":[1,"icon-color"],"disabled":[4],"type":[1],"loading":[4]}],[1,"ix-spinner",{"variant":[1],"size":[1],"hideTrack":[4,"hide-track"]}]]],["ix-select",[[1,"ix-select",{"selectedIndices":[1025,"selected-indices"],"value":[1025],"allowClear":[4,"allow-clear"],"mode":[1],"editable":[4],"disabled":[4],"readonly":[4],"i18nPlaceholder":[1,"i-1-8n-placeholder"],"i18nPlaceholderEditable":[1,"i-1-8n-placeholder-editable"],"i18nSelectListHeader":[1,"i-1-8n-select-list-header"],"i18nNoMatches":[1,"i-1-8n-no-matches"],"hideListHeader":[4,"hide-list-header"],"dropdownShow":[32],"selectedLabels":[32],"dropdownWrapperRef":[32],"dropdownAnchor":[32],"isDropdownEmpty":[32],"navigationItem":[32],"inputFilterText":[32],"inputValue":[32]},[[0,"itemClick","onItemClicked"],[0,"ix-select-item:labelChange","onLabelChange"]],{"selectedIndices":["watchSelectedIndices"],"value":["watchValue"],"dropdownShow":["watchDropdownShow"]}]]],["ix-time-picker",[[1,"ix-time-picker",{"format":[1],"corners":[1],"standaloneAppearance":[4,"standalone-appearance"],"individual":[4],"showHour":[4,"show-hour"],"showMinutes":[4,"show-minutes"],"showSeconds":[4,"show-seconds"],"time":[1],"showTimeReference":[1028,"show-time-reference"],"timeReference":[1,"time-reference"],"textSelectTime":[1,"text-select-time"],"textTime":[1,"text-time"],"_time":[32],"_timeRef":[32],"_formattedTime":[32],"getCurrentTime":[64]},null,{"time":["watchTimePropHandler"],"_time":["formatTime","onInternalTimeChange"]}]]],["ix-map-navigation-overlay",[[1,"ix-map-navigation-overlay",{"name":[1],"icon":[1],"color":[1],"iconColor":[1,"icon-color"]}]]],["ix-toast",[[1,"ix-toast",{"type":[1],"toastTitle":[1,"toast-title"],"autoCloseDelay":[2,"auto-close-delay"],"autoClose":[4,"auto-close"],"icon":[1],"iconColor":[1,"icon-color"],"progress":[32],"touched":[32]}]]],["ix-breadcrumb-item",[[1,"ix-breadcrumb-item",{"label":[1],"icon":[1],"ghost":[4],"visible":[4],"showChevron":[4,"show-chevron"],"isDropdownTrigger":[4,"is-dropdown-trigger"],"a11y":[32]}]]],["ix-tree-item",[[1,"ix-tree-item",{"text":[1],"hasChildren":[4,"has-children"],"context":[16]}]]],["ix-avatar_2",[[1,"ix-avatar",{"image":[1],"initials":[1],"username":[1],"extra":[1],"isClosestApplicationHeader":[32],"hasSlottedElements":[32]}],[1,"ix-menu-avatar-item",{"icon":[1],"label":[1],"getDropdownItemElement":[64]}]]],["ix-application-header",[[1,"ix-application-header",{"name":[1],"breakpoint":[32],"menuExpanded":[32],"suppressResponsive":[32],"hasSlottedElements":[32],"applicationLayoutContext":[32]}]]],["ix-typography",[[1,"ix-typography",{"variant":[1],"format":[1],"color":[1],"textColor":[1,"text-color"],"bold":[4],"textDecoration":[1,"text-decoration"]}]]],["ix-modal-content_2",[[1,"ix-modal-header",{"hideClose":[4,"hide-close"],"icon":[1],"iconColor":[1,"icon-color"]},null,{"icon":["onIconChange"]}],[1,"ix-modal-content"]]],["ix-group-context-menu_2",[[1,"ix-group-context-menu",{"showContextMenu":[32]}],[1,"ix-group-item",{"icon":[1],"text":[1],"secondaryText":[1,"secondary-text"],"suppressSelection":[4,"suppress-selection"],"selected":[4],"focusable":[4],"index":[2]},[[1,"click","clickListen"]]]]],["ix-menu-item",[[1,"ix-menu-item",{"label":[1],"home":[4],"bottom":[4],"tabIcon":[1025,"tab-icon"],"icon":[1025],"notifications":[2],"active":[4],"disabled":[4],"isCategory":[4,"is-category"],"tooltip":[32],"menuExpanded":[32]},null,{"icon":["onIconChange"],"tabIcon":["onTabIconChange"]}]]],["ix-card-accordion_2",[[1,"ix-card-accordion",{"collapse":[4],"expandContent":[32]},null,{"collapse":["onInitialExpandChange"]}],[1,"ix-card-title"]]],["ix-divider",[[1,"ix-divider"]]],["ix-menu-expand-icon",[[1,"ix-menu-expand-icon",{"ixAriaLabel":[1,"ix-aria-label"],"expanded":[516],"breakpoint":[513],"pinned":[4]}]]],["ix-tooltip",[[1,"ix-tooltip",{"for":[1],"titleContent":[1,"title-content"],"interactive":[4],"placement":[1],"showDelay":[2,"show-delay"],"hideDelay":[2,"hide-delay"],"animationFrame":[4,"animation-frame"],"visible":[32],"showTooltip":[64],"hideTooltip":[64]}]]],["ix-tab-item_2",[[1,"ix-tab-item",{"selected":[4],"disabled":[4],"small":[4],"icon":[4],"rounded":[4],"counter":[2],"layout":[1],"placement":[1]}],[1,"ix-tabs",{"small":[4],"rounded":[4],"selected":[1026],"layout":[1],"placement":[1],"totalItems":[32],"currentScrollAmount":[32],"scrollAmount":[32],"scrollActionAmount":[32]},[[9,"resize","onWindowResize"],[0,"tabClick","onTabClick"]]]]],["ix-date-time-card",[[1,"ix-date-time-card",{"standaloneAppearance":[8,"standalone-appearance"],"individual":[4],"corners":[1]}]]],["ix-filter-chip_2",[[1,"ix-select-item",{"label":[513],"value":[520],"selected":[4],"hover":[4],"getDropdownItemElement":[64],"onItemClick":[64]},null,{"label":["labelChange"]}],[1,"ix-filter-chip",{"disabled":[4],"readonly":[4]}]]],["ix-card_2",[[1,"ix-card",{"variant":[1],"selected":[4]}],[1,"ix-card-content"]]],["ix-button",[[1,"ix-button",{"variant":[1],"outline":[4],"ghost":[4],"disabled":[516],"type":[1],"loading":[4],"icon":[1],"alignment":[1],"iconSize":[1,"icon-size"]}]]],["ix-col_4",[[1,"ix-date-picker",{"format":[1],"range":[4],"corners":[1],"from":[1],"to":[1],"minDate":[1,"min-date"],"maxDate":[1,"max-date"],"textSelectDate":[1,"text-select-date"],"i18nDone":[1,"i18n-done"],"weekStartIndex":[2,"week-start-index"],"locale":[1],"individual":[4],"eventDelimiter":[1,"event-delimiter"],"standaloneAppearance":[4,"standalone-appearance"],"today":[1],"currFromDate":[32],"currToDate":[32],"selectedYear":[32],"tempYear":[32],"startYear":[32],"endYear":[32],"selectedMonth":[32],"tempMonth":[32],"dropdownButtonRef":[32],"yearContainerRef":[32],"dayNames":[32],"monthNames":[32],"firstMonthRef":[32],"focusedDay":[32],"focusedDayElem":[32],"getCurrentDate":[64]},null,{"from":["watchFromPropHandler"],"to":["watchToPropHandler"],"locale":["onLocaleChange"]}],[1,"ix-col",{"size":[1],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"]},[[9,"resize","onResize"]]],[1,"ix-layout-grid",{"noMargin":[4,"no-margin"],"gap":[1],"columns":[2]}],[1,"ix-row"]]]]'), options);
};
(function() {
  if ("undefined" !== typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
    var a = HTMLElement;
    window.HTMLElement = function() {
      return Reflect.construct(a, [], this.constructor);
    };
    HTMLElement.prototype = a.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, a);
  }
})();
const global = "";
export {
  Fragment as F,
  Host as H,
  __vitePreload as _,
  applyPolyfills as a,
  readTask as b,
  createEvent as c,
  defineCustomElements as d,
  __variableDynamicImportRuntimeHelper as e,
  forceUpdate as f,
  getElement as g,
  h,
  registerInstance as r
};
