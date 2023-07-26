import "./index.6e87f0b8.js";
import "./index.a8c2f1a2.js";
import { t as themeSwitcher } from "./theme-switcher-7498e4f2.143499f1.js";
import "./init.be610ecb.js";
import "./icon-8ee43566.87e71ee7.js";
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
