'use client'
import { useState } from 'react';
import styles from './styles/page.module.css'
import LandingPage from './pages/landingPage';
import CalculatorPage from './calculator/page';
import Questions from './components/Questions';
import Results from './components/Results';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const handleStep = (nextStep: number) => {
    console.log('nextStep:', nextStep);
    setCurrentStep(nextStep);
  };

  let currentComponent = null;

  switch (currentStep) {
    case 1:
      currentComponent = <LandingPage onNextStep={handleStep} />;
      break;
    case 2:
      currentComponent = <Questions onNextStep={handleStep}/>
      break;
    case 3:
      currentComponent = <Results />
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
