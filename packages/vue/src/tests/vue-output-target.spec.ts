/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { render } from '@testing-library/vue';
import { defineContainer } from '@stencil/vue-output-target/runtime';
import { defineComponent, h, nextTick, ref } from 'vue';
import { describe, expect, it } from 'vitest';

const testElementTag = 'ix-vue-output-target-class-test';

class VueOutputTargetClassTestElement extends HTMLElement {}

const defineTestElement = () => {
  if (!customElements.get(testElementTag)) {
    customElements.define(testElementTag, VueOutputTargetClassTestElement);
  }
};

const TestContainer = defineContainer(testElementTag, defineTestElement);

describe('Vue output target', () => {
  it('reconciles reactive classes separated by DOM whitespace', async () => {
    const classBinding = ref(' \ninitial\nshared\t ');
    const TestComponent = defineComponent({
      setup: () => () =>
        h(TestContainer, {
          class: classBinding.value,
        }),
    });

    const { container } = render(TestComponent);
    const element = container.querySelector(testElementTag);

    expect(element).not.toBeNull();
    expect(element?.classList.contains('initial')).toBe(true);
    expect(element?.classList.contains('shared')).toBe(true);

    element?.classList.add('ix-invalid');
    classBinding.value = '';
    await nextTick();

    expect(element?.classList.contains('ix-invalid')).toBe(true);
    expect(element?.classList.contains('initial')).toBe(false);
    expect(element?.classList.contains('shared')).toBe(false);

    classBinding.value = 'updated\tshared';
    await nextTick();

    expect(element?.classList.contains('initial')).toBe(false);
    expect(element?.classList.contains('updated')).toBe(true);
    expect(element?.classList.contains('shared')).toBe(true);
    expect(element?.classList.contains('ix-invalid')).toBe(true);
  });
});
