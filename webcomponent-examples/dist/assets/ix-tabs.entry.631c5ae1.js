import { r as registerInstance, h, H as Host, g as getElement } from "./index.b1292ea0.js";
const tabsCss = "ix-tabs{width:auto;display:flex;align-items:center;position:relative}ix-tabs .tab-items{overflow:hidden;scroll-behavior:smooth}ix-tabs .tab-items .items-content{display:flex;align-items:center}ix-tabs .arrow{position:absolute;display:flex;align-items:center;justify-content:center;width:32px;height:32px;top:0;bottom:0;left:0;margin:auto 0;border-radius:4px;color:var(--theme-btn-invisible-primary--color);background-color:var(--theme-btn-invisible-primary--background);z-index:2}ix-tabs .arrow:hover{color:var(--theme-btn-invisible-primary--color--hover);background-color:var(--theme-btn-invisible-primary--background--hover)}ix-tabs .arrow:active{color:var(--theme-btn-invisible-primary--color--active);background-color:var(--theme-btn-invisible-primary--background--active)}ix-tabs .arrow.right{left:auto;right:0}ix-tabs .overflow-shadow{width:50px;height:40px;position:absolute;left:0;top:0;background:linear-gradient(90deg, var(--theme-color-1) 50%, transparent);z-index:1}ix-tabs .overflow-shadow.right{left:auto;right:0;background:linear-gradient(90deg, transparent, var(--theme-color-1) 50%)}";
let windowStartSize = window.innerWidth;
const Tabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickAction = {
      timeout: null,
      isClick: true
    };
    this.small = false;
    this.rounded = false;
    this.selected = 0;
    this.layout = "auto";
    this.placement = "bottom";
    this.totalItems = 0;
    this.currentScrollAmount = 0;
    this.scrollAmount = 100;
    this.scrollActionAmount = 0;
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
      click ? "transition: all ease-in-out 400ms;" : ""
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
  Tabs as ix_tabs
};
