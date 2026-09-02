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
const IX_MODAL_AUTOFOCUS_SELECTOR = "[autofocus],[auto-focus]";
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
const showModal = createDependencyFunction(async function(config) {
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
  closeModal as a,
  createDependencyFunction as c,
  dismissModal as d,
  getCoreDelegate as g,
  showModal as s
};
