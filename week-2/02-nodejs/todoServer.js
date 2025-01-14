/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const express = require("express");
const port = 3000;

let todos = [];

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/todos", function (req, res) {
  res.status(200).send(todos);
});

app.get("/todos/:id", function (req, res) {
  let todo = todos.find((t) => t.id == req.params.id);
  todo ? res.status(200).send(todo) : res.status(404).send("Todo not found");
});

app.post("/todos", function (req, res) {
  let obj = {
    id: todos.length + 1,
    title: req.body.title,
    description: req.body.description,
    completed: false,
  };
  todos.push(obj);
  res.status(201);
  res.json({ id: obj.id });
});

app.put("/todos/:id", function (req, res) {
  let todoIndex = todos.findIndex((todo) => todo.id == req.params.id);
  if (todoIndex !== -1) {
    todos[todoIndex].title = req.body.title;
    todos[todoIndex].description = req.body.description;
    todos[todoIndex].completed = true;
    res.status(200).send("Item updated");
  } else {
    res.status(404).send("Todo not found");
  }
});

app.delete("/todos/:id", function (req, res) {
  let isItemExist = todos.find((t) => t.id == req.params.id);
  if (isItemExist) {
    todos = todos.filter((t) => t.id != req.params.id);
    res.status(200).send("Item is deleted");
  } else {
    res.status(404).send("Item not found");
  }
});

// app.listen(port, function () {
//   console.log("Running on port 3000");
// });

module.exports = app;
