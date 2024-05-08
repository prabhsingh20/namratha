import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; Talup 2023. All rights reserved</p>
      <div>
        <a href="">Terms & Conditions</a>
        <a href="">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
