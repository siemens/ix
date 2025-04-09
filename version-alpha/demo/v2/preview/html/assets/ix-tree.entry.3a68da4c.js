import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.bff64ac3.js";
import { d as dropdownController } from "./dropdown-controller-D3K9vmFp.530ecea4.js";
function renderDefaultItem(item, context, update) {
  const el = document.createElement("ix-tree-item");
  el.hasChildren = item.hasChildren;
  el.context = context;
  el.text = item.data.name;
  update((updateTreeItem) => {
    el.text = updateTreeItem.data.name;
  });
  return el;
}
const isNumber = (input) => !Number.isNaN(Number(input));
const addClass = (element, className) => {
  element.classList.add(className);
};
class VirtualList {
  static create(element, userProvidedConfig = VirtualList.defaultConfig) {
    return new VirtualList(element, userProvidedConfig);
  }
  static mergeStyle(element, style) {
    for (let i in style) {
      if (element.style[i] !== style[i]) {
        element.style[i] = style[i];
      }
    }
  }
  static getMaxBrowserHeight() {
    const wrapper = document.createElement("div");
    const fixture = document.createElement("div");
    VirtualList.mergeStyle(wrapper, {
      position: "absolute",
      height: "1px",
      opacity: 0
    });
    VirtualList.mergeStyle(fixture, { height: "1e7px" });
    wrapper.appendChild(fixture);
    document.body.appendChild(wrapper);
    const maxElementHeight = fixture.offsetHeight;
    document.body.removeChild(wrapper);
    return maxElementHeight;
  }
  constructor(element, userProvidedConfig) {
    this._lastRepaint = null;
    this._maxElementHeight = VirtualList.getMaxBrowserHeight();
    this.refresh(element, userProvidedConfig);
    const config = this._config;
    const render = () => {
      const scrollTop = this._getScrollPosition();
      const lastRepaint = this._lastRepaint;
      this._renderAnimationFrame = window.requestAnimationFrame(render);
      if (scrollTop === lastRepaint) {
        return;
      }
      const diff = lastRepaint ? scrollTop - lastRepaint : 0;
      if (!lastRepaint || diff < 0 || diff > this._averageHeight) {
        let rendered = this._renderChunk();
        this._lastRepaint = scrollTop;
        if (rendered !== false && typeof config.afterRender === "function") {
          config.afterRender();
        }
      }
    };
    render();
  }
  destroy() {
    window.cancelAnimationFrame(this._renderAnimationFrame);
  }
  refresh(element, userProvidedConfig = VirtualList.defaultConfig) {
    this._config = userProvidedConfig;
    if (!element || element.nodeType !== 1) {
      throw new Error("HyperList requires a valid DOM Node container");
    }
    this._element = element;
    const config = this._config;
    const scroller = this._scroller || config.scroller || document.createElement(config.scrollerTagName || "tr");
    if (typeof config.useFragment !== "boolean") {
      this._config.useFragment = true;
    }
    if (!config.generate) {
      throw new Error("Missing required `generate` function");
    }
    if (!isNumber(config.total)) {
      throw new Error("Invalid required `total` value, expected number");
    }
    if (!Array.isArray(config.itemHeight) && !isNumber(config.itemHeight)) {
      throw new Error(`
        Invalid required \`itemHeight\` value, expected number or array
      `.trim());
    } else if (isNumber(config.itemHeight)) {
      this._itemHeights = Array(config.total).fill(config.itemHeight);
    } else {
      this._itemHeights = [config.itemHeight];
    }
    Object.keys(VirtualList.defaultConfig).filter((prop) => prop in config).forEach((prop) => {
      const value2 = config[prop];
      const isValueNumber = isNumber(value2);
      if (value2 && typeof value2 !== "string" && typeof value2 !== "number") {
        let msg = `Invalid optional \`${prop}\`, expected string or number`;
        throw new Error(msg);
      } else if (isValueNumber) {
        config[prop] = `${value2}px`;
      }
    });
    const isHorizontal = Boolean(config.horizontal);
    const value = config[isHorizontal ? "width" : "height"];
    if (value) {
      const isValueNumber = isNumber(value);
      const isValuePercent = isValueNumber ? false : value.slice(-1) === "%";
      const numberValue = isValueNumber ? parseInt(value, 10) : parseInt(value.replace(/px|%/, ""), 10);
      const innerSize = window[isHorizontal ? "innerWidth" : "innerHeight"];
      if (isValuePercent) {
        this._containerSize = innerSize * numberValue / 100;
      } else {
        this._containerSize = isNumber(value) ? value : numberValue;
      }
    }
    const scrollContainer = config.scrollContainer;
    const scrollerHeight = config.itemHeight * config.total;
    const maxElementHeight = this._maxElementHeight;
    if (scrollerHeight > maxElementHeight) {
      console.warn([
        "HyperList: The maximum element height",
        maxElementHeight + "px has",
        "been exceeded; please reduce your item height."
      ].join(" "));
    }
    const elementStyle = {
      width: `${config.width}`,
      height: scrollContainer ? `${scrollerHeight}px` : `${config.height}`,
      overflow: scrollContainer ? "none" : "auto",
      position: "relative"
    };
    VirtualList.mergeStyle(element, elementStyle);
    if (scrollContainer) {
      VirtualList.mergeStyle(config.scrollContainer, { overflow: "auto" });
    }
    const scrollerStyle = {
      opacity: "0",
      position: "absolute",
      [isHorizontal ? "height" : "width"]: "1px",
      [isHorizontal ? "width" : "height"]: `${scrollerHeight}px`
    };
    VirtualList.mergeStyle(scroller, scrollerStyle);
    if (!this._scroller) {
      element.appendChild(scroller);
    }
    const padding = this._computeScrollPadding();
    this._scrollPaddingBottom = padding.bottom;
    this._scrollPaddingTop = padding.top;
    this._scroller = scroller;
    this._scrollHeight = this._computeScrollHeight();
    this._itemPositions = this._itemPositions || Array(config.total).fill(0);
    this._computePositions(0);
    this._renderChunk(this._lastRepaint !== null);
    if (typeof config.afterRender === "function") {
      config.afterRender();
    }
  }
  _getRow(i) {
    const config = this._config;
    let item = config.generate(i);
    let height = item.height;
    if (height !== void 0 && isNumber(height)) {
      item = item.element;
      if (height !== this._itemHeights[i]) {
        this._itemHeights[i] = height;
        this._computePositions(i);
        this._scrollHeight = this._computeScrollHeight();
      }
    } else {
      height = this._itemHeights[i];
    }
    if (!item || item.nodeType !== 1) {
      throw new Error(`Generator did not return a DOM Node for index: ${i}`);
    }
    addClass(item, config.rowClassName || "vrow");
    const top = this._itemPositions[i] + this._scrollPaddingTop;
    VirtualList.mergeStyle(item, {
      position: "absolute",
      [config.horizontal ? "left" : "top"]: `${top}px`
    });
    return item;
  }
  _getScrollPosition() {
    const config = this._config;
    if (typeof config.overrideScrollPosition === "function") {
      return config.overrideScrollPosition();
    }
    return this._element[config.horizontal ? "scrollLeft" : "scrollTop"];
  }
  _renderChunk(force = false) {
    const config = this._config;
    const element = this._element;
    const scrollTop = this._getScrollPosition();
    const total = config.total;
    let from = this._getFrom(scrollTop) - 1;
    if (from < 0 || from - this._screenItemsLen < 0) {
      from = 0;
    }
    if (!force && this._lastFrom === from) {
      return false;
    }
    this._lastFrom = from;
    let to = from + this._cachedItemsLen;
    if (to > total || to + this._cachedItemsLen > total) {
      to = total;
    }
    const fragment = config.useFragment ? document.createDocumentFragment() : [];
    const scroller = this._scroller;
    fragment[config.useFragment ? "appendChild" : "push"](scroller);
    for (let i = from; i < to; i++) {
      let row = this._getRow(i);
      fragment[config.useFragment ? "appendChild" : "push"](row);
    }
    if (config.applyPatch) {
      return config.applyPatch(element, fragment);
    }
    element.innerHTML = "";
    element.appendChild(fragment);
  }
  _computePositions(from = 1) {
    const config = this._config;
    const total = config.total;
    if (from < 1) {
      from = 1;
    }
    for (let i = from; i < total; i++) {
      this._itemPositions[i] = this._itemHeights[i - 1] + this._itemPositions[i - 1];
    }
  }
  _computeScrollHeight() {
    const config = this._config;
    const isHorizontal = Boolean(config.horizontal);
    const total = config.total;
    const scrollHeight = this._itemHeights.reduce((a, b) => a + b, 0) + this._scrollPaddingBottom + this._scrollPaddingTop;
    VirtualList.mergeStyle(this._scroller, {
      opacity: 0,
      position: "absolute",
      top: "0px",
      [isHorizontal ? "height" : "width"]: "1px",
      [isHorizontal ? "width" : "height"]: `${scrollHeight}px`
    });
    const sortedItemHeights = this._itemHeights.slice(0).sort((a, b) => a - b);
    const middle = Math.floor(total / 2);
    const averageHeight = total % 2 === 0 ? (sortedItemHeights[middle] + sortedItemHeights[middle - 1]) / 2 : sortedItemHeights[middle];
    const clientProp = isHorizontal ? "clientWidth" : "clientHeight";
    const element = config.scrollContainer ? config.scrollContainer : this._element;
    const containerHeight = element[clientProp] ? element[clientProp] : this._containerSize;
    this._screenItemsLen = Math.ceil(containerHeight / averageHeight);
    this._containerSize = containerHeight;
    this._cachedItemsLen = Math.max(this._cachedItemsLen || 0, this._screenItemsLen * 3);
    this._averageHeight = averageHeight;
    return scrollHeight;
  }
  _computeScrollPadding() {
    const config = this._config;
    const isHoriz = Boolean(config.horizontal);
    const styles = window.getComputedStyle(this._element);
    const padding = (location) => {
      const cssValue = styles.getPropertyValue(`padding-${location}`);
      return parseInt(cssValue, 10) || 0;
    };
    if (isHoriz) {
      return {
        bottom: padding("right"),
        top: padding("left")
      };
    } else {
      return {
        bottom: padding("bottom"),
        top: padding("top")
      };
    }
  }
  _getFrom(scrollTop) {
    let i = 0;
    while (this._itemPositions[i] < scrollTop) {
      i++;
    }
    return i;
  }
}
VirtualList.defaultConfig = {
  width: "100%",
  height: "100%"
};
const treeCss = ":host{display:block}";
const Tree = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.contextChange = createEvent(this, "contextChange", 7);
    this.nodeToggled = createEvent(this, "nodeToggled", 7);
    this.nodeClicked = createEvent(this, "nodeClicked", 7);
    this.nodeRemoved = createEvent(this, "nodeRemoved", 7);
    this.model = {};
    this.context = {};
    this.toggleListener = /* @__PURE__ */ new Map();
    this.itemClickListener = /* @__PURE__ */ new Map();
    this.updates = /* @__PURE__ */ new Map();
    this.hasFirstRender = false;
  }
  updatePadding(element, item) {
    element.style.paddingLeft = item.level + "rem";
  }
  getVirtualizerOptions() {
    const list = this.buildTreeList(this.model[this.root]);
    let setToggleListener = (item, el, index) => {
      if (item.hasChildren && !this.toggleListener.has(el)) {
        const toggleCallback = (e) => {
          e.preventDefault();
          e.stopPropagation();
          const context = this.getContext(list[index].id);
          context.isExpanded = !context.isExpanded;
          this.nodeToggled.emit({ id: item.id, isExpaned: context.isExpanded });
          this.setContext(item.id, context);
        };
        el.addEventListener("toggle", toggleCallback);
        this.toggleListener.set(el, toggleCallback);
      }
    };
    return {
      width: "100%",
      height: "100%",
      itemHeight: 32,
      total: list.length,
      generate: (index) => {
        const item = list[index];
        const renderedTreeItem = this.hostElement.querySelector(`[data-tree-node-id="${item.id}"]`);
        const context = this.getContext(item.id);
        if (renderedTreeItem) {
          renderedTreeItem.hasChildren = item.hasChildren;
          renderedTreeItem.context = Object.assign({}, context);
          setToggleListener(item, renderedTreeItem, index);
          if (this.updates.has(item.id)) {
            const doUpdate = this.updates.get(item.id);
            if (doUpdate) {
              doUpdate(item, Object.assign({}, this.context));
            }
          }
          this.updatePadding(renderedTreeItem, item);
          return renderedTreeItem;
        }
        const update = (callback) => {
          this.updates.set(item.id, callback);
        };
        let innerElement = null;
        if (this.renderItem) {
          innerElement = this.renderItem(index, item, list, Object.assign({}, this.context), update);
        }
        if (innerElement === null) {
          innerElement = renderDefaultItem(item, context, update);
        }
        const el = innerElement;
        el.setAttribute("data-tree-node-id", item.id);
        el.style.paddingRight = "1rem";
        this.updatePadding(el, item);
        if (!this.itemClickListener.has(el)) {
          const itemClickCallback = (event) => {
            const path = event.composedPath();
            const treeIndex = path.indexOf(this.hostElement);
            const treePath = path.slice(0, treeIndex);
            const hasTrigger = dropdownController.pathIncludesTrigger(treePath);
            if (hasTrigger) {
              return;
            }
            if (!event.defaultPrevented) {
              Object.values(this.context).forEach((c) => c.isSelected = false);
              const context2 = this.getContext(item.id);
              context2.isSelected = true;
              this.setContext(item.id, context2);
            }
            if (this.toggleOnItemClick && item.hasChildren) {
              const context2 = this.getContext(item.id);
              context2.isExpanded = !context2.isExpanded;
              this.nodeToggled.emit({
                id: item.id,
                isExpaned: context2.isExpanded
              });
              this.setContext(item.id, context2);
            }
            this.nodeClicked.emit(item.id);
          };
          el.addEventListener("toggle", (event) => {
            event.preventDefault();
          });
          el.addEventListener("click", itemClickCallback);
          this.itemClickListener.set(el, itemClickCallback);
        }
        setToggleListener(item, el, index);
        return el;
      }
    };
  }
  setContext(id, context) {
    this.context = Object.assign(Object.assign({}, this.context), { [id]: context });
    this.contextChange.emit(this.context);
  }
  getContext(id) {
    if (!this.context) {
      return {
        isExpanded: false,
        isSelected: false
      };
    }
    if (!this.context[id]) {
      this.context[id] = {
        isExpanded: false,
        isSelected: false
      };
    }
    return this.context[id];
  }
  buildTreeList(root, level = 0) {
    const itemList = [];
    if (root === null || root === void 0 ? void 0 : root.hasChildren) {
      const newLevel = level + 1;
      root.children.forEach((id) => {
        const item = this.model[id];
        const context = this.getContext(id);
        itemList.push(Object.assign(Object.assign({}, item), { level }));
        if (item.hasChildren && context.isExpanded) {
          itemList.push(...this.buildTreeList(item, newLevel));
        }
      });
    }
    return itemList;
  }
  componentDidLoad() {
    this.initList();
    this.observer = new MutationObserver((records) => {
      let removed = [];
      records.forEach((record) => {
        removed = [...removed, ...Array.from(record.removedNodes)];
        record.addedNodes.forEach((an) => {
          const index = removed.indexOf(an);
          if (index >= 0) {
            removed.splice(index, 1);
          }
        });
      });
      this.nodeRemoved.emit(removed);
    });
    this.observer.observe(this.hostElement, {
      childList: true
    });
  }
  componentWillRender() {
    this.hasFirstRender = true;
    if (this.isListInitialized()) {
      this.refreshList();
    } else {
      this.initList();
    }
  }
  connectedCallback() {
    if (this.hasFirstRender) {
      this.initList();
    }
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.hyperlist) === null || _a === void 0 ? void 0 : _a.destroy();
    (_b = this.observer) === null || _b === void 0 ? void 0 : _b.disconnect();
  }
  modelChange() {
    if (this.hasFirstRender && !this.isListInitialized()) {
      this.initList();
    }
  }
  isListInitialized() {
    var _a;
    const itemPositions = (_a = this.hyperlist) === null || _a === void 0 ? void 0 : _a._itemPositions;
    return itemPositions !== void 0 && itemPositions.length && !(itemPositions === null || itemPositions === void 0 ? void 0 : itemPositions.some((item) => item === void 0 || Number.isNaN(item)));
  }
  refreshList() {
    if (this.hyperlist) {
      this.hyperlist.refresh(this.hostElement, this.getVirtualizerOptions());
    }
  }
  initList() {
    var _a;
    if (!this.model) {
      return;
    }
    (_a = this.hyperlist) === null || _a === void 0 ? void 0 : _a.destroy();
    const config = this.getVirtualizerOptions();
    this.hyperlist = new VirtualList(this.hostElement, config);
  }
  render() {
    return h(Host, { key: "3d9a880f2714c69333145042506d396a3a2828cd" }, h("slot", { key: "7d61c95a13e449305c3a8d33c509eed0389e5abe" }));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "model": ["modelChange"]
    };
  }
};
Tree.style = treeCss;
export {
  Tree as ix_tree
};
