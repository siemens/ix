import "./index.668348d5.js";
import "./index.41a6c2b0.js";
import { t as themeSwitcher } from "./theme-switcher-7498e4f2.143499f1.js";
import "./init.a0e9266e.js";
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
