import "./animation-4a73b1c3.59b7eda0.js";
import { a as showModal } from "./modal-8bc5477b.0d0b5edc.js";
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
    appSwitchElement.config = updateAppSwitchConfig;
  };
}
export {
  showAppSwitch as s
};
