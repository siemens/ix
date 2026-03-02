class TypedEvent {
  constructor() {
    this.listeners = [];
    this.listenersOncer = [];
    this.on = (listener) => {
      this.listeners.push(listener);
      return {
        dispose: () => this.off(listener)
      };
    };
    this.once = (listener) => {
      this.listenersOncer.push(listener);
    };
    this.off = (listener) => {
      const callbackIndex = this.listeners.indexOf(listener);
      if (callbackIndex > -1) {
        this.listeners.splice(callbackIndex, 1);
      }
    };
    this.emit = (event) => {
      this.listeners.forEach((listener) => listener(event));
      if (this.listenersOncer.length > 0) {
        const toCall = this.listenersOncer;
        this.listenersOncer = [];
        toCall.forEach((listener) => listener(event));
      }
    };
    this.pipe = (te) => {
      return this.on((e) => te.emit(e));
    };
  }
}
export {
  TypedEvent as T
};
