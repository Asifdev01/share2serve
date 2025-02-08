import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/feature/Header";
import Footer from "./components/feature/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const LayoutWithHeader = () => {
  return (
    <>
      <Header />
      <Outlet /> 
      <Footer />
    </>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutWithHeader />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
};

export default AppRoutes;
