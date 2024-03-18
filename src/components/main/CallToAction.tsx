import styles from './CallToAction.module.css';
import imgLogo from '../../images/logo-mastercraft.svg';
import { useState } from 'react';
export default function CallToAction(): JSX.Element {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
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
        <div
          onClick={() => setIsBookmarked((isBookmarked) => !isBookmarked)}
          className={
            styles.btnBookmarkWrapper +
            ' ' +
            (isBookmarked && styles.bookmarked)
          }
        >
          <svg
            className={styles.imgBookmark}
            width='56'
            height='56'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g fill='none' fill-rule='evenodd'>
              <circle fill='#2F2F2F' cx='28' cy='28' r='28' />
              <path fill='#B1B1B1' d='M23 19v18l5-5.058L33 37V19z' />
            </g>
          </svg>
          <button className={styles.btnBookmark + ' btn-lightgray'}>
            {isBookmarked ? 'Bookmarked' : 'Bookmark'}
          </button>
        </div>
      </div>
    </div>
  );
}
