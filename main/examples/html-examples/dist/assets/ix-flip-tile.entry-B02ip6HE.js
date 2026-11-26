import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./index-CgUi6DzV-DmPVhzFD.js";
import { x as iconEye } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import { a as animate } from "./animate-BQARm6pw-B-wfC2r4.js";
import { A as Animation } from "./animation-C2bTHF7D-HeOCyL6m.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { a as hasSlottedElements } from "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import "./preload-helper-UZRgTS1n.js";
const flipTileCss = () => `@charset "UTF-8";:host{--ix-flip-tile-footer-icon--color--hover:var(--si-sys-color-text-primary);--ix-flip-tile--background--accent:var(--si-sys-color-background-1);--ix-flip-tile--border-color--accent:var(--si-sys-color-border-accent);--ix-flip-tile--color--accent:var(--si-sys-color-text-primary);--ix-flip-tile-footer--background--accent:var(--si-sys-color-background-accent);--ix-flip-tile-footer--border-color--accent:rgba(0, 0, 0, 0);--ix-flip-tile-footer--color--accent:var(--si-sys-color-text-on-accent);--ix-flip-tile--background--caution:var(--si-sys-color-background-1);--ix-flip-tile--border-color--caution:var(--si-sys-color-border-caution);--ix-flip-tile--color--caution:var(--si-sys-color-text-primary);--ix-flip-tile-footer--background--caution:var(--si-sys-color-background-caution);--ix-flip-tile-footer--border-color--caution:rgba(0, 0, 0, 0);--ix-flip-tile-footer--color--caution:var(--si-sys-color-text-on-caution);--ix-flip-tile--background--critical:var(--si-sys-color-background-1);--ix-flip-tile--border-color--critical:var(--si-sys-color-border-critical);--ix-flip-tile--color--critical:var(--si-sys-color-text-primary);--ix-flip-tile-footer--background--critical:var(--si-sys-color-background-critical);--ix-flip-tile-footer--border-color--critical:rgba(0, 0, 0, 0);--ix-flip-tile-footer--color--critical:var(--si-sys-color-text-on-critical);--ix-flip-tile--background--danger:var(--si-sys-color-background-1);--ix-flip-tile--border-color--danger:var(--si-sys-color-border-danger);--ix-flip-tile--color--danger:var(--si-sys-color-text-primary);--ix-flip-tile-footer--background--danger:var(--si-sys-color-background-danger);--ix-flip-tile-footer--border-color--danger:rgba(0, 0, 0, 0);--ix-flip-tile-footer--color--danger:var(--si-sys-color-text-on-danger);--ix-flip-tile--background--filled:var(--si-sys-color-background-1);--ix-flip-tile--border-color--filled:rgba(0, 0, 0, 0);--ix-flip-tile--color--filled:var(--si-sys-color-text-primary);--ix-flip-tile-footer--background--filled:var(--si-sys-color-background-1);--ix-flip-tile-footer--border-color--filled:var(--si-sys-color-background-0);--ix-flip-tile-footer--color--filled:var(--si-sys-color-text-primary);--ix-flip-tile--background--information:var(--si-sys-color-background-1);--ix-flip-tile--border-color--information:var(--si-sys-color-border-information);--ix-flip-tile--color--information:var(--si-sys-color-text-primary);--ix-flip-tile-footer--background--information:var(--si-sys-color-background-information);--ix-flip-tile-footer--border-color--information:rgba(0, 0, 0, 0);--ix-flip-tile-footer--color--information:var(--si-sys-color-text-on-information);--ix-flip-tile--background--neutral:var(--si-sys-color-background-1);--ix-flip-tile--border-color--neutral:var(--si-sys-color-border-neutral);--ix-flip-tile--color--neutral:var(--si-sys-color-text-primary);--ix-flip-tile-footer--background--neutral:var(--si-sys-color-background-neutral);--ix-flip-tile-footer--border-color--neutral:rgba(0, 0, 0, 0);--ix-flip-tile-footer--color--neutral:var(--si-sys-color-text-on-neutral);--ix-flip-tile--background--outline:rgba(0, 0, 0, 0);--ix-flip-tile--border-color--outline:var(--si-sys-color-border-3);--ix-flip-tile--color--outline:var(--si-sys-color-text-primary);--ix-flip-tile-footer--background--outline:rgba(0, 0, 0, 0);--ix-flip-tile-footer--border-color--outline:var(--si-sys-color-border-3);--ix-flip-tile-footer--color--outline:var(--si-sys-color-text-primary);--ix-flip-tile--background--success:var(--si-sys-color-background-1);--ix-flip-tile--border-color--success:var(--si-sys-color-border-success);--ix-flip-tile--color--success:var(--si-sys-color-text-primary);--ix-flip-tile-footer--background--success:var(--si-sys-color-background-success);--ix-flip-tile-footer--border-color--success:rgba(0, 0, 0, 0);--ix-flip-tile-footer--color--success:var(--si-sys-color-text-on-success);--ix-flip-tile--background--warning:var(--si-sys-color-background-1);--ix-flip-tile--border-color--warning:var(--si-sys-color-border-warning);--ix-flip-tile--color--warning:var(--si-sys-color-text-primary);--ix-flip-tile-footer--background--warning:var(--si-sys-color-background-warning);--ix-flip-tile-footer--border-color--warning:rgba(0, 0, 0, 0);--ix-flip-tile-footer--color--warning:var(--si-sys-color-text-on-warning)}:host{--ix-flip-tile--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-flip-tile-header--height:var(--si-sys-sizing-size-90);--ix-flip-tile-header--padding:0 var(--si-sys-sizing-spacing-x-40) 0 var(--si-sys-sizing-spacing-x-60);--ix-flip-tile-container--margin:var(--si-sys-sizing-spacing-y-60) var(--si-sys-sizing-spacing-x-60);--ix-flip-tile-footer--height:var(--si-sys-sizing-size-100);--ix-flip-tile-footer--padding:0 var(--si-sys-sizing-spacing-x-40);--ix-flip-tile--perspective:1000px;--ix-flip-tile-variant--border-width:var(--si-sys-sizing-border-width-default);--ix-flip-tile-footer--border-width:var(--si-sys-sizing-border-width-default)}:host{display:flex;flex-direction:column;perspective:var(--ix-flip-tile--perspective);border-radius:var(--ix-flip-tile--border-radius) var(--ix-flip-tile--border-radius) 0 0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:8px;height:8px}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .flip-tile-header{display:flex;align-items:center;height:var(--ix-flip-tile-header--height);padding:var(--ix-flip-tile-header--padding)}:host .flip-tile-header .header-slot-container{flex-grow:1;min-width:0;font:var(--si-sys-typography-body-lg-sbold);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .content-container{flex-grow:1;margin:var(--ix-flip-tile-container--margin)}:host .flip-tile-container{display:flex;flex-direction:column;height:100%;transform-style:preserve-3d;border-radius:var(--ix-flip-tile--border-radius) var(--ix-flip-tile--border-radius) 0 0}:host .flip-tile-container .footer{height:var(--ix-flip-tile-footer--height);align-items:center;justify-content:center;padding:var(--ix-flip-tile-footer--padding)}:host .flip-tile-container .footer :first-child{height:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .flip-tile-container ::slotted(*){display:flex;flex-direction:column;align-items:center;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host:hover .flip-tile-container .footer ix-icon{color:var(--ix-flip-tile-footer-icon--color--hover)}:host(.flip-tile-variant-outline){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile--border-color--outline)}:host(.flip-tile-variant-outline) .flip-tile-container{background-color:var(--ix-flip-tile--background--outline);color:var(--ix-flip-tile--color--outline)}:host(.flip-tile-variant-outline) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-footer--border-color--outline);background-color:var(--ix-flip-tile-footer--background--outline);color:var(--ix-flip-tile-footer--color--outline)}:host(.flip-tile-variant-outline) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-filled){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile--border-color--filled)}:host(.flip-tile-variant-filled) .flip-tile-container{background-color:var(--ix-flip-tile--background--filled);color:var(--ix-flip-tile--color--filled)}:host(.flip-tile-variant-filled) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-footer--border-color--filled);background-color:var(--ix-flip-tile-footer--background--filled);color:var(--ix-flip-tile-footer--color--filled)}:host(.flip-tile-variant-filled) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-accent){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile--border-color--accent)}:host(.flip-tile-variant-accent) .flip-tile-container{background-color:var(--ix-flip-tile--background--accent);color:var(--ix-flip-tile--color--accent)}:host(.flip-tile-variant-accent) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-footer--border-color--accent);background-color:var(--ix-flip-tile-footer--background--accent);color:var(--ix-flip-tile-footer--color--accent)}:host(.flip-tile-variant-accent) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-neutral){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile--border-color--neutral)}:host(.flip-tile-variant-neutral) .flip-tile-container{background-color:var(--ix-flip-tile--background--neutral);color:var(--ix-flip-tile--color--neutral)}:host(.flip-tile-variant-neutral) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-footer--border-color--neutral);background-color:var(--ix-flip-tile-footer--background--neutral);color:var(--ix-flip-tile-footer--color--neutral)}:host(.flip-tile-variant-neutral) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-information){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile--border-color--information)}:host(.flip-tile-variant-information) .flip-tile-container{background-color:var(--ix-flip-tile--background--information);color:var(--ix-flip-tile--color--information)}:host(.flip-tile-variant-information) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-footer--border-color--information);background-color:var(--ix-flip-tile-footer--background--information);color:var(--ix-flip-tile-footer--color--information)}:host(.flip-tile-variant-information) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-success){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile--border-color--success)}:host(.flip-tile-variant-success) .flip-tile-container{background-color:var(--ix-flip-tile--background--success);color:var(--ix-flip-tile--color--success)}:host(.flip-tile-variant-success) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-footer--border-color--success);background-color:var(--ix-flip-tile-footer--background--success);color:var(--ix-flip-tile-footer--color--success)}:host(.flip-tile-variant-success) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-caution){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile--border-color--caution)}:host(.flip-tile-variant-caution) .flip-tile-container{background-color:var(--ix-flip-tile--background--caution);color:var(--ix-flip-tile--color--caution)}:host(.flip-tile-variant-caution) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-footer--border-color--caution);background-color:var(--ix-flip-tile-footer--background--caution);color:var(--ix-flip-tile-footer--color--caution)}:host(.flip-tile-variant-caution) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-warning){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile--border-color--warning)}:host(.flip-tile-variant-warning) .flip-tile-container{background-color:var(--ix-flip-tile--background--warning);color:var(--ix-flip-tile--color--warning)}:host(.flip-tile-variant-warning) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-footer--border-color--warning);background-color:var(--ix-flip-tile-footer--background--warning);color:var(--ix-flip-tile-footer--color--warning)}:host(.flip-tile-variant-warning) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-danger){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile--border-color--danger)}:host(.flip-tile-variant-danger) .flip-tile-container{background-color:var(--ix-flip-tile--background--danger);color:var(--ix-flip-tile--color--danger)}:host(.flip-tile-variant-danger) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-footer--border-color--danger);background-color:var(--ix-flip-tile-footer--background--danger);color:var(--ix-flip-tile-footer--color--danger)}:host(.flip-tile-variant-danger) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-critical){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile--border-color--critical)}:host(.flip-tile-variant-critical) .flip-tile-container{background-color:var(--ix-flip-tile--background--critical);color:var(--ix-flip-tile--color--critical)}:host(.flip-tile-variant-critical) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-footer--border-color--critical);background-color:var(--ix-flip-tile-footer--background--critical);color:var(--ix-flip-tile-footer--color--critical)}:host(.flip-tile-variant-critical) .flip-tile-container .footer.show-footer{display:flex}`;
const FlipTile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toggle = createEvent(this, "toggle", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Variation of the Flip
   *
   * Use `outline` or `filled` for a neutral tile, or a status for a colored border and footer.
   *
   * @breaking-change 6.0.0 Status variant values renamed
   */
  variant = "filled";
  /**
   * Height in pixels
   *
   * @breaking-change 6.0.0 Numeric values are interpreted as pixels instead of rem
   */
  height = 242;
  /**
   * Width in pixels
   *
   * @breaking-change 6.0.0 Numeric values are interpreted as pixels instead of rem
   */
  width = 256;
  /**
   * Index of the currently visible content
   */
  index = 0;
  /**
   * ARIA label for the eye icon button
   * Will be set as aria-label on the nested HTML button element
   */
  ariaLabelEyeIconButton;
  /**
   * Event emitted when the index changes
   */
  toggle;
  isFlipAnimationActive = false;
  hasFooterSlot = false;
  contentItems = [];
  observer;
  watchIndex(newIndex, oldIndex) {
    if (newIndex === oldIndex) {
      return;
    }
    this.doFlipAnimation(newIndex);
  }
  componentDidLoad() {
    this.observer = createMutationObserver(() => this.updateContentItems());
    this.observer.observe(this.hostElement, {
      childList: true
    });
  }
  componentWillLoad() {
    this.updateContentItems();
    this.updateContentVisibility(this.index);
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  handleFooterSlotChange(event) {
    const { target } = event;
    const slot = target;
    this.hasFooterSlot = hasSlottedElements(slot);
  }
  updateContentItems() {
    this.contentItems = Array.from(this.hostElement.querySelectorAll("ix-flip-tile-content"));
  }
  updateContentVisibility(indexVisible) {
    this.contentItems.forEach((content, index) => content.contentVisible = index === indexVisible);
  }
  toggleIndex() {
    let newIndex;
    const oldIndex = this.index;
    if (this.index >= this.contentItems.length - 1) {
      newIndex = 0;
    } else {
      newIndex = this.index + 1;
    }
    const { defaultPrevented } = this.toggle.emit(newIndex);
    if (defaultPrevented) {
      this.index = oldIndex;
      return;
    }
    this.doFlipAnimation(newIndex);
  }
  doFlipAnimation(index) {
    if (this.isFlipAnimationActive) {
      return;
    }
    this.isFlipAnimationActive = true;
    animate(this.hostElement.shadowRoot.querySelector(".flip-tile-container"), [
      { transform: "rotateY(0)", offset: 0 },
      { transform: "rotateY(90deg)", offset: 0.5 },
      { transform: "rotateY(270deg)", offset: 0.51 },
      { transform: "rotateY(360deg)", offset: 1 }
    ], {
      duration: Animation.defaultTime,
      easing: "ease-in-out",
      persist: false,
      onComplete: () => {
        this.index = index;
        this.updateContentVisibility(this.index);
      }
    });
    setTimeout(() => {
      this.isFlipAnimationActive = false;
    }, 2 * Animation.defaultTime);
  }
  render() {
    return h(Host, { key: "f3448fba47fcdc5b214e9adb1f8c7eb03004831a", class: {
      [`flip-tile-variant-${this.variant}`]: true
    }, style: {
      height: `${this.height}${this.height === "auto" ? "" : "px"}`,
      "min-height": `${this.height}${this.height === "auto" ? "" : "px"}`,
      "max-height": `${this.height}${this.height === "auto" ? "" : "px"}`,
      width: `${this.width}${this.width === "auto" ? "" : "px"}`,
      "min-width": `${this.width}${this.width === "auto" ? "" : "px"}`,
      "max-width": `${this.width}${this.width === "auto" ? "" : "px"}`
    } }, h("div", { key: "c3432a96b5aaa43c79fad715cc08e5927039928e", class: "flip-tile-container" }, h("div", { key: "9cc24aa292491e7af411b1c4971069070687580b", class: "flip-tile-header" }, h("div", { key: "479567c2454154fcd7f145b6dd2c7cca91cb8347", class: "header-slot-container" }, h("slot", { key: "e7183e96226c6df10dd20e4dc65a4657e6597d26", name: "header" })), h("ix-icon-button", { key: "48148e755106f63ebfeab51abb40ebad8048746e", icon: iconEye, variant: "tertiary", onClick: () => this.toggleIndex(), "aria-label": this.ariaLabelEyeIconButton })), h("div", { key: "f3508fe8884ac8ec5fb1271c853c13e80bc2d1b7", class: "content-container" }, h("slot", { key: "624c72241f1cb6dd4e1a856b407c300de362a85a" })), h("div", { key: "a9b3541be7f12a25629da91730b8823059d6e535", class: {
      footer: true,
      "show-footer": this.hasFooterSlot
    } }, h("slot", { key: "a5dc06d8a2b22e938f3c9cc06e988c21c9e731e6", name: "footer", onSlotchange: (event) => this.handleFooterSlotChange(event) }))));
  }
  static get watchers() {
    return {
      "index": [{
        "watchIndex": 0
      }]
    };
  }
};
FlipTile.style = flipTileCss();
export {
  FlipTile as ix_flip_tile
};
