"use client";
import styles from '../styles/calculator/page.module.css';
import Form from './form';
import { useState } from 'react';
import { FormValues } from '../types/form';
import { PageProps } from '../types/pageProps';

const CalculatorPage: React.FC<PageProps> = ({ onNextStep }) => {
    const [formValues, setFormValues] = useState<FormValues>();

    const handleFormSubmit = (formValues: FormValues) => {
        setFormValues(formValues);
        onNextStep(1);
    }

    return (
        <div className={styles.container}>
            <div>Progress bar goes here</div>
            <Form onSubmit={handleFormSubmit} />
        </div>
    )
};

export default CalculatorPage;