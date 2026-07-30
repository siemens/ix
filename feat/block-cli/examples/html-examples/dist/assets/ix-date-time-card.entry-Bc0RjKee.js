import { r as registerInstance, h, H as Host } from "./global-J1r-v9CX.js";
const dateTimeCardCss = () => `:host *,:host *::after,:host *::before{box-sizing:border-box}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host *::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host *::-webkit-scrollbar-corner{display:none}:host .card{background-color:var(--theme-menu--background);width:100%;box-shadow:none;border:none;border-radius:unset;display:flex;flex-direction:column}:host .card.standaloneAppearance{box-shadow:var(--theme-shadow-4);border-radius:0.25rem}:host .card.rounded{border-radius:4px}:host .card.left{border-radius:4px 0 0 4px;height:100%}:host .card.right{border-radius:0 4px 4px 0;height:100%}:host .card.straight{border-radius:0}:host .card .header-container{width:100%}:host .card .header-container .header{padding:0.75rem 1rem;flex:0 1 auto}:host .card .separator{height:1px;background-color:var(--theme-datepicker-separator--background);width:100%;flex:0 1 auto}:host .card .content{padding:0 1rem 1rem 1rem;flex:1 1 auto;display:flex;flex-direction:column;justify-content:center}:host .card .content--time-picker{padding:0 1rem}:host .card .content--no-padding{padding:0}:host .card .footer-container{width:100%}:host .card .footer-container .footer{padding:1rem}`;
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
    return h(Host, { key: "7618a587f4cb557c556827a1540f8c5af2f00602" }, h("div", { key: "7b6df1a3551bf2cacd956e5e8cc8c55d8700c204", class: this.cardClasses() }, !this.hideHeader && h("div", { key: "e916d9fc0bd70a1f20b62c779564aae481d5db56", class: "header-container" }, h("div", { key: "9cb94c31214ae23113f59c52fd966b6ab3faa335", class: "header" }, h("slot", { key: "a6332c1ffe57c3fc0e237ea7902cc4e7e5cd3b88", name: "header" })), h("div", { key: "85ef8af25a09d980c16d0fddfa522e41a5e8c523", class: "separator" })), h("div", { key: "d9d46b23804e67d9815bfe54950e6a1250a7e041", class: {
      content: true,
      "content--time-picker": this.timePickerAppearance,
      "content--no-padding": this.noPadding
    } }, h("slot", { key: "9a56e61c5714414ff8a481a51b59938c6794bdd4" })), this.hasFooter && h("div", { key: "e5f8ee63c002cc74db691f3284152e7b4fc133ac", class: "footer-container" }, h("div", { key: "271b3b87228195ff40f98529a62ef8bbb8ee9644", class: "separator" }), h("div", { key: "fc70f691dc0fa02ab0e2aafbebfbb8392147d922", class: "footer" }, h("slot", { key: "9eb00a0d59c0b48885f7228e0a26d7ff1e776128", name: "footer" })))));
  }
};
DateTimeCard.style = dateTimeCardCss();
export {
  DateTimeCard as ix_date_time_card
};
