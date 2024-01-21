import React from "react";
import birthdayImg from "../assets/patterns.png";

const BirthdayCard3 = React.memo(({ name }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "25rem",
        padding: "3rem",
        height: "13rem",
        background: "yellow",
        borderRadius: 10,
        color: "purple",
      }}
    >
      <h1>Birthday Card 2</h1>
      <h3>Happy Birthday {name} takle</h3>
      <p>
        Third time Wishing you all the succes and happiness in the world !🎈
      </p>
    </div>
  );
});

export default BirthdayCard3;
