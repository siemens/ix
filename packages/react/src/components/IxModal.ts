'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { IxModal as IxModalElement, defineCustomElement as defineIxModal } from "@siemens/ix/components/ix-modal.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxModalEvents = {
    onDialogClose: EventName<CustomEvent<any>>,
    onDialogDismiss: EventName<CustomEvent<any>>
};

const IxModal: StencilReactComponent<IxModalElement, IxModalEvents> = /*@__PURE__*/ createComponent<IxModalElement, IxModalEvents>({
    tagName: 'ix-modal',
    elementClass: IxModalElement,
    react: React,
    events: {
        onDialogClose: 'dialogClose',
        onDialogDismiss: 'dialogDismiss'
    } as IxModalEvents,
    defineCustomElement: defineIxModal
});

export default IxModal;
