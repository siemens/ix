import "./global.aa474cf6.js";
import "./init.8fde940e.js";
const mapNav = document.querySelector("ix-map-navigation");
const buttonOpenOverlay = document.getElementById("btn-open-overlay");
buttonOpenOverlay.addEventListener("click", () => {
  const overlay = document.createElement("ix-map-navigation-overlay");
  overlay.slot = "overlay";
  overlay.name = "Custom overlay";
  overlay.icon = "bulb";
  const overlayContent = document.createElement("ix-content");
  overlayContent.textContent = "Overlay content";
  overlay.appendChild(overlayContent);
  mapNav.appendChild(overlay);
  overlay.addEventListener("closeClick", (e) => {
    overlay.parentNode.removeChild(overlay);
  });
});
