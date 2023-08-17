import React, { useState, useEffect } from "react";

import "./variables.css";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Questions from "./Questions";

function App() {
  // dark mode toggle:
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme} className={`App-toggle-${theme}`}>
        toggle mode
      </button>

      {/* <div className="Toggle-mode">
        <input type="checkbox" className="checkbox" id="chk" />
        <label className="label" htmlFor="chk">
          <FontAwesomeIcon icon={faMoon} className="Moon" />
          <FontAwesomeIcon icon={faSun} className="Sun" />
          <i className="fas fa-sun"></i>
          <div className="ball"></div>
        </label>
      </div> */}

      <Routes>
        <Route path="/general" element={<Questions type="general" />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
