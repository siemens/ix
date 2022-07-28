---
sidebar_position: 3
---

import LivePreview from '@site/src/components/LivePreview';
import ComponentApi from '@site/src/components/ComponentApi';

# About and Legal

<LivePreview name="about-and-legal" height="28rem"></LivePreview>

## Change language of legal links

Supported language codes are `'global/en' | 'global/es' | 'de/de' | 'cn/zh'`

The language support is connected through the `cui-vertical-tabs`-component. Set one of the current supported langauges as `input`-parameter:

`<cui-vertical-tabs #verticalTabs [aboutAndLegalLinkLanguage]="'de/de'">`

<LivePreview name="about-and-legal-language" height="28rem"></LivePreview>

<ComponentApi name="cui-about-and-legal-nav-item"></ComponentApi>
<ComponentApi name="cw-menu-about"></ComponentApi>
<ComponentApi name="cw-menu-about-item"></ComponentApi>
