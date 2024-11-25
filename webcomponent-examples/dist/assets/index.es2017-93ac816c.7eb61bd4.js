import { _ as __vitePreload, b as __variableDynamicImportRuntimeHelper } from "./global.2bfd6008.js";
function applyPolyfills() {
  var promises = [];
  if (typeof window !== "undefined") {
    var win2 = window;
    if (!win2.customElements || win2.Element && (!win2.Element.prototype.closest || !win2.Element.prototype.matches || !win2.Element.prototype.remove || !win2.Element.prototype.getRootNode)) {
      promises.push(__vitePreload(() => import(
        /* webpackChunkName: "polyfills-dom" */
        "./dom-64ac48b5.c5443daf.js"
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
        "./core-js-78b486a8.95637ae8.js"
      ), true ? ["./core-js-78b486a8.95637ae8.js","./_commonjsHelpers-e557d4a5.97812a83.js"] : void 0, import.meta.url).then(function(n) {
        return n.c;
      }));
    }
  }
  return Promise.all(promises);
}
const NAMESPACE = "ix-icons";
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
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
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
  return vnode;
};
const Host = {};
const isHost = (node) => node && node.$tag$ === Host;
const parsePropertyValue = (propValue, propType) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 1) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
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
  }
  endAttachStyles();
};
const getScopeId = (cmp, mode) => "sc-" + cmp.$tagName$;
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
  if (oldValue !== newValue) {
    let isProp = isMemberInElement(elm, memberName);
    memberName.toLowerCase();
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
  {
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
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnode = vnodes[startIdx]) {
      elm = vnode.$elm$;
      elm.remove();
    }
  }
};
const updateChildren = (parentElm, oldCh, newVNode2, newCh) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
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
      {
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
    return true;
  }
  return false;
};
const patch = (oldVNode, newVNode2) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  {
    {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      {
        updateElement(oldVNode, newVNode2, isSvgMode);
      }
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren);
    } else if (newChildren !== null) {
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (oldChildren !== null) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    }
    if (isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  }
};
const renderVdom = (hostRef, renderFnResults) => {
  const hostElm = hostRef.$hostElement$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
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
  let promise;
  endSchedule();
  return then(promise, () => updateComponent(hostRef, instance, isInitialLoad));
};
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
  const ancestorComponent = hostRef.$ancestorComponent$;
  if (!(hostRef.$flags$ & 64)) {
    hostRef.$flags$ |= 64;
    {
      addHydratedFlag(elm);
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
const then = (promise, thenFn) => {
  return promise && promise.then ? promise.then(thenFn) : thenFn();
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
        return attrName;
      });
    }
  }
  return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
  if ((hostRef.$flags$ & 32) === 0) {
    {
      hostRef.$flags$ |= 32;
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
      fireConnectedCallback(hostRef.$lazyInstance$);
    }
    endConnected();
  }
};
const disconnectedCallback = (elm) => {
  if ((plt.$flags$ & 1) === 0) {
    getHostRef(elm);
  }
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
const setNonce = (nonce) => plt.$nonce$ = nonce;
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
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    elm["s-p"] = [];
    elm["s-rc"] = [];
  }
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
      case "ix-icon":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-icon.entry-621b700a.70733f16.js"
        ), true ? ["./ix-icon.entry-621b700a.70733f16.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url).then(processMod, consoleError);
    }
  }
  return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./ix-action-card.entry.js": () => __vitePreload(() => import("./ix-action-card.entry.034a6d96.js"), true ? ["./ix-action-card.entry.034a6d96.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-application-header.entry.js": () => __vitePreload(() => import("./ix-application-header.entry.dafec6cc.js"), true ? ["./ix-application-header.entry.dafec6cc.js","./global.2bfd6008.js","./global.4378a8ca.css","./index-60d17930.8cf998c6.js","./animation-4a73b1c3.59b7eda0.js","./modal-101eef04.04114a11.js","./typed-event-ad6484c5.eb731a3b.js","./service-c7fc628b.ff41f9d5.js","./breakpoints-d5c2f627.f0d6212d.js","./context-42311cff.2e905beb.js","./menu-service-f974814b.d8879f58.js","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url), "./ix-application-sidebar.entry.js": () => __vitePreload(() => import("./ix-application-sidebar.entry.2c92547a.js"), true ? ["./ix-application-sidebar.entry.2c92547a.js","./global.2bfd6008.js","./global.4378a8ca.css","./anime.es-a5520566.eae0a8f1.js","./animation-4a73b1c3.59b7eda0.js"] : void 0, import.meta.url), "./ix-application-switch-modal.entry.js": () => __vitePreload(() => import("./ix-application-switch-modal.entry.e869cfa7.js"), true ? ["./ix-application-switch-modal.entry.e869cfa7.js","./global.2bfd6008.js","./global.4378a8ca.css","./animation-4a73b1c3.59b7eda0.js","./modal-101eef04.04114a11.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url), "./ix-application.entry.js": () => __vitePreload(() => import("./ix-application.entry.25cfb6d3.js"), true ? ["./ix-application.entry.25cfb6d3.js","./global.2bfd6008.js","./global.4378a8ca.css","./context-42311cff.2e905beb.js","./typed-event-ad6484c5.eb731a3b.js","./service-c7fc628b.ff41f9d5.js","./breakpoints-d5c2f627.f0d6212d.js","./menu-service-f974814b.d8879f58.js","./shadow-dom-cc0bc152.fe0cdd32.js","./theme-switcher-5fcf712d.42146bb7.js"] : void 0, import.meta.url), "./ix-avatar_2.entry.js": () => __vitePreload(() => import("./ix-avatar_2.entry.ae7c3197.js"), true ? ["./ix-avatar_2.entry.ae7c3197.js","./global.2bfd6008.js","./global.4378a8ca.css","./base-button-845f2463.e96dae3b.js","./shadow-dom-cc0bc152.fe0cdd32.js","./make-ref-4b76e9b5.1c81bb51.js"] : void 0, import.meta.url), "./ix-basic-navigation.entry.js": () => __vitePreload(() => import("./ix-basic-navigation.entry.257e7ed2.js"), true ? ["./ix-basic-navigation.entry.257e7ed2.js","./global.2bfd6008.js","./global.4378a8ca.css","./context-42311cff.2e905beb.js","./typed-event-ad6484c5.eb731a3b.js","./service-c7fc628b.ff41f9d5.js","./breakpoints-d5c2f627.f0d6212d.js","./menu-service-f974814b.d8879f58.js"] : void 0, import.meta.url), "./ix-blind.entry.js": () => __vitePreload(() => import("./ix-blind.entry.2a7b2b43.js"), true ? ["./ix-blind.entry.2a7b2b43.js","./global.2bfd6008.js","./global.4378a8ca.css","./anime.es-a5520566.eae0a8f1.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-breadcrumb-item.entry.js": () => __vitePreload(() => import("./ix-breadcrumb-item.entry.b44c95ba.js"), true ? ["./ix-breadcrumb-item.entry.b44c95ba.js","./global.2bfd6008.js","./global.4378a8ca.css","./anime.es-a5520566.eae0a8f1.js","./base-button-845f2463.e96dae3b.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-breadcrumb.entry.js": () => __vitePreload(() => import("./ix-breadcrumb.entry.2b29466f.js"), true ? ["./ix-breadcrumb.entry.2b29466f.js","./global.2bfd6008.js","./global.4378a8ca.css","./a11y-b10c12e0.27b6344e.js","./mutation-observer-db8757e6.4a24be36.js","./make-ref-4b76e9b5.1c81bb51.js"] : void 0, import.meta.url), "./ix-button.entry.js": () => __vitePreload(() => import("./ix-button.entry.c9fb2030.js"), true ? ["./ix-button.entry.c9fb2030.js","./global.2bfd6008.js","./global.4378a8ca.css","./base-button-845f2463.e96dae3b.js"] : void 0, import.meta.url), "./ix-card-accordion_2.entry.js": () => __vitePreload(() => import("./ix-card-accordion_2.entry.f812f81a.js"), true ? ["./ix-card-accordion_2.entry.f812f81a.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-card-list.entry.js": () => __vitePreload(() => import("./ix-card-list.entry.e8b1a8cf.js"), true ? ["./ix-card-list.entry.e8b1a8cf.js","./global.2bfd6008.js","./global.4378a8ca.css","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url), "./ix-card_2.entry.js": () => __vitePreload(() => import("./ix-card_2.entry.d9b6c602.js"), true ? ["./ix-card_2.entry.d9b6c602.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-category-filter.entry.js": () => __vitePreload(() => import("./ix-category-filter.entry.be55598d.js"), true ? ["./ix-category-filter.entry.be55598d.js","./global.2bfd6008.js","./global.4378a8ca.css","./base-button-845f2463.e96dae3b.js","./logical-filter-operator-d793d1c3.ce417adc.js","./make-ref-4b76e9b5.1c81bb51.js","./disposable-event-listener-ff2cb862.2be8cd03.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-checkbox-group.entry.js": () => __vitePreload(() => import("./ix-checkbox-group.entry.3ac19526.js"), true ? ["./ix-checkbox-group.entry.3ac19526.js","./global.2bfd6008.js","./global.4378a8ca.css","./validation-45aa490c.d55c4dd8.js"] : void 0, import.meta.url), "./ix-checkbox.entry.js": () => __vitePreload(() => import("./ix-checkbox.entry.58798fa2.js"), true ? ["./ix-checkbox.entry.58798fa2.js","./global.2bfd6008.js","./global.4378a8ca.css","./validation-45aa490c.d55c4dd8.js","./make-ref-4b76e9b5.1c81bb51.js"] : void 0, import.meta.url), "./ix-chip.entry.js": () => __vitePreload(() => import("./ix-chip.entry.b6742c54.js"), true ? ["./ix-chip.entry.b6742c54.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-col_4.entry.js": () => __vitePreload(() => import("./ix-col_4.entry.ccf109ba.js"), true ? ["./ix-col_4.entry.ccf109ba.js","./global.2bfd6008.js","./global.4378a8ca.css","./breakpoints-d5c2f627.f0d6212d.js","./luxon-aa110584.36a0b316.js","./listener-18b29507.cf1bddf7.js","./make-ref-4b76e9b5.1c81bb51.js","./index-ad2af369.9c13b45b.js"] : void 0, import.meta.url), "./ix-content-header.entry.js": () => __vitePreload(() => import("./ix-content-header.entry.dcd2a739.js"), true ? ["./ix-content-header.entry.dcd2a739.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-content.entry.js": () => __vitePreload(() => import("./ix-content.entry.511fb9ed.js"), true ? ["./ix-content.entry.511fb9ed.js","./global.2bfd6008.js","./global.4378a8ca.css","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url), "./ix-css-grid-item.entry.js": () => __vitePreload(() => import("./ix-css-grid-item.entry.2fcfa573.js"), true ? ["./ix-css-grid-item.entry.2fcfa573.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-css-grid.entry.js": () => __vitePreload(() => import("./ix-css-grid.entry.b19e2a1b.js"), true ? ["./ix-css-grid.entry.b19e2a1b.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-custom-field.entry.js": () => __vitePreload(() => import("./ix-custom-field.entry.1479bef4.js"), true ? ["./ix-custom-field.entry.1479bef4.js","./global.2bfd6008.js","./global.4378a8ca.css","./validation-45aa490c.d55c4dd8.js"] : void 0, import.meta.url), "./ix-date-dropdown.entry.js": () => __vitePreload(() => import("./ix-date-dropdown.entry.44581bdb.js"), true ? ["./ix-date-dropdown.entry.44581bdb.js","./global.2bfd6008.js","./global.4378a8ca.css","./luxon-aa110584.36a0b316.js","./make-ref-4b76e9b5.1c81bb51.js"] : void 0, import.meta.url), "./ix-date-input.entry.js": () => __vitePreload(() => import("./ix-date-input.entry.a2fa01ae.js"), true ? ["./ix-date-input.entry.a2fa01ae.js","./global.2bfd6008.js","./global.4378a8ca.css","./luxon-aa110584.36a0b316.js","./dropdown-controller-cb6d3789.8979871d.js","./make-ref-4b76e9b5.1c81bb51.js","./validation-45aa490c.d55c4dd8.js","./input.util-715860e3.ac90be06.js","./a11y-b10c12e0.27b6344e.js","./rwd.util-d8e00a88.087cdec0.js","./anime.es-a5520566.eae0a8f1.js","./index-ad2af369.9c13b45b.js"] : void 0, import.meta.url), "./ix-date-time-card.entry.js": () => __vitePreload(() => import("./ix-date-time-card.entry.7072a36c.js"), true ? ["./ix-date-time-card.entry.7072a36c.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-datetime-picker.entry.js": () => __vitePreload(() => import("./ix-datetime-picker.entry.303c408c.js"), true ? ["./ix-datetime-picker.entry.303c408c.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-divider.entry.js": () => __vitePreload(() => import("./ix-divider.entry.25f90f9a.js"), true ? ["./ix-divider.entry.25f90f9a.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-drawer.entry.js": () => __vitePreload(() => import("./ix-drawer.entry.b7826158.js"), true ? ["./ix-drawer.entry.b7826158.js","./global.2bfd6008.js","./global.4378a8ca.css","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url), "./ix-dropdown-button.entry.js": () => __vitePreload(() => import("./ix-dropdown-button.entry.f4cee70f.js"), true ? ["./ix-dropdown-button.entry.f4cee70f.js","./global.2bfd6008.js","./global.4378a8ca.css","./make-ref-4b76e9b5.1c81bb51.js"] : void 0, import.meta.url), "./ix-dropdown-header.entry.js": () => __vitePreload(() => import("./ix-dropdown-header.entry.e019d4c0.js"), true ? ["./ix-dropdown-header.entry.e019d4c0.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-dropdown-item.entry.js": () => __vitePreload(() => import("./ix-dropdown-item.entry.0ea3e1a1.js"), true ? ["./ix-dropdown-item.entry.0ea3e1a1.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-dropdown-quick-actions.entry.js": () => __vitePreload(() => import("./ix-dropdown-quick-actions.entry.8bbbcfe3.js"), true ? ["./ix-dropdown-quick-actions.entry.8bbbcfe3.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-dropdown.entry.js": () => __vitePreload(() => import("./ix-dropdown.entry.86d402c2.js"), true ? ["./ix-dropdown.entry.86d402c2.js","./global.2bfd6008.js","./global.4378a8ca.css","./floating-ui.dom.esm-d4ad786a.60f1e3fd.js","./focus-664aef4f.9eed9d82.js","./disposable-event-listener-ff2cb862.2be8cd03.js","./dropdown-controller-cb6d3789.8979871d.js","./find-element-af8265f7.65e387a1.js"] : void 0, import.meta.url), "./ix-empty-state.entry.js": () => __vitePreload(() => import("./ix-empty-state.entry.feef6d00.js"), true ? ["./ix-empty-state.entry.feef6d00.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-event-list-item.entry.js": () => __vitePreload(() => import("./ix-event-list-item.entry.f89dbef2.js"), true ? ["./ix-event-list-item.entry.f89dbef2.js","./global.2bfd6008.js","./global.4378a8ca.css","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-event-list.entry.js": () => __vitePreload(() => import("./ix-event-list.entry.8dc28dde.js"), true ? ["./ix-event-list.entry.8dc28dde.js","./global.2bfd6008.js","./global.4378a8ca.css","./mutation-observer-db8757e6.4a24be36.js","./rwd.util-d8e00a88.087cdec0.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url), "./ix-expanding-search.entry.js": () => __vitePreload(() => import("./ix-expanding-search.entry.582413b5.js"), true ? ["./ix-expanding-search.entry.582413b5.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-field-label_3.entry.js": () => __vitePreload(() => import("./ix-field-label_3.entry.86d74731.js"), true ? ["./ix-field-label_3.entry.86d74731.js","./global.2bfd6008.js","./global.4378a8ca.css","./a11y-b10c12e0.27b6344e.js","./make-ref-4b76e9b5.1c81bb51.js","./validation-45aa490c.d55c4dd8.js","./helper-text-util-10896253.8c642af4.js","./index-ad2af369.9c13b45b.js","./floating-ui.dom.esm-d4ad786a.60f1e3fd.js","./listener-18b29507.cf1bddf7.js","./find-element-af8265f7.65e387a1.js"] : void 0, import.meta.url), "./ix-filter-chip_2.entry.js": () => __vitePreload(() => import("./ix-filter-chip_2.entry.0311e430.js"), true ? ["./ix-filter-chip_2.entry.0311e430.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-flip-tile-content.entry.js": () => __vitePreload(() => import("./ix-flip-tile-content.entry.405174a4.js"), true ? ["./ix-flip-tile-content.entry.405174a4.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-flip-tile.entry.js": () => __vitePreload(() => import("./ix-flip-tile.entry.af0d70c5.js"), true ? ["./ix-flip-tile.entry.af0d70c5.js","./global.2bfd6008.js","./global.4378a8ca.css","./mutation-observer-db8757e6.4a24be36.js","./flip-tile-state-76dd224a.ffe63233.js"] : void 0, import.meta.url), "./ix-group-context-menu_2.entry.js": () => __vitePreload(() => import("./ix-group-context-menu_2.entry.6a9c5704.js"), true ? ["./ix-group-context-menu_2.entry.6a9c5704.js","./global.2bfd6008.js","./global.4378a8ca.css","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url), "./ix-group.entry.js": () => __vitePreload(() => import("./ix-group.entry.18ec5cff.js"), true ? ["./ix-group.entry.18ec5cff.js","./global.2bfd6008.js","./global.4378a8ca.css","./mutation-observer-db8757e6.4a24be36.js","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url), "./ix-helper-text.entry.js": () => __vitePreload(() => import("./ix-helper-text.entry.05301da7.js"), true ? ["./ix-helper-text.entry.05301da7.js","./global.2bfd6008.js","./global.4378a8ca.css","./validation-45aa490c.d55c4dd8.js","./helper-text-util-10896253.8c642af4.js","./index-ad2af369.9c13b45b.js"] : void 0, import.meta.url), "./ix-icon-button_2.entry.js": () => __vitePreload(() => import("./ix-icon-button_2.entry.be6767c0.js"), true ? ["./ix-icon-button_2.entry.be6767c0.js","./global.2bfd6008.js","./global.4378a8ca.css","./base-icon-button-38e2f6e6.c07ed091.js","./base-button-845f2463.e96dae3b.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-icon-toggle-button.entry.js": () => __vitePreload(() => import("./ix-icon-toggle-button.entry.330634cf.js"), true ? ["./ix-icon-toggle-button.entry.330634cf.js","./global.2bfd6008.js","./global.4378a8ca.css","./base-icon-button-38e2f6e6.c07ed091.js","./base-button-845f2463.e96dae3b.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-input-group.entry.js": () => __vitePreload(() => import("./ix-input-group.entry.dc774219.js"), true ? ["./ix-input-group.entry.dc774219.js","./global.2bfd6008.js","./global.4378a8ca.css","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url), "./ix-input.entry.js": () => __vitePreload(() => import("./ix-input.entry.deae257d.js"), true ? ["./ix-input.entry.deae257d.js","./global.2bfd6008.js","./global.4378a8ca.css","./index-ad2af369.9c13b45b.js","./validation-45aa490c.d55c4dd8.js","./make-ref-4b76e9b5.1c81bb51.js","./input.util-715860e3.ac90be06.js","./a11y-b10c12e0.27b6344e.js","./rwd.util-d8e00a88.087cdec0.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url), "./ix-key-value-list.entry.js": () => __vitePreload(() => import("./ix-key-value-list.entry.99a335f5.js"), true ? ["./ix-key-value-list.entry.99a335f5.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-key-value.entry.js": () => __vitePreload(() => import("./ix-key-value.entry.68eb0197.js"), true ? ["./ix-key-value.entry.68eb0197.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-kpi.entry.js": () => __vitePreload(() => import("./ix-kpi.entry.bb002c58.js"), true ? ["./ix-kpi.entry.bb002c58.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-layout-auto.entry.js": () => __vitePreload(() => import("./ix-layout-auto.entry.fec106ae.js"), true ? ["./ix-layout-auto.entry.fec106ae.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-link-button.entry.js": () => __vitePreload(() => import("./ix-link-button.entry.aaa9ab01.js"), true ? ["./ix-link-button.entry.aaa9ab01.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-map-navigation-overlay.entry.js": () => __vitePreload(() => import("./ix-map-navigation-overlay.entry.772ae150.js"), true ? ["./ix-map-navigation-overlay.entry.772ae150.js","./global.2bfd6008.js","./global.4378a8ca.css","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url), "./ix-map-navigation.entry.js": () => __vitePreload(() => import("./ix-map-navigation.entry.cede303b.js"), true ? ["./ix-map-navigation.entry.cede303b.js","./global.2bfd6008.js","./global.4378a8ca.css","./anime.es-a5520566.eae0a8f1.js","./context-42311cff.2e905beb.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url), "./ix-menu-about-item.entry.js": () => __vitePreload(() => import("./ix-menu-about-item.entry.4926c0a2.js"), true ? ["./ix-menu-about-item.entry.4926c0a2.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-menu-about-news.entry.js": () => __vitePreload(() => import("./ix-menu-about-news.entry.1a6e8225.js"), true ? ["./ix-menu-about-news.entry.1a6e8225.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-menu-about.entry.js": () => __vitePreload(() => import("./ix-menu-about.entry.aacc9908.js"), true ? ["./ix-menu-about.entry.aacc9908.js","./global.2bfd6008.js","./global.4378a8ca.css","./menu-tabs-fc-563a74d9.2fa43975.js"] : void 0, import.meta.url), "./ix-menu-avatar.entry.js": () => __vitePreload(() => import("./ix-menu-avatar.entry.417d4e6f.js"), true ? ["./ix-menu-avatar.entry.417d4e6f.js","./global.2bfd6008.js","./global.4378a8ca.css","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url), "./ix-menu-category.entry.js": () => __vitePreload(() => import("./ix-menu-category.entry.55fd8d99.js"), true ? ["./ix-menu-category.entry.55fd8d99.js","./global.2bfd6008.js","./global.4378a8ca.css","./anime.es-a5520566.eae0a8f1.js","./context-42311cff.2e905beb.js","./typed-event-ad6484c5.eb731a3b.js","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url), "./ix-menu-expand-icon.entry.js": () => __vitePreload(() => import("./ix-menu-expand-icon.entry.2a70a114.js"), true ? ["./ix-menu-expand-icon.entry.2a70a114.js","./global.2bfd6008.js","./global.4378a8ca.css","./base-button-845f2463.e96dae3b.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-menu-item.entry.js": () => __vitePreload(() => import("./ix-menu-item.entry.1f0d07ba.js"), true ? ["./ix-menu-item.entry.1f0d07ba.js","./global.2bfd6008.js","./global.4378a8ca.css","./mutation-observer-db8757e6.4a24be36.js","./make-ref-4b76e9b5.1c81bb51.js","./menu-service-f974814b.d8879f58.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url), "./ix-menu-settings-item.entry.js": () => __vitePreload(() => import("./ix-menu-settings-item.entry.59883331.js"), true ? ["./ix-menu-settings-item.entry.59883331.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-menu-settings.entry.js": () => __vitePreload(() => import("./ix-menu-settings.entry.a95aa9b6.js"), true ? ["./ix-menu-settings.entry.a95aa9b6.js","./menu-tabs-fc-563a74d9.2fa43975.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-menu.entry.js": () => __vitePreload(() => import("./ix-menu.entry.711bbf40.js"), true ? ["./ix-menu.entry.711bbf40.js","./global.2bfd6008.js","./global.4378a8ca.css","./anime.es-a5520566.eae0a8f1.js","./index-60d17930.8cf998c6.js","./animation-4a73b1c3.59b7eda0.js","./modal-101eef04.04114a11.js","./typed-event-ad6484c5.eb731a3b.js","./context-42311cff.2e905beb.js","./service-c7fc628b.ff41f9d5.js","./breakpoints-d5c2f627.f0d6212d.js","./menu-service-f974814b.d8879f58.js","./rwd.util-d8e00a88.087cdec0.js","./theme-switcher-5fcf712d.42146bb7.js"] : void 0, import.meta.url), "./ix-message-bar.entry.js": () => __vitePreload(() => import("./ix-message-bar.entry.aa5d95b3.js"), true ? ["./ix-message-bar.entry.aa5d95b3.js","./global.2bfd6008.js","./global.4378a8ca.css","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url), "./ix-modal-content_2.entry.js": () => __vitePreload(() => import("./ix-modal-content_2.entry.205e7f72.js"), true ? ["./ix-modal-content_2.entry.205e7f72.js","./global.2bfd6008.js","./global.4378a8ca.css","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url), "./ix-modal-footer.entry.js": () => __vitePreload(() => import("./ix-modal-footer.entry.b756c72d.js"), true ? ["./ix-modal-footer.entry.b756c72d.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-modal-loading.entry.js": () => __vitePreload(() => import("./ix-modal-loading.entry.add55c66.js"), true ? ["./ix-modal-loading.entry.add55c66.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-modal.entry.js": () => __vitePreload(() => import("./ix-modal.entry.ff8bd705.js"), true ? ["./ix-modal.entry.ff8bd705.js","./global.2bfd6008.js","./global.4378a8ca.css","./anime.es-a5520566.eae0a8f1.js","./a11y-b10c12e0.27b6344e.js","./animation-4a73b1c3.59b7eda0.js","./listener-18b29507.cf1bddf7.js"] : void 0, import.meta.url), "./ix-number-input.entry.js": () => __vitePreload(() => import("./ix-number-input.entry.e6ac2ee9.js"), true ? ["./ix-number-input.entry.e6ac2ee9.js","./global.2bfd6008.js","./global.4378a8ca.css","./index-ad2af369.9c13b45b.js","./validation-45aa490c.d55c4dd8.js","./make-ref-4b76e9b5.1c81bb51.js","./input.util-715860e3.ac90be06.js","./a11y-b10c12e0.27b6344e.js","./rwd.util-d8e00a88.087cdec0.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url), "./ix-pagination.entry.js": () => __vitePreload(() => import("./ix-pagination.entry.a77c5956.js"), true ? ["./ix-pagination.entry.a77c5956.js","./global.2bfd6008.js","./global.4378a8ca.css","./base-button-845f2463.e96dae3b.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-pane-layout.entry.js": () => __vitePreload(() => import("./ix-pane-layout.entry.97898c6d.js"), true ? ["./ix-pane-layout.entry.97898c6d.js","./global.2bfd6008.js","./global.4378a8ca.css","./service-c7fc628b.ff41f9d5.js","./breakpoints-d5c2f627.f0d6212d.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url), "./ix-pane.entry.js": () => __vitePreload(() => import("./ix-pane.entry.0b6ba4f9.js"), true ? ["./ix-pane.entry.0b6ba4f9.js","./global.2bfd6008.js","./global.4378a8ca.css","./anime.es-a5520566.eae0a8f1.js","./animation-4a73b1c3.59b7eda0.js","./service-c7fc628b.ff41f9d5.js","./breakpoints-d5c2f627.f0d6212d.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url), "./ix-pill.entry.js": () => __vitePreload(() => import("./ix-pill.entry.c448d35e.js"), true ? ["./ix-pill.entry.c448d35e.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-push-card.entry.js": () => __vitePreload(() => import("./ix-push-card.entry.29a2a62a.js"), true ? ["./ix-push-card.entry.29a2a62a.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-radio-group.entry.js": () => __vitePreload(() => import("./ix-radio-group.entry.9ba7fe5c.js"), true ? ["./ix-radio-group.entry.9ba7fe5c.js","./global.2bfd6008.js","./global.4378a8ca.css","./validation-45aa490c.d55c4dd8.js"] : void 0, import.meta.url), "./ix-radio.entry.js": () => __vitePreload(() => import("./ix-radio.entry.ac65c2a0.js"), true ? ["./ix-radio.entry.ac65c2a0.js","./global.2bfd6008.js","./global.4378a8ca.css","./make-ref-4b76e9b5.1c81bb51.js"] : void 0, import.meta.url), "./ix-select.entry.js": () => __vitePreload(() => import("./ix-select.entry.c7c6fa83.js"), true ? ["./ix-select.entry.c7c6fa83.js","./global.2bfd6008.js","./global.4378a8ca.css","./focus-664aef4f.9eed9d82.js","./disposable-event-listener-ff2cb862.2be8cd03.js","./listener-18b29507.cf1bddf7.js","./mutation-observer-db8757e6.4a24be36.js","./validation-45aa490c.d55c4dd8.js","./make-ref-4b76e9b5.1c81bb51.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-slider.entry.js": () => __vitePreload(() => import("./ix-slider.entry.40f13fda.js"), true ? ["./ix-slider.entry.40f13fda.js","./global.2bfd6008.js","./global.4378a8ca.css","./a11y-b10c12e0.27b6344e.js","./listener-18b29507.cf1bddf7.js"] : void 0, import.meta.url), "./ix-split-button-item.entry.js": () => __vitePreload(() => import("./ix-split-button-item.entry.7ef61e13.js"), true ? ["./ix-split-button-item.entry.7ef61e13.js","./global.2bfd6008.js","./global.4378a8ca.css","./make-ref-4b76e9b5.1c81bb51.js"] : void 0, import.meta.url), "./ix-split-button.entry.js": () => __vitePreload(() => import("./ix-split-button.entry.d9e99d5e.js"), true ? ["./ix-split-button.entry.d9e99d5e.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-tab-item_2.entry.js": () => __vitePreload(() => import("./ix-tab-item_2.entry.474edd32.js"), true ? ["./ix-tab-item_2.entry.474edd32.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-textarea.entry.js": () => __vitePreload(() => import("./ix-textarea.entry.942134c3.js"), true ? ["./ix-textarea.entry.942134c3.js","./global.2bfd6008.js","./global.4378a8ca.css","./validation-45aa490c.d55c4dd8.js","./make-ref-4b76e9b5.1c81bb51.js","./input.util-715860e3.ac90be06.js","./a11y-b10c12e0.27b6344e.js","./rwd.util-d8e00a88.087cdec0.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url), "./ix-tile.entry.js": () => __vitePreload(() => import("./ix-tile.entry.257f82c7.js"), true ? ["./ix-tile.entry.257f82c7.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-time-picker.entry.js": () => __vitePreload(() => import("./ix-time-picker.entry.7c691539.js"), true ? ["./ix-time-picker.entry.7c691539.js","./global.2bfd6008.js","./global.4378a8ca.css","./luxon-aa110584.36a0b316.js","./index-ad2af369.9c13b45b.js"] : void 0, import.meta.url), "./ix-toast-container.entry.js": () => __vitePreload(() => import("./ix-toast-container.entry.f6c466c2.js"), true ? ["./ix-toast-container.entry.f6c466c2.js","./global.2bfd6008.js","./global.4378a8ca.css","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url), "./ix-toast.entry.js": () => __vitePreload(() => import("./ix-toast.entry.d51d62da.js"), true ? ["./ix-toast.entry.d51d62da.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-toggle-button.entry.js": () => __vitePreload(() => import("./ix-toggle-button.entry.6e3265cc.js"), true ? ["./ix-toggle-button.entry.6e3265cc.js","./global.2bfd6008.js","./global.4378a8ca.css","./base-button-845f2463.e96dae3b.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-toggle.entry.js": () => __vitePreload(() => import("./ix-toggle.entry.a39fc70f.js"), true ? ["./ix-toggle.entry.a39fc70f.js","./global.2bfd6008.js","./global.4378a8ca.css","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-tree-item.entry.js": () => __vitePreload(() => import("./ix-tree-item.entry.6001bb10.js"), true ? ["./ix-tree-item.entry.6001bb10.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-tree.entry.js": () => __vitePreload(() => import("./ix-tree.entry.a62c5aa6.js"), true ? ["./ix-tree.entry.a62c5aa6.js","./global.2bfd6008.js","./global.4378a8ca.css","./_commonjsHelpers-e557d4a5.97812a83.js","./dropdown-controller-cb6d3789.8979871d.js"] : void 0, import.meta.url), "./ix-typography.entry.js": () => __vitePreload(() => import("./ix-typography.entry.1eac3c06.js"), true ? ["./ix-typography.entry.1eac3c06.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-upload.entry.js": () => __vitePreload(() => import("./ix-upload.entry.f71b7d96.js"), true ? ["./ix-upload.entry.f71b7d96.js","./global.2bfd6008.js","./global.4378a8ca.css","./upload-file-state-de676cd5.96d9c6b3.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-validation-tooltip.entry.js": () => __vitePreload(() => import("./ix-validation-tooltip.entry.37e87ceb.js"), true ? ["./ix-validation-tooltip.entry.37e87ceb.js","./global.2bfd6008.js","./global.4378a8ca.css","./floating-ui.dom.esm-d4ad786a.60f1e3fd.js"] : void 0, import.meta.url), "./ix-workflow-step.entry.js": () => __vitePreload(() => import("./ix-workflow-step.entry.b6e69fa4.js"), true ? ["./ix-workflow-step.entry.b6e69fa4.js","./global.2bfd6008.js","./global.4378a8ca.css"] : void 0, import.meta.url), "./ix-workflow-steps.entry.js": () => __vitePreload(() => import("./ix-workflow-steps.entry.b30d4ebd.js"), true ? ["./ix-workflow-steps.entry.b30d4ebd.js","./global.2bfd6008.js","./global.4378a8ca.css","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url) }), `./${bundleId}.entry.js${""}`).then((importedModule) => {
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
    return bootstrapLazy([["ix-icon", [[1, "ix-icon", { "size": [1], "color": [1], "name": [1], "svgContent": [32] }]]]], options);
  });
};
const index_es2017 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  applyPolyfills,
  setNonce,
  defineCustomElements
});
export {
  Host as H,
  h,
  index_es2017 as i,
  registerInstance as r
};
