interface PStepNode {
  step: number;
  isActive?: boolean;
}

export const StepNode: React.FC<PStepNode> = ({ step, isActive = false }) => {
  return (
    <div
      className={`${isActive ? 'bg-stepper-active text-white' : 'bg-stepper text-black'} flex h-12 w-12 select-none items-center justify-center rounded-full text-detail font-semibold`}
    >
      {step}
    </div>
  );
};
