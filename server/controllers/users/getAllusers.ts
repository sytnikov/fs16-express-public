import { Request, Response, NextFunction } from 'express';

import { ApiError } from '../../middlewares/errors/ApiError';
import usersService from '../../services/usersService';

export function getAllUsers(
    req: Request,
    res: Response,
    next: NextFunction
    ) {
        const users = usersService.getAllUsers();
        if (users.length > 0) {
            res.status(200).json(users);
            return;
        }
        next(ApiError.resourceNotFound("Users can't be fetched"));
}