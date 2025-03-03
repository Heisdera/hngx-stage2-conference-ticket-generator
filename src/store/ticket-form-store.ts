"use client";

import { create } from "zustand";

interface TicketType {
  id: number;
  label: string;
  price: number;
  total_tickets: number;
  bought_tickets: number;
}

interface TicketForm {
  step: number;
  ticketType: TicketType | null;
  ticketQuantity: string | null;
  name: string;
  email: string;
  specialRequest: string | null;
  image: string | null;
  image_url: string | null;
  fileName: string;
  localImageUploadError: string | null;

  setStep: (step: number) => void;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setSpecialRequest: (specialRequest: string | null) => void;
  setTicketType: (ticketType: TicketType | null) => void;
  setTicketQuantity: (quantity: string | null) => void;
  setImage: (image: string | null) => void;
  setImageUrl: (imageUrl: string | null) => void;
  setFileName: (fileName: string) => void;
  setLocalImageUploadError: (error: string | null) => void;
  reset: () => void;
}

const getLocalStorageData = <T>(key: string, defaultValue: T): T => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? (JSON.parse(storedValue) as T) : defaultValue;
};

export const useTicketForm = create<TicketForm>((set) => {
  const initialStep = getLocalStorageData("ticketStep", 1);
  const initialTicketType = getLocalStorageData<TicketType | null>(
    "ticketType",
    null
  );
  const initialTicketQuantity = getLocalStorageData<string | null>(
    "ticketQuantity",
    null
  );
  const initialName = getLocalStorageData("name", "");
  const initialEmail = getLocalStorageData("email", "");
  const initialSpecialRequest = getLocalStorageData<string | null>(
    "specialRequest",
    null
  );
  const initialImage = localStorage.getItem("uploadedImage") ?? null;
  const initialImageUrl = getLocalStorageData("image_url", "");
  const initialFileName = getLocalStorageData("fileName", "");

  return {
    step: initialStep,
    ticketType: initialTicketType,
    ticketQuantity: initialTicketQuantity,
    name: initialName,
    email: initialEmail,
    specialRequest: initialSpecialRequest,
    image: initialImage,
    image_url: initialImageUrl,
    fileName: initialFileName,
    localImageUploadError: null,

    setStep: (newStep) => {
      set({
        step: newStep,
      });

      localStorage.setItem("ticketStep", JSON.stringify(newStep));
    },

    setName: (name) => {
      set({ name });
      localStorage.setItem("name", JSON.stringify(name));
    },

    setEmail: (email) => {
      set({ email });
      localStorage.setItem("email", JSON.stringify(email));
    },

    setSpecialRequest: (specialRequest) => {
      set({ specialRequest });
      localStorage.setItem("specialRequest", JSON.stringify(specialRequest));
    },

    setTicketType: (ticketType) => {
      set({ ticketType });
      localStorage.setItem("ticketType", JSON.stringify(ticketType));
    },

    setTicketQuantity: (ticketQuantity) => {
      set({ ticketQuantity });
      localStorage.setItem("ticketQuantity", JSON.stringify(ticketQuantity));
    },

    setImage: (image) => {
      set({ image });
      if (image) {
        localStorage.setItem("uploadedImage", image);
      } else {
        localStorage.removeItem("uploadedImage");
      }
    },

    setImageUrl: (imageUrl) => {
      set({ image_url: imageUrl });
      localStorage.setItem("image_url", JSON.stringify(imageUrl));
    },

    setFileName(fileName) {
      set({ fileName });
      localStorage.setItem("fileName", JSON.stringify(fileName));
    },

    setLocalImageUploadError: (error) => {
      set({ localImageUploadError: error });
    },

    reset: () => {
      set({
        step: 1,
        ticketType: null,
        ticketQuantity: null,
        name: "",
        email: "",
        specialRequest: null,
        image: null,
        image_url: null,
        fileName: "",
        localImageUploadError: null,
      });

      localStorage.removeItem("ticketStep");
      localStorage.removeItem("ticketType");
      localStorage.removeItem("ticketQuantity");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("specialRequest");
      localStorage.removeItem("uploadedImage");
      localStorage.removeItem("image_url");
      localStorage.removeItem("fileName");
    },
  };
});
