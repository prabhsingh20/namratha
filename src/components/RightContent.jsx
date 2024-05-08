import Carousel from "./Carousel";
import styles from "./RightContent.module.css";

function RightContent() {
  return (
    <section className={styles.section}>
      <Carousel />
    </section>
  );
}

export default RightContent;
