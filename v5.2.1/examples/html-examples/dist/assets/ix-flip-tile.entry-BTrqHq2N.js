import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { F as iconEye } from "./index-BeX6RWvV-CXzUIwMU.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import { A as Animation } from "./animation-BqeSHO6C-CazTJry4.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { h as hasSlottedElements } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
const flipTileCss = () => `@charset "UTF-8";.text-xs{font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-s{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-caption{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-caption-single{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-single{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-title{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-title-single{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-single{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-title{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-title-single{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-h2{font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-xl{font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}a{color:var(--theme-color-primary)}:host{--ix-flip-tile-footer-icon--color--hover:var(--si-sys-text-primary);--ix-flip-tile--border-radius:var(--theme-default-border-radius);--ix-flip-tile-alarm--background:var(--si-sys-background-1);--ix-flip-tile-alarm--border-color:var(--si-sys-border-danger);--ix-flip-tile-alarm--color:var(--si-sys-text-primary);--ix-flip-tile-alarm-footer--background:var(--si-sys-background-danger);--ix-flip-tile-alarm-footer--border-color:rgba(0, 0, 0, 0);--ix-flip-tile-alarm-footer--color:var(--si-sys-text-on-danger);--ix-flip-tile-filled--background:var(--si-sys-background-1);--ix-flip-tile-filled--border-color:rgba(0, 0, 0, 0);--ix-flip-tile-filled--color:var(--si-sys-text-primary);--ix-flip-tile-filled-footer--background:var(--si-sys-background-1);--ix-flip-tile-filled-footer--border-color:var(--si-sys-background-0);--ix-flip-tile-filled-footer--color:var(--si-sys-text-primary);--ix-flip-tile-info--background:var(--si-sys-background-1);--ix-flip-tile-info--border-color:var(--si-sys-border-information);--ix-flip-tile-info--color:var(--si-sys-text-primary);--ix-flip-tile-info-footer--background:var(--si-sys-background-information);--ix-flip-tile-info-footer--border-color:rgba(0, 0, 0, 0);--ix-flip-tile-info-footer--color:var(--si-sys-text-on-information);--ix-flip-tile-outline--background:rgba(0, 0, 0, 0);--ix-flip-tile-outline--border-color:var(--si-sys-border-3);--ix-flip-tile-outline--color:var(--si-sys-text-primary);--ix-flip-tile-outline-footer--background:rgba(0, 0, 0, 0);--ix-flip-tile-outline-footer--border-color:var(--si-sys-border-3);--ix-flip-tile-outline-footer--color:var(--si-sys-text-primary);--ix-flip-tile-primary--background:var(--si-sys-background-1);--ix-flip-tile-primary--border-color:var(--si-sys-border-accent);--ix-flip-tile-primary--color:var(--si-sys-text-primary);--ix-flip-tile-primary-footer--background:var(--si-sys-background-accent);--ix-flip-tile-primary-footer--border-color:rgba(0, 0, 0, 0);--ix-flip-tile-primary-footer--color:var(--si-sys-text-on-accent);--ix-flip-tile-warning--background:var(--si-sys-background-1);--ix-flip-tile-warning--border-color:var(--si-sys-background-warning);--ix-flip-tile-warning--color:var(--si-sys-text-primary);--ix-flip-tile-warning-footer--background:var(--si-sys-background-warning);--ix-flip-tile-warning-footer--border-color:rgba(0, 0, 0, 0);--ix-flip-tile-warning-footer--color:var(--si-sys-text-on-warning)}:host{display:flex;flex-direction:column;perspective:1000px;border-radius:var(--ix-flip-tile--border-radius) var(--ix-flip-tile--border-radius) 0 0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .flip-tile-header{display:flex;align-items:center;height:2.5rem;padding:0 0.5rem 0 1rem}:host .flip-tile-header .header-slot-container{flex-grow:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .content-container{flex-grow:1;margin:1rem}:host .flip-tile-container{display:flex;flex-direction:column;height:100%;transform-style:preserve-3d;border-radius:var(--ix-flip-tile--border-radius) var(--ix-flip-tile--border-radius) 0 0}:host .flip-tile-container .footer{height:3rem;align-items:center;justify-content:center;padding:0 0.5rem}:host .flip-tile-container .footer :first-child{height:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .flip-tile-container ::slotted(*){display:flex;flex-direction:column;align-items:center;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host:hover .flip-tile-container .footer ix-icon{color:var(--ix-flip-tile-footer-icon--color--hover)}:host(.flip-tile-variant-outline){border:solid 1px var(--ix-flip-tile-outline--border-color)}:host(.flip-tile-variant-outline) .flip-tile-container{background-color:var(--ix-flip-tile-outline--background);color:var(--ix-flip-tile-outline--color)}:host(.flip-tile-variant-outline) .flip-tile-container .footer{display:none;border-top:1px solid var(--ix-flip-tile-outline-footer--border-color);background-color:var(--ix-flip-tile-outline-footer--background);color:var(--ix-flip-tile-outline-footer--color)}:host(.flip-tile-variant-outline) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-filled){border:solid 1px var(--ix-flip-tile-filled--border-color)}:host(.flip-tile-variant-filled) .flip-tile-container{background-color:var(--ix-flip-tile-filled--background);color:var(--ix-flip-tile-filled--color)}:host(.flip-tile-variant-filled) .flip-tile-container .footer{display:none;border-top:1px solid var(--ix-flip-tile-filled-footer--border-color);background-color:var(--ix-flip-tile-filled-footer--background);color:var(--ix-flip-tile-filled-footer--color)}:host(.flip-tile-variant-filled) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-info){border:solid 1px var(--ix-flip-tile-info--border-color)}:host(.flip-tile-variant-info) .flip-tile-container{background-color:var(--ix-flip-tile-info--background);color:var(--ix-flip-tile-info--color)}:host(.flip-tile-variant-info) .flip-tile-container .footer{display:none;border-top:1px solid var(--ix-flip-tile-info-footer--border-color);background-color:var(--ix-flip-tile-info-footer--background);color:var(--ix-flip-tile-info-footer--color)}:host(.flip-tile-variant-info) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-warning){border:solid 1px var(--ix-flip-tile-warning--border-color)}:host(.flip-tile-variant-warning) .flip-tile-container{background-color:var(--ix-flip-tile-warning--background);color:var(--ix-flip-tile-warning--color)}:host(.flip-tile-variant-warning) .flip-tile-container .footer{display:none;border-top:1px solid var(--ix-flip-tile-warning-footer--border-color);background-color:var(--ix-flip-tile-warning-footer--background);color:var(--ix-flip-tile-warning-footer--color)}:host(.flip-tile-variant-warning) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-alarm){border:solid 1px var(--ix-flip-tile-alarm--border-color)}:host(.flip-tile-variant-alarm) .flip-tile-container{background-color:var(--ix-flip-tile-alarm--background);color:var(--ix-flip-tile-alarm--color)}:host(.flip-tile-variant-alarm) .flip-tile-container .footer{display:none;border-top:1px solid var(--ix-flip-tile-alarm-footer--border-color);background-color:var(--ix-flip-tile-alarm-footer--background);color:var(--ix-flip-tile-alarm-footer--color)}:host(.flip-tile-variant-alarm) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-primary){border:solid 1px var(--ix-flip-tile-primary--border-color)}:host(.flip-tile-variant-primary) .flip-tile-container{background-color:var(--ix-flip-tile-primary--background);color:var(--ix-flip-tile-primary--color)}:host(.flip-tile-variant-primary) .flip-tile-container .footer{display:none;border-top:1px solid var(--ix-flip-tile-primary-footer--border-color);background-color:var(--ix-flip-tile-primary-footer--background);color:var(--ix-flip-tile-primary-footer--color)}:host(.flip-tile-variant-primary) .flip-tile-container .footer.show-footer{display:flex}`;
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
    animate(this.hostElement.shadowRoot.querySelector(".flip-tile-container"), {
      keyframes: {
        "0%": {
          transform: "rotateY(0)"
        },
        "50%": {
          transform: "rotateY(90deg)"
        },
        "51%": {
          transform: "rotateY(270deg)"
        },
        "100%": {
          transform: "rotateY(360deg)"
        }
      },
      duration: Animation.defaultTime,
      easing: "ease-in-out",
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
    return h(Host, { key: "0ec630ee20dfea90c263c3987a41a583d151ca9a", class: {
      [`flip-tile-variant-${this.variant}`]: true
    }, style: {
      height: `${this.height}${this.height === "auto" ? "" : "rem"}`,
      "min-height": `${this.height}${this.height === "auto" ? "" : "rem"}`,
      "max-height": `${this.height}${this.height === "auto" ? "" : "rem"}`,
      width: `${this.width}${this.width === "auto" ? "" : "rem"}`,
      "min-width": `${this.width}${this.width === "auto" ? "" : "rem"}`,
      "max-width": `${this.width}${this.width === "auto" ? "" : "rem"}`
    } }, h("div", { key: "db57184287bb465b1604bb9b6067056f3d2c5ed2", class: "flip-tile-container" }, h("div", { key: "23820e1cfbc57fcac74f47e85412cf08b2c85cf0", class: "flip-tile-header" }, h("div", { key: "1e399d19891044bedcbd32f99d88d62befccc17e", class: "header-slot-container text-l-title" }, h("slot", { key: "d40c475f89aa38e90cad13ad85c8478962e33dee", name: "header" })), h("ix-icon-button", { key: "6667f1f26ded7e5457a9851334c8df7e40b414d5", icon: iconEye, variant: "tertiary", onClick: () => this.toggleIndex(), "aria-label": this.ariaLabelEyeIconButton })), h("div", { key: "5e30296eedbe41a2641b8ffd63a5b17e073c4a72", class: "content-container" }, h("slot", { key: "be3164dd9155a3a1ab3b8f98eb9396fca3166edb" })), h("div", { key: "a1a9e5934a0d8cdd81afe09fb81ea28357f5b347", class: {
      footer: true,
      "show-footer": this.hasFooterSlot
    } }, h("slot", { key: "2f45b8b69d50a163308c9f6130d3337d6783a644", name: "footer", onSlotchange: (event) => this.handleFooterSlotChange(event) }))));
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
