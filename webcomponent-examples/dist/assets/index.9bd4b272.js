import "./logical-filter-operator-d793d1c3.ce417adc.js";
import "./flip-tile-state-76dd224a.ffe63233.js";
import "./upload-file-state-de676cd5.96d9c6b3.js";
import { g as getCoreDelegate } from "./modal-54740f80.103c72e0.js";
import { A as Animation } from "./animation-4a73b1c3.59b7eda0.js";
import "./theme-switcher-b10fb4da.be4a72f4.js";
function getToastContainer() {
  const containerList = Array.from(document.querySelectorAll("ix-toast-container"));
  const [container] = containerList;
  if (containerList.length > 1) {
    console.warn("Multiple toast containers were found. Only the first one will be used.");
    return container;
  }
  if (!container) {
    const toastContainer = document.createElement("ix-toast-container");
    document.body.appendChild(toastContainer);
    return toastContainer;
  }
  return container;
}
function setToastPosition(position) {
  const container = getToastContainer();
  container.position = position;
}
function toast(config) {
  const container = getToastContainer();
  return container.showToast(config);
}
toast.info = (config) => {
  return toast(Object.assign(Object.assign({}, config), { type: "info" }));
};
toast.error = (config) => {
  return toast(Object.assign(Object.assign({}, config), { type: "error" }));
};
toast.success = (config) => {
  return toast(Object.assign(Object.assign({}, config), { type: "success" }));
};
toast.warning = (config) => {
  return toast(Object.assign(Object.assign({}, config), { type: "warning" }));
};
function showModalLoading(message) {
  const modal = document.createElement("ix-modal");
  modal.keyboard = false;
  const loading = document.createElement("ix-modal-loading");
  loading.innerText = message;
  modal.appendChild(loading);
  getCoreDelegate().attachView(modal);
  modal.showModal();
  return {
    update: (text) => loading.innerHTML = text,
    finish: (text, timeout = 250) => {
      if (text !== void 0) {
        loading.innerText = text;
      } else {
        timeout = 0;
      }
      setTimeout(() => {
        modal.closeModal(null);
        setTimeout(async () => await getCoreDelegate().removeView(modal), Animation.mediumTime);
      }, timeout);
    }
  };
}
export {
  setToastPosition as a,
  showModalLoading as s,
  toast as t
};
