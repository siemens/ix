<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  A 1:1 port of html-test-app/src/preview-examples/checkbox.html, which
  demonstrates the CSS-only form controls rather than `ix-checkbox`. There is no
  Svelte binding involved here at all.

  The `ix-checkbox` component and its `bind:checked` are exercised by
  `src/testability-examples/checkbox.svelte` instead.
-->

<div style="margin-bottom: 1rem">
  <input class="ix-form-control" type="checkbox" id="checkbox_01" />
  <label class="ix-form-label" for="checkbox_01">Simple checkbox</label>
</div>

<div>
  <input class="ix-form-control" type="checkbox" id="checkbox_02" disabled />
  <label class="ix-form-label" for="checkbox_02">Disabled checkbox</label>
</div>
