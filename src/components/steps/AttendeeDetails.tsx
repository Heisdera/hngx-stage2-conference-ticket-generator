import { StepHeader } from "@/components/StepHeader";
// import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import ImageUploader from "../ImageUploader";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const AttendeeDetails = () => {
  return (
    <div className="flex flex-col gap-8">
      <StepHeader title="Attendee Details" currentStep={2} />

      <div className="flex flex-col gap-5 md:bg-teal-10 md:p-5 md:rounded-3xl md:border md:border-teal-18 font-['Roboto'] font-">
        <div className="bg-teal-9 p-5 pb-10 rounded-3xl border border-teal-18 space-y-7 sm:space-y-10 sm:pb-14">
          <Label className="font-light" htmlFor="profile-photo">
            Upload Profile Photo
          </Label>

          <div className="flex flex-col items-center justify-center gap-2 bg-teal-6/50 text-neutral-98 text-center border-t-teal-10 h-40 w-full">
            <ImageUploader />
          </div>
        </div>

        <hr className="border-2 border-teal-14 rounded-full" />

        <div className="space-y-2">
          <Label className="font-light" htmlFor="name">
            Enter your name
          </Label>

          <Input id="name" className="peer rounded-lg h-10" type="email" />
        </div>

        <div className="space-y-2">
          <Label className="font-light" htmlFor="email">
            Enter your email
          </Label>

          <div className="relative">
            <Input
              id="email"
              className="peer ps-10 placeholder:text-sm placeholder:text-neutral-67 rounded-lg h-10"
              placeholder="hello@heisdera.com"
              type="email"
            />
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
              <Mail
                size={18}
                strokeWidth={2}
                aria-hidden="true"
                className="text-white"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="font-light" htmlFor="about">
            About the project
          </Label>

          <Textarea
            id="about"
            className="rounded-lg focus-visible:border-teal-31 focus-visible:ring-offset-1 focus-visible:ring-primary focus-visible:ring-white focus-visible:ring-1 focus-visible:ring-offset-black"
          />
        </div>

        <div className="grid grid-cols-2 gap-5 font-['']">
          <Button
            variant="outline"
            className="focus:ring-offset-1 focus-visible:outline-1 rounded-lg bg-transparent border-teal-43 text-teal-43 hover:bg-teal-6 focus-visible:ring-offset-1 focus-visible:ring-primary focus-visible:ring-white focus-visible:ring-1 focus-visible:ring-offset-black"
          >
            Back
          </Button>

          <Button
            variant="default"
            className="focus:ring-offset-1 focus-visible:outline-1 rounded-lg bg-teal-43 text-white hover:bg-teal-31 focus-visible:ring-offset-1 focus-visible:ring-primary focus-visible:ring-white focus-visible:ring-1 focus-visible:ring-offset-black"
          >
            Get My Ticket
          </Button>
        </div>
      </div>
    </div>
  );
};
