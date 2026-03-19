import { h } from "./global-C_dy4gBz.js";
const FocusProxy = (props) => {
  return h("ul", { class: "proxy-list", role: "listbox", id: `${props.hostId}-${PROXY_LIST_ID_SUFFIX}`, ...props.otherProps });
};
const PROXY_LIST_ID_SUFFIX = "proxy-listbox";
const PROXY_LISTITEM_ID_SUFFIX = "proxy-listbox-item";
const updateFocusProxyList = (proxyListElement, items, modifyProxyElement) => {
  if (proxyListElement && items.length > 0) {
    const top = items[0].getBoundingClientRect().top - items[0].getBoundingClientRect().height + 8;
    proxyListElement.innerHTML = "";
    proxyListElement.style.top = top + "px";
    proxyListElement.style.padding = "0px";
    proxyListElement.style.margin = "0px";
    proxyListElement.innerHTML = "";
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
