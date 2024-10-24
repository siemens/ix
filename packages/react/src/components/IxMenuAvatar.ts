'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { IxMenuAvatar as IxMenuAvatarElement, defineCustomElement as defineIxMenuAvatar } from "@siemens/ix/components/ix-menu-avatar.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxMenuAvatarEvents = { onLogoutClick: EventName<CustomEvent<any>> };

const IxMenuAvatar: StencilReactComponent<IxMenuAvatarElement, IxMenuAvatarEvents> = /*@__PURE__*/ createComponent<IxMenuAvatarElement, IxMenuAvatarEvents>({
    tagName: 'ix-menu-avatar',
    elementClass: IxMenuAvatarElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onLogoutClick: 'logoutClick' } as IxMenuAvatarEvents,
    defineCustomElement: defineIxMenuAvatar
});

export default IxMenuAvatar;
