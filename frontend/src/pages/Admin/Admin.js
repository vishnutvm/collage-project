import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./Admin.module.scss";
import Navbar from "../../components/Admin/Navbar/Navbar";
import AdminHome from "../../components/Admin/AdminHome/AdminHome";
import Category from "../../components/Admin/category/Category";

const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <AdminHome />
        <Routes>
          <Route path="category" element={<Category />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
