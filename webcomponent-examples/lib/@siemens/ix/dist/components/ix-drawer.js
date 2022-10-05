import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { a as anime } from './anime.es.js';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './icon-button.js';

const drawerCss = ".drawer-container.sc-ix-drawer{top:0;right:0;box-shadow:var(--theme-box-shadow-level-3);visibility:hidden;display:flex;position:absolute;flex-flow:column nowrap;justify-content:flex-start;align-items:center;max-height:100vh;min-height:1.5rem;background-color:var(--theme-color-1);border-radius:0.25rem;transition:all 300ms ease-out}.toggle.sc-ix-drawer{z-index:100;visibility:visible}.drawer-container.full-height.sc-ix-drawer{min-height:100%}.header.sc-ix-drawer{display:flex;position:relative;align-items:center;justify-content:flex-end;height:3.5rem;padding:0.5rem 1rem;width:100%;order:1}.header.sc-ix-drawer .header-content.sc-ix-drawer{flex-grow:1;margin-right:1rem}.content.sc-ix-drawer{position:relative;flex:1;flex-grow:1;order:2;height:100%;width:100%;overflow-y:auto}";

const Drawer = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.open = createEvent(this, "open", 7);
    this.drawerClose = createEvent(this, "drawerClose", 7);
    /**
     * Show or hide the drawer
     */
    this.show = false;
    /**
     * Fired in case of an outside click during drawer showed state
     */
    this.closeOnClickOutside = true;
    /**
     * Render the drawer with maximum height
     */
    this.fullHeight = false;
    /**
     * Min width interpreted as REM
     */
    this.minWidth = 16;
    /**
     * Max width interpreted as REM
     */
    this.maxWidth = 28;
    /**
     * Width interpreted as REM if not set to 'auto'
     */
    this.width = this.minWidth;
    this.callback = this.clickedOutside.bind(this);
  }
  onShowChanged(newValue) {
    this.show = newValue !== undefined ? newValue : !this.show;
    this.toggleDrawer(this.show);
  }
  /**
   * Toggle or define show state of drawer
   * @param show Overwrite toggle state with boolean
   */
  async toggleDrawer(show) {
    this.show = show !== undefined ? show : !this.show;
    if (show) {
      this.open.emit();
      this.slideInRight(this.divElement);
      setTimeout(() => {
        window.addEventListener('mousedown', this.callback);
      }, 300);
    }
    else {
      this.drawerClose.emit();
      this.slideOutRight(this.divElement);
      window.removeEventListener('mousedown', this.callback);
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
    const closestElement = target.closest('#div-container');
    const btn = target.closest('#drawer-btn');
    if (closestElement !== this.divElement && target !== btn) {
      this.show = false;
    }
  }
  slideOutRight(el) {
    anime({
      targets: el,
      duration: Drawer.duration,
      translateX: [0, '16rem'],
      opacity: [1, 0],
      easing: 'easeInSine',
      complete: () => {
        el.classList.add('d-none');
      },
    });
  }
  slideInRight(el) {
    anime({
      targets: el,
      duration: Drawer.duration,
      translateX: ['16rem', 0],
      opacity: [0, 1],
      easing: 'easeOutSine',
      begin: () => {
        el.classList.remove('d-none');
      },
    });
  }
  render() {
    return (h("div", { class: {
        'drawer-container': true,
        toggle: this.show,
        'full-height': this.fullHeight,
        'd-none': true,
      }, style: {
        width: this.width === 'auto' ? this.width : `${this.width}rem`,
        'min-width': `${this.minWidth}rem`,
        'max-width': `${this.maxWidth}rem`,
      }, ref: (el) => (this.divElement = el), "data-testid": "container", id: "div-container" }, h("div", { class: "header" }, h("div", { class: "header-content" }, h("slot", { name: "header" })), h("ix-icon-button", { icon: "close", size: "24", ghost: true, onClick: () => this.onCloseClicked(), "data-testid": "close-button" })), h("div", { class: "content" }, h("slot", null))));
  }
  static get watchers() { return {
    "show": ["onShowChanged"]
  }; }
  static get style() { return drawerCss; }
}, [6, "ix-drawer", {
    "show": [1028],
    "closeOnClickOutside": [4, "close-on-click-outside"],
    "fullHeight": [4, "full-height"],
    "minWidth": [2, "min-width"],
    "maxWidth": [2, "max-width"],
    "width": [8],
    "toggleDrawer": [64]
  }]);
Drawer.duration = 300;
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-drawer", "ix-icon", "ix-icon-button"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-drawer":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Drawer);
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ix-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IxDrawer = Drawer;
const defineCustomElement = defineCustomElement$1;

export { IxDrawer, defineCustomElement };
