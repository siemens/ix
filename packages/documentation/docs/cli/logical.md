---
sidebar_position: 2
sidebar_title: Logical
title: Logical
---

import Separator from '@site/src/components/separator/Separator';

Commands guide users through tasks logically and intuitively to remove doubt.

### Arguments and flags
- Try to use flags instead of arguments
- Boolean flags must default to false and be set to true when present
- If the default of a boolean flag is true, use the prefix no- to flip the default

![Arguments and flags 1 - Do](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20509&t=sN9pWBoxiiVCyam3-4)

![Arguments and flags 1 - Don't](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20550&t=sN9pWBoxiiVCyam3-4)

- Abbreviated flags are only used for frequent use cases
- Abbreviated flags must have full length versions
- Always use standard flag names when available
- Defaults must match the most common use case and follow the principle of least astonishment (POLA)

![Arguments and flags 2 - Do](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20532&t=sN9pWBoxiiVCyam3-4)

![Arguments and flags 2 - Don't](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20553&t=sN9pWBoxiiVCyam3-4)

<Separator></Separator>

![Arguments and flags 3 - Do](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20535&t=sN9pWBoxiiVCyam3-4)

![Arguments and flags 3 - Don't](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20556&t=sN9pWBoxiiVCyam3-4)

- Avoid creating order-dependent commands

![Arguments and flags 4 - Do](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20538&t=sN9pWBoxiiVCyam3-4)

![Arguments and flags 4 - Don't](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20559&t=sN9pWBoxiiVCyam3-4)

- Ask for confirmation before executing long-lasting operations or unrecoverable actions
- Clearly state consequential actions
- Offer flags to bypass confirmation dialogs, e.g. -f / --force

![Arguments and flags 5 - Do](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20541&t=sN9pWBoxiiVCyam3-4)

![Arguments and flags 5 - Don't](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20562&t=sN9pWBoxiiVCyam3-4)

- Never expose confidential information inside the CLI
- Use a prompt or read from a file to prevent exposing confidential information

![Arguments and flags 6 - Do](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20544&t=sN9pWBoxiiVCyam3-4)

![Arguments and flags 6 - Don't](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20565&t=sN9pWBoxiiVCyam3-4)


### Naming
Use names that are:
- memorable
- logical
- short
- simple
- specific
- guessable
- lower case (small letters)
- without spacing
- without punctuation
- without special characters
- written in full (no abbreviations or aconyms unless unique)

![Naming - Do](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20547&t=sN9pWBoxiiVCyam3-4)

![Naming - Don't](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4406-20568&t=sN9pWBoxiiVCyam3-4) 
