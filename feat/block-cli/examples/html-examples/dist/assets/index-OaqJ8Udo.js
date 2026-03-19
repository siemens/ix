import "./logical-filter-operator-C9HBQRMb-BOZGh-G7.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import { g as getCoreDelegate } from "./modal-DJRSsubD-CRBh3lJr.js";
import { A as Animation } from "./animation-CZUo7Z4G-DSUp_D74.js";
import "./theme-switcher-CeIh1wFd-CqevnQ5w.js";
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
  container.setAttribute("position", position);
}
function toast(config) {
  const container = getToastContainer();
  return container.showToast(config);
}
toast.info = (config) => {
  return toast({
    ...config,
    type: "info"
  });
};
toast.error = (config) => {
  return toast({
    ...config,
    type: "error"
  });
};
toast.success = (config) => {
  return toast({
    ...config,
    type: "success"
  });
};
toast.warning = (config) => {
  return toast({
    ...config,
    type: "warning"
  });
};
function showModalLoading(message) {
  const modal = document.createElement("ix-modal");
  modal.disableEscapeClose = true;
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
