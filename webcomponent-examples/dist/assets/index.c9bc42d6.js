import "./logical-filter-operator-15696001.d3e8ce6a.js";
import "./flip-tile-state-051bb2fd.b2524409.js";
import "./modal-64e18970.5a849811.js";
import "./upload-file-state-532a36d3.458c962a.js";
import "./theme-switcher-4b9e5cc2.7e06ab13.js";
import "./index.352cb90e.js";
import "./anime.es-185e9087.87a18bcc.js";
import "./animation-268dce50.df0d8da4.js";
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
