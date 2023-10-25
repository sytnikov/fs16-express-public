import { NextFunction, Request, Response } from "express";

import { usersData } from "../../data/usersData";
import { ApiError } from "../../middlewares/errors/ApiError";
import { User } from "../../types/User";

export function createCategory(
    req: Request,
    res: Response,
    next: NextFunction
    ) {
    const newUser: User = req.body;
    const nameExist = usersData.findIndex(
        (cat) => cat.name.toLowerCase() === newUser.name.toLowerCase()
    );
    if (nameExist === -1) {
            // need to add validation
            newUser.id = usersData.length + 1;
            usersData.push(newUser);
            res.status(201).json(newUser);
            return;
    }
    next(ApiError.badRequest("The category with this name already exists"));
}
