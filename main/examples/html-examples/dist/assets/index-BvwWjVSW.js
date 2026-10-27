import { c as createDependencyFunction, g as getCoreDelegate, a as applyModalA11yAttributes, d as decodeModalHeaderConfig, b as decodeModalConfig } from "./modal-CT9wuOLE-HnuYCO1-.js";
import { A as Animation } from "./animation-C2bTHF7D-HeOCyL6m.js";
import { i as iconQuestion, a as iconError, b as iconSuccess, c as iconWarningOctagon, d as iconInfo, e as iconWarningRhomb, f as iconWarning, g as iconAlarm } from "./index-Bj5Kmzp6-B1fOSLOf.js";
import { T as TypedEvent } from "./typed-event-CWshStHZ-DBYwEilm.js";
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
toast.danger = (config) => {
  return toast({
    ...config,
    type: "danger"
  });
};
toast.warning = (config) => {
  return toast({
    ...config,
    type: "warning"
  });
};
toast.caution = (config) => {
  return toast({
    ...config,
    type: "caution"
  });
};
toast.information = (config) => {
  return toast({
    ...config,
    type: "information"
  });
};
toast.critical = (config) => {
  return toast({
    ...config,
    type: "critical"
  });
};
toast.success = (config) => {
  return toast({
    ...config,
    type: "success"
  });
};
toast.error = (config) => {
  return toast({
    ...config,
    type: "error"
  });
};
function createShowModalLoading(dependencies) {
  return createDependencyFunction(async function showModalLoading2(options) {
    const modal = document.createElement("ix-modal");
    modal.beforeDismiss = () => false;
    const loading = document.createElement("ix-modal-loading");
    loading.innerText = options.message;
    if (options.centered) {
      modal.centered = true;
    }
    modal.appendChild(loading);
    await getCoreDelegate().attachView(modal);
    await modal.showModal();
    return {
      update: (text) => loading.innerText = text,
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
  }, dependencies);
}
const showModalLoading = createShowModalLoading([
  { tag: "ix-modal", define: () => {
  } },
  { tag: "ix-modal-loading", define: () => {
  } }
]);
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
function createVariant(showMessage2, icon, iconColor) {
  return (title, message, textOkay, textCancel, payloadOkay, payloadCancel) => {
    return showMessage2({
      message,
      messageTitle: title,
      icon,
      iconColor,
      actions: createConfirmButtons(textOkay, textCancel, payloadOkay, payloadCancel)
    });
  };
}
function createShowMessage(dependencies) {
  const showMessage2 = createDependencyFunction(async function(config) {
    const onMessageAction = new TypedEvent();
    const dialog = document.createElement("ix-modal");
    const header = document.createElement("ix-modal-header");
    const content = document.createElement("ix-modal-content");
    const footer = document.createElement("ix-modal-footer");
    applyModalA11yAttributes(dialog, config);
    Object.assign(header, decodeModalHeaderConfig(config));
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
    applyModalA11yAttributes(dialogRef, config);
    Object.assign(dialogRef, decodeModalConfig(config));
    dialogRef.showModal();
    return onMessageAction;
  }, dependencies);
  return Object.assign(showMessage2, {
    /**
     * Displays a danger message modal with an alarm icon
     */
    danger: createVariant(showMessage2, iconAlarm, "--si-sys-color-border-danger"),
    /**
     * Displays a warning message modal with a warning icon
     */
    warning: createVariant(showMessage2, iconWarning, "--si-sys-color-border-warning"),
    /**
     * Displays a caution message modal with a warning-rhomb icon
     */
    caution: createVariant(showMessage2, iconWarningRhomb, "--si-sys-color-border-caution"),
    /**
     * Displays an information message modal with an info icon
     */
    information: createVariant(showMessage2, iconInfo, "--si-sys-color-border-information"),
    /**
     * Displays a critical message modal with a warning-octagon icon
     */
    critical: createVariant(showMessage2, iconWarningOctagon, "--si-sys-color-border-critical"),
    /**
     * Displays a success message modal with a success icon
     */
    success: createVariant(showMessage2, iconSuccess, "--si-sys-color-border-success"),
    /**
     * Displays an error message modal with an error icon
     */
    error: createVariant(showMessage2, iconError, "--si-sys-color-border-danger"),
    /**
     * Displays a question message modal with a question icon
     */
    question: createVariant(showMessage2, iconQuestion, "--si-sys-color-text-secondary")
  });
}
const showMessage = createShowMessage([
  {
    tag: "ix-modal",
    define: () => {
    }
  },
  {
    tag: "ix-modal-header",
    define: () => {
    }
  },
  {
    tag: "ix-modal-content",
    define: () => {
    }
  },
  {
    tag: "ix-modal-footer",
    define: () => {
    }
  },
  { tag: "ix-button", define: () => {
  } }
]);
export {
  showMessage as a,
  setToastPosition as b,
  showModalLoading as s,
  toast as t
};
