'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { IxMenu as IxMenuElement, defineCustomElement as defineIxMenu } from "@siemens/ix/components/ix-menu.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxMenuEvents = {
    onExpandChange: EventName<CustomEvent<boolean>>,
    onMapExpandChange: EventName<CustomEvent<boolean>>,
    onOpenAppSwitch: EventName<CustomEvent<void>>,
    onOpenSettings: EventName<CustomEvent<void>>,
    onOpenAbout: EventName<CustomEvent<void>>
};

const IxMenu: StencilReactComponent<IxMenuElement, IxMenuEvents> = /*@__PURE__*/ createComponent<IxMenuElement, IxMenuEvents>({
    tagName: 'ix-menu',
    elementClass: IxMenuElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onExpandChange: 'expandChange',
        onMapExpandChange: 'mapExpandChange',
        onOpenAppSwitch: 'openAppSwitch',
        onOpenSettings: 'openSettings',
        onOpenAbout: 'openAbout'
    } as IxMenuEvents,
    defineCustomElement: defineIxMenu
});

export default IxMenu;
