"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
function createUser(username, password, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = yield prisma.user.create({
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
    });
}
exports.createUser = createUser;
/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
function getUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findFirst({
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
    });
}
exports.getUser = getUser;
// createUser("kamrank@chiklu.com", "PassPass", "Kamran");
// createUser("bunkayos@chiklu.com", "LittleChilli", "Bunkayo");
// createUser("gabigol@chiklu.com", "Dribbler", "Marteenalli");
getUser(2);
