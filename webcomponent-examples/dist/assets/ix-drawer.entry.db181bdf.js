import { r as registerInstance, c as createEvent, h, H as Host } from "./global.8b5b8f81.js";
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
    return h(Host, { key: "48546d54d8c859e184c75935f0729826247e36d5", class: {
      "drawer-container": true,
      toggle: this.show,
      "full-height": this.fullHeight,
      "d-none": true
    }, style: {
      width: this.width === "auto" ? this.width : `${this.width}rem`,
      "min-width": `${this.minWidth}rem`,
      "max-width": `${this.maxWidth}rem`
    }, ref: (el) => this.divElement = el, "data-testid": "container", id: "div-container" }, h("div", { key: "a574087e718559ca1562a41617c457f24dd9fd33", class: "header" }, h("div", { key: "126ab85b1452d7338043cc5457db98b047185d1a", class: "header-content" }, h("slot", { key: "0f62e3434f942f72c268359aacdf11a881553104", name: "header" })), h("ix-icon-button", { key: "42c763a72136811a6e0c5999cd0b7689ef7c9035", class: "close-button", icon: "close", size: "24", ghost: true, onClick: () => this.onCloseClicked(), "data-testid": "close-button" })), h("div", { key: "f7e7536dde130c707bf7584a64fae3002ddf3035", class: "content" }, h("slot", { key: "50c5e7afd95802fb9ceb537b788b826a888254df" })));
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
