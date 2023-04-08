import Link from 'next/link';
import styles from '../../styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
          <div className={styles.nav__title}>Cut-Bulk Progression Tracker</div>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <Link href="/" className={styles.nav__link}>
            Home
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link href="/calculator" className={styles.nav__link}>
            Calculator
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link href="/calorie-counter" className={styles.nav__link}>
            Calorie Counter
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
