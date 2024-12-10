---
sidebar_position: 1
sidebar_title: Consistent
title: Consistent
---

CLIs are the same across the whole product, follow our conventions and use our recommended frameworks.

### Best practice
- Always use a command line library when available
- Always return a zero exit code to signal success
- Always return non-zero exit code to signal failure
- Always send your output to stdout
- Always send your messaging to stderr

![Best practice - Do](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20437&t=sN9pWBoxiiVCyam3-4)

![Best practice - Don't](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20440&t=sN9pWBoxiiVCyam3-4)

### Subcommands
- Use consistent subcommands
- Use consistent names for all subcommand levels
- Use clear and unique names for subcommands

![Subcommands - Do](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20446&t=sN9pWBoxiiVCyam3-4)

![Subcommands - Don't](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20502&t=sN9pWBoxiiVCyam3-4)

### Changes 
- Always try to make additive changes 
- Always warn users about non-additive changes
- Avoid making breaking changes
- Provide a migration period and strategy for breaking changes

![Changes - Do](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20475&t=sN9pWBoxiiVCyam3-4)

![Changes - Don't](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20488&t=sN9pWBoxiiVCyam3-4)
