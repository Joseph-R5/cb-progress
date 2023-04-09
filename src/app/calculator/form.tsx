import styles from '../styles/calculator.module.css';

const formDetails = [
    { id: 'ageInput', label: 'Age', },
    { id: 'weightInput', label: 'Weight', },
    { id: 'heightInput', label: 'Height', },
    { id: 'neckInput', label: 'Neck', },
    { id: 'wasitInput', label: 'Waist', },
]

const Form = () => {
    return (
        <div className={styles.form}>
            <div className={styles.formBanner}>
                <h1>Body Fat Calculator</h1>
            </div>
            <div className={styles.metricButtons}>
                <button className={styles.metricButton}>Imperial</button>
                <button className={styles.metricButton}>Metric</button>
            </div>
            {
                formDetails.map((formDetail) => {
                    const { id, label } = formDetail;
                    return (
                        <div key={id} className={styles.formRow}>
                            <label className={styles.label} htmlFor={id}>
                                {label}
                            </label>
                            <input
                                className={styles.input}
                                id={id}
                                type="number"
                            />
                        </div>
                    )
                })
            };
        </div>
    )
}

export default Form;