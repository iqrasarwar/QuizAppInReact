import "../styles.css";
import React from "react";

export default function Question({ questions, resetQuiz }) {
  const [quizz, setQuiz] = React.useState(questions);

  React.useEffect(() => {
    setQuiz(() => questions);
  }, [questions]);
  function selectOption(quesid, option, quizz) {
    let n;
    for (let i = 0; i < 4; i++) {
      if (quizz[quesid].options[i].option === option.target.innerText) n = i;
      else {
        setQuiz(() => [
          ...questions,
          (questions[quesid].options[i].isSelected = false)
        ]);
      }
    }
    setQuiz(() => [
      ...questions,
      (questions[quesid].options[n].isSelected = true)
    ]);
  }
  function handleClicks(index, e, questions) {
    if (formSubmitted === true) return false;
    selectOption(index, e, questions);
  }
  function QuesCom({ ques, index }) {
    return (
      <div className="question">
        <div>
          <p className="statment">{ques.question}</p>
          <div className="options">
            <p
              onClick={(e) => handleClicks(index, e, questions)}
              className={selectClass(ques, 0)}
              id={selectId(ques.options[0].markedCorrect)}
            >
              {ques.options[0].option}
            </p>
            <p
              onClick={(e) => handleClicks(index, e, questions)}
              className={selectClass(ques, 1)}
              id={selectId(ques.options[1].markedCorrect)}
            >
              {ques.options[1].option}
            </p>
            <p
              onClick={(e) => handleClicks(index, e, questions)}
              className={selectClass(ques, 2)}
              id={selectId(ques.options[2].markedCorrect)}
            >
              {ques.options[2].option}
            </p>
            <p
              onClick={(e) => handleClicks(index, e, questions)}
              className={selectClass(ques, 3)}
              id={selectId(ques.options[3].markedCorrect)}
            >
              {ques.options[3].option}
            </p>
          </div>
        </div>
        <Hr key={index} id={index} />
      </div>
    );
  }
  let questionsArr = questions.map((ques, index) => (
    <QuesCom key={index} ques={ques} index={index} quizz={quizz} />
  ));

  return (
    <div>
      {questionsArr}
      {formSubmitted === false ? (
        <button
          className="cover--submit quiz--submit"
          onClick={() => submitQuiz(questions)}
        >
          Submit Quiz
        </button>
      ) : (
        <button className="cover--submit quiz--submit" onClick={resetQuizz}>
          Reset Quiz
        </button>
      )}
    </div>
  );
  function resetQuizz() {
    formSubmitted = false;
    resetQuiz();
  }

  function selectClass(opt, index) {
    if (opt.options[index].isSelected) return "selected";
    if (formSubmitted && opt.options[index].option === opt.correctOpt)
      return "markcorrect";
  }
  function selectId(val) {
    if (val === 1) return "correct";
    else if (val === 0) return "incorrect";
    else return "";
  }
  function submitQuiz(questions) {
    formSubmitted = true;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 4; j++) {
        if (questions[i].options[j].isSelected) {
          if (questions[i].options[j].option === questions[i].correctOpt) {
            count++;
            setQuiz(() => [
              ...questions,
              (questions[i].options[j].markedCorrect = 1)
            ]);
          } else {
            setQuiz(() => [
              ...questions,
              (questions[i].options[j].markedCorrect = 0)
            ]);
          }
        }
      }
    }
    if (count === 0) setQuiz(() => [...questions]);
  }
}

function Hr(props) {
  if (props.id !== 4) return <hr />;
  else return <> </>;
}
let formSubmitted = false;
let count = 0;
