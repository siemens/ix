export interface FieldGroupValidationOptions<T extends HTMLElement> {
  selector: string;
  isChecked: (el: T) => boolean;
  isRequired: (el: T) => boolean;
  updateValidationClasses: (
    elements: T[],
    isChecked: boolean,
    touched: boolean,
    formSubmissionAttempted: boolean
  ) => void;
  clearValidationState: (
    host: HTMLElement,
    elements: T[],
    invalidText?: string
  ) => void;
}

export function useFieldGroupValidation<T extends HTMLElement>(
  hostElement: HTMLElement,
  options: FieldGroupValidationOptions<T>
) {
  function getElements(): T[] {
    return Array.from(hostElement.querySelectorAll(options.selector));
  }

  function hasAnyChecked(): boolean {
    const requiredElements = getElements().filter(options.isRequired);
    return requiredElements.some(options.isChecked);
  }

  return {
    getElements,
    hasAnyChecked,
  };
}
