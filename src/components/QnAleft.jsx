import styles from "./QnALeft.module.css";

function QnAleft() {
  return (
    <div className={styles.left}>
      <div className={styles.heading}>
        <p>What’s on your mind</p>
        <h1>Ask Questions</h1>
      </div>
      <div>
        <img src="/Union.png" alt="union" />
      </div>
    </div>
  );
}

export default QnAleft;
