import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  try {
    await client.connect();
    const queryString =
      "INSERT INTO todos(user_id,title,description) VALUES ($1,$2,$3)";
    const values = [userId, title, description];
    const todo = await client.query(queryString, values);
    console.log(todo);
  } catch (error) {
    console.log("Erro while inserting data::", error);
  }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  try {
    await client.connect();
    const queryString = "UPDATE todos SET done = True WHERE id = $1 ";
    const val = [todoId];
    const res = await client.query(queryString, val);
    console.log(res);
  } catch (error) {
    console.log("Error updating the table::", error);
  }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  try {
    await client.connect();
    const queryString = "SELECT * from todos WHERE user_id = $1";
    const val = [userId];
    const todos = await client.query(queryString, val);
    console.log("Todos are::", todos.rows);
  } catch (error) {
    console.log("Error getting todos::", error);
  }
}
