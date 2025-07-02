import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Sidebar/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <Router>
      {/* Full page wrapper */}
      <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        
        {/* Navbar at top */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Main page content fills remaining height */}
        <div className="flex-grow">
          <AnimatedRoutes />
        </div>

        {/* Sticky footer at bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
