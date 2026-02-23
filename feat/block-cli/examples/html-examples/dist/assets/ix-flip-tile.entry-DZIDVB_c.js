import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-BlVZeLef.js";
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
    return h(Host, { key: "512d9bb555e4a9a4e28ee77f414b21170ca4fff1", class: {
      [`flip-tile-variant-${this.variant}`]: true
    }, style: {
      height: `${this.height}${this.height === "auto" ? "" : "rem"}`,
      "min-height": `${this.height}${this.height === "auto" ? "" : "rem"}`,
      "max-height": `${this.height}${this.height === "auto" ? "" : "rem"}`,
      width: `${this.width}${this.width === "auto" ? "" : "rem"}`,
      "min-width": `${this.width}${this.width === "auto" ? "" : "rem"}`,
      "max-width": `${this.width}${this.width === "auto" ? "" : "rem"}`
    } }, h("div", { key: "86ea32172dbbafab6899fd8e1d220dc3661c372f", class: "flip-tile-container" }, h("div", { key: "0324a59a3b93ced3cc9c6eb800d623f954f4e611", class: "flip-tile-header" }, h("div", { key: "b455e244871c5ad1dd4d3af4fc07977c00fa0a29", class: "header-slot-container text-l-title" }, h("slot", { key: "b6436c8d55df6255eb19be712eeef7cdc808afdf", name: "header" })), h("ix-icon-button", { key: "fe035ac8c67439be3546c220b0d69be970b43ba8", icon: iconEye, variant: "tertiary", onClick: () => this.toggleIndex(), "aria-label": this.ariaLabelEyeIconButton })), h("div", { key: "581ee79a6a8d64be06efe6c61b8e14502dfc2610", class: "content-container" }, h("slot", { key: "2e29f0e41b0ac9543297c345ada3c6d8f1828f43" })), h("div", { key: "164a709bf47d191f0e3ea5ec0516edde11ba11a7", class: {
      footer: true,
      "show-footer": this.hasFooterSlot
    } }, h("slot", { key: "378a13b2a1030cb2dd9ac1c398239175cfcf11ae", name: "footer", onSlotchange: (event) => this.handleFooterSlotChange(event) }))));
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
