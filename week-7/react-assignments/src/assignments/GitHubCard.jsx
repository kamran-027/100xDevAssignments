import React from "react";

const GitHubCard = ({ data }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        padding: "1rem 4rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid green",
        backgroundColor: "azure",
        borderRadius: "10px",
      }}
    >
      <h2>GitHub Card</h2>
      <h1>{data.name}</h1>
      <img
        style={{ borderRadius: "50%", width: "10rem" }}
        src={data.avatar_url}
      />
      <span
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <pre>Login ID </pre>
        <p>{data.login}</p>
      </span>
      <span
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <pre>GitHUB </pre>
        <a href="https://github.com/kamran-027">GITHUB</a>
      </span>
      <span
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <pre>GitHub Repos:: </pre>
        <a href={data.repos_url}>Repos</a>
      </span>
    </div>
  );
};

export default GitHubCard;
