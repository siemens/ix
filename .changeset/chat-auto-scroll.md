---
'@siemens/ix': minor
'@siemens/ix-angular': minor
'@siemens/ix-react': minor
'@siemens/ix-vue': minor
---

Add Auto-scroll and a scroll-to-latest button to `ix-chat`.

`ix-chat` now keeps the latest content in view by default. It follows added messages and content that grows inside a message (for example a streaming `ix-markdown`). Auto-scroll stops as soon as the user scrolls away from the bottom and resumes when the user returns to the bottom, activates the new scroll-to-latest button or a new `ix-chat-user-message` is added.

- A scroll-to-latest button is shown while the user is away from the bottom. It never covers the prompt, is keyboard accessible and uses no smooth scrolling when the user prefers reduced motion. Localize its accessible name with the new `i18nScrollToLatest` property (default "Scroll to latest").
- Use the new `scrollToBottom()` and `scrollToTop()` methods to scroll programmatically, for example after loading a conversation.
- The message area is now focusable so keyboard users can scroll it.

**Behavior change:** previously `ix-chat` did not scroll on its own. If your application controls scrolling itself (for example to scroll to the start of a new answer), set the new `suppressAutoScroll` property to turn off Auto-scroll and the scroll-to-latest button. The `scrollToBottom()` and `scrollToTop()` methods keep working.
