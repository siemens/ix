import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const tabsCss = "ix-tabs{width:auto;display:flex;align-items:center;position:relative}ix-tabs .tab-items{overflow:hidden;scroll-behavior:smooth}ix-tabs .tab-items .items-content{display:flex;align-items:center}ix-tabs .arrow{position:absolute;display:flex;align-items:center;justify-content:center;width:32px;height:32px;top:0;bottom:0;left:0;margin:auto 0;border-radius:4px;color:var(--theme-btn-invisible-primary--color);background-color:var(--theme-btn-invisible-primary--background);z-index:2}ix-tabs .arrow:hover{color:var(--theme-btn-invisible-primary--color--hover);background-color:var(--theme-btn-invisible-primary--background--hover)}ix-tabs .arrow:active{color:var(--theme-btn-invisible-primary--color--active);background-color:var(--theme-btn-invisible-primary--background--active)}ix-tabs .arrow.right{left:auto;right:0}ix-tabs .overflow-shadow{width:50px;height:40px;position:absolute;left:0;top:0;background:linear-gradient(90deg, var(--theme-color-1) 50%, transparent);z-index:1}ix-tabs .overflow-shadow.right{left:auto;right:0;background:linear-gradient(90deg, transparent, var(--theme-color-1) 50%)}";

let windowStartSize = window.innerWidth;
const Tabs = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * Set tab items to small size
     */
    this.small = false;
    /**
     * Set rounded tabs
     */
    this.rounded = false;
    /**
     * Set default selected tab by index
     */
    this.selected = 0;
    /**
     * Set layout width style
     */
    this.layout = 'auto';
    /**
     * Set placement style
     */
    this.placement = 'bottom';
    this.totalItems = 0;
    this.currentScrollAmount = 0;
    this.scrollAmount = 100;
    this.scrollActionAmount = 0;
    this.clickAction = {
      timeout: null,
      isClick: true,
    };
  }
  onWindowResize() {
    this.totalItems = 0;
    this.totalItems = this.getTabs().length;
    if (windowStartSize === 0)
      return (windowStartSize = window.innerWidth);
    this.move(windowStartSize - window.innerWidth);
    windowStartSize = window.innerWidth;
  }
  getTabs() {
    return Array.from(this.hostElement.querySelectorAll('ix-tab-item'));
  }
  getTab(tabIndex) {
    return this.getTabs()[tabIndex];
  }
  getTabsWrapper() {
    return this.hostElement.getElementsByClassName('items-content')[0];
  }
  showArrows() {
    try {
      const tabWrapper = this.getTabsWrapper();
      return (tabWrapper.scrollWidth >
        Math.ceil(tabWrapper.getBoundingClientRect().width) &&
        this.layout === 'auto');
    }
    catch (error) {
      return false;
    }
  }
  showPreviousArrow() {
    try {
      return this.showArrows() && this.scrollActionAmount < 0;
    }
    catch (error) {
      return false;
    }
  }
  showNextArrow() {
    try {
      const tabWrapper = this.getTabsWrapper();
      const tabWrapperRect = tabWrapper.getBoundingClientRect();
      return (this.showArrows() &&
        this.scrollActionAmount >
          (tabWrapper.scrollWidth - tabWrapperRect.width) * -1 &&
        window.innerWidth <= tabWrapper.scrollWidth);
    }
    catch (error) {
      return false;
    }
  }
  getArrowStyle(condition) {
    return {
      opacity: condition ? '1' : '0',
      zIndex: condition ? '1' : '-1',
    };
  }
  move(amount, click = false) {
    const tabWrapper = this.getTabsWrapper();
    const maxScrollWidth = (tabWrapper.scrollWidth - tabWrapper.getBoundingClientRect().width) * -1;
    amount = this.currentScrollAmount + amount;
    amount = amount > 0 ? 0 : amount < maxScrollWidth ? maxScrollWidth : amount;
    const styles = [
      `transform: translateX(${amount}px);`,
      click ? `transition: all ease-in-out 400ms;` : '',
    ].join('');
    tabWrapper.setAttribute('style', styles);
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
      return; // ignore right click
    this.clickAction.timeout =
      this.clickAction.timeout === null
        ? setTimeout(() => (this.clickAction.isClick = false), 300)
        : null;
    const tabPositionX = parseFloat(window.getComputedStyle(element).left);
    const mousedownPositionX = event.clientX;
    const move = (event) => this.dragMove(event, tabPositionX, mousedownPositionX);
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', move, false);
      this.dragStop();
    });
    window.addEventListener('mousemove', move, false);
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
        element.setAttribute('small', 'true');
      if (this.rounded)
        element.setAttribute('rounded', 'true');
      element.setAttribute('layout', this.layout);
      element.setAttribute('selected', index === this.selected ? 'true' : 'false');
      element.setAttribute('placement', this.placement);
    });
  }
  componentDidLoad() {
    const tabs = this.getTabs();
    tabs.forEach((element, index) => {
      const isDisabled = element.getAttribute('disabled') !== null;
      if (!isDisabled)
        element.addEventListener('click', () => this.clickTab(index));
      element.addEventListener('mousedown', (event) => this.dragStart(element, event));
    });
  }
  render() {
    return (h(Host, null, h("div", { class: "overflow-shadow", style: this.getArrowStyle(this.showPreviousArrow()) }), h("div", { class: "arrow", style: this.getArrowStyle(this.showPreviousArrow()), onClick: () => this.move(this.scrollAmount, true) }, h("span", { class: "glyph glyph-chevron-left-small" })), h("div", { class: "tab-items" }, h("div", { class: "items-content" }, h("slot", null))), h("div", { class: "overflow-shadow right", style: this.getArrowStyle(this.showNextArrow()) }), h("div", { class: "arrow right", style: this.getArrowStyle(this.showNextArrow()), onClick: () => this.move(-this.scrollAmount, true) }, h("span", { class: "glyph glyph-chevron-right-small" }))));
  }
  get hostElement() { return this; }
  static get style() { return tabsCss; }
}, [4, "ix-tabs", {
    "small": [4],
    "rounded": [4],
    "selected": [1026],
    "layout": [1],
    "placement": [1],
    "totalItems": [32],
    "currentScrollAmount": [32],
    "scrollAmount": [32],
    "scrollActionAmount": [32]
  }, [[9, "resize", "onWindowResize"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-tabs"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-tabs":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tabs);
      }
      break;
  } });
}

export { Tabs as T, defineCustomElement as d };
