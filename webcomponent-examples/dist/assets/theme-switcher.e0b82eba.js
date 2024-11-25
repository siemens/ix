import "./global.2bfd6008.js";
import "./index.50971e87.js";
import { t as themeSwitcher$1 } from "./theme-switcher-5fcf712d.42146bb7.js";
import "./init.aa12a02f.js";
import "./logical-filter-operator-d793d1c3.ce417adc.js";
import "./flip-tile-state-76dd224a.ffe63233.js";
import "./upload-file-state-de676cd5.96d9c6b3.js";
import "./modal-101eef04.04114a11.js";
import "./typed-event-ad6484c5.eb731a3b.js";
import "./animation-4a73b1c3.59b7eda0.js";
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
  themeSelect.addEventListener(
    "itemSelectionChange",
    ({ detail: [theme] }) => {
      themeSwitcher$1.setTheme(theme);
      selectedTheme = theme;
    }
  );
  const toggleSystem = document.getElementById("system");
  toggleSystem.addEventListener("change", ({ target }) => {
    if (target.checked) {
      themeSwitcher$1.setVariant();
      return;
    }
    themeSwitcher$1.setTheme(selectedTheme);
  });
})();
