import { r as registerInstance, h, H as Host } from "./global-DzKOIL47.js";
const dateTimeCardCss = () => `@charset "UTF-8";:host{--ix-date-time-card--box-shadow:var(--si-sys-color-effects-shadow-4);--ix-date-time-card-separator--background:var(--si-sys-color-border-4);--ix-date-time-card--background:var(--si-sys-color-background-3)}:host{--ix-date-time-card-header--padding:var(--si-sys-sizing-spacing-y-50) var(--si-sys-sizing-spacing-x-60);--ix-date-time-card-content--padding:0 var(--si-sys-sizing-spacing-x-60) var(--si-sys-sizing-spacing-y-60);--ix-date-time-card-time-picker--padding:0 var(--si-sys-sizing-spacing-x-60);--ix-date-time-card-footer--padding:var(--si-sys-sizing-spacing-y-60) var(--si-sys-sizing-spacing-x-60);--ix-date-time-card-standalone-appearance--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-date-time-card-rounded--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-date-time-card-left--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-date-time-card-right--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-date-time-card-separator--height:var(--si-sys-sizing-border-width-default)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .card{background-color:var(--ix-date-time-card--background);width:100%;box-shadow:none;border:none;border-radius:unset;display:flex;flex-direction:column}:host .card.standaloneAppearance{box-shadow:var(--ix-date-time-card--box-shadow);border-radius:var(--ix-date-time-card-standalone-appearance--border-radius)}:host .card.rounded{border-radius:var(--ix-date-time-card-rounded--border-radius)}:host .card.left{border-radius:var(--ix-date-time-card-left--border-radius) 0 0 var(--ix-date-time-card-left--border-radius);height:100%}:host .card.right{border-radius:0 var(--ix-date-time-card-right--border-radius) var(--ix-date-time-card-right--border-radius) 0;height:100%}:host .card.straight{border-radius:0}:host .card .header-container{width:100%}:host .card .header-container .header{padding:var(--ix-date-time-card-header--padding);flex:0 1 auto}:host .card .separator{height:var(--ix-date-time-card-separator--height);background-color:var(--ix-date-time-card-separator--background);width:100%;flex:0 1 auto}:host .card .content{padding:var(--ix-date-time-card-content--padding);flex:1 1 auto;display:flex;flex-direction:column;justify-content:center}:host .card .content--time-picker{padding:var(--ix-date-time-card-time-picker--padding)}:host .card .content--no-padding{padding:0}:host .card .footer-container{width:100%}:host .card .footer-container .footer{padding:var(--ix-date-time-card-footer--padding)}`;
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
    return h(Host, { key: "79c1fb521795a3d7d365174a2f31dd71bc4b3057" }, h("div", { key: "34fa48c9c7e302a19584b5200950587a3f5142b9", class: this.cardClasses() }, !this.hideHeader && h("div", { key: "f28611f6a68fea3fb06908f7cb0615156d5b5a75", class: "header-container" }, h("div", { key: "4289f6ace6c1b8349599b2ccd94fc90691d25046", class: "header" }, h("slot", { key: "f374c1b863367f97fa769404ea8b2612a4bc1684", name: "header" })), h("div", { key: "599c823898e13d16ddc2ded2a7dca3dabc54783a", class: "separator" })), h("div", { key: "3ae8ba63cf032fba0fbcd77af81a08da31a5da53", class: {
      content: true,
      "content--time-picker": this.timePickerAppearance,
      "content--no-padding": this.noPadding
    } }, h("slot", { key: "53d6a1b881050d7816b34a6391fd0c95ddf9fd35" })), this.hasFooter && h("div", { key: "4505124262d989c9999e1e6e639baf4e7dafdd58", class: "footer-container" }, h("div", { key: "3e486e1f76df619ca7ad161b634fde1e28deeda2", class: "separator" }), h("div", { key: "0c27cde6945dc9ec53a09a8230d9014476131aef", class: "footer" }, h("slot", { key: "4b7a761030684766a368dd77e2a66514def39f14", name: "footer" })))));
  }
};
DateTimeCard.style = dateTimeCardCss();
export {
  DateTimeCard as ix_date_time_card
};
