class TypedEvent {
  listeners = [];
  listenersOncer = [];
  on = (listener) => {
    this.listeners.push(listener);
    return {
      dispose: () => this.off(listener)
    };
  };
  once = (listener) => {
    this.listenersOncer.push(listener);
  };
  off = (listener) => {
    const callbackIndex = this.listeners.indexOf(listener);
    if (callbackIndex > -1) {
      this.listeners.splice(callbackIndex, 1);
    }
  };
  emit = (event) => {
    this.listeners.forEach((listener) => listener(event));
    if (this.listenersOncer.length > 0) {
      const toCall = this.listenersOncer;
      this.listenersOncer = [];
      toCall.forEach((listener) => listener(event));
    }
  };
  pipe = (te) => {
    return this.on((e) => te.emit(e));
  };
}
export {
  TypedEvent as T
};
