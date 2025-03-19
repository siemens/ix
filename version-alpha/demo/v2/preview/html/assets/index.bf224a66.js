import "./logical-filter-operator-BH3f5fa3.777c0249.js";
import "./flip-tile-state-BQ6999e5.70579bb3.js";
import "./upload-file-state-BGzrnl_l.166f4809.js";
import { g as getCoreDelegate } from "./modal-DUew4SCE.40a294ca.js";
import { A as Animation } from "./animation-Dp15M30K.7b5f0f8a.js";
import "./theme-switcher-CA3k28fo.db6435f7.js";
import "./global.aa474cf6.js";
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
  modal.closeOnEscape = false;
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
