---
slug: v3-alpha
authors: [danielleroux]
tags: [release]
---

# Release 3.0.0 alpha

![banner](./intro.png)

Are you ready to be among the first to experience 3.0.0?

We are seeking early adopters to test our alpha release and provide valuable feedback.

As we prepare for the official launch of Industrial Experience 3.0.0, your insights will help us refine the code, documentation, and migration guide.

Your participation not only benefits us but also the entire community eagerly awaiting this major update.

<!-- truncate -->

# How to start?

- Install `@siemens/ix` (`@siemens/ix-angular`, `@siemens/ix-react`, `@siemens/ix-vue`) via the `alpha` tag
- Get an exclusive preview of our revamped documentation [here](https://ix.siemens.io/version-alpha/)

Access the comprehensive migration guide to smoothly transition to the new version [here](https://ix.siemens.io/version-alpha/docs/home/migration/3_0_0/)

Your feedback on the new version, documentation redesign, and change log is crucial.

# Update Angular version and support standalone components

![Angular standalone](./angular.png)

**Exciting updates** have been made to our Angular support, enhancing compatibility and ease of use for developers.

**Key changes:**

- **Minimum Angular version:** The minimum supported Angular version has been updated to version 18.
- **Support standalone components:** We now support Angular standalone components out of the box.

**Example:**

```typescript
import { Component } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxButton],
  template: `
    <ix-button>Button</ix-button>
    <ix-button disabled>Button</ix-button>
  `,
})
export default class Buttons {}
```

Standalone components offer a more straightforward approach to developing Angular applications. By utilizing standalone components, directives, and pipes, developers can enhance the authoring experience and minimize reliance on NgModules.

# Global CSS Changes

![global style changes](./css.png)

To avoid style collisions with other CSS frameworks or libraries, a prefix has been added to some global styles such as table, input, and label.

**Key changes**:

- **Input and textarea**: Global styling has been prevented. To use legacy styling, add `class="ix-form-control"` to input or textarea.
- **Label**: Global styling has been prevented. To use legacy styling, add `class="ix-form-label"` to label.
- **Table**: New global classes `.ix-table` and `.ix-table-striped` have been added to display a simple HTML table. These changes aim to enhance compatibility and prevent conflicts in styling across different frameworks and libraries.

# Bootstrap is removed from our dependencies

![remove bootstrap](./bootstrap.png)

The CSS framework Bootstrap has been removed from our main style file, marking a significant change in our approach to styling.

**Key changes:**

- **Bootstrap removal:** The third-party CSS framework Bootstrap has been completely removed from our style file.

**Why this is beneficial:**

- **Reduced dependency:** Removing Bootstrap reduces dependency on third-party frameworks, leading to fewer compatibility issues and conflicts with other libraries.
- **Improved performance:** Without the additional overhead of Bootstrap, the overall performance and loading times of our applications can improve.
- **Customization and control:** This change allows for greater customization and control over the styling, enabling more tailored and specific design choices that align with our unique requirements.

# Input validation enhancements

![input validation](./input-validation.png)

Input elements have been updated to improve user experience by preventing required validation errors from appearing without any user interaction.

**Key changes:**

- **Input elements affected:** ix-input, ix-number-input, ix-date-input, ix-select, and ix-textarea will no longer show required validation errors unless there has been user interaction.
- **Programmatic validation:** If the class ix-invalid is applied programmatically, an error message will still be shown even without user interaction.

# Date picker enhancements

![date picker](./picker.png)

Week numbers are now hidden by default in several date-related components, enhancing the user interface and simplifying the display.

**Key changes:**

**ix-date-picker**: Week numbers are hidden by default. To show them, set `showWeekNumbers` to true.
**ix-datetime-picker**: Week numbers are hidden by default. To show them, set `showWeekNumbers` to true.
**ix-date-dropdown**: Week numbers are hidden by default. To show them, set `showWeekNumbers` to true.
**ix-date-input**: Week numbers are hidden by default. To show them, set `showWeekNumbers` to true.

# Documentation redesign

![documentation redesign](./documentation.png)

In response to valuable user feedback, we are unveiling the redesigned documentation for our design system. Last year, over 30 users participated in a comprehensive survey, providing insights that have shaped this transformation. Our goal is to enhance usability and accessibility, ensuring that our documentation meets the needs of our diverse user base.

**Key changes**

- **Horizontal navigation in the header:** One of the most significant changes is the introduction of horizontal navigation in the header. Previously, users had to navigate deep within the main navigation to find components and icons, which were the most sought-after elements. The new horizontal navigation prominently features main categories, allowing users to access these critical sections quickly and efficiently.
- **Quick access to essential resources:** We have added quick access links to the header. Users can now effortlessly reach the starter app, support resources, and our GitHub repository. This change ensures that essential tools and information are always within easy reach, reducing the time spent searching for these resources.
- **Versioning of documentation:** We understand the importance of maintaining access to previous versions of our documentation. Users can now switch between different versions, making it easier to reference older documentation and track changes over time. This feature is particularly useful for teams working with legacy systems or those who need to compare updates.
- **Clustering components:** In the past, components were listed alphabetically, which could be cumbersome for users looking for related items. We have now clustered components based on their functionality and usage. This logical grouping helps users find what they need more intuitively, enhancing the overall efficiency of the documentation.
- **Preview and code snippet:** For the component pages, we have integrated the preview and code snippet sections. This allows users to easily switch between viewing a component in different themes and accessing the corresponding code for various frameworks. Here you can see the example live:
- **Property table:** Component and style pages now use the same property table for a better overview and consistent behavior.

The redesign of our documentation is a direct result of listening to our users and understanding their needs. We believe these changes will significantly improve the user experience, making our design system more accessible and easier to navigate. We are committed to continuous improvement and have exciting upcoming topics already planned. We welcome any further feedback to ensure our documentation remains a valuable resource for all users.

Please reach out to us at [team.ix.industry@siemens.com](mailto:team.ix.industry@siemens.com) and tell us about your migration experience.
If you encounter any issues, we are here to support you every step of the way.

🙏 We greatly appreciate your contributions.
