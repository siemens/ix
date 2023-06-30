import { T as TypedEvent } from "./typed-event-a230184a.ccfb44d2.js";
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MenuService_isPinned;
class MenuService {
  constructor() {
    this.menuElement = null;
    this.menuExpandChange = new TypedEvent();
    _MenuService_isPinned.set(this, false);
  }
  register(menuElement) {
    if (this.menuElement) {
      console.warn("Menu already defined");
      return;
    }
    this.menuElement = menuElement;
    this.menuElement.addEventListener("expandChange", (event) => {
      this.menuExpandChange.emit(event.detail);
    });
  }
  setIsPinned(pinned) {
    __classPrivateFieldSet(this, _MenuService_isPinned, pinned, "f");
  }
  async open() {
    if (this.menuElement) {
      this.menuElement.toggleMenu(true);
      return true;
    }
    return false;
  }
  async close() {
    if (this.menuElement) {
      this.menuElement.toggleMenu(false);
      return true;
    }
    return false;
  }
  async toggle() {
    if (this.menuElement) {
      this.menuElement.toggleMenu();
      return true;
    }
    return false;
  }
  get nativeElement() {
    return this.menuElement;
  }
  get expandChange() {
    return this.menuExpandChange;
  }
  get isPinned() {
    return __classPrivateFieldGet(this, _MenuService_isPinned, "f");
  }
}
_MenuService_isPinned = /* @__PURE__ */ new WeakMap();
const menuController = new MenuService();
export {
  menuController as m
};
