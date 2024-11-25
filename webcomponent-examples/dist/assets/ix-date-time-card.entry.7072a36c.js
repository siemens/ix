import { r as registerInstance, h, H as Host } from "./global.2bfd6008.js";
const dateTimeCardCss = ":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .card{background-color:var(--theme-menu--background);width:100%;box-shadow:none;border:none;border-radius:unset;display:flex;flex-direction:column}:host .card.standaloneAppearance{box-shadow:0 0 2px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 12px 18px 0 rgba(0, 0, 0, 0.1);border-radius:4px}:host .card.rounded{border-radius:4px}:host .card.left{border-radius:4px 0 0 4px;height:100%}:host .card.right{border-radius:0 4px 4px 0;height:100%}:host .card .header{padding:1rem;flex:0 1 auto}:host .card .separator{border:1px solid var(--theme-datepicker-separator--background);width:100%;flex:0 1 auto}:host .card .content{padding:0 1rem 1rem 1rem;flex:1 1 auto;display:flex;flex-direction:column;justify-content:center}";
const IxDateTimeCardStyle0 = dateTimeCardCss;
const DateTimeCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.standaloneAppearance = void 0;
    this.individual = true;
    this.corners = "rounded";
  }
  cardClasses() {
    var _a;
    return {
      card: true,
      standaloneAppearance: (_a = this.standaloneAppearance) !== null && _a !== void 0 ? _a : this.individual,
      rounded: this.corners === "rounded",
      left: this.corners === "left",
      right: this.corners === "right"
    };
  }
  render() {
    return h(Host, { key: "77a37aa7870189df01421b6d82b60441e41deaf4" }, h("div", { key: "17852809f2b373e8bc1675c1fba569dbd173463e", class: this.cardClasses() }, h("div", { key: "8c806d4db94332771387bc598a21e3bf9a908a8e", class: "header" }, h("slot", { key: "df31d6a6e5bb15f4fa2da1b8c50f9ce56b85849d", name: "header" })), h("div", { key: "40fd41f6fab1fca75e12e279c5793061d906c513", class: "separator" }), h("div", { key: "56e09ff2ccf4a972b89d222632bca92577a218ee", class: "content" }, h("slot", { key: "74c55c0adf88f5f9ba608e164432ab51ab5a6c26" }))));
  }
};
DateTimeCard.style = IxDateTimeCardStyle0;
export {
  DateTimeCard as ix_date_time_card
};
