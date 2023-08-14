import { r as registerInstance, h, H as Host } from "./index.8d008fd3.js";
const dateTimeCardCss = ":host *,:host *::after,:host *::before{box-sizing:border-box}:host .card{background-color:var(--theme-menu--background);width:100%;box-shadow:none;border:none;border-radius:unset;display:flex;flex-direction:column}:host .card.individual{box-shadow:0 0 2px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 12px 18px 0px rgba(0, 0, 0, 0.1);border:1px solid var(--theme-menu--border-color);border-radius:4px}:host .card.left{border-radius:4px 0 0 4px;height:100%}:host .card.right{border-radius:0 4px 4px 0;height:100%}:host .card .header{padding:1rem;flex:0 1 auto}:host .card .separator{border:1px solid var(--theme-datepicker-separator--background);width:100%;flex:0 1 auto}:host .card .content{padding:0px 1rem 1rem 1rem;flex:1 1 auto;display:flex;flex-direction:column;justify-content:center}";
const DateTimeCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.individual = true;
    this.corners = "rounded";
  }
  cardClasses() {
    return {
      card: true,
      individual: this.individual,
      left: this.corners === "left",
      right: this.corners === "right"
    };
  }
  render() {
    return h(Host, null, h("div", { class: this.cardClasses() }, h("div", { class: "header" }, h("slot", { name: "header" })), h("div", { class: "separator" }), h("div", { class: "content" }, h("slot", null))));
  }
};
DateTimeCard.style = dateTimeCardCss;
export {
  DateTimeCard as ix_date_time_card
};
