import styles from './Backings.module.css';

export default function Backings(): JSX.Element {
  return (
    <div className={styles.backings}>
      <div className={styles.textContent}>
        <div className={styles.textWrapper}>
          <h2 className={styles.val}>$89,914</h2>
          <p className={styles.valSub}>of $100,000 backed</p>
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.val}>5,007</h2>
          <p className={styles.valSub}>total backers</p>
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.val}>56</h2>
          <p className={styles.valSub}>days left</p>
        </div>
      </div>
      <div className={styles.progressWrapper}>
        <div className={styles.progress}></div>
      </div>
    </div>
  );
}
