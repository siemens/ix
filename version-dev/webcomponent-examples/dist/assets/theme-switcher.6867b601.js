import "./index.f1cc59d7.js";
import "./index.8714333f.js";
import { t as themeSwitcher } from "./theme-switcher-7498e4f2.143499f1.js";
import "./init.ec18ea20.js";
import "./icon-f54a8bc4.d784f183.js";
import "./logical-filter-operator-92531263.182856a9.js";
import "./flip-tile-state-db31345f.fa15ac0c.js";
import "./upload-file-state-532a36d3.458c962a.js";
import "./modal-68c6d3f6.b6b54fe0.js";
import "./typed-event-a230184a.ccfb44d2.js";
import "./animation-268dce50.df0d8da4.js";
(async function() {
  document.getElementById("toggleModeButton").addEventListener("click", () => {
    themeSwitcher.toggleMode();
  });
  document.getElementById("selectTheme").addEventListener("itemSelectionChange", ({ detail: [theme] }) => {
    themeSwitcher.setTheme(theme);
  });
  themeSwitcher.themeChanged.on((theme) => console.log(theme));
})();
