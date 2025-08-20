import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, Target } from "lucide-react";
import { QuizState } from "@/types/quiz";

interface QuizCompleteProps {
  quizState: QuizState;
  onRestart: () => void;
}

export const QuizComplete = ({ quizState, onRestart }: QuizCompleteProps) => {
  const percentage = Math.round((quizState.score / quizState.totalQuestions) * 100);
  
  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Outstanding! 🎉";
    if (percentage >= 70) return "Great job! 👏";
    if (percentage >= 50) return "Good effort! 👍";
    return "Keep practicing! 💪";
  };

  const getPerformanceColor = () => {
    if (percentage >= 70) return "text-success";
    if (percentage >= 50) return "text-warning";
    return "text-error";
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-quiz border-0 bg-card animate-bounce-in">
      <CardHeader className="text-center pb-6">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-gradient-primary rounded-full shadow-quiz">
            <Trophy className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>
        <CardTitle className="text-3xl font-bold text-foreground mb-2">
          Quiz Complete!
        </CardTitle>
        <p className="text-lg text-muted-foreground">
          {getPerformanceMessage()}
        </p>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold text-foreground">
                {quizState.score}/{quizState.totalQuestions}
              </span>
            </div>
            <div className={`text-3xl font-bold ${getPerformanceColor()}`}>
              {percentage}%
            </div>
          </div>
          
          <div className="w-full bg-muted rounded-full h-4 overflow-hidden shadow-inner">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ease-quiz ${
                percentage >= 70 ? 'bg-gradient-success' : 
                percentage >= 50 ? 'bg-gradient-primary' : 'bg-gradient-error'
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <Button 
          onClick={onRestart}
          size="lg"
          className="bg-gradient-primary hover:opacity-90 shadow-quiz hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <RotateCcw className="h-5 w-5 mr-2" />
          Try Again
        </Button>
      </CardContent>
    </Card>
  );
};