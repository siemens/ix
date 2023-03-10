import { r as registerInstance, h, H as Host } from "./index.58ccfb29.js";
const burgerMenuCss = ":host{display:flex;justify-content:center;align-items:center;height:2rem;width:2.5rem;border-radius:var(--theme-btn--border-radius)}:host svg{display:inline-block;position:relative}:host .line{fill:var(--theme-menu-btn--color);opacity:1;x:2px;transition:x 0.075s ease-in 0.15s, transform 0.075s ease-in-out 0.075s, y 0.075s ease-in-out, opacity 0.075s linear 0.075s;transform-origin:center}:host(:hover){background-color:var(--theme-menu-btn--background--hover);border-radius:var(--theme-btn--border-radius)}:host(:active){background-color:var(--theme-menu-btn--background--active);border-radius:var(--theme-btn--border-radius)}:host(.expanded) svg .line-1{opacity:1;transform:rotate(-45deg);y:11px}:host(.expanded) svg .line-2{opacity:0;x:9}:host(.expanded) svg .line-3{opacity:1;transform:rotate(45deg);y:11px}";
const BurgerMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.expanded = false;
  }
  render() {
    return h(Host, { class: {
      expanded: this.expanded
    } }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24" }, h("rect", { class: "line line-1", x: "2", y: "5", width: "20", height: "2" }), h("rect", { class: "line line-2", x: "2", y: "11", width: "13", height: "2" }), h("rect", { class: "line line-3", x: "2", y: "17", width: "20", height: "2" })));
  }
};
BurgerMenu.style = burgerMenuCss;
export {
  BurgerMenu as ix_burger_menu
};
