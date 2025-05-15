import { h } from '@stencil/core';

export function renderFormStatusSlots() {
  return [
    h('slot', { name: 'helper', slot: 'helper' }),
    h('slot', { name: 'warning', slot: 'warning' }),
    h('slot', { name: 'valid', slot: 'valid' }),
    h('slot', { name: 'invalid', slot: 'invalid' }),
    h('slot', { name: 'info', slot: 'info' })
  ];
}
  