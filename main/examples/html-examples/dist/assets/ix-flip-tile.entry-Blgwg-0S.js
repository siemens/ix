import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-DtRSe4QO.js";
import { J as iconEye } from "./index-DwLtFbui-Caa0eG-T.js";
import { a as animate } from "./animate-BQARm6pw-B-wfC2r4.js";
import { A as Animation } from "./animation-C2bTHF7D-HeOCyL6m.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { h as hasSlottedElements } from "./shadow-dom-C7UpA3Tm-CtINZypD.js";
const flipTileCss = () => `@charset "UTF-8";:host{--ix-flip-tile-footer-icon--color--hover:var(--si-sys-color-text-primary);--ix-flip-tile-accent--background:var(--si-sys-color-background-1);--ix-flip-tile-accent--border-color:var(--si-sys-color-border-accent);--ix-flip-tile-accent--color:var(--si-sys-color-text-primary);--ix-flip-tile-accent-footer--background:var(--si-sys-color-background-accent);--ix-flip-tile-accent-footer--border-color:rgba(0, 0, 0, 0);--ix-flip-tile-accent-footer--color:var(--si-sys-color-text-on-accent);--ix-flip-tile-caution--background:var(--si-sys-color-background-1);--ix-flip-tile-caution--border-color:var(--si-sys-color-border-caution);--ix-flip-tile-caution--color:var(--si-sys-color-text-primary);--ix-flip-tile-caution-footer--background:var(--si-sys-color-background-caution);--ix-flip-tile-caution-footer--border-color:rgba(0, 0, 0, 0);--ix-flip-tile-caution-footer--color:var(--si-sys-color-text-on-caution);--ix-flip-tile-critical--background:var(--si-sys-color-background-1);--ix-flip-tile-critical--border-color:var(--si-sys-color-border-critical);--ix-flip-tile-critical--color:var(--si-sys-color-text-primary);--ix-flip-tile-critical-footer--background:var(--si-sys-color-background-critical);--ix-flip-tile-critical-footer--border-color:rgba(0, 0, 0, 0);--ix-flip-tile-critical-footer--color:var(--si-sys-color-text-on-critical);--ix-flip-tile-danger--background:var(--si-sys-color-background-1);--ix-flip-tile-danger--border-color:var(--si-sys-color-border-danger);--ix-flip-tile-danger--color:var(--si-sys-color-text-primary);--ix-flip-tile-danger-footer--background:var(--si-sys-color-background-danger);--ix-flip-tile-danger-footer--border-color:rgba(0, 0, 0, 0);--ix-flip-tile-danger-footer--color:var(--si-sys-color-text-on-danger);--ix-flip-tile-filled--background:var(--si-sys-color-background-1);--ix-flip-tile-filled--border-color:rgba(0, 0, 0, 0);--ix-flip-tile-filled--color:var(--si-sys-color-text-primary);--ix-flip-tile-filled-footer--background:var(--si-sys-color-background-1);--ix-flip-tile-filled-footer--border-color:var(--si-sys-color-background-0);--ix-flip-tile-filled-footer--color:var(--si-sys-color-text-primary);--ix-flip-tile-information--background:var(--si-sys-color-background-1);--ix-flip-tile-information--border-color:var(--si-sys-color-border-information);--ix-flip-tile-information--color:var(--si-sys-color-text-primary);--ix-flip-tile-information-footer--background:var(--si-sys-color-background-information);--ix-flip-tile-information-footer--border-color:rgba(0, 0, 0, 0);--ix-flip-tile-information-footer--color:var(--si-sys-color-text-on-information);--ix-flip-tile-neutral--background:var(--si-sys-color-background-1);--ix-flip-tile-neutral--border-color:var(--si-sys-color-border-neutral);--ix-flip-tile-neutral--color:var(--si-sys-color-text-primary);--ix-flip-tile-neutral-footer--background:var(--si-sys-color-background-neutral);--ix-flip-tile-neutral-footer--border-color:rgba(0, 0, 0, 0);--ix-flip-tile-neutral-footer--color:var(--si-sys-color-text-on-neutral);--ix-flip-tile-outline--background:rgba(0, 0, 0, 0);--ix-flip-tile-outline--border-color:var(--si-sys-color-border-3);--ix-flip-tile-outline--color:var(--si-sys-color-text-primary);--ix-flip-tile-outline-footer--background:rgba(0, 0, 0, 0);--ix-flip-tile-outline-footer--border-color:var(--si-sys-color-border-3);--ix-flip-tile-outline-footer--color:var(--si-sys-color-text-primary);--ix-flip-tile-success--background:var(--si-sys-color-background-1);--ix-flip-tile-success--border-color:var(--si-sys-color-border-success);--ix-flip-tile-success--color:var(--si-sys-color-text-primary);--ix-flip-tile-success-footer--background:var(--si-sys-color-background-success);--ix-flip-tile-success-footer--border-color:rgba(0, 0, 0, 0);--ix-flip-tile-success-footer--color:var(--si-sys-color-text-on-success);--ix-flip-tile-warning--background:var(--si-sys-color-background-1);--ix-flip-tile-warning--border-color:var(--si-sys-color-border-warning);--ix-flip-tile-warning--color:var(--si-sys-color-text-primary);--ix-flip-tile-warning-footer--background:var(--si-sys-color-background-warning);--ix-flip-tile-warning-footer--border-color:rgba(0, 0, 0, 0);--ix-flip-tile-warning-footer--color:var(--si-sys-color-text-on-warning)}:host{--ix-flip-tile--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-flip-tile-header--height:var(--si-sys-sizing-size-90);--ix-flip-tile-header--padding:0 var(--si-sys-sizing-spacing-x-40) 0 var(--si-sys-sizing-spacing-x-60);--ix-flip-tile-content-container--margin:var(--si-sys-sizing-spacing-y-60) var(--si-sys-sizing-spacing-x-60);--ix-flip-tile-footer--height:var(--si-sys-sizing-size-100);--ix-flip-tile-footer--padding:0 var(--si-sys-sizing-spacing-x-40);--ix-flip-tile--perspective:1000px;--ix-flip-tile-variant--border-width:var(--si-sys-sizing-border-width-default);--ix-flip-tile-footer--border-width:var(--si-sys-sizing-border-width-default)}:host{display:flex;flex-direction:column;perspective:var(--ix-flip-tile--perspective);border-radius:var(--ix-flip-tile--border-radius) var(--ix-flip-tile--border-radius) 0 0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .flip-tile-header{display:flex;align-items:center;height:var(--ix-flip-tile-header--height);padding:var(--ix-flip-tile-header--padding)}:host .flip-tile-header .header-slot-container{flex-grow:1;min-width:0;font:var(--si-sys-typography-body-lg-sbold);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .content-container{flex-grow:1;margin:var(--ix-flip-tile-content-container--margin)}:host .flip-tile-container{display:flex;flex-direction:column;height:100%;transform-style:preserve-3d;border-radius:var(--ix-flip-tile--border-radius) var(--ix-flip-tile--border-radius) 0 0}:host .flip-tile-container .footer{height:var(--ix-flip-tile-footer--height);align-items:center;justify-content:center;padding:var(--ix-flip-tile-footer--padding)}:host .flip-tile-container .footer :first-child{height:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .flip-tile-container ::slotted(*){display:flex;flex-direction:column;align-items:center;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host:hover .flip-tile-container .footer ix-icon{color:var(--ix-flip-tile-footer-icon--color--hover)}:host(.flip-tile-variant-outline){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile-outline--border-color)}:host(.flip-tile-variant-outline) .flip-tile-container{background-color:var(--ix-flip-tile-outline--background);color:var(--ix-flip-tile-outline--color)}:host(.flip-tile-variant-outline) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-outline-footer--border-color);background-color:var(--ix-flip-tile-outline-footer--background);color:var(--ix-flip-tile-outline-footer--color)}:host(.flip-tile-variant-outline) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-filled){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile-filled--border-color)}:host(.flip-tile-variant-filled) .flip-tile-container{background-color:var(--ix-flip-tile-filled--background);color:var(--ix-flip-tile-filled--color)}:host(.flip-tile-variant-filled) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-filled-footer--border-color);background-color:var(--ix-flip-tile-filled-footer--background);color:var(--ix-flip-tile-filled-footer--color)}:host(.flip-tile-variant-filled) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-accent){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile-accent--border-color)}:host(.flip-tile-variant-accent) .flip-tile-container{background-color:var(--ix-flip-tile-accent--background);color:var(--ix-flip-tile-accent--color)}:host(.flip-tile-variant-accent) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-accent-footer--border-color);background-color:var(--ix-flip-tile-accent-footer--background);color:var(--ix-flip-tile-accent-footer--color)}:host(.flip-tile-variant-accent) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-neutral){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile-neutral--border-color)}:host(.flip-tile-variant-neutral) .flip-tile-container{background-color:var(--ix-flip-tile-neutral--background);color:var(--ix-flip-tile-neutral--color)}:host(.flip-tile-variant-neutral) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-neutral-footer--border-color);background-color:var(--ix-flip-tile-neutral-footer--background);color:var(--ix-flip-tile-neutral-footer--color)}:host(.flip-tile-variant-neutral) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-information){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile-information--border-color)}:host(.flip-tile-variant-information) .flip-tile-container{background-color:var(--ix-flip-tile-information--background);color:var(--ix-flip-tile-information--color)}:host(.flip-tile-variant-information) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-information-footer--border-color);background-color:var(--ix-flip-tile-information-footer--background);color:var(--ix-flip-tile-information-footer--color)}:host(.flip-tile-variant-information) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-success){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile-success--border-color)}:host(.flip-tile-variant-success) .flip-tile-container{background-color:var(--ix-flip-tile-success--background);color:var(--ix-flip-tile-success--color)}:host(.flip-tile-variant-success) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-success-footer--border-color);background-color:var(--ix-flip-tile-success-footer--background);color:var(--ix-flip-tile-success-footer--color)}:host(.flip-tile-variant-success) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-caution){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile-caution--border-color)}:host(.flip-tile-variant-caution) .flip-tile-container{background-color:var(--ix-flip-tile-caution--background);color:var(--ix-flip-tile-caution--color)}:host(.flip-tile-variant-caution) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-caution-footer--border-color);background-color:var(--ix-flip-tile-caution-footer--background);color:var(--ix-flip-tile-caution-footer--color)}:host(.flip-tile-variant-caution) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-warning){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile-warning--border-color)}:host(.flip-tile-variant-warning) .flip-tile-container{background-color:var(--ix-flip-tile-warning--background);color:var(--ix-flip-tile-warning--color)}:host(.flip-tile-variant-warning) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-warning-footer--border-color);background-color:var(--ix-flip-tile-warning-footer--background);color:var(--ix-flip-tile-warning-footer--color)}:host(.flip-tile-variant-warning) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-danger){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile-danger--border-color)}:host(.flip-tile-variant-danger) .flip-tile-container{background-color:var(--ix-flip-tile-danger--background);color:var(--ix-flip-tile-danger--color)}:host(.flip-tile-variant-danger) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-danger-footer--border-color);background-color:var(--ix-flip-tile-danger-footer--background);color:var(--ix-flip-tile-danger-footer--color)}:host(.flip-tile-variant-danger) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-critical){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile-critical--border-color)}:host(.flip-tile-variant-critical) .flip-tile-container{background-color:var(--ix-flip-tile-critical--background);color:var(--ix-flip-tile-critical--color)}:host(.flip-tile-variant-critical) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-critical-footer--border-color);background-color:var(--ix-flip-tile-critical-footer--background);color:var(--ix-flip-tile-critical-footer--color)}:host(.flip-tile-variant-critical) .flip-tile-container .footer.show-footer{display:flex}`;
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
   * @since 4.0.0
   */
  variant = "filled";
  /**
   * Height interpreted as REM
   */
  height = 15.125;
  /**
   * Width interpreted as REM
   */
  width = 16;
  /**
   * Index of the currently visible content
   * @since 3.0.0
   */
  index = 0;
  /**
   * ARIA label for the eye icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelEyeIconButton;
  /**
   * Event emitted when the index changes
   * @since 3.0.0
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
    return h(Host, { key: "07a484c80e9a41e5cf878a2d5e8bd097f70ba66d", class: {
      [`flip-tile-variant-${this.variant}`]: true
    }, style: {
      height: `${this.height}${this.height === "auto" ? "" : "rem"}`,
      "min-height": `${this.height}${this.height === "auto" ? "" : "rem"}`,
      "max-height": `${this.height}${this.height === "auto" ? "" : "rem"}`,
      width: `${this.width}${this.width === "auto" ? "" : "rem"}`,
      "min-width": `${this.width}${this.width === "auto" ? "" : "rem"}`,
      "max-width": `${this.width}${this.width === "auto" ? "" : "rem"}`
    } }, h("div", { key: "ea79b64a1cbcd86649da3cfffe4690f49bd26b67", class: "flip-tile-container" }, h("div", { key: "1e542db7fe3ff87e461f6ba4b8bc5273ab2cc708", class: "flip-tile-header" }, h("div", { key: "9d2055b1ca848af5eb2fca324d0bd4aa848a6b68", class: "header-slot-container" }, h("slot", { key: "5054132c4e68bb3150574dc53158a19c1a389da2", name: "header" })), h("ix-icon-button", { key: "7eb0e3b519ec7b43103e3ddde6dde6eda2cbdb71", icon: iconEye, variant: "tertiary", onClick: () => this.toggleIndex(), "aria-label": this.ariaLabelEyeIconButton })), h("div", { key: "d4a3a5b29e16e0676e709adb33bd4e39ffe5ec64", class: "content-container" }, h("slot", { key: "a520e359156245e74517ad8403a1946704b5fd1f" })), h("div", { key: "4d45ad4b26076624e22debeaffcd4a3fd33ddc8e", class: {
      footer: true,
      "show-footer": this.hasFooterSlot
    } }, h("slot", { key: "e4701caf81cdaacd90785e77b5831f1116d81ce0", name: "footer", onSlotchange: (event) => this.handleFooterSlotChange(event) }))));
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
