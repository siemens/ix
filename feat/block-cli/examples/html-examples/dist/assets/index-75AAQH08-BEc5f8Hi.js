import "./animation-C5MWUgDN-BXCJNYHu.js";
import { s as showModal } from "./modal-DCXtePY2-Cy6rmdf-.js";
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
