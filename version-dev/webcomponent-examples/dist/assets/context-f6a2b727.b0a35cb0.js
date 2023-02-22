import { T as TypedEvent } from "./typed-event-a230184a.ccfb44d2.js";
class MenuService {
  constructor() {
    this.menuElement = null;
    this.menuExpandChange = new TypedEvent();
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
}
const menuController = new MenuService();
function isBasicNavigationLayout(element) {
  return element && element.tagName === "IX-BASIC-NAVIGATION";
}
const hostContext = (selector, element) => {
  return element.closest(selector);
};
export {
  hostContext as h,
  isBasicNavigationLayout as i,
  menuController as m
};
