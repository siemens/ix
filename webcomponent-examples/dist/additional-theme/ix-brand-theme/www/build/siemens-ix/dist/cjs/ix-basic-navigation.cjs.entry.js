'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-17eb8998.js');

const basicNavigationCss = ".sc-ix-basic-navigation-h{display:flex;position:relative;width:100%;height:100%;flex-direction:column}.sc-ix-basic-navigation-h ix-application-header.sc-ix-basic-navigation{z-index:calc(var(--theme-z-index-sticky) + 1)}.sc-ix-basic-navigation-h .content.sc-ix-basic-navigation{display:flex;height:calc(100% - 2.75rem);width:calc(100% - 4rem);position:relative;margin-left:4rem;overflow:auto}.hide-header.sc-ix-basic-navigation-h .content.sc-ix-basic-navigation{height:100%}";

const BasicNavigation = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.applicationName = undefined;
    this.hideHeader = false;
  }
  get menu() {
    return this.hostElement.querySelector('ix-menu');
  }
  componentDidRender() {
    if (this.menu) {
      this.appendMenu();
      this.adjustMenuHeight();
      this.menu.applicationName = this.applicationName;
    }
  }
  appendMenu() {
    this.hostElement.querySelector('#menu-placeholder').appendChild(this.menu);
  }
  adjustMenuHeight() {
    if (!this.hideHeader) {
      this.menu.style.height = 'calc(100% - 2.75rem)';
    }
  }
  render() {
    return (index.h(index.Host, { class: {
        'hide-header': this.hideHeader,
      } }, !this.hideHeader ? (index.h("ix-application-header", { name: this.applicationName }, index.h("slot", { name: "logo" }))) : null, index.h("div", { id: "menu-placeholder" }), index.h("div", { class: "content", onClick: () => this.menu.toggleMenu(false) }, index.h("slot", null))));
  }
  get hostElement() { return index.getElement(this); }
};
BasicNavigation.style = basicNavigationCss;

exports.ix_basic_navigation = BasicNavigation;
