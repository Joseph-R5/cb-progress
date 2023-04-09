import styles from '../styles/calculator.module.css';
import Form from './form';

const CalculatorPage = () => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Form/>
                <div className={styles.results}>
                    <h1>Results</h1>
                </div>
            </div>
            <div className={styles.reference}>
                <h1>Ref</h1>
            </div>
        </main>
    )
};

export default CalculatorPage;