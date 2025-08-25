---
'@siemens/ix-angular': minor
'@siemens/ix-react': minor
'@siemens/ix': minor
'@siemens/ix-vue': minor
---

Added new `properties` to **ix-application-header**

- `nameSuffix` show a text beside of the application name
- `companyLogo` an alternative to logo slot just for an image path
- `companyAlt` alt property to company logo `img` tag
- `appIcon` image path for the app icon
- `appIconAlt` alt property of the app icon `img` tag
- `hideBottomBorder` disable button border to create a extended header

Added new `slot` to **ix-application-header**

- `secondary` Additional slot to render content. The content will be hidden on smaller screens same behavior as the default slot.

Align basic styling of **ix-application-header** e.g gaps and margins
