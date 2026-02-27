import { r as registerInstance, h, H as Host } from "./global-DXu0UsM0.js";
const dateTimeCardCss = ":host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .card{background-color:var(--theme-menu--background);width:100%;box-shadow:none;border:none;border-radius:unset;display:flex;flex-direction:column}:host .card.standaloneAppearance{box-shadow:var(--theme-shadow-4);border-radius:0.25rem}:host .card.rounded{border-radius:4px}:host .card.left{border-radius:4px 0 0 4px;height:100%}:host .card.right{border-radius:0 4px 4px 0;height:100%}:host .card.straight{border-radius:0}:host .card .header-container{width:100%}:host .card .header-container .header{padding:0.75rem 1rem;flex:0 1 auto}:host .card .separator{height:1px;background-color:var(--theme-datepicker-separator--background);width:100%;flex:0 1 auto}:host .card .content{padding:0 1rem 1rem 1rem;flex:1 1 auto;display:flex;flex-direction:column;justify-content:center}:host .card .content--time-picker{padding:0 1rem}:host .card .footer-container{width:100%}:host .card .footer-container .footer{padding:1rem}";
const DateTimeCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.timePickerAppearance = false;
    this.hideHeader = false;
    this.hasFooter = false;
    this.corners = "rounded";
  }
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
    return h(Host, { key: "e4b044b0076f79934f3e561dab684a9aa53ab8c2" }, h("div", { key: "91f00686e9000d71745bca5bb958a401fe265ed2", class: this.cardClasses() }, !this.hideHeader && h("div", { key: "974c90cd1522069f3e10831b6cec9d80eefc7630", class: "header-container" }, h("div", { key: "64d22e413cf579b3831580040d0921f73e37cbed", class: "header" }, h("slot", { key: "dadc035aa3e2aad17d16a0b7edb9c1aa83f5b64a", name: "header" })), h("div", { key: "14c6cffd8a0086835c42dca7e5a12a9c569ebc2f", class: "separator" })), h("div", { key: "e3150b66b51fd87e5cb62c620d9e46d21a3b9aed", class: {
      content: true,
      "content--time-picker": this.timePickerAppearance
    } }, h("slot", { key: "6fe2bfb5676a992be3caa5fd134dcb5f595f3ae3" })), this.hasFooter && h("div", { key: "2c2a1a534b8e71a472e3a7e0bca7e5187322a107", class: "footer-container" }, h("div", { key: "67713b28bbfda3298d8778db37f8ca84d72270f0", class: "separator" }), h("div", { key: "247a0ac8c8fe7ddfa7b2d05c0bd9a1671229469c", class: "footer" }, h("slot", { key: "b1f5a9ace8a8c69eff1a954850cca8174619dcc8", name: "footer" })))));
  }
};
DateTimeCard.style = dateTimeCardCss;
export {
  DateTimeCard as ix_date_time_card
};
