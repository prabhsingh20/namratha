import { useState } from "react";
import { questionsArray } from "../constants";
import styles from "./QnARight.module.css";

function QnARight() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  const totalQuestions = questionsArray.length;

  const toggleAnswer = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className={styles.right}>
      {questionsArray.map((questions, index) => (
        <div key={questions.id}>
          <h1 onClick={() => toggleAnswer(index)}>
            {questions.question}
            {openQuestionIndex === index ? (
              <span className="material-symbols-outlined">remove</span>
            ) : (
              <span className="material-symbols-outlined">add</span>
            )}
          </h1>
          {openQuestionIndex === index && <p>{questions.answer}</p>}
          {index !== totalQuestions - 1 && <div className={styles.line}></div>}
        </div>
      ))}
    </div>
  );
}

export default QnARight;
