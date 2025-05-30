'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { type CustomCloseEvent, type IxMenuAboutCustomEvent } from "@siemens/ix";
import { IxMenuAbout as IxMenuAboutElement, defineCustomElement as defineIxMenuAbout } from "@siemens/ix/components/ix-menu-about.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxMenuAboutEvents = {
    onTabChange: EventName<CustomEvent<string>>,
    onClose: EventName<IxMenuAboutCustomEvent<CustomCloseEvent>>
};

const IxMenuAbout: StencilReactComponent<IxMenuAboutElement, IxMenuAboutEvents> = /*@__PURE__*/ createComponent<IxMenuAboutElement, IxMenuAboutEvents>({
    tagName: 'ix-menu-about',
    elementClass: IxMenuAboutElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onTabChange: 'tabChange',
        onClose: 'close'
    } as IxMenuAboutEvents,
    defineCustomElement: defineIxMenuAbout
});

export default IxMenuAbout;
