<!--
SPDX-FileCopyrightText: 2026 Siemens AG

SPDX-License-Identifier: MIT

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
-->

# Testability examples

Everything under `src/preview-examples` is a 1:1 port of the corresponding file
in `html-test-app/src/preview-examples`, because those routes are compared
against artefacts that are shared across all the framework test apps:

- the aria snapshots in `framework-tests/__snapshots__`, and
- the DOM/style parity harness in `smoke-tests/parity.spec.ts`.

Anything added to a preview example -- a value read-out, a "set from outside"
button -- changes the accessibility tree and the DOM, so it breaks both.

The Svelte binding still needs that extra UI to be testable: `bind:value` is
only observable if something renders the bound value, and the
component-to-element direction is only observable if something writes to it. So
those variants live here instead, served from `/testability/<name>`, which
nothing snapshots and the parity harness does not visit.

Each file here should say which binding behaviour it exists to expose.
