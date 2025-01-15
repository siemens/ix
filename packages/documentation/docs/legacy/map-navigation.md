---
unlisted: true
---

import LinkableDocsTabs from '@site/src/components/LinkableDocsTabs';
import NoteBlock from '@site/src/components/NoteBlock';
import LatestTags from '@site/src/components/Tags';

import DocsUx from './\_map-navigation_styleguide.md';
import DocsCode from './\_map-navigation_code.md';

import Tags from './../auto-generated/ix-map-navigation/tags.md';

# Map Navigation

<LatestTags url={'/docs/controls/application-frame/application'} hasDeprecatedAncestor={false} deprecationVersion='3.0.0'></LatestTags>

<br />

<NoteBlock>
  Map navigation is deprecated. Elements can be replaced by the
  following components:<br></br>
  <ul>
    <li>
      App header: replace with
      <a
        target="_blank"
        href="application-frame/application-header"
      >
        application header
      </a>
    </li>
    <li>
      Navigation menu: replace with application
      <a
        target="_blank"
        href="application-frame/application-menu"
      >
        menu
      </a>
    </li>
    <li>
      Sidebar: replace with left inline
      <a target="_blank" href="panes">
        pane
      </a>
    </li>
    <li>
      Sidebar icon: automatically replaced with collapse/expand from
      inline
      <a target="_blank" href="panes">
        pane
      </a>
    </li>
    <li>
      Overlay: replace with floating
      <a target="_blank" href="panes">
        pane
      </a>
      or replace the
      <a
        target="_blank"
        href="application-frame/content"
      >
        content
      </a>
      with the original overlay content
    </li>
  </ul>
</NoteBlock>

<br />

<LinkableDocsTabs>
  <DocsUx />
  <DocsCode />
</LinkableDocsTabs>
