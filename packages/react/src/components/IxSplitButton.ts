'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { type IxSplitButtonCustomEvent } from "@siemens/ix";
import { IxSplitButton as IxSplitButtonElement, defineCustomElement as defineIxSplitButton } from "@siemens/ix/components/ix-split-button.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxSplitButtonEvents = { onButtonClick: EventName<IxSplitButtonCustomEvent<MouseEvent>> };

const IxSplitButton: StencilReactComponent<IxSplitButtonElement, IxSplitButtonEvents> = /*@__PURE__*/ createComponent<IxSplitButtonElement, IxSplitButtonEvents>({
    tagName: 'ix-split-button',
    elementClass: IxSplitButtonElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onButtonClick: 'buttonClick' } as IxSplitButtonEvents,
    defineCustomElement: defineIxSplitButton
});

export default IxSplitButton;
