import "./global-CFt3Lh3W.js";
/* empty css              */
import "./init-0MVmv6RF.js";
import "./index-CgUi6DzV-D9U7VN9L.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DCCkv1ZQ-DZnlOMEt.js";
await globalThis.customElements.whenDefined("ix-tabs");
const container = document.querySelector(".tabs");
const tabs = container.querySelector("ix-tabs");
const updateVisibleContent = (tabKey) => {
  const contentList = container.querySelectorAll("[data-tab-content]");
  contentList.forEach((content) => {
    content.classList.toggle(
      "show",
      content.dataset.tabContent === tabKey
    );
  });
};
updateVisibleContent(tabs.activeTabKey);
tabs.addEventListener("tabChange", (event) => {
  updateVisibleContent(event.detail);
});
