import { r as registerInstance, h, H as Host } from "./global-Dfa5QLOG.js";
function templateBuilder(inputTemplate) {
  let templateString = "";
  inputTemplate.forEach((row) => {
    templateString += '"';
    templateString = row.reduce((pV, cV) => {
      return `${pV} ${cV}`;
    }, templateString);
    templateString += '"\n';
  });
  return templateString;
}
const cssGridCss = () => `:host{display:grid;position:relative;row-gap:1.5rem;-moz-column-gap:1.5rem;column-gap:1.5rem}`;
const smQuery = "only screen and (max-width: 576px)";
const mdQuery = "only screen and (max-width: 768px)";
const lgQuery = "only screen and (max-width: 992px)";
const mediaQueryCollection = [
  { name: "sm", query: smQuery },
  { name: "md", query: mdQuery },
  { name: "lg", query: lgQuery }
];
const CssGrid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Define css grid template
   */
  templates;
  currentTemplate;
  disposeMediaQueryListener = [];
  mediaQueries = [];
  componentWillRender() {
    this.mediaQueries = mediaQueryCollection.map((query) => {
      const mediaQuery = window.matchMedia(query.query);
      const callback = () => {
        this.applyTemplate();
      };
      this.disposeMediaQueryListener.push(callback);
      mediaQuery.addEventListener("change", callback);
      return {
        ...query,
        mediaQuery
      };
    });
    this.applyTemplate();
  }
  disconnectedCallback() {
    this.mediaQueries.forEach((mq, index) => {
      mq.mediaQuery.removeEventListener("change", this.disposeMediaQueryListener[index]);
    });
  }
  findNextTemplate(type) {
    if (!this.templates) {
      return [];
    }
    const typeIndex = this.mediaQueries.findIndex((mq) => mq.name === type);
    const nextTemplate = this.templates[this.mediaQueries[typeIndex + 1].name];
    if (!nextTemplate) {
      return this.findNextTemplate(this.mediaQueries[typeIndex + 1].name);
    }
    return nextTemplate;
  }
  applyTemplate() {
    if (!this.templates) {
      return;
    }
    let active = this.mediaQueries.find((mq) => mq.mediaQuery.matches);
    if (!active) {
      active = this.mediaQueries[this.mediaQueries.length - 1];
    }
    const template = this.templates[active.name];
    if (template) {
      this.currentTemplate = template;
    } else {
      this.currentTemplate = this.findNextTemplate(active.name);
    }
  }
  render() {
    const style = {};
    if (this.currentTemplate && this.currentTemplate.length !== 0) {
      style["grid-template-areas"] = templateBuilder(this.currentTemplate);
    }
    return h(Host, { key: "ce62425807edab18277a84a12fbf0863be0ca61e", style }, h("slot", { key: "abb796f30cb136f9e43c1ab3a01a6e160df388e0" }));
  }
};
CssGrid.style = cssGridCss();
export {
  CssGrid as ix_css_grid
};
