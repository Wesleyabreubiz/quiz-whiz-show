import { QuizState } from "@/types/quiz";

interface QuizProgressProps {
  quizState: QuizState;
}

export const QuizProgress = ({ quizState }: QuizProgressProps) => {
  const progressPercentage = ((quizState.currentQuestion + 1) / quizState.totalQuestions) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-muted-foreground">
          Question {quizState.currentQuestion + 1} of {quizState.totalQuestions}
        </span>
        <span className="text-sm font-medium text-muted-foreground">
          Score: {quizState.score}/{quizState.totalQuestions}
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden shadow-inner">
        <div 
          className="h-full bg-gradient-primary rounded-full transition-all duration-500 ease-quiz shadow-quiz"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};