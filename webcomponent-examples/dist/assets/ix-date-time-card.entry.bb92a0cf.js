import { r as registerInstance, h, H as Host } from "./index.8b3d29f9.js";
const dateTimeCardCss = ":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .card{background-color:var(--theme-menu--background);width:100%;box-shadow:none;border:none;border-radius:unset;display:flex;flex-direction:column}:host .card.standaloneAppearance{box-shadow:0 0 2px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 12px 18px 0 rgba(0, 0, 0, 0.1);border-radius:4px}:host .card.rounded{border-radius:4px}:host .card.left{border-radius:4px 0 0 4px;height:100%}:host .card.right{border-radius:0 4px 4px 0;height:100%}:host .card .header{padding:1rem;flex:0 1 auto}:host .card .separator{border:1px solid var(--theme-datepicker-separator--background);width:100%;flex:0 1 auto}:host .card .content{padding:0 0.75rem 0.75rem 0.75rem;flex:1 1 auto;display:flex;flex-direction:column;justify-content:center}";
const IxDateTimeCardStyle0 = dateTimeCardCss;
const DateTimeCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.standaloneAppearance = void 0;
    this.individual = true;
    this.corners = "rounded";
  }
  cardClasses() {
    return {
      card: true,
      standaloneAppearance: this.standaloneAppearance !== void 0 ? this.standaloneAppearance : this.individual,
      rounded: this.corners === "rounded",
      left: this.corners === "left",
      right: this.corners === "right"
    };
  }
  render() {
    return h(Host, { key: "f8ed1e43427e1723f5015a550c2cc9a110bee2b2" }, h("div", { key: "f29905676e209d12e851fb8991e60d28cf7153bb", class: this.cardClasses() }, h("div", { key: "4e34b58cb52dddd372fda6713bdd41d612612f96", class: "header" }, h("slot", { key: "c31d602a45866159181c20a3674cd18c5679052f", name: "header" })), h("div", { key: "5d86be7a1b70d75246bf07cda2898bc3ee768ca5", class: "separator" }), h("div", { key: "3d3e38bff5d56f06e88ef654e6f621ee3ffc8b9c", class: "content" }, h("slot", { key: "c8a3b2a6ef2f7260ee0a8a16f5ee8c5eda1d9db6" }))));
  }
};
DateTimeCard.style = IxDateTimeCardStyle0;
export {
  DateTimeCard as ix_date_time_card
};
