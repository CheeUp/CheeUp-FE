import { StepperText } from '@/components/ui/stepper/StepperText';
import { Stepper } from '@/components/ui/stepper/Stepper';
import useStepper from '@/hooks/useStepper';

export const PortfolioStepper: React.FC = () => {
  const { currentStep, PortfolioStepList } = useStepper(1);

  return (
    <div className='flex'>
      <Stepper currentStep={currentStep} stepList={PortfolioStepList} />
      <StepperText stepList={PortfolioStepList} />
    </div>
  );
};
