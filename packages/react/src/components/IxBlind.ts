'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { IxBlind as IxBlindElement, defineCustomElement as defineIxBlind } from "@siemens/ix/components/ix-blind.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxBlindEvents = { onCollapsedChange: EventName<CustomEvent<boolean>> };

const IxBlind: StencilReactComponent<IxBlindElement, IxBlindEvents> = /*@__PURE__*/ createComponent<IxBlindElement, IxBlindEvents>({
    tagName: 'ix-blind',
    elementClass: IxBlindElement,
    react: React,
    events: { onCollapsedChange: 'collapsedChange' } as IxBlindEvents,
    defineCustomElement: defineIxBlind
});

export default IxBlind;
