import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  try {
    await client.connect();
    const queryString = `INSERT INTO users(username,password,name) VALUES ($1,$2,$3)`;
    const insertValues = [username, password, name];
    await client.query(queryString, insertValues);
    console.log("User Successfully Added");
  } catch (error) {
    console.error("Error during Insertion::", error);
  } finally {
    await client.end();
  }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  try {
    await client.connect();
    const queryString = `SELECT * FROM users WHERE id = $1`;
    const insertValues = [userId];
    const res = await client.query(queryString, insertValues);
    console.log("User is::", res.rows[0]);
  } catch (error) {
    console.error("Error during Insertion::", error);
  } finally {
    await client.end();
  }
}
