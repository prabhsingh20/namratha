import { useState } from "react";
import styles from "./Carousel.module.css";
import { tabs } from "../constants/index";

function Carousel() {
  const [activeTab, setActiveTab] = useState(0);

  const handleDotClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <h2
            key={index}
            className={`${styles.tab} ${
              activeTab === index ? "" : `${styles.hidden}`
            }`}
          >
            {activeTab === index && tab.content}
          </h2>
        ))}
      </div>
      <div className={styles.dots}>
        {tabs.map((tab, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              activeTab === index ? `${styles.active}` : ""
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <button className="btn secondary">
        Explore More
        <img src="/rightarrow.png" alt="" />
      </button>
    </div>
  );
}

export default Carousel;
