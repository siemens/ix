import { r as registerInstance, h, H as Host } from "./global.9430376f.js";
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
    return h(Host, { key: "9ba9fd8e6cc9f2b74e89fbbcd0c09a04aca45ac2" }, h("ix-card", { key: "913618b3fc69c1e59c3bbeb4c92569b2754ff3ae", variant: this.variant }, h("ix-card-content", { key: "bb75a940ce3ac891fe947f4ed9e542c36a492f92" }, h("ix-card-title", { key: "37f4faab2368f341dd835fffe64b5915e1c4b322" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32" }) : null, h("span", { key: "42059a2ed174f15fdcce1ddb599bc831afade5b1", class: "notification" }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { key: "9e3b8df6148f3b8e3d577d8ece5253b14c85a0dd", name: "title-action" })), h("ix-typography", { key: "b7473e9fd9fdaee3045ec4884544469a9a6457fe", color, format: "h4" }, this.heading), h("ix-typography", { key: "26c212e7f6111df4d353525fda6b3a76ee7dea3c", color }, this.subheading)), h("ix-card-accordion", { key: "a779591ee7405f4a725f1c04abbc7223064ee885", collapse: this.collapse }, h("slot", { key: "5d42faa67c254a1d8541c525cb8e0e08e6b0d095" }))));
  }
};
PushCard.style = IxPushCardStyle0;
export {
  PushCard as ix_push_card
};
