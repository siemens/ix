import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-fQJuTF8s.js";
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
    return h(Host, { key: "d808220aa99b0adafc913a9f9c7ca2b0f38b42f7" }, h("div", { key: "87fd566ae3023b2eb57201e632f49af49b91f59e", class: this.cardClasses() }, !this.hideHeader && h("div", { key: "60d8c1e9abbac3a3109dbee90fdfdbafc8cb829e", class: "header-container" }, h("div", { key: "0a05d9888be173d141104c586e8085b415cbf6dc", class: "header" }, h("slot", { key: "7de739b87220e589db492add707586d86577a1a9", name: "header" })), h("div", { key: "9ba5080db9de6642705b07d81094c00f06c75649", class: "separator" })), h("div", { key: "1d101de9292884b003f120a0aaf85b714d0660d4", class: {
      content: true,
      "content--time-picker": this.timePickerAppearance,
      "content--no-padding": this.noPadding
    } }, h("slot", { key: "2218e18a60e586883eff765306656d741c0d4140" })), this.hasFooter && h("div", { key: "711db6ff4297f7ece971104233df784257d2d593", class: "footer-container" }, h("div", { key: "cf590b277025b4fc89268321349850e1827078aa", class: "separator" }), h("div", { key: "900d94b997488579b548458df69ab05c05cc6a32", class: "footer" }, h("slot", { key: "fcc49bf128b574bd864f69c625105b5dad9b25c4", name: "footer" })))));
  }
};
DateTimeCard.style = dateTimeCardCss();
export {
  DateTimeCard as ix_date_time_card
};
