---
'@siemens/ix': major
'@siemens/ix-angular': major
'@siemens/ix-react': major
'@siemens/ix-vue': major
---

Require `breadcrumbKey` on `ix-breadcrumb-item`, change `ix-breadcrumb` `nextItems` entries from strings to `{ label, breadcrumbKey }` objects, and export the shared `BreadcrumbClick` payload type so breadcrumb click events expose stable item keys.

This change was necessary to identify breadcrumb items in a stable way, as their labels may not be unique and can change over time. The `breadcrumbKey` provides a consistent identifier for each breadcrumb item, allowing for more reliable event handling and state management in applications using the breadcrumb component.
