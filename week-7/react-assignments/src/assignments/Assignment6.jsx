import React, { useRef, useState } from "react";

const Assignment6 = () => {
  const [isOTPBox, setIsOTPBox] = useState(false);

  const inpOne = useRef();
  const inpTwo = useRef();
  const inpThree = useRef();
  const inpFour = useRef();

  return (
    <div
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        border: "1px solid black",
        padding: "1rem 4rem",
        gap: "1rem",
        borderRadius: "10px",
        backgroundColor: "black",
      }}
    >
      <h1 style={{ color: "white" }}>Login via OTP</h1>
      {!isOTPBox ? (
        <input
          style={{
            fontSize: "1rem",
            width: "100%",
            padding: 7,
            borderRadius: 7,
            color: "white",
            backgroundColor: "transparent",
            border: "1px solid white",
          }}
          placeholder="Enter your mobile number"
        />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <input
            style={{
              width: "2.5rem",
              height: "2rem",
              backgroundColor: "transparent",
              border: "1px solid white",
              borderRadius: "10px",
              color: "white",
              textAlign: "center",
            }}
            autoFocus
            type="number"
            ref={inpOne}
            onChange={() => inpTwo.current.focus()}
          />
          <input
            style={{
              width: "2.5rem",
              height: "2rem",
              backgroundColor: "transparent",
              border: "1px solid white",
              borderRadius: "10px",
              color: "white",
              textAlign: "center",
            }}
            type="number"
            ref={inpTwo}
            onChange={() => inpThree.current.focus()}
          />
          <input
            style={{
              width: "2.5rem",
              height: "2rem",
              backgroundColor: "transparent",
              border: "1px solid white",
              borderRadius: "10px",
              color: "white",
              textAlign: "center",
            }}
            type="number"
            ref={inpThree}
            onChange={(e) => inpFour.current.focus()}
          />
          <input
            style={{
              width: "2.5rem",
              height: "2rem",
              backgroundColor: "transparent",
              border: "1px solid white",
              borderRadius: "10px",
              color: "white",
              textAlign: "center",
            }}
            type="number"
            ref={inpFour}
          />
        </div>
      )}

      <button
        style={{
          marginBottom: "6rem",
          padding: "5px 20px",
          backgroundColor: "transparent",
          border: "1px solid white",
          color: "white",
        }}
        onClick={() => setIsOTPBox(true)}
      >
        {!isOTPBox ? "Send OTP" : "Login"}
      </button>
    </div>
  );
};

export default Assignment6;
