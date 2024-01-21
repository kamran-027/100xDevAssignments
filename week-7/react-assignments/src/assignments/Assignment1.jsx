import React from "react";
import IMG from "../assets/react.svg";
import "./Assignment1.css";

const Assignment1 = () => {
  return (
    <div className="card">
      <img
        className="circular-img"
        src={`https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg`}
      />
      <span className="person-name">
        <span style={{ fontWeight: "bolder" }}>Mark Wayne </span>25
      </span>
      <span className="person-place">Texas</span>
      <div className="divider"></div>
      <div className="stats-container">
        <div className="stats-block">
          <span className="stats">80K</span>
          <span>Followers</span>
        </div>
        <div className="stats-block">
          <span className="stats">85K</span>
          <span>Likes</span>
        </div>
        <div className="stats-block">
          <span className="stats">90K</span>
          <span>Photos</span>
        </div>
      </div>
    </div>
  );
};

export default Assignment1;
