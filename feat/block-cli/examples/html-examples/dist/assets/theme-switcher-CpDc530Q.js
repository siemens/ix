import "./global-BlVZeLef.js";
import "./index-Clh-rS1I.js";
import { t as themeSwitcher } from "./theme-switcher-DRqJGlG2-DVSIP9tc.js";
import "./init-DI8ZEhG0.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-DCXtePY2-Cy6rmdf-.js";
import "./index-8HpPmDK_-DinFJk0z.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./animation-C5MWUgDN-BXCJNYHu.js";
const variants = ["light", "dark"];
let selectedVariant = "dark";
let useSystemTheme = false;
const toggleModeButton = document.getElementById("toggle-mode");
const themeSelect = document.getElementById("select-theme");
const toggleSystem = document.getElementById("system");
setTimeout(() => {
  themeSwitcher.setTheme("classic");
  themeSwitcher.setVariant(selectedVariant);
});
for (const variant of variants) {
  const item = document.createElement("ix-select-item");
  item.label = variant;
  item.value = variant;
  themeSelect.appendChild(item);
}
themeSelect.value = selectedVariant;
const updateControlsState = () => {
  toggleModeButton.disabled = useSystemTheme;
  themeSelect.disabled = useSystemTheme;
};
toggleModeButton.addEventListener("click", () => {
  if (useSystemTheme) {
    return;
  }
  themeSwitcher.toggleMode();
  selectedVariant = selectedVariant === "light" ? "dark" : "light";
  themeSelect.value = selectedVariant;
});
themeSelect.addEventListener("valueChange", ({ detail: variant }) => {
  if (useSystemTheme) {
    return;
  }
  themeSwitcher.setVariant(variant);
  selectedVariant = variant;
});
toggleSystem.addEventListener("checkedChange", ({ detail: checked }) => {
  useSystemTheme = checked;
  if (checked) {
    themeSwitcher.setVariant();
  } else {
    themeSwitcher.setVariant(selectedVariant);
    themeSelect.value = selectedVariant;
  }
  updateControlsState();
});
updateControlsState();
