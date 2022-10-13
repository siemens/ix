'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e4a348f.js');

const dateTimeCardCss = ".card.sc-ix-date-time-card{background-color:var(--theme-menu--background);width:100%;box-shadow:none;border:none;border-radius:unset}.card.individual.sc-ix-date-time-card{box-shadow:0 0 2px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 12px 18px 0px rgba(0, 0, 0, 0.1);border:1px solid var(--theme-menu--border-color);border-radius:4px}.card.left.sc-ix-date-time-card{border-radius:4px 0 0 4px;height:100%}.card.right.sc-ix-date-time-card{border-radius:0 4px 4px 0;height:100%}.card.sc-ix-date-time-card .header.sc-ix-date-time-card{padding:1rem}.card.sc-ix-date-time-card .separator.sc-ix-date-time-card{border:1px solid var(--theme-datepicker-separator--background);width:100%}.card.sc-ix-date-time-card .content.sc-ix-date-time-card{height:100%;padding:0px 1rem 1rem 1rem}";

const DateTimeCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, index.h("div", { class: this.cardClasses() }, index.h("div", { class: "header" }, index.h("slot", { name: "header" })), index.h("div", { class: "separator" }), index.h("div", { class: "content" }, index.h("slot", null)))));
  }
  get hostElement() { return index.getElement(this); }
};
DateTimeCard.style = dateTimeCardCss;

exports.ix_date_time_card = DateTimeCard;
