import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.78f61b49.js";
import { b as iconChevronRightSmall, C as iconChevronLeftSmall } from "./index-CrTP-icT.451e0ae2.js";
const tabItemCss = '@charset "UTF-8";:host{position:relative;display:flex;align-items:center;justify-content:center;padding:10px 1.5rem;line-height:20px;font-size:14px;font-weight:bold;background-color:var(--theme-tab--background);color:var(--theme-tab--color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host::after{content:"";position:absolute;background-color:var(--theme-tab-indicator--background);width:100%;height:var(--theme-tab-indicator--height);left:0}:host .text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle}:host .text span,:host .text span::before{pointer-events:none}:host .circle{display:flex;justify-content:center;align-items:center;height:3rem;width:3rem;background-color:var(--theme-animated-tab-indicator--background);border-radius:50%;border:2px solid var(--theme-animated-tab-circle--border-color);color:var(--theme-an\u2026icon--color);cursor:pointer}:host .circle.selected:not(.disabled){background-color:var(--theme-animated-tab-circle--background--selected);color:var(--theme-animated-tab-icon--color--selected);border-color:var(--theme-animated-tab-circle--border-color--selected)}:host .circle.selected:not(.disabled):hover{background-color:var(--theme-animated-tab-circle--background--selected)}:host .circle:hover{background-color:var(--theme-animated-tab-circle--background--hover)}:host .circle:active{background-color:var(--theme-animated-tab-circle--background--active)}:host .circle:active{background-color:var(--theme-animated-tab-circle--background--active)}:host .circle.disabled{background-color:var(--theme-animated-tab-circle--background--disabled);border-color:var(--theme-animated-tab-circle--border-color--disabled)}:host .counter{position:absolute;z-index:1;height:16px;width:auto;background-color:var(--theme-pill-outline--background);border:1px solid var(--theme-tab-pill--border-color);border-radius:100px;bottom:6px;display:flex;justify-content:center;align-items:center;padding-left:0.25rem;padding-right:0.25rem;font-size:12px;line-height:14px;color:var(--theme-pill-outline--color);cursor:pointer}:host .counter.selected{border-color:var(--theme-tab-pill--border-color--selected)}:host .counter.disabled{border-color:var(--theme-tab-pill--border-color--disabled)}:host .hidden{display:none}:host(.circle){height:72px}:host(.top)::after{top:0}:host(.bottom)::after{bottom:0}:host(.stretched){flex-basis:100%;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(:hover:not(.circle)){background-color:var(--theme-tab--background--hover);color:var(--theme-tab-color-hover);cursor:pointer}:host(:hover:not(.circle))::after{background-color:var(--theme-tab-indicator--background--hover)}:host(:active:not(.circle)){background-color:var(--theme-tab--background--active);color:var(--theme-tab-color--active)}:host(:active:not(.circle))::after{background-color:var(--theme-tab-indicator--background--active)}:host(:focus-visible){outline:0px solid var(--focus--border-color)}:host(:focus-visible) .circle{outline:1px solid var(--focus--border-color)}:host(:focus-visible:not(.circle)){outline:1px solid var(--focus--border-color)}:host(.disabled){pointer-events:none;color:var(--theme-tab--color--disabled);background-color:var(--theme-tab--background--disabled)}:host(.disabled)::after{background-color:var(--theme-tab-indicator--background--disabled)}:host(.selected:not(.disabled)){background-color:var(--theme-tab--background--selected);color:var(--theme-tab--color--selected)}:host(.selected:not(.disabled))::after{background-color:var(--theme-tab-indicator--background--selected)}:host(.icon){padding:1.5rem 0.5rem}:host(.small-tab){height:32px;padding:1rem}:host(.small-tab.icon){padding:1rem 0.25rem}';
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
    return h(Host, { key: "cbdfbecd0c8d59f2929fc30e19c771dc17477e9f", class: this.tabItemClasses({
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
    } }, h("div", { key: "a791bae7e669185abc5d17f590337e06969ac91b", class: {
      circle: this.rounded,
      text: !this.rounded,
      selected: this.selected,
      disabled: this.disabled
    } }, h("slot", { key: "4f107c1be1047b45603026cb3bb5dd9fa44ec816" })), h("div", { key: "b0c60b8a83dbff18299be163d950f335e4806285", class: {
      counter: true,
      selected: this.selected,
      hidden: !(this.rounded && this.counter !== void 0),
      disabled: this.disabled
    } }, this.counter));
  }
};
TabItem.style = tabItemCss;
const requestAnimationFrameNoNgZone = (callback) => {
  if (typeof __zone_symbol__requestAnimationFrame === "function") {
    return __zone_symbol__requestAnimationFrame(callback);
  }
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame(callback);
  }
  return setTimeout(callback);
};
const tabsCss = ":host{width:auto;display:flex;align-items:center;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tab-items{overflow:hidden;scroll-behavior:smooth;width:100%}:host .tab-items .items-content{display:flex;align-items:center}:host .arrow{position:absolute;display:flex;align-items:center;justify-content:center;width:32px;height:32px;top:0;bottom:0;left:0;margin:auto 0;border-radius:4px;color:var(--theme-btn-invisible-primary--color);background-color:var(--theme-btn-invisible-primary--background);z-index:2}:host .arrow:hover{color:var(--theme-btn-invisible-primary--color--hover);background-color:var(--theme-btn-invisible-primary--background--hover)}:host .arrow:active{color:var(--theme-btn-invisible-primary--color--active);background-color:var(--theme-btn-invisible-primary--background--active)}:host .arrow.right{left:auto;right:0}:host .overflow-shadow{display:block;position:relative;height:100%;width:100%;pointer-events:all}:host .overflow-shadow.shadow-left{-webkit-mask-image:linear-gradient(90deg, transparent 0px, black 45px);mask-image:linear-gradient(90deg, transparent 0px, black 45px)}:host .overflow-shadow.shadow-right{-webkit-mask-image:linear-gradient(90deg, black calc(100% - 45px), transparent 100%);mask-image:linear-gradient(90deg, black calc(100% - 45px), transparent 100%)}:host .overflow-shadow.shadow-both{-webkit-mask-image:linear-gradient(90deg, transparent 0px, black 45px, black calc(100% - 45px), transparent 100%);mask-image:linear-gradient(90deg, transparent 0px, black 45px, black calc(100% - 45px), transparent 100%)}";
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
  initResizeObserver() {
    const parentElement = this.hostElement.parentElement;
    if (!parentElement)
      return;
    this.resizeObserver = new ResizeObserver(() => {
      this.renderArrows();
    });
    this.resizeObserver.observe(parentElement);
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
    var _a;
    if (!this.showArrows())
      return;
    const tabRect = this.getTab(newValue).getBoundingClientRect();
    const wrapperWidth = (_a = this.getTabsWrapper()) === null || _a === void 0 ? void 0 : _a.clientWidth;
    const arrowWidth = 32;
    if (tabRect.left < arrowWidth) {
      this.move(-tabRect.left + arrowWidth, true);
    } else if (wrapperWidth && tabRect.right > wrapperWidth - arrowWidth) {
      this.move(wrapperWidth - tabRect.right - arrowWidth, true);
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
    const tabs = this.getTabs();
    tabs.map((element, index) => {
      if (this.small)
        element.setAttribute("small", "true");
      if (this.rounded)
        element.setAttribute("rounded", "true");
      element.setAttribute("layout", this.layout);
      element.setAttribute("selected", index === this.selected ? "true" : "false");
      element.setAttribute("placement", this.placement);
    });
    this.initResizeObserver();
  }
  componentDidRender() {
    const tabs = this.getTabs();
    this.totalItems = tabs.length;
    tabs.map((element, index) => {
      element.setAttribute("selected", index === this.selected ? "true" : "false");
    });
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
  }
  disconnectedCallback() {
    var _a;
    (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
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
    return h(Host, { key: "d732d69d0c9fe6b8000b683821625cf0e0024974" }, this.showArrowPrevious && h("div", { key: "500a5a3d76313289e652fd8bdad50f56bde3d91f", class: "arrow", onClick: () => this.move(this.scrollAmount, true) }, h("ix-icon", { key: "6acadf35ee826b0814e1152b70f95ee81e6c23c8", name: iconChevronLeftSmall })), h("div", { key: "58288db2899bd9fc95ae0e97c70bc789e718a591", class: {
      "tab-items": true,
      "overflow-shadow": true,
      "shadow-left": this.showArrowPrevious,
      "shadow-right": this.showArrowNext,
      "shadow-both": this.showArrowNext && this.showArrowPrevious
    } }, h("div", { key: "08c98c34c63db36d8927c1edbe12083690faf86c", class: "items-content" }, h("slot", { key: "e15792a7cd6b6b2679fa46e7e3c1fb37eafdfec6" }))), this.showArrowNext && h("div", { key: "1c389a54121cc7453a18c7966ba3df6af51dd2da", class: "arrow right", onClick: () => this.move(-this.scrollAmount, true) }, h("ix-icon", { key: "9c604bfb38f9e31f3826ceb27d7ad4682e70c9b6", name: iconChevronRightSmall })));
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
