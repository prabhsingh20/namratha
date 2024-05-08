import styles from "./Error.module.css";

function Error() {
  return (
    <p className={styles.error}>
      <span className="material-symbols-outlined">exclamation</span>Enter a
      valid email address
    </p>
  );
}

export default Error;
