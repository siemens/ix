/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Unlike vue-test-app this does not import `framework-tests/tests/working.spec`
 * wholesale -- that pulls in ~90 generated specs, and this app only ports a
 * handful of preview examples. The specs are imported individually instead, so
 * the list grows as examples are ported.
 *
 * A generated spec is only listed here if it is in the upstream curated
 * `working.spec.ts` / `working-with-axe.spec.ts` set *and* the example is
 * ported. Of the ported examples that leaves `buttons` and `modal`.
 */
import 'framework-tests/tests/generated/buttons.spec.ts';
import 'framework-tests/tests/generated/modal.spec.ts';

import 'framework-tests/tests/generated/buttons-axe.spec.ts';
import 'framework-tests/tests/generated/modal-axe.spec.ts';

/**
 * Not in the upstream working set, but passing for this app today. They are
 * kept separate so that a failure here is read as "the upstream example is
 * still not blessed" rather than as a regression in the Svelte binding.
 */
import 'framework-tests/tests/generated/card.spec.ts';
import 'framework-tests/tests/generated/checkbox.spec.ts';
import 'framework-tests/tests/generated/dropdown.spec.ts';
import 'framework-tests/tests/generated/event-list.spec.ts';
import 'framework-tests/tests/generated/message.spec.ts';
import 'framework-tests/tests/generated/toast.spec.ts';

import 'framework-tests/tests/generated/checkbox-axe.spec.ts';
import 'framework-tests/tests/generated/dropdown-axe.spec.ts';
import 'framework-tests/tests/generated/event-list-axe.spec.ts';
import 'framework-tests/tests/generated/message-axe.spec.ts';
import 'framework-tests/tests/generated/select-axe.spec.ts';
import 'framework-tests/tests/generated/toast-axe.spec.ts';

/**
 * Deliberately absent. Every entry below was checked against vue-test-app by
 * running the same generated spec there; each one fails there too, so none of
 * them is a Svelte divergence. They are left out rather than worked around,
 * because the fix belongs upstream in `framework-tests`.
 *
 * - `application` and `select`. The Svelte port produces an accessibility tree
 *   *character for character identical* to the Vue port, and both differ from
 *   the stored snapshot in the same two ways: the snapshot was captured from
 *   html-test-app, which has no `<main id="root">` host element, and it predates
 *   the current `ix-menu` (`button "Item 1"` where the component now renders a
 *   `menubar` of `menuitem`s) and the current `ix-select` (`textbox` + open
 *   button where it now exposes a `combobox`).
 * - `input`. The example is now a 1:1 port of the HTML reference (a single
 *   `ix-input`), but the shared `input-aria-snapshot.yaml` was generated from
 *   the *React* example, which is an entirely different page -- two forms, a
 *   date input, a time input, a number input. It cannot match this app,
 *   html-test-app or vue-test-app. `input-axe` has the same problem.
 * - `card-axe`. `ix-icon` renders `role="img"` with no accessible name, which
 *   axe reports as a serious violation. Nothing about the binding affects it.
 * - `icon` and `modal-content`, which have no generated spec at all.
 */
