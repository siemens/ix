import { r as registerInstance, h, H as Host } from "./global-Cx3A0XQN.js";
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
    return h(Host, { key: "a2358bab29f49caed0dbde0c860c36f8fada7e04" }, h("div", { key: "09e727b58fd0ee1102e7483a95ca4b2a02602631", class: this.cardClasses() }, !this.hideHeader && h("div", { key: "e2b877c99cc13d30b68c6965d7b70069ec6638b9", class: "header-container" }, h("div", { key: "8704b2419ffa56b2f5a5ed52fdbb32f5df135d13", class: "header" }, h("slot", { key: "949a7680475ab98551808c834c3024bc73c7362f", name: "header" })), h("div", { key: "1b9737a63e423bf3d819195eb39c734c1bca0d2c", class: "separator" })), h("div", { key: "d55852816fcafb3ef1692e8653ba14074e879d3b", class: {
      content: true,
      "content--time-picker": this.timePickerAppearance,
      "content--no-padding": this.noPadding
    } }, h("slot", { key: "e48e1e8d30abeeffc15d4545f9b20a40fd759d91" })), this.hasFooter && h("div", { key: "dfb02945cd9cdd932092ac43efe87973a319e6ca", class: "footer-container" }, h("div", { key: "c909c1e72fc579eab68ac235ad9f18ed42af865f", class: "separator" }), h("div", { key: "d5cb209957b3d7739c38ba6cfa00d08e9174b9a0", class: "footer" }, h("slot", { key: "b608cb0905280b0866b156b75b3de4d64ae42355", name: "footer" })))));
  }
};
DateTimeCard.style = dateTimeCardCss();
export {
  DateTimeCard as ix_date_time_card
};
