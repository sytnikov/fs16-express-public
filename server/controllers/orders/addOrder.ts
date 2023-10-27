import { Request, Response, NextFunction } from 'express';

import { createOne } from '../../services/ordersService';
import { ApiError } from '../../middlewares/errors/ApiError';

export const addOrder = (req: Request, res: Response, next: NextFunction) => {
  const newOrder = req.body;
  const order = createOne(newOrder);

  if (!order) {
    next(ApiError.resourceNotFound('Order not found'));
    return;
  }

  res.status(201).json(order);
};
