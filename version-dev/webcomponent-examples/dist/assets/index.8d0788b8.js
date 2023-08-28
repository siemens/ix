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
let hostTagName;
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
      patch(oldStartVnode, newEndVnode);
      parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode)) {
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
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld);
        } else {
          patch(elmToMove, newStartVnode);
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
const isSameVnode = (leftVNode, rightVNode) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    {
      return leftVNode.$key$ === rightVNode.$key$;
    }
  }
  return false;
};
const patch = (oldVNode, newVNode2) => {
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
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
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
  patch(oldVNode, rootVnode);
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
          "./ix-application-header.entry.73687263.js"
        ), true ? ["ix-application-header.entry.73687263.js","menu-service-b3076949.6e037adc.js","typed-event-a230184a.ccfb44d2.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-basic-navigation":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-basic-navigation.entry.d98470ae.js"
        ), true ? ["ix-basic-navigation.entry.d98470ae.js","menu-service-b3076949.6e037adc.js","typed-event-a230184a.ccfb44d2.js","service-586129b5.a3143e0d.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-blind":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-blind.entry.956b61d2.js"
        ), true ? ["ix-blind.entry.956b61d2.js","anime.es-185e9087.87a18bcc.js","a11y-aa83c2d1.2fdd46b0.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-button.entry.cc72e6c6.js"
        ), true ? ["ix-button.entry.cc72e6c6.js","base-button-76265f64.73f2c5ae.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-category-filter":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-category-filter.entry.fbdd8125.js"
        ), true ? ["ix-category-filter.entry.fbdd8125.js","logical-filter-operator-92531263.182856a9.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-chip":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-chip.entry.862fb633.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-drawer":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-drawer.entry.57e4dca9.js"
        ), true ? ["ix-drawer.entry.57e4dca9.js","anime.es-185e9087.87a18bcc.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-expanding-search":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-expanding-search.entry.2c36b8d2.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-filter-chip":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-filter-chip.entry.17036d55.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-icon":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-icon.entry.5e8e3e5f.js"
        ), true ? ["ix-icon.entry.5e8e3e5f.js","icon-f54a8bc4.4b13768c.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-icon-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-icon-button.entry.914baec1.js"
        ), true ? ["ix-icon-button.entry.914baec1.js","base-icon-button-7ac62a39.f8ee256c.js","base-button-76265f64.73f2c5ae.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-input-group":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-input-group.entry.cee1d1ca.js"
        ), true ? ["ix-input-group.entry.cee1d1ca.js","shadow-dom-6860b1c4.3ef97993.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-message-bar":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-message-bar.entry.6008f87f.js"
        ), true ? ["ix-message-bar.entry.6008f87f.js","anime.es-185e9087.87a18bcc.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-modal":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-modal.entry.cb92d95c.js"
        ), true ? ["ix-modal.entry.cb92d95c.js","anime.es-185e9087.87a18bcc.js","a11y-aa83c2d1.2fdd46b0.js","animation-268dce50.df0d8da4.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-pill":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-pill.entry.31e6c108.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-spinner":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-spinner.entry.9b07dda8.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-tile":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-tile.entry.6d177cc4.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-toggle":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-toggle.entry.2900fa9f.js"
        ), true ? ["ix-toggle.entry.2900fa9f.js","a11y-aa83c2d1.2fdd46b0.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-upload":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-upload.entry.fc2fe489.js"
        ), true ? ["ix-upload.entry.fc2fe489.js","upload-file-state-532a36d3.458c962a.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-content-header":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-content-header.entry.2e995774.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-empty-state":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-empty-state.entry.85658452.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-breadcrumb_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-breadcrumb_2.entry.88bd22f1.js"
        ), true ? ["ix-breadcrumb_2.entry.88bd22f1.js","a11y-aa83c2d1.2fdd46b0.js","mutation-observer-7d01bbea.e6c38b94.js","index-7b24b7fa.337d16e5.js","anime.es-185e9087.87a18bcc.js","base-button-76265f64.73f2c5ae.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-dropdown_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-dropdown_2.entry.6ca6a50d.js"
        ), true ? ["ix-dropdown_2.entry.6ca6a50d.js","floating-ui.dom.esm-cbe44820.60534149.js","index-7b24b7fa.337d16e5.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-event-list_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-event-list_2.entry.5c8eb631.js"
        ), true ? ["ix-event-list_2.entry.5c8eb631.js","mutation-observer-7d01bbea.e6c38b94.js","rwd.util-cfc2ea72.925cc3e0.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-flip-tile_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-flip-tile_2.entry.9dadd317.js"
        ), true ? ["ix-flip-tile_2.entry.9dadd317.js","mutation-observer-7d01bbea.e6c38b94.js","flip-tile-state-db31345f.fa15ac0c.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-group_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-group_2.entry.e25431b1.js"
        ), true ? ["ix-group_2.entry.e25431b1.js","mutation-observer-7d01bbea.e6c38b94.js","shadow-dom-6860b1c4.3ef97993.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-map-navigation_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-map-navigation_2.entry.369a8f59.js"
        ), true ? ["ix-map-navigation_2.entry.369a8f59.js","anime.es-185e9087.87a18bcc.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-select_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-select_2.entry.4018e013.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-split-button_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-split-button_2.entry.cab87759.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-toast_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-toast_2.entry.6c9410a4.js"
        ), true ? ["ix-toast_2.entry.6c9410a4.js","typed-event-a230184a.ccfb44d2.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-tree_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-tree_2.entry.1c0734f3.js"
        ), true ? ["ix-tree_2.entry.1c0734f3.js","_commonjsHelpers-4bc7200a.1a540d71.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-workflow-step_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-workflow-step_2.entry.26281447.js"
        ), true ? ["ix-workflow-step_2.entry.26281447.js","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu_9":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu_9.entry.33b4e336.js"
        ), true ? ["ix-menu_9.entry.33b4e336.js","anime.es-185e9087.87a18bcc.js","menu-service-b3076949.6e037adc.js","typed-event-a230184a.ccfb44d2.js","rwd.util-cfc2ea72.925cc3e0.js","context-381170ae.79625262.js","service-586129b5.a3143e0d.js","theme-switcher-7498e4f2.143499f1.js","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-action-card":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-action-card.entry.fd0be93b.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-card-list":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-card-list.entry.607f4486.js"
        ), true ? ["ix-card-list.entry.607f4486.js","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-css-grid":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-css-grid.entry.56179899.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-css-grid-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-css-grid-item.entry.76eba6d7.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-datetime-picker":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-datetime-picker.entry.645ecdf8.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-dropdown-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-dropdown-button.entry.7233855d.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-dropdown-header":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-dropdown-header.entry.f31a7a11.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-dropdown-quick-actions":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-dropdown-quick-actions.entry.cfb8968d.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-form-field":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-form-field.entry.e4e7293b.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-icon-toggle-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-icon-toggle-button.entry.37a7e1b7.js"
        ), true ? ["ix-icon-toggle-button.entry.37a7e1b7.js","base-icon-button-7ac62a39.f8ee256c.js","base-button-76265f64.73f2c5ae.js","a11y-aa83c2d1.2fdd46b0.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-key-value":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-key-value.entry.4af27b53.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-key-value-list":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-key-value-list.entry.3ec6d518.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-kpi":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-kpi.entry.ccc9443e.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-link-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-link-button.entry.eef925aa.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu-category":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu-category.entry.c94c0b87.js"
        ), true ? ["ix-menu-category.entry.c94c0b87.js","anime.es-185e9087.87a18bcc.js","mutation-observer-7d01bbea.e6c38b94.js","context-381170ae.79625262.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-modal-content":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-modal-content.entry.fbc10a6a.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-modal-example":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-modal-example.entry.7871791f.js"
        ), true ? ["ix-modal-example.entry.7871791f.js","animation-268dce50.df0d8da4.js","modal-68c6d3f6.b6b54fe0.js","typed-event-a230184a.ccfb44d2.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-modal-footer":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-modal-footer.entry.1bd765f4.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-modal-header":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-modal-header.entry.0390338b.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-modal-loading":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-modal-loading.entry.06d37bc0.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-pagination":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-pagination.entry.ca5481aa.js"
        ), true ? ["ix-pagination.entry.ca5481aa.js","base-button-76265f64.73f2c5ae.js","a11y-aa83c2d1.2fdd46b0.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-push-card":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-push-card.entry.773a3422.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-toggle-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-toggle-button.entry.e1ae474b.js"
        ), true ? ["ix-toggle-button.entry.e1ae474b.js","base-button-76265f64.73f2c5ae.js","a11y-aa83c2d1.2fdd46b0.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-tooltip":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-tooltip.entry.3557c33c.js"
        ), true ? ["ix-tooltip.entry.3557c33c.js","floating-ui.dom.esm-cbe44820.60534149.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-validation-tooltip":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-validation-tooltip.entry.3d2484dd.js"
        ), true ? ["ix-validation-tooltip.entry.3d2484dd.js","floating-ui.dom.esm-cbe44820.60534149.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "my-component":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./my-component.entry.64c6c7cd.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-avatar":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-avatar.entry.1ab34e57.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-card-accordion_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-card-accordion_2.entry.9cdf34fb.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-date-picker_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-date-picker_2.entry.a01c9d87.js"
        ), true ? ["ix-date-picker_2.entry.a01c9d87.js","_commonjsHelpers-4bc7200a.1a540d71.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-divider":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-divider.entry.d77cccc8.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-group-context-menu":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-group-context-menu.entry.3a065edf.js"
        ), true ? ["ix-group-context-menu.entry.3a065edf.js","shadow-dom-6860b1c4.3ef97993.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-tab-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-tab-item.entry.126dc0e6.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-tabs":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-tabs.entry.c39fca31.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-card_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-card_2.entry.8bcb0574.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-date-time-card":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-date-time-card.entry.f4f15c61.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-burger-menu":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-burger-menu.entry.e807ce62.js"
        ), true ? ["ix-burger-menu.entry.e807ce62.js","base-button-76265f64.73f2c5ae.js","a11y-aa83c2d1.2fdd46b0.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-typography":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-typography.entry.22ad566c.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
    }
  }
  return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./ix-action-card.entry.js": () => __vitePreload(() => import("./ix-action-card.entry.fd0be93b.js"), true ? [] : void 0, import.meta.url), "./ix-application-header.entry.js": () => __vitePreload(() => import("./ix-application-header.entry.73687263.js"), true ? ["ix-application-header.entry.73687263.js","menu-service-b3076949.6e037adc.js","typed-event-a230184a.ccfb44d2.js"] : void 0, import.meta.url), "./ix-avatar.entry.js": () => __vitePreload(() => import("./ix-avatar.entry.1ab34e57.js"), true ? [] : void 0, import.meta.url), "./ix-basic-navigation.entry.js": () => __vitePreload(() => import("./ix-basic-navigation.entry.d98470ae.js"), true ? ["ix-basic-navigation.entry.d98470ae.js","menu-service-b3076949.6e037adc.js","typed-event-a230184a.ccfb44d2.js","service-586129b5.a3143e0d.js"] : void 0, import.meta.url), "./ix-blind.entry.js": () => __vitePreload(() => import("./ix-blind.entry.956b61d2.js"), true ? ["ix-blind.entry.956b61d2.js","anime.es-185e9087.87a18bcc.js","a11y-aa83c2d1.2fdd46b0.js"] : void 0, import.meta.url), "./ix-breadcrumb_2.entry.js": () => __vitePreload(() => import("./ix-breadcrumb_2.entry.88bd22f1.js"), true ? ["ix-breadcrumb_2.entry.88bd22f1.js","a11y-aa83c2d1.2fdd46b0.js","mutation-observer-7d01bbea.e6c38b94.js","index-7b24b7fa.337d16e5.js","anime.es-185e9087.87a18bcc.js","base-button-76265f64.73f2c5ae.js"] : void 0, import.meta.url), "./ix-burger-menu.entry.js": () => __vitePreload(() => import("./ix-burger-menu.entry.e807ce62.js"), true ? ["ix-burger-menu.entry.e807ce62.js","base-button-76265f64.73f2c5ae.js","a11y-aa83c2d1.2fdd46b0.js"] : void 0, import.meta.url), "./ix-button.entry.js": () => __vitePreload(() => import("./ix-button.entry.cc72e6c6.js"), true ? ["ix-button.entry.cc72e6c6.js","base-button-76265f64.73f2c5ae.js"] : void 0, import.meta.url), "./ix-card-accordion_2.entry.js": () => __vitePreload(() => import("./ix-card-accordion_2.entry.9cdf34fb.js"), true ? [] : void 0, import.meta.url), "./ix-card-list.entry.js": () => __vitePreload(() => import("./ix-card-list.entry.607f4486.js"), true ? ["ix-card-list.entry.607f4486.js","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url), "./ix-card_2.entry.js": () => __vitePreload(() => import("./ix-card_2.entry.8bcb0574.js"), true ? [] : void 0, import.meta.url), "./ix-category-filter.entry.js": () => __vitePreload(() => import("./ix-category-filter.entry.fbdd8125.js"), true ? ["ix-category-filter.entry.fbdd8125.js","logical-filter-operator-92531263.182856a9.js"] : void 0, import.meta.url), "./ix-chip.entry.js": () => __vitePreload(() => import("./ix-chip.entry.862fb633.js"), true ? [] : void 0, import.meta.url), "./ix-content-header.entry.js": () => __vitePreload(() => import("./ix-content-header.entry.2e995774.js"), true ? [] : void 0, import.meta.url), "./ix-css-grid-item.entry.js": () => __vitePreload(() => import("./ix-css-grid-item.entry.76eba6d7.js"), true ? [] : void 0, import.meta.url), "./ix-css-grid.entry.js": () => __vitePreload(() => import("./ix-css-grid.entry.56179899.js"), true ? [] : void 0, import.meta.url), "./ix-date-picker_2.entry.js": () => __vitePreload(() => import("./ix-date-picker_2.entry.a01c9d87.js"), true ? ["ix-date-picker_2.entry.a01c9d87.js","_commonjsHelpers-4bc7200a.1a540d71.js"] : void 0, import.meta.url), "./ix-date-time-card.entry.js": () => __vitePreload(() => import("./ix-date-time-card.entry.f4f15c61.js"), true ? [] : void 0, import.meta.url), "./ix-datetime-picker.entry.js": () => __vitePreload(() => import("./ix-datetime-picker.entry.645ecdf8.js"), true ? [] : void 0, import.meta.url), "./ix-divider.entry.js": () => __vitePreload(() => import("./ix-divider.entry.d77cccc8.js"), true ? [] : void 0, import.meta.url), "./ix-drawer.entry.js": () => __vitePreload(() => import("./ix-drawer.entry.57e4dca9.js"), true ? ["ix-drawer.entry.57e4dca9.js","anime.es-185e9087.87a18bcc.js"] : void 0, import.meta.url), "./ix-dropdown-button.entry.js": () => __vitePreload(() => import("./ix-dropdown-button.entry.7233855d.js"), true ? [] : void 0, import.meta.url), "./ix-dropdown-header.entry.js": () => __vitePreload(() => import("./ix-dropdown-header.entry.f31a7a11.js"), true ? [] : void 0, import.meta.url), "./ix-dropdown-quick-actions.entry.js": () => __vitePreload(() => import("./ix-dropdown-quick-actions.entry.cfb8968d.js"), true ? [] : void 0, import.meta.url), "./ix-dropdown_2.entry.js": () => __vitePreload(() => import("./ix-dropdown_2.entry.6ca6a50d.js"), true ? ["ix-dropdown_2.entry.6ca6a50d.js","floating-ui.dom.esm-cbe44820.60534149.js","index-7b24b7fa.337d16e5.js"] : void 0, import.meta.url), "./ix-empty-state.entry.js": () => __vitePreload(() => import("./ix-empty-state.entry.85658452.js"), true ? [] : void 0, import.meta.url), "./ix-event-list_2.entry.js": () => __vitePreload(() => import("./ix-event-list_2.entry.5c8eb631.js"), true ? ["ix-event-list_2.entry.5c8eb631.js","mutation-observer-7d01bbea.e6c38b94.js","rwd.util-cfc2ea72.925cc3e0.js"] : void 0, import.meta.url), "./ix-expanding-search.entry.js": () => __vitePreload(() => import("./ix-expanding-search.entry.2c36b8d2.js"), true ? [] : void 0, import.meta.url), "./ix-filter-chip.entry.js": () => __vitePreload(() => import("./ix-filter-chip.entry.17036d55.js"), true ? [] : void 0, import.meta.url), "./ix-flip-tile_2.entry.js": () => __vitePreload(() => import("./ix-flip-tile_2.entry.9dadd317.js"), true ? ["ix-flip-tile_2.entry.9dadd317.js","mutation-observer-7d01bbea.e6c38b94.js","flip-tile-state-db31345f.fa15ac0c.js"] : void 0, import.meta.url), "./ix-form-field.entry.js": () => __vitePreload(() => import("./ix-form-field.entry.e4e7293b.js"), true ? [] : void 0, import.meta.url), "./ix-group-context-menu.entry.js": () => __vitePreload(() => import("./ix-group-context-menu.entry.3a065edf.js"), true ? ["ix-group-context-menu.entry.3a065edf.js","shadow-dom-6860b1c4.3ef97993.js"] : void 0, import.meta.url), "./ix-group_2.entry.js": () => __vitePreload(() => import("./ix-group_2.entry.e25431b1.js"), true ? ["ix-group_2.entry.e25431b1.js","mutation-observer-7d01bbea.e6c38b94.js","shadow-dom-6860b1c4.3ef97993.js"] : void 0, import.meta.url), "./ix-icon-button.entry.js": () => __vitePreload(() => import("./ix-icon-button.entry.914baec1.js"), true ? ["ix-icon-button.entry.914baec1.js","base-icon-button-7ac62a39.f8ee256c.js","base-button-76265f64.73f2c5ae.js"] : void 0, import.meta.url), "./ix-icon-toggle-button.entry.js": () => __vitePreload(() => import("./ix-icon-toggle-button.entry.37a7e1b7.js"), true ? ["ix-icon-toggle-button.entry.37a7e1b7.js","base-icon-button-7ac62a39.f8ee256c.js","base-button-76265f64.73f2c5ae.js","a11y-aa83c2d1.2fdd46b0.js"] : void 0, import.meta.url), "./ix-icon.entry.js": () => __vitePreload(() => import("./ix-icon.entry.5e8e3e5f.js"), true ? ["ix-icon.entry.5e8e3e5f.js","icon-f54a8bc4.4b13768c.js"] : void 0, import.meta.url), "./ix-input-group.entry.js": () => __vitePreload(() => import("./ix-input-group.entry.cee1d1ca.js"), true ? ["ix-input-group.entry.cee1d1ca.js","shadow-dom-6860b1c4.3ef97993.js"] : void 0, import.meta.url), "./ix-key-value-list.entry.js": () => __vitePreload(() => import("./ix-key-value-list.entry.3ec6d518.js"), true ? [] : void 0, import.meta.url), "./ix-key-value.entry.js": () => __vitePreload(() => import("./ix-key-value.entry.4af27b53.js"), true ? [] : void 0, import.meta.url), "./ix-kpi.entry.js": () => __vitePreload(() => import("./ix-kpi.entry.ccc9443e.js"), true ? [] : void 0, import.meta.url), "./ix-link-button.entry.js": () => __vitePreload(() => import("./ix-link-button.entry.eef925aa.js"), true ? [] : void 0, import.meta.url), "./ix-map-navigation_2.entry.js": () => __vitePreload(() => import("./ix-map-navigation_2.entry.369a8f59.js"), true ? ["ix-map-navigation_2.entry.369a8f59.js","anime.es-185e9087.87a18bcc.js"] : void 0, import.meta.url), "./ix-menu-category.entry.js": () => __vitePreload(() => import("./ix-menu-category.entry.c94c0b87.js"), true ? ["ix-menu-category.entry.c94c0b87.js","anime.es-185e9087.87a18bcc.js","mutation-observer-7d01bbea.e6c38b94.js","context-381170ae.79625262.js"] : void 0, import.meta.url), "./ix-menu_9.entry.js": () => __vitePreload(() => import("./ix-menu_9.entry.33b4e336.js"), true ? ["ix-menu_9.entry.33b4e336.js","anime.es-185e9087.87a18bcc.js","menu-service-b3076949.6e037adc.js","typed-event-a230184a.ccfb44d2.js","rwd.util-cfc2ea72.925cc3e0.js","context-381170ae.79625262.js","service-586129b5.a3143e0d.js","theme-switcher-7498e4f2.143499f1.js","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url), "./ix-message-bar.entry.js": () => __vitePreload(() => import("./ix-message-bar.entry.6008f87f.js"), true ? ["ix-message-bar.entry.6008f87f.js","anime.es-185e9087.87a18bcc.js"] : void 0, import.meta.url), "./ix-modal-content.entry.js": () => __vitePreload(() => import("./ix-modal-content.entry.fbc10a6a.js"), true ? [] : void 0, import.meta.url), "./ix-modal-example.entry.js": () => __vitePreload(() => import("./ix-modal-example.entry.7871791f.js"), true ? ["ix-modal-example.entry.7871791f.js","animation-268dce50.df0d8da4.js","modal-68c6d3f6.b6b54fe0.js","typed-event-a230184a.ccfb44d2.js"] : void 0, import.meta.url), "./ix-modal-footer.entry.js": () => __vitePreload(() => import("./ix-modal-footer.entry.1bd765f4.js"), true ? [] : void 0, import.meta.url), "./ix-modal-header.entry.js": () => __vitePreload(() => import("./ix-modal-header.entry.0390338b.js"), true ? [] : void 0, import.meta.url), "./ix-modal-loading.entry.js": () => __vitePreload(() => import("./ix-modal-loading.entry.06d37bc0.js"), true ? [] : void 0, import.meta.url), "./ix-modal.entry.js": () => __vitePreload(() => import("./ix-modal.entry.cb92d95c.js"), true ? ["ix-modal.entry.cb92d95c.js","anime.es-185e9087.87a18bcc.js","a11y-aa83c2d1.2fdd46b0.js","animation-268dce50.df0d8da4.js"] : void 0, import.meta.url), "./ix-pagination.entry.js": () => __vitePreload(() => import("./ix-pagination.entry.ca5481aa.js"), true ? ["ix-pagination.entry.ca5481aa.js","base-button-76265f64.73f2c5ae.js","a11y-aa83c2d1.2fdd46b0.js"] : void 0, import.meta.url), "./ix-pill.entry.js": () => __vitePreload(() => import("./ix-pill.entry.31e6c108.js"), true ? [] : void 0, import.meta.url), "./ix-push-card.entry.js": () => __vitePreload(() => import("./ix-push-card.entry.773a3422.js"), true ? [] : void 0, import.meta.url), "./ix-select_2.entry.js": () => __vitePreload(() => import("./ix-select_2.entry.4018e013.js"), true ? [] : void 0, import.meta.url), "./ix-spinner.entry.js": () => __vitePreload(() => import("./ix-spinner.entry.9b07dda8.js"), true ? [] : void 0, import.meta.url), "./ix-split-button_2.entry.js": () => __vitePreload(() => import("./ix-split-button_2.entry.cab87759.js"), true ? [] : void 0, import.meta.url), "./ix-tab-item.entry.js": () => __vitePreload(() => import("./ix-tab-item.entry.126dc0e6.js"), true ? [] : void 0, import.meta.url), "./ix-tabs.entry.js": () => __vitePreload(() => import("./ix-tabs.entry.c39fca31.js"), true ? [] : void 0, import.meta.url), "./ix-tile.entry.js": () => __vitePreload(() => import("./ix-tile.entry.6d177cc4.js"), true ? [] : void 0, import.meta.url), "./ix-toast_2.entry.js": () => __vitePreload(() => import("./ix-toast_2.entry.6c9410a4.js"), true ? ["ix-toast_2.entry.6c9410a4.js","typed-event-a230184a.ccfb44d2.js"] : void 0, import.meta.url), "./ix-toggle-button.entry.js": () => __vitePreload(() => import("./ix-toggle-button.entry.e1ae474b.js"), true ? ["ix-toggle-button.entry.e1ae474b.js","base-button-76265f64.73f2c5ae.js","a11y-aa83c2d1.2fdd46b0.js"] : void 0, import.meta.url), "./ix-toggle.entry.js": () => __vitePreload(() => import("./ix-toggle.entry.2900fa9f.js"), true ? ["ix-toggle.entry.2900fa9f.js","a11y-aa83c2d1.2fdd46b0.js"] : void 0, import.meta.url), "./ix-tooltip.entry.js": () => __vitePreload(() => import("./ix-tooltip.entry.3557c33c.js"), true ? ["ix-tooltip.entry.3557c33c.js","floating-ui.dom.esm-cbe44820.60534149.js"] : void 0, import.meta.url), "./ix-tree_2.entry.js": () => __vitePreload(() => import("./ix-tree_2.entry.1c0734f3.js"), true ? ["ix-tree_2.entry.1c0734f3.js","_commonjsHelpers-4bc7200a.1a540d71.js"] : void 0, import.meta.url), "./ix-typography.entry.js": () => __vitePreload(() => import("./ix-typography.entry.22ad566c.js"), true ? [] : void 0, import.meta.url), "./ix-upload.entry.js": () => __vitePreload(() => import("./ix-upload.entry.fc2fe489.js"), true ? ["ix-upload.entry.fc2fe489.js","upload-file-state-532a36d3.458c962a.js"] : void 0, import.meta.url), "./ix-validation-tooltip.entry.js": () => __vitePreload(() => import("./ix-validation-tooltip.entry.3d2484dd.js"), true ? ["ix-validation-tooltip.entry.3d2484dd.js","floating-ui.dom.esm-cbe44820.60534149.js"] : void 0, import.meta.url), "./ix-workflow-step_2.entry.js": () => __vitePreload(() => import("./ix-workflow-step_2.entry.26281447.js"), true ? ["ix-workflow-step_2.entry.26281447.js","mutation-observer-7d01bbea.e6c38b94.js"] : void 0, import.meta.url), "./my-component.entry.js": () => __vitePreload(() => import("./my-component.entry.64c6c7cd.js"), true ? [] : void 0, import.meta.url) }), `./${bundleId}.entry.js${""}`).then((importedModule) => {
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
    return bootstrapLazy(JSON.parse('[["ix-spinner",[[1,"ix-spinner",{"variant":[1],"size":[1],"hideTrack":[4,"hide-track"]}]]],["ix-icon",[[1,"ix-icon",{"size":[1],"color":[1],"name":[513],"src":[1],"svgContent":[32]}]]],["ix-action-card",[[1,"ix-action-card",{"variant":[1],"icon":[1],"heading":[1],"subheading":[1],"selected":[4]}]]],["ix-icon-button",[[1,"ix-icon-button",{"variant":[1],"outline":[4],"ghost":[4],"oval":[4],"icon":[1],"size":[1],"color":[1],"disabled":[4],"type":[1],"loading":[4]}]]],["ix-datetime-picker",[[1,"ix-datetime-picker",{"range":[4],"showHour":[4,"show-hour"],"showMinutes":[4,"show-minutes"],"showSeconds":[4,"show-seconds"],"minDate":[1,"min-date"],"maxDate":[1,"max-date"],"dateFormat":[1,"date-format"],"timeFormat":[1,"time-format"],"from":[1],"to":[1],"time":[1],"showTimeReference":[8,"show-time-reference"],"eventDelimiter":[1,"event-delimiter"],"timeReference":[1,"time-reference"],"textSelectDate":[1,"text-select-date"]}]]],["ix-pagination",[[1,"ix-pagination",{"advanced":[4],"itemCount":[2,"item-count"],"showItemCount":[4,"show-item-count"],"count":[2],"selectedPage":[1026,"selected-page"],"i18nPage":[1,"i-1-8n-page"],"i18nOf":[1,"i-1-8n-of"],"i18nItems":[1,"i-1-8n-items"]}]]],["ix-split-button_2",[[1,"ix-split-button",{"variant":[1],"outline":[4],"ghost":[4],"label":[1],"icon":[1],"splitIcon":[1,"split-icon"],"disabled":[4],"placement":[1],"toggle":[32]}],[1,"ix-split-button-item",{"icon":[1],"label":[1]}]]],["ix-card-list",[[1,"ix-card-list",{"label":[1],"collapse":[1028],"listStyle":[1,"list-style"],"maxVisibleCards":[2,"max-visible-cards"],"showAllCount":[2,"show-all-count"],"suppressOverflowHandling":[4,"suppress-overflow-handling"],"i18nShowAll":[1,"i-1-8n-show-all"],"i18nMoreCards":[1,"i-1-8n-more-cards"],"hasOverflowingElements":[32],"numberOfOverflowingElements":[32],"numberOfAllChildElements":[32],"leftScrollDistance":[32],"rightScrollDistance":[32]},[[9,"resize","detectOverflow"]]]]],["ix-menu-category",[[1,"ix-menu-category",{"label":[1],"icon":[1],"notifications":[2],"menuExpand":[32],"showItems":[32],"showDropdown":[32],"nestedItems":[32]}]]],["ix-push-card",[[1,"ix-push-card",{"icon":[1],"notification":[1],"heading":[1],"subheading":[1],"variant":[1]}]]],["ix-dropdown-button",[[1,"ix-dropdown-button",{"variant":[1],"outline":[4],"ghost":[4],"active":[4],"disabled":[4],"label":[1],"icon":[1],"placement":[1],"dropdownAnchor":[32]}]]],["ix-modal-example",[[0,"ix-modal-example"]]],["ix-modal-header",[[1,"ix-modal-header",{"hideClose":[4,"hide-close"],"icon":[1],"iconColor":[1,"icon-color"]}]]],["ix-icon-toggle-button",[[1,"ix-icon-toggle-button",{"variant":[1],"outline":[4],"ghost":[4],"icon":[1],"pressed":[4],"size":[1],"disabled":[516],"loading":[4]}]]],["ix-toggle-button",[[1,"ix-toggle-button",{"variant":[1],"outline":[4],"ghost":[4],"disabled":[516],"loading":[4],"icon":[1],"pressed":[4]}]]],["ix-dropdown-header",[[1,"ix-dropdown-header",{"label":[1]}]]],["ix-key-value",[[1,"ix-key-value",{"icon":[1],"label":[1],"labelPosition":[1,"label-position"],"value":[1]}]]],["ix-kpi",[[1,"ix-kpi",{"label":[1],"value":[8],"unit":[1],"state":[1],"orientation":[1]}]]],["ix-link-button",[[1,"ix-link-button",{"disabled":[4],"url":[1],"target":[1]}]]],["ix-modal-loading",[[1,"ix-modal-loading"]]],["ix-tooltip",[[1,"ix-tooltip",{"for":[1],"titleContent":[1,"title-content"],"interactive":[4],"placement":[1],"visible":[32]}]]],["ix-css-grid",[[1,"ix-css-grid",{"templates":[16],"currentTemplate":[32]}]]],["ix-css-grid-item",[[1,"ix-css-grid-item",{"itemName":[1,"item-name"]}]]],["ix-dropdown-quick-actions",[[1,"ix-dropdown-quick-actions"]]],["ix-form-field",[[1,"ix-form-field",{"label":[1]}]]],["ix-key-value-list",[[1,"ix-key-value-list",{"striped":[4]}]]],["ix-modal-content",[[1,"ix-modal-content"]]],["ix-modal-footer",[[1,"ix-modal-footer"]]],["ix-validation-tooltip",[[1,"ix-validation-tooltip",{"message":[1],"placement":[1],"suppressAutomaticPlacement":[4,"suppress-automatic-placement"],"isInputValid":[32],"tooltipPosition":[32],"arrowPosition":[32]}]]],["my-component",[[2,"my-component"]]],["ix-group-context-menu",[[1,"ix-group-context-menu",{"showContextMenu":[32]}]]],["ix-avatar",[[1,"ix-avatar",{"image":[1],"initials":[1]}]]],["ix-divider",[[1,"ix-divider"]]],["ix-date-picker_2",[[1,"ix-date-picker",{"format":[1],"range":[4],"individual":[4],"corners":[1],"from":[1],"to":[1],"minDate":[1,"min-date"],"maxDate":[1,"max-date"],"eventDelimiter":[1,"event-delimiter"],"textSelectDate":[1,"text-select-date"],"yearValue":[32],"today":[32],"monthValue":[32],"calendar":[32],"years":[32],"tempYear":[32],"tempMonth":[32],"start":[32],"end":[32],"dropdownButtonRef":[32],"yearContainerRef":[32],"getCurrentDate":[64]}],[1,"ix-time-picker",{"format":[1],"corners":[1],"individual":[4],"showHour":[4,"show-hour"],"showMinutes":[4,"show-minutes"],"showSeconds":[4,"show-seconds"],"time":[1],"showTimeReference":[1032,"show-time-reference"],"timeReference":[1025,"time-reference"],"textSelectTime":[1,"text-select-time"],"hourInputRef":[32],"minuteInputRef":[32],"secondInputRef":[32],"referenceInputRef":[32],"getCurrentTime":[64]}]]],["ix-application-header",[[1,"ix-application-header",{"name":[1],"mode":[1],"menuExpanded":[32]}]]],["ix-basic-navigation",[[1,"ix-basic-navigation",{"applicationName":[1,"application-name"],"hideHeader":[4,"hide-header"],"mode":[32]}]]],["ix-category-filter",[[2,"ix-category-filter",{"initialState":[16],"filterState":[16],"placeholder":[1],"categories":[16],"nonSelectableCategories":[16],"suggestions":[16],"icon":[1],"hideIcon":[4,"hide-icon"],"repeatCategories":[4,"repeat-categories"],"tmpDisableScrollIntoView":[4,"tmp-disable-scroll-into-view"],"labelCategories":[1,"label-categories"],"i18nPlainText":[1,"i-1-8n-plain-text"],"textInput":[32],"hasFocus":[32],"categoryLogicalOperator":[32],"inputValue":[32],"category":[32],"filterTokens":[32]}]]],["ix-content-header",[[1,"ix-content-header",{"variant":[1],"headerTitle":[1,"header-title"],"headerSubtitle":[1,"header-subtitle"],"hasBackButton":[4,"has-back-button"]}]]],["ix-empty-state",[[1,"ix-empty-state",{"layout":[1],"icon":[1],"header":[1],"subHeader":[1,"sub-header"],"action":[1]}]]],["ix-flip-tile_2",[[1,"ix-flip-tile",{"state":[1],"height":[8],"width":[8],"index":[32],"isFlipAnimationActive":[32]}],[1,"ix-flip-tile-content",{"contentVisible":[4,"content-visible"]}]]],["ix-chip",[[1,"ix-chip",{"variant":[513],"active":[4],"closable":[4],"icon":[1],"background":[1],"color":[1],"outline":[4]}]]],["ix-drawer",[[1,"ix-drawer",{"show":[1028],"closeOnClickOutside":[4,"close-on-click-outside"],"fullHeight":[4,"full-height"],"minWidth":[2,"min-width"],"maxWidth":[2,"max-width"],"width":[8],"toggleDrawer":[64]}]]],["ix-expanding-search",[[1,"ix-expanding-search",{"icon":[1],"placeholder":[1],"value":[1025],"fullWidth":[4,"full-width"],"isFieldChanged":[32],"expanded":[32],"hasFocus":[32]}]]],["ix-message-bar",[[1,"ix-message-bar",{"type":[1],"dismissible":[4],"icon":[32],"color":[32]}]]],["ix-upload",[[1,"ix-upload",{"accept":[1],"multiple":[4],"multiline":[4],"disabled":[4],"state":[1],"selectFileText":[1,"select-file-text"],"loadingText":[1,"loading-text"],"uploadFailedText":[1,"upload-failed-text"],"uploadSuccessText":[1,"upload-success-text"],"i18nUploadFile":[1,"i-1-8n-upload-file"],"i18nUploadDisabled":[1,"i-1-8n-upload-disabled"],"isFileOver":[32],"setFilesToUpload":[64]}]]],["ix-event-list_2",[[1,"ix-event-list-item",{"color":[1],"selected":[4],"disabled":[4],"chevron":[4],"opacity":[2]},[[1,"click","handleItemClick"]]],[1,"ix-event-list",{"itemHeight":[8,"item-height"],"compact":[4],"animated":[4],"chevron":[4]}]]],["ix-workflow-step_2",[[1,"ix-workflow-step",{"vertical":[4],"disabled":[4],"status":[1],"clickable":[4],"selected":[4],"position":[1],"iconName":[32],"iconColor":[32]}],[1,"ix-workflow-steps",{"vertical":[4],"clickable":[4],"selectedIndex":[2,"selected-index"]},[[0,"selectedChanged","onStepSelectionChanged"]]]]],["ix-blind",[[1,"ix-blind",{"collapsed":[1540],"label":[1],"icon":[1]}]]],["ix-pill",[[1,"ix-pill",{"variant":[513],"outline":[4],"icon":[1],"background":[1],"color":[1],"alignLeft":[4,"align-left"]}]]],["ix-input-group",[[1,"ix-input-group",{"inputPaddingLeft":[32],"inputPaddingRight":[32]}]]],["ix-modal",[[1,"ix-modal",{"size":[1],"animation":[4],"backdrop":[4],"closeOnBackdropClick":[4,"close-on-backdrop-click"],"beforeDismiss":[16],"centered":[4],"keyboard":[4],"showModal":[64],"dismissModal":[64],"closeModal":[64]}]]],["ix-tile",[[1,"ix-tile",{"size":[1],"hasHeaderSlot":[32],"hasFooterSlot":[32]}]]],["ix-toggle",[[1,"ix-toggle",{"checked":[1540],"disabled":[4],"indeterminate":[1540],"textOn":[1,"text-on"],"textOff":[1,"text-off"],"textIndeterminate":[1,"text-indeterminate"],"hideText":[4,"hide-text"]}]]],["ix-map-navigation_2",[[1,"ix-map-navigation",{"applicationName":[1,"application-name"],"navigationTitle":[1,"navigation-title"],"hideContextMenu":[4,"hide-context-menu"],"isSidebarOpen":[32],"hasContentHeader":[32],"toggleSidebar":[64],"openOverlay":[64],"closeOverlay":[64]}],[1,"ix-map-navigation-overlay",{"name":[1],"icon":[1],"color":[1]}]]],["ix-breadcrumb_2",[[1,"ix-breadcrumb",{"visibleItemCount":[2,"visible-item-count"],"nextItems":[16],"ghost":[4],"ariaLabelPreviousButton":[1,"aria-label-previous-button"],"previousButtonRef":[32],"nextButtonRef":[32],"items":[32],"isPreviousDropdownExpanded":[32]}],[1,"ix-breadcrumb-item",{"label":[1],"icon":[1],"ghost":[4],"visible":[4],"showChevron":[4,"show-chevron"],"isDropdownTrigger":[4,"is-dropdown-trigger"]}]]],["ix-toast_2",[[1,"ix-toast-container",{"containerId":[1,"container-id"],"containerClass":[1,"container-class"],"position":[1],"showToast":[64]}],[1,"ix-toast",{"type":[1],"toastTitle":[1,"toast-title"],"autoCloseDelay":[2,"auto-close-delay"],"autoClose":[4,"auto-close"],"icon":[1],"iconColor":[1,"icon-color"],"progress":[32],"touched":[32]}]]],["ix-group_2",[[1,"ix-group",{"suppressHeaderSelection":[4,"suppress-header-selection"],"header":[1],"subHeader":[1,"sub-header"],"collapsed":[1540],"selected":[1540],"index":[1538],"expandOnHeaderClick":[4,"expand-on-header-click"],"itemSelected":[32],"dropdownTriggerRef":[32],"slotSize":[32],"footerVisible":[32]}],[1,"ix-group-item",{"icon":[1],"text":[1],"secondaryText":[1,"secondary-text"],"suppressSelection":[4,"suppress-selection"],"selected":[4],"focusable":[4],"index":[2]},[[1,"click","clickListen"]]]]],["ix-tree_2",[[1,"ix-tree",{"root":[1],"model":[16],"renderItem":[16],"context":[1040]}],[1,"ix-tree-item",{"text":[1],"hasChildren":[4,"has-children"],"context":[16]}]]],["ix-card-accordion_2",[[1,"ix-card-accordion",{"expandContent":[32]}],[1,"ix-card-title"]]],["ix-tabs",[[1,"ix-tabs",{"small":[4],"rounded":[4],"selected":[1026],"layout":[1],"placement":[1],"totalItems":[32],"currentScrollAmount":[32],"scrollAmount":[32],"styleNextArrow":[32],"stylePreviousArrow":[32],"scrollActionAmount":[32]},[[9,"resize","onWindowResize"],[0,"tabClick","onTabClick"]]]]],["ix-tab-item",[[1,"ix-tab-item",{"selected":[4],"disabled":[4],"small":[4],"icon":[4],"rounded":[4],"counter":[2],"layout":[1],"placement":[1]}]]],["ix-menu_9",[[1,"ix-menu",{"showSettings":[1028,"show-settings"],"showAbout":[1028,"show-about"],"enableToggleTheme":[4,"enable-toggle-theme"],"enableSettings":[4,"enable-settings"],"enableMapExpand":[4,"enable-map-expand"],"applicationName":[1,"application-name"],"applicationDescription":[1,"application-description"],"maxVisibleMenuItems":[2,"max-visible-menu-items"],"i18nExpandSidebar":[1,"i-1-8n-expand-sidebar"],"expand":[1540],"pinned":[4],"forceLayout":[1,"force-layout"],"supportedModes":[16],"i18nLegal":[1,"i-1-8n-legal"],"i18nSettings":[1,"i-1-8n-settings"],"i18nToggleTheme":[1,"i-1-8n-toggle-theme"],"i18nExpand":[1,"i-1-8n-expand"],"i18nCollapse":[1,"i-1-8n-collapse"],"showPinned":[32],"mapExpand":[32],"activeTab":[32],"mode":[32],"itemsScrollShadowTop":[32],"itemsScrollShadowBottom":[32],"toggleMapExpand":[64],"toggleMenu":[64],"toggleSettings":[64],"toggleAbout":[64]},[[9,"resize","handleOverflowIndicator"],[0,"close","onOverlayClose"]]],[1,"ix-menu-about",{"activeTabLabel":[1025,"active-tab-label"],"label":[1],"show":[4],"labels":[32]}],[1,"ix-menu-about-news",{"show":[1540],"label":[1],"i18nShowMore":[1,"i-1-8n-show-more"],"aboutItemLabel":[1,"about-item-label"],"offsetBottom":[2,"offset-bottom"],"expanded":[4]}],[1,"ix-menu-avatar",{"top":[1],"bottom":[1],"image":[1],"initials":[1],"i18nLogout":[1,"i-1-8n-logout"]}],[1,"ix-menu-settings",{"activeTabLabel":[1025,"active-tab-label"],"label":[1],"show":[4]}],[1,"ix-menu-about-item",{"label":[513]}],[1,"ix-menu-settings-item",{"label":[1]}],[1,"ix-menu-avatar-item",{"icon":[1],"label":[1]}],[1,"ix-menu-item",{"home":[4],"bottom":[4],"tabIcon":[1,"tab-icon"],"icon":[1],"notifications":[2],"active":[4],"disabled":[4],"title":[32]}]]],["ix-filter-chip",[[1,"ix-filter-chip",{"disabled":[4]}]]],["ix-button",[[1,"ix-button",{"variant":[1],"outline":[4],"ghost":[4],"disabled":[516],"type":[1],"loading":[4],"icon":[1],"alignment":[1],"iconSize":[1,"icon-size"]}]]],["ix-dropdown_2",[[1,"ix-dropdown-item",{"label":[1],"icon":[1],"hover":[4],"disabled":[4],"checked":[4],"isSubMenu":[4,"is-sub-menu"],"suppressChecked":[4,"suppress-checked"],"emitItemClick":[64]}],[1,"ix-dropdown",{"suppressAutomaticPlacement":[4,"suppress-automatic-placement"],"show":[1540],"trigger":[1],"anchor":[1],"closeBehavior":[8,"close-behavior"],"placement":[1],"positioningStrategy":[1,"positioning-strategy"],"header":[1],"offset":[16],"triggerEvent":[1,"trigger-event"],"overwriteDropdownStyle":[16],"updatePosition":[64]},[[8,"click","clickOutside"],[8,"keydown","keydown"]]]]],["ix-select_2",[[1,"ix-select",{"selectedIndices":[1025,"selected-indices"],"allowClear":[4,"allow-clear"],"mode":[1],"editable":[4],"disabled":[4],"readonly":[4],"i18nPlaceholder":[1,"i-1-8n-placeholder"],"i18nPlaceholderEditable":[1,"i-1-8n-placeholder-editable"],"i18nSelectListHeader":[1,"i-1-8n-select-list-header"],"i18nNoMatches":[1,"i-1-8n-no-matches"],"hideListHeader":[4,"hide-list-header"],"dropdownShow":[32],"value":[32],"dropdownWrapperRef":[32],"dropdownAnchor":[32],"isDropdownEmpty":[32],"hasFocus":[32],"navigationItem":[32],"inputFilterText":[32],"inputValue":[32]},[[0,"itemClick","onItemClicked"],[0,"ix-select-item:labelChange","onLabelChange"],[8,"keydown","onKeyDown"]]],[1,"ix-select-item",{"label":[513],"value":[520],"selected":[4],"hover":[4],"onItemClick":[64]}]]],["ix-date-time-card",[[1,"ix-date-time-card",{"individual":[4],"corners":[1]}]]],["ix-burger-menu",[[1,"ix-burger-menu",{"ixAriaLabel":[1,"ix-aria-label"],"expanded":[516],"pinned":[4]}]]],["ix-card_2",[[1,"ix-card",{"variant":[1]}],[1,"ix-card-content"]]],["ix-typography",[[1,"ix-typography",{"variant":[1],"format":[1],"color":[1],"bold":[4],"textDecoration":[1,"text-decoration"]}]]]]'), options);
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
