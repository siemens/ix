function getModalContainer() {
  const containerList = Array.from(document.querySelectorAll("ix-modal-container"));
  const [container] = containerList;
  if (containerList.length > 1) {
    console.warn("Multiple modal container are found. Only there first is used.");
    return container;
  }
  if (!container) {
    const modalContainer = document.createElement("ix-modal-container");
    document.body.appendChild(modalContainer);
    return modalContainer;
  }
  return container;
}
async function modal(config) {
  const modalContainer = getModalContainer();
  const modalInstance = await modalContainer.showModal(config);
  return modalInstance;
}
function getIxModal(element) {
  return element.closest("ix-modal");
}
function closeModal(element, closeResult) {
  getIxModal(element).close(closeResult);
}
function dismissModal(element, dismissResult) {
  getIxModal(element).dismiss(dismissResult);
}
export {
  closeModal as c,
  dismissModal as d,
  modal as m
};
