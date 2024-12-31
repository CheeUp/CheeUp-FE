import React from 'react';
import Button from '@/components/ui/button/Button';
import { H1 } from '@/components/ui/typography/Heading';
import { StepperWithText } from '@/components/ui/stepper/StepperWithText';
import BasicInfoForm from '@/components/portfolio/forms/BasicInfoForm';
import PersonalInfoForm from '@/components/portfolio/forms/PersonalInfoForm';
import useStepper from '@/hooks/useStepper';
import { PortfolioStepList } from '@/lib/portfolio';

const NewPortfolioPage: React.FC = () => {
  const { currentStep, stepList, goToNextStep } = useStepper(PortfolioStepList);

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfoForm />;
      case 2:
        return <PersonalInfoForm />;
    }
  };

  const handleNextBtnClick = () => {
    goToNextStep();
  };

  return (
    <div className='flex w-screen justify-center'>
      <div className='mx-9 my-6 flex w-base flex-col divide-y divide-border rounded-lg bg-white px-12 pb-6 pt-4 drop-shadow-md'>
        <div className='py-6'>
          <H1>새로운 포트폴리오 만들기</H1>
          <div className='text-body2'>새로운 포트폴리오를 만들어서 커리어를 관리해보세요!</div>
        </div>

        <div className='flex divide-x divide-border'>
          <div className='w-1/4 py-6'>
            <StepperWithText currentStep={currentStep} stepList={stepList} />
          </div>

          <div className='w-3/4 py-6 pl-6'>
            {renderForm()}

            <div className='flex justify-end'>
              <Button onClick={handleNextBtnClick}>다음</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPortfolioPage;
