import { r as registerInstance, h, H as Host, g as getElement } from "./global.aa474cf6.js";
import { a as anime } from "./anime.es-Ou74PMQs.d39ae9b1.js";
import { A as Animation } from "./animation-Dp15M30K.7b5f0f8a.js";
const applicationSidebarCss = ":host{display:block;position:relative;width:22rem;height:100%;padding:0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host(.visible){border-right:2px solid var(--theme-color-soft-bdr);padding:1.5rem 0.5rem 0}";
const ApplicationSidebar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.visible = true;
  }
  listenToggleEvent() {
    const visibility = !this.visible;
    const animation = {
      targets: this.hostElement,
      width: visibility ? ["0", "22rem"] : ["22rem", "0"],
      opacity: visibility ? [0, 1] : [1, 0],
      easing: "easeInSine",
      duration: Animation.defaultTime
    };
    const changeVisibility = () => {
      this.visible = visibility;
    };
    if (visibility) {
      animation.begin = changeVisibility.bind(this);
    } else {
      animation.complete = changeVisibility.bind(this);
    }
    anime(animation);
  }
  render() {
    return h(Host, { key: "452d80151fb0e848c50ac7a2551929893fbc31f6", slot: "application-sidebar", class: {
      visible: this.visible
    } }, this.visible ? h("slot", null) : null);
  }
  get hostElement() {
    return getElement(this);
  }
};
ApplicationSidebar.style = applicationSidebarCss;
export {
  ApplicationSidebar as ix_application_sidebar
};
