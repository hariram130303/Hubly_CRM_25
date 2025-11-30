// App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/user/Navbar";
import Hero from "./pages/user/Hero";
import LogosStrip from "./pages/user/LogosStrip";
import FeaturesSection from "./pages/user/FeaturesSection";
import PricingSection from "./pages/user/PricingSection";
import Footer from "./pages/user/Footer";
import ChatWidget from "./pages/user/ChatWidget";

import Login from "./pages/admin/Login";
import Signup from "./pages/admin/SignUp";

import Dashboard from "./pages/admin/Dashboard";
import ContactCenter from "./pages/admin/ContactCenter";
import Analytics from "./pages/admin/Analytics";
import ChatBot from "./pages/admin/ChatBot";
import TeamPage from "./pages/admin/Team/TeamPage";
import Settings from "./pages/admin/Settings";

import styles from "./styles/App.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Homepage */}
        <Route
          path="/"
          element={
            <div className={styles.app}>
              <Navbar />
              <main>
                <Hero />
                <LogosStrip />
                <FeaturesSection />
                <PricingSection />
              </main>
              <Footer />
              <ChatWidget />
            </div>
          }
        />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ContactCenter" element={<ContactCenter />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/Teampage" element={<TeamPage />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
