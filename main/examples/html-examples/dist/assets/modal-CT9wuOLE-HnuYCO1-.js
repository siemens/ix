import { T as TypedEvent } from "./typed-event-CWshStHZ-DBYwEilm.js";
class DefaultFrameworkDelegate {
  async attachView(view, config) {
    const attachToElement = config?.parentElement ?? document.body;
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
async function ensureCustomElementDependencies(dependencies) {
  if (dependencies.length === 0) {
    return;
  }
  const registry = globalThis.customElements;
  if (!registry) {
    throw new Error("Cannot define custom element dependencies because customElements is not available.");
  }
  for (const dependency of dependencies) {
    await dependency.define();
  }
  await Promise.all(dependencies.map((dependency) => registry.whenDefined(dependency.tag)));
}
function createDependencyFunction(callback, dependencies) {
  const createFunction = (activeDependencies) => {
    const dependencyDefinitions = Object.freeze([
      ...activeDependencies
    ]);
    let ensureDependenciesPromise;
    const ensureDependencies = () => {
      if (!ensureDependenciesPromise) {
        ensureDependenciesPromise = ensureCustomElementDependencies(dependencyDefinitions).catch((error) => {
          ensureDependenciesPromise = void 0;
          throw error;
        });
      }
      return ensureDependenciesPromise;
    };
    const dependencyFunction = (async (...args) => {
      await ensureDependencies();
      return callback(...args);
    });
    Object.defineProperties(dependencyFunction, {
      dependencies: {
        value: dependencyDefinitions
      },
      ensureDependencies: {
        value: ensureDependencies
      },
      withDependencies: {
        value: (nextDependencies) => createFunction(nextDependencies)
      }
    });
    return dependencyFunction;
  };
  return createFunction(dependencies);
}
const MODAL_CONFIG_PROPERTIES = [
  "size",
  "disableAnimation",
  "hideBackdrop",
  "closeOnBackdropClick",
  "beforeDismiss",
  "centered",
  "isNonBlocking"
];
const MODAL_HEADER_CONFIG_PROPERTIES = [
  "icon",
  "iconColor",
  "hideClose",
  "ariaLabelIcon",
  "ariaLabelCloseIconButton"
];
function pickOwnProperties(config, keys) {
  const picked = {};
  for (const key of keys) {
    if (Object.hasOwn(config, key)) {
      picked[key] = config[key];
    }
  }
  return picked;
}
function decodeModalConfig(config) {
  const decoded = {};
  const source = config;
  if (Object.hasOwn(source, "animation") && source.animation !== void 0) {
    decoded.disableAnimation = !source.animation;
  }
  if (Object.hasOwn(source, "backdrop") && source.backdrop !== void 0) {
    decoded.hideBackdrop = !source.backdrop;
  }
  return {
    ...decoded,
    ...pickOwnProperties(config, MODAL_CONFIG_PROPERTIES)
  };
}
function decodeModalHeaderConfig(config) {
  return pickOwnProperties(config, MODAL_HEADER_CONFIG_PROPERTIES);
}
function applyModalA11yAttributes(element, config) {
  if (config.ariaDescribedby) {
    element.setAttribute("aria-describedby", config.ariaDescribedby);
  }
  if (config.ariaLabelledby) {
    element.setAttribute("aria-labelledby", config.ariaLabelledby);
  }
}
const IX_MODAL_AUTOFOCUS_SELECTOR = "[autofocus],[auto-focus]";
function setA11yAttributes(element, config) {
  applyModalA11yAttributes(element, config);
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
const showModal = createDependencyFunction(async function(config) {
  let dialogRef;
  let owningDelegate = resolveDelegate();
  const onClose = new TypedEvent();
  const onDismiss = new TypedEvent();
  if (typeof config.content === "string") {
    const dialog = document.createElement("ix-modal");
    dialog.innerText = config.content;
    owningDelegate = getCoreDelegate();
    dialogRef = await owningDelegate.attachView(dialog);
  }
  if (config.content instanceof HTMLElement && config.content.tagName !== "IX-MODAL") {
    const dialog = document.createElement("ix-modal");
    dialog.appendChild(config.content);
    owningDelegate = getCoreDelegate();
    dialogRef = await owningDelegate.attachView(dialog);
  }
  if (!dialogRef) {
    dialogRef = await owningDelegate.attachView(config.content);
  }
  setA11yAttributes(dialogRef, config);
  Object.assign(dialogRef, decodeModalConfig(config));
  await dialogRef.showModal();
  dialogRef.addEventListener("dialogClose", async ({ detail }) => {
    onClose.emit(detail);
    await owningDelegate.removeView(dialogRef);
  });
  dialogRef.addEventListener("dialogDismiss", async ({ detail }) => {
    onDismiss.emit(detail);
    await owningDelegate.removeView(dialogRef);
  });
  return {
    htmlElement: dialogRef,
    onClose,
    onDismiss
  };
}, [
  {
    tag: "ix-modal",
    define: () => {
    }
  }
]);
export {
  IX_MODAL_AUTOFOCUS_SELECTOR as I,
  applyModalA11yAttributes as a,
  decodeModalConfig as b,
  createDependencyFunction as c,
  decodeModalHeaderConfig as d,
  dismissModal as e,
  closeModal as f,
  getCoreDelegate as g,
  showModal as s
};
