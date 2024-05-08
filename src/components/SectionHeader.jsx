import styles from "./SectionHeader.module.css";

function SectionHeader() {
  return (
    <header className={styles.header}>
      <p>Success stories</p>
      <h1>Every success journey we’ve encountered.</h1>
    </header>
  );
}

export default SectionHeader;
