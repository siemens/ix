import { r as registerInstance, h, H as Host } from "./global.8b5b8f81.js";
const dateTimeCardCss = ":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .card{background-color:var(--theme-menu--background);width:100%;box-shadow:none;border:none;border-radius:unset;display:flex;flex-direction:column}:host .card.standaloneAppearance{box-shadow:0 0 2px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 12px 18px 0 rgba(0, 0, 0, 0.1);border-radius:4px}:host .card.rounded{border-radius:4px}:host .card.left{border-radius:4px 0 0 4px;height:100%}:host .card.right{border-radius:0 4px 4px 0;height:100%}:host .card .header{padding:1rem;flex:0 1 auto}:host .card .separator{border:1px solid var(--theme-datepicker-separator--background);width:100%;flex:0 1 auto}:host .card .content{padding:0 0.75rem 0.75rem 0.75rem;flex:1 1 auto;display:flex;flex-direction:column;justify-content:center}";
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
    return h(Host, { key: "40541d8514911fcfec7620c3542774eb189d1687" }, h("div", { key: "d07d67a70360f31c67e3f220446e92f0266a5fbe", class: this.cardClasses() }, h("div", { key: "60681672b69bf55d3106eec4cf2a1d811c0cf637", class: "header" }, h("slot", { key: "5042ffc5ea4e264baa793dddd8fc071800f3eeaa", name: "header" })), h("div", { key: "68371c4b3fb5f66f291482dd44e738ba64813fb4", class: "separator" }), h("div", { key: "a6dbde0e6f11d298bd78dfbaec884b1272e564c4", class: "content" }, h("slot", { key: "5537b6cca4feb31830e9d654785bc9c8258455ba" }))));
  }
};
DateTimeCard.style = IxDateTimeCardStyle0;
export {
  DateTimeCard as ix_date_time_card
};
