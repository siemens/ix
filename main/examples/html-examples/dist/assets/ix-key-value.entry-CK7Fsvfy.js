import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-CdodJUXO.js";
import "./preload-helper-UZRgTS1n.js";
const keyValueCss = () => `@charset "UTF-8";:host{--ix-key-value-label--color:var(--si-sys-color-text-secondary);--ix-key-value--border-color:var(--si-sys-color-border-4)}:host{--ix-key-value--gap:var(--si-sys-sizing-spacing-x-60);--ix-key-value-icon--padding:var(--si-sys-sizing-spacing-y-20) 0;--ix-key-value-column--padding:var(--si-sys-sizing-spacing-y-40) 0;--ix-key-value-column-content--padding:var(--si-sys-sizing-spacing-y-10) 0;--ix-key-value-row--padding:var(--si-sys-sizing-spacing-y-20) 0;--ix-key-value-content--gap:var(--si-sys-sizing-spacing-x-60);--ix-key-value-row-content--padding:var(--si-sys-sizing-spacing-y-30) 0;--ix-key-value-content-label--min-width:var(--si-sys-sizing-size-140);--ix-key-value--border-width:var(--si-sys-sizing-border-width-default)}:host(.keyValue){display:flex;flex-direction:row;align-items:center;gap:var(--ix-key-value--gap);border-bottom:var(--ix-key-value--border-width) solid var(--ix-key-value--border-color)}:host(.keyValue) .keyValue__icon{padding:var(--ix-key-value-icon--padding)}:host(.keyValue) .keyValue__content{display:flex;flex-grow:1;align-items:flex-start}:host(.keyValue) .keyValue__content,:host(.keyValue) .keyValue__content .content__label,:host(.keyValue) .keyValue__content .content__value{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.keyValue) .keyValue__content .content__label{color:var(--ix-key-value-label--color)}:host(.keyValue) .keyValue__content .content__value{width:100%}:host(.keyValue.keyValue--no-divider){border-bottom-color:transparent}@media (forced-colors: active){:host(.keyValue.keyValue--no-divider){border-bottom-style:none;margin-bottom:var(--ix-key-value--border-width)}}:host(.keyValue.keyValue--column){padding:var(--ix-key-value-column--padding)}:host(.keyValue.keyValue--column) .keyValue__content{flex-direction:column}:host(.keyValue.keyValue--column) .keyValue__content .content__label,:host(.keyValue.keyValue--column) .keyValue__content .content__value:not(.has-customValue){padding:var(--ix-key-value-column-content--padding)}:host(.keyValue.keyValue--row){padding:var(--ix-key-value-row--padding)}:host(.keyValue.keyValue--row) .keyValue__content{flex-direction:row;gap:var(--ix-key-value-content--gap);align-items:center}:host(.keyValue.keyValue--row) .keyValue__content .content__label,:host(.keyValue.keyValue--row) .keyValue__content .content__value:not(.has-customValue){padding:var(--ix-key-value-row-content--padding)}:host(.keyValue.keyValue--row) .keyValue__content .content__label{min-width:var(--ix-key-value-content-label--min-width)}`;
const KeyValue = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Optional key value icon
   */
  icon;
  /**
   * ARIA label for the icon
   */
  ariaLabelIcon;
  /**
   * Key value label
   */
  label;
  /**
   * Optional key value label position - 'top' or 'left'
   */
  labelPosition = "top";
  /**
   * Optional key value text value
   */
  value;
  /**
   * Hide the divider line below the key value.
   * Inside `ix-key-value-list`, the divider is also hidden when the list sets `hideDividers`.
   *
   * @since 6.0.0
   */
  hideDivider = false;
  render() {
    return h(Host, { key: "28d9c547cc028a9fac8d36d5018b908c6b597252", class: {
      keyValue: true,
      [`keyValue--${this.labelPosition === "top" ? "column" : "row"}`]: true,
      "keyValue--no-divider": this.hideDivider
    } }, this.icon && h("ix-icon", { key: "f0ca3e128a56df0603e9261ba11e238ce3d0963f", name: this.icon, class: "keyValue__icon", "aria-label": this.ariaLabelIcon }), h("div", { key: "b7b802ea15a5eba40c7a43db9157ab4fc3ee8403", class: "keyValue__content" }, h("div", { key: "0fc986485a66e709e1524cc56f644e4efae0b19c", class: "content__label" }, this.label), h("div", { key: "9740ddce0231c3f018cf2748245ab682381845f3", class: {
      content__value: true,
      "has-customValue": this.value === void 0
    } }, this.value !== void 0 ? this.value : h("slot", { name: "custom-value" }))));
  }
};
KeyValue.style = keyValueCss();
export {
  KeyValue as ix_key_value
};
