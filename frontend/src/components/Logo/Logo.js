import React from 'react'
import styles from "./Logo.module.scss"
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className={styles.logo}>
            <Link to="/">
              <h2>
                Ample<span>mart</span>
              </h2>
            </Link>
          </div>
  )
}

export default Logo
