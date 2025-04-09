## Corporate theme for Siemens iX (`@siemens-ix/corporate-theme`)

> ### Experimental
>
> - This is not a full release yet.
> - Breaking changes could happen at any time. If you prefer a stable version, use the brand theme. [`@siemens/ix-brand-theme`](https://code.siemens.com/siemens-ix/ix-brand-theme)
>
>   _Final_ release of `@siemens-ix/corporate-theme is **not** planned yet.

Due to limitations of captain Artifactory (VPN needed), we provide an alternative theme for all external partners. This version doesn't need a VPN, but it requires authentication via npm (https://docs.gitlab.com/17.4/ee/user/packages/npm_registry/index.html).

The alternative theme has the same look and feel as `@siemens/ix-brand-theme`, but it is built in a different way.

### Configure `npm`

```sh
npm config set @siemens-ix:registry https://code.siemens.com/api/v4/packages/npm/
```

or add it to your `.npmrc` ([more information about .npmrc file](https://docs.npmjs.com/cli/v10/configuring-npm/npmrc#files))

```sh
@siemens-ix:registry=https://code.siemens.com/api/v4/packages/npm/
```

After successful configuration **you also need to setup authentication using an auth token. [See the documentation](https://docs.gitlab.com/17.4/ee/user/packages/npm_registry/index.html#install-a-package) and [here](https://docs.npmjs.com/cli/v10/configuring-npm/npmrc#auth-related-configuration) to find out more.**

To authenticate with `npm`:

```sh
npm config set //code.siemens.com/api/v4/packages/npm/:_authToken <YOUR_TOKEN>
```

or provide the token via environment variable with a local `.npmrc`:

```sh
echo "//code.siemens.com/api/v4/packages/npm/:_authToken:_authToken=\${MY_TOKEN}" > .npmrc
```

`MY_TOKEN` has to be a environment variable.

### Installation

Install the npm package `@siemens-ix/corporate-theme`:

```sh
npm install @siemens-ix/corporate-theme
```

Import the theme CSS in your application:

```css
@import '@siemens-ix/corporate-theme/css/brand-theme.css';
```

Import the corporate library (e.g in the `main.ts`). This ensures that assets like the Siemens logo will be provided to the `iX`-library.

```typescript
import '@siemens-ix/corporate-theme';
```

#### Usage

To activate the theme, simply set the class `theme-brand-dark` or `theme-brand-light` on the `body`-tag.

More information [here](https://ix.siemens.io/docs/guidelines/theme/)

```html
<body class="theme-brand-dark">
  <!-- code -->
</body>
```

### Installation _experimental_

<details>
  <summary>
    Did a warning message bring you to this page?
  </summary>
<br />

You may have seen this warning: `Warning: experimental: You are using the experimental brand theme. See ...`. This message appears because the `data-ix-theme`/`data-ix-variant` are part of an upcoming, experimental feature that is not fully stable yet.

</details>

<br />

Install the npm package `@siemens-ix/corporate-theme`:

```sh
npm install @siemens-ix/corporate-theme
```

Import the theme CSS in your application:

```css
@import '@siemens-ix/corporate-theme/css/corporate-theme.css';
```

Import the corporate library (e.g in the `main.ts`). This will ensure that assets, such as the Siemens logo are available in the `iX`-library.

```typescript
import '@siemens-ix/corporate-theme';
```

#### Usage

To activate the theme, simply set the property `data-ix-theme="brand"` on the `HTML`-Element.

More information [here](https://ix.siemens.io/docs/guidelines/theme/)

```html
<html data-ix-theme="brand" data-ix-variant="dark">
  <!-- code -->
  <body></body>
</html>
```

If `data-ix-variant` is not specified, the system color schema will be used by default.
