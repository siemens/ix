import { r as registerInstance, h, H as Host } from "./global.aa474cf6.js";
const pushCardCss = ":host{display:block;position:relative}:host ix-card{cursor:default}:host ix-card-accordion{cursor:pointer}:host .icon{height:2.5rem;width:2.5rem}:host .notification{font-size:40px}:host ix-card-content{height:11rem}";
const PushCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "outline";
    this.collapse = true;
  }
  render() {
    var _a;
    return h(Host, { key: "729eb7aa95e11b35f41a8fbb3257f2d430022e43" }, h("ix-card", { key: "0ba1030c9440bb5e90190f532bb303ae6e6598b1", variant: this.variant }, h("ix-card-content", { key: "30425a6f9279103ea821f031ad6f41bbc9942185" }, h("ix-card-title", { key: "7aa2d8165b766d32cb4b8ecdf232502c91300a4a" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32" }) : null, h("span", { key: "b73e8e8ead6c6a54bfbab5f8a71338a2b9e278a6", class: "notification" }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { key: "848b45aac86c3a48e673300ff377b595caf7e678", name: "title-action" })), h("ix-typography", { key: "69f3127aa6fb433d503b302ea8ecccde980dc23b", format: "h4" }, this.heading), h("ix-typography", { key: "19518c77b67d53fd71f060627ae6c49527639bfb" }, this.subheading)), h("ix-card-accordion", { key: "54d7cdf97845183ef112afdc83089f2cdc8e82bf", collapse: this.collapse }, h("slot", { key: "648f716ecf8be35f43746d453780a5a2a0e12ae7" }))));
  }
};
PushCard.style = pushCardCss;
export {
  PushCard as ix_push_card
};
