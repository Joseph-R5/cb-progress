import Link from 'next/link';
import styles from '../../styles/navbar.module.css';

const navbarItems = [
  {id: 'home', title: 'Home', link: '/'},
  {id: 'calculator', title: 'Calculator', link: '/calculator'},
  {id: 'calorieCounter', title: 'Calorie Counter', link: '/calorieCounter'},
  {id: 'workoutPlanner', title: 'Workout Planner', link: '/workoutPlanner'}
]

const Navbar = () => {
  return (
    <nav className={styles.nav}>
          <div className={styles.nav__title}>Cut-Bulk Progression Tracker</div>
      <ul className={styles.nav__list}>
        {
          navbarItems.map((item) => {
            return (
              <li key={item.id} className={styles.nav__item}>
                <Link href={item.link} className={styles.nav__link}>
                  {item.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
};

export default Navbar;
