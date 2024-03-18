import styles from './CallToAction.module.css';
import imgLogo from '../../images/logo-mastercraft.svg';
import imgBookmark from '../../images/icon-bookmark.svg';
export default function CallToAction(): JSX.Element {
  return (
    <div className={styles.cta}>
      <img src={imgLogo} className={styles.logo} />
      <h2 className={styles.title}>Mastercraft Bamboo Monitor Riser</h2>
      <p className={styles.subtitle}>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className={styles.cta_btns}>
        <button className={styles.btnBack + ' btn-bluegreen'}>
          Back this project
        </button>
        <div className={styles.btnBookmarkWrapper}>
          <img src={imgBookmark} className={styles.imgBookmark} />
          <button className={styles.btnBookmark + ' btn-lightgray'}>
            Bookmark
          </button>
        </div>
      </div>
    </div>
  );
}
