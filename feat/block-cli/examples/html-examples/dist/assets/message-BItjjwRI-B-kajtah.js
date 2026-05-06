import { i as iconInfo, a as iconWarning, b as iconError, c as iconSuccess, d as iconQuestion } from "./index-DLhpBBEI-C3tPjcQ4.js";
import { g as getCoreDelegate } from "./modal-1XS3_9yD-CROtOmyT.js";
import { T as TypedEvent } from "./typed-event-CWshStHZ-DBYwEilm.js";
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
  setA11yAttributes(dialog, config);
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
      button.variant = "secondary";
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
  setA11yAttributes(dialogRef, config);
  Object.assign(dialogRef, config);
  dialogRef.showModal();
  return onMessageAction;
}
showMessage.info = (title, message, textOkay, textCancel, payloadOkay, payloadCancel) => {
  return showMessage({
    message,
    messageTitle: title,
    icon: iconInfo,
    actions: createConfirmButtons(textOkay, textCancel, payloadOkay, payloadCancel)
  });
};
showMessage.warning = (title, message, textOkay, textCancel, payloadOkay, payloadCancel) => {
  return showMessage({
    message,
    messageTitle: title,
    icon: iconWarning,
    //TODO(IX-3400): Remove warning-text when proper CSS variable is available
    iconColor: "color-warning-text",
    actions: createConfirmButtons(textOkay, textCancel, payloadOkay, payloadCancel)
  });
};
showMessage.error = (title, message, textOkay, textCancel, payloadOkay, payloadCancel) => {
  return showMessage({
    message,
    messageTitle: title,
    icon: iconError,
    iconColor: "color-alarm",
    actions: createConfirmButtons(textOkay, textCancel, payloadOkay, payloadCancel)
  });
};
showMessage.success = (title, message, textOkay, textCancel, payloadOkay, payloadCancel) => {
  return showMessage({
    message,
    messageTitle: title,
    icon: iconSuccess,
    iconColor: "color-success",
    actions: createConfirmButtons(textOkay, textCancel, payloadOkay, payloadCancel)
  });
};
showMessage.question = (title, message, textOkay, textCancel, payloadOkay, payloadCancel) => {
  return showMessage({
    message,
    messageTitle: title,
    icon: iconQuestion,
    actions: createConfirmButtons(textOkay, textCancel, payloadOkay, payloadCancel)
  });
};
export {
  showMessage as s
};
