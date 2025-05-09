import { r as registerInstance, h, H as Host } from "./global.7dd975c7.js";
const pushCardCss = ":host{display:block;position:relative}:host ix-card{cursor:default}:host ix-card-accordion{cursor:pointer}:host .icon{height:2.5rem;width:2.5rem}:host .notification{font-size:40px}:host ix-card-content{height:11rem}";
const IxPushCardStyle0 = pushCardCss;
const PushCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.icon = void 0;
    this.notification = void 0;
    this.heading = void 0;
    this.subheading = void 0;
    this.variant = "insight";
    this.collapse = true;
  }
  render() {
    var _a;
    const color = this.variant === "insight" || this.variant === "notification" ? "std" : void 0;
    return h(Host, { key: "4927262c7896d5db2eb939fa8337ebadb6774229" }, h("ix-card", { key: "03336f0cc37dde84b0a00ac7fd3eab26258e2ac5", variant: this.variant }, h("ix-card-content", { key: "362537f589ab27e6a2a2ac4e732e384b2f08bb52" }, h("ix-card-title", { key: "df79854b0f6b160938c5cb8111cb68e049dc2a21" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32" }) : null, h("span", { key: "96a30b27bd3479dccc86974a0c356cc20db07952", class: "notification" }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { key: "8c5a4c60df7d7b8785bbb71ea121d9966b531b6f", name: "title-action" })), h("ix-typography", { key: "193883ef7009f3f5b28505333ad4457f9a76bf24", color, format: "h4" }, this.heading), h("ix-typography", { key: "1695ab207b51d282b96311b08fd0f1dc01daac36", color }, this.subheading)), h("ix-card-accordion", { key: "ae91fcfe96e7d56e47d6f4579c11e959ceb84f5f", collapse: this.collapse }, h("slot", { key: "f51b6187302421c78a9a81085609b5f96f6017d4" }))));
  }
};
PushCard.style = IxPushCardStyle0;
export {
  PushCard as ix_push_card
};
