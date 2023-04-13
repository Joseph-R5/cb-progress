"use client";
import styles from '../styles/calculator/page.module.css';
import Form from './form';
import { useState } from 'react';
import Results from './results';
import Reference from './reference';
import { FormValues } from '../types/form';

const CalculatorPage = () => {
    const [formValues, setFormValues] = useState<FormValues>();

    const handleFormSubmit = (formValues: FormValues) =>{
        setFormValues(formValues);
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Form onSubmit={handleFormSubmit}/>
                {formValues && <Results formValues={formValues}/>}
            </div>
            {formValues && <Reference formValues={formValues}/>}
        </main>
    )
};

export default CalculatorPage;