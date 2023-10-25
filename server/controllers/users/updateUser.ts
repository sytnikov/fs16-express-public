import { Request, Response, NextFunction } from 'express';

import { usersData } from '../../data/usersData';
import { ApiError } from '../../middlewares/errors/ApiError';

export function updateUser(
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
    const updatedUser = req.body;
    usersData[userIndex] = updatedUser;
    res.status(200).json(updatedUser);
}