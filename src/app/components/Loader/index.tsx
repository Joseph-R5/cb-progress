import styles from '../../styles/loader.module.css';

const CustomLoader = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className={styles.loader}></div>
      </div>
    );
  };
  
export default CustomLoader;
  