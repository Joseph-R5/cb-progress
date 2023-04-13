'use client'
import styles from '../styles/landingPage.module.css';

const LandingPage = () => {
  const handleButtonClick = () => {
    const container = document.getElementById('page-container');
    container.classList.add('wipe-out-right');
  
    setTimeout(() => {
      container.classList.remove('wipe-out-right');
    }, 2000);
  };

  return (
    <div id="page-container">
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>Big title goes here</h1>
          <p className={styles.description}>
            Description of the website goes here
            <br />
            (Look to make this a single flow website once user fills in the form)
            <br />
            First it will show the body fat bodyFatPercentage
            <br />
            Then a recommended calorie counter with flexible options on how long it will take to achieve the weight
            <br />
            Then a recommended workout journey
          </p>
          <button className={styles.button} onClick={handleButtonClick}>
            Get started
          </button>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default LandingPage;