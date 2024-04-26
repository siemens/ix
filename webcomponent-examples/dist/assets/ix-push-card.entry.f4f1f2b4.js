import { r as registerInstance, h, H as Host } from "./index.918151cc.js";
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
    return h(Host, { key: "e24565973d07f9e229c36913ca3ac89a50fa203a" }, h("ix-card", { key: "44282cb66fe975ec987c732564b1a1b2f157fb5b", variant: this.variant }, h("ix-card-content", { key: "a81102518c997300dd706eaaf9be2c409dc2cb57" }, h("ix-card-title", { key: "cfe94c332de47b3457f713e601d5528da88eb9d6" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32" }) : null, h("span", { key: "70ae6659d04f30ba68a58f8cdf0fde3f33c3de01", class: "notification" }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { key: "b16c8760f377f9f5118cf2d6b09f0ed831c4d7bd", name: "title-action" })), h("ix-typography", { key: "861cc81ab636b168fbd6f931095d5128a2a4732b", color, format: "h4" }, this.heading), h("ix-typography", { key: "310464f9afd7994ccc5c51a8154387e59205b2bb", color }, this.subheading)), h("ix-card-accordion", { key: "e070cee2f6ded1b56b92d3fc1ed5028cfe2d0d5d", collapse: this.collapse }, h("slot", { key: "d8b198392bd09b45d2f0c6f6579e333c5f4d96e0" }))));
  }
};
PushCard.style = IxPushCardStyle0;
export {
  PushCard as ix_push_card
};
