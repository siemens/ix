import { r as registerInstance, h, H as Host } from "./global-Do6maBom.js";
const dateTimeCardCss = () => `@charset "UTF-8";:host{--ix-date-time-card--box-shadow:var(--si-sys-effects-shadow-4);--ix-date-time-card-separator--background:var(--si-sys-border-4);--ix-date-time-card--background:var(--si-sys-background-3)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .card{background-color:var(--ix-date-time-card--background);width:100%;box-shadow:none;border:none;border-radius:unset;display:flex;flex-direction:column}:host .card.standaloneAppearance{box-shadow:var(--ix-date-time-card--box-shadow);border-radius:0.25rem}:host .card.rounded{border-radius:4px}:host .card.left{border-radius:4px 0 0 4px;height:100%}:host .card.right{border-radius:0 4px 4px 0;height:100%}:host .card.straight{border-radius:0}:host .card .header-container{width:100%}:host .card .header-container .header{padding:0.75rem 1rem;flex:0 1 auto}:host .card .separator{height:1px;background-color:var(--ix-date-time-card-separator--background);width:100%;flex:0 1 auto}:host .card .content{padding:0 1rem 1rem 1rem;flex:1 1 auto;display:flex;flex-direction:column;justify-content:center}:host .card .content--time-picker{padding:0 1rem}:host .card .content--no-padding{padding:0}:host .card .footer-container{width:100%}:host .card .footer-container .footer{padding:1rem}`;
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
    return h(Host, { key: "d522de84910df1dbc2c942eef9d883c1f864c96d" }, h("div", { key: "60ebce666ab508d1fdf70ecb6bb65c0e35cf4604", class: this.cardClasses() }, !this.hideHeader && h("div", { key: "d23fe0f69e7b770209b1aecb28b65bf3b45dd2e2", class: "header-container" }, h("div", { key: "b236f8d94fdfa3470b8983add3d5a0956ed94c07", class: "header" }, h("slot", { key: "fcb0f0a0a5b08565b452dc63a4e38402416dd337", name: "header" })), h("div", { key: "1d9d1e80a1623a30b7a552a3c9380db55b6d6aec", class: "separator" })), h("div", { key: "2e78aa2c610cfd7a93d8af472729df4cda69da5a", class: {
      content: true,
      "content--time-picker": this.timePickerAppearance,
      "content--no-padding": this.noPadding
    } }, h("slot", { key: "55cd3c8f9811d719e44e411932dff5d9460a8550" })), this.hasFooter && h("div", { key: "856be6dac30a156fc28dd35161e569d73d03234c", class: "footer-container" }, h("div", { key: "fd37a059690e4704a628c8cce2265cad6a281394", class: "separator" }), h("div", { key: "adfa4b3402ad814b376b3e442e6964de379c3284", class: "footer" }, h("slot", { key: "3ccd0e6f3f3829d88bcd4e7b619c48d44b2ec65f", name: "footer" })))));
  }
};
DateTimeCard.style = dateTimeCardCss();
export {
  DateTimeCard as ix_date_time_card
};
