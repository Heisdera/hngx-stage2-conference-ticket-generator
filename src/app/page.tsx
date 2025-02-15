"use client";

import { Navbar } from "@/components/Navbar";
import dynamic from "next/dynamic";
// import { FormContentWrapper } from "@/components/FormContentWrapper";

const FormContentWrapper = dynamic(
  () =>
    import("../components/FormContentWrapper").then(
      (mod) => mod.FormContentWrapper
    ),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="space-y-7 md:space-y-[46px] px-5 py-8">
      <Navbar />

      <FormContentWrapper />
    </div>
  );
}
