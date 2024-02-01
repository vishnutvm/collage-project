import React, { useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../../components/Logo/Logo";
import Cart from "../../components/Cart/Cart";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <header>
      <div className={styles.header}>
        <Logo />
        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            }
            onClick={hideMenu}
          ></div>

          <ul>
            <li className={styles["logo-mobile"]}>
              <Logo />
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/shop" className={activeLink}>
                Shop
              </NavLink>
            </li>
          </ul>

          <div className={styles["header-right"]}>
            <span className={styles.links}>
              <NavLink to="/login" className={activeLink}>
                Login
              </NavLink>
              <NavLink to="register" className={activeLink}>
                Register
              </NavLink>
              <NavLink to="order-history" className={activeLink}>
                My Order
              </NavLink>
            </span>
            <Cart />
          </div>
        </nav>
        <div className={styles["menu-icon"]}>
          <Cart />
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
