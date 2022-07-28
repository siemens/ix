import LivePreview from '@site/src/components/LivePreview';
import ComponentApi from '@site/src/components/ComponentApi';

# OSS licenses pipe

<LivePreview name="oss-licenses-pipe" height="28rem" framework="angular" ></LivePreview>

## Using the OSS licenses pipe

To apply the OSS licenses pipe, use the pipe operator `(|)` as shown in the following HTML code example:

`<p [innerHTML]="html | ossLicenses"></p>`

```html
<h2>OSS licenses pipe</h2>
<button class="btn btn-primary" (click)="toggle()">Toggle pipe</button>
<div class="container">
  <p [innerHTML]="html" id="beforePipe"></p>
  <p [innerHTML]="html | ossLicenses" id="afterPipe"></p>
</div>
```

<ComponentApi name="app-oss-licenses-pipe"></ComponentApi>
