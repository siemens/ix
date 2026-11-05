/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Public `ix-modal` properties that can be set through a modal or message
 * configuration object. Any other key (e.g. `innerHTML`) is ignored.
 */
export const MODAL_CONFIG_PROPERTIES = [
  'size',
  'disableAnimation',
  'hideBackdrop',
  'closeOnBackdropClick',
  'beforeDismiss',
  'centered',
  'isNonBlocking',
] as const;

/**
 * Public `ix-modal-header` properties that can be set through a message
 * configuration object. Any other key (e.g. `innerHTML`) is ignored.
 */
export const MODAL_HEADER_CONFIG_PROPERTIES = [
  'icon',
  'iconColor',
  'hideClose',
  'ariaLabelIcon',
  'ariaLabelCloseIconButton',
] as const;

type ModalConfigProperty = (typeof MODAL_CONFIG_PROPERTIES)[number];
type ModalHeaderConfigProperty =
  (typeof MODAL_HEADER_CONFIG_PROPERTIES)[number];

function pickOwnProperties<TKey extends string>(
  config: object,
  keys: readonly TKey[]
): Partial<Record<TKey, unknown>> {
  const picked: Partial<Record<TKey, unknown>> = {};
  for (const key of keys) {
    if (Object.hasOwn(config, key)) {
      picked[key] = (config as Record<string, unknown>)[key];
    }
  }
  return picked;
}

/**
 * Decode a configuration object into the allowlisted `ix-modal` properties.
 *
 * Maps the documented `animation` and `backdrop` flags to the corresponding
 * `disableAnimation` and `hideBackdrop` properties. Explicit
 * `disableAnimation` / `hideBackdrop` values take precedence.
 */
export function decodeModalConfig(
  config: object
): Partial<Pick<HTMLIxModalElement, ModalConfigProperty>> {
  const decoded: Partial<Record<ModalConfigProperty, unknown>> = {};
  const source = config as Record<string, unknown>;

  if (Object.hasOwn(source, 'animation') && source.animation !== undefined) {
    decoded.disableAnimation = !source.animation;
  }

  if (Object.hasOwn(source, 'backdrop') && source.backdrop !== undefined) {
    decoded.hideBackdrop = !source.backdrop;
  }

  return {
    ...decoded,
    ...pickOwnProperties(config, MODAL_CONFIG_PROPERTIES),
  } as Partial<Pick<HTMLIxModalElement, ModalConfigProperty>>;
}

/**
 * Decode a configuration object into the allowlisted `ix-modal-header`
 * properties.
 */
export function decodeModalHeaderConfig(
  config: object
): Partial<Pick<HTMLIxModalHeaderElement, ModalHeaderConfigProperty>> {
  return pickOwnProperties(config, MODAL_HEADER_CONFIG_PROPERTIES) as Partial<
    Pick<HTMLIxModalHeaderElement, ModalHeaderConfigProperty>
  >;
}

/**
 * Apply `aria-labelledby` / `aria-describedby` from a configuration object
 * without mutating the configuration object.
 */
export function applyModalA11yAttributes(
  element: HTMLElement,
  config: { ariaDescribedby?: string; ariaLabelledby?: string }
) {
  if (config.ariaDescribedby) {
    element.setAttribute('aria-describedby', config.ariaDescribedby);
  }

  if (config.ariaLabelledby) {
    element.setAttribute('aria-labelledby', config.ariaLabelledby);
  }
}
