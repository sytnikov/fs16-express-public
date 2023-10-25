import { Request, Response, NextFunction } from 'express';

import { usersData } from '../../data/usersData';
import { ApiError } from '../../middlewares/errors/ApiError';

export function updateUser(
    req: Request,
    res: Response,
    next: NextFunction
    ) {
    const id = Number(req.params.userId);
    const userIndex = usersData.findIndex((user) => user.id === id);
    
    if (userIndex === -1) {
        next(ApiError.resourceNotFound("User not found"));
        return;
    }
    const { email, name, password }= req.body;
    if (!email && !name && !password) {
        next(ApiError.badRequest("Missing required fields"));
        return;
    }
    if (email) {
        if (!email.includes("@")) {
            next(ApiError.badRequest("Invalid email"));
            return;
        }
        usersData[userIndex].email = email;
    }
    if (name) {
        if (name.length < 2) {
            next(ApiError.badRequest("Name must be at least 2 characters"));
            return;
        }
        if (name.length > 20) {
            next(ApiError.badRequest("Name must be less than 20 characters"));
            return;
        }
        usersData[userIndex].name = name;
    }
    if (password) {
        if (password.length < 6) {
            next(ApiError.badRequest("Password must be at least 6 characters"));
            return;
        }
        usersData[userIndex].password = password;
    }
    res.status(200).json("User updated successfully");

}