import "../src/styles.css";
import React from "react";
import CoverPage from "./components/CoverPage";
import Questions from "./components/Questions";

export default function App() {
  let [quiz, setQuiz] = React.useState(false);
  function startQuiz() {
    setQuiz((PrevQuiz) => (PrevQuiz = !PrevQuiz));
  }
  console.log(quiz);
  return (
    <div className="App">
      {quiz ? <Questions /> : <CoverPage handleClick={startQuiz} />}
    </div>
  );
}
