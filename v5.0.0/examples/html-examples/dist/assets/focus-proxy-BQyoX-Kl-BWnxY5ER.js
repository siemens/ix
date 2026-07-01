import { h } from "./global-C8IWpzMv.js";
const FocusProxy = (props) => {
  return h("ul", { class: "proxy-list", role: "listbox", id: `${props.hostId}-${PROXY_LIST_ID_SUFFIX}`, ...props.otherProps });
};
const PROXY_LIST_ID_SUFFIX = "proxy-listbox";
const PROXY_LISTITEM_ID_SUFFIX = "proxy-listbox-item";
const updateFocusProxyList = (proxyListElement, items, modifyProxyElement) => {
  if (proxyListElement && items.length > 0) {
    const itemRect = items[0].getBoundingClientRect();
    const containerRect = (proxyListElement.offsetParent ?? proxyListElement.parentElement)?.getBoundingClientRect();
    const top = containerRect ? Math.max(0, itemRect.top - containerRect.top - itemRect.height + 8) : 0;
    proxyListElement.innerHTML = "";
    proxyListElement.style.top = top + "px";
    proxyListElement.style.padding = "0px";
    proxyListElement.style.margin = "0px";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.id = item.id + "-" + PROXY_LISTITEM_ID_SUFFIX;
      if (modifyProxyElement) {
        modifyProxyElement(item, li);
      }
      item.ariaHidden = "true";
      proxyListElement.appendChild(li);
    });
  }
};
export {
  FocusProxy as F,
  PROXY_LISTITEM_ID_SUFFIX as P,
  PROXY_LIST_ID_SUFFIX as a,
  updateFocusProxyList as u
};
