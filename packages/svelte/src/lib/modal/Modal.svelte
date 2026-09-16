<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<script lang="ts">
  import type { IxModalCustomEvent, IxModalSize } from '@siemens/ix';
  import type { Snippet } from 'svelte';
  import { IxModal } from '../components/index.js';
  import type { ModalSlotProps } from './modal-slot-props.js';

  type Props = {
    beforeDismiss?: (reason?: any) => boolean | Promise<boolean>;
    centered?: boolean;
    closeOnBackdropClick?: boolean;
    disableAnimation?: boolean;
    hideBackdrop?: boolean;
    size?: IxModalSize;
    onDialogClose?: (event: IxModalCustomEvent<any>) => void;
    onDialogDismiss?: (event: IxModalCustomEvent<any>) => void;
    /** Bindable reference to the underlying `ix-modal` element. */
    element?: HTMLIxModalElement;
    children?: Snippet<[ModalSlotProps]>;
  };

  let {
    beforeDismiss,
    centered,
    closeOnBackdropClick,
    disableAnimation,
    hideBackdrop,
    size,
    onDialogClose,
    onDialogDismiss,
    element = $bindable(),
    children,
  }: Props = $props();

  export const close: ModalSlotProps['closeModal'] = (result) => {
    element?.closeModal(result);
  };

  export const dismiss: ModalSlotProps['dismissModal'] = (result) => {
    element?.dismissModal(result);
  };
</script>

<IxModal
  bind:element
  {beforeDismiss}
  {centered}
  {closeOnBackdropClick}
  {disableAnimation}
  {hideBackdrop}
  {size}
  onDialogClose={(event) => onDialogClose?.(event)}
  onDialogDismiss={(event) => onDialogDismiss?.(event)}
>
  {@render children?.({ closeModal: close, dismissModal: dismiss })}
</IxModal>
