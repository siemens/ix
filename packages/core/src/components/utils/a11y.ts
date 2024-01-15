/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export const a11yBoolean = (value: boolean) => (value ? 'true' : 'false');

export const a11yHostAttributes = (
  hostElement: HTMLElement,
  ignoreAttributes: A11yAttributeName[] = []
): Record<A11yAttributeName, any> => {
  const attributeObject: Record<string, any> = {};
  a11yAttributes.forEach((attr) => {
    if (hostElement.hasAttribute(attr)) {
      const value = hostElement.getAttribute(attr);
      if (value !== null && !ignoreAttributes.includes(attr)) {
        attributeObject[attr] = hostElement.getAttribute(attr);
        hostElement.removeAttribute(attr);
      }
    }
  });

  return attributeObject;
};

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
export type A11yAttributes = PartialRecord<A11yAttributeName, any>;

export type A11yAttributeName =
  | 'role'
  | 'aria-activedescendant'
  | 'aria-atomic'
  | 'aria-autocomplete'
  | 'aria-braillelabel'
  | 'aria-brailleroledescription'
  | 'aria-busy'
  | 'aria-checked'
  | 'aria-colcount'
  | 'aria-colindex'
  | 'aria-colindextext'
  | 'aria-colspan'
  | 'aria-controls'
  | 'aria-current'
  | 'aria-describedby'
  | 'aria-description'
  | 'aria-details'
  | 'aria-disabled'
  | 'aria-errormessage'
  | 'aria-expanded'
  | 'aria-flowto'
  | 'aria-haspopup'
  | 'aria-hidden'
  | 'aria-invalid'
  | 'aria-keyshortcuts'
  | 'aria-label'
  | 'aria-labelledby'
  | 'aria-level'
  | 'aria-live'
  | 'aria-multiline'
  | 'aria-multiselectable'
  | 'aria-orientation'
  | 'aria-owns'
  | 'aria-placeholder'
  | 'aria-posinset'
  | 'aria-pressed'
  | 'aria-readonly'
  | 'aria-relevant'
  | 'aria-required'
  | 'aria-roledescription'
  | 'aria-rowcount'
  | 'aria-rowindex'
  | 'aria-rowindextext'
  | 'aria-rowspan'
  | 'aria-selected'
  | 'aria-setsize'
  | 'aria-sort'
  | 'aria-valuemax'
  | 'aria-valuemin'
  | 'aria-valuenow'
  | 'aria-valuetext';

const a11yAttributes: A11yAttributeName[] = [
  'role',
  'aria-activedescendant',
  'aria-atomic',
  'aria-autocomplete',
  'aria-braillelabel',
  'aria-brailleroledescription',
  'aria-busy',
  'aria-checked',
  'aria-colcount',
  'aria-colindex',
  'aria-colindextext',
  'aria-colspan',
  'aria-controls',
  'aria-current',
  'aria-describedby',
  'aria-description',
  'aria-details',
  'aria-disabled',
  'aria-errormessage',
  'aria-expanded',
  'aria-flowto',
  'aria-haspopup',
  'aria-hidden',
  'aria-invalid',
  'aria-keyshortcuts',
  'aria-label',
  'aria-labelledby',
  'aria-level',
  'aria-live',
  'aria-multiline',
  'aria-multiselectable',
  'aria-orientation',
  'aria-owns',
  'aria-placeholder',
  'aria-posinset',
  'aria-pressed',
  'aria-readonly',
  'aria-relevant',
  'aria-required',
  'aria-roledescription',
  'aria-rowcount',
  'aria-rowindex',
  'aria-rowindextext',
  'aria-rowspan',
  'aria-selected',
  'aria-setsize',
  'aria-sort',
  'aria-valuemax',
  'aria-valuemin',
  'aria-valuenow',
  'aria-valuetext',
];
