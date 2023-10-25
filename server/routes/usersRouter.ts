import express from "express";

import { getAllUsers } from "../controllers/users/getAllUsers";
import { getSingleUser } from "../controllers/users/getSingleUser";
import { deleteUser } from "../controllers/users/deleteUser";
import { createUser } from "../controllers/users/createUser";
import { updateUser } from "../controllers/users/updateUser";

export const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/:userId", getSingleUser);
usersRouter.post("/", createUser)
usersRouter.put("/:userId", updateUser)
usersRouter.delete("/:userId", deleteUser)
