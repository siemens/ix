# Chat input

## Actions

only visible by hover or by keyboard navigation (Fixed no option to disable it)

##  Character limit

File: https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11693-45416&m=dev

- Soft and Hard cap is this a variant or already configured threshold e.g

hard limit 1000 characters
soft limit 800 characters

User input character until reached 801 characters, then show warning to user that they are approaching the character limit. Once they reach 1000 characters, prevent them from entering more text and display an error message indicating that they have reached the maximum character limit.

## Attachment Layout

File: https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=18263-77406&m=dev

- Accessibility issues by dropdown menu, how does keyboard navigation work (arrow down up), in combination of if the 
attachment is a preview attachment

- Should we support overflow by dropdown and by scrollbar? (maybe later)
- Do not create a dedicated chat attachment component

### Attachment component

- failed state with optional retry button + custom event
- States like uploading and failed replaces the label with a status label, which results in the loss of the original label name.
- Attachment preview supports only hover, but should be shown via modal? Or in a new tab? How is this suppose to work.

#### User Message attachment

- overflow not consistent, once is more responsive other is directly show overflow dropdown

## Chat prompt

- Add mode input, processing (input disable send behavior as it is, processing show stop icon) https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=6156-76490&m=dev