import { NextFunction, Request, Response } from "express";

import { usersData } from "../../data/usersData";
import { ApiError } from "../../middlewares/errors/ApiError";
import { User } from "../../types/User";

export function createUser(
    req: Request,
    res: Response,
    next: NextFunction
    ) {
    const { name, email, password, role } = req.body;
    const newUser: User = {
        id: usersData.length + 1,
        name: name,
        email: email,
        password: password,
        role: role,
    };

    if (!name || !email || !password || !role) {
        next(ApiError.badRequest("Missing required fields"));
        return;
    }

    if (password.length < 6) {
        next(ApiError.badRequest("Password must be at least 6 characters"));
        return;
    }

    if (!email.includes("@")) {
        next(ApiError.badRequest("Invalid email"));
        return;
    }

    if (role !== "admin" && role !== "user") {
        next(ApiError.badRequest("Invalid role"));
        return;
    }

    if (name.length < 2) {
        next(ApiError.badRequest("Name must be at least 2 characters"));
        return;
    }

    if (name.length > 20) {
        next(ApiError.badRequest("Name must be less than 20 characters"));
        return;
    }

    const emailExists = usersData.findIndex((user) => user.email === email);
    const idExists = usersData.find((user) => user.id === newUser.id);

    if (idExists) {
        next(ApiError.badRequest("The user with this id already exists"));
        return;
    }
    
    if (emailExists === -1) {
        usersData.push(newUser);
        res.status(201).json(newUser);
        return;
    }
    next(ApiError.badRequest("The user with this email already exists"));
}