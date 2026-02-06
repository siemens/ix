import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-wi9VneMU.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { w as iconChevronRightSmall, D as iconChevronLeftSmall } from "./index-8HpPmDK_-DinFJk0z.js";
const tabItemCss = '@charset "UTF-8";:host{position:relative;display:flex;align-items:center;justify-content:center;padding:10px 1.5rem;line-height:20px;font-size:14px;font-weight:bold;background-color:var(--theme-tab--background);color:var(--theme-tab--color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host::after{content:"";position:absolute;background-color:var(--theme-tab-indicator--background);width:100%;height:var(--theme-tab-indicator--height);left:0}:host .text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .text span,:host .text span::before{pointer-events:none}:host .text{vertical-align:middle}:host .circle{display:flex;justify-content:center;align-items:center;height:3rem;width:3rem;background-color:var(--theme-animated-tab-indicator--background);border-radius:50%;border:2px solid var(--theme-animated-tab-circle--border-color);color:var(--theme-an…icon--color);cursor:pointer}:host .circle.selected:not(.disabled){background-color:var(--theme-animated-tab-circle--background--selected);color:var(--theme-animated-tab-icon--color--selected);border-color:var(--theme-animated-tab-circle--border-color--selected)}:host .circle.selected:not(.disabled):hover{background-color:var(--theme-animated-tab-circle--background--selected)}:host .circle:hover{background-color:var(--theme-animated-tab-circle--background--hover)}:host .circle:active{background-color:var(--theme-animated-tab-circle--background--active)}:host .circle:active{background-color:var(--theme-animated-tab-circle--background--active)}:host .circle.disabled{background-color:var(--theme-animated-tab-circle--background--disabled);border-color:var(--theme-animated-tab-circle--border-color--disabled)}:host .counter{position:absolute;z-index:1;height:16px;width:auto;background-color:var(--theme-color-1);border:1px solid var(--theme-tab-pill--border-color);border-radius:100px;bottom:6px;display:flex;justify-content:center;align-items:center;padding-left:0.25rem;padding-right:0.25rem;font-size:12px;line-height:14px;color:var(--theme-pill-outline--color);cursor:pointer}:host .counter.selected{border-color:var(--theme-tab-pill--border-color--selected)}:host .counter.disabled{border-color:var(--theme-tab-pill--border-color--disabled)}:host .hidden{display:none}:host(.circle){height:72px}:host(.top)::after{top:0}:host(.bottom)::after{bottom:0}:host(.stretched){flex-basis:100%;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(:hover:not(.circle)){background-color:var(--theme-tab--background--hover);color:var(--theme-tab-color-hover);cursor:pointer}:host(:hover:not(.circle))::after{background-color:var(--theme-tab-indicator--background--hover)}:host(:active:not(.circle)){background-color:var(--theme-tab--background--active);color:var(--theme-tab-color--active)}:host(:active:not(.circle))::after{background-color:var(--theme-tab-indicator--background--active)}:host(:focus-visible){outline:0px solid var(--focus--border-color)}:host(:focus-visible) .circle{outline:1px solid var(--focus--border-color)}:host(:focus-visible:not(.circle)){outline:1px solid var(--focus--border-color)}:host(.disabled){pointer-events:none;color:var(--theme-tab--color--disabled);background-color:var(--theme-tab--background--disabled)}:host(.disabled)::after{background-color:var(--theme-tab-indicator--background--disabled)}:host(.selected:not(.disabled)){background-color:var(--theme-tab--background--selected);color:var(--theme-tab--color--selected)}:host(.selected:not(.disabled))::after{background-color:var(--theme-tab-indicator--background--selected)}:host(.icon){padding:1.5rem 0.5rem}:host(.small-tab){height:32px;padding:1rem}:host(.small-tab.icon){padding:1rem 0.25rem}';
const TabItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tabClick = createEvent(this, "tabClick", 7);
    this.selected = false;
    this.disabled = false;
    this.small = false;
    this.icon = false;
    this.rounded = false;
    this.layout = "auto";
    this.placement = "bottom";
  }
  tabItemClasses(props) {
    return {
      selected: props.selected,
      disabled: props.disabled,
      "small-tab": props.small,
      icon: props.small,
      stretched: props.layout === "stretched",
      bottom: props.placement === "bottom",
      top: props.placement === "top",
      circle: props.circle
    };
  }
  render() {
    return h(Host, { key: "76291fb4d50d4211142ebf81020a8a4b72158cab", role: "tab", class: this.tabItemClasses({
      selected: this.selected,
      disabled: this.disabled,
      small: this.small,
      icon: this.icon,
      layout: this.layout,
      placement: this.placement,
      circle: this.rounded
    }), tabIndex: 0, onClick: (event) => {
      if (event.defaultPrevented)
        return;
      const clientEvent = this.tabClick.emit({
        nativeEvent: event
      });
      if (clientEvent.defaultPrevented) {
        event.stopPropagation();
      }
    } }, h("div", { key: "63e97494bdbd9ba198ffd360635950fdca74329a", class: {
      circle: this.rounded,
      text: !this.rounded,
      selected: this.selected,
      disabled: this.disabled
    } }, h("slot", { key: "9434105c3649ce51f6a9dd5a479dfdaa574ae5cd" })), h("div", { key: "bcb74b5a1236722e42ba8507790b2bd156ffce92", class: {
      counter: true,
      selected: this.selected,
      hidden: !(this.rounded && this.counter !== void 0),
      disabled: this.disabled
    } }, this.counter));
  }
};
TabItem.style = tabItemCss;
const tabsCss = ":host{width:auto;display:flex;align-items:center;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tab-items{overflow:hidden;scroll-behavior:smooth;width:100%}:host .tab-items .items-content{display:flex;align-items:center}:host .arrow{all:unset;position:absolute;display:flex;align-items:center;justify-content:center;width:32px;height:32px;top:0;bottom:0;left:0;margin:auto 0;border-radius:4px;color:var(--theme-btn-tertiary--color);background-color:var(--theme-btn-tertiary--background);z-index:2}:host .arrow:hover{color:var(--theme-btn-tertiary--color--hover);background-color:var(--theme-btn-tertiary--background--hover)}:host .arrow:active{color:var(--theme-btn-tertiary--color--active);background-color:var(--theme-btn-tertiary--background--active)}:host .arrow.right{left:auto;right:0}:host .overflow-shadow{display:block;position:relative;height:100%;width:100%;pointer-events:all}:host .overflow-shadow.shadow-left{-webkit-mask-image:linear-gradient(90deg, transparent 0px, black 45px);mask-image:linear-gradient(90deg, transparent 0px, black 45px)}:host .overflow-shadow.shadow-right{-webkit-mask-image:linear-gradient(90deg, black calc(100% - 45px), transparent 100%);mask-image:linear-gradient(90deg, black calc(100% - 45px), transparent 100%)}:host .overflow-shadow.shadow-both{-webkit-mask-image:linear-gradient(90deg, transparent 0px, black 45px, black calc(100% - 45px), transparent 100%);mask-image:linear-gradient(90deg, transparent 0px, black 45px, black calc(100% - 45px), transparent 100%)}";
const TAB_MANAGED_CLASSES = {
  SELECTED: "selected",
  DISABLED: "disabled",
  SMALL_TAB: "small-tab",
  ICON: "icon",
  STRETCHED: "stretched",
  BOTTOM: "bottom",
  TOP: "top",
  CIRCLE: "circle",
  HYDRATED: "hydrated"
};
const MANAGED_CLASSES_SET = new Set(Object.values(TAB_MANAGED_CLASSES));
const Tabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectedChange = createEvent(this, "selectedChange", 7);
    this.small = false;
    this.rounded = false;
    this.selected = 0;
    this.layout = "auto";
    this.placement = "bottom";
    this.totalItems = 0;
    this.currentScrollAmount = 0;
    this.scrollAmount = 100;
    this.scrollActionAmount = 0;
    this.showArrowPrevious = false;
    this.showArrowNext = false;
    this.windowStartSize = window.innerWidth;
    this.ARROW_WIDTH = 32;
    this.updateScheduled = false;
    this.clickAction = {
      timeout: null,
      isClick: true
    };
  }
  onWindowResize() {
    this.totalItems = 0;
    this.totalItems = this.getTabs().length;
    if (this.windowStartSize === 0)
      return this.windowStartSize = window.innerWidth;
    this.move(this.windowStartSize - window.innerWidth);
    this.windowStartSize = window.innerWidth;
  }
  getTabs() {
    return Array.from(this.hostElement.querySelectorAll("ix-tab-item"));
  }
  getTab(tabIndex) {
    return this.getTabs()[tabIndex];
  }
  getTabsWrapper() {
    var _a;
    return (_a = this.hostElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".items-content");
  }
  getTabsContainer() {
    var _a;
    return (_a = this.hostElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".tab-items");
  }
  initResizeObserver() {
    const parentElement = this.hostElement.parentElement;
    if (!parentElement)
      return;
    this.resizeObserver = new ResizeObserver(() => {
      this.renderArrows();
    });
    this.resizeObserver.observe(parentElement);
  }
  observeSlotChanges() {
    var _a;
    (_a = this.classObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.classObserver = new MutationObserver(() => {
      this.scheduleTabUpdate();
    });
    this.classObserver.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"]
    });
  }
  scheduleTabUpdate() {
    if (this.updateScheduled)
      return;
    this.updateScheduled = true;
    requestAnimationFrame(() => {
      this.updateTabAttributes();
      this.updateScheduled = false;
    });
  }
  setTabAttributes(element, index) {
    const isSelected = index === this.selected;
    const isDisabled = element.disabled;
    if (this.small)
      element.setAttribute("small", "true");
    if (this.rounded)
      element.setAttribute("rounded", "true");
    element.setAttribute("layout", this.layout);
    element.setAttribute("selected", isSelected.toString());
    element.setAttribute("placement", this.placement);
    element.toggleAttribute("disabled", isDisabled);
    this.applyRequiredClasses(element, isSelected, isDisabled);
  }
  applyRequiredClasses(element, isSelected, isDisabled) {
    const requiredClasses = new Set(this.buildRequiredClasses(isSelected, isDisabled));
    const { classList } = element;
    for (const cls of requiredClasses) {
      classList.add(cls);
    }
    for (const managedClass of MANAGED_CLASSES_SET) {
      if (!requiredClasses.has(managedClass)) {
        classList.remove(managedClass);
      }
    }
  }
  buildRequiredClasses(isSelected, isDisabled) {
    const classConditions = {
      [TAB_MANAGED_CLASSES.HYDRATED]: true,
      [TAB_MANAGED_CLASSES.SELECTED]: isSelected,
      [TAB_MANAGED_CLASSES.DISABLED]: isDisabled,
      [TAB_MANAGED_CLASSES.SMALL_TAB]: this.small,
      [TAB_MANAGED_CLASSES.STRETCHED]: this.layout === "stretched",
      [TAB_MANAGED_CLASSES.BOTTOM]: this.placement === "bottom",
      [TAB_MANAGED_CLASSES.TOP]: this.placement === "top",
      [TAB_MANAGED_CLASSES.CIRCLE]: this.rounded
    };
    return Object.entries(classConditions).filter(([, condition]) => condition).map(([className]) => className);
  }
  ensureSelectedIndex() {
    if (this.totalItems === 0) {
      console.warn("ix-tabs: No tabs available for selection");
      this.selected = -1;
      return;
    }
    if (this.selected < this.totalItems) {
      return;
    }
    const originalIndex = this.selected;
    const previousIndex = originalIndex - 1;
    if (previousIndex >= 0 && previousIndex < this.totalItems) {
      this.updateSelected(previousIndex);
      return;
    }
    if (this.totalItems > 0) {
      this.updateSelected(0);
    }
  }
  updateSelected(index) {
    this.selected = index;
    this.selectedChange.emit(index);
  }
  updateTabAttributes() {
    const tabs = this.getTabs();
    this.totalItems = tabs.length;
    this.ensureSelectedIndex();
    for (const [index, element] of tabs.entries()) {
      this.setTabAttributes(element, index);
    }
    this.renderArrows();
  }
  showArrows() {
    try {
      const tabWrapper = this.getTabsWrapper();
      return tabWrapper && tabWrapper.scrollWidth > Math.ceil(tabWrapper.getBoundingClientRect().width) && this.layout === "auto";
    } catch (error) {
      return false;
    }
  }
  showPreviousArrow() {
    try {
      return this.showArrows() === true && this.scrollActionAmount < 0;
    } catch (error) {
      return false;
    }
  }
  showNextArrow() {
    try {
      const tabWrapper = this.getTabsWrapper();
      if (!tabWrapper) {
        return false;
      }
      const tabWrapperRect = tabWrapper.getBoundingClientRect();
      return this.showArrows() === true && this.scrollActionAmount > (tabWrapper.scrollWidth - tabWrapperRect.width) * -1;
    } catch (error) {
      return false;
    }
  }
  move(amount, click = false) {
    const tabsWrapper = this.getTabsWrapper();
    if (!tabsWrapper) {
      return;
    }
    const tabsWrapperVisibleWidth = tabsWrapper.getBoundingClientRect().width;
    const maxScrollWidth = -this.currentScrollAmount + tabsWrapperVisibleWidth - tabsWrapper.scrollWidth;
    amount = amount < maxScrollWidth ? maxScrollWidth : amount;
    amount += this.currentScrollAmount;
    amount = Math.min(amount, 0);
    const styles = [
      `transform: translateX(${amount}px);`,
      click ? "transition: all ease-in-out 400ms;" : ""
    ].join("");
    tabsWrapper.setAttribute("style", styles);
    if (click)
      this.currentScrollAmount = this.scrollActionAmount = amount;
    else
      this.scrollActionAmount = amount;
  }
  onSelectedChange(newValue) {
    if (!this.showArrows())
      return;
    const tab = this.getTab(newValue);
    const container = this.getTabsContainer();
    if (!tab || !container)
      return;
    const containerRect = container.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const tabLeftRelative = tabRect.left - containerRect.left;
    const tabRightRelative = tabLeftRelative + tabRect.width;
    if (tabLeftRelative < this.ARROW_WIDTH) {
      this.move(-tabLeftRelative + this.ARROW_WIDTH, true);
    } else if (tabRightRelative > containerRect.width - this.ARROW_WIDTH) {
      this.move(containerRect.width - tabRightRelative - this.ARROW_WIDTH, true);
    }
  }
  setSelected(index) {
    this.selected = index;
  }
  clickTab(index) {
    if (!this.clickAction.isClick || this.dragStop()) {
      return;
    }
    const { defaultPrevented } = this.selectedChange.emit(index);
    if (defaultPrevented) {
      return;
    }
    this.setSelected(index);
  }
  dragStart(element, event) {
    if (!this.showArrows())
      return;
    if (event.button > 0)
      return;
    this.clickAction.timeout = this.clickAction.timeout === null ? setTimeout(() => this.clickAction.isClick = false, 300) : null;
    const tabPositionX = parseFloat(window.getComputedStyle(element).left);
    const mousedownPositionX = event.clientX;
    const move = (event2) => this.dragMove(event2, tabPositionX, mousedownPositionX);
    const windowClick = () => {
      window.removeEventListener("mousemove", move, false);
      window.removeEventListener("click", windowClick, false);
      this.dragStop();
    };
    window.addEventListener("click", windowClick);
    window.addEventListener("mousemove", move, false);
  }
  dragMove(event, tabX, mousedownX) {
    this.move(event.clientX + tabX - mousedownX);
  }
  dragStop() {
    if (this.clickAction.timeout) {
      clearTimeout(this.clickAction.timeout);
      this.clickAction.timeout = null;
    }
    if (this.clickAction.isClick)
      return false;
    this.currentScrollAmount = this.scrollActionAmount;
    this.clickAction.isClick = true;
    return true;
  }
  componentWillLoad() {
    this.initResizeObserver();
  }
  componentDidRender() {
    this.updateTabAttributes();
  }
  componentWillRender() {
    this.renderArrows();
  }
  renderArrows() {
    requestAnimationFrameNoNgZone(() => {
      this.showArrowNext = this.showNextArrow();
      this.showArrowPrevious = this.showPreviousArrow();
    });
  }
  componentDidLoad() {
    const tabs = this.getTabs();
    tabs.forEach((element) => {
      element.addEventListener("mousedown", (event) => this.dragStart(element, event));
    });
    this.observeSlotChanges();
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    (_b = this.classObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
  }
  onTabClick(event) {
    if (event.defaultPrevented) {
      return;
    }
    const target = event.target;
    const tabs = this.getTabs();
    tabs.forEach((tab, index) => {
      if (!tab.disabled && tab === target) {
        this.clickTab(index);
      }
    });
  }
  render() {
    return h(Host, { key: "cd9c0abde67098d1160f58db0ba3d7489c03bc39", role: "tablist" }, this.showArrowPrevious && h("button", { key: "07f6bc666ca0cd04efa245e756d39f9ec6a2caa1", class: "arrow", onClick: () => this.move(this.scrollAmount, true), "aria-label": this.ariaLabelChevronLeftIconButton }, h("ix-icon", { key: "dcecc49ffd003b2fe68f4e80e69624fa79a9256e", name: iconChevronLeftSmall })), h("div", { key: "c43067174923fd4a5e08349cd58f3e178f2670cd", class: {
      "tab-items": true,
      "overflow-shadow": true,
      "shadow-left": this.showArrowPrevious,
      "shadow-right": this.showArrowNext,
      "shadow-both": this.showArrowNext && this.showArrowPrevious
    } }, h("div", { key: "564f3fad2228cdf8e067c9ed851dd7e2e0806284", class: "items-content" }, h("slot", { key: "945f62bc34440817f38d3d7798510e07e51b4728" }))), this.showArrowNext && h("button", { key: "dbc151993942876394f8ae2d2e7201f80a0766ef", class: "arrow right", onClick: () => this.move(-this.scrollAmount, true), "aria-label": this.ariaLabelChevronRightIconButton }, h("ix-icon", { key: "518cdb4f31784285693c4db2666f0c2b43233d84", name: iconChevronRightSmall })));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "selected": ["onSelectedChange"]
    };
  }
};
Tabs.style = tabsCss;
export {
  TabItem as ix_tab_item,
  Tabs as ix_tabs
};
