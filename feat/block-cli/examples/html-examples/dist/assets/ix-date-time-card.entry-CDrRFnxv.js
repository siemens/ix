import { r as registerInstance, h, H as Host } from "./global-Dfa5QLOG.js";
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
    return h(Host, { key: "bab88443676eb78e1addadd223d39ff7f31f5c23" }, h("div", { key: "db201879b5bbfb97e27de661d1ea8e11821432b7", class: this.cardClasses() }, !this.hideHeader && h("div", { key: "17ec2af6f65c2e66dfaceabb36c568aeba7cfedf", class: "header-container" }, h("div", { key: "b8c4d90cb9113756b9d2809e6909631a7d8c8354", class: "header" }, h("slot", { key: "5c41a533b26037ab5aff5c6f70510e859ad4d630", name: "header" })), h("div", { key: "fed27538bedfa0cc889aef0a7554449724e83f9a", class: "separator" })), h("div", { key: "75c2d75821d9f0f1daa39179ee12a1f8d0f20173", class: {
      content: true,
      "content--time-picker": this.timePickerAppearance,
      "content--no-padding": this.noPadding
    } }, h("slot", { key: "fe1273a6e847d173a5f46f8b664837f1ba7ced55" })), this.hasFooter && h("div", { key: "918b915405f1e1466638ced3f6088fdc08e12895", class: "footer-container" }, h("div", { key: "f97626747d27edc61223cccb665ccd5c6065eb45", class: "separator" }), h("div", { key: "6d8bb20e7210e4a1c5658f5a8f92d891e3132f6a", class: "footer" }, h("slot", { key: "7fcc3bf1f5ddab6909d938d937bb7b8b57aac1fc", name: "footer" })))));
  }
};
DateTimeCard.style = dateTimeCardCss();
export {
  DateTimeCard as ix_date_time_card
};
