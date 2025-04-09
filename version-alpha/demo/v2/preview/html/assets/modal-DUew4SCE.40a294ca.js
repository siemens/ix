import { T as TypedEvent } from "./typed-event-BdCnOrqW.51d2f30a.js";
class DefaultFrameworkDelegate {
  async attachView(view, config) {
    var _a;
    const attachToElement = (_a = config === null || config === void 0 ? void 0 : config.parentElement) !== null && _a !== void 0 ? _a : document.body;
    attachToElement.appendChild(view);
    return view;
  }
  async removeView(view) {
    view.remove();
  }
}
const coreDelegate = new DefaultFrameworkDelegate();
let currentDelegate = coreDelegate;
const resolveDelegate = () => {
  return currentDelegate;
};
const getCoreDelegate = () => coreDelegate;
function setA11yAttributes$1(element, config) {
  const ariaDescribedby = config.ariaDescribedby;
  const ariaLabelledby = config.ariaLabelledby;
  delete config["ariaDescribedby"];
  delete config["ariaLabelledby"];
  if (ariaDescribedby) {
    element.setAttribute("aria-describedby", ariaDescribedby);
  }
  if (ariaLabelledby) {
    element.setAttribute("aria-labelledby", ariaLabelledby);
  }
}
function createConfirmButtons(textOkay, textCancel, payloadOkay, payloadCancel) {
  let actions = [];
  if (textCancel !== void 0) {
    actions = [
      ...actions,
      {
        id: "cancel",
        text: textCancel,
        type: "cancel",
        payload: payloadCancel
      }
    ];
  }
  return [
    ...actions,
    {
      id: "okay",
      text: textOkay,
      type: "okay",
      payload: payloadOkay
    }
  ];
}
async function showMessage(config) {
  const onMessageAction = new TypedEvent();
  const dialog = document.createElement("ix-modal");
  const header = document.createElement("ix-modal-header");
  const content = document.createElement("ix-modal-content");
  const footer = document.createElement("ix-modal-footer");
  setA11yAttributes$1(dialog, config);
  Object.assign(header, config);
  Object.assign(content, config);
  Object.assign(footer, config);
  header.innerText = config.messageTitle;
  content.innerText = config.message;
  config.actions.forEach(({ id, text, type, payload }) => {
    const button = document.createElement("ix-button");
    button.innerText = text;
    footer.appendChild(button);
    if (type === "okay") {
      button.variant = "primary";
      button.addEventListener("click", () => dialog.closeModal({
        actionId: id,
        payload
      }));
      return;
    } else if (type === "cancel") {
      button.variant = "primary";
      button.outline = true;
      button.addEventListener("click", () => dialog.dismissModal({
        actionId: id,
        payload
      }));
      return;
    }
  });
  dialog.appendChild(header);
  dialog.appendChild(content);
  dialog.appendChild(footer);
  const dialogRef = await getCoreDelegate().attachView(dialog);
  dialogRef.addEventListener("dialogClose", (event) => {
    onMessageAction.emit(event.detail);
    dialogRef.remove();
  });
  dialogRef.addEventListener("dialogDismiss", (event) => {
    onMessageAction.emit(event.detail);
    dialogRef.remove();
  });
  setA11yAttributes$1(dialogRef, config);
  Object.assign(dialogRef, config);
  dialogRef.showModal();
  return onMessageAction;
}
showMessage.info = (title, message, textOkay, textCancel, payloadOkay, payloadCancel) => {
  return showMessage({
    message,
    messageTitle: title,
    icon: "info",
    actions: createConfirmButtons(textOkay, textCancel, payloadOkay, payloadCancel)
  });
};
showMessage.warning = (title, message, textOkay, textCancel, payloadOkay, payloadCancel) => {
  return showMessage({
    message,
    messageTitle: title,
    icon: "warning",
    iconColor: "color-warning",
    actions: createConfirmButtons(textOkay, textCancel, payloadOkay, payloadCancel)
  });
};
showMessage.error = (title, message, textOkay, textCancel, payloadOkay, payloadCancel) => {
  return showMessage({
    message,
    messageTitle: title,
    icon: "error",
    iconColor: "color-alarm",
    actions: createConfirmButtons(textOkay, textCancel, payloadOkay, payloadCancel)
  });
};
showMessage.success = (title, message, textOkay, textCancel, payloadOkay, payloadCancel) => {
  return showMessage({
    message,
    messageTitle: title,
    icon: "success",
    iconColor: "color-success",
    actions: createConfirmButtons(textOkay, textCancel, payloadOkay, payloadCancel)
  });
};
showMessage.question = (title, message, textOkay, textCancel, payloadOkay, payloadCancel) => {
  return showMessage({
    message,
    messageTitle: title,
    icon: "question",
    actions: createConfirmButtons(textOkay, textCancel, payloadOkay, payloadCancel)
  });
};
function setA11yAttributes(element, config) {
  const ariaDescribedby = config.ariaDescribedby;
  const ariaLabelledby = config.ariaLabelledby;
  delete config["ariaDescribedby"];
  delete config["ariaLabelledby"];
  if (ariaDescribedby) {
    element.setAttribute("aria-describedby", ariaDescribedby);
  }
  if (ariaLabelledby) {
    element.setAttribute("aria-labelledby", ariaLabelledby);
  }
}
function getIxModal(element) {
  return element.closest("ix-modal");
}
function closeModal(element, closeResult) {
  const dialog = getIxModal(element);
  if (dialog) {
    dialog.closeModal(closeResult);
    return;
  }
}
function dismissModal(element, dismissResult) {
  const dialog = getIxModal(element);
  if (dialog) {
    dialog.dismissModal(dismissResult);
    return;
  }
}
async function showModal(config) {
  const delegate = resolveDelegate();
  let dialogRef;
  const onClose = new TypedEvent();
  const onDismiss = new TypedEvent();
  if (typeof config.content === "string") {
    const dialog = document.createElement("ix-modal");
    dialog.innerText = config.content;
    dialogRef = await getCoreDelegate().attachView(dialog);
  }
  if (config.content instanceof HTMLElement && config.content.tagName !== "IX-MODAL") {
    const dialog = document.createElement("ix-modal");
    dialog.appendChild(config.content);
    dialogRef = await getCoreDelegate().attachView(dialog);
  }
  if (!dialogRef) {
    dialogRef = await delegate.attachView(config.content);
  }
  setA11yAttributes(dialogRef, config);
  Object.assign(dialogRef, config);
  await dialogRef.showModal();
  dialogRef.addEventListener("dialogClose", async ({ detail }) => {
    onClose.emit(detail);
    await delegate.removeView(dialogRef);
  });
  dialogRef.addEventListener("dialogDismiss", async ({ detail }) => {
    onDismiss.emit(detail);
    await delegate.removeView(dialogRef);
  });
  requestAnimationFrame(() => {
    const autofocusElement = dialogRef.querySelector("[autofocus],[auto-focus]");
    if (autofocusElement) {
      autofocusElement.focus();
    }
  });
  return {
    htmlElement: dialogRef,
    onClose,
    onDismiss
  };
}
export {
  showModal as a,
  closeModal as c,
  dismissModal as d,
  getCoreDelegate as g,
  showMessage as s
};
