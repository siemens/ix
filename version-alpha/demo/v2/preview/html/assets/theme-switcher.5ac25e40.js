import "./global.78f61b49.js";
import "./index.1a6c2bf1.js";
import { t as themeSwitcher$1 } from "./theme-switcher-CA3k28fo.db6435f7.js";
import "./init.d5e03d48.js";
import "./logical-filter-operator-BH3f5fa3.777c0249.js";
import "./flip-tile-state-BQ6999e5.70579bb3.js";
import "./upload-file-state-BGzrnl_l.166f4809.js";
import "./modal-DUew4SCE.40a294ca.js";
import "./typed-event-BdCnOrqW.51d2f30a.js";
import "./animation-Dp15M30K.7b5f0f8a.js";
const themeSwitcher = "";
(async function() {
  const themes = ["theme-classic-light", "theme-classic-dark"];
  let selectedTheme = themes[1];
  setTimeout(() => {
    themeSwitcher$1.setTheme(selectedTheme);
  });
  const toggleModeButton = document.getElementById("toggle-mode");
  toggleModeButton.addEventListener("click", () => {
    themeSwitcher$1.toggleMode();
  });
  const themeSelect = document.getElementById("select-theme");
  themes.forEach((theme) => {
    const item = document.createElement("ix-select-item");
    item.label = theme;
    item.value = theme;
    themeSelect.appendChild(item);
  });
  themeSelect.value = selectedTheme;
  themeSelect.addEventListener("valueChange", ({ detail: theme }) => {
    themeSwitcher$1.setTheme(theme);
    selectedTheme = theme;
  });
  const toggleSystem = document.getElementById("system");
  toggleSystem.addEventListener("change", ({ target }) => {
    if (target.checked) {
      themeSwitcher$1.setVariant();
      return;
    }
    themeSwitcher$1.setTheme(selectedTheme);
  });
})();
