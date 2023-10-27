import { Request, Response, NextFunction } from "express";

import { ApiError } from "../../middlewares/errors/ApiError";
import usersService from "../../services/usersService";

export function getSingleUser(
    req: Request,
    res: Response,
    next: NextFunction
    ) {
        const id = Number(req.params.userId);
        const user = usersService.getSingleUser(id);
        if (user) {
            res.status(200).json(user);
            return;
        }
    next(ApiError.resourceNotFound("User not found"));
}