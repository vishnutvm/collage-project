import React, { useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../../components/Logo/Logo";
import Cart from "../../components/Cart/Cart";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { RESET_AUTH, logout } from "../../redux/features/auth/authSlice";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ShowOnLogin, {
  ShowOnLogout,
} from "../../components/HiddenLink/HiddenLink";
import { UserName } from "../Profile/Profile";

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const logoutUser = async () => {
    dispatch(RESET_AUTH());
    await dispatch(logout());
    localStorage.setItem("cartItems", JSON.stringify([]));
    navigate("/login");
    window.location.reload();
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
            <li>
              <NavLink to="/admin/home" className={activeLink}>
                | &nbsp; Admin
              </NavLink>
            </li>
          </ul>

          <div className={styles["header-right"]}>
            <span className={styles.links}>
              <ShowOnLogin>
                <Link to="/profile">
                  <FaUserCircle size={16} color="#ff7722" />
                  <UserName />
                </Link>
              </ShowOnLogin>
              <ShowOnLogout>
                <NavLink to="/login" className={activeLink}>
                  Login
                </NavLink>
                <NavLink to="register" className={activeLink}>
                  Register
                </NavLink>
              </ShowOnLogout>
              <ShowOnLogin>
                <NavLink to="order-history" className={activeLink}>
                  My Order
                </NavLink>
                <NavLink to="/" onClick={logoutUser}>
                  Logout
                </NavLink>
              </ShowOnLogin>
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
