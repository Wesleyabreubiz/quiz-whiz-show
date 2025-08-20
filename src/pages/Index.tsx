import { Quiz } from "@/components/Quiz";
import { sampleQuestions } from "@/data/sampleQuestions";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Quiz Whiz Show
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Test your knowledge with our interactive quiz! Get immediate feedback and explanations for every question.
          </p>
        </header>
        
        <main>
          <Quiz questions={sampleQuestions} />
        </main>
      </div>
    </div>
  );
};

export default Index;
