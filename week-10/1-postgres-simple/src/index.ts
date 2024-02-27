import { Client } from "pg";
import { DB_URL } from "./config";
import { createTables } from "./db/setup";
import { createUser, getUser } from "./db/user";
import { createTodo, getTodos, updateTodo } from "./db/todo";

export const client = new Client({
  connectionString: DB_URL,
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

getTodos(2);
