import "../src/styles.css";
import React from "react";
import CoverPage from "./components/CoverPage";
import Questions from "./components/Questions";

export default function App() {
  let [quiz, setQuiz] = React.useState(false);
  function startQuiz() {
    setQuiz((PrevQuiz) => (PrevQuiz = !PrevQuiz));
  }
  return (
    <div className="App">
      {quiz ? (
        <Questions handleClick={startQuiz} quizState={quiz} />
      ) : (
        <CoverPage handleClick={startQuiz} />
      )}
    </div>
  );
}
