/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { defineCustomElement as defineIxApplicationSidebar } from '@siemens/ix/components/ix-application-sidebar.js';
import { defineCustomElement as defineIxApplicationSwitchModal } from '@siemens/ix/components/ix-application-switch-modal.js';
import { defineCustomElement as defineIxBurgerMenu } from '@siemens/ix/components/ix-menu-expand-icon.js';
import { defineCustomElement as defineIxDateTimeCard } from '@siemens/ix/components/ix-date-time-card.js';
import { defineCustomElement as defineIxModalLoading } from '@siemens/ix/components/ix-modal-loading.js';
import { defineCustomElement as defineIxFieldLabel } from '@siemens/ix/components/ix-field-label.js';

defineIxApplicationSwitchModal();
defineIxApplicationSidebar();
defineIxDateTimeCard();
defineIxBurgerMenu();
defineIxModalLoading();
defineIxFieldLabel();
