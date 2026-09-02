import "./global-Do6maBom.js";
import { b as setToastPosition, t as toast } from "./index-8DkqbGmK.js";
import "./init-BB6hGSJy.js";
import "./modal-DaGSr1j4-BA-0pEIr.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-BqeSHO6C-CazTJry4.js";
import "./index-BeX6RWvV-CXzUIwMU.js";
(async function() {
  await window.customElements.whenDefined("ix-toast-container");
  setToastPosition("top-right");
  document.getElementById("toastButton").addEventListener("click", () => {
    toast({
      message: "My toast message!"
    });
  });
})();
