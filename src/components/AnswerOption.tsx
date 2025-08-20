import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnswerOptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  isCorrect: boolean | null;
  showFeedback: boolean;
  onSelect: (index: number) => void;
  disabled: boolean;
}

export const AnswerOption = ({
  option,
  index,
  isSelected,
  isCorrect,
  showFeedback,
  onSelect,
  disabled
}: AnswerOptionProps) => {
  const getButtonVariant = () => {
    if (!showFeedback) {
      return isSelected ? 'default' : 'outline';
    }
    
    if (isCorrect === true) {
      return 'default';
    } else if (isCorrect === false && isSelected) {
      return 'destructive';
    }
    
    return 'outline';
  };

  const getButtonClasses = () => {
    if (!showFeedback) {
      return cn(
        "w-full justify-start text-left h-auto py-4 px-6 transition-all duration-300 ease-quiz",
        "hover:shadow-quiz hover:scale-[1.02] transform",
        isSelected && "ring-2 ring-primary shadow-quiz scale-[1.02]"
      );
    }

    if (isCorrect === true) {
      return cn(
        "w-full justify-start text-left h-auto py-4 px-6",
        "bg-gradient-success text-success-foreground shadow-success",
        "animate-quiz-success transform scale-[1.02]"
      );
    } else if (isCorrect === false && isSelected) {
      return cn(
        "w-full justify-start text-left h-auto py-4 px-6",
        "bg-gradient-error text-error-foreground shadow-error",
        "animate-quiz-error"
      );
    }

    return cn(
      "w-full justify-start text-left h-auto py-4 px-6 opacity-60"
    );
  };

  const getIcon = () => {
    if (!showFeedback) return null;
    
    if (isCorrect === true) {
      return <CheckCircle className="h-5 w-5 ml-auto" />;
    } else if (isCorrect === false && isSelected) {
      return <XCircle className="h-5 w-5 ml-auto" />;
    }
    
    return null;
  };

  return (
    <Button
      variant={getButtonVariant()}
      className={getButtonClasses()}
      onClick={() => !disabled && onSelect(index)}
      disabled={disabled}
    >
      <span className="flex-1 text-base font-medium">
        <span className="font-bold text-primary mr-3">
          {String.fromCharCode(65 + index)}.
        </span>
        {option}
      </span>
      {getIcon()}
    </Button>
  );
};