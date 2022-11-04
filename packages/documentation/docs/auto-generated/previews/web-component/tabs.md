<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/html-test-app/src/preview-examples/tabs.html -->

```html
<style>
  .example {
    display: block;
    position: relative;
    width: 100%;
  }

  div[data-tab-content] {
    display: none;
  }

  div[data-tab-content].show {
    display: block;
  }
</style>
<div class="example">
  <ix-tabs>
    <ix-tab-item data-tab-id="0">Tab 1</ix-tab-item>
    <ix-tab-item data-tab-id="1">Tab 2</ix-tab-item>
    <ix-tab-item data-tab-id="2">Tab 3</ix-tab-item>
  </ix-tabs>
  <div data-tab-content="0" class="show">Content Tab 1</div>
  <div data-tab-content="1">Content Tab 2</div>
  <div data-tab-content="2">Content Tab 3</div>
</div>

<script>
  (async function () {
    await window.customElements.whenDefined('ix-tabs');
    const tabs = document.querySelectorAll('ix-tab-item[data-tab-id]');

    function registerClickListener(tab) {
      tab.addEventListener('click', (tabContent) => {
        const contentList = document.querySelectorAll('[data-tab-content]');
        contentList.forEach((content) => {
          if (content.dataset.tabContent === tab.dataset.tabId) {
            content.classList.add('show');
          } else {
            content.classList.remove('show');
          }
        });
      });
    }

    tabs.forEach(registerClickListener);
  })();
</script>
```
