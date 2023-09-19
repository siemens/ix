import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.7d4aafcf.js";
const tabsCss = ":host{width:auto;display:flex;align-items:center;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tab-items{overflow:hidden;scroll-behavior:smooth;width:100%}:host .tab-items .items-content{display:flex;align-items:center}:host .arrow{position:absolute;display:flex;align-items:center;justify-content:center;width:32px;height:32px;top:0;bottom:0;left:0;margin:auto 0;border-radius:4px;color:var(--theme-btn-invisible-primary--color);background-color:var(--theme-btn-invisible-primary--background);z-index:2}:host .arrow:hover{color:var(--theme-btn-invisible-primary--color--hover);background-color:var(--theme-btn-invisible-primary--background--hover)}:host .arrow:active{color:var(--theme-btn-invisible-primary--color--active);background-color:var(--theme-btn-invisible-primary--background--active)}:host .arrow.right{left:auto;right:0}:host .overflow-shadow{display:block;position:relative;height:100%;width:100%;pointer-events:all}:host .overflow-shadow.shadow-left{-webkit-mask-image:linear-gradient(90deg, transparent 0px, black 45px);mask-image:linear-gradient(90deg, transparent 0px, black 45px)}:host .overflow-shadow.shadow-right{-webkit-mask-image:linear-gradient(90deg, black calc(100% - 45px), transparent 100%);mask-image:linear-gradient(90deg, black calc(100% - 45px), transparent 100%)}:host .overflow-shadow.shadow-both{-webkit-mask-image:linear-gradient(90deg, transparent 0px, black 45px, black calc(100% - 45px), transparent 100%);mask-image:linear-gradient(90deg, transparent 0px, black 45px, black calc(100% - 45px), transparent 100%)}";
let windowStartSize = window.innerWidth;
const Tabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectedChange = createEvent(this, "selectedChange", 7);
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
    this.styleNextArrow = {};
    this.stylePreviousArrow = {};
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
    return this.hostElement.shadowRoot.querySelector(".items-content");
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
      return this.showArrows() && this.scrollActionAmount > (tabWrapper.scrollWidth - tabWrapperRect.width) * -1;
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
    if (this.dragStop()) {
      return;
    }
    const { defaultPrevented } = this.selectedChange.emit(index);
    if (defaultPrevented) {
      return;
    }
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
  componentWillRender() {
    requestAnimationFrame(() => {
      const showNextArrow = this.showNextArrow();
      const previousArrow = this.showPreviousArrow();
      this.styleNextArrow = this.getArrowStyle(showNextArrow);
      this.stylePreviousArrow = this.getArrowStyle(previousArrow);
    });
  }
  componentDidLoad() {
    const tabs = this.getTabs();
    tabs.forEach((element) => {
      element.addEventListener("mousedown", (event) => this.dragStart(element, event));
    });
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
    return h(Host, null, h("div", { class: "arrow", style: this.stylePreviousArrow, onClick: () => this.move(this.scrollAmount, true) }, h("ix-icon", { name: "chevron-left-small" })), h("div", { class: {
      "tab-items": true,
      "overflow-shadow": true,
      "shadow-left": this.showPreviousArrow(),
      "shadow-right": this.showNextArrow(),
      "shadow-both": this.showNextArrow() && this.showPreviousArrow()
    } }, h("div", { class: "items-content" }, h("slot", null))), h("div", { class: "arrow right", style: this.styleNextArrow, onClick: () => this.move(-this.scrollAmount, true) }, h("ix-icon", { name: "chevron-right-small" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
Tabs.style = tabsCss;
export {
  Tabs as ix_tabs
};
