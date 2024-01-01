import React from "react";

const SingleTodo = (props) => {
  const { title, description, id, completed, todos, setTodos } = props;

  const handleTodo = () => {
    let todo = todos.find((t) => t.id == id);
    todo.completed = true;
    const updatedItems = todos.map((item) =>
      item.id === id ? { ...item, completed: true } : item
    );
    setTodos(updatedItems);
  };

  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <button onClick={handleTodo}>
        {completed ? "Done" : "Mark as done"}
      </button>
    </div>
  );
};

export default SingleTodo;
