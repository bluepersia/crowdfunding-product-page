import styles from './Completed.module.css';
import imgCheck from '../images/icon-check.svg';
import { Dispatch, SetStateAction } from 'react';

export default function Completed({
  isCompleted,
  setIsCompleted,
}: {
  isCompleted: boolean;
  setIsCompleted: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <div className={styles.overlay + ' ' + (isCompleted && styles.open)}>
      <div className={styles.window}>
        <img src={imgCheck} className={styles.imgCheck} />
        <h2 className={styles.title}>Thanks for your support!</h2>
        <p className={styles.body}>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button
          onClick={() => setIsCompleted(false)}
          className={styles.btnGotIt + ' btn-bluegreen'}
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
