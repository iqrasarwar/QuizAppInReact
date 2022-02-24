import "../styles.css";
import React from "react";
import Question from "./Question";

export default function Questions({ handleClick, quizState }) {
  const [questions, setQuestions] = React.useState([]);
  React.useEffect(() => {
    let url = "https://opentdb.com/api.php?amount=5&category=18&type=multiple";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, [quizState]);
  const options = questions.map((ques) =>
    makeOptions(ques.incorrect_answers, ques.correct_answer)
  );
  let quiz = stateArray(questions, options);
  return (
    <div>
      <div className="cover--questions">
        <Question questions={quiz} resetQuiz={handleClick} />
      </div>
    </div>
  );
}
function makeOptions(inc, c) {
  let x = [];
  let randomNum = Math.floor(Math.random() * 4);
  x.push(...inc);
  x.splice(randomNum, 0, c);
  let y = x.map((opt) => {
    return {
      option: opt,
      isSelected: false,
      markedCorrect: 2
    };
  });
  return y;
}
function stateArray(questions, options) {
  let stateArr = [];
  questions.forEach((ques, index) => {
    stateArr.push({
      question: ques.question,
      options: options[index],
      correctOpt: ques.correct_answer
    });
  });
  return stateArr;
}
