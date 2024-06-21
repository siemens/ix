import "./global.8b5b8f81.js";
import "./init.fa571866.js";
const application = document.querySelector("ix-application");
application.appSwitchConfig = {
  i18nAppSwitch: "Switch to Application",
  currentAppId: "demo-app-2",
  apps: [
    {
      id: "demo-app-1",
      name: "Floor App",
      iconSrc: "https://www.svgrepo.com/show/530661/genetic-data.svg",
      url: "https://ix.siemens.io/",
      description: "Example description for Floor app",
      target: "_self"
    },
    {
      id: "demo-app-2",
      name: "Calculator App",
      iconSrc: "https://www.svgrepo.com/show/530661/genetic-data.svg",
      url: "https://ix.siemens.io/",
      description: "Example description for Calculator app",
      target: "_self"
    }
  ]
};
function waitForElement(checkFn, callback) {
  const intervalId = setInterval(function() {
    const element = checkFn();
    if (element) {
      clearInterval(intervalId);
      callback(element);
    }
  }, 100);
}
function getElementPosition(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
    rect
  };
}
function pulseOnElement(queryFunction) {
  const pulseElement = document.createElement("DIV");
  pulseElement.style.position = "absolute";
  pulseElement.innerText = "";
  pulseElement.style.zIndex = 1e4;
  pulseElement.style.pointerEvents = "none";
  const style = document.createElement("style");
  style.innerHTML = `
  .pulse-element {
    background: transparent;
    height: 20px;
    width: 20px;

    box-shadow: 0 0 0 0 rgba(0, 204, 204, 1);
    transform: scale(1);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 204, 204, 0.8);
    }

    70% {
      transform: scale(1.25);
      box-shadow: 0 0 0 10px rgba(0, 204, 204, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 204, 204, 0);
    }
  }
  `;
  document.body.appendChild(pulseElement);
  document.body.appendChild(style);
  waitForElement(
    queryFunction,
    function(element) {
      const elementPosition = getElementPosition(element);
      pulseElement.style.top = elementPosition.top + "px";
      pulseElement.style.left = elementPosition.left + "px";
      pulseElement.style.width = elementPosition.rect.width + "px";
      pulseElement.style.height = elementPosition.rect.height + "px";
      pulseElement.classList.add("pulse-element");
    }
  );
}
pulseOnElement(
  () => document.querySelector("ix-application-header").shadowRoot.querySelector("ix-icon-button.app-switch")
);
(async () => {
  await window.customElements.whenDefined("ix-application");
  const menu = document.querySelector("ix-application");
  menu.breakpoints = ["md"];
})();
