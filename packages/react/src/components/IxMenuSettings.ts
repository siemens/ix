'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { type CustomCloseEvent, type IxMenuSettingsCustomEvent } from "@siemens/ix";
import { IxMenuSettings as IxMenuSettingsElement, defineCustomElement as defineIxMenuSettings } from "@siemens/ix/components/ix-menu-settings.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxMenuSettingsEvents = { onClose: EventName<IxMenuSettingsCustomEvent<CustomCloseEvent>> };

const IxMenuSettings: StencilReactComponent<IxMenuSettingsElement, IxMenuSettingsEvents> = /*@__PURE__*/ createComponent<IxMenuSettingsElement, IxMenuSettingsEvents>({
    tagName: 'ix-menu-settings',
    elementClass: IxMenuSettingsElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onClose: 'close' } as IxMenuSettingsEvents,
    defineCustomElement: defineIxMenuSettings
});

export default IxMenuSettings;
