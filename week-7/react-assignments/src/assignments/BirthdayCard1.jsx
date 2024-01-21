import React from "react";

const BirthdayCard1 = React.memo(({ name }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "25rem",
        padding: "3rem",
        height: "13rem",
        backgroundImage:
          "url(https://img.freepik.com/free-vector/luxurious-gold-balloons-frame-background_53876-95622.jpg?w=1060&t=st=1705775260~exp=1705775860~hmac=451ba5b…)",
        borderRadius: 10,
        color: "purple",
      }}
    >
      <h1>Birthday Card 1</h1>
      <h3>Happy Birthday {name}</h3>
      <p>Wishing you all the succes and happiness in the world !🎈</p>
    </div>
  );
});

export default BirthdayCard1;
