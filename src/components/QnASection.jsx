import QnARight from "./QnARight";
import styles from "./QnASection.module.css";
import QnAleft from "./QnAleft";

function QnASection() {
  return (
    <section className={styles.section}>
      <QnAleft />
      <QnARight />
    </section>
  );
}

export default QnASection;
