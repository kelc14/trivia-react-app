import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Questions.css";
import { useNavigate } from "react-router-dom";

const CATEGORIES = { general: 9 };

const Questions = ({ type }) => {
  const [questions, setQuestions] = useState(() => []);
  const [answers, setAnswers] = useState(() => []);
  const navigate = useNavigate();

  useEffect(() => {
    if (!type) navigate("/");
    const getQuestions = async () => {
      // do API call for questions
      let res = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${CATEGORIES[type]}`
      );
      setQuestions(() => [...res.data.results]);
    };
    getQuestions();
  }, []);

  return (
    <div>
      <h2>Question: 1</h2>
      <p>{questions[0].question}</p>
      {questions[0].type === "multiple" && (
        <ul>
          <li>{questions[0].incorrect_answers[0]}</li>
          <li>{questions[0].incorrect_answers[1]}</li>
          <li>{questions[0].incorrect_answers[2]}</li>
          <li>{questions[0].correct_answer}</li>
        </ul>
      )}
    </div>
  );
};

export default Questions;
