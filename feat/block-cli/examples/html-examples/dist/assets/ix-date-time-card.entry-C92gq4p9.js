import { r as registerInstance, h, H as Host } from "./global-CRrZCTD3.js";
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
    return h(Host, { key: "1d613d77fde727a7d088289717530e9723cbaed8" }, h("div", { key: "697a5ba5648541bdb6f2220323ad6fe52ad1b2ce", class: this.cardClasses() }, !this.hideHeader && h("div", { key: "108a0500e3a5e6d2fb9d8b1c4370fd639b5b1d87", class: "header-container" }, h("div", { key: "676cd58773875466f02b49e75c40e71313e25571", class: "header" }, h("slot", { key: "d6f1228ba1a6b9e34de419d05d00951e4e4dec22", name: "header" })), h("div", { key: "fdc89f2b6786eb68cc444afee95c8342b44652b3", class: "separator" })), h("div", { key: "6f552fc3cc072969362080650dc1f5d13e041c6e", class: {
      content: true,
      "content--time-picker": this.timePickerAppearance,
      "content--no-padding": this.noPadding
    } }, h("slot", { key: "dc45e92d658ac80a27e71022a087a4b79ad9388f" })), this.hasFooter && h("div", { key: "6351634c834d591a7673480f55f857f549b9cf47", class: "footer-container" }, h("div", { key: "ec88d07707eb479f13d64cf6218081d73a4b320d", class: "separator" }), h("div", { key: "a844d2556de03d89ae143e2059be5cdc8e5f289c", class: "footer" }, h("slot", { key: "9e4eecc33582d06a0187fd09b65e7d1ed9810634", name: "footer" })))));
  }
};
DateTimeCard.style = dateTimeCardCss();
export {
  DateTimeCard as ix_date_time_card
};
