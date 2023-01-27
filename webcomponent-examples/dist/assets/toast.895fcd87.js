import "./index.e66f90c3.js";
import { t as toast } from "./index.3a215ba5.js";
import "./init.3ba278a9.js";
import "./logical-filter-operator-1bf83315.1b3b3530.js";
import "./flip-tile-state-28a1f8ce.23318fa9.js";
import "./modal-df0a62f2.a926fd1e.js";
import "./typed-event-ab58c27e.6340cd97.js";
import "./anime.es-185e9087.87a18bcc.js";
import "./animation-b667a4c4.18fe34bf.js";
import "./upload-file-state-631bb8a2.5434751f.js";
import "./theme-switcher-9ecc9b69.05e9430f.js";
(async function() {
  await window.customElements.whenDefined("ix-toast-container");
  document.getElementById("toastButton").addEventListener("click", () => {
    toast({
      message: "My toast message!"
    });
  });
})();
