import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const tabItemCss = "@charset \"UTF-8\";ix-tab-item{position:relative;display:flex;align-items:center;justify-content:center;height:40px;padding:10px 1.5rem;line-height:20px;font-size:14px;font-weight:bold;background-color:var(--theme-tab--background);color:var(--theme-tab--color)}ix-tab-item.circle{height:72px}ix-tab-item.top::after{top:0}ix-tab-item.bottom::after{bottom:0}ix-tab-item::after{content:\"\";position:absolute;background-color:var(--theme-tab-indicator--background);width:100%;height:var(--theme-tab-indicator--height);left:0}ix-tab-item.stretched{flex-basis:100%;max-width:-moz-max-content;max-width:max-content;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}ix-tab-item .text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-flex;vertical-align:middle}ix-tab-item .text span,ix-tab-item .text span::before{pointer-events:none}ix-tab-item:hover:not(.circle){background-color:var(--theme-tab--background--hover);color:var(--theme-tab-color-hover);cursor:pointer}ix-tab-item:hover:not(.circle)::after{background-color:var(--theme-tab-indicator--background--hover)}ix-tab-item:active:not(.circle){background-color:var(--theme-tab--background--active);color:var(--theme-tab-color--active)}ix-tab-item:active:not(.circle)::after{background-color:var(--theme-tab-indicator--background--active)}ix-tab-item:focus-visible{outline:0px solid var(--focus--border-color)}ix-tab-item:focus-visible .circle{outline:1px solid var(--focus--border-color)}ix-tab-item:focus-visible:not(.circle){outline:1px solid var(--focus--border-color)}ix-tab-item.disabled{color:var(--theme-tab--color--disabled);background-color:var(--theme-tab--background--disabled)}ix-tab-item.disabled::after{background-color:var(--theme-tab-indicator--background--disabled)}ix-tab-item.selected:not(.disabled){background-color:var(--theme-tab--background--selected);color:var(--theme-tab--color--selected)}ix-tab-item.selected:not(.disabled)::after{background-color:var(--theme-tab-indicator--background--selected)}ix-tab-item.icon{padding:1.5rem 0.5rem}ix-tab-item.small-tab{height:32px;padding:1rem}ix-tab-item.small-tab.icon{padding:1rem 0.25rem}ix-tab-item .circle{display:flex;justify-content:center;align-items:center;height:48px;width:48px;background-color:var(--theme-animated-tab-indicator--background);border-radius:50%;border:2px solid var(--theme-animated-tab-circle--border-color);color:var(--theme-an…icon--color);cursor:pointer}ix-tab-item .circle.selected:not(.disabled){background-color:var(--theme-animated-tab-circle--background--selected);color:var(--theme-animated-tab-icon--color--selected);border-color:var(--theme-animated-tab-circle--border-color--selected)}ix-tab-item .circle.selected:not(.disabled):hover{background-color:var(--theme-animated-tab-circle--background--selected)}ix-tab-item .circle:hover{background-color:var(--theme-animated-tab-circle--background--hover)}ix-tab-item .circle:active{background-color:var(--theme-animated-tab-circle--background--active)}ix-tab-item .circle:active{background-color:var(--theme-animated-tab-circle--background--active)}ix-tab-item .circle.disabled{background-color:var(--theme-animated-tab-circle--background--disabled);border-color:var(--theme-animated-tab-circle--border-color--disabled)}ix-tab-item .counter{position:absolute;z-index:1;height:16px;width:auto;background-color:var(--theme-pill-outline--background);border:1px solid var(--theme-tab-pill--border-color);border-radius:100px;bottom:6px;display:flex;justify-content:center;align-items:center;padding-left:0.25rem;padding-right:0.25rem;font-size:12px;line-height:16px;color:var(--theme-pill-outline--color);cursor:pointer}ix-tab-item .counter.selected{border-color:var(--theme-tab-pill--border-color--selected)}ix-tab-item .counter.disabled{border-color:var(--theme-tab-pill--border-color--disabled)}ix-tab-item .hidden{display:none}";

const TabItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * Set selected tab
     */
    this.selected = false;
    /**
     * Set disabled tab
     */
    this.disabled = false;
    /**
     * Set small size tab
     */
    this.small = false;
    /**
     * Set icon only tab
     */
    this.icon = false;
    /**
     * Set rounded tab
     */
    this.rounded = false;
    /**
     * Set layout width style
     */
    this.layout = 'auto';
    /**
     * Set selected placement
     */
    this.placement = 'bottom';
  }
  tabItemClasses(props) {
    return {
      selected: props.selected,
      disabled: props.disabled,
      'small-tab': props.small,
      icon: props.small,
      stretched: props.layout === 'stretched',
      bottom: props.placement === 'bottom',
      top: props.placement === 'top',
      circle: props.circle
    };
  }
  render() {
    return (h(Host, { class: this.tabItemClasses({
        selected: this.selected,
        disabled: this.disabled,
        small: this.small,
        icon: this.icon,
        layout: this.layout,
        placement: this.placement,
        circle: this.rounded,
      }), tabIndex: 0 }, h("div", { class: { circle: this.rounded, text: !this.rounded, selected: this.selected, disabled: this.disabled } }, h("slot", null)), h("div", { class: { counter: true, selected: this.selected, hidden: !(this.rounded && this.counter !== undefined), disabled: this.disabled } }, this.counter)));
  }
  static get style() { return tabItemCss; }
}, [4, "ix-tab-item", {
    "selected": [4],
    "disabled": [4],
    "small": [4],
    "icon": [4],
    "rounded": [4],
    "counter": [2],
    "layout": [1],
    "placement": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-tab-item"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-tab-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TabItem);
      }
      break;
  } });
}

export { TabItem as T, defineCustomElement as d };
