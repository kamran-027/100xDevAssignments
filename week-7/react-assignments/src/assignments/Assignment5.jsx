import axios from "axios";
import React, { useEffect, useState } from "react";
import GitHubCard from "./GitHubCard";

const Assignment5 = () => {
  const [data, setData] = useState();
  const [username, setUsername] = useState("");

  const getData = async (username) => {
    const resp = await axios.get(`https://api.github.com/users/${username}`);
    setData(resp.data);
    setUsername("");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{
            width: "20vw",
            borderRadius: "5px",
            height: "20px",
          }}
          placeholder="Enter GitHub Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button
          style={{
            border: "1px solid black",
            backgroundColor: "black",
            color: "white",
          }}
          onClick={() => getData(username)}
        >
          GitHub It
        </button>
      </div>
      {data ? <GitHubCard data={data} /> : <></>}
    </div>
  );
};

export default Assignment5;
