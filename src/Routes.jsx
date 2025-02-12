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
import AdminDashboard from "./components/feature/AppDrawer";
import AppDrawer from "./components/feature/AppDrawer";
import Dashboard from "./pages/Admin/Dashboard";
import Donor from "./pages/Admin/Donor";
import FoodDoner from "./pages/Admin/FoodDoner";
import Request from "./pages/Admin/Request";
import PartnersList from "./pages/Admin/PartnerList";
import Donate from "./pages/DonateNow/Donate";



const LayoutWithHeader = () => {
  return (
    <>
      <Header />
      <Outlet /> 
      <Footer />
    </>
  );
};


const LayoutWithAdmin = () => {
  return (
    <>
      <AppDrawer/>
      <Outlet /> 
    </>
  );
};

const LayoutWithDonateNow = () => {
  return (
    <>
      <Header/>
      <Outlet /> 
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

        <Route element ={<LayoutWithAdmin/>}>

         <Route path="/admin/dashboard" element={<Dashboard />} />
         <Route path="/admin/donor" element={<Donor />} />
         <Route path="/admin/fooddonor" element={<FoodDoner />} />
         <Route path="/admin/request" element={<Request />} />
         <Route path="/admin/partnerlist" element={<PartnersList />} />


        {/* <Route path="/admin" element={<Adminpage />} /> */}
        </Route>
        
        <Route element={<LayoutWithDonateNow />}>

        <Route path="/donate" element={<Donate/>} />
        
        </Route>



        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
};

export default AppRoutes;
