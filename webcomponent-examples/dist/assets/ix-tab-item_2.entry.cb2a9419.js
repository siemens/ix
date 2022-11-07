import { r as registerInstance, h, H as Host, g as getElement } from "./index.b8b4baf0.js";
const tabItemCss = '@charset "UTF-8";ix-tab-item{position:relative;display:flex;align-items:center;justify-content:center;height:40px;padding:10px 1.5rem;line-height:20px;font-size:14px;font-weight:bold;background-color:var(--theme-tab--background);color:var(--theme-tab--color)}ix-tab-item.circle{height:72px}ix-tab-item.top::after{top:0}ix-tab-item.bottom::after{bottom:0}ix-tab-item::after{content:"";position:absolute;background-color:var(--theme-tab-indicator--background);width:100%;height:var(--theme-tab-indicator--height);left:0}ix-tab-item.stretched{flex-basis:100%;max-width:-moz-max-content;max-width:max-content;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}ix-tab-item .text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-flex;vertical-align:middle}ix-tab-item .text span,ix-tab-item .text span::before{pointer-events:none}ix-tab-item:hover:not(.circle){background-color:var(--theme-tab--background--hover);color:var(--theme-tab-color-hover);cursor:pointer}ix-tab-item:hover:not(.circle)::after{background-color:var(--theme-tab-indicator--background--hover)}ix-tab-item:active:not(.circle){background-color:var(--theme-tab--background--active);color:var(--theme-tab-color--active)}ix-tab-item:active:not(.circle)::after{background-color:var(--theme-tab-indicator--background--active)}ix-tab-item:focus-visible{outline:0px solid var(--focus--border-color)}ix-tab-item:focus-visible .circle{outline:1px solid var(--focus--border-color)}ix-tab-item:focus-visible:not(.circle){outline:1px solid var(--focus--border-color)}ix-tab-item.disabled{color:var(--theme-tab--color--disabled);background-color:var(--theme-tab--background--disabled)}ix-tab-item.disabled::after{background-color:var(--theme-tab-indicator--background--disabled)}ix-tab-item.selected:not(.disabled){background-color:var(--theme-tab--background--selected);color:var(--theme-tab--color--selected)}ix-tab-item.selected:not(.disabled)::after{background-color:var(--theme-tab-indicator--background--selected)}ix-tab-item.icon{padding:1.5rem 0.5rem}ix-tab-item.small-tab{height:32px;padding:1rem}ix-tab-item.small-tab.icon{padding:1rem 0.25rem}ix-tab-item .circle{display:flex;justify-content:center;align-items:center;height:48px;width:48px;background-color:var(--theme-animated-tab-indicator--background);border-radius:50%;border:2px solid var(--theme-animated-tab-circle--border-color);color:var(--theme-an\u2026icon--color);cursor:pointer}ix-tab-item .circle.selected:not(.disabled){background-color:var(--theme-animated-tab-circle--background--selected);color:var(--theme-animated-tab-icon--color--selected);border-color:var(--theme-animated-tab-circle--border-color--selected)}ix-tab-item .circle.selected:not(.disabled):hover{background-color:var(--theme-animated-tab-circle--background--selected)}ix-tab-item .circle:hover{background-color:var(--theme-animated-tab-circle--background--hover)}ix-tab-item .circle:active{background-color:var(--theme-animated-tab-circle--background--active)}ix-tab-item .circle:active{background-color:var(--theme-animated-tab-circle--background--active)}ix-tab-item .circle.disabled{background-color:var(--theme-animated-tab-circle--background--disabled);border-color:var(--theme-animated-tab-circle--border-color--disabled)}ix-tab-item .counter{position:absolute;z-index:1;height:16px;width:auto;background-color:var(--theme-pill-outline--background);border:1px solid var(--theme-tab-pill--border-color);border-radius:100px;bottom:6px;display:flex;justify-content:center;align-items:center;padding-left:0.25rem;padding-right:0.25rem;font-size:12px;line-height:16px;color:var(--theme-pill-outline--color);cursor:pointer}ix-tab-item .counter.selected{border-color:var(--theme-tab-pill--border-color--selected)}ix-tab-item .counter.disabled{border-color:var(--theme-tab-pill--border-color--disabled)}ix-tab-item .hidden{display:none}';
const TabItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return h(Host, { class: this.tabItemClasses({
      selected: this.selected,
      disabled: this.disabled,
      small: this.small,
      icon: this.icon,
      layout: this.layout,
      placement: this.placement,
      circle: this.rounded
    }), tabIndex: 0 }, h("div", { class: { circle: this.rounded, text: !this.rounded, selected: this.selected, disabled: this.disabled } }, h("slot", null)), h("div", { class: { counter: true, selected: this.selected, hidden: !(this.rounded && this.counter !== void 0), disabled: this.disabled } }, this.counter));
  }
};
TabItem.style = tabItemCss;
const tabsCss = "ix-tabs{width:auto;display:flex;align-items:center;position:relative}ix-tabs .tab-items{overflow:hidden;scroll-behavior:smooth}ix-tabs .tab-items .items-content{display:flex;align-items:center}ix-tabs .arrow{position:absolute;display:flex;align-items:center;justify-content:center;width:32px;height:32px;top:0;bottom:0;left:0;margin:auto 0;border-radius:4px;color:var(--theme-btn-invisible-primary--color);background-color:var(--theme-btn-invisible-primary--background);z-index:2}ix-tabs .arrow:hover{color:var(--theme-btn-invisible-primary--color--hover);background-color:var(--theme-btn-invisible-primary--background--hover)}ix-tabs .arrow:active{color:var(--theme-btn-invisible-primary--color--active);background-color:var(--theme-btn-invisible-primary--background--active)}ix-tabs .arrow.right{left:auto;right:0}ix-tabs .overflow-shadow{width:50px;height:40px;position:absolute;left:0;top:0;background:linear-gradient(90deg, var(--theme-color-1) 50%, transparent);z-index:1}ix-tabs .overflow-shadow.right{left:auto;right:0;background:linear-gradient(90deg, transparent, var(--theme-color-1) 50%)}";
let windowStartSize = window.innerWidth;
const Tabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.small = false;
    this.rounded = false;
    this.selected = 0;
    this.layout = "auto";
    this.placement = "bottom";
    this.totalItems = 0;
    this.currentScrollAmount = 0;
    this.scrollAmount = 100;
    this.scrollActionAmount = 0;
    this.clickAction = {
      timeout: null,
      isClick: true
    };
  }
  onWindowResize() {
    this.totalItems = 0;
    this.totalItems = this.getTabs().length;
    if (windowStartSize === 0)
      return windowStartSize = window.innerWidth;
    this.move(windowStartSize - window.innerWidth);
    windowStartSize = window.innerWidth;
  }
  getTabs() {
    return Array.from(this.hostElement.querySelectorAll("ix-tab-item"));
  }
  getTab(tabIndex) {
    return this.getTabs()[tabIndex];
  }
  getTabsWrapper() {
    return this.hostElement.getElementsByClassName("items-content")[0];
  }
  showArrows() {
    try {
      const tabWrapper = this.getTabsWrapper();
      return tabWrapper.scrollWidth > Math.ceil(tabWrapper.getBoundingClientRect().width) && this.layout === "auto";
    } catch (error) {
      return false;
    }
  }
  showPreviousArrow() {
    try {
      return this.showArrows() && this.scrollActionAmount < 0;
    } catch (error) {
      return false;
    }
  }
  showNextArrow() {
    try {
      const tabWrapper = this.getTabsWrapper();
      const tabWrapperRect = tabWrapper.getBoundingClientRect();
      return this.showArrows() && this.scrollActionAmount > (tabWrapper.scrollWidth - tabWrapperRect.width) * -1 && window.innerWidth <= tabWrapper.scrollWidth;
    } catch (error) {
      return false;
    }
  }
  getArrowStyle(condition) {
    return {
      opacity: condition ? "1" : "0",
      zIndex: condition ? "1" : "-1"
    };
  }
  move(amount, click = false) {
    const tabWrapper = this.getTabsWrapper();
    const maxScrollWidth = (tabWrapper.scrollWidth - tabWrapper.getBoundingClientRect().width) * -1;
    amount = this.currentScrollAmount + amount;
    amount = amount > 0 ? 0 : amount < maxScrollWidth ? maxScrollWidth : amount;
    const styles = [
      `transform: translateX(${amount}px);`,
      click ? `transition: all ease-in-out 400ms;` : ""
    ].join("");
    tabWrapper.setAttribute("style", styles);
    if (click)
      this.currentScrollAmount = this.scrollActionAmount = amount;
    else
      this.scrollActionAmount = amount;
  }
  moveTabToView(tabIndex) {
    if (!this.showArrows())
      return;
    const tab = this.getTab(tabIndex).getBoundingClientRect();
    const amount = tab.x * -1;
    this.move(amount, true);
  }
  setSelected(index) {
    this.selected = index;
  }
  clickTab(index) {
    if (this.dragStop())
      return;
    this.setSelected(index);
    this.moveTabToView(index);
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
    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", move, false);
      this.dragStop();
    });
    window.addEventListener("mousemove", move, false);
  }
  dragMove(event, tabX, mousedownX) {
    this.move(event.clientX + tabX - mousedownX);
  }
  dragStop() {
    clearTimeout(this.clickAction.timeout);
    this.clickAction.timeout = null;
    if (this.clickAction.isClick)
      return false;
    this.currentScrollAmount = this.scrollActionAmount;
    this.clickAction.isClick = true;
    return true;
  }
  componentDidRender() {
    const tabs = this.getTabs();
    this.totalItems = tabs.length;
    tabs.forEach((element, index) => {
      if (this.small)
        element.setAttribute("small", "true");
      if (this.rounded)
        element.setAttribute("rounded", "true");
      element.setAttribute("layout", this.layout);
      element.setAttribute("selected", index === this.selected ? "true" : "false");
      element.setAttribute("placement", this.placement);
    });
  }
  componentDidLoad() {
    const tabs = this.getTabs();
    tabs.forEach((element, index) => {
      const isDisabled = element.getAttribute("disabled") !== null;
      if (!isDisabled)
        element.addEventListener("click", () => this.clickTab(index));
      element.addEventListener("mousedown", (event) => this.dragStart(element, event));
    });
  }
  render() {
    return h(Host, null, h("div", { class: "overflow-shadow", style: this.getArrowStyle(this.showPreviousArrow()) }), h("div", { class: "arrow", style: this.getArrowStyle(this.showPreviousArrow()), onClick: () => this.move(this.scrollAmount, true) }, h("span", { class: "glyph glyph-chevron-left-small" })), h("div", { class: "tab-items" }, h("div", { class: "items-content" }, h("slot", null))), h("div", { class: "overflow-shadow right", style: this.getArrowStyle(this.showNextArrow()) }), h("div", { class: "arrow right", style: this.getArrowStyle(this.showNextArrow()), onClick: () => this.move(-this.scrollAmount, true) }, h("span", { class: "glyph glyph-chevron-right-small" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
Tabs.style = tabsCss;
export {
  TabItem as ix_tab_item,
  Tabs as ix_tabs
};
