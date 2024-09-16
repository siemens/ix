import { r as registerInstance, c as createEvent, h, H as Host } from "./global.00f6d77e.js";
import { a as anime } from "./anime.es-a5520566.eae0a8f1.js";
const drawerCss = ":host{top:0;right:0;box-shadow:var(--theme-box-shadow-level-3);visibility:hidden;display:flex;position:absolute;flex-flow:column nowrap;justify-content:flex-start;align-items:center;max-height:100vh;min-height:1.5rem;background-color:var(--theme-color-1);border-radius:0.25rem;transition:all var(--theme-medium-time) ease-out}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .toggle{z-index:100;visibility:visible}:host .drawer-container.full-height{min-height:100%}:host .header{display:flex;position:relative;align-items:center;justify-content:flex-end;padding:0.5rem;width:100%;order:1}:host .header .header-content{flex-grow:1;margin-right:1rem}:host .content{position:relative;flex:1;flex-grow:1;order:2;height:100%;width:100%;overflow-y:auto}:host(.toggle){visibility:visible}";
const IxDrawerStyle0 = drawerCss;
const Drawer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.open = createEvent(this, "open", 7);
    this.drawerClose = createEvent(this, "drawerClose", 7);
    this.callback = this.clickedOutside.bind(this);
    this.show = false;
    this.closeOnClickOutside = true;
    this.fullHeight = false;
    this.minWidth = 16;
    this.maxWidth = 28;
    this.width = this.minWidth;
  }
  onShowChanged(newValue) {
    this.show = newValue !== void 0 ? newValue : !this.show;
    this.toggleDrawer(this.show);
  }
  async toggleDrawer(show) {
    this.show = show !== void 0 ? show : !this.show;
    if (show) {
      this.open.emit();
      this.slideInRight(this.divElement);
      setTimeout(() => {
        window.addEventListener("mousedown", this.callback);
      }, 300);
    } else {
      this.drawerClose.emit();
      this.slideOutRight(this.divElement);
      window.removeEventListener("mousedown", this.callback);
    }
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
  slideOutRight(el) {
    anime({
      targets: el,
      duration: Drawer.duration,
      translateX: [0, "16rem"],
      opacity: [1, 0],
      easing: "easeInSine",
      complete: () => {
        el.classList.add("d-none");
      }
    });
  }
  slideInRight(el) {
    anime({
      targets: el,
      duration: Drawer.duration,
      translateX: ["16rem", 0],
      opacity: [0, 1],
      easing: "easeOutSine",
      begin: () => {
        el.classList.remove("d-none");
      }
    });
  }
  componentDidLoad() {
    this.onShowChanged(this.show);
  }
  render() {
    return h(Host, { key: "2a08d35b883881d7ce4fac52754f5ba6a6d87b67", class: {
      "drawer-container": true,
      toggle: this.show,
      "full-height": this.fullHeight,
      "d-none": true
    }, style: {
      width: this.width === "auto" ? this.width : `${this.width}rem`,
      "min-width": `${this.minWidth}rem`,
      "max-width": `${this.maxWidth}rem`
    }, ref: (el) => this.divElement = el, "data-testid": "container", id: "div-container" }, h("div", { key: "516fb16c8d2a99d29e158193b6e69f62e6805d7a", class: "header" }, h("div", { key: "24f3e13377044cc7b72fa3b0e01163afbf2b8bbd", class: "header-content" }, h("slot", { key: "a0b4aeb829de7152941816142193ca23f15475f4", name: "header" })), h("ix-icon-button", { key: "3781d1a2bad00dd5c43b7514de103bfe9662e929", class: "close-button", icon: "close", size: "24", ghost: true, onClick: () => this.onCloseClicked(), "data-testid": "close-button" })), h("div", { key: "9e19c76af291d53298aad23a7e113ec76b84f5a5", class: "content" }, h("slot", { key: "3b12eafb18a7fd75614a40c3f1e611e1556f4acd" })));
  }
  static get watchers() {
    return {
      "show": ["onShowChanged"]
    };
  }
};
Drawer.duration = 300;
Drawer.style = IxDrawerStyle0;
export {
  Drawer as ix_drawer
};
