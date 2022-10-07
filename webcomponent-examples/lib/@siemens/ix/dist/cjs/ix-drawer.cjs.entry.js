'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e4a348f.js');
const anime_es = require('./anime.es-8822f296.js');

const drawerCss = ".drawer-container.sc-ix-drawer{top:0;right:0;box-shadow:var(--theme-box-shadow-level-3);visibility:hidden;display:flex;position:absolute;flex-flow:column nowrap;justify-content:flex-start;align-items:center;max-height:100vh;min-height:1.5rem;background-color:var(--theme-color-1);border-radius:0.25rem;transition:all 300ms ease-out}.toggle.sc-ix-drawer{z-index:100;visibility:visible}.drawer-container.full-height.sc-ix-drawer{min-height:100%}.header.sc-ix-drawer{display:flex;position:relative;align-items:center;justify-content:flex-end;height:3.5rem;padding:0.5rem 1rem;width:100%;order:1}.header.sc-ix-drawer .header-content.sc-ix-drawer{flex-grow:1;margin-right:1rem}.content.sc-ix-drawer{position:relative;flex:1;flex-grow:1;order:2;height:100%;width:100%;overflow-y:auto}";

const Drawer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.open = index.createEvent(this, "open", 7);
    this.drawerClose = index.createEvent(this, "drawerClose", 7);
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
    if (evt.target.type !== "button" && closestElement !== this.divElement && target !== btn) {
      this.show = false;
    }
  }
  slideOutRight(el) {
    anime_es.anime({
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
    anime_es.anime({
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
    return (index.h("div", { class: {
        'drawer-container': true,
        toggle: this.show,
        'full-height': this.fullHeight,
        'd-none': true,
      }, style: {
        width: this.width === 'auto' ? this.width : `${this.width}rem`,
        'min-width': `${this.minWidth}rem`,
        'max-width': `${this.maxWidth}rem`,
      }, ref: (el) => (this.divElement = el), "data-testid": "container", id: "div-container" }, index.h("div", { class: "header" }, index.h("div", { class: "header-content" }, index.h("slot", { name: "header" })), index.h("ix-icon-button", { icon: "close", size: "24", ghost: true, onClick: () => this.onCloseClicked(), "data-testid": "close-button" })), index.h("div", { class: "content" }, index.h("slot", null))));
  }
  static get watchers() { return {
    "show": ["onShowChanged"]
  }; }
};
Drawer.duration = 300;
Drawer.style = drawerCss;

exports.ix_drawer = Drawer;
