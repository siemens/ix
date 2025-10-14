---
'@siemens/ix-angular': minor
'@siemens/ix-react': minor
'@siemens/ix': minor
'@siemens/ix-vue': minor
---

Added new `properties` to **ix-application-header**

- `nameSuffix` text to show next to the application name
- `companyLogo` an alternative to logo slot just for an image path
- `companyAlt` alt property to company logo `img` tag
- `appIcon` image path for the app icon
- `appIconAlt` alt property of the app icon `img` tag
- `hideBottomBorder` disable button border to create an extended header

Added new `slot` to **ix-application-header**

- `secondary` Additional slot to render content. Similar to the default slot the content will be hidden on smaller screens.

Align basic styling of **ix-application-header** e.g. gaps and margins
