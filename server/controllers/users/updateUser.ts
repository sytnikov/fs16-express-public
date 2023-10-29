import { Request, Response, NextFunction } from 'express';

import { ApiError } from '../../middlewares/errors/ApiError';
import usersService from '../../services/usersService';

export function updateUser(
    req: Request,
    res: Response,
    next: NextFunction
    ) {
        const id = Number(req.params.userId);
        const userData = req.body;
        const user = usersService.getSingleUser(id);
        if (user) {
            usersService.updateUser(id, userData);
            res.status(200).json(userData);
            return;
        }
        next(ApiError.resourceNotFound("User can't be updated"));
}