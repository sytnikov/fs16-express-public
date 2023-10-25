import { Request, Response, NextFunction } from 'express';

import { usersData } from '../../data/usersData';
import { ApiError } from '../../middlewares/errors/ApiError';

export function getAllUsers(
    req: Request,
    res: Response,
    next: NextFunction
    ) {
        if (usersData) {
            res.status(200).json(usersData);
            return;
        } else {
            next(ApiError.resourceNotFound("Users data not found"));
        }
}