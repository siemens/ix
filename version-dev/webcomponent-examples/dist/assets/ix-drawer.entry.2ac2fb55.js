import { r as registerInstance, c as createEvent, h, H as Host } from "./index.18e27e15.js";
import { a as anime } from "./anime.es-185e9087.87a18bcc.js";
const drawerCss = ":host{top:0;right:0;box-shadow:var(--theme-box-shadow-level-3);visibility:hidden;display:flex;position:absolute;flex-flow:column nowrap;justify-content:flex-start;align-items:center;max-height:100vh;min-height:1.5rem;background-color:var(--theme-color-1);border-radius:0.25rem;transition:all 300ms ease-out}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .toggle{z-index:100;visibility:visible}:host .drawer-container.full-height{min-height:100%}:host .header{display:flex;position:relative;align-items:center;justify-content:flex-end;padding:0.5rem;width:100%;order:1}:host .header .header-content{flex-grow:1;margin-right:1rem}:host .content{position:relative;flex:1;flex-grow:1;order:2;height:100%;width:100%;overflow-y:auto}:host(.toggle){visibility:visible}";
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
    return h(Host, { key: "a713acb9a831bdb56796c1f401bbde89d57d7ba0", class: {
      "drawer-container": true,
      toggle: this.show,
      "full-height": this.fullHeight,
      "d-none": true
    }, style: {
      width: this.width === "auto" ? this.width : `${this.width}rem`,
      "min-width": `${this.minWidth}rem`,
      "max-width": `${this.maxWidth}rem`
    }, ref: (el) => this.divElement = el, "data-testid": "container", id: "div-container" }, h("div", { key: "8a09b47e83482856cfa035c47b98aa8cfbf0aedf", class: "header" }, h("div", { key: "61e54be284785a1e3f51ad3fa07dddc3f38902fa", class: "header-content" }, h("slot", { key: "68ace02906d87e3c827169f240cea04b8ea4efef", name: "header" })), h("ix-icon-button", { key: "258839168ff7dd42ff0df7404bcc88f438f58a9f", class: "close-button", icon: "close", size: "24", ghost: true, onClick: () => this.onCloseClicked(), "data-testid": "close-button" })), h("div", { key: "e0b2544e0566409ba9ba6f1f106e40ddef9a3a9c", class: "content" }, h("slot", { key: "877f3060cf75d63e1c6d1f5765f516b98b70700e" })));
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
