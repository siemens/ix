import { r as registerInstance, h, H as Host } from "./global.00f6d77e.js";
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
    return h(Host, { key: "b699133fd52ef092307f90f515aa7046a99cd21f" }, h("div", { key: "938a7c031dae445fee084ea8c1390627b1743bfb", class: this.cardClasses() }, h("div", { key: "1d20df2d528d8219a7fcea504f63da8a07a4fe74", class: "header" }, h("slot", { key: "0dadc7cb6813210aa9de4299f86a2e1b8ed01764", name: "header" })), h("div", { key: "79a1560d676b4d7583edf9c2fc14be75d4a35514", class: "separator" }), h("div", { key: "e0f633c51c1167383fc9f75d153cfb20ee77bc39", class: "content" }, h("slot", { key: "eb8a5596284dd1a461d7f83abe3ec94ac0ebe76c" }))));
  }
};
DateTimeCard.style = IxDateTimeCardStyle0;
export {
  DateTimeCard as ix_date_time_card
};
