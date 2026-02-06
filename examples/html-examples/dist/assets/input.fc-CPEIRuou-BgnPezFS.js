import { h } from "./global-wi9VneMU.js";
import { a as a11yBoolean } from "./a11y-DAzBNVe7-CO1Uj69l.js";
import { s as shouldSuppressInternalValidation } from "./validation-3877QBzA-qKKeryVJ.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { c as convertToRemString } from "./rwd.util-pXYAoEyc-B7dE3uhl.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import { A as Animation } from "./animation-C5MWUgDN-BXCJNYHu.js";
function shakeInput(input) {
  const xMax = 5;
  animate(input, {
    duration: Animation.defaultTime,
    easing: "easeInOutSine",
    loop: 2,
    translateX: [
      {
        value: xMax * -1
      },
      {
        value: xMax
      },
      {
        value: xMax / -2
      },
      {
        value: xMax / 2
      },
      {
        value: 0
      }
    ]
  });
}
function mapValidationResult(ref, result) {
  ref.isInvalid = result.isInvalid || result.isInvalidByRequired;
  ref.isValid = result.isValid;
  ref.isInfo = result.isInfo;
  ref.isWarning = result.isWarning;
}
function checkAllowedKeys(comp, event) {
  if (comp.allowedCharactersPattern) {
    const regex = new RegExp(comp.allowedCharactersPattern);
    if (!regex.test(event.key)) {
      event.preventDefault();
      shakeInput(comp.inputRef.current);
    }
  }
}
async function checkInternalValidity(comp, input) {
  const validityState = input.validity;
  const currentValidityState = !comp.hostElement.classList.contains("ix-invalid--validity-invalid");
  const newValidityState = validityState.valid;
  if (currentValidityState !== newValidityState) {
    const eventResult = comp.validityStateChange.emit(validityState);
    if (eventResult.defaultPrevented) {
      return;
    }
    comp.hostElement.classList.toggle("ix-invalid--validity-invalid", !newValidityState);
  }
  if (comp.value === null || comp.value === void 0) {
    return;
  }
  const skipValidation = await shouldSuppressInternalValidation(comp);
  if (skipValidation) {
    return;
  }
  const { valid } = validityState;
  comp.hostElement.classList.toggle("ix-invalid--validity-invalid", !valid);
}
function onInputBlur(comp, input) {
  comp.ixBlur.emit();
  if (!input) {
    throw new Error("Input element is not available");
  }
  input.setAttribute("data-ix-touched", "true");
  checkInternalValidity(comp, input);
}
function applyPaddingEnd(inputElement, width, options) {
  var _a;
  if (!inputElement) {
    return;
  }
  const remInPixels = 16;
  const padding = convertToRemString(width + remInPixels / 2);
  if (options.slotEnd) {
    inputElement.style.paddingRight = `calc(${padding} + ${(_a = options.additionalPaddingRight) !== null && _a !== void 0 ? _a : "0rem"})`;
  } else {
    inputElement.style.paddingLeft = padding;
  }
}
function adjustPaddingForStartAndEnd(startElement, endElement, inputElement) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (startElement) {
        const startBoundingRect = startElement.getBoundingClientRect();
        if (startBoundingRect) {
          applyPaddingEnd(inputElement, startBoundingRect.width, {
            slotEnd: false
          });
        }
      }
      if (endElement) {
        const endBoundingRect = endElement.getBoundingClientRect();
        if (endBoundingRect) {
          applyPaddingEnd(inputElement, endBoundingRect.width, {
            slotEnd: true
          });
        }
      }
    });
  });
}
function getAriaAttributesForInput(component) {
  const inputAria = {
    "aria-invalid": `${a11yBoolean(component.isInvalid)}`,
    "aria-required": `${a11yBoolean(component.required)}`
  };
  if (component.isInvalid && component.invalidText) {
    inputAria["aria-errormessage"] = component.invalidText;
  }
  return inputAria;
}
const addDisposableChangesAndVisibilityObservers = (element, callback) => {
  const intersectionObserver = observeElementUntilVisible(element, callback);
  const mutationObserver = createMutationObserver(callback);
  mutationObserver.observe(element, {
    subtree: true,
    attributes: true
  });
  return () => {
    intersectionObserver.disconnect();
    mutationObserver.disconnect();
  };
};
function observeElementUntilVisible(hostElement, updateCallback) {
  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateCallback();
      }
    });
  });
  intersectionObserver.observe(hostElement);
  return intersectionObserver;
}
function handleSubmitOnEnterKeydown(event, suppressSubmitOnEnter, form) {
  if (suppressSubmitOnEnter || event.key !== "Enter" || !form) {
    return;
  }
  event.preventDefault();
  const submitButton = form.querySelector('button[type="submit"], ix-button[type="submit"]');
  if (submitButton) {
    form.requestSubmit(submitButton);
  }
  if (form.length === 1) {
    form.requestSubmit();
  }
}
function createPickerValidityStateTracker() {
  return {
    lastEmittedPatternMismatch: false,
    lastEmittedValueMissing: false
  };
}
function emitPickerValidityState(component) {
  return emitPickerValidityStateChangeIfChanged(component.validityTracker, {
    touched: component.touched,
    invalidReason: component.invalidReason,
    getValidityState: () => component.getValidityState(),
    emit: (state) => component.validityStateChange.emit(state)
  });
}
async function emitPickerValidityStateChangeIfChanged(tracker, context) {
  if (!context.touched) {
    return;
  }
  const state = await context.getValidityState();
  const currentPatternMismatch = state.patternMismatch;
  const currentValueMissing = state.valueMissing;
  if (tracker.lastEmittedPatternMismatch === currentPatternMismatch && tracker.lastEmittedValueMissing === currentValueMissing) {
    return;
  }
  tracker.lastEmittedPatternMismatch = currentPatternMismatch;
  tracker.lastEmittedValueMissing = currentValueMissing;
  context.emit({
    patternMismatch: currentPatternMismatch,
    valueMissing: currentValueMissing,
    invalidReason: context.invalidReason
  });
}
function TextareaElement(props) {
  return h("textarea", Object.assign({ readOnly: props.readonly, disabled: props.disabled, maxLength: props.maxLength, minLength: props.minLength, cols: props.textareaCols, rows: props.textareaRows, ref: props.textAreaRef, class: {
    "is-invalid": props.isInvalid
  }, required: props.required, value: props.value, placeholder: props.placeholder, onInput: (inputEvent) => {
    const target = inputEvent.target;
    props.updateFormInternalValue(target.value);
    props.valueChange(target.value);
  }, onBlur: () => props.onBlur(), style: {
    resize: props.resizeBehavior,
    height: props.textareaHeight,
    width: props.textareaWidth
  } }, props.ariaAttributes));
}
function InputElement(props) {
  return h("input", Object.assign({ id: props.id, autoComplete: "off", readOnly: props.readonly, disabled: props.disabled, step: props.step, min: props.min, max: props.max, maxLength: props.maxLength ? Number(props.maxLength) : void 0, minLength: props.minLength ? Number(props.minLength) : void 0, ref: props.inputRef, pattern: props.pattern, type: props.type, class: {
    "is-invalid": props.isInvalid
  }, style: {
    textAlign: props.textAlignment
  }, required: props.required, value: props.value, placeholder: props.placeholder, onKeyPress: (event) => props.onKeyPress(event), onKeyDown: (e) => {
    var _a;
    (_a = props.onKeyDown) === null || _a === void 0 ? void 0 : _a.call(props, e);
    handleSubmitOnEnterKeydown(e, !!props.suppressSubmitOnEnter, props.form);
  } }, {
    onBeforeInput: (event) => {
      var _a;
      return (_a = props.onBeforeInput) === null || _a === void 0 ? void 0 : _a.call(props, event);
    }
  }, { onPaste: (event) => {
    var _a;
    return (_a = props.onPaste) === null || _a === void 0 ? void 0 : _a.call(props, event);
  }, onInput: (inputEvent) => {
    const target = inputEvent.target;
    props.updateFormInternalValue(target.value);
    props.valueChange(target.value);
  }, onBlur: () => props.onBlur() }, props.ariaAttributes));
}
const SlotEnd = (props, children) => {
  return h("div", { class: "end-container", ref: props.slotEndRef }, h("slot", { name: "end", onSlotchange: props.onSlotChange }), children);
};
const SlotStart = (props) => {
  return h("div", { class: "start-container", ref: props.slotStartRef }, h("slot", { name: "start", onSlotchange: props.onSlotChange }));
};
export {
  InputElement as I,
  SlotEnd as S,
  TextareaElement as T,
  addDisposableChangesAndVisibilityObservers as a,
  adjustPaddingForStartAndEnd as b,
  createPickerValidityStateTracker as c,
  SlotStart as d,
  emitPickerValidityState as e,
  checkInternalValidity as f,
  getAriaAttributesForInput as g,
  handleSubmitOnEnterKeydown as h,
  checkAllowedKeys as i,
  mapValidationResult as m,
  onInputBlur as o
};
