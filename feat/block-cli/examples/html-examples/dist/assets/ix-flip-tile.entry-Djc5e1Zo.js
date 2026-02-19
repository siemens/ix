import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-Cn4dOqNA.js";
import { t as iconEye } from "./index-8HpPmDK_-DinFJk0z.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import { A as Animation } from "./animation-C5MWUgDN-BXCJNYHu.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { h as hasSlottedElements } from "./shadow-dom-i60z1FJC-Cx4XiL3F.js";
const flipTileCss = ".text-xs{font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-s{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-caption{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-caption-single{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-single{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-title{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-title-single{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-single{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-title{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-title-single{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-h2{font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-xl{font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}a{color:var(--theme-color-primary)}:host{display:flex;flex-direction:column;perspective:1000px;border-radius:var(--theme-flip--border-radius) var(--theme-flip--border-radius) 0 0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .flip-tile-header{display:flex;align-items:center;height:2.5rem;padding:0 0.5rem 0 1rem}:host .flip-tile-header .header-slot-container{flex-grow:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .content-container{flex-grow:1;margin:1rem}:host .flip-tile-container{display:flex;flex-direction:column;height:100%;transform-style:preserve-3d;border-radius:var(--theme-flip--border-radius) var(--theme-flip--border-radius) 0 0}:host .flip-tile-container .footer{height:3rem;align-items:center;justify-content:center;padding:0 0.5rem}:host .flip-tile-container .footer :first-child{height:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .flip-tile-container ::slotted(*){display:flex;flex-direction:column;align-items:center;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host:hover .flip-tile-container .footer ix-icon{color:var(--theme-color-std-text)}:host(.flip-tile-variant-outline){border:solid 1px var(--theme-flip-outline--border-color)}:host(.flip-tile-variant-outline) .flip-tile-container{background-color:var(--theme-flip-outline--background);color:var(--theme-flip-outline--color)}:host(.flip-tile-variant-outline) .flip-tile-container .footer{display:none;border-top:1px solid var(--theme-flip-outline-footer--border-color);background-color:var(--theme-flip-outline-footer--background);color:var(--theme-flip-outline-footer--color)}:host(.flip-tile-variant-outline) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-filled){border:solid 1px var(--theme-flip-filled--border-color)}:host(.flip-tile-variant-filled) .flip-tile-container{background-color:var(--theme-flip-filled--background);color:var(--theme-flip-filled--color)}:host(.flip-tile-variant-filled) .flip-tile-container .footer{display:none;border-top:1px solid var(--theme-flip-filled-footer--border-color);background-color:var(--theme-flip-filled-footer--background);color:var(--theme-flip-filled-footer--color)}:host(.flip-tile-variant-filled) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-info){border:solid 1px var(--theme-flip-info--border-color)}:host(.flip-tile-variant-info) .flip-tile-container{background-color:var(--theme-flip-info--background);color:var(--theme-flip-info--color)}:host(.flip-tile-variant-info) .flip-tile-container .footer{display:none;border-top:1px solid var(--theme-flip-info-footer--border-color);background-color:var(--theme-flip-info-footer--background);color:var(--theme-flip-info-footer--color)}:host(.flip-tile-variant-info) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-warning){border:solid 1px var(--theme-flip-warning--border-color)}:host(.flip-tile-variant-warning) .flip-tile-container{background-color:var(--theme-flip-warning--background);color:var(--theme-flip-warning--color)}:host(.flip-tile-variant-warning) .flip-tile-container .footer{display:none;border-top:1px solid var(--theme-flip-warning-footer--border-color);background-color:var(--theme-flip-warning-footer--background);color:var(--theme-flip-warning-footer--color)}:host(.flip-tile-variant-warning) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-alarm){border:solid 1px var(--theme-flip-alarm--border-color)}:host(.flip-tile-variant-alarm) .flip-tile-container{background-color:var(--theme-flip-alarm--background);color:var(--theme-flip-alarm--color)}:host(.flip-tile-variant-alarm) .flip-tile-container .footer{display:none;border-top:1px solid var(--theme-flip-alarm-footer--border-color);background-color:var(--theme-flip-alarm-footer--background);color:var(--theme-flip-alarm-footer--color)}:host(.flip-tile-variant-alarm) .flip-tile-container .footer.show-footer{display:flex}:host(.flip-tile-variant-primary){border:solid 1px var(--theme-flip-primary--border-color)}:host(.flip-tile-variant-primary) .flip-tile-container{background-color:var(--theme-flip-primary--background);color:var(--theme-flip-primary--color)}:host(.flip-tile-variant-primary) .flip-tile-container .footer{display:none;border-top:1px solid var(--theme-flip-primary-footer--border-color);background-color:var(--theme-flip-primary-footer--background);color:var(--theme-flip-primary-footer--color)}:host(.flip-tile-variant-primary) .flip-tile-container .footer.show-footer{display:flex}";
const FlipTile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toggle = createEvent(this, "toggle", 7);
    this.variant = "filled";
    this.height = 15.125;
    this.width = 16;
    this.index = 0;
    this.isFlipAnimationActive = false;
    this.hasFooterSlot = false;
    this.contentItems = [];
  }
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
    return h(Host, { key: "a54038f2dbaeffac796822404e2d186c742a5357", class: {
      [`flip-tile-variant-${this.variant}`]: true
    }, style: {
      height: `${this.height}${this.height === "auto" ? "" : "rem"}`,
      "min-height": `${this.height}${this.height === "auto" ? "" : "rem"}`,
      "max-height": `${this.height}${this.height === "auto" ? "" : "rem"}`,
      width: `${this.width}${this.width === "auto" ? "" : "rem"}`,
      "min-width": `${this.width}${this.width === "auto" ? "" : "rem"}`,
      "max-width": `${this.width}${this.width === "auto" ? "" : "rem"}`
    } }, h("div", { key: "0bf12231b1cdeb0afe41d9d45c06fdef4cdedaf4", class: "flip-tile-container" }, h("div", { key: "3e9da89ed0b9cf7595e4c1d317d21ed1b55aa9d7", class: "flip-tile-header" }, h("div", { key: "d4e7cc2a8162254ea3c7c4a0a031346b7a35e3d9", class: "header-slot-container text-l-title" }, h("slot", { key: "dd9e2244a75179ceb4ac9647b403a5e2b01fd2ae", name: "header" })), h("ix-icon-button", { key: "74a5abdba3bf0c90222fc7bf7064742c0ea85b80", icon: iconEye, variant: "tertiary", onClick: () => this.toggleIndex(), "aria-label": this.ariaLabelEyeIconButton })), h("div", { key: "636884dbf0b0143e4f30061cd6e0472c83fe698a", class: "content-container" }, h("slot", { key: "b94b3a488e7a137b06505290ab351724c5f01fca" })), h("div", { key: "a15153c86848df2dd14b1423c686b9655d6fcdc1", class: {
      footer: true,
      "show-footer": this.hasFooterSlot
    } }, h("slot", { key: "68d0585ff19d8a29fc8ccfdb2ec6302f767e3a94", name: "footer", onSlotchange: (event) => this.handleFooterSlotChange(event) }))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "index": ["watchIndex"]
    };
  }
};
FlipTile.style = flipTileCss;
export {
  FlipTile as ix_flip_tile
};
