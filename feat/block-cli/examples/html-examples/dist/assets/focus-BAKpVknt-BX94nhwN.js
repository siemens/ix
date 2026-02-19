import { a as addDisposableEventListener } from "./disposable-event-listener-CKoABG1h-D5kNsG5G.js";
class ArrowFocusController {
  constructor(items, container, callback) {
    this.wrap = false;
    this.items = items;
    this.container = container;
    this.callback = callback;
    this.keyListener = addDisposableEventListener(container, "keydown", (e) => this.onKeyDown(e));
  }
  getActiveIndex() {
    if (!document.activeElement) {
      return -1;
    }
    return this.items.indexOf(document.activeElement);
  }
  onKeyDown(e) {
    var _a, _b, _c, _d;
    const activeIndex = this.getActiveIndex();
    if (activeIndex < 0) {
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        if (activeIndex < this.items.length - 1) {
          e.preventDefault();
          (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, activeIndex + 1);
        } else if (this.wrap) {
          e.preventDefault();
          (_b = this.callback) === null || _b === void 0 ? void 0 : _b.call(this, 0);
        }
        break;
      case "ArrowUp":
        {
          if (activeIndex > 0) {
            e.preventDefault();
            (_c = this.callback) === null || _c === void 0 ? void 0 : _c.call(this, activeIndex - 1);
          } else if (this.wrap && activeIndex === 0) {
            e.preventDefault();
            (_d = this.callback) === null || _d === void 0 ? void 0 : _d.call(this, this.items.length - 1);
          }
        }
        break;
    }
  }
  disconnect() {
    if (this.keyListener) {
      this.keyListener();
    }
    this.container = void 0;
    this.callback = void 0;
  }
}
export {
  ArrowFocusController as A
};
