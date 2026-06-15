import "./global-B8nXsUf-.js";
/* empty css              */
import "./init-DAI7i65D.js";
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
