import { useState } from 'react';
import styles from '../styles/calculator/page.module.css';
import { FormValues } from '../types/form';

const Form = ({ onSubmit }: any) => {
    const [formValues, setFormValues] = useState<FormValues>({
        gender: '',
        age: '',
        weight: '',
        height: '',
        neck: '',
        waist: ''
    });
    const [showErrorMessage, setShowSerrorMessage] = useState<boolean>(false);
    const [hasSubmittedForm, setHasSubmittedForm] = useState<boolean>(false);

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (isInvalidForm()) {
            setShowSerrorMessage(true)
        } else {
            onSubmit(formValues);
            setShowSerrorMessage(false);
            setHasSubmittedForm(true);
        }
    };

    const isInvalidForm = (): boolean => {
        for (const key in formValues) {
            if (formValues.hasOwnProperty(key)) {
                if (!formValues[key] || formValues[key].length === 0) {
                    return true;
                  }
            }
        }

        return false;
    }

    return (
        <div className={styles.form}>
            <div className={styles.formBanner}>
                <h1>Body Fat Calculator</h1>
            </div>
            <div className={styles.metricButtons}>
                <button className={styles.metricButton}>Imperial</button>
                <button className={styles.metricButton}>Metric</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                    <label className={styles.label}>
                        <label className={styles.label} >
                            Gender
                        </label>
                        <input className={styles.checkbox} type="radio" name="gender" value="male" onChange={handleChange} />
                        Male
                    </label>
                    <label className={styles.label}>
                        <input className={styles.checkbox} type="radio" name="gender" value="female" onChange={handleChange} />
                        Female
                    </label>
                </div>
                <div className={styles.formRow}>
                    <label className={styles.label} htmlFor="ageInput">
                        Age
                    </label>
                    <input
                        className={styles.input}
                        id="ageInput"
                        type="number"
                        name="age"
                        value={formValues.age}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formRow}>
                    <label className={styles.label} htmlFor="weightInput">
                        Weight
                    </label>
                    <input
                        className={styles.input}
                        id="weightInput"
                        type="number"
                        name="weight"
                        value={formValues.weight}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formRow}>
                    <label className={styles.label} htmlFor="heightInput">
                        Height
                    </label>
                    <input
                        className={styles.input}
                        id="heightInput"
                        type="number"
                        name="height"
                        value={formValues.height}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formRow}>
                    <label className={styles.label} htmlFor="neckInput">
                        Neck
                    </label>
                    <input
                        className={styles.input}
                        id="neckInput"
                        type="number"
                        name="neck"
                        value={formValues.neck}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formRow}>
                    <label className={styles.label} htmlFor="waistInput">
                        Waist
                    </label>
                    <input
                        className={styles.input}
                        id="waistInput"
                        type="number"
                        name="waist"
                        value={formValues.waist}
                        onChange={handleChange}
                    />
                </div>
                <button className={styles.calculateButton}>
                    {hasSubmittedForm ? "Recalculate" : "Calculate"}
                </button>
            </form>
            {showErrorMessage && <div>Invalid form!</div>}
        </div>
    )
}

export default Form;
