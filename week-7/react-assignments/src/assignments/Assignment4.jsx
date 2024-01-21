import React, { useState } from "react";

const Assignment4 = () => {
  const wordsArr = ["rest", "play", "is", "cool", "dark", "on", "there"];
  const [para, setPara] = useState([]);
  const [number, setNumber] = useState(0);

  const generatePara = () => {
    let Arr = [];
    for (let i = 0; i < number; i++) {
      Arr.push(wordsArr[Math.floor(Math.random() * wordsArr.length)]);
    }
    setPara(Arr);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Para Generator</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <input
          style={{ width: "20rem", borderRadius: 5, padding: 5 }}
          placeholder="Enter number of words"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={generatePara} style={{ padding: "0.5rem" }}>
          Generate
        </button>
      </div>
      {para.map((word) => {
        return word + " ";
      })}
    </div>
  );
};

export default Assignment4;
