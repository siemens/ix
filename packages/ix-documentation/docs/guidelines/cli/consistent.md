---
sidebar_position: 1
sidebar_label: Consistent
title: Consistent
hide_table_of_contents: false
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: "CLIs are the same across the whole product, follow our conventions and use our recommended frameworks."
---

#

## Best practice
- Always use a command line library when available
- Always return a zero exit code to signal success
- Always return non-zero exit code to signal failure
- Always send your output to stdout
- Always send your messaging to stderr

![Best practice - Do](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1025-1371&t=uLX24CWds4Z1hGKZ-1)

![Best practice - Don't](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1025-1460&t=uLX24CWds4Z1hGKZ-1)

## Subcommands
- Use consistent subcommands
- Use consistent names for all subcommand levels
- Use clear and unique names for subcommands

![Subcommands - Do](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1025-1547&t=uLX24CWds4Z1hGKZ-1)

![Subcommands - Don't](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1025-1674&t=uLX24CWds4Z1hGKZ-1)

## Changes 
- Always try to make additive changes 
- Always warn users about non-additive changes
- Avoid making breaking changes
- Provide a migration period and strategy for breaking changes

![Changes - Do](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1021-6767&t=Oc1GlCBDeEX4Xbxj-1)

![Changes - Don't](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1021-6941&t=Oc1GlCBDeEX4Xbxj-1)
