import { r as registerInstance, h, H as Host } from "./global-43rhC1fd.js";
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
    return h(Host, { key: "02628ceea7dc1ab03066eed290bd61153c9502ad" }, h("div", { key: "f6da3d3831e26c3cce3f3ddf34e05579dd3e7ebd", class: this.cardClasses() }, !this.hideHeader && h("div", { key: "d74ac34e21f9451338d844253271b58bb2d79b98", class: "header-container" }, h("div", { key: "fb43785a64e98b0b36ea7ec5e3af624d5dd3a919", class: "header" }, h("slot", { key: "cf0a0bf139c167d83fcc447c1f0e3be249c5bff5", name: "header" })), h("div", { key: "f9d990d4cdd74dbabac914121f748c5f71152bb5", class: "separator" })), h("div", { key: "4abfe605b7566d43170ab250c4896962d109cc9b", class: {
      content: true,
      "content--time-picker": this.timePickerAppearance,
      "content--no-padding": this.noPadding
    } }, h("slot", { key: "52f4395b48aed6402c31acaa1e46f71357ef30a7" })), this.hasFooter && h("div", { key: "09d9772e888b280d2201a493e1422ef7cbe74b2c", class: "footer-container" }, h("div", { key: "031f8b0112f0de41d6201dd999c880187c586993", class: "separator" }), h("div", { key: "a03aee21a24abf961f5f02c28b89413e40b824f2", class: "footer" }, h("slot", { key: "4a15d496b410ce31daf30f1fdd0e3abe2acfc162", name: "footer" })))));
  }
};
DateTimeCard.style = dateTimeCardCss();
export {
  DateTimeCard as ix_date_time_card
};
