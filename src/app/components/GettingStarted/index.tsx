import styles from '../../styles/gettingStarted.module.css';

const GettingStarted = () => {
    return (
        <div className={styles.container}>
          <div className={styles.left}>
            <h1 className={styles.title}>Big title goes here</h1>
            <p className={styles.description}>
              Description of the website goes here
            </p>
            <button className={styles.button}>Get started</button>
          </div>
          <div className={styles.right}></div>
        </div>
      );
}

export default GettingStarted;