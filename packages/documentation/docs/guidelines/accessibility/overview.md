---
sidebar_position: 3
sidebar_label: Accessibility
title: Accessibility
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Accessibility ensures that digital products are usable by everyone, including people with disabilities. It is crucial for creating inclusive solutions that meet diverse needs and comply with standards like WCAG, enhancing the overall user experience.'
---

# 

## Our commitment as a design system

We are committed that our deliverables qualify for building solutions that are accessible for everyone. We strive to meet WCAG AA standards with providing perceivable, operable, and understandable components that follow our accessibility checklist.

## Ensuring accessibility in products

While our components are designed to meet accessibility standards, it is essential to remember that the overall accessibility of your solutions depends on how these components are used.

Simply incorporating our accessible components does not guarantee that the final product will be fully accessible. It is the responsibility of the developers and designers to ensure that their implementations adhere to accessibility best practices throughout the entire design and development process.

A comprehensible quick reference on how to meet Web Content Accessibility Guidelines can be found [here](https://www.w3.org/WAI/WCAG22/quickref/).

## WCAG and the key principles

Web Content Accessibility Guidelines (WCAG) explains how to make web content more accessible to people with disabilities. WCAG covers web sites, applications, and other digital content. It is developed by the World Wide Web Consortium (W3C) Web Accessibility Initiative (WAI). WCAG is an international standard.

The four main guiding principles of accessibility within WCAG are perceivable, operable, understandable, and robust. These overarching principles contain clear guidelines for creating and presenting WCAG-compliant digital content. 

There are three levels of conformance:
- Level A is the minimum level.
- Level AA includes all Level A and AA requirements. As many organizations we strive to meet Level AA.
- Level AAA includes all Level A, AA, and AAA requirements.

https://www.w3.org/WAI/fundamentals/accessibility-intro/

## Principle 1: Perceivable

> Information and user interface components must be presentable to users in ways they can perceive.

### Provide text alternatives (ALT text)

To enhance accessibility in your applications, provide text alternatives for non-text content ([WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=141%2C131#text-alternatives)). This practice allows the content to be adapted into formats that support assistive technology, catering to the needs of users with different abilities.

- Provide text alternatives for any non-text content, such as icons without text labels
- Provide text content for videos
- Provide captions for figures and tables
- Avoid images containing text

**Example**: Annotate your designs to provide text alternatives when developing.

![Annotations](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18109&t=LutEhcCmwu00FxNT-4)

**Example**: Use ARIA tags to ensure that your content is accessible and understandable to all users, including those using assistive technologies.

| ARIA tag | Description | 
| :----------------- | :------------ |
| `aria-label` | Provides an accessible name for an element. |
| `aria-labelledby`  | Identifies one or more elements that provide the accessible name for an element. It is often used when the label is already present on the page. |
| `aria-describedby` | Identifies the element that provides a description for the element it is applied to. |


### Create adaptable content

Design and implement content that can be presented in various ways, such as a simpler layout, without losing information or structure. This flexibility allows users to access and understand content regardless of their specific needs or the devices they are using. [WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=141%2C131#adaptable)

- Ensure information is available in text or can be programmatically determined
- Allow both landscape and portrait orientations
- Provide cell tooltips to show context in data tables
- Designate regions like header, main and footer
- Provide related inputs as form
- Annotate reading order

**Example**: [Input components](../../components/forms-field/index.mdx) include optional attributes for label, required indicator, and helper or feedback text, and are usable inside a form.

![Input with labels and helper texts](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18118&t=JzJxfVEhA9XmeCtN-4)

### Combine color and contrast

In industrial software applications, color significantly enhances the visual communication of information. Nonetheless, it is essential to account for users with limited vision or color blindness. Use color combinations ([WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=141%2C131#distinguishable)) that meet accessibility standards for contrast to make it easier for users to see content, including separating foreground from background. 

#### Use text on background

- Ensure minimum contrast for body text is 4.5:1
- Ensure minimum contrast for large text is 3:1
- Ensure icons meet 3:1 contrast with the background

**Example**: On background colors 1 to 4, both text colors (std-text and soft-text) pass the WCAG AA criteria for body text, large text, and icons.

![Text colors on background colors](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18230&t=JzJxfVEhA9XmeCtN-4)

#### Contrast components

- Ensure component contrast for adjoining colors is 3:1
- Ensure visual states for components meet 3:1 contrast with adjoining colors
- Ensure data visualization meets 3:1 contrast with the background

**Example**: On background colors 1 to 4, primary [buttons](../../components/button/index.mdx) pass the WCAG AA criteria for default, hover, and active states. For disabled states, the criteria do not apply as inactive components are exempt.

![Component contrast](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18322&t=JzJxfVEhA9XmeCtN-4)

**Example**: In the [push card component](../../components/card/index.mdx), we adjust the font color based on the card's status color to ensure sufficient contrast.

![Component contrast for push card](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5638-15909&t=LBH5sM5nmqFyILZP-4)

#### Use more than color

- Ensure information conveyed by color is also available in text

**Example**: The [message bar component](../../components/messagebar/index.mdx) uses color and an icon to indicate the severity level. To be compliant with WCAG, the text must match the severity level and be understandable without the color or the icon.

![Use of color and icon in message bars](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18225&t=JzJxfVEhA9XmeCtN-4)

## Principle 2: Operable

> User interface components and navigation must be operable.

### Provide keyboard usage

Every feature in your industrial software needs to be operable via a keyboard ([WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=141%2C131#keyboard-accessible)). This approach supports users who prefer or need to use keyboard controls, improving overall accessibility and usability. 

- Annotate tab order
- Annotate keyboard interaction
- Ensure all components are operable by keyboard
- Follow ARIA keyboard guidance for custom components ([ARIA reference](https://www.w3.org/WAI/ARIA/apg/)) 

**Example**: Annotate tab order to allow the navigation of interactive elements by pressing the Tab key. The standard behavior follows the reading order from left to right and top to bottom.

![Annotated tab order](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18139&t=JzJxfVEhA9XmeCtN-4)

**Example**: Note that disabled elements are non-interactive, do not display tooltips, and are ignored by assistive technologies like screen readers.

![Disabled elements non-interactive](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5574-15465&t=LutEhcCmwu00FxNT-4)

### Give enough time

Ensure that users have sufficient time to read and interact with the content in your applications. This consideration is crucial for users working in dynamic environments where interruptions are common ([WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=141%2C131#enough-time))

- Avoid autoplay content
- Avoid time limits or allow adjustment

**Example**: [Toast messages](../../components/toast/index.mdx) with auto closure visualize the time left until the toast disappears. This auto closure can be paused when hovering over the message.

![Toast messages with auto closure](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18173&t=JzJxfVEhA9XmeCtN-4)

### Implement navigable aids

Navigation aids help users find content and understand their location within your applications ([WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=141%2C131#navigable)). This includes features like breadcrumbs, search functionality, and clear labeling to enhance user experience and efficiency. 

- Use headings properly (`<h1>` ... `<h6>`)
- Provide descriptive page titles
- Provide clear link text
- Provide links to skip blocks
- Provide a search function
- Reduce the use of text styles and decorations

**Example**: Here we have detailed navigation using a [breadcrumb](../../components/breadcrumb/index.mdx), hierarchy of headings and [tab](../../components/tabs/index.mdx) navigation within details.

![Master detail navigation](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18202&t=JzJxfVEhA9XmeCtN-4)

### Customize input modalities

Enhance the usability of your applications by making it easier for users to operate functionality through various input methods. This includes supporting keyboard, mouse, touch, and voice inputs to accommodate different user preferences and working conditions ([WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2&currentsidebar=%23col_overview&showtechniques=246%2C111#input-modalities)).

- Allow for simple pointer actions for all interactions
- Ensure minimum target size of 24x24 pixels
- Provide alternatives to device motion responses
- Allow cancel, undo and reverse for pointer actions

**Example**: The [chip component](../../components/chip/index.mdx), which is clickable, has a minimum height of 32px to ensure it meets accessibility requirements for touch targets. The [pill component](../../components/pill/index.mdx), being non-interactive and used only for displaying status, can have a smaller height.

![Chips and pill](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18208&t=JzJxfVEhA9XmeCtN-4)

## Principle 3: Understandable

> Information and the operation of the user interface must be understandable.

### Ensure readability and comprehension

Make text content easy to read and understand. Implement straightforward language, legible typography, and organized layout to improve user experience and accessibility ([WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2&currentsidebar=%23col_overview&showtechniques=111%2C241%2C246%2C247%2C322%2C331#readable)).

- Specify the default language of the page in HTML
- Use simple, clear language
- Provide definitions for complex terms

**Example**: Our [writing guidelines](../../guidelines/language/basics.md) help make applications readable and understandable.

![Wording example](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18180&t=JzJxfVEhA9XmeCtN-4)

### Be predictable

Create consistent and intuitive applications that behave as users expect. Ensure navigation and interactions follow established patterns, helping users to interact with your application without unexpected behavior ([WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=141%2C131#predictable)).

- Provide clear error messages and correction options
- Provide help mechanisms in the same location
- Use the same icons for identical functions
- Ensure predictable patterns on input and focus
- Keep button styles consistent

**Example**: Using the application frame ensures that the main navigation is always in the same location. 

![Application frame](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18219&t=JzJxfVEhA9XmeCtN-4)

### Give input assistance

Actively assist users in avoiding errors through preventive design and helpful guidance. When mistakes do occur, provide clear, constructive feedback and simple correction options to help users recover and complete their tasks successfully ([WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2&currentsidebar=%23col_overview#input-assistance)).

- Provide labels for inputs
- Indicate required fields and provide legends
- Provide expected data formats
- Avoid validation before user exits focus
- Describe errors
- Provide reverse and undo

**Example**: Errors are described using the feedback text of input components.

![Helper and feedback text](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18196&t=JzJxfVEhA9XmeCtN-4)

## Principle 4: Robust

> Content must be robust enough that it can be interpreted by a wide variety of user agents,including assistive technologies.

Build your application with clean, standards-compliant code that ensures compatibility with browsers, devices and assistive technologies.

- Use proper ARIA labels and roles
- Make status messages programmatically available
- Test with multiple browsers and versions
- Test with assistive technologies
- Test with different zoom levels

**Example**: Test whether content is readable and functional when zooming in to at least 200%, ensuring users with visual impairments can effectively use your application.

![Page zoom](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18199&t=JzJxfVEhA9XmeCtN-4)

