/**
 * Component is swizzled
 */
import Navbar from '@theme-original/Navbar';
import type { Props } from '@theme/DocRoot/Layout/Main';
import styles from './styles.module.css';
export default function DocRootLayoutMain({ children }: Props): JSX.Element {
  return (
    <div className={styles.docMainContainer}>
      <Navbar />
      {children}
    </div>
  );
}
