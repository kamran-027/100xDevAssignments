import React, { useState } from "react";
import "./Assignment2.css";

const Assignment2 = () => {
  const [cls, setCls] = useState("default");

  const changeColor = (color) => {
    setCls(color);
  };

  return (
    <div className={`canvas ${cls}`}>
      <div className="button-container">
        <button
          className="red"
          onClick={() => {
            changeColor("red");
          }}
        >
          Red
        </button>
        <button
          className="yellow"
          onClick={() => {
            changeColor("yellow");
          }}
        >
          Yellow
        </button>
        <button
          className="black"
          style={{ color: "white" }}
          onClick={() => {
            changeColor("black");
          }}
        >
          Black
        </button>
        <button
          className="purple"
          onClick={() => {
            changeColor("purple");
          }}
        >
          Purple
        </button>
        <button
          className="green"
          onClick={() => {
            changeColor("green");
          }}
        >
          Green
        </button>
        <button
          className="blue"
          onClick={() => {
            changeColor("blue");
          }}
        >
          Blue
        </button>
        <button
          className="default"
          onClick={() => {
            changeColor("default");
          }}
        >
          Default
        </button>
      </div>
    </div>
  );
};

export default Assignment2;
