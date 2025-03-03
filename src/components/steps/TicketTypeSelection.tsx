"use client";

import { StepHeader } from "@/components/StepHeader";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTicketForm } from "@/store/ticket-form-store";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { BackButton } from "../BackButton";
import { NextButton } from "../NextButton";

const ticketTypes = [
  {
    id: 1,
    label: "Regular Access",
    bought_tickets: 20,
    total_tickets: 52,
    price: 0,
  },
  {
    id: 2,
    label: "Vip Access",
    bought_tickets: 20,
    total_tickets: 52,
    price: 150,
  },
  {
    id: 3,
    label: "Vvip Access",
    bought_tickets: 20,
    total_tickets: 52,
    price: 200,
  },
];

const ticketSchema = z.object({
  ticketType: z.object(
    {
      id: z.number(),
      label: z.string(),
      price: z.number(),
      total_tickets: z.number(),
      bought_tickets: z.number(),
    },
    {
      required_error: "Please select a ticket type",
    }
  ),
  ticketQuantity: z.string({
    required_error: "Please select numbers of tickets",
  }),
});

export const TicketTypeSelection = () => {
  const {
    step,
    setStep,
    reset,
    ticketType,
    ticketQuantity,
    setTicketType,
    setTicketQuantity,
  } = useTicketForm();

  const { handleSubmit, control, formState } = useForm<
    z.infer<typeof ticketSchema>
  >({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      ticketType: ticketType || undefined,
      ticketQuantity: ticketQuantity || undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof ticketSchema>) => {
    console.log(data);
    setStep(2);
  };

  return (
    <div className="flex flex-col gap-8">
      <StepHeader title="Ticket Selection" currentStep={step} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 md:bg-teal-10 md:p-5 md:rounded-3xl md:border md:border-teal-18">
          <div className="flex flex-col items-center justify-center gap-2 px-6 py-4 bg-teal-6/50 rounded-3xl text-neutral-98 border border-teal-17 text-center bg-[radial-gradient(52.52%_65.71%_at_30%_30.66%,rgba(36,160,181,0.25)_0%,rgba(36,160,181,0.00)_100%)] border-t-teal-10">
            <h2 className="text-5xl font-['Road_Rage']">Techember Fest ”25</h2>

            <p className="text-sm font-['Roboto'] w-3/4 md:w-1/2">
              Join us for an unforgettable experience at
              <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-[2.5deg] before:bg-pink-500 before:h-5 before:my-auto mx-2">
                <span className="relative text-white">Techember Fest!</span>
              </span>
              Secure your spot now.
            </p>

            <div className="flex flex-col text-sm font-['Roboto'] mt-6 md:flex-row md:gap-4 md:mt-2">
              <div className="flex gap-1 group">
                📍
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
              <p className="Text text-color-grey-98">
                March 15, 2025 | 7:00 PM
              </p>
            </div>
          </div>

          <hr className="border-2 border-teal-14 rounded-full" />

          <div className="space-y-2">
            <label htmlFor="ticket-type" className="flex items-end">
              <span>Select Ticket Type </span>
              <span className="leading-tight">:</span>
            </label>

            <div className="bg-teal-6/50 p-4 rounded-3xl border border-teal-17">
              <Controller
                name="ticketType"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    className="sm:grid-cols-3 gap-4 md:gap-6 font-['Roboto']"
                    value={field.value ? `${field.value.price}` : undefined}
                    onValueChange={(value: string) => {
                      const selectedTicket = ticketTypes.find(
                        (ticket) => ticket.price === parseInt(value)
                      );
                      if (selectedTicket) {
                        field.onChange(selectedTicket);
                        setTicketType(selectedTicket);
                      }
                    }}
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
                          {ticket.price === 0 ? "Free" : `$${ticket.price}`}
                        </div>

                        <div className="">
                          <p className="text-neutral-98 uppercase">
                            {ticket.label}
                          </p>

                          <p className="text-neutral-85 text-sm">
                            {ticket.bought_tickets}/{ticket.total_tickets}
                          </p>
                        </div>
                      </label>
                    ))}
                  </RadioGroup>
                )}
              />
            </div>

            {formState.errors.ticketType && (
              <p className="text-red-500 text-sm">
                {formState.errors.ticketType.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="ticket-quantity">Number of Tickets</Label>
            <Controller
              name="ticketQuantity"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value || ""}
                  onValueChange={(value: string) => {
                    field.onChange(value);
                    setTicketQuantity(value);
                  }}
                >
                  <SelectTrigger
                    id="ticket-quantity"
                    className="border border-teal-17 focus-visible:outline-ring/70 focus:ring-0"
                  >
                    <SelectValue placeholder="Select number of tickets" />
                  </SelectTrigger>

                  <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2 bg-teal-10 border border-teal-31">
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />

            {formState.errors.ticketQuantity && (
              <p className="text-red-500 text-sm">
                {formState.errors.ticketQuantity.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-5 sm:flex-row-reverse">
            <NextButton title="Next" type="submit" />

            <BackButton
              title="Cancel"
              onClick={() => {
                reset();
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
