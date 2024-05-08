import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <img src="/logo.png" alt="" />
      <img
        className={styles.close}
        src="/Close.png"
        alt="close"
        onClick={() => navigate("/")}
      />
    </nav>
  );
}

export default Navbar;
