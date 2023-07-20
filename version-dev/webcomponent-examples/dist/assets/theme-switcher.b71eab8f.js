import "./index.eca5b8a3.js";
import "./index.9fc97e6d.js";
import { t as themeSwitcher } from "./theme-switcher-7498e4f2.143499f1.js";
import "./init.647ab6c1.js";
import "./icon-8ee43566.33b23426.js";
import "./logical-filter-operator-92531263.182856a9.js";
import "./flip-tile-state-db31345f.fa15ac0c.js";
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
