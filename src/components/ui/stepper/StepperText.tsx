import { TPortfolioStepItem } from '@/model/portfolio/portfolio';

interface PStepperText {
  stepList: TPortfolioStepItem[];
}

export const StepperText: React.FC<PStepperText> = ({ stepList }) => {
  return (
    <div className='flex flex-col gap-8'>
      {stepList.map((stepItem) => (
        <div key={stepItem.id} className='flex h-12 flex-col justify-center px-4'>
          <div className='text-detail font-semibold'>{stepItem.title}</div>
          <div className='text-detail'>{stepItem.content}</div>
        </div>
      ))}
    </div>
  );
};
