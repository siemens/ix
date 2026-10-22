import { r as registerInstance, h, H as Host } from "./global-iK340jgP.js";
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
    return h(Host, { key: "468709d310a5f3a06cf4bdaa51bee8deeabde36d" }, h("div", { key: "3f9bb0c3f4a49e316ac1bdeb3dba9de8771c617d", class: this.cardClasses() }, !this.hideHeader && h("div", { key: "7b7d8cc8467c831e817caf599e229f2c521ed7ff", class: "header-container" }, h("div", { key: "62d09174ce994058c1ebd344c883c628eea3e259", class: "header" }, h("slot", { key: "2e249bd943c1ab14bb62de5793f69cd0b915b1c7", name: "header" })), h("div", { key: "543643c657bc81db29c52853631264207cf92954", class: "separator" })), h("div", { key: "2bc251db523c77aafcf3626016f79f63d058d4b4", class: {
      content: true,
      "content--time-picker": this.timePickerAppearance,
      "content--no-padding": this.noPadding
    } }, h("slot", { key: "581093b38f11c073695b4d6210e256632237a412" })), this.hasFooter && h("div", { key: "85f69801d22cc9c39aab261c825a09a3063e9262", class: "footer-container" }, h("div", { key: "17448ebb3b9d1909ba808c055ef77e45e1025238", class: "separator" }), h("div", { key: "d7aa695f6622940e62b99dc3be8efd7464138607", class: "footer" }, h("slot", { key: "82ed458e847eb83c2fbe1db24662b6ba85cccc5d", name: "footer" })))));
  }
};
DateTimeCard.style = dateTimeCardCss();
export {
  DateTimeCard as ix_date_time_card
};
