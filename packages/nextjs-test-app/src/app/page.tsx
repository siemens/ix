import Image from 'next/image';
import styles from './page.module.css';
import Example from '@/components/example';
import { IxBlind } from '@siemens/ix-react/ssr';

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <Example /> */}
        <IxBlind></IxBlind>
      </main>
    </div>
  );
}
