import { r as registerInstance, h, H as Host } from "./global-F68Qu5y3.js";
const dateTimeCardCss = () => `:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .card{background-color:var(--theme-menu--background);width:100%;box-shadow:none;border:none;border-radius:unset;display:flex;flex-direction:column}:host .card.standaloneAppearance{box-shadow:var(--theme-shadow-4);border-radius:0.25rem}:host .card.rounded{border-radius:4px}:host .card.left{border-radius:4px 0 0 4px;height:100%}:host .card.right{border-radius:0 4px 4px 0;height:100%}:host .card.straight{border-radius:0}:host .card .header-container{width:100%}:host .card .header-container .header{padding:0.75rem 1rem;flex:0 1 auto}:host .card .separator{height:1px;background-color:var(--theme-datepicker-separator--background);width:100%;flex:0 1 auto}:host .card .content{padding:0 1rem 1rem 1rem;flex:1 1 auto;display:flex;flex-direction:column;justify-content:center}:host .card .content--time-picker{padding:0 1rem}:host .card .content--no-padding{padding:0}:host .card .footer-container{width:100%}:host .card .footer-container .footer{padding:1rem}`;
const DateTimeCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /** @internal */
  embedded;
  /** Timepicker specific styling */
  timePickerAppearance = false;
  /**
   * Hide header
   */
  hideHeader = false;
  /**
   * Display footer
   */
  hasFooter = false;
  /**
   * Set corners style
   */
  corners = "rounded";
  /**
   * Remove content padding
   */
  noPadding = false;
  cardClasses() {
    return {
      card: true,
      standaloneAppearance: this.embedded === false,
      rounded: this.corners === "rounded",
      left: this.corners === "left",
      right: this.corners === "right",
      straight: this.corners === "straight"
    };
  }
  render() {
    return h(Host, { key: "1d6f3bb4c53340ef7a4f738b59d719494e9e3411" }, h("div", { key: "29aeb8fa6e47f7b4ecac7983d214da555f8ddd8e", class: this.cardClasses() }, !this.hideHeader && h("div", { key: "61e8266749f2560b7bb0a8a022a73bac7a95f0e8", class: "header-container" }, h("div", { key: "a2c6b15307c4c336f4a22b1d9268f9ff70707989", class: "header" }, h("slot", { key: "b9f32cba5a9ba4a446d69cc3599e94d23d9b6a68", name: "header" })), h("div", { key: "1a07949287ea5983bbf9b7ed98762380cefcc4bc", class: "separator" })), h("div", { key: "82210b295c2047407c0ab4f069dd8655dc233925", class: {
      content: true,
      "content--time-picker": this.timePickerAppearance,
      "content--no-padding": this.noPadding
    } }, h("slot", { key: "78a99cd01038510bba3cc7082c1620d8735b8365" })), this.hasFooter && h("div", { key: "895de1eebece8cd106095d51c30a41b813fb22e5", class: "footer-container" }, h("div", { key: "09b0186f206bf260d0d824128007144bafa18d9f", class: "separator" }), h("div", { key: "50f52843323f911321cdfdfaf570791e42a1f926", class: "footer" }, h("slot", { key: "caef2e328502f49e50f789d32a6f6e3f303e1696", name: "footer" })))));
  }
};
DateTimeCard.style = dateTimeCardCss();
export {
  DateTimeCard as ix_date_time_card
};
