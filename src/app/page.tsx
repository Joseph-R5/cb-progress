'use client';
import { useEffect, useState } from 'react';
import styles from './styles/page.module.css'
import LandingPage from './pages/landingPage';
import CalculatorPage from './calculator/page';
import Questions from './components/Questions';
import Results from './components/Results';
import { UpdatedUserDetails } from './types/pageProps';
import {getResultsFormattedData} from './utils/formatData';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [data, setData] = useState<UpdatedUserDetails>();
  const [results, setResults] = useState<any>({});

  useEffect(() => {
    if (currentStep === 3) {
      setResults(getResultsFormattedData(data));
    }
  }, [currentStep, data]);

  const handleStep = async (nextStep: number, userDetails?: UpdatedUserDetails) => {
    setCurrentStep(nextStep);
    setData(userDetails);
  };

  let currentComponent = null;

  switch (currentStep) {
    case 1:
      currentComponent = <LandingPage onNextStep={handleStep} />;
      break;
    case 2:
      currentComponent = <Questions onNextStep={handleStep} />;
      break;
    case 3:
      currentComponent = results ? <Results results={results} userDetails={data} /> : <></>;
      break;
    default:
      currentComponent = <LandingPage onNextStep={handleStep} />;
  }

  return (
    <main id="mainContainer" className={styles.main}>
      {currentComponent}
    </main>
  )
}
