'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { IxCard as IxCardElement, defineCustomElement as defineIxCard } from "@siemens/ix/components/ix-card.js";
import type { StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxCardEvents = NonNullable<unknown>;

const IxCard: StencilReactComponent<IxCardElement, IxCardEvents> = /*@__PURE__*/ createComponent<IxCardElement, IxCardEvents>({
    tagName: 'ix-card',
    elementClass: IxCardElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as IxCardEvents,
    defineCustomElement: defineIxCard
});

export default IxCard;
