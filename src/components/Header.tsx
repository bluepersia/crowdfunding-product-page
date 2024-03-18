import styles from './Header.module.css';
import logo from '../images/logo.svg';
import imgMenu from '../images/icon-hamburger.svg';

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} />
      <nav className='tablet desktop'>
        <ul className={styles.navlist}>
          <li>
            <a className={styles.navlink} href='#'>
              About
            </a>
          </li>
          <li>
            <a className={styles.navlink} href='#'>
              Discover
            </a>
          </li>
          <li>
            <a className={styles.navlink} href='#'>
              Get Started
            </a>
          </li>
        </ul>
      </nav>
      <img src={imgMenu} className={styles.btnMenu + ' mobile'} />
    </header>
  );
}
