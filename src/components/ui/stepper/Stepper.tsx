import { TStepItem } from '@/model/portfolio';
import { StepLine } from '@/components/ui/stepper/StepLine';
import { StepNode } from '@/components/ui/stepper/StepNode';

interface PStepper {
  currentStep: number;
  stepList: TStepItem[];
}

export const Stepper: React.FC<PStepper> = ({ currentStep, stepList }) => {
  return (
    <div>
      {stepList.map((stepItem, index) => (
        <div key={stepItem.id} className='flex flex-col items-center'>
          <StepNode step={stepItem.id} isActive={stepItem.id === currentStep} />
          {index < stepList.length - 1 && <StepLine />}
        </div>
      ))}
    </div>
  );
};
