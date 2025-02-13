interface StepHeaderProp {
  title: string;
  currentStep: number;
}

export const StepHeader = ({ title, currentStep }: StepHeaderProp) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2 items-start sm:items-center sm:justify-between sm:flex-row">
        <h1 className="text-white text-2xl md:text-[32px]">{title}</h1>

        <span className="text-neutral-98 font-['Roboto']">
          Step {currentStep}/3
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full">
        <svg
          width=""
          height="4"
          viewBox="0 0 604 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 2C0 0.895431 0.895431 0 2 0H602C603.105 0 604 0.895431 604 2C604 3.10457 603.105 4 602 4H2.00001C0.895441 4 0 3.10457 0 2Z"
            fill="#0E464F"
          />
          <path
            d="M0 2C0 0.895431 0.895431 0 2 0H230C231.105 0 232 0.895431 232 2C232 3.10457 231.105 4 230 4H2C0.895428 4 0 3.10457 0 2Z"
            fill="#24A0B5"
          />
        </svg>
      </div>
    </div>
  );
};
