import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import styles from "./SectionContent.module.css";

function SectionContent() {
  return (
    <section className={styles.section}>
      <LeftContent />
      <RightContent />
    </section>
  );
}

export default SectionContent;
