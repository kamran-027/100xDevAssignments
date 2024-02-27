import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
  const todo = await prisma.todo.create({
    data: {
      userId,
      title,
      description,
    },
  });
  console.log("Created Todo is::", todo);

  return todo;
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
  const updatedTodo = await prisma.todo.update({
    where: {
      id: todoId,
    },
    data: {
      done: true,
    },
  });
  return updatedTodo;
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
  const todos = await prisma.todo.findMany({
    where: {
      userId,
    },
    select: {
      title: true,
      description: true,
      done: true,
      id: true,
    },
  });
  console.log("Todos are::", todos);
}

// createTodo(2, "Cut the grass", "Cut the grass man");
// createTodo(1, "Shoot the ball", "Take a shot man");
// createTodo(3, "Look Up", "Look up for the players man");

// updateTodo(2);

getTodos(2);
