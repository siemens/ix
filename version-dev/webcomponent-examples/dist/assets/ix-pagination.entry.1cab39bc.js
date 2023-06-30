import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.fceb1a46.js";
const paginationCss = ".sc-ix-pagination-h,.sc-ix-pagination-h .advanced-pagination.sc-ix-pagination,.sc-ix-pagination-h .item-count.sc-ix-pagination{display:inline-flex;align-items:center}.sc-ix-pagination-h .basic-pagination.sc-ix-pagination{padding:0 0.125rem}.sc-ix-pagination-h .advanced-pagination.sc-ix-pagination{padding:0 0.75rem}.sc-ix-pagination-h input.sc-ix-pagination{width:4.125rem;text-align:center;margin:0 0.5rem}.sc-ix-pagination-h .page-buttons.sc-ix-pagination{white-space:nowrap}.sc-ix-pagination-h .total-count.sc-ix-pagination{white-space:nowrap}.sc-ix-pagination-h .item-count.sc-ix-pagination{flex-grow:1;justify-content:flex-end;-webkit-margin-start:1.5rem;margin-inline-start:1.5rem}.sc-ix-pagination-h .item-count.sc-ix-pagination ix-select.sc-ix-pagination{width:4.5rem;-webkit-margin-start:1.5rem;margin-inline-start:1.5rem}.sc-ix-pagination-h ix-index-button.sc-ix-pagination+ix-index-button.sc-ix-pagination{-webkit-margin-start:0.125rem;margin-inline-start:0.125rem}";
const Pagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pageSelected = createEvent(this, "pageSelected", 7);
    this.itemCountChanged = createEvent(this, "itemCountChanged", 7);
    this.maxCountPages = 7;
    this.advanced = void 0;
    this.itemCount = 15;
    this.showItemCount = true;
    this.count = void 0;
    this.selectedPage = 0;
    this.i18nPage = "Page";
    this.i18nOf = "of";
    this.i18nItems = "Items";
  }
  get pageInput() {
    return this.hostElement.querySelector(".advanced-pagination input.form-control");
  }
  selectPage(index) {
    if (index < 0) {
      this.selectedPage = 0;
    } else if (index > this.count - 1) {
      this.selectedPage = this.count - 1;
    } else {
      this.selectedPage = index;
    }
    this.pageSelected.emit(this.selectedPage);
  }
  increase() {
    if (this.selectedPage === this.count - 1) {
      return;
    }
    this.selectPage(this.selectedPage + 1);
  }
  decrease() {
    if (this.selectedPage === 0) {
      return;
    }
    this.selectPage(this.selectedPage - 1);
  }
  getPageButton(index) {
    return h("ix-index-button", { variant: "Primary", onClick: () => {
      this.selectPage(index);
    }, selected: this.selectedPage === index }, index + 1);
  }
  renderPageButtons() {
    const pagesBeforeOverflow = Math.floor(this.maxCountPages / 2);
    const hasOverflow = this.count > this.maxCountPages;
    const hasOverflowStart = hasOverflow && this.selectedPage > pagesBeforeOverflow;
    const hasOverflowEnd = hasOverflow && this.selectedPage < this.count - pagesBeforeOverflow - 1;
    const pageButtons = [];
    let start = 0;
    let end = Math.min(this.count, this.maxCountPages);
    let pageCount = Math.floor((this.maxCountPages - 4) / 2);
    if (hasOverflowStart) {
      pageButtons.push(this.getPageButton(0));
      pageButtons.push(h("ix-index-button", { variant: "Secondary", onClick: () => {
        if (hasOverflowEnd) {
          this.selectPage(this.selectedPage - Math.max(0, 2 * pageCount + 1));
        } else {
          this.selectPage(this.count - this.maxCountPages);
        }
      } }, "..."));
      if (hasOverflowEnd) {
        start = this.count - this.maxCountPages + 2;
      } else {
        start = this.count - this.maxCountPages + 2;
        end = this.count;
      }
    }
    if (hasOverflowEnd) {
      if (hasOverflowStart) {
        start = this.selectedPage - pageCount;
        end = this.selectedPage + pageCount + 1;
      } else {
        end = this.maxCountPages - 2;
      }
    }
    for (let i = start; i < end; i++) {
      pageButtons.push(this.getPageButton(i));
    }
    if (hasOverflowEnd) {
      pageButtons.push(h("ix-index-button", { variant: "Secondary", onClick: () => {
        if (hasOverflowStart) {
          this.selectPage(this.selectedPage + Math.max(0, 2 * pageCount + 1));
        } else {
          this.selectPage(this.maxCountPages - 1);
        }
      } }, "..."));
      pageButtons.push(this.getPageButton(this.count - 1));
    }
    return h("span", { class: "page-buttons" }, pageButtons);
  }
  render() {
    return h(Host, null, h("ix-icon-button", { disabled: this.selectedPage === 0, ghost: true, icon: "chevron-left-small", onClick: () => this.decrease() }), this.advanced ? h("div", { class: "advanced-pagination" }, this.i18nPage, h("input", { class: "form-control", type: "number", min: "1", max: this.count, value: this.selectedPage + 1, onChange: (e) => {
      const index = Number.parseInt(e.target["value"]);
      this.selectPage(index - 1);
    } }), h("span", { class: "total-count" }, this.i18nOf, " ", this.count)) : h("span", { class: "basic-pagination" }, this.renderPageButtons(), " "), h("ix-icon-button", { disabled: this.selectedPage === this.count - 1, ghost: true, icon: "chevron-right-small", onClick: () => this.increase() }), this.advanced && this.showItemCount ? h("span", { class: "item-count" }, this.i18nItems, h("ix-select", { hideListHeader: true, i18nPlaceholder: "", i18nSelectListHeader: "", "selected-indices": this.itemCount, onItemSelectionChange: (e) => {
      const count = Number.parseInt(e.detail[0]);
      this.itemCountChanged.emit(count);
    } }, h("ix-select-item", { label: "10", value: "10" }), h("ix-select-item", { label: "15", value: "15" }), h("ix-select-item", { label: "20", value: "20" }), h("ix-select-item", { label: "40", value: "40" }), h("ix-select-item", { label: "100", value: "100" }))) : "");
  }
  get hostElement() {
    return getElement(this);
  }
};
Pagination.style = paginationCss;
export {
  Pagination as ix_pagination
};
