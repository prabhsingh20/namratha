import { useState } from "react";
import styles from "./FormInput.module.css";

function FormInput() {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>Registration Form</p>
      <h1>Start your success Journey here!</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <button className={`btn secondary `} disabled={!userName || !userEmail}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormInput;
