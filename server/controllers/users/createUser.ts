import { NextFunction, Request, Response } from "express";

import usersService from "../../services/usersService";
import { ApiError } from "../../middlewares/errors/ApiError";

export function createUser(
    req: Request,
    res: Response,
    next: NextFunction
    ) {
        const newUserData = req.body;
        const user = usersService.getSingleUser(newUserData.id);
        if (user) {
            next(ApiError.badRequest("The user with this id already exists"));
        }
        usersService.createUser(newUserData);
        res.status(201).json({ message: "User created" });
}