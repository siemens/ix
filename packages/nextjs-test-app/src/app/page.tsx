import styles from './page.module.css';
import { IxBlind, IxButton } from '@siemens/ix-react';

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <IxBlind label="Test">Hello World!</IxBlind>
        <IxButton>Click me!</IxButton>
      </main>
    </div>
  );
}
