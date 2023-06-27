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
const ixIcons = "";
const siemensIx = "";
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep, importerUrl);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
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
let contentRef;
let hostTagName;
let useNativeShadowDom = false;
let checkSlotFallbackVisibility = false;
let checkSlotRelocate = false;
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
const HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
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
  let slotName = null;
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
    if (vnodeData.name) {
      slotName = vnodeData.name;
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
  {
    vnode.$name$ = slotName;
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
  {
    vnode.$name$ = null;
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
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
  var _a;
  let scopeId2 = getScopeId(cmpMeta);
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
        {
          {
            styleElm = doc.createElement("style");
            styleElm.innerHTML = style;
          }
          const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector("link"));
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
      if (oldValue) {
        plt.rel(elm, memberName, oldValue, false);
      }
      if (newValue) {
        plt.ael(elm, memberName, newValue, false);
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
      if (newValue == null || newValue === false) {
        if (newValue !== false || elm.getAttribute(memberName) === "") {
          {
            elm.removeAttribute(memberName);
          }
        }
      } else if ((!isProp || flags & 4 || isSvg) && !isComplex) {
        newValue = newValue === true ? "" : newValue;
        {
          elm.setAttribute(memberName, newValue);
        }
      }
    }
  }
};
const parseClassListRegex = /\s/;
const parseClassList = (value) => !value ? [] : value.split(parseClassListRegex);
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
  let oldVNode;
  if (!useNativeShadowDom) {
    checkSlotRelocate = true;
    if (newVNode2.$tag$ === "slot") {
      if (scopeId) {
        parentElm.classList.add(scopeId + "-s");
      }
      newVNode2.$flags$ |= newVNode2.$children$ ? 2 : 1;
    }
  }
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = doc.createTextNode(newVNode2.$text$);
  } else if (newVNode2.$flags$ & 1) {
    elm = newVNode2.$elm$ = doc.createTextNode("");
  } else {
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    elm = newVNode2.$elm$ = doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, newVNode2.$flags$ & 2 ? "slot-fb" : newVNode2.$tag$);
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
        childNode = createElm(oldParentVNode, newVNode2, i, elm);
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
  {
    elm["s-hn"] = hostTagName;
    if (newVNode2.$flags$ & (2 | 1)) {
      elm["s-sr"] = true;
      elm["s-cr"] = contentRef;
      elm["s-sn"] = newVNode2.$name$ || "";
      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
      if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
        putBackInOriginalLocation(oldParentVNode.$elm$, false);
      }
    }
  }
  return elm;
};
const putBackInOriginalLocation = (parentElm, recursive) => {
  plt.$flags$ |= 1;
  const oldSlotChildNodes = parentElm.childNodes;
  for (let i = oldSlotChildNodes.length - 1; i >= 0; i--) {
    const childNode = oldSlotChildNodes[i];
    if (childNode["s-hn"] !== hostTagName && childNode["s-ol"]) {
      parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
      childNode["s-ol"].remove();
      childNode["s-ol"] = void 0;
      checkSlotRelocate = true;
    }
    if (recursive) {
      putBackInOriginalLocation(childNode, recursive);
    }
  }
  plt.$flags$ &= ~1;
};
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx, parentElm);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        containerElm.insertBefore(childNode, referenceNode(before));
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
        {
          checkSlotFallbackVisibility = true;
          if (elm["s-ol"]) {
            elm["s-ol"].remove();
          } else {
            putBackInOriginalLocation(elm, true);
          }
        }
        elm.remove();
      }
    }
  }
};
const updateChildren = (parentElm, oldCh, newVNode2, newCh) => {
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
    } else if (isSameVnode(oldStartVnode, newStartVnode)) {
      patch(oldStartVnode, newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode)) {
      patch(oldEndVnode, newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode)) {
      if (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot") {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }
      patch(oldStartVnode, newEndVnode);
      parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode)) {
      if (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot") {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }
      patch(oldEndVnode, newStartVnode);
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
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld, parentElm);
        } else {
          patch(elmToMove, newStartVnode);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx, parentElm);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
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
const isSameVnode = (leftVNode, rightVNode) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (leftVNode.$tag$ === "slot") {
      return leftVNode.$name$ === rightVNode.$name$;
    }
    {
      return leftVNode.$key$ === rightVNode.$key$;
    }
  }
  return false;
};
const referenceNode = (node) => {
  return node && node["s-ol"] || node;
};
const parentReferenceNode = (node) => (node["s-ol"] ? node["s-ol"] : node).parentNode;
const patch = (oldVNode, newVNode2) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  let defaultHolder;
  if (text === null) {
    {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      if (tag === "slot")
        ;
      else {
        updateElement(oldVNode, newVNode2, isSvgMode);
      }
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren);
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
  } else if (defaultHolder = elm["s-cr"]) {
    defaultHolder.parentNode.textContent = text;
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
const updateFallbackSlotVisibility = (elm) => {
  const childNodes = elm.childNodes;
  let childNode;
  let i;
  let ilen;
  let j;
  let slotNameAttr;
  let nodeType;
  for (i = 0, ilen = childNodes.length; i < ilen; i++) {
    childNode = childNodes[i];
    if (childNode.nodeType === 1) {
      if (childNode["s-sr"]) {
        slotNameAttr = childNode["s-sn"];
        childNode.hidden = false;
        for (j = 0; j < ilen; j++) {
          nodeType = childNodes[j].nodeType;
          if (childNodes[j]["s-hn"] !== childNode["s-hn"] || slotNameAttr !== "") {
            if (nodeType === 1 && slotNameAttr === childNodes[j].getAttribute("slot")) {
              childNode.hidden = true;
              break;
            }
          } else {
            if (nodeType === 1 || nodeType === 3 && childNodes[j].textContent.trim() !== "") {
              childNode.hidden = true;
              break;
            }
          }
        }
      }
      updateFallbackSlotVisibility(childNode);
    }
  }
};
const relocateNodes = [];
const relocateSlotContent = (elm) => {
  let childNode;
  let node;
  let hostContentNodes;
  let slotNameAttr;
  let relocateNodeData;
  let j;
  let i = 0;
  const childNodes = elm.childNodes;
  const ilen = childNodes.length;
  for (; i < ilen; i++) {
    childNode = childNodes[i];
    if (childNode["s-sr"] && (node = childNode["s-cr"]) && node.parentNode) {
      hostContentNodes = node.parentNode.childNodes;
      slotNameAttr = childNode["s-sn"];
      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j];
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"]) {
          if (isNodeLocatedInSlot(node, slotNameAttr)) {
            relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
            checkSlotFallbackVisibility = true;
            node["s-sn"] = node["s-sn"] || slotNameAttr;
            if (relocateNodeData) {
              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              relocateNodes.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }
            if (node["s-sr"]) {
              relocateNodes.map((relocateNode) => {
                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node["s-sn"])) {
                  relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
            relocateNodes.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    }
    if (childNode.nodeType === 1) {
      relocateSlotContent(childNode);
    }
  }
};
const isNodeLocatedInSlot = (nodeToRelocate, slotNameAttr) => {
  if (nodeToRelocate.nodeType === 1) {
    if (nodeToRelocate.getAttribute("slot") === null && slotNameAttr === "") {
      return true;
    }
    if (nodeToRelocate.getAttribute("slot") === slotNameAttr) {
      return true;
    }
    return false;
  }
  if (nodeToRelocate["s-sn"] === slotNameAttr) {
    return true;
  }
  return slotNameAttr === "";
};
const nullifyVNodeRefs = (vNode) => {
  {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
const renderVdom = (hostRef, renderFnResults) => {
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]);
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm;
  {
    scopeId = hostElm["s-sc"];
  }
  {
    contentRef = hostElm["s-cr"];
    useNativeShadowDom = (cmpMeta.$flags$ & 1) !== 0;
    checkSlotFallbackVisibility = false;
  }
  patch(oldVNode, rootVnode);
  {
    plt.$flags$ |= 1;
    if (checkSlotRelocate) {
      relocateSlotContent(rootVnode.$elm$);
      let relocateData;
      let nodeToRelocate;
      let orgLocationNode;
      let parentNodeRef;
      let insertBeforeNode;
      let refNode;
      let i = 0;
      for (; i < relocateNodes.length; i++) {
        relocateData = relocateNodes[i];
        nodeToRelocate = relocateData.$nodeToRelocate$;
        if (!nodeToRelocate["s-ol"]) {
          orgLocationNode = doc.createTextNode("");
          orgLocationNode["s-nr"] = nodeToRelocate;
          nodeToRelocate.parentNode.insertBefore(nodeToRelocate["s-ol"] = orgLocationNode, nodeToRelocate);
        }
      }
      for (i = 0; i < relocateNodes.length; i++) {
        relocateData = relocateNodes[i];
        nodeToRelocate = relocateData.$nodeToRelocate$;
        if (relocateData.$slotRefNode$) {
          parentNodeRef = relocateData.$slotRefNode$.parentNode;
          insertBeforeNode = relocateData.$slotRefNode$.nextSibling;
          orgLocationNode = nodeToRelocate["s-ol"];
          while (orgLocationNode = orgLocationNode.previousSibling) {
            refNode = orgLocationNode["s-nr"];
            if (refNode && refNode["s-sn"] === nodeToRelocate["s-sn"] && parentNodeRef === refNode.parentNode) {
              refNode = refNode.nextSibling;
              if (!refNode || !refNode["s-nr"]) {
                insertBeforeNode = refNode;
                break;
              }
            }
          }
          if (!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode || nodeToRelocate.nextSibling !== insertBeforeNode) {
            if (nodeToRelocate !== insertBeforeNode) {
              if (!nodeToRelocate["s-hn"] && nodeToRelocate["s-ol"]) {
                nodeToRelocate["s-hn"] = nodeToRelocate["s-ol"].parentNode.nodeName;
              }
              parentNodeRef.insertBefore(nodeToRelocate, insertBeforeNode);
            }
          }
        } else {
          if (nodeToRelocate.nodeType === 1) {
            nodeToRelocate.hidden = true;
          }
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    }
    plt.$flags$ &= ~1;
    relocateNodes.length = 0;
  }
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
        hostRef.$queuedListeners$ = null;
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
const enqueue = (maybePromise, fn) => maybePromise instanceof Promise ? maybePromise.then(fn) : fn();
const updateComponent = async (hostRef, instance, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = elm["s-p"];
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
const callRender = (hostRef, instance, elm) => {
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
          renderVdom(hostRef, instance);
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
  if (cmpMeta.$members$) {
    if (Cstr.watchers) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries(cmpMeta.$members$);
    const prototype = Cstr.prototype;
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
            const ref = getHostRef(this);
            return ref.$onInstancePromise$.then(() => ref.$lazyInstance$[memberName](...args));
          }
        });
      }
    });
    if (flags & 1) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, _oldValue, newValue) {
        plt.jmp(() => {
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName)) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && this[propName] == newValue) {
            return;
          }
          this[propName] = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
        });
      };
      Cstr.observedAttributes = members.filter(([_, m]) => m[0] & 15).map(([propName, m]) => {
        const attrName = m[1] || propName;
        attrNameToPropName.set(attrName, propName);
        if (m[0] & 512) {
          cmpMeta.$attrsToReflect$.push([propName, attrName]);
        }
        return attrName;
      });
    }
  }
  return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
  if ((hostRef.$flags$ & 32) === 0) {
    hostRef.$flags$ |= 32;
    {
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
      {
        if (cmpMeta.$flags$ & (4 | 8)) {
          setContentReference(elm);
        }
      }
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent["s-p"]) {
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
      fireConnectedCallback(hostRef.$lazyInstance$);
    }
    endConnected();
  }
};
const setContentReference = (elm) => {
  const contentRefElm = elm["s-cr"] = doc.createComment("");
  contentRefElm["s-cn"] = true;
  elm.insertBefore(contentRefElm, elm.firstChild);
};
const disconnectedCallback = (elm) => {
  if ((plt.$flags$ & 1) === 0) {
    const hostRef = getHostRef(elm);
    const instance = hostRef.$lazyInstance$;
    {
      if (hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
    {
      safeCall(instance, "disconnectedCallback");
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
      return appendAfter.parentNode.insertBefore(newChild, appendAfter.nextSibling);
    }
    return this.__appendChild(newChild);
  };
};
const patchTextContent = (hostElementPrototype, cmpMeta) => {
  if (cmpMeta.$flags$ & 2) {
    const descriptor = Object.getOwnPropertyDescriptor(Node.prototype, "textContent");
    Object.defineProperty(hostElementPrototype, "__textContent", descriptor);
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
  const customElements = win.customElements;
  const head = doc.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const visibilityStyle = /* @__PURE__ */ doc.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", doc.baseURI).href;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
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
        cmpMeta.$watchers$ = {};
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
          {
            patchChildSlotNodes(self, cmpMeta);
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
        patchSlotAppendChild(HostElement.prototype);
      }
      {
        patchTextContent(HostElement.prototype, cmpMeta);
      }
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements.get(tagName)) {
        cmpTags.push(tagName);
        customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1));
      }
    });
  });
  {
    visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
    visibilityStyle.setAttribute("data-styles", "");
    const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
    if (nonce != null) {
      visibilityStyle.setAttribute("nonce", nonce);
    }
    head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
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
const hostListenerOpts = (flags) => (flags & 2) !== 0;
const hostRefs = /* @__PURE__ */ new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
const registerHost = (elm, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: elm,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  }
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    elm["s-p"] = [];
    elm["s-rc"] = [];
  }
  addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
  return hostRefs.set(elm, hostRef);
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
      case "ix-application-header":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-application-header.entry.40b44414.js"
        ), true ? ["ix-application-header.entry.40b44414.js","context-f6a2b727.b0a35cb0.js","typed-event-a230184a.ccfb44d2.js","service-fc436c5b.3249cd9f.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-basic-navigation":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-basic-navigation.entry.7851db78.js"
        ), true ? ["ix-basic-navigation.entry.7851db78.js","service-fc436c5b.3249cd9f.js","typed-event-a230184a.ccfb44d2.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-blind":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-blind.entry.80e1d5c0.js"
        ), true ? ["ix-blind.entry.80e1d5c0.js","anime.es-185e9087.87a18bcc.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-button.entry.2b9f1e97.js"
        ), true ? ["ix-button.entry.2b9f1e97.js","base-button-5bfeb71c.437bbfe2.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-category-filter":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-category-filter.entry.dbeb5139.js"
        ), true ? ["ix-category-filter.entry.dbeb5139.js","logical-filter-operator-92531263.182856a9.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-chip":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-chip.entry.a71ab381.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-counter-pill":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-counter-pill.entry.d8aa3239.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-drawer":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-drawer.entry.1b89eb0d.js"
        ), true ? ["ix-drawer.entry.1b89eb0d.js","anime.es-185e9087.87a18bcc.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-expanding-search":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-expanding-search.entry.02d3bca9.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-filter-chip":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-filter-chip.entry.9e410858.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-icon":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-icon.entry.d19b7ca3.js"
        ), true ? ["ix-icon.entry.d19b7ca3.js","icon-c659fc0f.a670d01b.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-icon-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-icon-button.entry.5923b014.js"
        ), true ? ["ix-icon-button.entry.5923b014.js","base-button-5bfeb71c.437bbfe2.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-input-group":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-input-group.entry.326c52be.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-message-bar":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-message-bar.entry.48ea91c8.js"
        ), true ? ["ix-message-bar.entry.48ea91c8.js","anime.es-185e9087.87a18bcc.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-pill":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-pill.entry.8dd04b4d.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-spinner":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-spinner.entry.0ffb105a.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-tile":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-tile.entry.1fc97667.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-toggle":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-toggle.entry.a1341eb2.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-upload":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-upload.entry.189e9e34.js"
        ), true ? ["ix-upload.entry.189e9e34.js","upload-file-state-532a36d3.458c962a.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-content-header":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-content-header.entry.a1003b84.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-empty-state":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-empty-state.entry.b50c168b.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-animated-tab_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-animated-tab_2.entry.7591cf28.js"
        ), true ? ["ix-animated-tab_2.entry.7591cf28.js","anime.es-185e9087.87a18bcc.js","animation-268dce50.df0d8da4.js","rwd.util-cfc2ea72.55fb8697.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-breadcrumb_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-breadcrumb_2.entry.311f0761.js"
        ), true ? ["ix-breadcrumb_2.entry.311f0761.js","anime.es-185e9087.87a18bcc.js","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-dropdown_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-dropdown_2.entry.714da4c5.js"
        ), true ? ["ix-dropdown_2.entry.714da4c5.js","floating-ui.dom.esm-3130eda0.5f933242.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-event-list_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-event-list_2.entry.9533d05e.js"
        ), true ? ["ix-event-list_2.entry.9533d05e.js","mutation-observer-7d01bbea.e6c38b94.js","rwd.util-cfc2ea72.55fb8697.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-flip-tile_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-flip-tile_2.entry.e9c0f62a.js"
        ), true ? ["ix-flip-tile_2.entry.e9c0f62a.js","flip-tile-state-051bb2fd.b2524409.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-map-navigation_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-map-navigation_2.entry.0d2ce855.js"
        ), true ? ["ix-map-navigation_2.entry.0d2ce855.js","anime.es-185e9087.87a18bcc.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-modal_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-modal_2.entry.6f44fe7c.js"
        ), true ? ["ix-modal_2.entry.6f44fe7c.js","anime.es-185e9087.87a18bcc.js","animation-268dce50.df0d8da4.js","typed-event-a230184a.ccfb44d2.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-select_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-select_2.entry.d8aa6ac9.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-split-button_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-split-button_2.entry.e936344f.js"
        ), true ? ["ix-split-button_2.entry.e936344f.js","base-button-5bfeb71c.437bbfe2.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-toast_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-toast_2.entry.8d3b8e31.js"
        ), true ? ["ix-toast_2.entry.8d3b8e31.js","typed-event-a230184a.ccfb44d2.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-tree_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-tree_2.entry.1cc6ad71.js"
        ), true ? ["ix-tree_2.entry.1cc6ad71.js","_commonjsHelpers-4bc7200a.1a540d71.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-workflow-step_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-workflow-step_2.entry.b56ab677.js"
        ), true ? ["ix-workflow-step_2.entry.b56ab677.js","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-group_3":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-group_3.entry.386640ec.js"
        ), true ? ["ix-group_3.entry.386640ec.js","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu_9":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu_9.entry.223b138b.js"
        ), true ? ["ix-menu_9.entry.223b138b.js","context-f6a2b727.b0a35cb0.js","typed-event-a230184a.ccfb44d2.js","rwd.util-cfc2ea72.55fb8697.js","service-fc436c5b.3249cd9f.js","theme-switcher-7498e4f2.143499f1.js","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-action-card":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-action-card.entry.f2f3cb78.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-card-list":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-card-list.entry.e5ca8cdc.js"
        ), true ? ["ix-card-list.entry.e5ca8cdc.js","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-css-grid":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-css-grid.entry.604cc827.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-css-grid-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-css-grid-item.entry.ad2423e7.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-datetime-picker":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-datetime-picker.entry.6a2f8f81.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-divider":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-divider.entry.4d2421dc.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-dropdown-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-dropdown-button.entry.0f4dfd12.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-dropdown-quick-actions":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-dropdown-quick-actions.entry.eb869bf1.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-key-value":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-key-value.entry.64b47f7e.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-key-value-list":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-key-value-list.entry.6a56b2a2.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-kpi":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-kpi.entry.18cfab50.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-modal-example":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-modal-example.entry.e1a6813a.js"
        ), true ? ["ix-modal-example.entry.e1a6813a.js","modal-utils-aecbcba5.95724bc3.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-pagination":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-pagination.entry.6d96bcd6.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-push-card":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-push-card.entry.1e5506f1.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-tooltip":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-tooltip.entry.1a0ff8df.js"
        ), true ? ["ix-tooltip.entry.1a0ff8df.js","floating-ui.dom.esm-3130eda0.5f933242.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-validation-tooltip":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-validation-tooltip.entry.2aaebfab.js"
        ), true ? ["ix-validation-tooltip.entry.2aaebfab.js","floating-ui.dom.esm-3130eda0.5f933242.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "my-component":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./my-component.entry.a95e39ef.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-card-accordion_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-card-accordion_2.entry.24105199.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-date-picker_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-date-picker_2.entry.fe0c8591.js"
        ), true ? ["ix-date-picker_2.entry.fe0c8591.js","_commonjsHelpers-4bc7200a.1a540d71.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-group-context-menu":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-group-context-menu.entry.a047559a.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-index-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-index-button.entry.32c23c48.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-tab-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-tab-item.entry.0c457566.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-tabs":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-tabs.entry.ece8aa7a.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-card_3":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-card_3.entry.adf66fae.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-date-time-card":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-date-time-card.entry.a57b9d3a.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-burger-menu":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-burger-menu.entry.63dffa5e.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
    }
  }
  return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./ix-action-card.entry.js": () => __vitePreload(() => import("./ix-action-card.entry.f2f3cb78.js"), true ? [] : void 0, import.meta.url), "./ix-animated-tab_2.entry.js": () => __vitePreload(() => import("./ix-animated-tab_2.entry.7591cf28.js"), true ? ["ix-animated-tab_2.entry.7591cf28.js","anime.es-185e9087.87a18bcc.js","animation-268dce50.df0d8da4.js","rwd.util-cfc2ea72.55fb8697.js"] : void 0, import.meta.url), "./ix-application-header.entry.js": () => __vitePreload(() => import("./ix-application-header.entry.40b44414.js"), true ? ["ix-application-header.entry.40b44414.js","context-f6a2b727.b0a35cb0.js","typed-event-a230184a.ccfb44d2.js","service-fc436c5b.3249cd9f.js"] : void 0, import.meta.url), "./ix-basic-navigation.entry.js": () => __vitePreload(() => import("./ix-basic-navigation.entry.7851db78.js"), true ? ["ix-basic-navigation.entry.7851db78.js","service-fc436c5b.3249cd9f.js","typed-event-a230184a.ccfb44d2.js"] : void 0, import.meta.url), "./ix-blind.entry.js": () => __vitePreload(() => import("./ix-blind.entry.80e1d5c0.js"), true ? ["ix-blind.entry.80e1d5c0.js","anime.es-185e9087.87a18bcc.js"] : void 0, import.meta.url), "./ix-breadcrumb_2.entry.js": () => __vitePreload(() => import("./ix-breadcrumb_2.entry.311f0761.js"), true ? ["ix-breadcrumb_2.entry.311f0761.js","anime.es-185e9087.87a18bcc.js","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url), "./ix-burger-menu.entry.js": () => __vitePreload(() => import("./ix-burger-menu.entry.63dffa5e.js"), true ? [] : void 0, import.meta.url), "./ix-button.entry.js": () => __vitePreload(() => import("./ix-button.entry.2b9f1e97.js"), true ? ["ix-button.entry.2b9f1e97.js","base-button-5bfeb71c.437bbfe2.js"] : void 0, import.meta.url), "./ix-card-accordion_2.entry.js": () => __vitePreload(() => import("./ix-card-accordion_2.entry.24105199.js"), true ? [] : void 0, import.meta.url), "./ix-card-list.entry.js": () => __vitePreload(() => import("./ix-card-list.entry.e5ca8cdc.js"), true ? ["ix-card-list.entry.e5ca8cdc.js","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url), "./ix-card_3.entry.js": () => __vitePreload(() => import("./ix-card_3.entry.adf66fae.js"), true ? [] : void 0, import.meta.url), "./ix-category-filter.entry.js": () => __vitePreload(() => import("./ix-category-filter.entry.dbeb5139.js"), true ? ["ix-category-filter.entry.dbeb5139.js","logical-filter-operator-92531263.182856a9.js"] : void 0, import.meta.url), "./ix-chip.entry.js": () => __vitePreload(() => import("./ix-chip.entry.a71ab381.js"), true ? [] : void 0, import.meta.url), "./ix-content-header.entry.js": () => __vitePreload(() => import("./ix-content-header.entry.a1003b84.js"), true ? [] : void 0, import.meta.url), "./ix-counter-pill.entry.js": () => __vitePreload(() => import("./ix-counter-pill.entry.d8aa3239.js"), true ? [] : void 0, import.meta.url), "./ix-css-grid-item.entry.js": () => __vitePreload(() => import("./ix-css-grid-item.entry.ad2423e7.js"), true ? [] : void 0, import.meta.url), "./ix-css-grid.entry.js": () => __vitePreload(() => import("./ix-css-grid.entry.604cc827.js"), true ? [] : void 0, import.meta.url), "./ix-date-picker_2.entry.js": () => __vitePreload(() => import("./ix-date-picker_2.entry.fe0c8591.js"), true ? ["ix-date-picker_2.entry.fe0c8591.js","_commonjsHelpers-4bc7200a.1a540d71.js"] : void 0, import.meta.url), "./ix-date-time-card.entry.js": () => __vitePreload(() => import("./ix-date-time-card.entry.a57b9d3a.js"), true ? [] : void 0, import.meta.url), "./ix-datetime-picker.entry.js": () => __vitePreload(() => import("./ix-datetime-picker.entry.6a2f8f81.js"), true ? [] : void 0, import.meta.url), "./ix-divider.entry.js": () => __vitePreload(() => import("./ix-divider.entry.4d2421dc.js"), true ? [] : void 0, import.meta.url), "./ix-drawer.entry.js": () => __vitePreload(() => import("./ix-drawer.entry.1b89eb0d.js"), true ? ["ix-drawer.entry.1b89eb0d.js","anime.es-185e9087.87a18bcc.js"] : void 0, import.meta.url), "./ix-dropdown-button.entry.js": () => __vitePreload(() => import("./ix-dropdown-button.entry.0f4dfd12.js"), true ? [] : void 0, import.meta.url), "./ix-dropdown-quick-actions.entry.js": () => __vitePreload(() => import("./ix-dropdown-quick-actions.entry.eb869bf1.js"), true ? [] : void 0, import.meta.url), "./ix-dropdown_2.entry.js": () => __vitePreload(() => import("./ix-dropdown_2.entry.714da4c5.js"), true ? ["ix-dropdown_2.entry.714da4c5.js","floating-ui.dom.esm-3130eda0.5f933242.js"] : void 0, import.meta.url), "./ix-empty-state.entry.js": () => __vitePreload(() => import("./ix-empty-state.entry.b50c168b.js"), true ? [] : void 0, import.meta.url), "./ix-event-list_2.entry.js": () => __vitePreload(() => import("./ix-event-list_2.entry.9533d05e.js"), true ? ["ix-event-list_2.entry.9533d05e.js","mutation-observer-7d01bbea.e6c38b94.js","rwd.util-cfc2ea72.55fb8697.js"] : void 0, import.meta.url), "./ix-expanding-search.entry.js": () => __vitePreload(() => import("./ix-expanding-search.entry.02d3bca9.js"), true ? [] : void 0, import.meta.url), "./ix-filter-chip.entry.js": () => __vitePreload(() => import("./ix-filter-chip.entry.9e410858.js"), true ? [] : void 0, import.meta.url), "./ix-flip-tile_2.entry.js": () => __vitePreload(() => import("./ix-flip-tile_2.entry.e9c0f62a.js"), true ? ["ix-flip-tile_2.entry.e9c0f62a.js","flip-tile-state-051bb2fd.b2524409.js"] : void 0, import.meta.url), "./ix-group-context-menu.entry.js": () => __vitePreload(() => import("./ix-group-context-menu.entry.a047559a.js"), true ? [] : void 0, import.meta.url), "./ix-group_3.entry.js": () => __vitePreload(() => import("./ix-group_3.entry.386640ec.js"), true ? ["ix-group_3.entry.386640ec.js","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url), "./ix-icon-button.entry.js": () => __vitePreload(() => import("./ix-icon-button.entry.5923b014.js"), true ? ["ix-icon-button.entry.5923b014.js","base-button-5bfeb71c.437bbfe2.js"] : void 0, import.meta.url), "./ix-icon.entry.js": () => __vitePreload(() => import("./ix-icon.entry.d19b7ca3.js"), true ? ["ix-icon.entry.d19b7ca3.js","icon-c659fc0f.a670d01b.js"] : void 0, import.meta.url), "./ix-index-button.entry.js": () => __vitePreload(() => import("./ix-index-button.entry.32c23c48.js"), true ? [] : void 0, import.meta.url), "./ix-input-group.entry.js": () => __vitePreload(() => import("./ix-input-group.entry.326c52be.js"), true ? [] : void 0, import.meta.url), "./ix-key-value-list.entry.js": () => __vitePreload(() => import("./ix-key-value-list.entry.6a56b2a2.js"), true ? [] : void 0, import.meta.url), "./ix-key-value.entry.js": () => __vitePreload(() => import("./ix-key-value.entry.64b47f7e.js"), true ? [] : void 0, import.meta.url), "./ix-kpi.entry.js": () => __vitePreload(() => import("./ix-kpi.entry.18cfab50.js"), true ? [] : void 0, import.meta.url), "./ix-map-navigation_2.entry.js": () => __vitePreload(() => import("./ix-map-navigation_2.entry.0d2ce855.js"), true ? ["ix-map-navigation_2.entry.0d2ce855.js","anime.es-185e9087.87a18bcc.js"] : void 0, import.meta.url), "./ix-menu_9.entry.js": () => __vitePreload(() => import("./ix-menu_9.entry.223b138b.js"), true ? ["ix-menu_9.entry.223b138b.js","context-f6a2b727.b0a35cb0.js","typed-event-a230184a.ccfb44d2.js","rwd.util-cfc2ea72.55fb8697.js","service-fc436c5b.3249cd9f.js","theme-switcher-7498e4f2.143499f1.js","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url), "./ix-message-bar.entry.js": () => __vitePreload(() => import("./ix-message-bar.entry.48ea91c8.js"), true ? ["ix-message-bar.entry.48ea91c8.js","anime.es-185e9087.87a18bcc.js"] : void 0, import.meta.url), "./ix-modal-example.entry.js": () => __vitePreload(() => import("./ix-modal-example.entry.e1a6813a.js"), true ? ["ix-modal-example.entry.e1a6813a.js","modal-utils-aecbcba5.95724bc3.js"] : void 0, import.meta.url), "./ix-modal_2.entry.js": () => __vitePreload(() => import("./ix-modal_2.entry.6f44fe7c.js"), true ? ["ix-modal_2.entry.6f44fe7c.js","anime.es-185e9087.87a18bcc.js","animation-268dce50.df0d8da4.js","typed-event-a230184a.ccfb44d2.js"] : void 0, import.meta.url), "./ix-pagination.entry.js": () => __vitePreload(() => import("./ix-pagination.entry.6d96bcd6.js"), true ? [] : void 0, import.meta.url), "./ix-pill.entry.js": () => __vitePreload(() => import("./ix-pill.entry.8dd04b4d.js"), true ? [] : void 0, import.meta.url), "./ix-push-card.entry.js": () => __vitePreload(() => import("./ix-push-card.entry.1e5506f1.js"), true ? [] : void 0, import.meta.url), "./ix-select_2.entry.js": () => __vitePreload(() => import("./ix-select_2.entry.d8aa6ac9.js"), true ? [] : void 0, import.meta.url), "./ix-spinner.entry.js": () => __vitePreload(() => import("./ix-spinner.entry.0ffb105a.js"), true ? [] : void 0, import.meta.url), "./ix-split-button_2.entry.js": () => __vitePreload(() => import("./ix-split-button_2.entry.e936344f.js"), true ? ["ix-split-button_2.entry.e936344f.js","base-button-5bfeb71c.437bbfe2.js"] : void 0, import.meta.url), "./ix-tab-item.entry.js": () => __vitePreload(() => import("./ix-tab-item.entry.0c457566.js"), true ? [] : void 0, import.meta.url), "./ix-tabs.entry.js": () => __vitePreload(() => import("./ix-tabs.entry.ece8aa7a.js"), true ? [] : void 0, import.meta.url), "./ix-tile.entry.js": () => __vitePreload(() => import("./ix-tile.entry.1fc97667.js"), true ? [] : void 0, import.meta.url), "./ix-toast_2.entry.js": () => __vitePreload(() => import("./ix-toast_2.entry.8d3b8e31.js"), true ? ["ix-toast_2.entry.8d3b8e31.js","typed-event-a230184a.ccfb44d2.js"] : void 0, import.meta.url), "./ix-toggle.entry.js": () => __vitePreload(() => import("./ix-toggle.entry.a1341eb2.js"), true ? [] : void 0, import.meta.url), "./ix-tooltip.entry.js": () => __vitePreload(() => import("./ix-tooltip.entry.1a0ff8df.js"), true ? ["ix-tooltip.entry.1a0ff8df.js","floating-ui.dom.esm-3130eda0.5f933242.js"] : void 0, import.meta.url), "./ix-tree_2.entry.js": () => __vitePreload(() => import("./ix-tree_2.entry.1cc6ad71.js"), true ? ["ix-tree_2.entry.1cc6ad71.js","_commonjsHelpers-4bc7200a.1a540d71.js"] : void 0, import.meta.url), "./ix-upload.entry.js": () => __vitePreload(() => import("./ix-upload.entry.189e9e34.js"), true ? ["ix-upload.entry.189e9e34.js","upload-file-state-532a36d3.458c962a.js"] : void 0, import.meta.url), "./ix-validation-tooltip.entry.js": () => __vitePreload(() => import("./ix-validation-tooltip.entry.2aaebfab.js"), true ? ["ix-validation-tooltip.entry.2aaebfab.js","floating-ui.dom.esm-3130eda0.5f933242.js"] : void 0, import.meta.url), "./ix-workflow-step_2.entry.js": () => __vitePreload(() => import("./ix-workflow-step_2.entry.b56ab677.js"), true ? ["ix-workflow-step_2.entry.b56ab677.js","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url), "./my-component.entry.js": () => __vitePreload(() => import("./my-component.entry.a95e39ef.js"), true ? [] : void 0, import.meta.url) }), `./${bundleId}.entry.js${""}`).then((importedModule) => {
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
const writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);
const patchEsm = () => {
  return promiseResolve();
};
const defineCustomElements = (win2, options) => {
  if (typeof window === "undefined")
    return Promise.resolve();
  return patchEsm().then(() => {
    return bootstrapLazy(JSON.parse('[["ix-icon",[[1,"ix-icon",{"size":[1],"color":[1],"name":[513],"src":[1],"svgContent":[32]}]]],["ix-pagination",[[2,"ix-pagination",{"advanced":[4],"itemCount":[2,"item-count"],"showItemCount":[4,"show-item-count"],"count":[2],"selectedPage":[1026,"selected-page"],"i18nPage":[1,"i-1-8n-page"],"i18nOf":[1,"i-1-8n-of"],"i18nItems":[1,"i-1-8n-items"]}]]],["ix-datetime-picker",[[2,"ix-datetime-picker",{"range":[4],"showHour":[4,"show-hour"],"showMinutes":[4,"show-minutes"],"showSeconds":[4,"show-seconds"],"minDate":[1,"min-date"],"maxDate":[1,"max-date"],"dateFormat":[1,"date-format"],"timeFormat":[1,"time-format"],"from":[1],"to":[1],"time":[1],"showTimeReference":[8,"show-time-reference"],"eventDelimiter":[1,"event-delimiter"],"timeReference":[1,"time-reference"],"textSelectDate":[1,"text-select-date"]}]]],["ix-card-list",[[1,"ix-card-list",{"label":[1],"collapse":[1028],"listStyle":[1,"list-style"],"maxVisibleCards":[2,"max-visible-cards"],"showAllCount":[2,"show-all-count"],"suppressOverflowHandling":[4,"suppress-overflow-handling"],"i18nShowAll":[1,"i-1-8n-show-all"],"i18nMoreCards":[1,"i-1-8n-more-cards"],"hasOverflowingElements":[32],"numberOfOverflowingElements":[32],"numberOfAllChildElements":[32],"leftScrollDistance":[32],"rightScrollDistance":[32]},[[9,"resize","detectOverflow"]]]]],["ix-push-card",[[1,"ix-push-card",{"icon":[1],"notification":[1],"heading":[1],"subheading":[1],"variant":[1]}]]],["ix-modal-example",[[0,"ix-modal-example"]]],["ix-split-button_2",[[6,"ix-split-button",{"variant":[1],"outline":[4],"invisible":[4],"ghost":[4],"label":[1],"icon":[1],"splitIcon":[1,"split-icon"],"disabled":[4],"placement":[1],"toggle":[32]}],[2,"ix-split-button-item",{"icon":[1],"label":[1]}]]],["ix-action-card",[[1,"ix-action-card",{"variant":[1],"icon":[1],"heading":[1],"subheading":[1],"selected":[4]}]]],["ix-category-filter",[[2,"ix-category-filter",{"initialState":[16],"filterState":[16],"placeholder":[1],"categories":[16],"nonSelectableCategories":[16],"suggestions":[16],"icon":[1],"hideIcon":[4,"hide-icon"],"repeatCategories":[4,"repeat-categories"],"tmpDisableScrollIntoView":[4,"tmp-disable-scroll-into-view"],"labelCategories":[1,"label-categories"],"i18nPlainText":[1,"i-1-8n-plain-text"],"textInput":[32],"hasFocus":[32],"categoryLogicalOperator":[32],"inputValue":[32],"category":[32],"filterTokens":[32]}]]],["ix-dropdown-button",[[6,"ix-dropdown-button",{"variant":[1],"outline":[4],"ghost":[4],"active":[4],"disabled":[4],"label":[1],"icon":[1],"dropdownAnchor":[32]}]]],["ix-breadcrumb_2",[[6,"ix-breadcrumb",{"visibleItemCount":[2,"visible-item-count"],"nextItems":[16],"ghost":[4],"previousButtonRef":[32],"nextButtonRef":[32],"items":[32]}],[6,"ix-breadcrumb-item",{"label":[1],"icon":[1]}]]],["ix-content-header",[[1,"ix-content-header",{"variant":[1],"headerTitle":[1,"header-title"],"headerSubtitle":[1,"header-subtitle"],"hasBackButton":[4,"has-back-button"]}]]],["ix-empty-state",[[1,"ix-empty-state",{"layout":[1],"icon":[1],"header":[1],"subHeader":[1,"sub-header"],"action":[1]}]]],["ix-flip-tile_2",[[6,"ix-flip-tile",{"state":[1],"footer":[1],"height":[8],"width":[8],"index":[32],"isFlipAnimationActive":[32]}],[1,"ix-flip-tile-content"]]],["ix-drawer",[[1,"ix-drawer",{"show":[1028],"closeOnClickOutside":[4,"close-on-click-outside"],"fullHeight":[4,"full-height"],"minWidth":[2,"min-width"],"maxWidth":[2,"max-width"],"width":[8],"toggleDrawer":[64]}]]],["ix-expanding-search",[[2,"ix-expanding-search",{"icon":[1],"placeholder":[1],"value":[1025],"fullWidth":[4,"full-width"],"isFieldChanged":[32],"expanded":[32],"hasFocus":[32]}]]],["ix-upload",[[2,"ix-upload",{"accept":[1],"multiple":[4],"multiline":[4],"disabled":[4],"state":[1],"selectFileText":[1,"select-file-text"],"loadingText":[1,"loading-text"],"uploadFailedText":[1,"upload-failed-text"],"uploadSuccessText":[1,"upload-success-text"],"i18nUploadFile":[1,"i-1-8n-upload-file"],"i18nUploadDisabled":[1,"i-1-8n-upload-disabled"],"isFileOver":[32],"setFilesToUpload":[64]}]]],["ix-application-header",[[1,"ix-application-header",{"name":[1],"mode":[32],"menuExpanded":[32]}]]],["ix-basic-navigation",[[6,"ix-basic-navigation",{"applicationName":[1,"application-name"],"hideHeader":[4,"hide-header"],"mode":[32]}]]],["ix-message-bar",[[1,"ix-message-bar",{"type":[1],"dismissible":[4],"icon":[32],"color":[32]}]]],["ix-animated-tab_2",[[6,"ix-animated-tabs",{"disableAnimations":[4,"disable-animations"],"selectedIndex":[2,"selected-index"],"tabPlacement":[1,"tab-placement"],"tabs":[32],"activeIndex":[32]},[[1,"mouseup","onMouseDown"]]],[6,"ix-animated-tab",{"icon":[1],"count":[514]}]]],["ix-workflow-step_2",[[6,"ix-workflow-step",{"vertical":[4],"disabled":[4],"status":[1],"clickable":[4],"selected":[1028],"position":[1],"iconName":[32],"iconColor":[32]},[[1,"click","clickFunction"]]],[6,"ix-workflow-steps",{"vertical":[4],"linear":[4],"clickable":[4],"selectedIndex":[2,"selected-index"]}]]],["ix-blind",[[1,"ix-blind",{"collapsed":[1540],"label":[1],"icon":[1]}]]],["ix-chip",[[6,"ix-chip",{"variant":[513],"active":[4],"closable":[4],"icon":[1],"background":[1],"color":[1],"outline":[4]}]]],["ix-key-value",[[1,"ix-key-value",{"icon":[1],"label":[1],"labelPosition":[1,"label-position"],"value":[1]}]]],["ix-kpi",[[1,"ix-kpi",{"label":[1],"value":[8],"unit":[1],"state":[1],"orientation":[1]}]]],["ix-pill",[[6,"ix-pill",{"variant":[513],"outline":[4],"icon":[1],"background":[1],"color":[1],"alignLeft":[4,"align-left"]}]]],["ix-tooltip",[[1,"ix-tooltip",{"for":[1],"titleContent":[1,"title-content"],"interactive":[4],"placement":[1],"visible":[32]}]]],["ix-event-list_2",[[6,"ix-event-list",{"itemHeight":[8,"item-height"],"compact":[4],"animated":[4],"chevron":[4]}],[4,"ix-event-list-item",{"color":[1],"selected":[4],"disabled":[4],"chevron":[4],"opacity":[2]},[[1,"click","handleItemClick"]]]]],["ix-counter-pill",[[6,"ix-counter-pill",{"variant":[513],"outline":[4],"background":[1],"color":[1],"alignLeft":[4,"align-left"]}]]],["ix-css-grid",[[1,"ix-css-grid",{"templates":[16],"currentTemplate":[32]}]]],["ix-css-grid-item",[[1,"ix-css-grid-item",{"itemName":[1,"item-name"]}]]],["ix-divider",[[1,"ix-divider"]]],["ix-dropdown-quick-actions",[[1,"ix-dropdown-quick-actions"]]],["ix-input-group",[[6,"ix-input-group"]]],["ix-key-value-list",[[1,"ix-key-value-list",{"striped":[4]}]]],["ix-tile",[[6,"ix-tile",{"size":[1]}]]],["ix-toggle",[[2,"ix-toggle",{"checked":[1540],"disabled":[4],"indeterminate":[4],"color":[1],"textOn":[1,"text-on"],"textOff":[1,"text-off"],"textIndeterminate":[1,"text-indeterminate"],"hideText":[4,"hide-text"]},[[8,"keydown","onKeyDown"]]]]],["ix-validation-tooltip",[[6,"ix-validation-tooltip",{"message":[1],"placement":[1],"isInputValid":[32],"tooltipPosition":[32],"arrowPosition":[32]}]]],["my-component",[[2,"my-component"]]],["ix-group_3",[[6,"ix-group",{"suppressHeaderSelection":[4,"suppress-header-selection"],"header":[1],"subHeader":[1,"sub-header"],"collapsed":[1540],"selected":[1540],"index":[1538],"expandOnHeaderClick":[4,"expand-on-header-click"],"itemSelected":[32],"dropdownTriggerRef":[32],"slotSize":[32]},[[8,"keydown","onKeyDown"]]],[6,"ix-group-dropdown-item",{"label":[1],"icon":[1]}],[6,"ix-group-item",{"icon":[1],"text":[1],"secondaryText":[1,"secondary-text"],"suppressSelection":[4,"suppress-selection"],"selected":[4],"focusable":[4],"index":[2]},[[1,"click","clickListen"]]]]],["ix-map-navigation_2",[[6,"ix-map-navigation",{"applicationName":[1,"application-name"],"navigationTitle":[1,"navigation-title"],"hideContextMenu":[4,"hide-context-menu"],"isSidebarOpen":[32],"toggleSidebar":[64],"openOverlay":[64],"closeOverlay":[64]}],[6,"ix-map-navigation-overlay",{"name":[1],"icon":[1],"color":[1]}]]],["ix-toast_2",[[2,"ix-toast-container",{"containerId":[1,"container-id"],"containerClass":[1,"container-class"],"position":[1],"showToast":[64]}],[6,"ix-toast",{"type":[1],"toastTitle":[1,"toast-title"],"autoCloseDelay":[2,"auto-close-delay"],"autoClose":[4,"auto-close"],"icon":[1],"iconColor":[1,"icon-color"],"progress":[32],"touched":[32]}]]],["ix-tree_2",[[6,"ix-tree",{"root":[1],"model":[16],"renderItem":[16],"context":[1040]}],[6,"ix-tree-item",{"text":[1],"hasChildren":[4,"has-children"],"context":[16]}]]],["ix-group-context-menu",[[6,"ix-group-context-menu",{"showContextMenu":[32]}]]],["ix-index-button",[[6,"ix-index-button",{"variant":[1],"selected":[4]}]]],["ix-spinner",[[1,"ix-spinner",{"variant":[1],"size":[1]}]]],["ix-menu_9",[[4,"ix-menu",{"showSettings":[1028,"show-settings"],"showAbout":[1028,"show-about"],"enableToggleTheme":[4,"enable-toggle-theme"],"enableSettings":[4,"enable-settings"],"enableMapExpand":[4,"enable-map-expand"],"applicationName":[1,"application-name"],"applicationDescription":[1,"application-description"],"maxVisibleMenuItems":[2,"max-visible-menu-items"],"i18nLegal":[1,"i-1-8n-legal"],"i18nSettings":[1,"i-1-8n-settings"],"i18nToggleTheme":[1,"i-1-8n-toggle-theme"],"i18nExpand":[1,"i-1-8n-expand"],"i18nCollapse":[1,"i-1-8n-collapse"],"i18nMore":[1,"i-1-8n-more"],"expand":[1540],"showMoreItems":[32],"visibleMenuItems":[32],"countMoreNotifications":[32],"mapExpand":[32],"activeTab":[32],"isMoreTabEmpty":[32],"mode":[32],"toggleMapExpand":[64],"toggleMenu":[64],"toggleSettings":[64],"toggleAbout":[64]},[[9,"resize","onWindowResize"]]],[6,"ix-menu-about",{"activeTabLabel":[1025,"active-tab-label"],"label":[1],"show":[4],"labels":[32]}],[6,"ix-menu-avatar",{"top":[1],"bottom":[1],"image":[1],"initials":[1],"i18nLogout":[1,"i-1-8n-logout"]}],[6,"ix-menu-settings",{"activeTabLabel":[1025,"active-tab-label"],"label":[1],"show":[4]}],[6,"ix-menu-about-news",{"show":[1540],"label":[1],"i18nShowMore":[1,"i-1-8n-show-more"],"aboutItemLabel":[1,"about-item-label"],"offsetBottom":[2,"offset-bottom"],"expanded":[4]}],[6,"ix-menu-about-item",{"label":[513]}],[6,"ix-menu-settings-item",{"label":[1]}],[2,"ix-menu-avatar-item",{"icon":[1],"label":[1]}],[1,"ix-menu-item",{"home":[4],"bottom":[4],"tabIcon":[1,"tab-icon"],"notifications":[2],"active":[4],"disabled":[4],"title":[32]}]]],["ix-date-picker_2",[[2,"ix-date-picker",{"format":[1],"range":[4],"individual":[4],"corners":[1],"from":[1],"to":[1],"minDate":[1,"min-date"],"maxDate":[1,"max-date"],"eventDelimiter":[1,"event-delimiter"],"textSelectDate":[1,"text-select-date"],"yearValue":[32],"today":[32],"monthValue":[32],"calendar":[32],"years":[32],"tempYear":[32],"tempMonth":[32],"start":[32],"end":[32],"dropdownButtonRef":[32],"yearContainerRef":[32],"getCurrentDate":[64]}],[2,"ix-time-picker",{"format":[1],"corners":[1],"individual":[4],"showHour":[4,"show-hour"],"showMinutes":[4,"show-minutes"],"showSeconds":[4,"show-seconds"],"time":[1],"showTimeReference":[1032,"show-time-reference"],"timeReference":[1025,"time-reference"],"textSelectTime":[1,"text-select-time"],"hourInputRef":[32],"minuteInputRef":[32],"secondInputRef":[32],"referenceInputRef":[32],"getCurrentTime":[64]}]]],["ix-card-accordion_2",[[1,"ix-card-accordion",{"expandContent":[32]}],[1,"ix-card-title"]]],["ix-tab-item",[[4,"ix-tab-item",{"selected":[4],"disabled":[4],"small":[4],"icon":[4],"rounded":[4],"counter":[2],"layout":[1],"placement":[1]}]]],["ix-tabs",[[4,"ix-tabs",{"small":[4],"rounded":[4],"selected":[1026],"layout":[1],"placement":[1],"totalItems":[32],"currentScrollAmount":[32],"scrollAmount":[32],"styleNextArrow":[32],"stylePreviousArrow":[32],"scrollActionAmount":[32]},[[9,"resize","onWindowResize"]]]]],["ix-select_2",[[6,"ix-select",{"selectedIndices":[1025,"selected-indices"],"allowClear":[4,"allow-clear"],"mode":[1],"editable":[4],"disabled":[4],"readonly":[4],"i18nPlaceholder":[1,"i-1-8n-placeholder"],"i18nPlaceholderEditable":[1,"i-1-8n-placeholder-editable"],"i18nSelectListHeader":[1,"i-1-8n-select-list-header"],"i18nNoMatches":[1,"i-1-8n-no-matches"],"hideListHeader":[4,"hide-list-header"],"dropdownShow":[32],"value":[32],"dropdownWrapperRef":[32],"dropdownAnchor":[32],"isDropdownEmpty":[32],"hasFocus":[32],"navigationItem":[32],"inputFilterText":[32],"inputValue":[32]},[[0,"itemClick","onItemClicked"],[0,"ix-select-item:labelChange","onLabelChange"],[8,"keydown","onKeyDown"]]],[2,"ix-select-item",{"label":[513],"value":[520],"selected":[4],"hover":[4],"onItemClick":[64]}]]],["ix-modal_2",[[2,"ix-modal-container",{"showModal":[64]}],[6,"ix-modal",{"animation":[4],"ariaDescribedBy":[1,"aria-described-by"],"ariaLabelledBy":[1,"aria-labelled-by"],"backdrop":[8],"backdropClass":[1,"backdrop-class"],"beforeDismiss":[16],"centered":[4],"content":[1],"keyboard":[4],"icon":[1],"iconColor":[1,"icon-color"],"modalDialogClass":[1,"modal-dialog-class"],"scrollable":[4],"size":[1],"headerTitle":[1,"header-title"],"windowClass":[1,"window-class"],"dismiss":[64],"close":[64]}]]],["ix-filter-chip",[[6,"ix-filter-chip",{"disabled":[4]}]]],["ix-date-time-card",[[6,"ix-date-time-card",{"individual":[4],"corners":[1]}]]],["ix-burger-menu",[[1,"ix-burger-menu",{"expanded":[516]}]]],["ix-button",[[1,"ix-button",{"variant":[1],"outline":[4],"invisible":[4],"ghost":[4],"selected":[4],"disabled":[516],"type":[1]}]]],["ix-card_3",[[1,"ix-card",{"variant":[1]}],[1,"ix-card-content"],[1,"ix-typography",{"variant":[1],"color":[1]}]]],["ix-dropdown_2",[[6,"ix-dropdown-item",{"label":[1],"icon":[1],"hover":[4],"disabled":[4],"checked":[4],"emitItemClick":[64]}],[1,"ix-dropdown",{"show":[1540],"trigger":[1],"anchor":[1],"closeBehavior":[8,"close-behavior"],"placement":[1],"positioningStrategy":[1,"positioning-strategy"],"adjustDropdownWidthToReferenceWith":[4,"adjust-dropdown-width-to-reference-with"],"adjustDropdownWidthToReferenceWidth":[4,"adjust-dropdown-width-to-reference-width"],"header":[1],"offset":[16],"triggerEvent":[1,"trigger-event"],"overwriteDropdownStyle":[16],"updatePosition":[64]},[[8,"click","clickOutside"]]]]],["ix-icon-button",[[1,"ix-icon-button",{"variant":[1],"outline":[4],"invisible":[4],"ghost":[4],"oval":[4],"icon":[1],"size":[1],"color":[1],"selected":[4],"disabled":[4],"type":[1]}]]]]'), options);
  });
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
export {
  Fragment as F,
  Host as H,
  applyPolyfills as a,
  createEvent as c,
  defineCustomElements as d,
  forceUpdate as f,
  getElement as g,
  h,
  registerInstance as r
};
