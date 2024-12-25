import { useState } from 'react';
import { PortfolioStepList } from '@/lib/portfolio/portfolio';

const useStepper = (initialStep: number = 1) => {
  const [currentStep, setCurrentStep] = useState<number>(initialStep);

  const totalSteps = PortfolioStepList.length;

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step < 1 || step > totalSteps) return;
    setCurrentStep(step);
  };

  return {
    currentStep,
    PortfolioStepList,
    goToNextStep,
    goToPreviousStep,
    goToStep,
  };
};

export default useStepper;
