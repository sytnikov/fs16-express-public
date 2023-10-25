import { Request, Response, NextFunction } from "express";

import { usersData } from "../../data/usersData";
import { ApiError } from "../../middlewares/errors/ApiError";

export function getSingleUser(
    req: Request,
    res: Response,
    next: NextFunction
    ) {
    const { id } = req.params;
    const user = usersData.find((user) => user.id === Number(id));
    if (user) {
        res.status(200).json(user);
        return;
    }
    next(ApiError.resourceNotFound("User not found"));
}