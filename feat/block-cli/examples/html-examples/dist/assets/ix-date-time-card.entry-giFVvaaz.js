import { r as registerInstance, h, H as Host } from "./global-C_dy4gBz.js";
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
    return h(Host, { key: "a078e75aa27387bd34bbdfd332dd902b7750a010" }, h("div", { key: "73235ca07a4c9ced7195f29a32209611ed5f4494", class: this.cardClasses() }, !this.hideHeader && h("div", { key: "d3d8bf133175af6dc451cb7c829e9ff18a96f18c", class: "header-container" }, h("div", { key: "ff007c73dbc8f799edfd2dd3ae93859f62b40377", class: "header" }, h("slot", { key: "114d6105cf2b214fb24a8d1ff9b03b8496a15a78", name: "header" })), h("div", { key: "9af07ebeacc280bd72a814971dd1b67eba0f6497", class: "separator" })), h("div", { key: "f82e2ede3b57ef9f7a9985ce9dbe47b9b49b0a99", class: {
      content: true,
      "content--time-picker": this.timePickerAppearance,
      "content--no-padding": this.noPadding
    } }, h("slot", { key: "11fab0a47f749e18c6a5c464c7fdb8a90ead0bd3" })), this.hasFooter && h("div", { key: "d9c0f919b3f97b988dc9d40edf510bb385ed5ad9", class: "footer-container" }, h("div", { key: "b545e89a2e6a37eda92ee8871df1010213f964c7", class: "separator" }), h("div", { key: "522f26a0ca3f7f7297fa724cc85211c48d122ab1", class: "footer" }, h("slot", { key: "414d8d2af4a0b0fd5a0bd4f21d6bc234009ea730", name: "footer" })))));
  }
};
DateTimeCard.style = dateTimeCardCss();
export {
  DateTimeCard as ix_date_time_card
};
