import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Sidebar/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes"; // 👈 import it

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => { 
    console.log("Dark mode inside effect:", darkMode); 
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
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-300">
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <AnimatedRoutes /> {/* 👈 moved routes here */}
      </Router>
    </div>
  );
};

export default App;
