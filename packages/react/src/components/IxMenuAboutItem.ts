'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { type CustomLabelChangeEvent, type IxMenuAboutItemCustomEvent } from "@siemens/ix";
import { IxMenuAboutItem as IxMenuAboutItemElement, defineCustomElement as defineIxMenuAboutItem } from "@siemens/ix/components/ix-menu-about-item.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxMenuAboutItemEvents = { onLabelChange: EventName<IxMenuAboutItemCustomEvent<CustomLabelChangeEvent>> };

const IxMenuAboutItem: StencilReactComponent<IxMenuAboutItemElement, IxMenuAboutItemEvents> = /*@__PURE__*/ createComponent<IxMenuAboutItemElement, IxMenuAboutItemEvents>({
    tagName: 'ix-menu-about-item',
    elementClass: IxMenuAboutItemElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onLabelChange: 'labelChange' } as IxMenuAboutItemEvents,
    defineCustomElement: defineIxMenuAboutItem
});

export default IxMenuAboutItem;
