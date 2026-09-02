import { T as TypedEvent } from "./typed-event-CWshStHZ-DBYwEilm.js";
class MenuService {
  #menuElement = null;
  #menuExpandChange = new TypedEvent();
  #isPinned = false;
  #expandChangeListener = null;
  register(menuElement) {
    if (this.#menuElement) {
      console.warn("Menu already defined");
      return;
    }
    this.#menuElement = menuElement;
    this.#expandChangeListener = (event) => {
      this.#menuExpandChange.emit(event.detail);
    };
    this.#menuElement.addEventListener("expandChange", this.#expandChangeListener);
  }
  unregister(menuElement) {
    if (this.#menuElement === menuElement) {
      if (this.#expandChangeListener) {
        menuElement.removeEventListener("expandChange", this.#expandChangeListener);
      }
      this.#expandChangeListener = null;
      this.#menuElement = null;
    }
  }
  setIsPinned(pinned) {
    this.#isPinned = pinned;
  }
  async open() {
    if (this.#menuElement) {
      this.#menuElement.toggleMenu(true);
      return true;
    }
    return false;
  }
  async close() {
    if (this.#menuElement) {
      this.#menuElement.toggleMenu(false);
      return true;
    }
    return false;
  }
  async toggle() {
    if (this.#menuElement) {
      this.#menuElement.toggleMenu();
      return true;
    }
    return false;
  }
  get nativeElement() {
    return this.#menuElement;
  }
  get expandChange() {
    return this.#menuExpandChange;
  }
  get isPinned() {
    return this.#isPinned;
  }
}
const menuController = new MenuService();
export {
  menuController as m
};
