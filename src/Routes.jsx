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
import Adminpage from "./components/feature/AppDrawer";
import Dashboard from "./Pages/Admin/Dashboard";


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
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/dashboard" element={<Dashboard />} />


        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
};

export default AppRoutes;
