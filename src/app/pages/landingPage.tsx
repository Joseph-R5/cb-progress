'use client'
import styles from '../styles/landingPage.module.css';
import { PageProps } from '../types/pageProps';

const LandingPage: React.FC<PageProps>= ({onNextStep}) => {
  const handleButtonClick = (nextStep: number) => {
    const container = document.getElementById('mainContainer');
    if (container) {
        container.classList.add('wipe-out-right');

        setTimeout(() => {
            container.classList.remove('wipe-out-right');
            onNextStep(nextStep);
        }, 1050);
    }
  };

  return (
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>Cut or Bulk</h1>
          <p className={styles.description}>
            Find out based on your body fat percentage
          </p>
          <button className={styles.button} onClick={() => handleButtonClick(2)}>
            Get started
          </button>
        </div>
        <div className={styles.right}></div>
      </div>
  );
};

export default LandingPage;