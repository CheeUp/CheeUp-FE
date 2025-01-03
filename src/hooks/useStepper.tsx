import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { TStepItem } from '@/model/portfolio';
import { isNaturalNumber } from '@/util/number';

const useStepper = (stepList: TStepItem[]) => {
  const totalSteps = stepList.length;

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const step = Number(searchParams.get('step'));

  const [currentStep, setCurrentStep] = useState<number>(1);

  useEffect(() => {
    if (isNaturalNumber(step) || step > totalSteps) {
      goToStep(1);
    } else {
      setCurrentStep(step);
    }
  }, [step, totalSteps]);

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      goToStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      goToStep(currentStep - 1);
    }
  };

  const goToStep = (step: number) => {
    navigate(`?step=${step}`);
  };

  return {
    currentStep,
    stepList,
    goToNextStep,
    goToPreviousStep,
  };
};

export default useStepper;
