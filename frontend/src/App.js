import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      ;
    </>
  );
};

export default App;
