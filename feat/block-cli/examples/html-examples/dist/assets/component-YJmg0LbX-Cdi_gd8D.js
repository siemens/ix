import { I as IX_FOCUS_VISIBLE_ACTIVE, a as IX_FOCUS_VISIBLE, F as FOCUS_KEYS } from "./focus-utilities-Cft9zvbS-CmL7xuFI.js";
import { g as getComposedPath } from "./shadow-dom-T30VMB2R-DtdN3xF2.js";
function detectKeyboardMode(element) {
  let keyboardMode2 = false;
  const ref = document;
  const onKeydown = (event) => {
    const keyboardEvent = event;
    if (!FOCUS_KEYS.has(keyboardEvent.key)) {
      return;
    }
    keyboardMode2 = true;
    ref.dispatchEvent(new CustomEvent("keyboardmodechange", { detail: { keyboardMode: keyboardMode2 } }));
  };
  const pointerDown = () => {
    keyboardMode2 = false;
    ref.dispatchEvent(new CustomEvent("keyboardmodechange", { detail: { keyboardMode: keyboardMode2 } }));
  };
  ref.addEventListener("keydown", onKeydown);
  ref.addEventListener("touchstart", pointerDown, {
    passive: true
  });
  ref.addEventListener("mousedown", pointerDown);
  const destroy = () => {
    ref.removeEventListener("keydown", onKeydown);
    ref.removeEventListener("touchstart", pointerDown);
    ref.removeEventListener("mousedown", pointerDown);
  };
  return { destroy, hasKeyboardMode: () => keyboardMode2 };
}
let originalFocus = null;
let globalKeyboardDetectionInitialized = false;
let keyboardMode = null;
function hasKeyboardMode() {
  return keyboardMode?.hasKeyboardMode() ?? false;
}
let currentFocus = [];
function removeVisibleFocus() {
  currentFocus.forEach((el) => {
    el.classList.remove(IX_FOCUS_VISIBLE_ACTIVE);
    el.ixFocusVisible = false;
  });
}
class IxFocusVisibleChangeEvent extends CustomEvent {
  static eventName = "ixFocusVisibleChange";
  constructor(detail) {
    super(IxFocusVisibleChangeEvent.eventName, {
      detail,
      bubbles: true,
      cancelable: true
    });
  }
}
function updateFocusState(target) {
  const composedPath = getComposedPath(target);
  const focusableElements = composedPath.filter((el) => el.classList.contains(IX_FOCUS_VISIBLE));
  removeVisibleFocus();
  if (hasKeyboardMode()) {
    focusableElements.forEach((el) => {
      el.classList.add(IX_FOCUS_VISIBLE_ACTIVE);
      el.ixFocusVisible = true;
    });
    currentFocus = focusableElements;
  } else {
    currentFocus = [];
  }
  document.dispatchEvent(new IxFocusVisibleChangeEvent({ currentFocus }));
}
function applyFocusPatch() {
  if (typeof HTMLElement !== "undefined" && !originalFocus) {
    originalFocus = HTMLElement.prototype.focus;
    HTMLElement.prototype.focus = function(options) {
      originalFocus?.call(this, options);
      updateFocusState(this);
    };
    document.addEventListener("focusin", (event) => {
      const target = event.target;
      if (target instanceof HTMLElement) {
        updateFocusState(target);
      }
    }, true);
    document.addEventListener("keyboardmodechange", (event) => {
      const customEvent = event;
      const isKeyboardMode = customEvent.detail.keyboardMode;
      if (!isKeyboardMode) {
        removeVisibleFocus();
        return;
      }
    });
    document.addEventListener("focusout", (event) => {
      const target = event.target;
      if (target instanceof HTMLElement) {
        updateFocusState(target);
      }
    });
  }
}
const SetupMixin = (Base) => {
  class FocusListenerMixin extends Base {
    componentDidLoad() {
      if (super.componentDidLoad) {
        super.componentDidLoad();
      }
      if (!originalFocus) {
        applyFocusPatch();
      }
      if (!globalKeyboardDetectionInitialized) {
        globalKeyboardDetectionInitialized = true;
        keyboardMode = detectKeyboardMode();
      }
    }
    disconnectedCallback() {
      if (super.disconnectedCallback) {
        super.disconnectedCallback();
      }
    }
  }
  return FocusListenerMixin;
};
const DefaultMixins = [SetupMixin];
export {
  DefaultMixins as D,
  hasKeyboardMode as h,
  removeVisibleFocus as r
};
