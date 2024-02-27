import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
  const newUser = await prisma.user.create({
    data: {
      username,
      password,
      name,
    },
    select: {
      username: true,
      password: true,
      name: true,
    },
  });
  return newUser;
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
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      username: true,
      password: true,
      name: true,
    },
  });
  console.log("User Details are::", user);

  return user;
}

// createUser("kamrank@chiklu.com", "PassPass", "Kamran");
// createUser("bunkayos@chiklu.com", "LittleChilli", "Bunkayo");
// createUser("gabigol@chiklu.com", "Dribbler", "Marteenalli");

getUser(2);
