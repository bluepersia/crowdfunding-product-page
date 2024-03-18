import Backings from './Backings';
import CallToAction from './CallToAction';
import Project from './Project';
import styles from './index.module.css';

export default function Main(): JSX.Element {
  return (
    <main className={styles.main}>
      <CallToAction />
      <Backings />
      <Project />
    </main>
  );
}
