import "../styles.css";
import React from "react";
import Question from "./Question";

export default function Questions(props) {
  const [questions, setQuestions] = React.useState([]);
  React.useEffect(() => {
    let url = "https://opentdb.com/api.php?amount=5&category=18&type=multiple";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results);
        setQuiz(stateArr);
      });
  }, []);

  const options = questions.map((ques) =>
    makeOptions(ques.incorrect_answers, ques.correct_answer)
  );
  let stateArr = [];
  function stateArray() {
    questions.forEach((ques, index) => {
      stateArr.push({
        question: ques.question,
        options: options[index],
        correctOpt: ques.correct_answer
      });
    });
    return stateArr;
  }

  const [quiz, setQuiz] = React.useState(stateArray());
  React.useEffect(() => {
    setQuiz(stateArr);
  }, []);
  console.log(quiz);
  let questionsArr = questions.map((ques, index) => (
    <Question
      key={index}
      question={stateArr[index].question}
      options={stateArr[index].options}
      id={index}
    />
  ));

  return (
    <div>
      <div className="cover--questions">
        {questionsArr}
        <button className="cover--submit quiz--submit">Submit Quiz</button>
      </div>
    </div>
  );
}

function makeOptions(inc, c) {
  let x = [];
  x.push(...inc);
  x.push(c);
  let y = x.map((opt) => {
    return {
      option: opt,
      isSelected: false
    };
  });
  return y;
}
