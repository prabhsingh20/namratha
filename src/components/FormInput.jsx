import { useState } from "react";
import styles from "./FormInput.module.css";
import Error from "./Error";

function FormInput({ success, setSuccess }) {
  const [userName, setUserName] = useState("Prabh");
  const [userEmail, setUserEmail] = useState("Prabh@gmail.com");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailFormat = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailFormat.test(userEmail)) {
      setError("Enter a valid email address");
    } else {
      setError("");
      setSuccess(true);

      setTimeout(() => {
        window.location.href = "/";
      }, 5000);
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p className={styles.heading}>Registration Form</p>
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
          {error && <Error />}
          <button
            className={`btn secondary `}
            disabled={!userName || !userEmail || success}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormInput;
