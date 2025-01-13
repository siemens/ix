---
'@siemens/ix-react': major
---

- Add `nextjs@15` support.
- Introduced new `ssr` components, which must be utilized on the server side.

Page.tsx:

```
import { IxBlind } from '@siemens/ix-react/ssr';

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <IxBlind></IxBlind>
      </main>
    </div>
  );
}
```
