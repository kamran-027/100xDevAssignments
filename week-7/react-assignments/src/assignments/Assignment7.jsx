import React, { useState } from "react";
import BirthdayCard1 from "./BirthdayCard1";
import BirthdayCard2 from "./BirthdayCard2";
import BirthdayCard3 from "./BirthdayCard3";

const Assignment7 = () => {
  const [name, setName] = useState("");
  const [isNameEntered, setIsNameEntered] = useState(false);

  const generateWishes = () => {
    setIsNameEntered(true);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid red",
        backgroundRepeat: "repeat-y",
        gap: "1rem",
        height: "95vh",
        background: `url(
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='29' height='29' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(135)'%3E%3Crect width='100%25' height='100%25' fill='%231c7ed6'/%3E%3Cpath d='M-10 30h60v4h-60zM-10-10h60v4h-60' fill='%23fcc419'/%3E%3Cpath d='M-10 18h60v4h-60zM-10-22h60v4h-60z' fill='%231864ab'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E "
        )`,
      }}
    >
      {!isNameEntered ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#EEB400",
            backgroundImage: `url(
            data:image/svg+xml,%3Csvg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=100%25 height=100%25%3E%3Cdefs%3E%3Cpattern id=p width=100 height=100 patternUnits=userSpaceOnUse%3E%3Cpath id=a data-color=fill fill=%23FFF d=M0 50V0h50zM50 50V0h50zM0 100V50h50zM50 100V50h50z%3E%3C/path%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=url(%23p) width=100%25 height=100%25%3E%3C/rect%3E%3C/svg%3E
            )`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "3rem",
            gap: "1rem",
            borderRadius: "10px",
            border: "2px solid red",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5",
          }}
        >
          <h1>Enter your Name</h1>
          <input
            style={{
              width: "100%",
              textAlign: "center",
              height: "1.5rem",
              borderRadius: "5px",
            }}
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={generateWishes}
            style={{ backgroundColor: "#FF6868", width: "50%", padding: "5px" }}
          >
            Done
          </button>
        </div>
      ) : (
        <>
          <BirthdayCard1 name={name} />
          <BirthdayCard2 name={name} />
          <BirthdayCard3 name={name} />
        </>
      )}
    </div>
  );
};

export default Assignment7;
