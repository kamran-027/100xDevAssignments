import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Todo from "./todo.jsx";
import TodoState from "./TodoState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Todo /> */}
    <TodoState />
  </React.StrictMode>
);
