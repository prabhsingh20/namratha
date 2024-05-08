import styles from "./LeftContent.module.css";

function LeftContent() {
  return (
    <section className={styles.section}>
      <div className="imgContainer">
        <img src="/girlimage.png" alt="" />
      </div>
      <div className={styles.box}>
        <div className="sparkContainer">
          <img src="/spark.png" alt="spark" />
        </div>
        <span>40%</span>
        <p>
          Achieved reduction in project execution time by optimising team
          availability
        </p>
      </div>
      <div className={styles.boxTwo}>
        <img src="/rocket.png" alt="rocket" />
        <div>
          <span>10 DAYS</span>
          <p>Staff Deployemt</p>
        </div>
      </div>
      <div className={styles.boxThree}>
        <div>
          <span>$0.5</span>
          <p>MILLION</p>
        </div>
        <p>Reduced client expenses by saving on hiring and employee costs.</p>
      </div>
    </section>
  );
}

export default LeftContent;
