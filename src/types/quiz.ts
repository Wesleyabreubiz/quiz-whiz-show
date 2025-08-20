export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  type: 'multiple-choice' | 'true-false';
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  showFeedback: boolean;
  isComplete: boolean;
}

export interface AnswerFeedback {
  isCorrect: boolean;
  explanation: string;
  correctAnswer: string;
}