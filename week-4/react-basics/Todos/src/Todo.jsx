function Todo() {
  let todoState = [];
  let globalId = 1;

  const handleTodo = (id) => {
    console.log("Inside the handle TODO");
    const element = document.getElementById(id);
    console.log(element);
  };

  const addTodotoDOM = (todoObj) => {
    const childDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const descDiv = document.createElement("div");
    const doneBtn = document.createElement("button");

    titleDiv.innerHTML = todoObj.title;
    descDiv.innerHTML = todoObj.description;
    doneBtn.innerHTML = todoObj.completed ? "Done" : "Mark as done";
    doneBtn.setAttribute("onclick", `handleTodo`);
    childDiv.appendChild(titleDiv);
    childDiv.appendChild(descDiv);
    childDiv.appendChild(doneBtn);
    childDiv.setAttribute("id", todoObj.id);

    const parent = document.getElementById("todos");
    parent.appendChild(childDiv);
  };

  const addTodos = () => {
    const title = document.getElementById("title").value;
    const desc = document.getElementById("desc").value;
    let todo = {
      title: title,
      description: desc,
      completed: false,
      id: globalId++,
    };
    addTodotoDOM(todo);
  };

  return (
    <>
      <div>
        <input type="text" placeholder="title" id="title" />
        <br />
        <br />
        <input type="text" placeholder="description" id="desc" />
        <br />
        <br />
        <button onClick={addTodos}>Add Todo</button>
        <div id="todos"></div>
      </div>
    </>
  );
}
export default Todo;
