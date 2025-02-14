"use client";

import { TicketTypeSelection } from "@/components/steps/TicketTypeSelection";
import { AttendeeDetails } from "@/components/steps/AttendeeDetails";
import { ReadyTicketPreview } from "./steps/ReadyTicketPreview";
import { useTicketForm } from "@/store/ticket-form-store";
import { useEffect } from "react";

export const FormContentWrapper = () => {
  const { step, completedSteps, setStep } = useTicketForm();

  useEffect(() => {
    // Ensure users can't jump ahead of completed steps
    if (step > completedSteps + 1) {
      setStep(completedSteps + 1); // Redirect back to the next step to be completed
    }
  }, [step, completedSteps, setStep]);

  return (
    <main className="max-w-[700px] bg-teal-8 p-5 flex flex-col gap-8 border border-teal-18 rounded-3xl mx-auto md:px-9 md:py-8">
      {/* Step 1 */}
      {step === 1 && <TicketTypeSelection />}

      {/* Step 2 */}
      {step === 2 && <AttendeeDetails />}

      {/* Step 3 */}
      {step === 3 && <ReadyTicketPreview />}
    </main>
  );
};
