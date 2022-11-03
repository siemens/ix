import "./logical-filter-operator-1bf83315.1b3b3530.js";
import "./flip-tile-state-28a1f8ce.23318fa9.js";
import "./modal-8ed87a6c.eb630bb3.js";
import "./upload-file-state-631bb8a2.5434751f.js";
import "./index.c7eba843.js";
import "./anime.es-185e9087.87a18bcc.js";
import "./animation-b667a4c4.18fe34bf.js";
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
export {
  toast as t
};
