import { r as registerInstance, h, H as Host, g as getElement } from './index-55cfd20d.js';

const dateTimeCardCss = ".card.sc-ix-date-time-card{background-color:var(--theme-menu--background);width:100%;box-shadow:none;border:none;border-radius:unset}.card.individual.sc-ix-date-time-card{box-shadow:0 0 2px 0 var(--theme-input--border-color-bottom--disabled), 0 4px 8px 0 var(--theme-input--border-color-bottom--disabled), 0 12px 18px 0px var(--theme-input--border-color-bottom--disabled);border:1px solid var(--theme-menu--border-color);border-radius:4px}.card.left.sc-ix-date-time-card{border-radius:4px 0 0 4px}.card.right.sc-ix-date-time-card{border-radius:0 4px 4px 0}.card.sc-ix-date-time-card .header.sc-ix-date-time-card{padding:1rem}.card.sc-ix-date-time-card .separator.sc-ix-date-time-card{border:1px solid var(--theme-datepicker-separator--background);width:100%}.card.sc-ix-date-time-card .content.sc-ix-date-time-card{height:100%;padding:0px 1rem 1rem 1rem}";

const DateTimeCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * set styles
     */
    this.individual = true;
    /**
     * Set corners style
     */
    this.corners = 'rounded';
  }
  cardClasses() {
    return {
      card: true,
      individual: this.individual,
      left: this.corners === 'left',
      right: this.corners === 'right',
    };
  }
  render() {
    return (h(Host, null, h("div", { class: this.cardClasses() }, h("div", { class: "header" }, h("slot", { name: "header" })), h("div", { class: "separator" }), h("div", { class: "content" }, h("slot", null)))));
  }
  get hostElement() { return getElement(this); }
};
DateTimeCard.style = dateTimeCardCss;

export { DateTimeCard as ix_date_time_card };
