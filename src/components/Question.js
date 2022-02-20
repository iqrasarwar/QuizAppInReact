import "../styles.css";
import React from "react";

export default function Question({ questions }) {
  const [quizz, setQuiz] = React.useState(questions);

  React.useEffect(() => {
    setQuiz(() => questions);
  }, [questions]);
  function selectOption(quesid, option, quizz) {
    let n;
    for (let i = 0; i < 4; i++) {
      if (quizz[quesid].options[i].option === option.target.innerText) n = i;
    }
    setQuiz((prevQuiz) => {
      let x = [...prevQuiz, (prevQuiz[quesid].options[n].isSelected = true)];
      console.log(x);
      return x;
    });
  }
  function QuesCom({ ques, index, quizz }) {
    return (
      <div className="question">
        <div>
          <p className="statment">{ques.question}</p>
          <div className="options">
            <p
              onClick={(e) => selectOption(index, e, quizz)}
              className={`${
                ques.options[0].isSelected === true ? "selected" : "notSl"
              }`}
            >
              {ques.options[0].option}
            </p>
            <p onClick={(e) => selectOption(index, e, quizz)}>
              {ques.options[1].option}
            </p>
            <p onClick={(e) => selectOption(index, e, quizz)}>
              {ques.options[2].option}
            </p>
            <p onClick={(e) => selectOption(index, e, quizz)}>
              {ques.options[3].option}
            </p>
          </div>
        </div>
        <Hr key={index} id={index} />
      </div>
    );
  }

  let questionsArr = quizz.map((ques, index) => (
    <QuesCom key={index} ques={ques} index={index} quizz={quizz} />
  ));

  return <div>{questionsArr}</div>;
}

function Hr(props) {
  if (props.id !== 4) return <hr />;
  else return <> </>;
}
