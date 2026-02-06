import { r as registerInstance, c as createEvent, h, H as Host } from "./global-wi9VneMU.js";
import { q as iconClose } from "./index-8HpPmDK_-DinFJk0z.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import { A as Animation } from "./animation-C5MWUgDN-BXCJNYHu.js";
const drawerCss = ":host{top:0;right:0;display:block;position:absolute;justify-content:flex-start;align-items:center;opacity:0;max-height:100vh;min-height:1.5rem;background-color:var(--theme-color-1);border-radius:0.25rem;box-shadow:var(--theme-box-shadow-level-3)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .drawer-container{z-index:100}:host .header{display:flex;position:relative;align-items:center;justify-content:flex-end;padding:0.5rem;width:100%;order:1}:host .header .header-content{flex-grow:1;margin-right:1rem}:host .content{position:relative;flex:1;order:2;height:100%;width:100%;overflow-y:auto}:host(.display-none){display:none}";
const Drawer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.open = createEvent(this, "open", 7);
    this.drawerClose = createEvent(this, "drawerClose", 7);
    this.show = false;
    this.closeOnClickOutside = true;
    this.fullHeight = false;
    this.minWidth = 16;
    this.maxWidth = 28;
    this.width = this.minWidth;
    this.toggle = false;
    this.callback = this.clickedOutside.bind(this);
    this.showContent = true;
  }
  onShowChanged(newValue, oldValue) {
    if (newValue === oldValue) {
      return;
    }
    this.toggleDrawer(newValue);
  }
  /**
   * Toggle or define show state of drawer
   * @param show Overwrite toggle state with boolean
   */
  async toggleDrawer(show) {
    show = show !== null && show !== void 0 ? show : !this.show;
    if (show) {
      const { defaultPrevented } = this.open.emit();
      if (defaultPrevented) {
        return;
      }
      this.show = true;
      if (!this.toggle && this.divElement) {
        this.slideInRight(this.divElement);
        setTimeout(() => {
          window.addEventListener("mousedown", this.callback);
        }, Animation.mediumTime);
      }
    } else {
      const { defaultPrevented } = this.drawerClose.emit();
      if (defaultPrevented) {
        return;
      }
      this.show = false;
      if (this.toggle && this.divElement) {
        this.slideOutRight(this.divElement);
      }
      window.removeEventListener("mousedown", this.callback);
    }
    this.toggle = this.show;
    return Promise.resolve();
  }
  onCloseClicked() {
    this.show = false;
  }
  clickedOutside(evt) {
    if (!this.closeOnClickOutside) {
      return;
    }
    const target = evt.target;
    const closestElement = target.closest("#div-container");
    const btn = target.closest("#drawer-btn");
    if (evt.target.type !== "button" && closestElement !== this.divElement && target !== btn) {
      this.show = false;
    }
  }
  getConstrainedWidth(width) {
    return Math.min(Math.max(width, this.minWidth), this.maxWidth);
  }
  slideOutRight(el) {
    const initialWidth = `${this.getConstrainedWidth(this.width === "auto" ? this.minWidth : this.width)}rem`;
    animate(el, {
      duration: Animation.mediumTime,
      width: [initialWidth, 0],
      opacity: [1, 0],
      easing: "easeInSine",
      onComplete: () => {
        el.classList.add("display-none");
      }
    });
  }
  slideInRight(el) {
    const targetWidth = `${this.getConstrainedWidth(this.width === "auto" ? this.minWidth : this.width)}rem`;
    animate(el, {
      duration: Animation.mediumTime,
      width: [0, targetWidth],
      opacity: [0, 1],
      easing: "easeOutSine",
      onBegin: () => {
        el.classList.remove("display-none");
      },
      onComplete: () => {
        this.showContent = true;
      }
    });
  }
  componentDidLoad() {
    this.toggleDrawer(this.show);
  }
  render() {
    return h(Host, { key: "97ae2273ad9c603d477907a07cba1e1477e9611d", class: {
      "drawer-container": true,
      "display-none": true
    }, style: {
      width: "0",
      "max-width": `${this.maxWidth}rem`,
      height: this.fullHeight ? "100%" : "auto",
      overflow: "hidden"
    }, ref: (el) => this.divElement = el, "data-testid": "container", id: "div-container" }, h("div", { key: "01ce6e66f3460299967c678cded87b96d6967445", style: {
      width: this.width === "auto" ? "auto" : `${this.getConstrainedWidth(this.width)}rem`
    } }, h("div", { key: "f4c040460d4917c8289b3746158696ed20c92d20", class: "header" }, h("div", { key: "0a05c91318f6c67c8a802b35970f321dbba55dbe", class: "header-content" }, h("slot", { key: "853415c470b8c34b70ef8e95be2fc44629f6eb62", name: "header" })), h("ix-icon-button", { key: "47cb76743364e504a287c218b62d8ff82f92276b", class: "close-button", style: {
      display: this.showContent ? "block" : "none"
    }, icon: iconClose, iconColor: "color-soft-text", size: "24", variant: "tertiary", onClick: () => this.onCloseClicked(), "data-testid": "close-button", "aria-label": this.ariaLabelCloseButton })), h("div", { key: "427f1fea6a16c11291998c40ecfe80599b0dcf75", class: "content", style: {
      display: this.showContent ? "block" : "none"
    } }, h("slot", { key: "b5471ae2a3a59ede24fcf6deeb323bd2ab6acf4a" }))));
  }
  static get watchers() {
    return {
      "show": ["onShowChanged"]
    };
  }
};
Drawer.style = drawerCss;
export {
  Drawer as ix_drawer
};
