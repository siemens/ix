import { r as registerInstance, h, H as Host } from "./global.00f6d77e.js";
const pushCardCss = ":host{display:block;position:relative}:host .icon{transform:scale(1.25)}:host .notification{font-size:40px}:host ix-card-content{height:11rem}";
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
    return h(Host, { key: "34a4d07dbc15446fbe675b2a834a053e59c1f21f" }, h("ix-card", { key: "992157a1b7d8653235e2916e8b082f497633e045", variant: this.variant }, h("ix-card-content", { key: "bb8f46360e57aac8cc6ed5a877504feb7c0409ce" }, h("ix-card-title", { key: "4297089e23ad20e63c612bc380e2abaade600197" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32" }) : null, h("span", { key: "8136c60187524879956d716b1bcf430c4e54a868", class: "notification" }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { key: "73aadb4be0dfb3e0bce38abb5a0ce854ce69b9d0", name: "title-action" })), h("ix-typography", { key: "8cb6869642d6ca8ea1ce86c1ed23f64af4896da0", color, format: "h4" }, this.heading), h("ix-typography", { key: "ffa93b10369674e7f8b369fc99d1e4f78edc0475", color }, this.subheading)), h("ix-card-accordion", { key: "267d9286d08e1020a65b7f40ee79dfeba741f2ee", collapse: this.collapse }, h("slot", { key: "df56775c48adc350b6554ff13347d865d9b2ccff" }))));
  }
};
PushCard.style = IxPushCardStyle0;
export {
  PushCard as ix_push_card
};
