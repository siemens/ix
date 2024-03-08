---
sidebar_position: 5
sidebar_title: Content Security Policy Nonces
title: Content Security Policy Nonces
---

import { ApiTableSinceTag } from '@site/src/components/ApiTableTag';
import AngularIcon from '@site/static/img/angular.svg';
import ReactIcon from '@site/static/img/react.svg';
import WebComponentsIcon from '@site/static/img/webcomponents.svg';
import VueIcon from '@site/static/img/vue.svg';

# Content Security Policy Nonces

<ApiTableSinceTag message="1.5.0" />

In order to prevent certain XSS (Cross-Site Scripting) attacks a [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) can be implemented.
Depending on the CSP configuration in place inline styles and scripts can be forbidden.
By applying a [CSP nonce](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce) such elements can be explicitly allowed even if they would violate the CSP otherwise.

With version 3 the Web Component compiler Stencil (used to build all of our components) introduced support for CSP nonces.
For details on how to use them please read the [official Stencil docs](https://stenciljs.com/docs/csp-nonce) on the topic.
