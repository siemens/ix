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
    const elements = getElements().filter(options.isRequired);
    if (elements.length > 0 && (elements[0] as any).name) {
      const name = (elements[0] as any).name;
      const form = hostElement.closest('form');
      const allWithSameName: NodeListOf<T> = form
        ? form.querySelectorAll(`${options.selector}[name="${name}"]`)
        : document.querySelectorAll(`${options.selector}[name="${name}"]`);
      return Array.from(allWithSameName)
        .filter(options.isRequired)
        .some(options.isChecked);
    }
    return elements.some(options.isChecked);
  }

  return {
    getElements,
    hasAnyChecked,
  };
}
