"use client";

import { TicketTypeSelection } from "@/components/steps/TicketTypeSelection";
import { AttendeeDetails } from "@/components/steps/AttendeeDetails";
import { ReadyTicketPreview } from "./steps/ReadyTicketPreview";
import { useTicketForm } from "@/store/ticket-form-store";
import { useEffect } from "react";

export const FormContentWrapper = () => {
  const { step, setStep, reset, ticketType, ticketQuantity } = useTicketForm();

  useEffect(() => {
    // Ensure users can't jump ahead of steps down to step 3 using localStorage without step 1 data
    if (step >= 2 && !ticketType && !ticketQuantity) {
      // Redirect back to step 1 instead and reset form
      setStep(1);
      reset();
    }

    if (step > 3) {
      reset();
    }
  }, [reset, setStep, step, ticketQuantity, ticketType]);

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
