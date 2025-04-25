---
sidebar_position: 5
sidebar_label: Blazor
title: Blazor
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Blazor is a framework for building interactive web applications using C# and .NET. This section guides you through the steps to install and set up our design system within a Blazor project, ensuring a seamless and efficient integration process.'
---

#

:::warning Experimental disclaimer

There is no guarantee that the core functionality is fully covered by the Blazor library.
Bug reports, feature or support requests related to the Blazor library can only be handled within the [Blazor repository](https://github.com/yagizhanNY/siemens-ix-blazor).
Nevertheless feedback of any kind will be helpful.

:::

:::info

The Blazor library is not developed by the Siemens Industrial Experience team itself.
All credits go to the maintainers of [siemens-ix-blazor](https://github.com/yagizhanNY/siemens-ix-blazor/graphs/contributors) who are entirely responsible for the package.

:::

## Installation

Install the `SiemensIXBlazor` package from the [NuGet](https://www.nuget.org/packages/SiemensIXBlazor/) package manager.

## .NET CLI

```cmd
dotnet add package SiemensIXBlazor
```

## Package Manager

```cmd
NuGet\Install-Package SiemensIXBlazor
```

Add required `CSS` and `Javascript` packages into the `index.html` file.

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blazor App</title>
    <link
      rel="stylesheet"
      href="_content/SiemensIXBlazor/css/siemens-ix/ix-icons.css"
    />
    <link
      rel="stylesheet"
      href="_content/SiemensIXBlazor/css/siemens-ix/siemens-ix.css"
    />
  </head>
  <body>
    ...
    <script src="_content/SiemensIXBlazor/js/siemens-ix/index.bundle.js"></script>
  </body>
</html>
```
