// import { TicketTypeSelection } from "@/components/steps/TicketTypeSelection";
// import { AttendeeDetails } from "@/components/steps/AttendeeDetails";
import { ReadyTicketPreview } from "./steps/ReadyTicketPreview";

export const FormContentWrapper = () => {
  return (
    <main className="max-w-[700px] bg-teal-8 p-5 flex flex-col gap-8 border border-teal-18 rounded-3xl mx-auto md:px-9 md:py-8">
      {/* Step 1 */}
      {/* <TicketTypeSelection /> */}

      {/* Step 2 */}
      {/* <AttendeeDetails /> */}

      {/* Step 3 */}
      <ReadyTicketPreview />
    </main>
  );
};
