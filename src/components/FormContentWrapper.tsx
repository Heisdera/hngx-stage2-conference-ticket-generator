import { TicketTypeSelection } from "@/components/steps/TicketTypeSelection";

export const FormContentWrapper = () => {
  return (
    <main className="max-w-[700px] bg-teal-8 p-5 flex flex-col gap-8 border border-teal-18 rounded-3xl md:mx-auto md:p-8 md:rounded-[32px]">
      <TicketTypeSelection />
    </main>
  );
};
