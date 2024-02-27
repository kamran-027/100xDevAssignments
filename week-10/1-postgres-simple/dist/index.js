"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var pg_1 = require("pg");
var config_1 = require("./config");
var todo_1 = require("./db/todo");
exports.client = new pg_1.Client({
    connectionString: config_1.DB_URL,
});
// createTables();
// createUser("kamrank@wiplu.com", "PassXYZ", "KamKam");
// createUser("declanr@wiplu.com", "RiceRic", "KamKam");
// createUser("kaih@wiplu.com", "KaiHamas", "KingKai");
// getUser(2);
// createTodo(2, "Get off", "Get off the ball");
// createTodo(2, "Get off MAan", "Get off the ball");
// createTodo(3, "Get off", "Get off the ball");
// updateTodo(2);
(0, todo_1.getTodos)(2);
