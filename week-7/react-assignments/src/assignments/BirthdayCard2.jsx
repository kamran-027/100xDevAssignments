import React from "react";

const BirthdayCard2 = React.memo(({ name }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "25rem",
        padding: "3rem",
        height: "13rem",
        backgroundImage:
          "url(https://img.freepik.com/free-vector/happy-birthday-sparkles-balloon-card_1017-32696.jpg?w=1060&t=st=1705775583~exp=1705776183~hmac=229934e784fc6202a948f508d560e4dbd9365a82d21d5c45383be64731f29fb8)",
        borderRadius: 10,
        color: "purple",
      }}
    >
      <h1>Birthday Card 2</h1>
      <h3>Happy Birthday {name}</h3>
      <p>Again Wishing you all the succes and happiness in the world !🎈</p>
    </div>
  );
});

export default BirthdayCard2;
