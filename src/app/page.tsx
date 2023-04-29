'use client';
import { useEffect, useState } from 'react';
import styles from './styles/page.module.css'
import LandingPage from './pages/landingPage';
import Questions from './components/Questions';
import Results from './components/Results';
import { UpdatedUserDetails } from './types/pageProps';
import { getResultsFormattedData } from './utils/formatData';

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
      const propsToPass = {
        results,
        userDetails: data,
        startAgain: handleStep,
      };
      
      currentComponent = results ? <Results {...propsToPass} /> : <></>;
      break;
    default:
      currentComponent = <LandingPage onNextStep={handleStep} />;
  }

  return (
    <main id="mainContainer" className={styles.main}>
      <div className={styles.waves}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
        </svg>
      </div>
      {currentComponent}
    </main>
  )
}
