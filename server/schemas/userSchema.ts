import { z } from 'zod';

export const userSchema = z.object({
<<<<<<< HEAD
    id: z.number({
        required_error: "Id is required",
        invalid_type_error: "Id must be a number",
    }),
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    })
    .min(3, { message:
        "Must be at least 3 characters long"
    })
    .max(20, { 
        message: "Must be at most 20 characters long"
    }).regex(/^[a-zA-Z]+$/),
    email: z.string({
        required_error: "Email is required",
    }).email(),
    password: z.string({
        required_error: "Password is required",
    }).min(6, { 
        message: "Must be at least 6 characters long"
    })
    .max(20, {
        message: "Must be at most 20 characters long"
    }),
    role: z.enum(['admin', 'user']),
});

export const requestSchema = z.object({
    body: userSchema
=======
    body: z.object({
        id: z.number({
            required_error: "Id is required",
            invalid_type_error: "Id must be a number",
        }),
        name: z.string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        })
        .min(3, { message:
            "Must be at least 3 characters long"
        })
        .max(20, { 
            message: "Must be at most 20 characters long"
        }).regex(/^[a-zA-Z]+$/),
        email: z.string({
            required_error: "Email is required",
        }).email(),
        password: z.string({
            required_error: "Password is required",
        }).min(6, { 
            message: "Must be at least 6 characters long"
        })
        .max(20, {
            message: "Must be at most 20 characters long"
        }),
        role: z.enum(['admin', 'user']),
    }),
>>>>>>> refs/remotes/origin/main
});