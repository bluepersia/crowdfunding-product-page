import { Dispatch, SetStateAction } from 'react';
import Backings from './Backings';
import CallToAction from './CallToAction';
import Project from './Project';
import styles from './index.module.css';

export default function Main({
  setPledgeSelector,
}: {
  setPledgeSelector: Dispatch<SetStateAction<number>>;
}): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.mainContent}>
        <CallToAction setPledgeSelector={setPledgeSelector} />
        <Backings />
        <Project setPledgeSelector={setPledgeSelector} />
      </div>
    </main>
  );
}
