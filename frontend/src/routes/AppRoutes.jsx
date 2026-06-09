import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Academics from "../pages/Academics";
import Admissions from "../pages/Admissions";
import Faculty from "../pages/Faculty";
import Gallery from "../pages/Gallery";
import Events from "../pages/Events";
import Achievements from "../pages/Achievements";
import Downloads from "../pages/Downloads";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (

    <>
      {!isDashboardRoute && <Header />}
      <Routes>

        {/* Public Routes */}

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        {/* Protected Route */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
};

export default AppRoutes;