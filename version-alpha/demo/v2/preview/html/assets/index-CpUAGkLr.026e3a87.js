import "./animation-Dp15M30K.7b5f0f8a.js";
import { a as showModal } from "./modal-DUew4SCE.40a294ca.js";
async function showAppSwitch(config) {
  const modal = document.createElement("ix-application-switch-modal");
  modal.config = config;
  const result = await showModal({
    content: modal,
    size: "840",
    closeOnBackdropClick: true
  });
  const appSwitchElement = result.htmlElement.querySelector("ix-application-switch-modal");
  return (updateAppSwitchConfig) => {
    if (!appSwitchElement) {
      console.warn("ix-application-switch-modal element not found!");
      return;
    }
    appSwitchElement.config = updateAppSwitchConfig;
  };
}
export {
  showAppSwitch as s
};
