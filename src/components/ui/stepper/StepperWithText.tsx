import { StepperText } from '@/components/ui/stepper/StepperText';
import { Stepper } from '@/components/ui/stepper/Stepper';
import { TStepItem } from '@/model/portfolio';

interface PPortfolioStepper {
  currentStep: number;
  stepList: TStepItem[];
}

export const StepperWithText: React.FC<PPortfolioStepper> = ({ currentStep, stepList }) => {
  return (
    <div className='flex'>
      <Stepper currentStep={currentStep} stepList={stepList} />
      <StepperText stepList={stepList} />
    </div>
  );
};
