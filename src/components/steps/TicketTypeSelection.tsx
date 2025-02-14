import { StepHeader } from "@/components/StepHeader";
// import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const ticketTypes = [
  { label: "Regular Access", bought_tickets: 20, total_tickets: 52, price: 0 },
  { label: "Vip Access", bought_tickets: 20, total_tickets: 52, price: 150 },
  { label: "Vvip Access", bought_tickets: 20, total_tickets: 52, price: 200 },
];

export const TicketTypeSelection = () => {
  return (
    <div className="flex flex-col gap-8">
      <StepHeader title="Ticket Selection" currentStep={1} />

      <div className="flex flex-col gap-5 md:bg-teal-10 md:p-5 md:rounded-3xl md:border md:border-teal-18">
        <div className="flex flex-col items-center justify-center gap-2 px-6 py-4 bg-teal-6/50 rounded-3xl text-neutral-98 border border-teal-17 text-center bg-[radial-gradient(52.52%_65.71%_at_30%_30.66%,rgba(36,160,181,0.25)_0%,rgba(36,160,181,0.00)_100%)] border-t-teal-10">
          <h2 className="text-5xl font-['Road_Rage']">Techember Fest ”25</h2>

          <p className="text-sm font-['Roboto'] w-3/4 md:w-1/2">
            Join us for an unforgettable experience at Techember Fest!{" "}
            {/* <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500 before:h-5 before:my-auto mx-2">
            <span className="relative text-white">Techember Fest!</span>
          </span> */}
            Secure your spot now.
          </p>

          <div className="flex flex-col text-sm font-['Roboto'] mt-6 md:flex-row md:gap-4 md:mt-2">
            <div className="flex gap-1 group">
              📍
              {/* <MapPin size={20} className="text-destructive" /> */}
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  "Plot 2 & 3, Water Corporation Dr, Victoria Island, Annex 106104, Lagos"
                )}`}
                className="underline-offset-2 group-hover:underline"
                rel="noreferrer noopener"
                target="_blank"
              >
                Landmark Centre
              </Link>
            </div>

            <span className="max-md:hidden">| |</span>
            <p className="Text text-color-grey-98">March 15, 2025 | 7:00 PM</p>
          </div>
        </div>

        <hr className="border-2 border-teal-14 rounded-full" />

        <div className="space-y-2">
          <label htmlFor="ticket-type" className="flex items-end">
            <span>Select Ticket Type </span>
            <span className="leading-tight">:</span>
          </label>

          <div className="bg-teal-6/50 p-4 rounded-3xl border border-teal-17">
            <RadioGroup
              className="sm:grid-cols-3 gap-4 md:gap-6 font-['Roboto']"
              defaultValue={`${ticketTypes[0].price}`}
            >
              {ticketTypes.map((ticket, index) => (
                <label
                  key={index}
                  className="relative flex cursor-pointer flex-col items-start gap-2 rounded-xl border border-input p-3 shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70"
                >
                  <RadioGroupItem
                    id={`${ticket.price}`}
                    value={`${ticket.price}`}
                    className="sr-only after:absolute after:inset-0"
                  />

                  <div className="text-white text-2xl font-medium">
                    ${ticket.price === 0 ? ticket.price : ticket.price}
                  </div>

                  <div className="">
                    <p className="text-neutral-98 uppercase">{ticket.label}</p>

                    <p className="text-neutral-85 text-sm">
                      {ticket.bought_tickets}/{ticket.total_tickets}
                    </p>
                  </div>
                </label>
              ))}
            </RadioGroup>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="ticket-quantity">Number of Tickets</Label>
          <Select defaultValue="1">
            <SelectTrigger
              id="ticket-quantity"
              className="border border-teal-17 focus-visible:outline-ring/70 focus:ring-0"
            >
              <SelectValue placeholder="Select framework" />
            </SelectTrigger>

            <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2 bg-teal-10 border border-teal-31">
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row-reverse">
          <Button
            variant="default"
            className="focus:ring-offset-1 focus-visible:outline-1 focus-visible:ring-1 focus-visible:ring-offset-ring rounded-lg bg-teal-43 text-white hover:bg-teal-31 flex-1"
          >
            Next
          </Button>

          <Button
            variant="outline"
            className="focus:ring-offset-1 focus-visible:outline-1 focus-visible:ring-1 focus-visible:ring-offset-ring rounded-lg bg-transparent border-teal-43 text-teal-43 hover:bg-teal-6 flex-1"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};
