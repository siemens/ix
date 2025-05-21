import { h } from '@stencil/core';

export function renderFormStatusSlots() {
  const slotNames = ['helper', 'warning', 'valid', 'invalid', 'info'];
  return slotNames.map((name) => h('slot', { name, slot: name }));
}
