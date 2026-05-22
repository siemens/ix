import { a as createDependencyFunction, g as getCoreDelegate } from "./modal-DaGSr1j4-DDLDpRwP.js";
import { A as Animation } from "./animation-DNIQ2C1K-BYpQk_MF.js";
import { M as iconQuestion, Q as iconSuccess, A as iconError, S as iconWarning, E as iconInfo } from "./index-Cl7fhG1I-C77BCFLW.js";
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
function createShowMessage(dependencies) {
  const showMessage2 = createDependencyFunction(async function(config) {
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
  }, dependencies);
  return Object.assign(showMessage2, {
    /**
     * Displays an info message modal with an info icon
     */
    info: (title, message, textOkay, textCancel, payloadOkay, payloadCancel) => {
      return showMessage2({
        message,
        messageTitle: title,
        icon: iconInfo,
        actions: createConfirmButtons(textOkay, textCancel, payloadOkay, payloadCancel)
      });
    },
    /**
     * Displays a warning message modal with a warning icon
     */
    warning: (title, message, textOkay, textCancel, payloadOkay, payloadCancel) => {
      return showMessage2({
        message,
        messageTitle: title,
        icon: iconWarning,
        //TODO(IX-3400): Remove warning-text when proper CSS variable is available
        iconColor: "color-warning-text",
        actions: createConfirmButtons(textOkay, textCancel, payloadOkay, payloadCancel)
      });
    },
    /**
     * Displays an error message modal with an error icon
     */
    error: (title, message, textOkay, textCancel, payloadOkay, payloadCancel) => {
      return showMessage2({
        message,
        messageTitle: title,
        icon: iconError,
        iconColor: "color-alarm",
        actions: createConfirmButtons(textOkay, textCancel, payloadOkay, payloadCancel)
      });
    },
    /**
     * Displays a success message modal with a success icon
     */
    success: (title, message, textOkay, textCancel, payloadOkay, payloadCancel) => {
      return showMessage2({
        message,
        messageTitle: title,
        icon: iconSuccess,
        iconColor: "color-success",
        actions: createConfirmButtons(textOkay, textCancel, payloadOkay, payloadCancel)
      });
    },
    /**
     * Displays a question message modal with a question icon
     */
    question: (title, message, textOkay, textCancel, payloadOkay, payloadCancel) => {
      return showMessage2({
        message,
        messageTitle: title,
        icon: iconQuestion,
        actions: createConfirmButtons(textOkay, textCancel, payloadOkay, payloadCancel)
      });
    }
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
  showModalLoading as b,
  setToastPosition as s,
  toast as t
};
