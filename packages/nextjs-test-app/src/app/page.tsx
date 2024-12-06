import Image from 'next/image';
import styles from './page.module.css';
import { IxButton } from '@siemens/ix-react/ssr';

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <IxButton>TEst</IxButton>
      </main>
    </div>
  );
}
