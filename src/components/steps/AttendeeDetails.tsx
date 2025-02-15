"use client";

import { StepHeader } from "@/components/StepHeader";
import { Label } from "@/components/ui/label";
import { useTicketForm } from "@/store/ticket-form-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { BackButton } from "../BackButton";
import ImageUploader from "../ImageUploader";
import { NextButton } from "../NextButton";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const attendeeSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().min(2, "Email is required").email("Enter a valid email"),
  specialRequest: z.string().optional(),
  image: z.string().min(2, { message: "Please upload an image" }),
});

export const AttendeeDetails = () => {
  const {
    step,
    setStep,
    image,
    email,
    name,
    specialRequest,
    setName,
    setEmail,
    setSpecialRequest,
    setImage,
    setImageUrl,
    fileName,
    setLocalImageUploadError,
  } = useTicketForm();

  const { control, handleSubmit, formState } = useForm<{
    name: string;
    email: string;
    specialRequest?: string;
    image: string;
  }>({
    resolver: zodResolver(attendeeSchema),
    defaultValues: {
      image: image || "",
      name: name || "",
      email: email || "",
      specialRequest: specialRequest || "",
    },
  });

  // Yeah, I used DeepSeek I can't possibly keep this in my head :)
  const convertBase64StringToFile = (
    base64String: string,
    filename: string
  ) => {
    // Split the Base64 string into the MIME type and the data
    const [mimeType, base64Data] = base64String.split(";base64,");

    // Decode the Base64 data
    const byteCharacters = atob(base64Data);

    // Convert the decoded data to a byte array
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    // Create a Blob from the byte array
    const blob = new Blob([byteArray], { type: mimeType });

    // Create a File object from the Blob (optional, if you need a File object)
    const file = new File([blob], filename, { type: mimeType });

    return file;
  };

  const onSubmit = async (data: z.infer<typeof attendeeSchema>) => {
    console.log(data);

    const file = convertBase64StringToFile(data.image, fileName);

    try {
      if (!file) {
        throw new Error("No file selected");
      }

      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result: { secure_url: string } = await response.json();
      if (!result) {
        throw new Error("Failed to upload file");
      }

      setImageUrl(result.secure_url);
      setStep(3);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <StepHeader title="Attendee Details" currentStep={step} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 md:bg-teal-10 md:p-5 md:rounded-3xl md:border md:border-teal-18"
      >
        <div className="bg-teal-9 p-5 pb-10 rounded-3xl border border-teal-18 space-y-7 sm:space-y-10 sm:pb-14">
          <Label className="font-light" htmlFor="profile-photo">
            Upload Profile Photo
          </Label>
          <Controller
            name="image"
            control={control}
            render={({ field, fieldState }) => (
              <div className="flex flex-col items-center justify-center gap-2 bg-teal-6/50 text-neutral-98 text-center border-t-teal-10 h-40 w-full">
                <ImageUploader
                  previewUrl={field.value}
                  onImageChange={(base64String) => {
                    field.onChange(base64String);
                    setImage(base64String);
                  }}
                  errorMessage={fieldState.error?.message}
                />
              </div>
            )}
          />
        </div>

        <hr className="border-2 border-teal-14 rounded-full" />

        <div className="space-y-2">
          <Label className="font-light" htmlFor="name">
            Enter your name
          </Label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                id="name"
                className="peer rounded-lg h-10"
                type="text"
                value={field.value}
                onChange={(e) => {
                  field.onChange(e.target.value);
                  setName(e.target.value);
                }}
              />
            )}
          />
          {formState.errors.name && (
            <p className="text-red-500 text-sm">
              {formState.errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label className="font-light" htmlFor="email">
            Enter your email
          </Label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <div className="relative">
                <Input
                  id="email"
                  className="peer ps-10 placeholder:text-sm placeholder:text-neutral-67 rounded-lg h-10"
                  placeholder="hello@heisdera.com"
                  type="email"
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    setEmail(e.target.value);
                  }}
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
            )}
          />
          {formState.errors.email && (
            <p className="text-red-500 text-sm">
              {formState.errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label className="font-light" htmlFor="special-request">
            Special Request
          </Label>
          <Controller
            name="specialRequest"
            control={control}
            render={({ field }) => (
              <Textarea
                id="special-request"
                className="rounded-lg"
                value={field.value || ""}
                onChange={(e) => {
                  field.onChange(e.target.value);
                  setSpecialRequest(e.target.value);
                }}
              />
            )}
          />
        </div>

        <div className="flex flex-col gap-5 sm:flex-row-reverse">
          <NextButton
            title={
              formState.isSubmitting
                ? "Generating your ticket"
                : "Get My Ticket"
            }
            type="submit"
            onClick={() => {
              setLocalImageUploadError(null);
            }}
            disabled={formState.isSubmitting}
          />
          <BackButton title="Back" onClick={() => setStep(1)} />
        </div>
      </form>
    </div>
  );
};
