import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { F as iconEye } from "./index-BeX6RWvV-CXzUIwMU.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import { A as Animation } from "./animation-BqeSHO6C-CazTJry4.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { h as hasSlottedElements } from "./shadow-dom-C7UpA3Tm-CtINZypD.js";
const flipTileCss = () => `@charset "UTF-8";:host{--ix-flip-tile-footer-icon--color--hover:var(--si-sys-color-text-primary);--ix-flip-tile-alarm--background:var(--si-sys-color-background-1);--ix-flip-tile-alarm--border-color:var(--si-sys-color-border-danger);--ix-flip-tile-alarm--color:var(--si-sys-color-text-primary);--ix-flip-tile-alarm-footer--background:var(--si-sys-color-background-danger);--ix-flip-tile-alarm-footer--border-color:rgba(0, 0, 0, 0);--ix-flip-tile-alarm-footer--color:var(--si-sys-color-text-on-danger);--ix-flip-tile-filled--background:var(--si-sys-color-background-1);--ix-flip-tile-filled--border-color:rgba(0, 0, 0, 0);--ix-flip-tile-filled--color:var(--si-sys-color-text-primary);--ix-flip-tile-filled-footer--background:var(--si-sys-color-background-1);--ix-flip-tile-filled-footer--border-color:var(--si-sys-color-background-0);--ix-flip-tile-filled-footer--color:var(--si-sys-color-text-primary);--ix-flip-tile-info--background:var(--si-sys-color-background-1);--ix-flip-tile-info--border-color:var(--si-sys-color-border-information);--ix-flip-tile-info--color:var(--si-sys-color-text-primary);--ix-flip-tile-info-footer--background:var(--si-sys-color-background-information);--ix-flip-tile-info-footer--border-color:rgba(0, 0, 0, 0);--ix-flip-tile-info-footer--color:var(--si-sys-color-text-on-information);--ix-flip-tile-outline--background:rgba(0, 0, 0, 0);--ix-flip-tile-outline--border-color:var(--si-sys-color-border-3);--ix-flip-tile-outline--color:var(--si-sys-color-text-primary);--ix-flip-tile-outline-footer--background:rgba(0, 0, 0, 0);--ix-flip-tile-outline-footer--border-color:var(--si-sys-color-border-3);--ix-flip-tile-outline-footer--color:var(--si-sys-color-text-primary);--ix-flip-tile-primary--background:var(--si-sys-color-background-1);--ix-flip-tile-primary--border-color:var(--si-sys-color-border-accent);--ix-flip-tile-primary--color:var(--si-sys-color-text-primary);--ix-flip-tile-primary-footer--background:var(--si-sys-color-background-accent);--ix-flip-tile-primary-footer--border-color:rgba(0, 0, 0, 0);--ix-flip-tile-primary-footer--color:var(--si-sys-color-text-on-accent);--ix-flip-tile-warning--background:var(--si-sys-color-background-1);--ix-flip-tile-warning--border-color:var(--si-sys-color-border-warning);--ix-flip-tile-warning--color:var(--si-sys-color-text-primary);--ix-flip-tile-warning-footer--background:var(--si-sys-color-background-warning);--ix-flip-tile-warning-footer--border-color:rgba(0, 0, 0, 0);--ix-flip-tile-warning-footer--color:var(--si-sys-color-text-on-warning)}:host{--ix-flip-tile--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-flip-tile-header--height:var(--si-sys-sizing-size-90);--ix-flip-tile-header--padding:0 var(--si-sys-sizing-spacing-x-40) 0 var(--si-sys-sizing-spacing-x-60);--ix-flip-tile-content-container--margin:var(--si-sys-sizing-spacing-y-60) var(--si-sys-sizing-spacing-x-60);--ix-flip-tile-footer--height:var(--si-sys-sizing-size-100);--ix-flip-tile-footer--padding:0 var(--si-sys-sizing-spacing-x-40);--ix-flip-tile--perspective:1000px;--ix-flip-tile-variant--border-width:var(--si-sys-sizing-border-width-default);--ix-flip-tile-footer--border-width:var(--si-sys-sizing-border-width-default)}:host{display:flex;flex-direction:column;perspective:var(--ix-flip-tile--perspective);border-radius:var(--ix-flip-tile--border-radius) var(--ix-flip-tile--border-radius) 0 0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .flip-tile-header{display:flex;align-items:center;height:var(--ix-flip-tile-header--height);padding:var(--ix-flip-tile-header--padding)}:host .flip-tile-header .header-slot-container{flex-grow:1;min-width:0;font:var(--si-sys-typography-body-lg-sbold);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .content-container{flex-grow:1;margin:var(--ix-flip-tile-content-container--margin)}:host .flip-tile-container{display:flex;flex-direction:column;height:100%;transform-style:preserve-3d;border-radius:var(--ix-flip-tile--border-radius) var(--ix-flip-tile--border-radius) 0 0}:host .flip-tile-container .footer{height:var(--ix-flip-tile-footer--height);align-items:center;justify-content:center;padding:var(--ix-flip-tile-footer--padding)}:host .flip-tile-container .footer :first-child{height:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .flip-tile-container ::slotted(*){display:flex;flex-direction:column;align-items:center;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host:hover .flip-tile-container .footer ix-icon{color:var(--ix-flip-tile-footer-icon--color--hover)}:host(.flip-tile-variant-outline){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile-outline--border-color)}:host(.flip-tile-variant-outline) .flip-tile-container{background-color:var(--ix-flip-tile-outline--background);color:var(--ix-flip-tile-outline--color)}:host(.flip-tile-variant-outline) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-outline-footer--border-color);background-color:var(--ix-flip-tile-outline-footer--background);color:var(--ix-flip-tile-outline-footer--color)}:host(.flip-tile-variant-outline) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-filled){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile-filled--border-color)}:host(.flip-tile-variant-filled) .flip-tile-container{background-color:var(--ix-flip-tile-filled--background);color:var(--ix-flip-tile-filled--color)}:host(.flip-tile-variant-filled) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-filled-footer--border-color);background-color:var(--ix-flip-tile-filled-footer--background);color:var(--ix-flip-tile-filled-footer--color)}:host(.flip-tile-variant-filled) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-info){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile-info--border-color)}:host(.flip-tile-variant-info) .flip-tile-container{background-color:var(--ix-flip-tile-info--background);color:var(--ix-flip-tile-info--color)}:host(.flip-tile-variant-info) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-info-footer--border-color);background-color:var(--ix-flip-tile-info-footer--background);color:var(--ix-flip-tile-info-footer--color)}:host(.flip-tile-variant-info) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-warning){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile-warning--border-color)}:host(.flip-tile-variant-warning) .flip-tile-container{background-color:var(--ix-flip-tile-warning--background);color:var(--ix-flip-tile-warning--color)}:host(.flip-tile-variant-warning) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-warning-footer--border-color);background-color:var(--ix-flip-tile-warning-footer--background);color:var(--ix-flip-tile-warning-footer--color)}:host(.flip-tile-variant-warning) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-alarm){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile-alarm--border-color)}:host(.flip-tile-variant-alarm) .flip-tile-container{background-color:var(--ix-flip-tile-alarm--background);color:var(--ix-flip-tile-alarm--color)}:host(.flip-tile-variant-alarm) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-alarm-footer--border-color);background-color:var(--ix-flip-tile-alarm-footer--background);color:var(--ix-flip-tile-alarm-footer--color)}:host(.flip-tile-variant-alarm) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-primary){border:solid var(--ix-flip-tile-variant--border-width) var(--ix-flip-tile-primary--border-color)}:host(.flip-tile-variant-primary) .flip-tile-container{background-color:var(--ix-flip-tile-primary--background);color:var(--ix-flip-tile-primary--color)}:host(.flip-tile-variant-primary) .flip-tile-container .footer{display:none;border-top:var(--ix-flip-tile-footer--border-width) solid var(--ix-flip-tile-primary-footer--border-color);background-color:var(--ix-flip-tile-primary-footer--background);color:var(--ix-flip-tile-primary-footer--color)}:host(.flip-tile-variant-primary) .flip-tile-container .footer.show-footer{display:flex}`;
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
    return h(Host, { key: "be82bf9525ccfe17480a146550f12741680bef76", class: {
      [`flip-tile-variant-${this.variant}`]: true
    }, style: {
      height: `${this.height}${this.height === "auto" ? "" : "rem"}`,
      "min-height": `${this.height}${this.height === "auto" ? "" : "rem"}`,
      "max-height": `${this.height}${this.height === "auto" ? "" : "rem"}`,
      width: `${this.width}${this.width === "auto" ? "" : "rem"}`,
      "min-width": `${this.width}${this.width === "auto" ? "" : "rem"}`,
      "max-width": `${this.width}${this.width === "auto" ? "" : "rem"}`
    } }, h("div", { key: "bc1e10e98d8507f40009a675e4888f2d956bc0bf", class: "flip-tile-container" }, h("div", { key: "da0f75642d5864a01562a5baa9d32fe1ddafc0d5", class: "flip-tile-header" }, h("div", { key: "a6a2aa7a8625146938d08e2941e6a76e0744d3b5", class: "header-slot-container" }, h("slot", { key: "44f18058d375e230a2c4d6df56c4b70404a45832", name: "header" })), h("ix-icon-button", { key: "8236b2dc99ef8411e9c9482f741650826df4fcc9", icon: iconEye, variant: "tertiary", onClick: () => this.toggleIndex(), "aria-label": this.ariaLabelEyeIconButton })), h("div", { key: "f3715da9d6e54cdcc03b3385000e9bc6a8d9a4f0", class: "content-container" }, h("slot", { key: "d78ac1be9635b4d4b1bdcdfab679af2135382aeb" })), h("div", { key: "de81148c21d5ebf75857b608f610e439ffafc3d0", class: {
      footer: true,
      "show-footer": this.hasFooterSlot
    } }, h("slot", { key: "9c9de504acbc8d32cd6e4aeec7b9adde1d4a8d20", name: "footer", onSlotchange: (event) => this.handleFooterSlotChange(event) }))));
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
