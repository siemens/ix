'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { IxMessageBar as IxMessageBarElement, defineCustomElement as defineIxMessageBar } from "@siemens/ix/components/ix-message-bar.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxMessageBarEvents = {
    onClosedChange: EventName<CustomEvent<any>>,
    onCloseAnimationCompleted: EventName<CustomEvent<any>>
};

const IxMessageBar: StencilReactComponent<IxMessageBarElement, IxMessageBarEvents> = /*@__PURE__*/ createComponent<IxMessageBarElement, IxMessageBarEvents>({
    tagName: 'ix-message-bar',
    elementClass: IxMessageBarElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onClosedChange: 'closedChange',
        onCloseAnimationCompleted: 'closeAnimationCompleted'
    } as IxMessageBarEvents,
    defineCustomElement: defineIxMessageBar
});

export default IxMessageBar;
