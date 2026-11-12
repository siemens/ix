import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-CwYAT1Wh.js";
import "./preload-helper-UZRgTS1n.js";
const dateTimeCardCss = () => `@charset "UTF-8";:host{--ix-date-time-card--box-shadow:var(--si-sys-color-effects-shadow-40);--ix-date-time-card-separator--background:var(--si-sys-color-border-4);--ix-date-time-card--background:var(--si-sys-color-background-3)}:host{--ix-date-time-card-header--padding:var(--si-sys-sizing-spacing-y-50) var(--si-sys-sizing-spacing-x-60);--ix-date-time-card-content--padding:0 var(--si-sys-sizing-spacing-x-60) var(--si-sys-sizing-spacing-y-60);--ix-date-time-card-time-picker--padding:0 var(--si-sys-sizing-spacing-x-60);--ix-date-time-card-footer--padding:var(--si-sys-sizing-spacing-y-60) var(--si-sys-sizing-spacing-x-60);--ix-date-time-card-standalone-appearance--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-date-time-card-rounded--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-date-time-card-left--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-date-time-card-right--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-date-time-card-separator--height:var(--si-sys-sizing-border-width-default)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .card{background-color:var(--ix-date-time-card--background);width:100%;box-shadow:none;border:none;border-radius:unset;display:flex;flex-direction:column}:host .card.standaloneAppearance{box-shadow:var(--ix-date-time-card--box-shadow);border-radius:var(--ix-date-time-card-standalone-appearance--border-radius)}:host .card.rounded{border-radius:var(--ix-date-time-card-rounded--border-radius)}:host .card.left{border-radius:var(--ix-date-time-card-left--border-radius) 0 0 var(--ix-date-time-card-left--border-radius);height:100%}:host .card.right{border-radius:0 var(--ix-date-time-card-right--border-radius) var(--ix-date-time-card-right--border-radius) 0;height:100%}:host .card.straight{border-radius:0}:host .card .header-container{width:100%}:host .card .header-container .header{padding:var(--ix-date-time-card-header--padding);flex:0 1 auto}:host .card .separator{height:var(--ix-date-time-card-separator--height);background-color:var(--ix-date-time-card-separator--background);width:100%;flex:0 1 auto}:host .card .content{padding:var(--ix-date-time-card-content--padding);flex:1 1 auto;display:flex;flex-direction:column;justify-content:center}:host .card .content--time-picker{padding:var(--ix-date-time-card-time-picker--padding)}:host .card .content--no-padding{padding:0}:host .card .footer-container{width:100%}:host .card .footer-container .footer{padding:var(--ix-date-time-card-footer--padding)}`;
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
    return h(Host, { key: "05a9db9e0d581bc3d1947a25df6b76a4ca3e4632" }, h("div", { key: "eb1ed93d550b2eb09bc577754fe27d54b66a50ed", class: this.cardClasses() }, !this.hideHeader && h("div", { key: "5fb5d1b013602ce430a36e44d834e3c0fb8f52bc", class: "header-container" }, h("div", { key: "74e30bb7351e5609ad8d25b6fbb09f02711ad07d", class: "header" }, h("slot", { key: "a04f403a1b40ff7e822723fbe2d1944be2fe866b", name: "header" })), h("div", { key: "5964a1162801ebd4233b58f21f9eb56e38d83754", class: "separator" })), h("div", { key: "9b2c68f47096377914a1e96a525cea68854a63a2", class: {
      content: true,
      "content--time-picker": this.timePickerAppearance,
      "content--no-padding": this.noPadding
    } }, h("slot", { key: "b300b187ab7ff6283446251711de489a8389eb39" })), this.hasFooter && h("div", { key: "ab9c30f531e68957c7318e99dbc12c3b267a7512", class: "footer-container" }, h("div", { key: "609d3dfab76f3fec09928c40b6f4e44e3d3cf3da", class: "separator" }), h("div", { key: "1c655750cc82d7d9d2f49d2924dfe1f64cfd56b2", class: "footer" }, h("slot", { key: "cf94c4087bd8d1d22c3384fe668f02f0fbb600fd", name: "footer" })))));
  }
};
DateTimeCard.style = dateTimeCardCss();
export {
  DateTimeCard as ix_date_time_card
};
