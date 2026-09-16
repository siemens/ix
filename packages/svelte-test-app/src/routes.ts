/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Component } from 'svelte';

import Application from './preview-examples/application.svelte';
import Buttons from './preview-examples/buttons.svelte';
import Card from './preview-examples/card.svelte';
import Checkbox from './preview-examples/checkbox.svelte';
import Dropdown from './preview-examples/dropdown.svelte';
import EventList from './preview-examples/event-list.svelte';
import Icon from './preview-examples/icon.svelte';
import Input from './preview-examples/input.svelte';
import Message from './preview-examples/message.svelte';
import Modal from './preview-examples/modal.svelte';
import Select from './preview-examples/select.svelte';
import Toast from './preview-examples/toast.svelte';

import TestabilityButtons from './testability-examples/buttons.svelte';
import TestabilityCheckbox from './testability-examples/checkbox.svelte';
import TestabilityInput from './testability-examples/input.svelte';
import TestabilityMessage from './testability-examples/message.svelte';
import TestabilityModal from './testability-examples/modal.svelte';
import TestabilitySelect from './testability-examples/select.svelte';

/**
 * Mirrors the `/preview/<example>` route shape of the other test apps, so the
 * generated specs in `framework-tests` and the parity harness in
 * `smoke-tests/parity.spec.ts` can address this app the same way.
 *
 * Every example here is a 1:1 port of the corresponding
 * `html-test-app/src/preview-examples/<example>.html`. Keep it that way --
 * anything extra belongs under {@link testabilityRoutes}.
 */
export const previewRoutes: Record<string, Component<any>> = {
  '/preview/application': Application,
  '/preview/buttons': Buttons,
  '/preview/card': Card,
  '/preview/checkbox': Checkbox,
  '/preview/dropdown': Dropdown,
  '/preview/event-list': EventList,
  '/preview/icon': Icon,
  '/preview/input': Input,
  '/preview/message': Message,
  '/preview/modal': Modal,
  '/preview/select': Select,
  '/preview/toast': Toast,
};

/**
 * Variants of the preview examples that add whatever the Svelte-specific tests
 * need to observe -- a read-out of a bound value, a button that writes to it.
 *
 * They are on their own route prefix because they are deliberately *not* 1:1
 * with the HTML reference, so neither the shared aria snapshots nor the parity
 * harness may see them. See `src/testability-examples/README.md`.
 */
export const testabilityRoutes: Record<string, Component<any>> = {
  '/testability/buttons': TestabilityButtons,
  '/testability/checkbox': TestabilityCheckbox,
  '/testability/input': TestabilityInput,
  '/testability/message': TestabilityMessage,
  '/testability/modal': TestabilityModal,
  '/testability/select': TestabilitySelect,
};

export const routes: Record<string, Component<any>> = {
  ...previewRoutes,
  ...testabilityRoutes,
};
