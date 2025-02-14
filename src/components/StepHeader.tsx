import { Progress } from "./ui/progress";

interface StepHeaderProp {
  title: string;
  currentStep: number;
}

export const StepHeader = ({ title, currentStep }: StepHeaderProp) => {
  const totalSteps = 3;
  const barPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 items-end justify-between">
        <h1 className="text-white text-2xl md:text-[32px]">{title}</h1>

        <span className="text-neutral-98 font-['Roboto']">
          Step {currentStep}/3
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full">
        <Progress className="h-1 bg-accent -teal-43" value={barPercentage} />
      </div>
    </div>
  );
};
