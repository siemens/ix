import "./icon-f54a8bc4.76a2f2d6.js";
import "./logical-filter-operator-92531263.182856a9.js";
import "./flip-tile-state-db31345f.fa15ac0c.js";
import "./upload-file-state-532a36d3.458c962a.js";
import { g as getCoreDelegate } from "./modal-68c6d3f6.b6b54fe0.js";
import { A as Animation } from "./animation-268dce50.df0d8da4.js";
import "./theme-switcher-9ede3823.43047733.js";
import "./index.435ccc59.js";
function getToastContainer() {
  const containerList = Array.from(document.querySelectorAll("ix-toast-container"));
  const [container] = containerList;
  if (containerList.length > 1) {
    console.warn("Multiple toast container are found. Only there first is used.");
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
  getToastContainer().position = position;
}
async function toast(config) {
  const context = getToastContainer();
  const toast2 = await context.showToast(config);
  return toast2;
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
