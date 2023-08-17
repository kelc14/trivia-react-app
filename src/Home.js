import React from "react";
import axios from "axios";
import "./Home.css";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  const handleClick = async () => {
    // do API call for questions
    let res = await axios.get(
      "https://opentdb.com/api.php?amount=10&category=9"
    );
    let questions = res.data.results;
    // send questions to path "/questions"
  };
  return (
    <div>
      <div>
        <h1>TRIVIA</h1>
        <h3>choose your category:</h3>
      </div>
      <div className="Home-categories">
        <NavLink to="/general" className="Home-categories-btn">
          General
        </NavLink>

        <button className="Home-categories-btn">Books</button>
        <button className="Home-categories-btn">Music</button>
        <button className="Home-categories-btn">Sports</button>
        <button className="Home-categories-btn">TV</button>
        <button className="Home-categories-btn">Animals</button>
      </div>
    </div>
  );
};

export default Home;
