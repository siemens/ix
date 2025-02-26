'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { IxDrawer as IxDrawerElement, defineCustomElement as defineIxDrawer } from "@siemens/ix/components/ix-drawer.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxDrawerEvents = {
    onOpen: EventName<CustomEvent<any>>,
    onDrawerClose: EventName<CustomEvent<any>>
};

const IxDrawer: StencilReactComponent<IxDrawerElement, IxDrawerEvents> = /*@__PURE__*/ createComponent<IxDrawerElement, IxDrawerEvents>({
    tagName: 'ix-drawer',
    elementClass: IxDrawerElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onOpen: 'open',
        onDrawerClose: 'drawerClose'
    } as IxDrawerEvents,
    defineCustomElement: defineIxDrawer
});

export default IxDrawer;
