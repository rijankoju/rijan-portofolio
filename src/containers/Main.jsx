import React from "react";
import Home from "../pages/home/HomeComponent.jsx";
import Splash from "../pages/splash/Splash.jsx";
import Contact from "../pages/contact/ContactComponent.jsx";
import { settings } from "../portfolio";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Main(propss) {
  // Vite/React Router v6 routing
  return (
    <BrowserRouter>
      <Routes>
        {settings.isSplash && (
          <Route path="/" element={<Splash theme={propss.theme} setTheme={propss.setTheme} />} />
        )}
        <Route path="/home" element={<Home theme={propss.theme} setTheme={propss.setTheme} />} />
        <Route path="/contact" element={<Contact theme={propss.theme} setTheme={propss.setTheme} />} />
        <Route path="/splash" element={<Splash theme={propss.theme} setTheme={propss.setTheme} />} />
        {/* Redirect root to /home if not splash */}
        {!settings.isSplash && <Route path="/" element={<Navigate to="/home" replace />} />}
      </Routes>
    </BrowserRouter>
  );
}
