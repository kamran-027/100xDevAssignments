const express = require("express");

const app = express();
const fs = require("fs");
const path = require("path");
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const filePath = path.join(__dirname, "./todos.json");

app.get("/todos", function (req, res) {
  fs.readFile(filePath, "utf-8", function (err, data) {
    if (err) {
      res.status(501).send("No Todos Founds");
    } else {
      res.send(JSON.parse(data));
    }
  });
});

app.get("/todos/:id", function (req, res) {
  fs.readFile(filePath, "utf-8", function (err, data) {
    if (err) {
      res.status(501).send("Todos not found");
    } else {
      todos = JSON.parse(data);
      todo = todos.find((t) => t.id == req.params.id);
      todo
        ? res.status(200).send(todo)
        : res.status(404).send("Todo not found");
    }
  });
});

app.post("/todos", function (req, res) {
  fs.readFile(filePath, "utf-8", function (err, data) {
    if (err) {
      res.status(501).send("Todos not found");
    } else {
      let todos = JSON.parse(data);
      let obj = {
        id: todos.length + 1,
        title: req.body.title,
        description: req.body.description,
        completed: false,
      };
      todos.push(obj);
      fs.writeFile(filePath, JSON.stringify(todos, null, 2), function (err) {
        if (err) {
          res.status(500).send("Server Error");
        } else {
          res.status(201);
          res.json({ id: obj.id });
        }
      });
    }
  });
});

app.put("/todos/:id", function (req, res) {
  fs.readFile(filePath, "utf-8", function (err, data) {
    if (err) {
      res.status(501).send("Todos not found");
    } else {
      todos = JSON.parse(data);
      let todoIndex = todos.findIndex((todo) => todo.id == req.params.id);
      if (todoIndex !== -1) {
        todos[todoIndex].title = req.body.title;
        todos[todoIndex].description = req.body.description;
        todos[todoIndex].completed = true;
        fs.writeFile(filePath, JSON.stringify(todos, null, 2), function (err) {
          if (err) {
            res.status(501).send("Todo not found");
          } else {
            res.status(200).send("Item updated");
          }
        });
      } else {
        res.status(404).send("Todo not found");
      }
    }
  });
});

app.delete("/todos/:id", function (req, res) {
  fs.readFile(filePath, "utf-8", function (err, data) {
    if (err) {
      res.status(501).send("Todos not found");
    } else {
      todos = JSON.parse(data);
      todos = todos.filter((t) => t.id != req.params.id);
      fs.writeFile(filePath, JSON.stringify(todos, null, 2), function (err) {
        if (!err) {
          res.status(200).send("Item is deleted");
        } else {
          res.status(404).send("Item not found");
        }
      });
    }
  });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
