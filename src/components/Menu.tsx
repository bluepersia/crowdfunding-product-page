import styles from './Menu.module.css';

export default function Menu({
  isMenuOpen,
}: {
  isMenuOpen: boolean;
}): JSX.Element {
  return (
    <div className={styles.overlay + ' ' + (isMenuOpen && styles.open)}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.navitem}>
            <a className={styles.navlink} href='#'>
              About
            </a>
          </li>
          <li className={styles.navitem}>
            <a className={styles.navlink} href='#'>
              Discover
            </a>
          </li>
          <li className={styles.navitem}>
            <a className={styles.navlink} href='#'>
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
