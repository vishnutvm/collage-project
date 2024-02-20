import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Login from "../src/pages/Auth/Login";
import Register from "../src/pages/Auth/Register";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element = {< Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      ;
    </>
  );
};

export default App;
