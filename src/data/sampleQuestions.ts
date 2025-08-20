import { QuizQuestion } from "@/types/quiz";

export const sampleQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    explanation: "Paris is the capital and most populous city of France. It has been the political and cultural center of France for centuries.",
    type: "multiple-choice"
  },
  {
    id: 2,
    question: "The Earth is flat.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "The Earth is actually an oblate spheroid, meaning it's roughly spherical but slightly flattened at the poles due to its rotation. This has been proven through scientific evidence including satellite imagery, physics, and space exploration.",
    type: "true-false"
  },
  {
    id: 3,
    question: "Which programming language is known for its use in web development and has a name that refers to a type of coffee?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctAnswer: 2,
    explanation: "JavaScript is the programming language named after coffee (specifically Java coffee). Despite its name, JavaScript is completely different from Java. JavaScript is essential for web development, running in browsers to make websites interactive.",
    type: "multiple-choice"
  },
  {
    id: 4,
    question: "Photosynthesis occurs in animals.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "Photosynthesis is the process by which plants, algae, and some bacteria convert light energy (usually from the sun) into chemical energy. Animals cannot perform photosynthesis as they lack chlorophyll and the necessary cellular structures.",
    type: "true-false"
  },
  {
    id: 5,
    question: "What is the largest planet in our solar system?",
    options: ["Saturn", "Jupiter", "Neptune", "Earth"],
    correctAnswer: 1,
    explanation: "Jupiter is the largest planet in our solar system. It's a gas giant with a mass more than twice that of all other planets combined. Its Great Red Spot is a storm larger than Earth itself.",
    type: "multiple-choice"
  }
];