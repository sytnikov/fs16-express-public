import { NextFunction, Request, Response } from "express";

import { usersData } from "../../data/usersData";
import { ApiError } from "../../middlewares/errors/ApiError";

export function deleteUser(
    req: Request,
    res: Response,
    next: NextFunction
    ) {
    const { id } = req.params;
    const userIndex = usersData.findIndex((user) => user.id === Number(id));
    if (userIndex === -1) {
        next(ApiError.resourceNotFound("User not found"));
        return;
    }
    usersData.splice(userIndex, 1);
    res.status(204).send();
}