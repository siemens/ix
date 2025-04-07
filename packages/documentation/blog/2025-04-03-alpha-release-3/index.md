---
slug: v3-alpha
title: 📢 Release 3.0.0-alpha
authors: [danielleroux]
tags: []
---

Are you ready to be among the first to experience iX 3.0.0?

We are seeking early adopters to test our alpha release and provide valuable feedback.

As we prepare for the official launch of iX Design System 3.0.0, your insights will help us refine the code, documentation, and migration guide.

Your participation not only benefits us but also the entire community eagerly awaiting this major update.

<!-- truncate -->

# How to start?

- Install `@siemens/ix` (`@siemens/ix-angular`, `@siemens/ix-react`, `@siemens/ix-vue`) via the `alpha` tag
- Get an exclusive preview of our revamped documentation [here](https://ix.siemens.io/version-alpha/)

Access the comprehensive migration guide to smoothly transition to the new version [here](https://ix.siemens.io/version-alpha/docs/home/migration/3_0_0/)

Your feedback on the new version, documentation redesign, and change log is crucial.

# News Update: Angular Version and Standalone Project Support

**Exciting updates** have been made to our Angular support, enhancing compatibility and ease of use for developers.

**Key Changes:**

- **Minimum Angular Version:** The minimum supported Angular version has been updated to version 18.
- **Standalone Project Support:** We now support Angular Standalone projects out of the box.

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

These updates aim to provide a more modern and streamlined development experience, making it easier to integrate and use our components in Angular projects.

# News Update: Global CSS Changes

To avoid style collisions with other CSS frameworks or libraries, a prefix has been added to some global styles such as table, input, and label.

Key Changes:

- **Input and Textarea**: Global styling has been prevented. To use legacy styling, add `class="ix-form-control"` to input or textarea.
- **Label**: Global styling has been prevented. To use legacy styling, add `class="ix-form-label"` to label.
- **Table**: New global classes `.ix-table` and `.ix-table-striped` have been added to display a simple HTML table. These changes aim to enhance compatibility and prevent conflicts in styling across different frameworks and libraries.

# News Update: Date Picker Enhancements

Week numbers are now hidden by default in several date-related components, enhancing the user interface and simplifying the display.

Key Changes:

**ix-date-picker**: Week numbers are hidden by default. To show them, set `showWeekNumbers` to true.
**ix-datetime-picker**: Week numbers are hidden by default. To show them, set `showWeekNumbers` to true.
**ix-date-dropdown**: Week numbers are hidden by default. To show them, set `showWeekNumbers` to true.
**ix-date-input**: Week numbers are hidden by default. To show them, set `showWeekNumbers` to true.

# The CSS framework Bootstrap has been removed from our main style file, marking a significant change in our approach to styling.

Key Changes:

- Bootstrap Removal: The third-party CSS framework Bootstrap has been completely removed from our style file.

Why This Is Beneficial:

- Reduced Dependency: Removing Bootstrap reduces dependency on third-party frameworks, leading to fewer compatibility issues and conflicts with other libraries.
- Improved Performance: Without the additional overhead of Bootstrap, the overall performance and loading times of our applications can improve.
- Customization and Control: This change allows for greater customization and control over the styling, enabling more tailored and specific design choices that align with our unique requirements.

These updates aim to enhance the flexibility, performance, and maintainability of our styling approach.

# News Update: Input Validation Enhancements

Input elements have been updated to improve user experience by preventing required validation errors from appearing without any user interaction.

Key Changes:

- Input Elements Affected: ix-input, ix-number-input, ix-date-input, ix-select, and ix-textarea will no longer show required validation errors unless there has been user interaction.
- Programmatic Validation: If the class ix-invalid is applied programmatically, an error message will still be shown even without user interaction.

Please reach out to us at [team.ix.industry@siemens.com](mailto:team.ix.industry@siemens.com) and tell us about your migration experience.
If you encounter any issues, we are here to support you every step of the way.

🙏 We greatly appreciate your contributions.
