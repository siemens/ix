import "./index.8b470164.js";
import "./index.5b0143d3.js";
import { t as themeSwitcher } from "./theme-switcher-7498e4f2.143499f1.js";
import "./init.4f47174f.js";
import "./icon-21211f80.0c9aa967.js";
import "./logical-filter-operator-92531263.182856a9.js";
import "./flip-tile-state-051bb2fd.b2524409.js";
import "./upload-file-state-532a36d3.458c962a.js";
import "./typed-event-a230184a.ccfb44d2.js";
(async function() {
  document.getElementById("toggleModeButton").addEventListener("click", () => {
    themeSwitcher.toggleMode();
  });
  document.getElementById("selectTheme").addEventListener("itemSelectionChange", ({ detail: [theme] }) => {
    themeSwitcher.setTheme(theme);
  });
  themeSwitcher.themeChanged.on((theme) => console.log(theme));
})();
