import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

import { ApiError } from './errors/ApiError';
import { userSchema } from '../schemas/userSchema';

export async function validateUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        await userSchema.parseAsync({
            
        });
    } catch (error) {
        
    }
}
