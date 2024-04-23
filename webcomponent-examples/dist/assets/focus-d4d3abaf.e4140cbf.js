class ArrowFocusController {
  constructor(items, container, callback) {
    this.wrap = false;
    this.keyListenerBind = this.keyListener.bind(this);
    this.items = items;
    this.container = container;
    this.callback = callback;
    this.container.addEventListener("keydown", this.keyListenerBind);
  }
  keyListener(e) {
    const activeIndex = this.items.indexOf(document.activeElement);
    if (activeIndex < 0) {
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        if (activeIndex < this.items.length - 1) {
          e.preventDefault();
          if (this.callback) {
            this.callback(activeIndex + 1);
          }
        } else if (this.wrap) {
          e.preventDefault();
          if (this.callback) {
            this.callback(0);
          }
        }
        break;
      case "ArrowUp":
        {
          if (activeIndex > 0) {
            e.preventDefault();
            if (this.callback) {
              this.callback(activeIndex - 1);
            }
          } else if (this.wrap && activeIndex === 0) {
            e.preventDefault();
            if (this.callback) {
              this.callback(this.items.length - 1);
            }
          }
        }
        break;
    }
  }
  disconnect() {
    this.container.removeEventListener("keydown", this.keyListenerBind);
  }
}
export {
  ArrowFocusController as A
};
