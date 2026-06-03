import "./global-DUJ9DtiD.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./init-DphxZyE4.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
const variants = ["light", "dark"];
let selectedVariant = "dark";
let useSystemTheme = false;
const toggleModeButton = document.getElementById("toggle-mode");
const themeSelect = document.getElementById("select-theme");
const toggleSystem = document.getElementById("system");
setTimeout(() => {
  themeSwitcher.setTheme("classic", selectedVariant);
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
  themeSwitcher.setColorSchema(variant);
  selectedVariant = variant;
});
toggleSystem.addEventListener("checkedChange", ({ detail: checked }) => {
  useSystemTheme = checked;
  if (checked) {
    themeSwitcher.setColorSchema("system");
  } else {
    themeSwitcher.setColorSchema(selectedVariant);
    themeSelect.value = selectedVariant;
  }
  updateControlsState();
});
updateControlsState();
