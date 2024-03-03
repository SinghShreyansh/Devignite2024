"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Quiz from "../../components/quiz";
import Newquiz from "../../components/Newquiz"

// App css
import './styles/app.css';

const QuizPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [mcqs, setMcqs] = useState([]);

  useEffect(() => {
    getQuiz();
  }, []);

  console.log(mcqs);

  const getQuiz = async () => {
    try {
      // const response = await axios.post("http://127.0.0.1:5000/extract-text");
      setMcqs([
        {
          question: "What is one of the primary benefits of TypeScript?",
          A: "It provides dynamic typing for JavaScript.",
          B: "It catches errors at compile-time.",
          C: "It eliminates the need for runtime type checking.",
          D: "It enforces strict mode by default.",
          response: "B"
        },
        {
          question: "Which of the following is NOT a design goal of TypeScript?",
          A: "Being a cross-platform development tool.",
          B: "Imposing runtime overhead on emitted programs.",
          C: "Statically identifying JavaScript constructs that are likely to be errors.",
          D: "Providing a structuring mechanism for larger pieces of code.",
          response: "B"
        },
        {
          question: "What does the TypeScript compiler do?",
          A: "Generates information for better IDE assistance.",
          B: "Converts TypeScript code to its JavaScript equivalent.",
          C: "Performs runtime type checking.",
          D: "Executes TypeScript code directly.",
          response: "B"
        },
        {
          question: "Which component of TypeScript assists in providing better IDE assistance features?",
          A: "Language",
          B: "Compiler",
          C: "Language Service",
          D: "IDE integration (VS Shim)",
          response: "C"
        },
        {
          question: "What type of integration work is required by IDEs and text editors to take advantage of TypeScript features?",
          A: "TypeScript code conversion",
          B: "Language service configuration",
          C: "IDE integration",
          D: "Compiler optimization",
          response: "C"
        },
        {
          question: "Which of the following is NOT a feature of TypeScript?",
          A: "Interfaces",
          B: "Namespaces",
          C: "Classes",
          D: "Dynamic typing",
          response: "D"
        }
      ]);
      // setMcqs([
      //   {
      //     question:
      //       "What is one of the primary benefits of TypeScript over JavaScript?",
      //     A: ": To implement inferencing with Bayesian Network in Python",
      //     B: ": To implement machine learning algorithms in Python",
      //     C: ": To analyze data using statistical methods in Python",
      //     D: ": To visualize data using graphs in Python",
      //     reponse: "A",
      //   },
      //   {
      //     question: "What is a Bayesian network?",
      //     A: ": A probabilistic graphical model that depicts a set of variables and their conditional dependencies using a directed acyclic graph (DAG)",
      //     B: ": A machine learning algorithm used for classification tasks",
      //     C: ": A statistical method used for hypothesis testing",
      //     D: ": A graph used for data visualization",
      //     reponse: "A",
      //   },
      // ]);
    } catch (error) {
      console.error("Error processing PDF:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded bg-white p-6 shadow-lg">
        <Newquiz/>
        {/* {mcqs.length > 0 &&
          mcqs.map((mcq, index) => (
            <Quiz
              key={index}
              index={index}
              question={mcq.question}
              options={mcq}
            />
          ))} */}
      </div>
    </div>
  );
};

export default QuizPage;
