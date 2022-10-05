import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = ".sc-ix-icon-h{display:inline-flex;height:1.5rem;width:1.5rem;color:var(--theme-color-std-text)}.sc-ix-icon-h i.sc-ix-icon{color:inherit;transition:color 150ms}.size-12.sc-ix-icon-h{height:0.75rem;width:0.75rem}.size-16.sc-ix-icon-h{height:1rem;width:1rem}.size-32.sc-ix-icon-h{height:2rem;width:2rem}";

const Icon = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, { style: {
        color: this.color ? `var(--theme-${this.color})` : 'inherit',
      }, class: {
        [`size-12`]: this.size === '12',
        [`size-16`]: this.size === '16',
        [`size-24`]: this.size === '24',
        [`size-32`]: this.size === '32',
      } }, h("i", { class: {
        glyph: true,
        [`glyph-${this.name}`]: true,
        'glyph-12': this.size === '12',
        'glyph-16': this.size === '16',
        'glyph-24': this.size === '24',
        'glyph-32': this.size === '32',
      } }, h("slot", null))));
  }
  static get style() { return iconCss; }
}, [6, "ix-icon", {
    "size": [1],
    "color": [1],
    "name": [513]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Icon);
      }
      break;
  } });
}

export { Icon as I, defineCustomElement as d };
