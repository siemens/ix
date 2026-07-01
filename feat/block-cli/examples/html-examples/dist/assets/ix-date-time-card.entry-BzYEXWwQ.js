import { r as registerInstance, h, H as Host } from "./global-C8IWpzMv.js";
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
    return h(Host, { key: "38b00d0a45c7f122940ca2de884d2190910abf00" }, h("div", { key: "100a65626e9427e368edaba82b98d614edef6d91", class: this.cardClasses() }, !this.hideHeader && h("div", { key: "9978bc8f38984c988e4d4832720da247f8034def", class: "header-container" }, h("div", { key: "fc45de6140104c0c1a1c891fecc560c817ed6908", class: "header" }, h("slot", { key: "39c5d4c05d83b63e30ecba109134f7ffae7be75c", name: "header" })), h("div", { key: "ad5255f0c30380fbe1468b8589e04080f3b9fd33", class: "separator" })), h("div", { key: "99cef6ee5d6b8db74c54edb48cf7d8b5a91bd033", class: {
      content: true,
      "content--time-picker": this.timePickerAppearance,
      "content--no-padding": this.noPadding
    } }, h("slot", { key: "c35a15b7cb815116905566e1b0ed2225b7d7175d" })), this.hasFooter && h("div", { key: "5f530f0fa3c61af17eeee438cab389ddf7fedf1f", class: "footer-container" }, h("div", { key: "99df2b6c8c38eb7c7b88a3fdb4d1f28b99da787b", class: "separator" }), h("div", { key: "ac79dbf3e616d8c68037eb4d8084c3e8450758d7", class: "footer" }, h("slot", { key: "ac2f8400475f0dfc9bb3899974c3c7e9074a35c0", name: "footer" })))));
  }
};
DateTimeCard.style = dateTimeCardCss();
export {
  DateTimeCard as ix_date_time_card
};
