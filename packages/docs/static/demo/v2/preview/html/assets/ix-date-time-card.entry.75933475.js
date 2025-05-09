import { r as registerInstance, h, H as Host } from "./global.e92797ea.js";
const dateTimeCardCss = ":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .card{background-color:var(--theme-menu--background);width:100%;box-shadow:none;border:none;border-radius:unset;display:flex;flex-direction:column}:host .card.standaloneAppearance{box-shadow:var(--theme-shadow-4);border-radius:0.25rem}:host .card.rounded{border-radius:4px}:host .card.left{border-radius:4px 0 0 4px;height:100%}:host .card.right{border-radius:0 4px 4px 0;height:100%}:host .card .header{padding:1rem;flex:0 1 auto}:host .card .separator{border:1px solid var(--theme-datepicker-separator--background);width:100%;flex:0 1 auto}:host .card .content{padding:0 1rem 1rem 1rem;flex:1 1 auto;display:flex;flex-direction:column;justify-content:center}";
const DateTimeCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.individual = true;
    this.corners = "rounded";
  }
  cardClasses() {
    var _a;
    return {
      card: true,
      standaloneAppearance: (_a = this.standaloneAppearance) !== null && _a !== void 0 ? _a : this.individual,
      rounded: this.corners === "rounded",
      left: this.corners === "left",
      right: this.corners === "right"
    };
  }
  render() {
    return h(Host, { key: "9310b246c56469a92bf77d955c88bb4005d6c5a1" }, h("div", { key: "041094bc9a9a9049bbcdc5f24f4987ee547bb7b0", class: this.cardClasses() }, h("div", { key: "80c76215cebf46bb7cb9cb3caf0ff74e9dc6cbda", class: "header" }, h("slot", { key: "e1844c4fb35169db3a9077bc6dcabd260a99629f", name: "header" })), h("div", { key: "49cbbfa20d3a2e2751a974152efb03ecaa74b128", class: "separator" }), h("div", { key: "6583ffd0762ad265b6e2c8ba2a536af743669abe", class: "content" }, h("slot", { key: "ee6202f5162c4972ee04cf548aa0e541e62f994d" }))));
  }
};
DateTimeCard.style = dateTimeCardCss;
export {
  DateTimeCard as ix_date_time_card
};
