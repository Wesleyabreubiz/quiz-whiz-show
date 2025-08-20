import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuizQuestion, QuizState } from "@/types/quiz";
import { QuizProgress } from "./QuizProgress";
import { QuestionCard } from "./QuestionCard";
import { QuizComplete } from "./QuizComplete";
import { ChevronRight } from "lucide-react";

interface QuizProps {
  questions: QuizQuestion[];
}

export const Quiz = ({ questions }: QuizProps) => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    totalQuestions: questions.length,
    selectedAnswer: null,
    showFeedback: false,
    isComplete: false
  });

  const currentQuestion = questions[quizState.currentQuestion];

  const handleAnswerSelect = (answerIndex: number) => {
    if (quizState.showFeedback) return;

    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    setQuizState(prev => ({
      ...prev,
      selectedAnswer: answerIndex,
      showFeedback: true,
      score: isCorrect ? prev.score + 1 : prev.score
    }));
  };

  const handleNextQuestion = () => {
    const isLastQuestion = quizState.currentQuestion === questions.length - 1;
    
    if (isLastQuestion) {
      setQuizState(prev => ({
        ...prev,
        isComplete: true
      }));
    } else {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        selectedAnswer: null,
        showFeedback: false
      }));
    }
  };

  const handleRestartQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      score: 0,
      totalQuestions: questions.length,
      selectedAnswer: null,
      showFeedback: false,
      isComplete: false
    });
  };

  if (quizState.isComplete) {
    return <QuizComplete quizState={quizState} onRestart={handleRestartQuiz} />;
  }

  return (
    <div className="space-y-8">
      <QuizProgress quizState={quizState} />
      
      <QuestionCard
        question={currentQuestion}
        selectedAnswer={quizState.selectedAnswer}
        showFeedback={quizState.showFeedback}
        onAnswerSelect={handleAnswerSelect}
      />

      {quizState.showFeedback && (
        <div className="flex justify-center animate-bounce-in">
          <Button
            onClick={handleNextQuestion}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 shadow-quiz hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            {quizState.currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
};