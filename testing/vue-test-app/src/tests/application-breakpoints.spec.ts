/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Breakpoint } from '@siemens/ix';
import { IxApplication, IxRadio, IxRadioGroup } from '@siemens/ix-vue';
import { render, screen, waitFor } from '@testing-library/vue';
import { defineComponent, ref } from 'vue';
import { describe, expect, it } from 'vitest';

const validBreakpoints = new Set<Breakpoint>(['sm', 'md', 'lg']);

const ApplicationBreakpoints = defineComponent({
  components: {
    IxApplication,
    IxRadio,
    IxRadioGroup,
  },
  setup() {
    const breakpoints = ref<Breakpoint[]>(['md']);
    const setBreakpoint = (event: CustomEvent<Breakpoint>) => {
      if (validBreakpoints.has(event.detail)) {
        breakpoints.value = [event.detail];
      }
    };

    return {
      breakpoints,
      setBreakpoint,
    };
  },
  template: `
    <IxApplication :breakpoints="breakpoints">
      <IxRadioGroup :value="breakpoints[0]" @valueChange="setBreakpoint">
        <IxRadio value="sm" label="Small" aria-label="Small"></IxRadio>
        <IxRadio value="md" label="Medium" aria-label="Medium"></IxRadio>
        <IxRadio value="lg" label="Large" aria-label="Large"></IxRadio>
      </IxRadioGroup>
    </IxApplication>
  `,
});

describe('ApplicationBreakpoints - Radio Interaction', () => {
  it('should update application breakpoint to sm when small radio is selected', async () => {
    const { container } = render(ApplicationBreakpoints);
    const application = container.querySelector('ix-application');

    expect(application).toBeDefined();
    await waitFor(() => {
      expect(application?.classList.contains('breakpoint-md')).toBe(true);
    });

    const smRadio = await screen.findByRole('radio', { name: 'Small' });
    smRadio.click();

    await waitFor(() => {
      expect(application?.classList.contains('breakpoint-sm')).toBe(true);
    });
    expect(application?.classList.contains('breakpoint-md')).toBe(false);
  });
});
