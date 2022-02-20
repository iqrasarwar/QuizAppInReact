import "../styles.css";
import React from "react";

function Hr(props) {
  if (props.id !== 4) return <hr />;
  else return <> </>;
}
export default function Question(props) {
  return (
    <div className="question">
      <p className="statment">{props.question}</p>
      <div className="options">
        <p>{props.options[0].option}</p>
        <p>{props.options[1].option}</p>
        <p>{props.options[2].option}</p>
        <p>{props.options[3].option}</p>
      </div>
      <Hr id={props.id} />
    </div>
  );
}
