import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Header>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <h2>
              Ample<span>mart</span>
            </h2>
          </Link>
        </div>
      </div>
      ;
    </Header>
  );
};

export default Header;
