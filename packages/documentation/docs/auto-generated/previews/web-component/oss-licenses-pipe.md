<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!--
* COPYRIGHT (c) Siemens AG
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
-->
  
<!-- Auto generated! Please edit here: siemens-ix/packages/documentation/static/webcomponent-examples/oss-licenses-pipe.html -->
```html

<cui-slide-toggle [(checked)]="isPipeEnabled"></cui-slide-toggle>
<div class="container">
  <p *ngIf="isPipeEnabled; else #noPipe" [innerHTML]="html"></p>
  <ng-template #noPipe>
    <p [innerHTML]="html | ossLicenses"></p>
  </ng-template>
</div>
```
