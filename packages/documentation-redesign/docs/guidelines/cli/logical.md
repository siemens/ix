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

![Arguments and flags 1 - Do](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1034-2260&t=2JP2nlNciwS43htp-1)

![Arguments and flags 1 - Don't](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1034-6716&t=2JP2nlNciwS43htp-1)

- Abbreviated flags are only used for frequent use cases
- Abbreviated flags must have full length versions
- Always use standard flag names when available
- Defaults must match the most common use case and follow the principle of least astonishment (POLA)

![Arguments and flags 2 - Do](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1034-2348&t=2JP2nlNciwS43htp-1)

![Arguments and flags 2 - Don't](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1034-6720&t=2JP2nlNciwS43htp-1)

<Separator></Separator>

![Arguments and flags 3 - Do](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1034-2351&t=2JP2nlNciwS43htp-1)

![Arguments and flags 3 - Don't](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1034-6723&t=2JP2nlNciwS43htp-1)

- Avoid creating order-dependent commands

![Arguments and flags 4 - Do](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1034-2354&t=2JP2nlNciwS43htp-1)

![Arguments and flags 4 - Don't](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1034-6726&t=2JP2nlNciwS43htp-1)

- Ask for confirmation before executing long-lasting operations or unrecoverable actions
- Clearly state consequential actions
- Offer flags to bypass confirmation dialogs, e.g. -f / --force

![Arguments and flags 5 - Do](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1034-2357&t=2JP2nlNciwS43htp-1)

![Arguments and flags 5 - Don't](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1034-6729&t=2JP2nlNciwS43htp-1)

- Never expose confidential information inside the CLI
- Use a prompt or read from a file to prevent exposing confidential information

![Arguments and flags 6 - Do](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1034-2360&t=2JP2nlNciwS43htp-1)

![Arguments and flags 6 - Don't](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1034-6732&t=2JP2nlNciwS43htp-1)


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

![Naming - Do](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1034-2363&t=2JP2nlNciwS43htp-1)

![Naming - Don't](https://www.figma.com/design/YSvLeddwfyjLx8G5QWOTCH/Documentation-Visuals?node-id=1034-6735&t=2JP2nlNciwS43htp-1) 
