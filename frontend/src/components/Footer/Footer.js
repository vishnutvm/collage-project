import React from "react";
import styles from "./Footer.module.scss";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className={styles.footer}>
        <p className={styles.copyRight}>Designed with ❤️ by AmpleMart</p>
    </div>
  );
};

export default Footer;
