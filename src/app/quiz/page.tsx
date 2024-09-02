"use client"

import { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    question: "Qual é a capital da França?",
    options: ["Paris", "Londres", "Roma", "Berlim"],
    answer: "Paris",
  },
  {
    question: "Qual é o maior planeta do sistema solar?",
    options: ["Terra", "Marte", "Júpiter", "Saturno"],
    answer: "Júpiter",
  },
  // Adicione mais perguntas conforme necessário
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option: string) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      {showResult ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-600">Quiz Finalizado!</h2>
          <p className="mt-4 text-xl text-gray-700">
            Sua pontuação: {score} de {questions.length}
          </p>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600">{questions[currentQuestion].question}</h2>
          <div className="mt-6 space-y-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="block w-full px-6 py-3 bg-white text-green-600 border border-green-600 rounded-lg hover:bg-green-600 hover:text-white transition"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
