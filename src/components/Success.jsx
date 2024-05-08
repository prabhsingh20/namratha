import { useState, useEffect } from "react";
import styles from "./Success.module.css";

function Success() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    if (countdown === 0) {
      clearTimeout(redirectTimer);
    }

    return () => clearTimeout(redirectTimer);
  }, [countdown]);

  return (
    <section className={styles.success}>
      <img src="/logo.png" alt="company logo" />
      <div>
        <div>
          <img src="/tick.png" alt="tick" />
          <p className={styles.heading}>Success Submitted</p>
          <h1>Congratulations</h1>
          <p>
            Your request has been successfully submitted to us. We will validate
            your information and reach out to you shortly with updates.
          </p>
        </div>
        <div className={styles.redirect}>
          <p>
            Redirecting you to Homepage in <span>{countdown} Seconds</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Success;
