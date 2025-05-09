import { r as registerInstance, h, H as Host } from "./global.e92797ea.js";
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
const cssGridCss = ":host{display:grid;position:relative;row-gap:1.5rem;-moz-column-gap:1.5rem;column-gap:1.5rem}";
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
    this.disposeMediaQueryListener = [];
    this.mediaQueries = [];
  }
  componentWillRender() {
    this.mediaQueries = mediaQueryCollection.map((query) => {
      const mediaQuery = window.matchMedia(query.query);
      const callback = () => {
        this.applyTemplate();
      };
      this.disposeMediaQueryListener.push(callback);
      mediaQuery.addEventListener("change", callback);
      return Object.assign(Object.assign({}, query), { mediaQuery });
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
    return h(Host, { key: "2ae68c413a5c560848f3a4a2df91098fe4515f40", style }, h("slot", { key: "08790f4bd0db622f9f78eaa3a0694748b4053fc1" }));
  }
};
CssGrid.style = cssGridCss;
export {
  CssGrid as ix_css_grid
};
