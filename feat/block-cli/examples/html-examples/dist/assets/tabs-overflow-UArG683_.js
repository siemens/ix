import "./global-CtBDOAVb.js";
/* empty css              */
import "./init-BauzXIH0.js";
await globalThis.customElements.whenDefined("ix-tabs");
const container = document.querySelector(".tabs");
const tabs = container.querySelectorAll("ix-tab-item[data-tab-id]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const contentList = container.querySelectorAll("[data-tab-content]");
    contentList.forEach((content) => {
      content.classList.toggle("show", content.dataset.tabContent === tab.dataset.tabId);
    });
  });
});
