import styles from './page.module.css';
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
