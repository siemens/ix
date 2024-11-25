import { h } from "./global.2bfd6008.js";
import { a as a11yBoolean } from "./a11y-b10c12e0.27b6344e.js";
import { s as shouldSuppressInternalValidation } from "./validation-45aa490c.d55c4dd8.js";
import { c as convertToRemString } from "./rwd.util-d8e00a88.087cdec0.js";
import { a as anime } from "./anime.es-a5520566.eae0a8f1.js";
function TextareaElement(props) {
  return h("textarea", Object.assign({ readOnly: props.readonly, disabled: props.disabled, maxLength: props.maxLength, minLength: props.minLength, cols: props.textareaCols, rows: props.textareaRows, ref: props.textAreaRef, class: {
    "is-invalid": props.isInvalid
  }, required: props.required, value: props.value, placeholder: props.placeholder, onChange: (changeEvent) => {
    const target = changeEvent.target;
    props.valueChange(target.value);
  }, onInput: (inputEvent) => {
    const target = inputEvent.target;
    props.updateFormInternalValue(target.value);
  }, onBlur: () => props.onBlur(), style: {
    resize: props.resizeBehavior,
    height: props.textareaHeight,
    width: props.textareaWidth
  } }, props.ariaAttributes));
}
function InputElement(props) {
  return h("input", Object.assign({ id: props.id, autoComplete: "off", readOnly: props.readonly, disabled: props.disabled, min: props.min, max: props.max, maxLength: props.maxLength ? Number(props.maxLength) : void 0, minLength: props.maxLength ? Number(props.minLength) : void 0, ref: props.inputRef, pattern: props.pattern, type: props.type, class: {
    "is-invalid": props.isInvalid
  }, required: props.required, value: props.value, placeholder: props.placeholder, onKeyPress: (event) => props.onKeyPress(event), onChange: (changeEvent) => {
    const target = changeEvent.target;
    props.valueChange(target.value);
  }, onInput: (inputEvent) => {
    const target = inputEvent.target;
    props.updateFormInternalValue(target.value);
  }, onBlur: () => props.onBlur() }, props.ariaAttributes));
}
const SlotEnd = (props, children) => {
  return h(
    "div",
    { class: "end-container", ref: props.slotEndRef },
    h("slot", { name: "end", onSlotchange: props.onSlotChange }),
    children
  );
};
const SlotStart = (props) => {
  return h(
    "div",
    { class: "start-container", ref: props.slotStartRef },
    h("slot", { name: "start", onSlotchange: props.onSlotChange })
  );
};
function shakeInput(input) {
  const xMax = 5;
  anime({
    targets: input,
    duration: 200,
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
  const eventResult = comp.validityStateChange.emit(validityState);
  if (eventResult.defaultPrevented) {
    return;
  }
  if (!comp.value) {
    return;
  }
  const skipValidation = await shouldSuppressInternalValidation(comp);
  if (skipValidation) {
    return;
  }
  const { valid } = validityState;
  comp.hostElement.classList.toggle("ix-invalid", !valid);
}
function onInputBlur(comp, input) {
  comp.ixBlur.emit();
  if (!input) {
    throw new Error("Input element is not available");
  }
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
export {
  InputElement as I,
  SlotEnd as S,
  TextareaElement as T,
  adjustPaddingForStartAndEnd as a,
  SlotStart as b,
  checkAllowedKeys as c,
  checkInternalValidity as d,
  getAriaAttributesForInput as g,
  mapValidationResult as m,
  onInputBlur as o
};
