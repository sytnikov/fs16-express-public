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
        if (!user) {
            newUserData.id = usersService.getAllUsers().length + 1;
            const newUser = usersService.createUser(newUserData);
            res.status(201).json(newUser);
            return;
        }
        next(ApiError.badRequest("The user with this id already exists"));
}