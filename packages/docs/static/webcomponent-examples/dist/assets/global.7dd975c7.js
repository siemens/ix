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
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var EMPTY_OBJ = {};
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";
var isDef = (v) => v != null;
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};
function queryNonceMetaTagContent(doc2) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc2.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};
var createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
var CONTENT_REF_ID = "r";
var ORG_LOCATION_ID = "o";
var SLOT_NODE_ID = "s";
var TEXT_NODE_ID = "t";
var HYDRATE_ID = "s-id";
var HYDRATED_STYLE_ID = "sty-id";
var HYDRATE_CHILD_ID = "c-id";
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS = [
  "formAssociatedCallback",
  "formResetCallback",
  "formDisabledCallback",
  "formStateRestoreCallback"
];
var h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
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
    return nodeName(
      vnodeData === null ? {} : vnodeData,
      vNodeChildren,
      vdomFnUtils
    );
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
var newVNode = (tag, text) => {
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
var Host = {};
var isHost = (node) => node && node.$tag$ === Host;
var vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
var convertToPublic = (node) => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
var convertToPrivate = (node) => {
  if (typeof node.vtag === "function") {
    const vnodeData = { ...node.vattrs };
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
var initializeClientHydrate = (hostElm, tagName, hostId, hostRef) => {
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
var clientHydrate = (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId) => {
  let childNodeType;
  let childIdSplt;
  let childVNode;
  let i2;
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
    for (i2 = node.childNodes.length - 1; i2 >= 0; i2--) {
      clientHydrate(
        parentVNode,
        childRenderNodes,
        slotNodes,
        shadowRootNodes,
        hostElm,
        node.childNodes[i2],
        hostId
      );
    }
    if (node.shadowRoot) {
      for (i2 = node.shadowRoot.childNodes.length - 1; i2 >= 0; i2--) {
        clientHydrate(
          parentVNode,
          childRenderNodes,
          slotNodes,
          shadowRootNodes,
          hostElm,
          node.shadowRoot.childNodes[i2],
          hostId
        );
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
var initializeDocumentHydrate = (node, orgLocNodes) => {
  if (node.nodeType === 1) {
    let i2 = 0;
    for (; i2 < node.childNodes.length; i2++) {
      initializeDocumentHydrate(node.childNodes[i2], orgLocNodes);
    }
    if (node.shadowRoot) {
      for (i2 = 0; i2 < node.shadowRoot.childNodes.length; i2++) {
        initializeDocumentHydrate(node.shadowRoot.childNodes[i2], orgLocNodes);
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
var parsePropertyValue = (propValue, propType) => {
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
var getElement = (ref) => getHostRef(ref).$hostElement$;
var createEvent = (ref, name, flags) => {
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
var emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = (scopeId2, cssText, allowCS) => {
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
var addStyle = (styleContainerNode, cmpMeta, mode) => {
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
          const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(doc);
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
var attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(
    elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(),
    cmpMeta
  );
  if (flags & 10) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
  }
  endAttachStyles();
};
var getScopeId = (cmp, mode) => "sc-" + cmp.$tagName$;
var convertScopedToShadow = (css) => css.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, "$1{");
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
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
var parseClassListRegex = /\s/;
var parseClassList = (value) => !value ? [] : value.split(parseClassListRegex);
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");
var updateElement = (oldVnode, newVnode, isSvgMode2) => {
  const elm = newVnode.$elm$.nodeType === 11 && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || EMPTY_OBJ;
  const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
  {
    for (const memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode2, newVnode.$flags$);
      }
    }
  }
  for (const memberName of sortedAttrNames(Object.keys(newVnodeAttrs))) {
    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode2, newVnode.$flags$);
  }
};
function sortedAttrNames(attrNames) {
  return attrNames.includes("ref") ? [...attrNames.filter((attr) => attr !== "ref"), "ref"] : attrNames;
}
var scopeId;
var hostTagName;
var useNativeShadowDom = false;
var isSvgMode = false;
var createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = doc.createTextNode(newVNode2.$text$);
  } else {
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    elm = newVNode2.$elm$ = doc.createElementNS(
      isSvgMode ? SVG_NS : HTML_NS,
      newVNode2.$tag$
    );
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
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2);
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
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
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
var removeVnodes = (vnodes, startIdx, endIdx) => {
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
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
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
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
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
    addVnodes(
      parentElm,
      newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$,
      newVNode2,
      newCh,
      newStartIdx,
      newEndIdx
    );
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (!isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var patch = (oldVNode, newVNode2, isInitialRender = false) => {
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
var nullifyVNodeRefs = (vNode) => {
  {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(
      ([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]
    );
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
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    ancestorComponent["s-p"].push(new Promise((r) => hostRef.$onRenderResolve$ = r));
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
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
var dispatchHooks = (hostRef, isInitialLoad) => {
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
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn) : fn();
var isPromisey = (maybePromise) => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = async (hostRef, instance, isInitialLoad) => {
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
    const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
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
var callRender = (hostRef, instance, elm, isInitialLoad) => {
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
var postUpdateComponent = (hostRef) => {
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
var forceUpdate = (ref) => {
  {
    const hostRef = getHostRef(ref);
    const isConnected = hostRef.$hostElement$.isConnected;
    if (isConnected && (hostRef.$flags$ & (2 | 16)) === 2) {
      scheduleUpdate(hostRef, false);
    }
    return isConnected;
  }
};
var appDidLoad = (who) => {
  {
    addHydratedFlag(doc.documentElement);
  }
  nextTick(() => emitEvent(win, "appload", { detail: { namespace: NAMESPACE } }));
};
var safeCall = (instance, method, arg) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e);
    }
  }
  return void 0;
};
var addHydratedFlag = (elm) => elm.classList.add("hydrated");
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
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
var proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a;
  const prototype = Cstr.prototype;
  if (cmpMeta.$flags$ & 64 && flags & 1) {
    FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS.forEach(
      (cbName) => Object.defineProperty(prototype, cbName, {
        value(...args) {
          const hostRef = getHostRef(this);
          const instance = hostRef.$lazyInstance$;
          if (!instance) {
            hostRef.$onReadyPromise$.then((instance2) => {
              const cb = instance2[cbName];
              typeof cb === "function" && cb.call(instance2, ...args);
            });
          } else {
            const cb = instance[cbName];
            typeof cb === "function" && cb.call(instance, ...args);
          }
        }
      })
    );
  }
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
            return (_a2 = ref == null ? void 0 : ref.$onInstancePromise$) == null ? void 0 : _a2.then(() => {
              var _a3;
              return (_a3 = ref.$lazyInstance$) == null ? void 0 : _a3[memberName](...args);
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
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (flags2 && !(flags2 & 8) && flags2 & 128 && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach((callbackName) => {
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
      Cstr.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((_a = cmpMeta.$watchers$) != null ? _a : {}),
          ...members.filter(([_, m]) => m[0] & 15).map(([propName, m]) => {
            var _a2;
            const attrName = m[1] || propName;
            attrNameToPropName.set(attrName, propName);
            if (m[0] & 512) {
              (_a2 = cmpMeta.$attrsToReflect$) == null ? void 0 : _a2.push([propName, attrName]);
            }
            return attrName;
          })
        ])
      );
    }
  }
  return Cstr;
};
var initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId) => {
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
var fireConnectedCallback = (instance) => {
  {
    safeCall(instance, "connectedCallback");
  }
};
var connectedCallback = (elm) => {
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
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback(hostRef.$lazyInstance$);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$));
      }
    }
    endConnected();
  }
};
var disconnectInstance = (instance) => {
  {
    safeCall(instance, "disconnectedCallback");
  }
};
var disconnectedCallback = async (elm) => {
  if ((plt.$flags$ & 1) === 0) {
    const hostRef = getHostRef(elm);
    {
      if (hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
    if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
      disconnectInstance(hostRef.$lazyInstance$);
    } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
      hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$));
    }
  }
};
var bootstrapLazy = (lazyBundles, options = {}) => {
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
  let i2 = 0;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", doc.baseURI).href;
  {
    plt.$flags$ |= 2;
  }
  {
    for (; i2 < styles2.length; i2++) {
      registerStyle(styles2[i2].getAttribute(HYDRATED_STYLE_ID), convertScopedToShadow(styles2[i2].innerHTML), true);
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
        cmpMeta.$watchers$ = (_a2 = compactMeta[4]) != null ? _a2 : {};
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
      if (cmpMeta.$flags$ & 64) {
        HostElement.formAssociated = true;
      }
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
        cmpTags.push(tagName);
        customElements2.define(
          tagName,
          proxyComponent(HostElement, cmpMeta, 1)
        );
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
      const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(doc);
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
var Fragment = (_, children) => children;
var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
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
var hostListenerProxy = (hostRef, methodName) => (ev) => {
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
var getHostListenerTarget = (elm, flags) => {
  if (flags & 8)
    return win;
  return elm;
};
var hostListenerOpts = (flags) => supportsListenerOptions ? {
  passive: (flags & 1) !== 0,
  capture: (flags & 2) !== 0
} : (flags & 2) !== 0;
var hostRefs = /* @__PURE__ */ new WeakMap();
var getHostRef = (ref) => hostRefs.get(ref);
var registerInstance = (lazyInstance, hostRef) => hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
var registerHost = (hostElement, cmpMeta) => {
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
var isMemberInElement = (elm, memberName) => memberName in elm;
var consoleError = (e, el) => (0, console.error)(e, el);
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
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
      case "ix-action-card":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-action-card.entry.1f900c0b.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-application":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-application.entry.f3e74698.js"
        ), true ? ["./ix-application.entry.f3e74698.js","./context-42311cff.2e905beb.js","./typed-event-ad6484c5.eb731a3b.js","./service-c7fc628b.ff41f9d5.js","./breakpoints-d5c2f627.f0d6212d.js","./menu-service-f974814b.d8879f58.js","./shadow-dom-cc0bc152.fe0cdd32.js","./theme-switcher-5fcf712d.42146bb7.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-application-sidebar":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-application-sidebar.entry.2d364989.js"
        ), true ? ["./ix-application-sidebar.entry.2d364989.js","./anime.es-a5520566.eae0a8f1.js","./animation-4a73b1c3.59b7eda0.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-application-switch-modal":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-application-switch-modal.entry.1516da90.js"
        ), true ? ["./ix-application-switch-modal.entry.1516da90.js","./animation-4a73b1c3.59b7eda0.js","./modal-4b3f8800.9a447ac6.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-basic-navigation":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-basic-navigation.entry.225935e0.js"
        ), true ? ["./ix-basic-navigation.entry.225935e0.js","./context-42311cff.2e905beb.js","./typed-event-ad6484c5.eb731a3b.js","./service-c7fc628b.ff41f9d5.js","./breakpoints-d5c2f627.f0d6212d.js","./menu-service-f974814b.d8879f58.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-blind":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-blind.entry.2cbc9010.js"
        ), true ? ["./ix-blind.entry.2cbc9010.js","./anime.es-a5520566.eae0a8f1.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-breadcrumb":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-breadcrumb.entry.ea6743ab.js"
        ), true ? ["./ix-breadcrumb.entry.ea6743ab.js","./a11y-b10c12e0.27b6344e.js","./mutation-observer-db8757e6.4a24be36.js","./make-ref-4b76e9b5.1c81bb51.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-card-list":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-card-list.entry.e1348dd8.js"
        ), true ? ["./ix-card-list.entry.e1348dd8.js","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-category-filter":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-category-filter.entry.b365345f.js"
        ), true ? ["./ix-category-filter.entry.b365345f.js","./base-button-845f2463.e32101a2.js","./logical-filter-operator-d793d1c3.ce417adc.js","./make-ref-4b76e9b5.1c81bb51.js","./disposable-event-listener-ff2cb862.2be8cd03.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-checkbox":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-checkbox.entry.f7cded91.js"
        ), true ? ["./ix-checkbox.entry.f7cded91.js","./validation-54137eaa.8ba4a3c5.js","./make-ref-4b76e9b5.1c81bb51.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-checkbox-group":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-checkbox-group.entry.6b537adc.js"
        ), true ? ["./ix-checkbox-group.entry.6b537adc.js","./validation-54137eaa.8ba4a3c5.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-chip":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-chip.entry.1db08099.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-content":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-content.entry.9fbc99de.js"
        ), true ? ["./ix-content.entry.9fbc99de.js","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-content-header":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-content-header.entry.af15b175.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-css-grid":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-css-grid.entry.006d88e6.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-css-grid-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-css-grid-item.entry.a1e6ef1a.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-custom-field":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-custom-field.entry.9b93f37f.js"
        ), true ? ["./ix-custom-field.entry.9b93f37f.js","./validation-54137eaa.8ba4a3c5.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-date-dropdown":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-date-dropdown.entry.9ca10617.js"
        ), true ? ["./ix-date-dropdown.entry.9ca10617.js","./luxon-aa110584.36a0b316.js","./make-ref-4b76e9b5.1c81bb51.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-date-input":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-date-input.entry.87596aa0.js"
        ), true ? ["./ix-date-input.entry.87596aa0.js","./index-2b76ea55.acc6b31e.js","./luxon-aa110584.36a0b316.js","./dropdown-controller-cb6d3789.8979871d.js","./input.util-deca1217.c59f2adf.js","./a11y-b10c12e0.27b6344e.js","./validation-54137eaa.8ba4a3c5.js","./mutation-observer-db8757e6.4a24be36.js","./rwd.util-d8e00a88.087cdec0.js","./anime.es-a5520566.eae0a8f1.js","./make-ref-4b76e9b5.1c81bb51.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-datetime-picker":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-datetime-picker.entry.14f5f7a6.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-drawer":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-drawer.entry.d8a92b65.js"
        ), true ? ["./ix-drawer.entry.d8a92b65.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-dropdown-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-dropdown-button.entry.6d7eb49f.js"
        ), true ? ["./ix-dropdown-button.entry.6d7eb49f.js","./make-ref-4b76e9b5.1c81bb51.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-dropdown-header":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-dropdown-header.entry.858cdda2.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-dropdown-quick-actions":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-dropdown-quick-actions.entry.4a153e20.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-empty-state":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-empty-state.entry.18cb4eae.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-event-list":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-event-list.entry.fac6a8fa.js"
        ), true ? ["./ix-event-list.entry.fac6a8fa.js","./mutation-observer-db8757e6.4a24be36.js","./rwd.util-d8e00a88.087cdec0.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-event-list-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-event-list-item.entry.47ed6992.js"
        ), true ? ["./ix-event-list-item.entry.47ed6992.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-expanding-search":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-expanding-search.entry.760b6c4b.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-flip-tile":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-flip-tile.entry.c1f23eaa.js"
        ), true ? ["./ix-flip-tile.entry.c1f23eaa.js","./mutation-observer-db8757e6.4a24be36.js","./flip-tile-state-76dd224a.ffe63233.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-flip-tile-content":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-flip-tile-content.entry.d4010030.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-group":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-group.entry.c9c4d3be.js"
        ), true ? ["./ix-group.entry.c9c4d3be.js","./mutation-observer-db8757e6.4a24be36.js","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-helper-text":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-helper-text.entry.80f34940.js"
        ), true ? ["./ix-helper-text.entry.80f34940.js","./validation-54137eaa.8ba4a3c5.js","./helper-text-util-e47b864d.d6cdf1b7.js","./index-2b76ea55.acc6b31e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-icon-toggle-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-icon-toggle-button.entry.5bd8595b.js"
        ), true ? ["./ix-icon-toggle-button.entry.5bd8595b.js","./base-icon-button-38e2f6e6.e934f8d7.js","./base-button-845f2463.e32101a2.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-input":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-input.entry.edc96faa.js"
        ), true ? ["./ix-input.entry.edc96faa.js","./index-2b76ea55.acc6b31e.js","./validation-54137eaa.8ba4a3c5.js","./make-ref-4b76e9b5.1c81bb51.js","./input.util-deca1217.c59f2adf.js","./a11y-b10c12e0.27b6344e.js","./mutation-observer-db8757e6.4a24be36.js","./rwd.util-d8e00a88.087cdec0.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-input-group":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-input-group.entry.9a57ea93.js"
        ), true ? ["./ix-input-group.entry.9a57ea93.js","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-key-value":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-key-value.entry.ebc27c2d.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-key-value-list":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-key-value-list.entry.36545b51.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-kpi":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-kpi.entry.0bf24910.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-layout-auto":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-layout-auto.entry.b4057686.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-link-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-link-button.entry.31e6de27.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-map-navigation":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-map-navigation.entry.aca9949e.js"
        ), true ? ["./ix-map-navigation.entry.aca9949e.js","./anime.es-a5520566.eae0a8f1.js","./context-42311cff.2e905beb.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu.entry.67d74dd7.js"
        ), true ? ["./ix-menu.entry.67d74dd7.js","./anime.es-a5520566.eae0a8f1.js","./index-f8425403.f59a5f51.js","./animation-4a73b1c3.59b7eda0.js","./modal-4b3f8800.9a447ac6.js","./typed-event-ad6484c5.eb731a3b.js","./context-42311cff.2e905beb.js","./service-c7fc628b.ff41f9d5.js","./breakpoints-d5c2f627.f0d6212d.js","./menu-service-f974814b.d8879f58.js","./rwd.util-d8e00a88.087cdec0.js","./theme-switcher-5fcf712d.42146bb7.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu-about":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu-about.entry.c73eafe8.js"
        ), true ? ["./ix-menu-about.entry.c73eafe8.js","./menu-tabs-fc-43b4155d.93956078.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu-about-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu-about-item.entry.4b7fb126.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu-about-news":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu-about-news.entry.e6642a2c.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu-avatar":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu-avatar.entry.d3ea2b02.js"
        ), true ? ["./ix-menu-avatar.entry.d3ea2b02.js","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu-category":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu-category.entry.eb0c7774.js"
        ), true ? ["./ix-menu-category.entry.eb0c7774.js","./anime.es-a5520566.eae0a8f1.js","./context-42311cff.2e905beb.js","./typed-event-ad6484c5.eb731a3b.js","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu-settings":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu-settings.entry.210cc304.js"
        ), true ? ["./ix-menu-settings.entry.210cc304.js","./menu-tabs-fc-43b4155d.93956078.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu-settings-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu-settings-item.entry.a885319c.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-message-bar":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-message-bar.entry.973f2258.js"
        ), true ? ["./ix-message-bar.entry.973f2258.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-modal":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-modal.entry.9c92f790.js"
        ), true ? ["./ix-modal.entry.9c92f790.js","./anime.es-a5520566.eae0a8f1.js","./a11y-b10c12e0.27b6344e.js","./animation-4a73b1c3.59b7eda0.js","./listener-18b29507.c347627d.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-modal-footer":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-modal-footer.entry.dbdac378.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-modal-loading":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-modal-loading.entry.1bfd5288.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-number-input":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-number-input.entry.922bef24.js"
        ), true ? ["./ix-number-input.entry.922bef24.js","./index-2b76ea55.acc6b31e.js","./validation-54137eaa.8ba4a3c5.js","./make-ref-4b76e9b5.1c81bb51.js","./input.util-deca1217.c59f2adf.js","./a11y-b10c12e0.27b6344e.js","./mutation-observer-db8757e6.4a24be36.js","./rwd.util-d8e00a88.087cdec0.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-pagination":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-pagination.entry.759e9751.js"
        ), true ? ["./ix-pagination.entry.759e9751.js","./base-button-845f2463.e32101a2.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-pane":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-pane.entry.98c82902.js"
        ), true ? ["./ix-pane.entry.98c82902.js","./anime.es-a5520566.eae0a8f1.js","./animation-4a73b1c3.59b7eda0.js","./service-c7fc628b.ff41f9d5.js","./breakpoints-d5c2f627.f0d6212d.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-pane-layout":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-pane-layout.entry.b629cf38.js"
        ), true ? ["./ix-pane-layout.entry.b629cf38.js","./service-c7fc628b.ff41f9d5.js","./breakpoints-d5c2f627.f0d6212d.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-pill":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-pill.entry.3f4cff7f.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-push-card":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-push-card.entry.79d14965.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-radio":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-radio.entry.f6b149bb.js"
        ), true ? ["./ix-radio.entry.f6b149bb.js","./make-ref-4b76e9b5.1c81bb51.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-radio-group":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-radio-group.entry.0ae308a0.js"
        ), true ? ["./ix-radio-group.entry.0ae308a0.js","./validation-54137eaa.8ba4a3c5.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-slider":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-slider.entry.8c972843.js"
        ), true ? ["./ix-slider.entry.8c972843.js","./a11y-b10c12e0.27b6344e.js","./listener-18b29507.c347627d.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-split-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-split-button.entry.a8ad7df0.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-split-button-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-split-button-item.entry.cd01d933.js"
        ), true ? ["./ix-split-button-item.entry.cd01d933.js","./make-ref-4b76e9b5.1c81bb51.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-textarea":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-textarea.entry.bdc2bf1e.js"
        ), true ? ["./ix-textarea.entry.bdc2bf1e.js","./validation-54137eaa.8ba4a3c5.js","./make-ref-4b76e9b5.1c81bb51.js","./input.util-deca1217.c59f2adf.js","./a11y-b10c12e0.27b6344e.js","./mutation-observer-db8757e6.4a24be36.js","./rwd.util-d8e00a88.087cdec0.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-tile":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-tile.entry.17c1e8eb.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-toast-container":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-toast-container.entry.0db7678c.js"
        ), true ? ["./ix-toast-container.entry.0db7678c.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-toggle":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-toggle.entry.6d93aee9.js"
        ), true ? ["./ix-toggle.entry.6d93aee9.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-toggle-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-toggle-button.entry.10da6c1c.js"
        ), true ? ["./ix-toggle-button.entry.10da6c1c.js","./base-button-845f2463.e32101a2.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-tree":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-tree.entry.c1bc5baf.js"
        ), true ? ["./ix-tree.entry.c1bc5baf.js","./dropdown-controller-cb6d3789.8979871d.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-upload":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-upload.entry.539a52ee.js"
        ), true ? ["./ix-upload.entry.539a52ee.js","./upload-file-state-de676cd5.96d9c6b3.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-validation-tooltip":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-validation-tooltip.entry.5c0b0fc6.js"
        ), true ? ["./ix-validation-tooltip.entry.5c0b0fc6.js","./floating-ui.dom.esm-d4ad786a.60f1e3fd.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-workflow-step":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-workflow-step.entry.ae648070.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-workflow-steps":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-workflow-steps.entry.15b2404e.js"
        ), true ? ["./ix-workflow-steps.entry.15b2404e.js","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-avatar_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-avatar_2.entry.0adb3842.js"
        ), true ? ["./ix-avatar_2.entry.0adb3842.js","./base-button-845f2463.e32101a2.js","./shadow-dom-cc0bc152.fe0cdd32.js","./make-ref-4b76e9b5.1c81bb51.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-breadcrumb-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-breadcrumb-item.entry.0ef1d955.js"
        ), true ? ["./ix-breadcrumb-item.entry.0ef1d955.js","./anime.es-a5520566.eae0a8f1.js","./base-button-845f2463.e32101a2.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-card-accordion_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-card-accordion_2.entry.87060ec2.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-group-context-menu_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-group-context-menu_2.entry.d7eb5b5e.js"
        ), true ? ["./ix-group-context-menu_2.entry.d7eb5b5e.js","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-map-navigation-overlay":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-map-navigation-overlay.entry.fda06eeb.js"
        ), true ? ["./ix-map-navigation-overlay.entry.fda06eeb.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-modal-content_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-modal-content_2.entry.42bf0cbd.js"
        ), true ? ["./ix-modal-content_2.entry.42bf0cbd.js","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-select":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-select.entry.b1c0890a.js"
        ), true ? ["./ix-select.entry.b1c0890a.js","./a11y-b10c12e0.27b6344e.js","./focus-664aef4f.9eed9d82.js","./disposable-event-listener-ff2cb862.2be8cd03.js","./validation-54137eaa.8ba4a3c5.js","./listener-18b29507.c347627d.js","./make-ref-4b76e9b5.1c81bb51.js","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-time-picker":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-time-picker.entry.adf350e8.js"
        ), true ? ["./ix-time-picker.entry.adf350e8.js","./luxon-aa110584.36a0b316.js","./index-2b76ea55.acc6b31e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-toast":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-toast.entry.674457e8.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-tree-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-tree-item.entry.eb26f2ea.js"
        ), true ? ["./ix-tree-item.entry.eb26f2ea.js","./index-2b76ea55.acc6b31e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-application-header":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-application-header.entry.a7484b91.js"
        ), true ? ["./ix-application-header.entry.a7484b91.js","./index-f8425403.f59a5f51.js","./animation-4a73b1c3.59b7eda0.js","./modal-4b3f8800.9a447ac6.js","./typed-event-ad6484c5.eb731a3b.js","./service-c7fc628b.ff41f9d5.js","./breakpoints-d5c2f627.f0d6212d.js","./context-42311cff.2e905beb.js","./menu-service-f974814b.d8879f58.js","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-col_4":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-col_4.entry.bd1cf57a.js"
        ), true ? ["./ix-col_4.entry.bd1cf57a.js","./breakpoints-d5c2f627.f0d6212d.js","./luxon-aa110584.36a0b316.js","./listener-18b29507.c347627d.js","./make-ref-4b76e9b5.1c81bb51.js","./index-2b76ea55.acc6b31e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu-item.entry.8afcba6f.js"
        ), true ? ["./ix-menu-item.entry.8afcba6f.js","./mutation-observer-db8757e6.4a24be36.js","./make-ref-4b76e9b5.1c81bb51.js","./menu-service-f974814b.d8879f58.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-filter-chip_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-filter-chip_2.entry.0988076e.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-tab-item_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-tab-item_2.entry.eb2dc8e6.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-card_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-card_2.entry.0cd674bb.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-divider":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-divider.entry.198afc25.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-menu-expand-icon":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-menu-expand-icon.entry.98c01d0c.js"
        ), true ? ["./ix-menu-expand-icon.entry.98c01d0c.js","./base-button-845f2463.e32101a2.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-date-time-card":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-date-time-card.entry.0c67d5b1.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-dropdown-item":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-dropdown-item.entry.77f76e1a.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-field-label_3":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-field-label_3.entry.91dcca93.js"
        ), true ? ["./ix-field-label_3.entry.91dcca93.js","./a11y-b10c12e0.27b6344e.js","./make-ref-4b76e9b5.1c81bb51.js","./validation-54137eaa.8ba4a3c5.js","./helper-text-util-e47b864d.d6cdf1b7.js","./index-2b76ea55.acc6b31e.js","./floating-ui.dom.esm-d4ad786a.60f1e3fd.js","./listener-18b29507.c347627d.js","./find-element-af8265f7.65e387a1.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-button":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-button.entry.7373cfd6.js"
        ), true ? ["./ix-button.entry.7373cfd6.js","./base-button-845f2463.e32101a2.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-dropdown":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-dropdown.entry.b5fff3d8.js"
        ), true ? ["./ix-dropdown.entry.b5fff3d8.js","./floating-ui.dom.esm-d4ad786a.60f1e3fd.js","./focus-664aef4f.9eed9d82.js","./disposable-event-listener-ff2cb862.2be8cd03.js","./dropdown-controller-cb6d3789.8979871d.js","./find-element-af8265f7.65e387a1.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-icon-button_2":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-icon-button_2.entry.d0e124d0.js"
        ), true ? ["./ix-icon-button_2.entry.d0e124d0.js","./base-icon-button-38e2f6e6.e934f8d7.js","./base-button-845f2463.e32101a2.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url).then(processMod, consoleError);
      case "ix-typography":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./ix-typography.entry.5de93ace.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
    }
  }
  return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./ix-action-card.entry.js": () => __vitePreload(() => import("./ix-action-card.entry.1f900c0b.js"), true ? [] : void 0, import.meta.url), "./ix-application-header.entry.js": () => __vitePreload(() => import("./ix-application-header.entry.a7484b91.js"), true ? ["./ix-application-header.entry.a7484b91.js","./index-f8425403.f59a5f51.js","./animation-4a73b1c3.59b7eda0.js","./modal-4b3f8800.9a447ac6.js","./typed-event-ad6484c5.eb731a3b.js","./service-c7fc628b.ff41f9d5.js","./breakpoints-d5c2f627.f0d6212d.js","./context-42311cff.2e905beb.js","./menu-service-f974814b.d8879f58.js","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url), "./ix-application-sidebar.entry.js": () => __vitePreload(() => import("./ix-application-sidebar.entry.2d364989.js"), true ? ["./ix-application-sidebar.entry.2d364989.js","./anime.es-a5520566.eae0a8f1.js","./animation-4a73b1c3.59b7eda0.js"] : void 0, import.meta.url), "./ix-application-switch-modal.entry.js": () => __vitePreload(() => import("./ix-application-switch-modal.entry.1516da90.js"), true ? ["./ix-application-switch-modal.entry.1516da90.js","./animation-4a73b1c3.59b7eda0.js","./modal-4b3f8800.9a447ac6.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url), "./ix-application.entry.js": () => __vitePreload(() => import("./ix-application.entry.f3e74698.js"), true ? ["./ix-application.entry.f3e74698.js","./context-42311cff.2e905beb.js","./typed-event-ad6484c5.eb731a3b.js","./service-c7fc628b.ff41f9d5.js","./breakpoints-d5c2f627.f0d6212d.js","./menu-service-f974814b.d8879f58.js","./shadow-dom-cc0bc152.fe0cdd32.js","./theme-switcher-5fcf712d.42146bb7.js"] : void 0, import.meta.url), "./ix-avatar_2.entry.js": () => __vitePreload(() => import("./ix-avatar_2.entry.0adb3842.js"), true ? ["./ix-avatar_2.entry.0adb3842.js","./base-button-845f2463.e32101a2.js","./shadow-dom-cc0bc152.fe0cdd32.js","./make-ref-4b76e9b5.1c81bb51.js"] : void 0, import.meta.url), "./ix-basic-navigation.entry.js": () => __vitePreload(() => import("./ix-basic-navigation.entry.225935e0.js"), true ? ["./ix-basic-navigation.entry.225935e0.js","./context-42311cff.2e905beb.js","./typed-event-ad6484c5.eb731a3b.js","./service-c7fc628b.ff41f9d5.js","./breakpoints-d5c2f627.f0d6212d.js","./menu-service-f974814b.d8879f58.js"] : void 0, import.meta.url), "./ix-blind.entry.js": () => __vitePreload(() => import("./ix-blind.entry.2cbc9010.js"), true ? ["./ix-blind.entry.2cbc9010.js","./anime.es-a5520566.eae0a8f1.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-breadcrumb-item.entry.js": () => __vitePreload(() => import("./ix-breadcrumb-item.entry.0ef1d955.js"), true ? ["./ix-breadcrumb-item.entry.0ef1d955.js","./anime.es-a5520566.eae0a8f1.js","./base-button-845f2463.e32101a2.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-breadcrumb.entry.js": () => __vitePreload(() => import("./ix-breadcrumb.entry.ea6743ab.js"), true ? ["./ix-breadcrumb.entry.ea6743ab.js","./a11y-b10c12e0.27b6344e.js","./mutation-observer-db8757e6.4a24be36.js","./make-ref-4b76e9b5.1c81bb51.js"] : void 0, import.meta.url), "./ix-button.entry.js": () => __vitePreload(() => import("./ix-button.entry.7373cfd6.js"), true ? ["./ix-button.entry.7373cfd6.js","./base-button-845f2463.e32101a2.js"] : void 0, import.meta.url), "./ix-card-accordion_2.entry.js": () => __vitePreload(() => import("./ix-card-accordion_2.entry.87060ec2.js"), true ? [] : void 0, import.meta.url), "./ix-card-list.entry.js": () => __vitePreload(() => import("./ix-card-list.entry.e1348dd8.js"), true ? ["./ix-card-list.entry.e1348dd8.js","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url), "./ix-card_2.entry.js": () => __vitePreload(() => import("./ix-card_2.entry.0cd674bb.js"), true ? [] : void 0, import.meta.url), "./ix-category-filter.entry.js": () => __vitePreload(() => import("./ix-category-filter.entry.b365345f.js"), true ? ["./ix-category-filter.entry.b365345f.js","./base-button-845f2463.e32101a2.js","./logical-filter-operator-d793d1c3.ce417adc.js","./make-ref-4b76e9b5.1c81bb51.js","./disposable-event-listener-ff2cb862.2be8cd03.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-checkbox-group.entry.js": () => __vitePreload(() => import("./ix-checkbox-group.entry.6b537adc.js"), true ? ["./ix-checkbox-group.entry.6b537adc.js","./validation-54137eaa.8ba4a3c5.js"] : void 0, import.meta.url), "./ix-checkbox.entry.js": () => __vitePreload(() => import("./ix-checkbox.entry.f7cded91.js"), true ? ["./ix-checkbox.entry.f7cded91.js","./validation-54137eaa.8ba4a3c5.js","./make-ref-4b76e9b5.1c81bb51.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-chip.entry.js": () => __vitePreload(() => import("./ix-chip.entry.1db08099.js"), true ? [] : void 0, import.meta.url), "./ix-col_4.entry.js": () => __vitePreload(() => import("./ix-col_4.entry.bd1cf57a.js"), true ? ["./ix-col_4.entry.bd1cf57a.js","./breakpoints-d5c2f627.f0d6212d.js","./luxon-aa110584.36a0b316.js","./listener-18b29507.c347627d.js","./make-ref-4b76e9b5.1c81bb51.js","./index-2b76ea55.acc6b31e.js"] : void 0, import.meta.url), "./ix-content-header.entry.js": () => __vitePreload(() => import("./ix-content-header.entry.af15b175.js"), true ? [] : void 0, import.meta.url), "./ix-content.entry.js": () => __vitePreload(() => import("./ix-content.entry.9fbc99de.js"), true ? ["./ix-content.entry.9fbc99de.js","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url), "./ix-css-grid-item.entry.js": () => __vitePreload(() => import("./ix-css-grid-item.entry.a1e6ef1a.js"), true ? [] : void 0, import.meta.url), "./ix-css-grid.entry.js": () => __vitePreload(() => import("./ix-css-grid.entry.006d88e6.js"), true ? [] : void 0, import.meta.url), "./ix-custom-field.entry.js": () => __vitePreload(() => import("./ix-custom-field.entry.9b93f37f.js"), true ? ["./ix-custom-field.entry.9b93f37f.js","./validation-54137eaa.8ba4a3c5.js"] : void 0, import.meta.url), "./ix-date-dropdown.entry.js": () => __vitePreload(() => import("./ix-date-dropdown.entry.9ca10617.js"), true ? ["./ix-date-dropdown.entry.9ca10617.js","./luxon-aa110584.36a0b316.js","./make-ref-4b76e9b5.1c81bb51.js"] : void 0, import.meta.url), "./ix-date-input.entry.js": () => __vitePreload(() => import("./ix-date-input.entry.87596aa0.js"), true ? ["./ix-date-input.entry.87596aa0.js","./index-2b76ea55.acc6b31e.js","./luxon-aa110584.36a0b316.js","./dropdown-controller-cb6d3789.8979871d.js","./input.util-deca1217.c59f2adf.js","./a11y-b10c12e0.27b6344e.js","./validation-54137eaa.8ba4a3c5.js","./mutation-observer-db8757e6.4a24be36.js","./rwd.util-d8e00a88.087cdec0.js","./anime.es-a5520566.eae0a8f1.js","./make-ref-4b76e9b5.1c81bb51.js"] : void 0, import.meta.url), "./ix-date-time-card.entry.js": () => __vitePreload(() => import("./ix-date-time-card.entry.0c67d5b1.js"), true ? [] : void 0, import.meta.url), "./ix-datetime-picker.entry.js": () => __vitePreload(() => import("./ix-datetime-picker.entry.14f5f7a6.js"), true ? [] : void 0, import.meta.url), "./ix-divider.entry.js": () => __vitePreload(() => import("./ix-divider.entry.198afc25.js"), true ? [] : void 0, import.meta.url), "./ix-drawer.entry.js": () => __vitePreload(() => import("./ix-drawer.entry.d8a92b65.js"), true ? ["./ix-drawer.entry.d8a92b65.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url), "./ix-dropdown-button.entry.js": () => __vitePreload(() => import("./ix-dropdown-button.entry.6d7eb49f.js"), true ? ["./ix-dropdown-button.entry.6d7eb49f.js","./make-ref-4b76e9b5.1c81bb51.js"] : void 0, import.meta.url), "./ix-dropdown-header.entry.js": () => __vitePreload(() => import("./ix-dropdown-header.entry.858cdda2.js"), true ? [] : void 0, import.meta.url), "./ix-dropdown-item.entry.js": () => __vitePreload(() => import("./ix-dropdown-item.entry.77f76e1a.js"), true ? [] : void 0, import.meta.url), "./ix-dropdown-quick-actions.entry.js": () => __vitePreload(() => import("./ix-dropdown-quick-actions.entry.4a153e20.js"), true ? [] : void 0, import.meta.url), "./ix-dropdown.entry.js": () => __vitePreload(() => import("./ix-dropdown.entry.b5fff3d8.js"), true ? ["./ix-dropdown.entry.b5fff3d8.js","./floating-ui.dom.esm-d4ad786a.60f1e3fd.js","./focus-664aef4f.9eed9d82.js","./disposable-event-listener-ff2cb862.2be8cd03.js","./dropdown-controller-cb6d3789.8979871d.js","./find-element-af8265f7.65e387a1.js"] : void 0, import.meta.url), "./ix-empty-state.entry.js": () => __vitePreload(() => import("./ix-empty-state.entry.18cb4eae.js"), true ? [] : void 0, import.meta.url), "./ix-event-list-item.entry.js": () => __vitePreload(() => import("./ix-event-list-item.entry.47ed6992.js"), true ? ["./ix-event-list-item.entry.47ed6992.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-event-list.entry.js": () => __vitePreload(() => import("./ix-event-list.entry.fac6a8fa.js"), true ? ["./ix-event-list.entry.fac6a8fa.js","./mutation-observer-db8757e6.4a24be36.js","./rwd.util-d8e00a88.087cdec0.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url), "./ix-expanding-search.entry.js": () => __vitePreload(() => import("./ix-expanding-search.entry.760b6c4b.js"), true ? [] : void 0, import.meta.url), "./ix-field-label_3.entry.js": () => __vitePreload(() => import("./ix-field-label_3.entry.91dcca93.js"), true ? ["./ix-field-label_3.entry.91dcca93.js","./a11y-b10c12e0.27b6344e.js","./make-ref-4b76e9b5.1c81bb51.js","./validation-54137eaa.8ba4a3c5.js","./helper-text-util-e47b864d.d6cdf1b7.js","./index-2b76ea55.acc6b31e.js","./floating-ui.dom.esm-d4ad786a.60f1e3fd.js","./listener-18b29507.c347627d.js","./find-element-af8265f7.65e387a1.js"] : void 0, import.meta.url), "./ix-filter-chip_2.entry.js": () => __vitePreload(() => import("./ix-filter-chip_2.entry.0988076e.js"), true ? [] : void 0, import.meta.url), "./ix-flip-tile-content.entry.js": () => __vitePreload(() => import("./ix-flip-tile-content.entry.d4010030.js"), true ? [] : void 0, import.meta.url), "./ix-flip-tile.entry.js": () => __vitePreload(() => import("./ix-flip-tile.entry.c1f23eaa.js"), true ? ["./ix-flip-tile.entry.c1f23eaa.js","./mutation-observer-db8757e6.4a24be36.js","./flip-tile-state-76dd224a.ffe63233.js"] : void 0, import.meta.url), "./ix-group-context-menu_2.entry.js": () => __vitePreload(() => import("./ix-group-context-menu_2.entry.d7eb5b5e.js"), true ? ["./ix-group-context-menu_2.entry.d7eb5b5e.js","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url), "./ix-group.entry.js": () => __vitePreload(() => import("./ix-group.entry.c9c4d3be.js"), true ? ["./ix-group.entry.c9c4d3be.js","./mutation-observer-db8757e6.4a24be36.js","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url), "./ix-helper-text.entry.js": () => __vitePreload(() => import("./ix-helper-text.entry.80f34940.js"), true ? ["./ix-helper-text.entry.80f34940.js","./validation-54137eaa.8ba4a3c5.js","./helper-text-util-e47b864d.d6cdf1b7.js","./index-2b76ea55.acc6b31e.js"] : void 0, import.meta.url), "./ix-icon-button_2.entry.js": () => __vitePreload(() => import("./ix-icon-button_2.entry.d0e124d0.js"), true ? ["./ix-icon-button_2.entry.d0e124d0.js","./base-icon-button-38e2f6e6.e934f8d7.js","./base-button-845f2463.e32101a2.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-icon-toggle-button.entry.js": () => __vitePreload(() => import("./ix-icon-toggle-button.entry.5bd8595b.js"), true ? ["./ix-icon-toggle-button.entry.5bd8595b.js","./base-icon-button-38e2f6e6.e934f8d7.js","./base-button-845f2463.e32101a2.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-input-group.entry.js": () => __vitePreload(() => import("./ix-input-group.entry.9a57ea93.js"), true ? ["./ix-input-group.entry.9a57ea93.js","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url), "./ix-input.entry.js": () => __vitePreload(() => import("./ix-input.entry.edc96faa.js"), true ? ["./ix-input.entry.edc96faa.js","./index-2b76ea55.acc6b31e.js","./validation-54137eaa.8ba4a3c5.js","./make-ref-4b76e9b5.1c81bb51.js","./input.util-deca1217.c59f2adf.js","./a11y-b10c12e0.27b6344e.js","./mutation-observer-db8757e6.4a24be36.js","./rwd.util-d8e00a88.087cdec0.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url), "./ix-key-value-list.entry.js": () => __vitePreload(() => import("./ix-key-value-list.entry.36545b51.js"), true ? [] : void 0, import.meta.url), "./ix-key-value.entry.js": () => __vitePreload(() => import("./ix-key-value.entry.ebc27c2d.js"), true ? [] : void 0, import.meta.url), "./ix-kpi.entry.js": () => __vitePreload(() => import("./ix-kpi.entry.0bf24910.js"), true ? [] : void 0, import.meta.url), "./ix-layout-auto.entry.js": () => __vitePreload(() => import("./ix-layout-auto.entry.b4057686.js"), true ? [] : void 0, import.meta.url), "./ix-link-button.entry.js": () => __vitePreload(() => import("./ix-link-button.entry.31e6de27.js"), true ? [] : void 0, import.meta.url), "./ix-map-navigation-overlay.entry.js": () => __vitePreload(() => import("./ix-map-navigation-overlay.entry.fda06eeb.js"), true ? ["./ix-map-navigation-overlay.entry.fda06eeb.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url), "./ix-map-navigation.entry.js": () => __vitePreload(() => import("./ix-map-navigation.entry.aca9949e.js"), true ? ["./ix-map-navigation.entry.aca9949e.js","./anime.es-a5520566.eae0a8f1.js","./context-42311cff.2e905beb.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url), "./ix-menu-about-item.entry.js": () => __vitePreload(() => import("./ix-menu-about-item.entry.4b7fb126.js"), true ? [] : void 0, import.meta.url), "./ix-menu-about-news.entry.js": () => __vitePreload(() => import("./ix-menu-about-news.entry.e6642a2c.js"), true ? [] : void 0, import.meta.url), "./ix-menu-about.entry.js": () => __vitePreload(() => import("./ix-menu-about.entry.c73eafe8.js"), true ? ["./ix-menu-about.entry.c73eafe8.js","./menu-tabs-fc-43b4155d.93956078.js"] : void 0, import.meta.url), "./ix-menu-avatar.entry.js": () => __vitePreload(() => import("./ix-menu-avatar.entry.d3ea2b02.js"), true ? ["./ix-menu-avatar.entry.d3ea2b02.js","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url), "./ix-menu-category.entry.js": () => __vitePreload(() => import("./ix-menu-category.entry.eb0c7774.js"), true ? ["./ix-menu-category.entry.eb0c7774.js","./anime.es-a5520566.eae0a8f1.js","./context-42311cff.2e905beb.js","./typed-event-ad6484c5.eb731a3b.js","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url), "./ix-menu-expand-icon.entry.js": () => __vitePreload(() => import("./ix-menu-expand-icon.entry.98c01d0c.js"), true ? ["./ix-menu-expand-icon.entry.98c01d0c.js","./base-button-845f2463.e32101a2.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-menu-item.entry.js": () => __vitePreload(() => import("./ix-menu-item.entry.8afcba6f.js"), true ? ["./ix-menu-item.entry.8afcba6f.js","./mutation-observer-db8757e6.4a24be36.js","./make-ref-4b76e9b5.1c81bb51.js","./menu-service-f974814b.d8879f58.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url), "./ix-menu-settings-item.entry.js": () => __vitePreload(() => import("./ix-menu-settings-item.entry.a885319c.js"), true ? [] : void 0, import.meta.url), "./ix-menu-settings.entry.js": () => __vitePreload(() => import("./ix-menu-settings.entry.210cc304.js"), true ? ["./ix-menu-settings.entry.210cc304.js","./menu-tabs-fc-43b4155d.93956078.js"] : void 0, import.meta.url), "./ix-menu.entry.js": () => __vitePreload(() => import("./ix-menu.entry.67d74dd7.js"), true ? ["./ix-menu.entry.67d74dd7.js","./anime.es-a5520566.eae0a8f1.js","./index-f8425403.f59a5f51.js","./animation-4a73b1c3.59b7eda0.js","./modal-4b3f8800.9a447ac6.js","./typed-event-ad6484c5.eb731a3b.js","./context-42311cff.2e905beb.js","./service-c7fc628b.ff41f9d5.js","./breakpoints-d5c2f627.f0d6212d.js","./menu-service-f974814b.d8879f58.js","./rwd.util-d8e00a88.087cdec0.js","./theme-switcher-5fcf712d.42146bb7.js"] : void 0, import.meta.url), "./ix-message-bar.entry.js": () => __vitePreload(() => import("./ix-message-bar.entry.973f2258.js"), true ? ["./ix-message-bar.entry.973f2258.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url), "./ix-modal-content_2.entry.js": () => __vitePreload(() => import("./ix-modal-content_2.entry.42bf0cbd.js"), true ? ["./ix-modal-content_2.entry.42bf0cbd.js","./shadow-dom-cc0bc152.fe0cdd32.js"] : void 0, import.meta.url), "./ix-modal-footer.entry.js": () => __vitePreload(() => import("./ix-modal-footer.entry.dbdac378.js"), true ? [] : void 0, import.meta.url), "./ix-modal-loading.entry.js": () => __vitePreload(() => import("./ix-modal-loading.entry.1bfd5288.js"), true ? [] : void 0, import.meta.url), "./ix-modal.entry.js": () => __vitePreload(() => import("./ix-modal.entry.9c92f790.js"), true ? ["./ix-modal.entry.9c92f790.js","./anime.es-a5520566.eae0a8f1.js","./a11y-b10c12e0.27b6344e.js","./animation-4a73b1c3.59b7eda0.js","./listener-18b29507.c347627d.js"] : void 0, import.meta.url), "./ix-number-input.entry.js": () => __vitePreload(() => import("./ix-number-input.entry.922bef24.js"), true ? ["./ix-number-input.entry.922bef24.js","./index-2b76ea55.acc6b31e.js","./validation-54137eaa.8ba4a3c5.js","./make-ref-4b76e9b5.1c81bb51.js","./input.util-deca1217.c59f2adf.js","./a11y-b10c12e0.27b6344e.js","./mutation-observer-db8757e6.4a24be36.js","./rwd.util-d8e00a88.087cdec0.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url), "./ix-pagination.entry.js": () => __vitePreload(() => import("./ix-pagination.entry.759e9751.js"), true ? ["./ix-pagination.entry.759e9751.js","./base-button-845f2463.e32101a2.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-pane-layout.entry.js": () => __vitePreload(() => import("./ix-pane-layout.entry.b629cf38.js"), true ? ["./ix-pane-layout.entry.b629cf38.js","./service-c7fc628b.ff41f9d5.js","./breakpoints-d5c2f627.f0d6212d.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url), "./ix-pane.entry.js": () => __vitePreload(() => import("./ix-pane.entry.98c82902.js"), true ? ["./ix-pane.entry.98c82902.js","./anime.es-a5520566.eae0a8f1.js","./animation-4a73b1c3.59b7eda0.js","./service-c7fc628b.ff41f9d5.js","./breakpoints-d5c2f627.f0d6212d.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url), "./ix-pill.entry.js": () => __vitePreload(() => import("./ix-pill.entry.3f4cff7f.js"), true ? [] : void 0, import.meta.url), "./ix-push-card.entry.js": () => __vitePreload(() => import("./ix-push-card.entry.79d14965.js"), true ? [] : void 0, import.meta.url), "./ix-radio-group.entry.js": () => __vitePreload(() => import("./ix-radio-group.entry.0ae308a0.js"), true ? ["./ix-radio-group.entry.0ae308a0.js","./validation-54137eaa.8ba4a3c5.js"] : void 0, import.meta.url), "./ix-radio.entry.js": () => __vitePreload(() => import("./ix-radio.entry.f6b149bb.js"), true ? ["./ix-radio.entry.f6b149bb.js","./make-ref-4b76e9b5.1c81bb51.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-select.entry.js": () => __vitePreload(() => import("./ix-select.entry.b1c0890a.js"), true ? ["./ix-select.entry.b1c0890a.js","./a11y-b10c12e0.27b6344e.js","./focus-664aef4f.9eed9d82.js","./disposable-event-listener-ff2cb862.2be8cd03.js","./validation-54137eaa.8ba4a3c5.js","./listener-18b29507.c347627d.js","./make-ref-4b76e9b5.1c81bb51.js","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url), "./ix-slider.entry.js": () => __vitePreload(() => import("./ix-slider.entry.8c972843.js"), true ? ["./ix-slider.entry.8c972843.js","./a11y-b10c12e0.27b6344e.js","./listener-18b29507.c347627d.js"] : void 0, import.meta.url), "./ix-split-button-item.entry.js": () => __vitePreload(() => import("./ix-split-button-item.entry.cd01d933.js"), true ? ["./ix-split-button-item.entry.cd01d933.js","./make-ref-4b76e9b5.1c81bb51.js"] : void 0, import.meta.url), "./ix-split-button.entry.js": () => __vitePreload(() => import("./ix-split-button.entry.a8ad7df0.js"), true ? [] : void 0, import.meta.url), "./ix-tab-item_2.entry.js": () => __vitePreload(() => import("./ix-tab-item_2.entry.eb2dc8e6.js"), true ? [] : void 0, import.meta.url), "./ix-textarea.entry.js": () => __vitePreload(() => import("./ix-textarea.entry.bdc2bf1e.js"), true ? ["./ix-textarea.entry.bdc2bf1e.js","./validation-54137eaa.8ba4a3c5.js","./make-ref-4b76e9b5.1c81bb51.js","./input.util-deca1217.c59f2adf.js","./a11y-b10c12e0.27b6344e.js","./mutation-observer-db8757e6.4a24be36.js","./rwd.util-d8e00a88.087cdec0.js","./anime.es-a5520566.eae0a8f1.js"] : void 0, import.meta.url), "./ix-tile.entry.js": () => __vitePreload(() => import("./ix-tile.entry.17c1e8eb.js"), true ? [] : void 0, import.meta.url), "./ix-time-picker.entry.js": () => __vitePreload(() => import("./ix-time-picker.entry.adf350e8.js"), true ? ["./ix-time-picker.entry.adf350e8.js","./luxon-aa110584.36a0b316.js","./index-2b76ea55.acc6b31e.js"] : void 0, import.meta.url), "./ix-toast-container.entry.js": () => __vitePreload(() => import("./ix-toast-container.entry.0db7678c.js"), true ? ["./ix-toast-container.entry.0db7678c.js","./typed-event-ad6484c5.eb731a3b.js"] : void 0, import.meta.url), "./ix-toast.entry.js": () => __vitePreload(() => import("./ix-toast.entry.674457e8.js"), true ? [] : void 0, import.meta.url), "./ix-toggle-button.entry.js": () => __vitePreload(() => import("./ix-toggle-button.entry.10da6c1c.js"), true ? ["./ix-toggle-button.entry.10da6c1c.js","./base-button-845f2463.e32101a2.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-toggle.entry.js": () => __vitePreload(() => import("./ix-toggle.entry.6d93aee9.js"), true ? ["./ix-toggle.entry.6d93aee9.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-tree-item.entry.js": () => __vitePreload(() => import("./ix-tree-item.entry.eb26f2ea.js"), true ? ["./ix-tree-item.entry.eb26f2ea.js","./index-2b76ea55.acc6b31e.js"] : void 0, import.meta.url), "./ix-tree.entry.js": () => __vitePreload(() => import("./ix-tree.entry.c1bc5baf.js"), true ? ["./ix-tree.entry.c1bc5baf.js","./dropdown-controller-cb6d3789.8979871d.js"] : void 0, import.meta.url), "./ix-typography.entry.js": () => __vitePreload(() => import("./ix-typography.entry.5de93ace.js"), true ? [] : void 0, import.meta.url), "./ix-upload.entry.js": () => __vitePreload(() => import("./ix-upload.entry.539a52ee.js"), true ? ["./ix-upload.entry.539a52ee.js","./upload-file-state-de676cd5.96d9c6b3.js","./a11y-b10c12e0.27b6344e.js"] : void 0, import.meta.url), "./ix-validation-tooltip.entry.js": () => __vitePreload(() => import("./ix-validation-tooltip.entry.5c0b0fc6.js"), true ? ["./ix-validation-tooltip.entry.5c0b0fc6.js","./floating-ui.dom.esm-d4ad786a.60f1e3fd.js"] : void 0, import.meta.url), "./ix-workflow-step.entry.js": () => __vitePreload(() => import("./ix-workflow-step.entry.ae648070.js"), true ? [] : void 0, import.meta.url), "./ix-workflow-steps.entry.js": () => __vitePreload(() => import("./ix-workflow-steps.entry.15b2404e.js"), true ? ["./ix-workflow-steps.entry.15b2404e.js","./mutation-observer-db8757e6.4a24be36.js"] : void 0, import.meta.url) }), `./${bundleId}.entry.js${""}`).then((importedModule) => {
    {
      cmpModules.set(bundleId, importedModule);
    }
    return importedModule[exportName];
  }, consoleError);
};
var styles = /* @__PURE__ */ new Map();
var win = typeof window !== "undefined" ? window : {};
var doc = win.document || { head: {} };
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var setPlatformHelpers = (helpers) => {
  Object.assign(plt, helpers);
};
var supportsShadow = true;
var supportsListenerOptions = /* @__PURE__ */ (() => {
  let supportsListenerOptions2 = false;
  try {
    doc.addEventListener(
      "e",
      null,
      Object.defineProperty({}, "passive", {
        get() {
          supportsListenerOptions2 = true;
        }
      })
    );
  } catch (e) {
  }
  return supportsListenerOptions2;
})();
var promiseResolve = (v) => Promise.resolve(v);
var supportsConstructableStylesheets = /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})();
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = (queue, write) => (cb) => {
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
var consume = (queue) => {
  for (let i2 = 0; i2 < queue.length; i2++) {
    try {
      queue[i2](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
var flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = (cb) => promiseResolve().then(cb);
var readTask = /* @__PURE__ */ queueTask(queueDomReads, false);
var writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);
function shouldDefineIcons() {
  var _a, _b;
  const content = (_b = (_a = document.head) === null || _a === void 0 ? void 0 : _a.querySelector('meta[name="ix:legacy-icons"]')) === null || _b === void 0 ? void 0 : _b.getAttribute("content");
  if (!content) {
    return true;
  }
  return content.toLowerCase() === "true";
}
async function setupIcons() {
  if (typeof window === "undefined") {
    return;
  }
  if (shouldDefineIcons() === false) {
    return;
  }
  const iconComponent = window.customElements.get("ix-icon");
  if (iconComponent) {
    return;
  }
  const ixIcons = await __vitePreload(() => import("./index.es2017-4e6fdf77.103369f6.js"), true ? [] : void 0, import.meta.url).then(function(n) {
    return n.i;
  });
  await ixIcons.defineCustomElements();
}
function handlePlatformHelpers(config) {
  const platformHelpers = {};
  if (config.ael) {
    platformHelpers.ael = config.ael;
  }
  if (config.rel) {
    platformHelpers.rel = config.rel;
  }
  if (config.ce) {
    platformHelpers.ce = config.ce;
  }
  setPlatformHelpers(platformHelpers);
}
async function appGlobalScript(config) {
  await setupIcons();
  handlePlatformHelpers(config || {});
}
const globalScripts = appGlobalScript;
const defineCustomElements = async (win2, options) => {
  if (typeof window === "undefined")
    return void 0;
  await globalScripts();
  return bootstrapLazy(JSON.parse('[["ix-datetime-picker",[[1,"ix-datetime-picker",{"range":[4],"showHour":[4,"show-hour"],"showMinutes":[4,"show-minutes"],"showSeconds":[4,"show-seconds"],"minDate":[1,"min-date"],"maxDate":[1,"max-date"],"dateFormat":[1,"date-format"],"timeFormat":[1,"time-format"],"from":[1],"to":[1],"time":[1],"showTimeReference":[4,"show-time-reference"],"timeReference":[1,"time-reference"],"textSelectDate":[1,"text-select-date"],"i18nDone":[1,"i18n-done"],"weekStartIndex":[2,"week-start-index"],"locale":[1],"eventDelimiter":[1,"event-delimiter"]}]]],["ix-pagination",[[1,"ix-pagination",{"advanced":[4],"itemCount":[2,"item-count"],"showItemCount":[4,"show-item-count"],"count":[2],"selectedPage":[1026,"selected-page"],"i18nPage":[1,"i-1-8n-page"],"i18nOf":[1,"i-1-8n-of"],"i18nItems":[1,"i-1-8n-items"]}]]],["ix-date-dropdown",[[1,"ix-date-dropdown",{"disabled":[4],"format":[1],"range":[4],"from":[1],"to":[1],"minDate":[1,"min-date"],"maxDate":[1,"max-date"],"dateRangeId":[1,"date-range-id"],"variant":[1],"outline":[4],"ghost":[4],"loading":[4],"customRangeAllowed":[4,"custom-range-allowed"],"dateRangeOptions":[16],"locale":[1],"weekStartIndex":[2,"week-start-index"],"i18nCustomItem":[1,"i18n-custom-item"],"i18nDone":[1,"i18n-done"],"i18nNoRange":[1,"i18n-no-range"],"today":[1],"selectedDateRangeId":[32],"currentRangeValue":[32],"getDateRange":[64]},null,{"dateRangeId":["onDateRangeIdChange"],"to":["onDateRangeIdChange"],"from":["onDateRangeIdChange"],"dateRangeOptions":["onDateRangeOptionsChange"],"disabled":["onDisabledChange"]}]]],["ix-date-input",[[65,"ix-date-input",{"name":[513],"placeholder":[513],"value":[1537],"locale":[1],"format":[1],"required":[4],"helperText":[1,"helper-text"],"label":[1],"invalidText":[513,"invalid-text"],"readonly":[4],"disabled":[4],"infoText":[1,"info-text"],"warningText":[1,"warning-text"],"validText":[1,"valid-text"],"showTextAsTooltip":[4,"show-text-as-tooltip"],"i18nErrorDateUnparsable":[1,"i18n-error-date-unparsable"],"show":[32],"from":[32],"isInputInvalid":[32],"isInvalid":[32],"isValid":[32],"isInfo":[32],"isWarning":[32],"focus":[32],"hasValidValue":[64],"getAssociatedFormElement":[64],"getValidityState":[64],"getNativeInputElement":[64],"focusInput":[64]},null,{"value":["watchValue"],"isInputInvalid":["onInputValidationChange"]}]]],["ix-map-navigation",[[1,"ix-map-navigation",{"applicationName":[1,"application-name"],"navigationTitle":[1,"navigation-title"],"hideContextMenu":[4,"hide-context-menu"],"isSidebarOpen":[32],"hasContentHeader":[32],"toggleSidebar":[64],"openOverlay":[64],"closeOverlay":[64]}]]],["ix-menu-avatar",[[1,"ix-menu-avatar",{"top":[1],"bottom":[1],"image":[1],"initials":[1],"i18nLogout":[1,"i-1-8n-logout"],"showLogoutButton":[4,"show-logout-button"],"showContextMenu":[32]}]]],["ix-basic-navigation",[[1,"ix-basic-navigation",{"applicationName":[1,"application-name"],"hideHeader":[4,"hide-header"],"forceBreakpoint":[1,"force-breakpoint"],"breakpoints":[16],"breakpoint":[32]},null,{"hideHeader":["onHideHeaderChange"],"breakpoints":["onBreakpointsChange"]}]]],["ix-card-list",[[1,"ix-card-list",{"label":[1],"collapse":[1028],"listStyle":[1,"list-style"],"maxVisibleCards":[2,"max-visible-cards"],"showAllCount":[2,"show-all-count"],"suppressOverflowHandling":[4,"suppress-overflow-handling"],"hideShowAll":[4,"hide-show-all"],"i18nShowAll":[1,"i-1-8n-show-all"],"i18nMoreCards":[1,"i-1-8n-more-cards"],"hasOverflowingElements":[32],"numberOfOverflowingElements":[32],"numberOfAllChildElements":[32],"leftScrollDistance":[32],"rightScrollDistance":[32]},[[9,"resize","detectOverflow"]]]]],["ix-input",[[65,"ix-input",{"type":[1],"name":[513],"placeholder":[513],"value":[1537],"required":[516],"disabled":[516],"readonly":[516],"helperText":[1,"helper-text"],"infoText":[1,"info-text"],"showTextAsTooltip":[4,"show-text-as-tooltip"],"validText":[1,"valid-text"],"warningText":[1,"warning-text"],"label":[513],"invalidText":[1,"invalid-text"],"pattern":[1],"maxLength":[2,"max-length"],"minLength":[2,"min-length"],"allowedCharactersPattern":[1,"allowed-characters-pattern"],"isInvalid":[32],"isValid":[32],"isInfo":[32],"isWarning":[32],"isInvalidByRequired":[32],"inputType":[32],"getAssociatedFormElement":[64],"hasValidValue":[64],"getNativeInputElement":[64],"focusInput":[64]},null,{"type":["updateInputType"]}]]],["ix-menu",[[1,"ix-menu",{"showSettings":[1028,"show-settings"],"showAbout":[1028,"show-about"],"enableToggleTheme":[4,"enable-toggle-theme"],"enableSettings":[4,"enable-settings"],"enableMapExpand":[4,"enable-map-expand"],"applicationName":[1,"application-name"],"applicationDescription":[1,"application-description"],"maxVisibleMenuItems":[2,"max-visible-menu-items"],"i18nExpandSidebar":[1,"i-1-8n-expand-sidebar"],"expand":[1540],"startExpanded":[4,"start-expanded"],"pinned":[4],"i18nLegal":[1,"i-1-8n-legal"],"i18nSettings":[1,"i-1-8n-settings"],"i18nToggleTheme":[1,"i-1-8n-toggle-theme"],"i18nExpand":[1,"i-1-8n-expand"],"i18nCollapse":[1,"i-1-8n-collapse"],"showPinned":[32],"mapExpand":[32],"breakpoint":[32],"itemsScrollShadowTop":[32],"itemsScrollShadowBottom":[32],"applicationLayoutContext":[32],"toggleMapExpand":[64],"toggleMenu":[64],"toggleSettings":[64],"toggleAbout":[64]},[[9,"resize","handleOverflowIndicator"],[0,"close","onOverlayClose"]],{"pinned":["pinnedChange"]}]]],["ix-menu-category",[[1,"ix-menu-category",{"label":[1],"icon":[1],"notifications":[2],"menuExpand":[32],"showItems":[32],"showDropdown":[32],"nestedItems":[32]},[[8,"closeOtherCategories","onPointerLeave"]]]]],["ix-number-input",[[65,"ix-number-input",{"name":[513],"placeholder":[513],"value":[1538],"required":[516],"disabled":[4],"readonly":[4],"helperText":[1,"helper-text"],"infoText":[1,"info-text"],"showTextAsTooltip":[4,"show-text-as-tooltip"],"validText":[1,"valid-text"],"warningText":[1,"warning-text"],"label":[513],"invalidText":[1,"invalid-text"],"pattern":[1],"min":[8],"max":[8],"allowedCharactersPattern":[1,"allowed-characters-pattern"],"showStepperButtons":[4,"show-stepper-buttons"],"isInvalid":[32],"isValid":[32],"isInfo":[32],"isWarning":[32],"isInvalidByRequired":[32],"getAssociatedFormElement":[64],"hasValidValue":[64],"getNativeInputElement":[64],"focusInput":[64]}]]],["ix-application-switch-modal",[[1,"ix-application-switch-modal",{"config":[16]}]]],["ix-push-card",[[1,"ix-push-card",{"icon":[1],"notification":[1],"heading":[1],"subheading":[1],"variant":[1],"collapse":[4]}]]],["ix-breadcrumb",[[1,"ix-breadcrumb",{"visibleItemCount":[2,"visible-item-count"],"nextItems":[16],"ghost":[4],"ariaLabelPreviousButton":[1,"aria-label-previous-button"],"items":[32],"isPreviousDropdownExpanded":[32]},null,{"nextItems":["onNextItemsChange"]}]]],["ix-category-filter",[[1,"ix-category-filter",{"disabled":[4],"readonly":[4],"filterState":[16],"placeholder":[1],"categories":[16],"nonSelectableCategories":[16],"suggestions":[16],"icon":[1],"hideIcon":[4,"hide-icon"],"staticOperator":[1,"static-operator"],"repeatCategories":[4,"repeat-categories"],"tmpDisableScrollIntoView":[4,"tmp-disable-scroll-into-view"],"labelCategories":[1,"label-categories"],"i18nPlainText":[1,"i-1-8n-plain-text"],"showDropdown":[32],"hasFocus":[32],"categoryLogicalOperator":[32],"inputValue":[32],"category":[32],"filterTokens":[32]},null,{"filterState":["watchFilterState"]}]]],["ix-checkbox-group",[[1,"ix-checkbox-group",{"helperText":[1,"helper-text"],"label":[1],"direction":[1],"invalidText":[1,"invalid-text"],"infoText":[1,"info-text"],"validText":[1,"valid-text"],"warningText":[1,"warning-text"],"showTextAsTooltip":[4,"show-text-as-tooltip"],"isInvalid":[32],"isInfo":[32],"isValid":[32],"isWarning":[32]}]]],["ix-custom-field",[[1,"ix-custom-field",{"required":[4],"label":[1],"helperText":[1,"helper-text"],"infoText":[1,"info-text"],"warningText":[1,"warning-text"],"invalidText":[1,"invalid-text"],"validText":[1,"valid-text"],"showTextAsTooltip":[4,"show-text-as-tooltip"],"isInvalid":[32],"isValid":[32],"isInfo":[32],"isWarning":[32]}]]],["ix-dropdown-button",[[1,"ix-dropdown-button",{"variant":[1],"outline":[4],"ghost":[4],"disabled":[4],"label":[1],"icon":[1],"closeBehavior":[8,"close-behavior"],"placement":[1]}]]],["ix-group",[[1,"ix-group",{"suppressHeaderSelection":[4,"suppress-header-selection"],"header":[1],"subHeader":[1,"sub-header"],"collapsed":[1540],"selected":[1540],"index":[1538],"expandOnHeaderClick":[4,"expand-on-header-click"],"itemSelected":[32],"slotSize":[32],"footerVisible":[32],"showExpandCollapsedIcon":[32]},[[0,"selectedChanged","onItemClicked"]],{"selected":["selectedChanged"]}]]],["ix-menu-about",[[1,"ix-menu-about",{"activeTabLabel":[1025,"active-tab-label"],"label":[1],"show":[4],"items":[32]},null,{"activeTabLabel":["updateTab"]}]]],["ix-menu-about-news",[[1,"ix-menu-about-news",{"show":[1540],"label":[1],"i18nShowMore":[1,"i-1-8n-show-more"],"aboutItemLabel":[1,"about-item-label"],"offsetBottom":[2,"offset-bottom"],"expanded":[4]}]]],["ix-menu-settings",[[1,"ix-menu-settings",{"activeTabLabel":[1025,"active-tab-label"],"label":[1],"show":[4],"items":[32]},null,{"activeTabLabel":["updateTab"]}]]],["ix-radio-group",[[1,"ix-radio-group",{"helperText":[1,"helper-text"],"label":[1],"value":[1],"invalidText":[1,"invalid-text"],"infoText":[1,"info-text"],"warningText":[1,"warning-text"],"validText":[1,"valid-text"],"showTextAsTooltip":[4,"show-text-as-tooltip"],"direction":[1],"isInvalid":[32],"isValid":[32],"isInfo":[32],"isWarning":[32]},[[0,"checkedChange","onCheckedChangeHandler"]],{"value":["onValueChangeHandler"]}]]],["ix-split-button",[[1,"ix-split-button",{"variant":[1],"closeBehavior":[8,"close-behavior"],"outline":[4],"ghost":[4],"label":[1],"icon":[1],"splitIcon":[1,"split-icon"],"disabled":[4],"placement":[1],"toggle":[32]}]]],["ix-textarea",[[65,"ix-textarea",{"name":[513],"placeholder":[513],"value":[1537],"required":[516],"disabled":[4],"readonly":[4],"helperText":[1,"helper-text"],"infoText":[1,"info-text"],"showTextAsTooltip":[4,"show-text-as-tooltip"],"validText":[1,"valid-text"],"warningText":[1,"warning-text"],"label":[513],"invalidText":[1,"invalid-text"],"textareaHeight":[1,"textarea-height"],"textareaWidth":[1,"textarea-width"],"textareaRows":[2,"textarea-rows"],"textareaCols":[2,"textarea-cols"],"resizeBehavior":[1,"resize-behavior"],"maxLength":[2,"max-length"],"minLength":[2,"min-length"],"isInvalid":[32],"isValid":[32],"isInfo":[32],"isWarning":[32],"isInvalidByRequired":[32],"getAssociatedFormElement":[64],"hasValidValue":[64],"getNativeInputElement":[64],"focusInput":[64]}]]],["ix-action-card",[[1,"ix-action-card",{"variant":[1],"icon":[1],"heading":[1],"subheading":[1],"selected":[4]}]]],["ix-content-header",[[1,"ix-content-header",{"variant":[1],"headerTitle":[1,"header-title"],"headerSubtitle":[1,"header-subtitle"],"hasBackButton":[4,"has-back-button"]}]]],["ix-empty-state",[[1,"ix-empty-state",{"layout":[1],"icon":[1],"header":[1],"subHeader":[1,"sub-header"],"action":[1]}]]],["ix-pane",[[1,"ix-pane",{"heading":[1],"variant":[1],"hideOnCollapse":[4,"hide-on-collapse"],"size":[1],"borderless":[4],"expanded":[1028],"composition":[1025],"icon":[1],"ignoreLayoutSettings":[4,"ignore-layout-settings"],"isMobile":[1028,"is-mobile"],"expandIcon":[32],"showContent":[32],"minimizeIcon":[32],"floating":[32],"parentWidthPx":[32],"parentHeightPx":[32]},null,{"isMobile":["onMobileChange"],"composition":["onPositionChange"],"hideOnCollapse":["onHideOnCollapseChange"],"variant":["onVariantChange"],"borderless":["onBorderlessChange"],"parentHeightPx":["onParentSizeChange"],"parentWidthPx":["onParentSizeChange"],"expanded":["onSizeChange"],"size":["onSizeChange"]}]]],["ix-toast-container",[[1,"ix-toast-container",{"containerId":[1,"container-id"],"containerClass":[1,"container-class"],"position":[1],"showToast":[64]},null,{"position":["onPositionChange"]}]]],["ix-chip",[[1,"ix-chip",{"variant":[513],"active":[4],"closable":[4],"icon":[1],"background":[1],"color":[1],"chipColor":[1,"chip-color"],"outline":[4]}]]],["ix-drawer",[[1,"ix-drawer",{"show":[1028],"closeOnClickOutside":[4,"close-on-click-outside"],"fullHeight":[4,"full-height"],"minWidth":[2,"min-width"],"maxWidth":[2,"max-width"],"width":[8],"toggleDrawer":[64]},null,{"show":["onShowChanged"]}]]],["ix-expanding-search",[[1,"ix-expanding-search",{"icon":[1],"placeholder":[1],"value":[1025],"fullWidth":[4,"full-width"],"variant":[1],"outline":[4],"ghost":[4],"isFieldChanged":[32],"expanded":[32],"hasFocus":[32]}]]],["ix-flip-tile",[[1,"ix-flip-tile",{"state":[1],"height":[8],"width":[8],"index":[32],"isFlipAnimationActive":[32]}]]],["ix-message-bar",[[1,"ix-message-bar",{"type":[1],"dismissible":[4],"icon":[32],"color":[32]}]]],["ix-slider",[[1,"ix-slider",{"step":[2],"min":[2],"max":[2],"value":[2],"marker":[16],"trace":[4],"traceReference":[2,"trace-reference"],"disabled":[4],"error":[8],"rangeInput":[32],"rangeMin":[32],"rangeMax":[32],"rangeTraceReference":[32],"showTooltip":[32]},null,{"showTooltip":["onShowTooltipChange"],"value":["updateRangeVariables"],"max":["updateRangeVariables"],"min":["updateRangeVariables"],"traceReference":["updateRangeVariables"]}]]],["ix-upload",[[1,"ix-upload",{"accept":[1],"multiple":[4],"multiline":[4],"disabled":[4],"state":[1],"selectFileText":[1,"select-file-text"],"loadingText":[1,"loading-text"],"uploadFailedText":[1,"upload-failed-text"],"uploadSuccessText":[1,"upload-success-text"],"i18nUploadFile":[1,"i-1-8n-upload-file"],"i18nUploadDisabled":[1,"i-1-8n-upload-disabled"],"isFileOver":[32],"setFilesToUpload":[64]}]]],["ix-blind",[[1,"ix-blind",{"collapsed":[1540],"label":[1],"sublabel":[1],"icon":[1],"variant":[1]},null,{"collapsed":["animation"]}]]],["ix-checkbox",[[65,"ix-checkbox",{"name":[513],"value":[513],"label":[1],"checked":[1540],"disabled":[516],"indeterminate":[516],"required":[516],"hasValidValue":[64],"getAssociatedFormElement":[64]},null,{"checked":["onCheckedChange"],"value":["onValueChange"]}]]],["ix-dropdown-header",[[1,"ix-dropdown-header",{"label":[1]}]]],["ix-helper-text",[[1,"ix-helper-text",{"htmlFor":[1,"html-for"],"helperText":[1,"helper-text"],"invalidText":[1,"invalid-text"],"validText":[1,"valid-text"],"infoText":[1,"info-text"],"warningText":[1,"warning-text"],"validationResults":[32]}]]],["ix-icon-toggle-button",[[1,"ix-icon-toggle-button",{"variant":[1],"outline":[4],"ghost":[4],"icon":[1],"pressed":[4],"size":[1],"disabled":[516],"loading":[4]},null,{"variant":["onVariantChange"],"ghost":["onGhostChange"],"outline":["onOutlineChange"]}]]],["ix-modal-loading",[[1,"ix-modal-loading"]]],["ix-radio",[[65,"ix-radio",{"name":[513],"value":[513],"label":[1],"disabled":[4],"checked":[1540],"hasValidValue":[64],"getAssociatedFormElement":[64]},null,{"checked":["onCheckedChange"],"value":["onValueChange"]}]]],["ix-split-button-item",[[1,"ix-split-button-item",{"icon":[1],"label":[1],"getDropdownItemElement":[64]}]]],["ix-toggle",[[65,"ix-toggle",{"name":[513],"value":[513],"checked":[1540],"disabled":[4],"indeterminate":[1540],"textOn":[1,"text-on"],"textOff":[1,"text-off"],"textIndeterminate":[1,"text-indeterminate"],"hideText":[4,"hide-text"],"required":[516],"hasValidValue":[64],"getAssociatedFormElement":[64]},null,{"checked":["watchCheckedChange"]}]]],["ix-toggle-button",[[1,"ix-toggle-button",{"variant":[1],"outline":[4],"ghost":[4],"disabled":[516],"loading":[4],"icon":[1],"pressed":[4]},null,{"variant":["onVariantChange"],"ghost":["onGhostChange"],"outline":["onOutlineChange"]}]]],["ix-tree",[[1,"ix-tree",{"root":[1],"model":[16],"renderItem":[16],"context":[1040]},null,{"model":["modelChange"]}]]],["ix-application",[[1,"ix-application",{"theme":[1],"themeSystemAppearance":[4,"theme-system-appearance"],"forceBreakpoint":[1,"force-breakpoint"],"breakpoints":[16],"appSwitchConfig":[16],"breakpoint":[32],"applicationSidebarSlotted":[32]},null,{"breakpoints":["onBreakpointsChange"],"theme":["changeTheme"],"themeSystemAppearance":["changeTheme"],"appSwitchConfig":["onApplicationSidebarChange"],"applicationSidebarSlotted":["onApplicationSidebarChange"]}]]],["ix-application-sidebar",[[1,"ix-application-sidebar",{"visible":[32]},[[8,"application-sidebar-toggle","listenToggleEvent"]]]]],["ix-content",[[1,"ix-content",{"isContentHeaderSlotted":[32]}]]],["ix-css-grid",[[1,"ix-css-grid",{"templates":[16],"currentTemplate":[32]}]]],["ix-css-grid-item",[[1,"ix-css-grid-item",{"itemName":[1,"item-name"]}]]],["ix-dropdown-quick-actions",[[1,"ix-dropdown-quick-actions"]]],["ix-event-list",[[1,"ix-event-list",{"itemHeight":[8,"item-height"],"compact":[4],"animated":[4],"chevron":[4]},null,{"chevron":["watchChevron"]}]]],["ix-event-list-item",[[1,"ix-event-list-item",{"color":[1],"itemColor":[1,"item-color"],"selected":[4],"disabled":[4],"chevron":[4]},[[1,"click","handleItemClick"]]]]],["ix-flip-tile-content",[[1,"ix-flip-tile-content",{"contentVisible":[4,"content-visible"]}]]],["ix-input-group",[[1,"ix-input-group",{"disabled":[32],"inputPaddingLeft":[32],"inputPaddingRight":[32]}]]],["ix-key-value",[[1,"ix-key-value",{"icon":[1],"label":[1],"labelPosition":[1,"label-position"],"value":[1]}]]],["ix-key-value-list",[[1,"ix-key-value-list",{"striped":[4]}]]],["ix-kpi",[[1,"ix-kpi",{"label":[1],"value":[8],"unit":[1],"state":[1],"orientation":[1]}]]],["ix-layout-auto",[[1,"ix-layout-auto",{"layout":[16]},null,{"layout":["updateMediaQueryList"]}]]],["ix-link-button",[[1,"ix-link-button",{"disabled":[4],"url":[1],"target":[1]}]]],["ix-menu-about-item",[[1,"ix-menu-about-item",{"label":[513]},null,{"label":["watchLabel"]}]]],["ix-menu-settings-item",[[1,"ix-menu-settings-item",{"label":[513]},null,{"label":["watchLabel"]}]]],["ix-modal",[[1,"ix-modal",{"size":[1],"animation":[4],"backdrop":[4],"closeOnBackdropClick":[4,"close-on-backdrop-click"],"beforeDismiss":[16],"centered":[4],"keyboard":[4],"closeOnEscape":[4,"close-on-escape"],"modalVisible":[32],"showModal":[64],"dismissModal":[64],"closeModal":[64]}]]],["ix-modal-footer",[[1,"ix-modal-footer"]]],["ix-pane-layout",[[1,"ix-pane-layout",{"layout":[1],"variant":[1],"borderless":[4],"isMobile":[32],"paneElements":[32]},[[0,"slotChanged","onSlotChanged"],[0,"hideOnCollapseChanged","onCollapsibleChanged"],[0,"variantChanged","onVariantChanged"]],{"paneElements":["onPaneElementsChange"],"variant":["onVariableChange"],"borderless":["onBorderChange"],"layout":["onLayoutChange"],"isMobile":["onMobileChange"]}]]],["ix-pill",[[1,"ix-pill",{"variant":[513],"outline":[4],"icon":[1],"background":[1],"color":[1],"pillColor":[1,"pill-color"],"alignLeft":[4,"align-left"],"iconOnly":[32]}]]],["ix-tile",[[1,"ix-tile",{"size":[1],"hasHeaderSlot":[32],"hasFooterSlot":[32]}]]],["ix-validation-tooltip",[[1,"ix-validation-tooltip",{"message":[1],"placement":[1],"suppressAutomaticPlacement":[4,"suppress-automatic-placement"],"isInputValid":[32],"tooltipPosition":[32],"arrowPosition":[32]},null,{"isInputValid":["validationChanged"]}]]],["ix-workflow-step",[[1,"ix-workflow-step",{"vertical":[4],"disabled":[4],"status":[1],"clickable":[4],"selected":[4],"position":[1],"iconName":[32],"iconColor":[32]},null,{"selected":["selectedHandler"],"disabled":["watchPropHandler"],"status":["watchPropHandler"]}]]],["ix-workflow-steps",[[1,"ix-workflow-steps",{"vertical":[4],"clickable":[4],"selectedIndex":[2,"selected-index"]},[[0,"selectedChanged","onStepSelectionChanged"]]]]],["ix-typography",[[1,"ix-typography",{"format":[1],"color":[1],"textColor":[1,"text-color"],"bold":[4],"textDecoration":[1,"text-decoration"]}]]],["ix-select",[[65,"ix-select",{"name":[513],"required":[516],"label":[1],"warningText":[1,"warning-text"],"infoText":[1,"info-text"],"invalidText":[1,"invalid-text"],"validText":[1,"valid-text"],"helperText":[1,"helper-text"],"showTextAsTooltip":[4,"show-text-as-tooltip"],"selectedIndices":[1025,"selected-indices"],"value":[1025],"allowClear":[4,"allow-clear"],"mode":[1],"editable":[4],"disabled":[4],"readonly":[4],"i18nPlaceholder":[1,"i-1-8n-placeholder"],"i18nPlaceholderEditable":[1,"i-1-8n-placeholder-editable"],"i18nSelectListHeader":[1,"i-1-8n-select-list-header"],"i18nNoMatches":[1,"i-1-8n-no-matches"],"hideListHeader":[4,"hide-list-header"],"dropdownWidth":[1,"dropdown-width"],"dropdownMaxWidth":[1,"dropdown-max-width"],"dropdownShow":[32],"selectedLabels":[32],"isDropdownEmpty":[32],"navigationItem":[32],"inputFilterText":[32],"inputValue":[32],"isInvalid":[32],"isValid":[32],"isInfo":[32],"isWarning":[32],"hasValidValue":[64],"getAssociatedFormElement":[64],"getNativeInputElement":[64],"focusInput":[64]},[[0,"itemClick","onItemClicked"],[0,"ix-select-item:valueChange","onLabelChange"],[0,"ix-select-item:labelChange","onLabelChange"]],{"selectedIndices":["watchSelectedIndices"],"value":["watchValue"],"dropdownShow":["watchDropdownShow"]}]]],["ix-time-picker",[[1,"ix-time-picker",{"format":[1],"corners":[1],"standaloneAppearance":[4,"standalone-appearance"],"individual":[4],"showHour":[4,"show-hour"],"showMinutes":[4,"show-minutes"],"showSeconds":[4,"show-seconds"],"time":[1],"showTimeReference":[1028,"show-time-reference"],"timeReference":[1,"time-reference"],"textSelectTime":[1,"text-select-time"],"textTime":[1,"text-time"],"_time":[32],"_timeRef":[32],"_formattedTime":[32],"getCurrentTime":[64]},null,{"time":["watchTimePropHandler"],"_time":["formatTime","onInternalTimeChange"]}]]],["ix-map-navigation-overlay",[[1,"ix-map-navigation-overlay",{"name":[1],"icon":[1],"color":[1],"iconColor":[1,"icon-color"]}]]],["ix-toast",[[1,"ix-toast",{"type":[1],"toastTitle":[1,"toast-title"],"autoCloseDelay":[2,"auto-close-delay"],"autoClose":[4,"auto-close"],"icon":[1],"iconColor":[1,"icon-color"],"progress":[32],"touched":[32]}]]],["ix-breadcrumb-item",[[1,"ix-breadcrumb-item",{"label":[1],"icon":[1],"ghost":[4],"visible":[4],"showChevron":[4,"show-chevron"],"isDropdownTrigger":[4,"is-dropdown-trigger"],"a11y":[32]}]]],["ix-tree-item",[[1,"ix-tree-item",{"text":[1],"hasChildren":[4,"has-children"],"context":[16]}]]],["ix-divider",[[1,"ix-divider"]]],["ix-avatar_2",[[1,"ix-avatar",{"image":[1],"initials":[1],"username":[1],"extra":[1],"isClosestApplicationHeader":[32],"hasSlottedElements":[32]}],[1,"ix-menu-avatar-item",{"icon":[1],"label":[1],"getDropdownItemElement":[64]}]]],["ix-application-header",[[1,"ix-application-header",{"name":[1],"showMenu":[1028,"show-menu"],"breakpoint":[32],"menuExpanded":[32],"suppressResponsive":[32],"hasSlottedElements":[32],"applicationLayoutContext":[32]},null,{"applicationLayoutContext":["watchApplicationLayoutContext"],"suppressResponsive":["watchSuppressResponsive"]}]]],["ix-modal-content_2",[[1,"ix-modal-header",{"hideClose":[4,"hide-close"],"icon":[1],"iconColor":[1,"icon-color"]},null,{"icon":["onIconChange"]}],[1,"ix-modal-content"]]],["ix-group-context-menu_2",[[1,"ix-group-context-menu",{"showContextMenu":[32]}],[1,"ix-group-item",{"icon":[1],"text":[1],"secondaryText":[1,"secondary-text"],"suppressSelection":[4,"suppress-selection"],"selected":[4],"focusable":[4],"index":[2]},[[1,"click","clickListen"]]]]],["ix-menu-item",[[1,"ix-menu-item",{"label":[1],"home":[4],"bottom":[4],"tabIcon":[1025,"tab-icon"],"icon":[1025],"notifications":[2],"active":[4],"disabled":[4],"isCategory":[4,"is-category"],"tooltip":[32],"menuExpanded":[32]},null,{"icon":["onIconChange"],"tabIcon":["onTabIconChange"]}]]],["ix-card-accordion_2",[[1,"ix-card-accordion",{"collapse":[4],"expandContent":[32]},null,{"collapse":["onInitialExpandChange"]}],[1,"ix-card-title"]]],["ix-menu-expand-icon",[[1,"ix-menu-expand-icon",{"ixAriaLabel":[1,"ix-aria-label"],"expanded":[516],"breakpoint":[513],"pinned":[4]}]]],["ix-tab-item_2",[[1,"ix-tab-item",{"selected":[4],"disabled":[4],"small":[4],"icon":[4],"rounded":[4],"counter":[2],"layout":[1],"placement":[1]}],[1,"ix-tabs",{"small":[4],"rounded":[4],"selected":[1026],"layout":[1],"placement":[1],"totalItems":[32],"currentScrollAmount":[32],"scrollAmount":[32],"scrollActionAmount":[32],"showArrowPrevious":[32],"showArrowNext":[32]},[[9,"resize","onWindowResize"],[0,"tabClick","onTabClick"]],{"selected":["onSelectedChange"]}]]],["ix-filter-chip_2",[[1,"ix-select-item",{"label":[513],"value":[520],"selected":[4],"hover":[4],"getDropdownItemElement":[64],"onItemClick":[64]},null,{"value":["onValueChange"],"label":["labelChange"]}],[1,"ix-filter-chip",{"disabled":[4],"readonly":[4]}]]],["ix-date-time-card",[[1,"ix-date-time-card",{"standaloneAppearance":[4,"standalone-appearance"],"individual":[4],"corners":[1]}]]],["ix-card_2",[[1,"ix-card",{"variant":[1],"selected":[4]}],[1,"ix-card-content"]]],["ix-col_4",[[1,"ix-col",{"size":[1],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"]},[[9,"resize","onResize"]]],[1,"ix-layout-grid",{"noMargin":[4,"no-margin"],"gap":[1],"columns":[2]}],[1,"ix-row"],[1,"ix-date-picker",{"format":[1],"range":[4],"corners":[1],"from":[1],"to":[1],"minDate":[1,"min-date"],"maxDate":[1,"max-date"],"textSelectDate":[1,"text-select-date"],"i18nDone":[1,"i18n-done"],"weekStartIndex":[2,"week-start-index"],"locale":[1],"individual":[4],"eventDelimiter":[1,"event-delimiter"],"standaloneAppearance":[4,"standalone-appearance"],"today":[1],"currFromDate":[32],"currToDate":[32],"selectedYear":[32],"tempYear":[32],"startYear":[32],"endYear":[32],"selectedMonth":[32],"tempMonth":[32],"dayNames":[32],"monthNames":[32],"focusedDay":[32],"getCurrentDate":[64]},null,{"from":["watchFromPropHandler"],"to":["watchToPropHandler"],"locale":["onLocaleChange"]}]]],["ix-dropdown-item",[[1,"ix-dropdown-item",{"label":[1],"icon":[1],"hover":[4],"disabled":[4],"checked":[4],"isSubMenu":[4,"is-sub-menu"],"suppressChecked":[4,"suppress-checked"],"emitItemClick":[64],"getDropdownItemElement":[64]}]]],["ix-icon-button_2",[[1,"ix-icon-button",{"a11yLabel":[1,"a11y-label"],"variant":[1],"outline":[4],"ghost":[4],"oval":[4],"icon":[1],"size":[1],"color":[1],"iconColor":[1,"icon-color"],"disabled":[4],"type":[1],"loading":[4]}],[1,"ix-spinner",{"variant":[1],"size":[1],"hideTrack":[4,"hide-track"]}]]],["ix-button",[[1,"ix-button",{"variant":[1],"outline":[4],"ghost":[4],"disabled":[516],"type":[1],"loading":[4],"icon":[1],"alignment":[1],"iconSize":[1,"icon-size"]},[[2,"click","handleClick"]]]]],["ix-dropdown",[[1,"ix-dropdown",{"suppressAutomaticPlacement":[4,"suppress-automatic-placement"],"show":[1540],"trigger":[1],"anchor":[1],"closeBehavior":[8,"close-behavior"],"placement":[1],"positioningStrategy":[1,"positioning-strategy"],"header":[1],"offset":[16],"overwriteDropdownStyle":[16],"discoverAllSubmenus":[4,"discover-all-submenus"],"ignoreRelatedSubmenu":[4,"ignore-related-submenu"],"suppressOverflowBehavior":[4,"suppress-overflow-behavior"],"discoverSubmenu":[64],"updatePosition":[64]},[[0,"ix-assign-sub-menu","cacheSubmenuId"]],{"show":["changedShow"],"trigger":["changedTrigger"]}]]],["ix-field-label_3",[[1,"ix-field-wrapper",{"helperText":[1,"helper-text"],"label":[1],"invalidText":[1,"invalid-text"],"validText":[1,"valid-text"],"infoText":[1,"info-text"],"warningText":[1,"warning-text"],"isInvalid":[4,"is-invalid"],"isValid":[4,"is-valid"],"isInfo":[4,"is-info"],"isWarning":[4,"is-warning"],"showTextAsTooltip":[4,"show-text-as-tooltip"],"required":[4],"htmlForLabel":[1,"html-for-label"],"controlRef":[16]}],[1,"ix-field-label",{"required":[1540],"htmlFor":[513,"html-for"],"controlRef":[16],"isInvalid":[1028,"is-invalid"]},null,{"htmlFor":["registerHtmlForObserver"],"controlRef":["registerControlRefObserver"]}],[1,"ix-tooltip",{"for":[1],"titleContent":[1,"title-content"],"interactive":[4],"placement":[1],"showDelay":[2,"show-delay"],"hideDelay":[2,"hide-delay"],"animationFrame":[4,"animation-frame"],"visible":[32],"showTooltip":[64],"hideTooltip":[64]}]]]]'), options);
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
  readTask as a,
  __variableDynamicImportRuntimeHelper as b,
  createEvent as c,
  defineCustomElements as d,
  forceUpdate as f,
  getElement as g,
  h,
  registerInstance as r
};
