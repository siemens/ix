import { r as registerInstance, c as createEvent, h, H as Host } from "./global-B1t25MFd.js";
import { r as iconClose } from "./index-CwfZ4aN6-mXhHymhu.js";
import { m as modulesExports } from "./index-CGJC9ptU-OtA7BVGg.js";
import { A as Animation } from "./animation-DNIQ2C1K-BYpQk_MF.js";
const drawerCss = () => `:host{top:0;right:0;display:block;position:absolute;justify-content:flex-start;align-items:center;opacity:0;max-height:100vh;min-height:1.5rem;background-color:var(--theme-color-1);border-radius:0.25rem;box-shadow:var(--theme-box-shadow-level-3)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .drawer-container{z-index:100}:host .header{display:flex;position:relative;align-items:center;justify-content:flex-end;padding:0.5rem;width:100%;order:1}:host .header .header-content{flex-grow:1;margin-right:1rem}:host .content{position:relative;flex:1;order:2;height:100%;width:100%;overflow-y:auto}:host(.display-none){display:none}`;
const Drawer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.open = createEvent(this, "open", 7);
    this.drawerClose = createEvent(this, "drawerClose", 7);
  }
  /**
   * Show or hide the drawer
   */
  show = false;
  /**
   * Fired in case of an outside click during drawer showed state
   */
  // eslint-disable-next-line @stencil-community/ban-default-true
  closeOnClickOutside = true;
  /**
   * Render the drawer with maximum height
   */
  fullHeight = false;
  /**
   * Min width interpreted as REM
   */
  minWidth = 16;
  /**
   * Max width interpreted as REM
   */
  maxWidth = 28;
  /**
   * Width interpreted as REM if not set to 'auto'
   */
  width = this.minWidth;
  /**
   * ARIA label for the close icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelCloseButton = "Close drawer";
  /**
   * Fire event after drawer is open
   */
  open;
  /**
   * Fire event after drawer is close
   */
  drawerClose;
  toggle = false;
  callback = this.clickedOutside.bind(this);
  divElement;
  showContent = true;
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
    show = show ?? !this.show;
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
    modulesExports.animate(el, {
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
    modulesExports.animate(el, {
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
    return h(Host, { key: "a5c39b7166fccc1593d83913ab1bf941f10cf0d2", class: {
      "drawer-container": true,
      "display-none": true
    }, style: {
      width: "0",
      "max-width": `${this.maxWidth}rem`,
      height: this.fullHeight ? "100%" : "auto",
      overflow: "hidden"
    }, ref: (el) => this.divElement = el, "data-testid": "container", id: "div-container" }, h("div", { key: "41c628b204087c4525e822d1b923a4eb796a3755", style: {
      width: this.width === "auto" ? "auto" : `${this.getConstrainedWidth(this.width)}rem`
    } }, h("div", { key: "6c7f5e74ee0ebd0efc7d727c966006d69c72c0ab", class: "header" }, h("div", { key: "687da22ba642fd2c3bf5173b4a137767d4a2d751", class: "header-content" }, h("slot", { key: "10682fe58517bdff1b6b069635f097e1d38ef6aa", name: "header" })), h("ix-icon-button", { key: "36a310d72090052840fe88c56440edb51af34ebf", class: "close-button", style: {
      display: this.showContent ? "block" : "none"
    }, icon: iconClose, iconColor: "color-soft-text", size: "24", variant: "tertiary", onClick: () => this.onCloseClicked(), "data-testid": "close-button", "aria-label": this.ariaLabelCloseButton })), h("div", { key: "3e89f3c55b4be5f118992cc72450267ef41b2fec", class: "content", style: {
      display: this.showContent ? "block" : "none"
    } }, h("slot", { key: "1c9ca8387887bc338afd8f0240bcc20609ee9291" }))));
  }
  static get watchers() {
    return {
      "show": [{
        "onShowChanged": 0
      }]
    };
  }
};
Drawer.style = drawerCss();
export {
  Drawer as ix_drawer
};
