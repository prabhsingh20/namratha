import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <img src="/logo.png" alt="company logo " />
        <div>
          <NavLink to="/regisform" className="btn primary">
            Get Projects
          </NavLink>
          <NavLink to="" className="btn secondary">
            Onboard Talent
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
