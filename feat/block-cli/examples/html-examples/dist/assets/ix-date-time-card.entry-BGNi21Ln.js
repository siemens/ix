import { a as registerInstance, h, H as Host } from "./global-DX2OdaCL.js";
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
    return h(Host, { key: "9a9b328c1d278112a8e210bdc37985dbe67d48fc" }, h("div", { key: "bd95d23284c701589095190af6e7d197dec93700", class: this.cardClasses() }, !this.hideHeader && h("div", { key: "42a727cd5e778e17e889011da459bf81f9242283", class: "header-container" }, h("div", { key: "46144e13fca52e580c252363e5e742d51436371f", class: "header" }, h("slot", { key: "7cad9585fdf33653186f46d22132cf6480356b20", name: "header" })), h("div", { key: "83a64b078b5902764bf08e5b002bcaa5f37d2ce9", class: "separator" })), h("div", { key: "03ffcb6a96370bf556e57413fca28fad57b2c155", class: {
      content: true,
      "content--time-picker": this.timePickerAppearance,
      "content--no-padding": this.noPadding
    } }, h("slot", { key: "2cbfe2f27f5a449adf329a2872cddac1ba8b687d" })), this.hasFooter && h("div", { key: "13c6595028d939e22eb01cb65190f51a304553a0", class: "footer-container" }, h("div", { key: "626e82bbb3cdc612c8c0769fd98513da7f45968f", class: "separator" }), h("div", { key: "35e2bd253a846915d9fcd4adb1b1d78839614a4c", class: "footer" }, h("slot", { key: "597304726e19fbf3ac6eaa765d4944595cc07c5c", name: "footer" })))));
  }
};
DateTimeCard.style = dateTimeCardCss();
export {
  DateTimeCard as ix_date_time_card
};
