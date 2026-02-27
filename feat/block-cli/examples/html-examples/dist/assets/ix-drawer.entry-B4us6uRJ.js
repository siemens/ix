import { r as registerInstance, c as createEvent, h, H as Host } from "./global-DXu0UsM0.js";
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
    return h(Host, { key: "fad4ee8b6ae30a1b767c7a862b02f265a482103f", class: {
      "drawer-container": true,
      "display-none": true
    }, style: {
      width: "0",
      "max-width": `${this.maxWidth}rem`,
      height: this.fullHeight ? "100%" : "auto",
      overflow: "hidden"
    }, ref: (el) => this.divElement = el, "data-testid": "container", id: "div-container" }, h("div", { key: "fefc71d58e3ffcc49ab294609a7bde00566818d2", style: {
      width: this.width === "auto" ? "auto" : `${this.getConstrainedWidth(this.width)}rem`
    } }, h("div", { key: "e818dc8705cb99833ef6320c67a663cc9b4fc31f", class: "header" }, h("div", { key: "0aaef374de69a01fe22fdb6afe9aff64fff421b1", class: "header-content" }, h("slot", { key: "83b3f6a9453f6bbcba22bc856bbe014a7ea3118f", name: "header" })), h("ix-icon-button", { key: "6caba2335e271d2c6036468955d0824c8ad15257", class: "close-button", style: {
      display: this.showContent ? "block" : "none"
    }, icon: iconClose, iconColor: "color-soft-text", size: "24", variant: "tertiary", onClick: () => this.onCloseClicked(), "data-testid": "close-button", "aria-label": this.ariaLabelCloseButton })), h("div", { key: "2bdc410e254edd83f1817f3ff9cce63bee006295", class: "content", style: {
      display: this.showContent ? "block" : "none"
    } }, h("slot", { key: "25b17fe5eeeccaaa8543b602b991eb7622b6af0f" }))));
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
