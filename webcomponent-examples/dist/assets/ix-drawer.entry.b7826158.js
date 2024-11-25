import { r as registerInstance, c as createEvent, h, H as Host } from "./global.2bfd6008.js";
import { a as anime } from "./anime.es-a5520566.eae0a8f1.js";
const drawerCss = ":host{top:0;right:0;box-shadow:var(--theme-box-shadow-level-3);visibility:hidden;display:flex;position:absolute;flex-flow:column nowrap;justify-content:flex-start;align-items:center;max-height:100vh;min-height:1.5rem;background-color:var(--theme-color-1);border-radius:0.25rem;transition:all var(--theme-medium-time) ease-out}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .toggle{z-index:100;visibility:visible}:host .header{display:flex;position:relative;align-items:center;justify-content:flex-end;padding:0.5rem;width:100%;order:1}:host .header .header-content{flex-grow:1;margin-right:1rem}:host .content{position:relative;flex:1;flex-grow:1;order:2;height:100%;width:100%;overflow-y:auto}:host(.toggle){visibility:visible}";
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
    if (el) {
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
  }
  slideInRight(el) {
    if (el) {
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
  }
  componentDidLoad() {
    this.onShowChanged(this.show);
  }
  render() {
    return h(Host, { key: "fb5465b724d808ef07aac6c46aa7453ce794dc24", class: {
      "drawer-container": true,
      toggle: this.show,
      "d-none": true
    }, style: {
      width: this.width === "auto" ? this.width : `${this.width}rem`,
      "min-width": `${this.minWidth}rem`,
      "max-width": `${this.maxWidth}rem`,
      height: this.fullHeight ? "100%" : "auto"
    }, ref: (el) => this.divElement = el, "data-testid": "container", id: "div-container" }, h("div", { key: "f43cd8663f7d04d06c30ad2f94f5099e3b863489", class: "header" }, h("div", { key: "0ebb196ddc6e9bb1eb00f5f7acfedf61ce5f39dd", class: "header-content" }, h("slot", { key: "16b8c5eb76f9275ff516b21c3469fa560eba866d", name: "header" })), h("ix-icon-button", { key: "7991db337a8fe5eb9808f4fef9d93a94e28b53c2", class: "close-button", icon: "close", size: "24", ghost: true, onClick: () => this.onCloseClicked(), "data-testid": "close-button" })), h("div", { key: "60036ad51052c0ea0133f414857b3a329908fb98", class: "content" }, h("slot", { key: "965739949ca38d15004d1ff7538231c94feeab15" })));
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
