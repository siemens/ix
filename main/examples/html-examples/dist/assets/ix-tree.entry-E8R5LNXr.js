import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-EB1NlL0D.js";
import { d as dropdownController } from "./dropdown-controller-BoOU7EDq-2DXchfIX.js";
import "./path-utils-CPTNMmHA-DZ8fgDPW.js";
function renderDefaultItem(item, context, update) {
  const el = document.createElement("ix-tree-item");
  el.hasChildren = item.hasChildren;
  el.context = context;
  el.text = item.data.name;
  el.disabled = item.disabled || false;
  update((updateTreeItem) => {
    el.text = updateTreeItem.data.name;
    el.disabled = updateTreeItem.disabled || false;
  });
  return el;
}
const defaultRefreshTreeOptions = {
  force: false
};
const isNumber = (input) => !Number.isNaN(Number(input));
const addClass = (element, className) => {
  element.classList.add(className);
};
class VirtualList {
  _config;
  _lastRepaint;
  _maxElementHeight;
  _renderAnimationFrame;
  _averageHeight;
  _scrollListener = null;
  _pendingRender = false;
  static defaultConfig = {
    width: "100%",
    height: "100%"
  };
  _element;
  _scroller;
  _itemHeights;
  _containerSize;
  _scrollPaddingBottom;
  _scrollPaddingTop;
  _scrollHeight;
  _itemPositions;
  _screenItemsLen;
  _lastFrom;
  _cachedItemsLen;
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
      this._pendingRender = false;
      const scrollTop = this._getScrollPosition();
      const lastRepaint = this._lastRepaint;
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
    const scrollContainer = config.scrollContainer || element;
    this._scrollListener = () => {
      if (!this._pendingRender) {
        this._pendingRender = true;
        this._renderAnimationFrame = window.requestAnimationFrame(render);
      }
    };
    scrollContainer.addEventListener("scroll", this._scrollListener, {
      passive: true
    });
    render();
  }
  destroy() {
    if (this._renderAnimationFrame) {
      window.cancelAnimationFrame(this._renderAnimationFrame);
    }
    const config = this._config;
    const scrollContainer = config?.scrollContainer || this._element;
    if (this._scrollListener && scrollContainer) {
      scrollContainer.removeEventListener("scroll", this._scrollListener);
    }
  }
  refresh(element, userProvidedConfig = VirtualList.defaultConfig) {
    const oldScrollContainer = this._config?.scrollContainer || this._element;
    if (this._scrollListener && oldScrollContainer) {
      oldScrollContainer.removeEventListener("scroll", this._scrollListener);
    }
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
    if (this._scrollListener) {
      const scrollContainer2 = config.scrollContainer || element;
      scrollContainer2.addEventListener("scroll", this._scrollListener, {
        passive: true
      });
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
    const fragment = config.useFragment ? document.createDocumentFragment() : [
      // Sometimes you'll pass fake elements to this tool and Fragments require
      // real elements.
    ];
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
const treeCss = () => `:host{display:block}`;
const Tree = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.contextChange = createEvent(this, "contextChange", 7);
    this.nodeToggled = createEvent(this, "nodeToggled", 7);
    this.nodeClicked = createEvent(this, "nodeClicked", 7);
    this.nodeRemoved = createEvent(this, "nodeRemoved", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Initial root element will not be rendered
   */
  root = "root";
  /**
   * Tree model
   *
   * The model is processed recursively and must be acyclic. Bound the size of untrusted or
   * user-controlled models to keep the page responsive. Item IDs are used in CSS selectors; use
   * simple, application-controlled IDs (letters, digits, `-`, `_`).
   */
  model = {};
  /**
   * Render function of tree items
   */
  renderItem;
  /**
   * Selection and collapsed state management
   */
  context = {};
  /**
   * Enable to toggle items by click on the item
   * @since 3.0.0
   */
  toggleOnItemClick;
  /**
   * Context changed
   */
  contextChange;
  /**
   * Node toggled event
   */
  nodeToggled;
  /**
   * Node clicked event
   */
  nodeClicked;
  /**
   * Emits removed nodes
   */
  nodeRemoved;
  hyperlist;
  updates = /* @__PURE__ */ new Map();
  observer;
  hasFirstRender = false;
  dirtyItems = /* @__PURE__ */ new Set();
  focusedItemId;
  getNavigationId(items) {
    return this.focusedItemId && items.some((item) => item.id === this.focusedItemId) && this.focusedItemId || items.find((item) => this.getContext(item.id).isSelected)?.id || items[0]?.id;
  }
  updateNavigationTabIndex(id) {
    this.focusedItemId = id;
    this.hostElement.removeAttribute("tabindex");
    this.hostElement.querySelectorAll("[data-tree-node-id]").forEach((item) => {
      this.setNavigationTabIndex(item, item.dataset.treeNodeId === id);
    });
  }
  updateNavigationTabStops(items) {
    const navigationId = this.getNavigationId(items);
    const rows = Array.from(this.hostElement.querySelectorAll("[data-tree-node-id]"));
    const isRendered = rows.some((row) => row.dataset.treeNodeId === navigationId);
    if (navigationId && !isRendered) {
      this.hostElement.tabIndex = 0;
    } else {
      this.hostElement.removeAttribute("tabindex");
    }
    rows.forEach((row) => {
      this.setNavigationTabIndex(row, row.dataset.treeNodeId === navigationId);
    });
  }
  setNavigationTabIndex(item, active) {
    const index = active ? 0 : -1;
    item.tabIndex = index;
    item.dataset.treeNavigationTabIndex = String(index);
    item.dispatchEvent(new CustomEvent("treeNavigationIndex", { detail: index }));
  }
  updatePadding(element, item) {
    element.style.paddingLeft = item.level + "rem";
  }
  getVirtualizerOptions(refreshTreeOptions) {
    const list = this.buildTreeList(this.getModelItem(this.root));
    return {
      width: "100%",
      height: "100%",
      itemHeight: 32,
      scrollerTagName: "div",
      total: list.length,
      useFragment: false,
      applyPatch: (element, fragment) => {
        const rows = fragment instanceof DocumentFragment ? Array.from(fragment.children) : fragment;
        const retainedNodes = new Set(rows);
        for (const child of Array.from(element.childNodes)) {
          if (!retainedNodes.has(child)) {
            child.remove();
          }
        }
        let next = element.firstChild;
        for (const row of rows) {
          if (row === next) {
            next = next.nextSibling;
          } else {
            element.insertBefore(row, next);
          }
        }
        this.updateNavigationTabStops(list);
      },
      generate: (index) => {
        const item = list[index];
        const renderedTreeItem = this.hostElement.querySelector(`[data-tree-node-id="${item.id}"]`);
        const context = this.getContext(item.id);
        if (renderedTreeItem && refreshTreeOptions.force === false) {
          renderedTreeItem.hasChildren = item.hasChildren;
          renderedTreeItem.context = { ...context };
          renderedTreeItem.disabled = Boolean(item.disabled || context.isDisabled);
          renderedTreeItem.setAttribute("aria-level", String(item.level + 1));
          renderedTreeItem.setAttribute("aria-setsize", String(item.setsize));
          renderedTreeItem.setAttribute("aria-posinset", String(item.posinset));
          let forceRerender = this.dirtyItems.has(item.id);
          if (this.updates.has(item.id)) {
            const doUpdate = this.updates.get(item.id);
            if (doUpdate) {
              const updateRequestedRerender = doUpdate(item, {
                ...this.context
              });
              if (typeof updateRequestedRerender === "boolean") {
                forceRerender = updateRequestedRerender;
              }
            }
          }
          this.updatePadding(renderedTreeItem, item);
          if (!forceRerender) {
            return renderedTreeItem;
          }
        }
        const update = (callback) => {
          this.updates.set(item.id, callback);
        };
        let innerElement = null;
        if (this.renderItem) {
          innerElement = this.renderItem(index, item, list, { ...this.context }, update);
        }
        if (innerElement === null) {
          innerElement = renderDefaultItem(item, context, update);
        }
        const el = innerElement;
        el.setAttribute("data-tree-node-id", item.id);
        el.dataset.treeNavigationTabIndex = "-1";
        el.setAttribute("aria-level", String(item.level + 1));
        el.setAttribute("aria-setsize", String(item.setsize));
        el.setAttribute("aria-posinset", String(item.posinset));
        el.style.paddingRight = "var(--si-sys-sizing-spacing-x-60)";
        this.updatePadding(el, item);
        this.dirtyItems.delete(item.id);
        return el;
      }
    };
  }
  setContext(id, context) {
    this.context = {
      ...this.context,
      [id]: context
    };
    this.contextChange.emit(this.context);
  }
  getModelItem(id) {
    if (!this.model || !Object.hasOwn(this.model, id)) {
      return void 0;
    }
    return this.model[id];
  }
  getContext(id) {
    if (!this.context) {
      return {
        isExpanded: false,
        isSelected: false,
        isDisabled: this.getModelItem(id)?.disabled
      };
    }
    if (!Object.hasOwn(this.context, id) || !this.context[id]) {
      Object.defineProperty(this.context, id, {
        value: {
          isExpanded: false,
          isSelected: false,
          isDisabled: this.getModelItem(id)?.disabled
        },
        writable: true,
        enumerable: true,
        configurable: true
      });
    }
    return this.context[id];
  }
  buildTreeList(root, level = 0) {
    const itemList = [];
    if (root?.hasChildren) {
      const newLevel = level + 1;
      root.children.forEach((id, index) => {
        const item = this.getModelItem(id);
        if (!item) {
          throw new TypeError(`Tree model has no item for child key "${id}"`);
        }
        const context = this.getContext(id);
        itemList.push({
          ...item,
          id,
          level,
          posinset: index + 1,
          setsize: root.children.length
        });
        if (item.hasChildren && context.isExpanded) {
          itemList.push(...this.buildTreeList(item, newLevel));
        }
      });
    }
    return itemList;
  }
  async focusItem(item, index, fromContainer = false) {
    this.updateNavigationTabIndex(item.id);
    let element = this.hostElement.querySelector(`[data-tree-node-id="${CSS.escape(item.id)}"]`);
    if (!element) {
      this.hostElement.scrollTop = index * 32;
      await this.refreshTree();
      element = this.hostElement.querySelector(`[data-tree-node-id="${CSS.escape(item.id)}"]`);
    }
    if (element) {
      await this.whenTreeItemReady(element);
      if (!fromContainer || this.hostElement.matches(":focus")) {
        element.focus();
      }
    }
  }
  async whenTreeItemReady(item) {
    await customElements.whenDefined("ix-tree-item");
    await item.componentOnReady?.();
  }
  onTreeKeyDown(event) {
    const path = event.composedPath();
    const focusedItem = path[0];
    const isItemFocused = focusedItem instanceof HTMLElement && focusedItem.tagName === "IX-TREE-ITEM";
    const row = path.find((node) => node instanceof HTMLElement && node.classList.contains("tree-node-container"));
    let itemElement;
    if (isItemFocused) {
      itemElement = focusedItem;
    } else if (row && focusedItem === row) {
      itemElement = row.getRootNode().host;
    } else {
      return;
    }
    const id = itemElement.dataset.treeNodeId;
    if (!id || !this.hostElement.contains(itemElement)) {
      return;
    }
    const list = this.buildTreeList(this.model[this.root]);
    const index = list.findIndex((item) => item.id === id);
    if (index < 0) {
      return;
    }
    const isDisabled = list[index].disabled || this.getContext(id).isDisabled;
    let targetIndex = -1;
    switch (event.key) {
      case "ArrowDown":
        targetIndex = index + 1 < list.length ? index + 1 : -1;
        break;
      case "ArrowUp":
        targetIndex = index - 1;
        break;
      case "Home":
        targetIndex = 0;
        break;
      case "End":
        targetIndex = list.length - 1;
        break;
      case "ArrowRight":
        if (list[index].hasChildren) {
          if (!this.getContext(id).isExpanded) {
            if (!isDisabled) {
              this.toggleNode(id);
            }
          } else {
            for (let i = index + 1; i < list.length; i++) {
              if (list[i].level <= list[index].level) {
                break;
              }
              if (list[i].level === list[index].level + 1) {
                targetIndex = i;
                break;
              }
            }
          }
        }
        break;
      case "ArrowLeft":
        if (list[index].hasChildren && this.getContext(id).isExpanded) {
          if (!isDisabled) {
            this.toggleNode(id);
          }
        } else {
          for (let i = index - 1; i >= 0; i--) {
            if (list[i].level < list[index].level) {
              targetIndex = i;
              break;
            }
          }
        }
        break;
      default:
        return;
    }
    event.preventDefault();
    event.stopPropagation();
    if (targetIndex >= 0) {
      void this.focusItem(list[targetIndex], targetIndex);
    }
  }
  toggleNode(id) {
    const context = this.getContext(id);
    context.isExpanded = !context.isExpanded;
    this.nodeToggled.emit({ id, isExpanded: context.isExpanded });
    this.setContext(id, context);
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
      this.refreshTree();
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
    this.hyperlist?.destroy();
    this.observer?.disconnect();
  }
  onModelChange() {
    if (this.hasFirstRender && !this.isListInitialized()) {
      this.initList();
    }
  }
  /**
   * Mark items as dirty.
   * This will force the list to re-render the items with the given ids.
   */
  async markItemsAsDirty(ids) {
    ids.forEach((id) => this.dirtyItems.add(id));
  }
  isListInitialized() {
    const itemPositions = this.hyperlist?._itemPositions;
    return itemPositions !== void 0 && itemPositions.length && !itemPositions?.some((item) => item === void 0 || Number.isNaN(item));
  }
  /**
   * Refresh the list.
   * This will re-render the list with the current model and context.
   */
  async refreshTree(options = defaultRefreshTreeOptions) {
    if (this.hyperlist) {
      const focusedItem = this.hostElement.querySelector("ix-tree-item:focus-within");
      const focusedControl = focusedItem?.shadowRoot?.activeElement;
      const focusedHost = focusedItem?.matches(":focus") && !focusedControl;
      const focusedId = focusedItem?.dataset.treeNodeId;
      this.hyperlist.refresh(this.hostElement, this.getVirtualizerOptions(options));
      if (focusedHost && focusedId) {
        const treeItem = this.hostElement.querySelector(`[data-tree-node-id="${CSS.escape(focusedId)}"]`);
        if (treeItem) {
          await this.whenTreeItemReady(treeItem);
          treeItem.focus();
        }
        return;
      }
      if (focusedId && focusedControl instanceof HTMLElement && focusedControl.matches(".icon-toggle, .tree-node-container")) {
        const treeItem = this.hostElement.querySelector(`[data-tree-node-id="${CSS.escape(focusedId)}"]`);
        if (treeItem && treeItem !== focusedItem) {
          await this.whenTreeItemReady(treeItem);
        }
        const selector = focusedControl.matches(".icon-toggle") ? ".icon-toggle" : ".tree-node-container";
        const control = treeItem?.shadowRoot?.querySelector(selector);
        (control ?? treeItem?.shadowRoot?.querySelector(".tree-node-container"))?.focus();
      }
    }
  }
  initList() {
    if (!this.model) {
      return;
    }
    this.hyperlist?.destroy();
    const config = this.getVirtualizerOptions(defaultRefreshTreeOptions);
    this.hyperlist = new VirtualList(this.hostElement, config);
  }
  getTreeNodeId(target) {
    let current = target;
    while (current && current !== this.hostElement) {
      const id = current.dataset.treeNodeId;
      if (id) {
        return id;
      }
      current = current.parentElement;
    }
    return void 0;
  }
  onToggle(event) {
    const { target } = event;
    event.preventDefault();
    event.stopPropagation();
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const id = this.getTreeNodeId(target);
    if (!id) {
      return;
    }
    const item = this.getModelItem(id);
    if (!item?.hasChildren) {
      return;
    }
    if (item.disabled) {
      return;
    }
    const context = this.getContext(id);
    if (context.isDisabled) {
      return;
    }
    this.toggleNode(id);
  }
  onTreeItemClick(event) {
    const { target } = event;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const id = this.getTreeNodeId(target);
    if (!id) {
      return;
    }
    const item = this.getModelItem(id);
    if (!item) {
      return;
    }
    const context = this.getContext(id);
    if (item.disabled || context.isDisabled) {
      return;
    }
    const path = event.composedPath();
    const treeIndex = path.indexOf(this.hostElement);
    const treePath = path.slice(0, treeIndex);
    const hasTrigger = dropdownController.pathIncludesTrigger(treePath);
    if (hasTrigger) {
      return;
    }
    if (!event.defaultPrevented) {
      for (const itemContext of Object.values(this.context)) {
        itemContext.isSelected = false;
      }
      context.isSelected = true;
      this.setContext(id, context);
    }
    if (this.toggleOnItemClick && item.hasChildren) {
      context.isExpanded = !context.isExpanded;
      this.nodeToggled.emit({
        id,
        isExpanded: context.isExpanded
      });
      this.setContext(id, context);
    }
    this.nodeClicked.emit(id);
  }
  render() {
    return h(Host, { key: "df29febcfdeeecbcda4a7a506ea3f2f833e56937", role: "tree", "aria-label": this.hostElement.getAttribute("aria-label") ?? "Tree", onClick: (event) => this.onTreeItemClick(event), onKeyDown: (event) => this.onTreeKeyDown(event), onFocusout: (event) => {
      if (event.relatedTarget instanceof Node && this.hostElement.contains(event.relatedTarget)) {
        return;
      }
      queueMicrotask(() => {
        if (!this.hostElement.matches(":focus-within")) {
          this.focusedItemId = void 0;
          this.updateNavigationTabStops(this.buildTreeList(this.model[this.root]));
        }
      });
    }, onFocusin: (event) => {
      const path = event.composedPath();
      const focusedItem = path[0];
      if (focusedItem === this.hostElement) {
        const list = this.buildTreeList(this.model[this.root]);
        const id2 = this.getNavigationId(list);
        const index = list.findIndex((item2) => item2.id === id2);
        if (index >= 0) {
          void this.focusItem(list[index], index, true);
        }
        return;
      }
      if (focusedItem instanceof HTMLElement && focusedItem.tagName === "IX-TREE-ITEM" && focusedItem.dataset.treeNodeId) {
        this.updateNavigationTabIndex(focusedItem.dataset.treeNodeId);
        return;
      }
      const row = path.find((node) => node instanceof HTMLElement && node.classList.contains("tree-node-container"));
      const item = row?.getRootNode();
      const id = item?.host?.dataset.treeNodeId;
      if (id && focusedItem === row) {
        this.updateNavigationTabIndex(id);
      }
    } }, h("slot", { key: "6b9d4e6625466b0790b2df88114c08a7b6c93f95" }));
  }
  static get watchers() {
    return {
      "model": [{
        "onModelChange": 0
      }]
    };
  }
};
Tree.style = treeCss();
export {
  Tree as ix_tree
};
