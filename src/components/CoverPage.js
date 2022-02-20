import "../styles.css";
import React from "react";

export default function CoverPage(props) {
  return (
    <div className="cover">
      <h1 className="cover--heading">Quizzical</h1>
      <p className="cover--desc">Test your knowledge about Computer Science!</p>
      <button className="cover--submit" onClick={props.handleClick}>
        Start Quiz
      </button>
    </div>
  );
}
