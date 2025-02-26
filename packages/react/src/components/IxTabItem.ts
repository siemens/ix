'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { type IxTabItemCustomEvent, type TabClickDetail } from "@siemens/ix";
import { IxTabItem as IxTabItemElement, defineCustomElement as defineIxTabItem } from "@siemens/ix/components/ix-tab-item.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxTabItemEvents = { onTabClick: EventName<IxTabItemCustomEvent<TabClickDetail>> };

const IxTabItem: StencilReactComponent<IxTabItemElement, IxTabItemEvents> = /*@__PURE__*/ createComponent<IxTabItemElement, IxTabItemEvents>({
    tagName: 'ix-tab-item',
    elementClass: IxTabItemElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onTabClick: 'tabClick' } as IxTabItemEvents,
    defineCustomElement: defineIxTabItem
});

export default IxTabItem;
