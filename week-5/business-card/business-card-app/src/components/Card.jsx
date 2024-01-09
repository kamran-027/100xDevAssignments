import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <h1>Title</h1>
      <p>Desc</p>
      <h3>Interests</h3>
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </ul>
      <button>LinkedIn</button>
      <button>Twitter</button>
    </div>
  );
};

export default Card;
