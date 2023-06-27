import "./index.c87d935b.js";
import "./index.1486dff4.js";
import { t as themeSwitcher } from "./theme-switcher-7498e4f2.143499f1.js";
import "./init.c2e061d0.js";
import "./icon-c659fc0f.a670d01b.js";
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
