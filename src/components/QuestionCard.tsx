import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizQuestion } from "@/types/quiz";
import { AnswerOption } from "./AnswerOption";
import { AlertCircle } from "lucide-react";

interface QuestionCardProps {
  question: QuizQuestion;
  selectedAnswer: number | null;
  showFeedback: boolean;
  onAnswerSelect: (answerIndex: number) => void;
}

export const QuestionCard = ({
  question,
  selectedAnswer,
  showFeedback,
  onAnswerSelect
}: QuestionCardProps) => {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-quiz border-0 bg-card">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-foreground leading-relaxed">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            index={index}
            isSelected={selectedAnswer === index}
            isCorrect={
              showFeedback
                ? index === question.correctAnswer
                  ? true
                  : selectedAnswer === index
                  ? false
                  : null
                : null
            }
            showFeedback={showFeedback}
            onSelect={onAnswerSelect}
            disabled={showFeedback}
          />
        ))}
        
        {showFeedback && (
          <div className="mt-6 p-4 bg-muted rounded-lg border-l-4 border-primary animate-bounce-in">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-1">Explanation</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {question.explanation}
                </p>
                {selectedAnswer !== question.correctAnswer && (
                  <p className="text-success font-medium text-sm mt-2">
                    Correct answer: {String.fromCharCode(65 + question.correctAnswer)}. {question.options[question.correctAnswer]}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};