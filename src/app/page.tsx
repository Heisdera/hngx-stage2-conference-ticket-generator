import { Navbar } from "@/components/Navbar";
import { FormContentWrapper } from "@/components/FormContentWrapper";

export default function Home() {
  return (
    <div className="space-y-7 md:space-y-[46px] px-5 py-8">
      <Navbar />

      <FormContentWrapper />
    </div>
  );
}
