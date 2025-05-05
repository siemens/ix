---
sidebar_label: Guidelines
title: Accessibility guidelines
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'This chapter on accessibility guidelines provides helpful examples to ensure your industrial software applications are inclusive and user-friendly. For a comprehensive guide on accessibility, we recommend referring to the Web Content Accessibility Guidelines (WCAG), which offer detailed standards and practices for creating accessible digital content.'
---

# 

## Perceivable

### Text alternatives

To enhance accessibility in your applications, provide text alternatives for non-text content. This practice allows the content to be adapted into formats that support assistive technology, catering to the needs of users with different abilities. [WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=141%2C131#text-alternatives)

- Provide text alternatives for any non-text content
- Provide text content for videos
- Provide captions for figures and tables

**Example**: Annotate your designs to provide alt text when developing.

![Annotations](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18115&t=JzJxfVEhA9XmeCtN-4)

### Adaptable

Design and implement content that can be presented in various ways, such as a simpler layout, without losing information or structure. This flexibility ensures that users can access and understand the content regardless of their specific needs or the devices they are using. [WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=141%2C131#adaptable)

- Ensure all information is available in text or can be programmatically determined
- Annotate reading order
- Allow both landscape and portrait orientations
- Provide cell tooltip to show context in data tables
- Designate regions like header, main and footer
- Provide related inputs as form

**Example**: Input components include optional attributes for label, required indicator, and helper or feedback text, and are usable inside a form.

![Input with labels and helper texts](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18118&t=JzJxfVEhA9XmeCtN-4)

### Color and contrast

In industrial software applications, color can significantly enhance the visual communication of information. Nonetheless, it is essential to account for users with limited vision or color blindness. Use color combinations that meet accessibility standards for contrast to make it easier for users to see content including separating foreground from background. [WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=141%2C131#distinguishable)

#### Text on background

- Ensure minimum contrast for body text is 4.5:1
- Ensure minimum contrast for large text is 3:1
- Ensure link text is underlined or contrasts 3:1
- Ensure icons meet 3:1 contrast with the background
- Avoid images of text

**Example**: On background colors 1 to 4, both text colors (std-text and soft-text) pass the WCAG AA criteria for body text, large text, and icons.

![Text colors on background colors](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18230&t=JzJxfVEhA9XmeCtN-4)

#### Component contrast

- Ensure component contrast for adjoining colors is 3:1
- Ensure visual states for components meet 3:1 contrast with adjoining colors
- Ensure data visualization meets 3:1 contrast with the background

**Example**: On background colors 1 to 4, primary buttons pass the WCAG AA criteria for default, hover, and active states. For disabled states, the criteria do not apply as inactive components are exempt.

![Component contrast](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18322&t=JzJxfVEhA9XmeCtN-4)

#### Use of color

- Ensure information conveyed by color is available in text
- Provide tooltips and overlays visually distinct from other content

**Example**: The message bar component uses color and an icon to indicate the severity level. Make sure the text matches the severity level and is understandable even without the color or the icon.

![Use of color and icon in message bars](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18225&t=JzJxfVEhA9XmeCtN-4)

## Operable

### Keyboard usage

Make sure that every feature in your industrial software is operable via a keyboard. This approach supports users who prefer or need to use keyboard controls, improving overall accessibility and usability. [WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=141%2C131#keyboard-accessible)

- Annotate tab order
- Annotate keyboard interaction
- Ensure components are operable by keyboard
- Follow ARIA keyboard guidance for custom components

**Example**: Annotate the tab order to allow navigating interactive elements by pressing the Tab key. The standard behavior follows the reading order from left to right and top to bottom.

![Annotated tab order](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18139&t=JzJxfVEhA9XmeCtN-4)

### Enough time

Ensure that users have sufficient time to read and interact with the content in your applications. This consideration is crucial for users working in dynamic environments where interruptions are common. [WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=141%2C131#enough-time)

- Avoid autoplaying content
- Avoid time limits or allow adjustment

**Example**: Toast messages with auto closure visualize the time left until the toast disappears. This auto closure can be paused when hovering the message.

![Toast messages with auto closure](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18173&t=JzJxfVEhA9XmeCtN-4)

### Navigable

Implement navigation aids to help users find content and understand their location within your applications. This includes features like breadcrumbs, search functionality, and clear labeling to enhance user experience and efficiency. [WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=141%2C131#navigable)

- Use headings properly
- Provide descriptive page titles
- Provide clear link text
- Provide a site map
- Provide a Table of Contents
- Provide links to skip blocks
- Provide a search function
- Reduce the use of text styles and decorations

**Example**: Master detail navigation with a breadcrumb, hierarchy of headings and tab navigation within details.

![Master detail navigation](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18202&t=JzJxfVEhA9XmeCtN-4)

### Input modalities

Enhance the usability of your applications by making it easier for users to operate functionality through various input methods. This includes supporting keyboard, mouse, touch, and voice inputs to accommodate different user preferences and working conditions. [WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2&currentsidebar=%23col_overview&showtechniques=246%2C111#input-modalities)

- Allow simple pointer actions for all interactions
- Ensure minimum target size of 24x24 pixels
- Provide alternatives to device motion responses
- Allow abort, undo and reverse for pointer actions

**Example**: The chip component, which is clickable, has a minimum height of 32px to ensure it meets accessibility requirements for touch targets. The pill component, being non-interactive and used only for displaying status, can have a smaller height.

![Chips and pill](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18208&t=JzJxfVEhA9XmeCtN-4)

## Understandable

### Readable

Make text content in your applications easy to read and understand. Implement straightforward language, legible typography, and organized layout to improve user experience and accessibility. [WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2&currentsidebar=%23col_overview&showtechniques=111%2C241%2C246%2C247%2C322%2C331#readable)

- Specify the default language of the page in HTML
- Use simple, clear language
- Provide definitions for complex terms

**Example**: Our writing guidelines help making applications readable and understandable.

![Wording example](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18180&t=JzJxfVEhA9XmeCtN-4)

### Predictable

Create consistent and intuitive applications that behave as users expect. Ensure navigation and interactions follow established patterns, helping users to interact with your application without unexpected behavior. [WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=141%2C131#predictable)

- Provide clear error messages and correction options
- Provide help mechanisms in the same location
- Place navigation menus in the same location across pages
- Use the same icons for identical functions
- Ensure predictable patterns on input
- Ensure predictable patterns on focus
- Keep button and link styles consistent

**Example**: Using the application frame ensures that the main navigation is always in the same location. 

![Application frame](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18219&t=JzJxfVEhA9XmeCtN-4)

### Input assistance

Actively assist users in avoiding errors through preventive design and helpful guidance. When mistakes do occur, provide clear, constructive feedback and simple correction options to help users recover and complete their tasks successfully. [WCAG reference](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2&currentsidebar=%23col_overview#input-assistance)

- Provide labels for inputs
- Describe errors
- Provide expected data format
- Ensure persistence of labels and instructions
- Ensure visibility of error messages
- Avoid validation before user exits focus
- Ensure easy access to correct inputs
- Provide reverse and undo
- Avoid inappropriate disruption by feedback and notifications
- Avoid redundant entries
- Allow easy authentication
- Indicate required fields and provide legend

**Example**: Errors are described using the feedback text of input components.

![Helper and feedback text](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18196&t=JzJxfVEhA9XmeCtN-4)

## Robust

Build your application with clean, standards-compliant code that ensures compatibility with current and future browsers, devices, and assistive technologies.

- Use proper ARIA labels and roles
- Make status messages programmatically available
- Test with multiple browsers and versions
- Ensure functionality with assistive technologies
- Test with different zoom levels

**Example**: Test whether content is readable and functional when zoomed up to at least 200%, ensuring users with visual impairments can effectively use your application.

![Page zoom](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5402-18199&t=JzJxfVEhA9XmeCtN-4)
