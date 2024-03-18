import styles from './Project.module.css';

export default function Project(): JSX.Element {
  return (
    <div className={styles.project}>
      <h3 className={styles.title}>About this project</h3>

      <p className={styles.body}>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <br />
      <p className={styles.body}>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>

      <ul className={styles.products}>
        <li className={styles.product}>
          <div className={styles.productTop}>
            <h3 className={styles.productName}>Bamboo Stand</h3>
            <p className={styles.productPledge}>Pledge $25 or more</p>
          </div>
          <p className={styles.productBody}>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
          <div className={styles.productBottom}>
            <p className={styles.productCount}>
              <span>101</span> left
            </p>
            <button className={styles.btnSelect + ' btn-bluegreen'}>
              Select Reward
            </button>
          </div>
        </li>

        <li className={styles.product}>
          <div className={styles.productTop}>
            <h3 className={styles.productName}>Black Edition Stand</h3>
            <p className={styles.productPledge}>Pledge $75 or more</p>
          </div>
          <p className={styles.productBody}>
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
          <div className={styles.productBottom}>
            <p className={styles.productCount}>
              <span>64</span> left
            </p>
            <button className={styles.btnSelect + ' btn-bluegreen'}>
              Select Reward
            </button>
          </div>
        </li>

        <li className={styles.product + ' ' + styles.disabled}>
          <div className={styles.productTop}>
            <h3 className={styles.productName}>Mahogany Special Edition</h3>
            <p className={styles.productPledge}>Pledge $200 or more</p>
          </div>
          <p className={styles.productBody}>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>
          <div className={styles.productBottom}>
            <p className={styles.productCount}>
              <span>0</span> left
            </p>
            <button className={styles.btnSelect + ' btn-bluegreen'}>
              Out of Stock
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
