"use client";

import { Button } from "./ui/button";

interface NextButtonProps {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export const NextButton = ({
  title,
  onClick,
  type = "button",
}: NextButtonProps) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      variant="default"
      className="focus:ring-offset-1 focus-visible:outline-1 focus-visible:ring-1 focus-visible:ring-offset-ring rounded-lg bg-teal-43 text-white hover:bg-teal-31 flex-1"
    >
      {title}
    </Button>
  );
};
