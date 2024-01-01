import { useState } from "react";
import SingleTodo from "./SingleTodo";
import "./TodoState.css";

function TodoState() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(1);

  const addTodo = () => {
    setId(id + 1);
    setTodos([
      ...todos,
      {
        id: id,
        title: title,
        description: description,
        completed: false,
      },
    ]);
    setTitle("");
    setDescription("");
  };

  const handleTodoTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleTodoDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <h1>Apna Gyan Pattha</h1>
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleTodoTitle}
        value={title}
      />
      <br />
      <br />
      <input
        type="text"
        id="desc"
        placeholder="Description"
        onChange={handleTodoDescription}
        value={description}
      />
      <br />
      <br />
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo, id) => {
        return (
          <SingleTodo
            key={id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </>
  );
}
export default TodoState;
