import styles from './Header.module.css';
import logo from '../images/logo.svg';
import imgMenu from '../images/icon-hamburger.svg';
import imgClose from '../images/icon-close-menu.svg';
import { Dispatch, SetStateAction } from 'react';

export default function Header({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
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
      {(!isMenuOpen && (
        <img
          onClick={() => setIsMenuOpen(true)}
          src={imgMenu}
          className={styles.btnMenu + ' mobile'}
        />
      )) || (
        <img
          onClick={() => setIsMenuOpen(false)}
          src={imgClose}
          className={styles.btnClose + ' mobile'}
        />
      )}
    </header>
  );
}
