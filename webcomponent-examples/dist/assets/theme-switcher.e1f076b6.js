import "./index.352cb90e.js";
import "./index.c9bc42d6.js";
import { t as themeSwitcher } from "./theme-switcher-4b9e5cc2.7e06ab13.js";
import "./init.2f521542.js";
import "./logical-filter-operator-15696001.d3e8ce6a.js";
import "./flip-tile-state-051bb2fd.b2524409.js";
import "./modal-64e18970.5a849811.js";
import "./typed-event-a230184a.ccfb44d2.js";
import "./anime.es-185e9087.87a18bcc.js";
import "./animation-268dce50.df0d8da4.js";
import "./upload-file-state-532a36d3.458c962a.js";
(async function() {
  document.getElementById("toggleModeButton").addEventListener("click", () => {
    themeSwitcher.toggleMode();
  });
  document.getElementById("selectTheme").addEventListener("itemSelectionChange", ({ detail: [theme] }) => {
    themeSwitcher.setTheme(theme);
  });
  themeSwitcher.themeChanged.on((theme) => console.log(theme));
})();
