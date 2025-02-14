import { Button } from "./ui/button";

interface BackButtonProps {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export const BackButton = ({
  title,
  onClick,
  type = "button",
}: BackButtonProps) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      variant="outline"
      className="focus:ring-offset-1 focus-visible:outline-1 focus-visible:ring-1 focus-visible:ring-offset-ring rounded-lg bg-transparent border-teal-43 text-teal-43 hover:bg-teal-6 flex-1"
    >
      {title}
    </Button>
  );
};
