<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/documentation/static/webcomponent-examples/tile.html -->
```html
<ix-tile size="small">92.8 °C</ix-tile>

<ix-tile size="medium" class="mr-1">
  <div slot="header">Tile header</div>
  <div class="text-l">92.8 °C</div>
</ix-tile>

<ix-tile size="big">
  <div
    class="d-flex flex-grow-1 align-items-center justify-content-between"
    slot="header"
  >
    Tile header
    <ix-icon-button ghost icon="context-menu"></ix-icon-button>
  </div>
  <div slot="subheader">Temperature</div>
  <div
    style="
      display: flex;
      flex-direction: column;
      height: 100%;
      align-items: flex-end;
      justify-content: space-between;
    "
  >
    <span>92.8 °C</span>
  </div>
  <div
    class="d-flex h-100 align-items-center justify-content-end"
    slot="footer"
  >
    <ix-button ghost slot="footer">
      <ix-icon name="chevron-right-small"></ix-icon>Details
    </ix-button>
  </div>
</ix-tile>
```
