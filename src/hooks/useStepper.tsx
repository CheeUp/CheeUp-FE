import { useState } from 'react';
import { TStepItem } from '@/model/portfolio';

const useStepper = (initialStep: number = 1, stepList: TStepItem[]) => {
  const [currentStep, setCurrentStep] = useState<number>(initialStep);

  const totalSteps = stepList.length;

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
    stepList,
    goToNextStep,
    goToPreviousStep,
    goToStep,
  };
};

export default useStepper;
