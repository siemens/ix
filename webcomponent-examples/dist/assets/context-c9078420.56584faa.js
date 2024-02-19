import { T as TypedEvent } from "./typed-event-ad6484c5.eb731a3b.js";
function createContext(name, initialValue) {
  return {
    name,
    initialValue
  };
}
class ContextEvent extends Event {
  constructor(context, callback, subscribe) {
    super("context-request", { bubbles: true, composed: true });
    this.context = context;
    this.callback = callback;
    this.subscribe = subscribe;
  }
}
function useContextConsumer(hostElement, context, onContextReceived, subscribe) {
  let _unsubscribe;
  hostElement.dispatchEvent(new ContextEvent(context, (ctx, unSub) => {
    onContextReceived(ctx, unSub);
    _unsubscribe = unSub;
  }, subscribe));
  return {
    unsubscribe: () => {
      _unsubscribe();
    }
  };
}
function useContextProvider(hostElement, context, contextPayload) {
  const requestContext = new TypedEvent();
  const updateContext = new TypedEvent();
  const requests = /* @__PURE__ */ new Set();
  hostElement.addEventListener("context-request", (requestContextEvent) => {
    if ((requestContextEvent === null || requestContextEvent === void 0 ? void 0 : requestContextEvent.context.name) !== context.name) {
      return;
    }
    requestContextEvent.stopPropagation();
    if (requestContextEvent.subscribe) {
      requests.add(requestContextEvent);
    }
    requestContext.emit(requestContextEvent);
    if (contextPayload) {
      requestContextEvent.callback(contextPayload, () => {
        requests.delete(requestContextEvent);
      });
    }
  });
  updateContext.on((context2) => {
    requests.forEach((r) => r.callback(context2, () => {
      requests.delete(r);
    }));
  });
  return {
    emit: (context2) => {
      updateContext.emit(context2);
    }
  };
}
const closestIxMenu = (element) => {
  const menuElement = element.closest("ix-menu");
  return menuElement;
};
const ApplicationLayoutContext = createContext("application-layout-context", {
  hideHeader: false,
  host: null,
  sidebar: false
});
export {
  ApplicationLayoutContext as A,
  useContextConsumer as a,
  closestIxMenu as c,
  useContextProvider as u
};
