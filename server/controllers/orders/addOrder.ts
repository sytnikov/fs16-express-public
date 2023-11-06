import { Request, Response, NextFunction } from 'express';

import { ApiError } from '../../middlewares/errors/ApiError';
import ordersService from '../../services/ordersService';

export const addOrder = (req: Request, res: Response, next: NextFunction) => {
  const newOrder = req.body;
  const order = ordersService.createOrder(newOrder);

  if (!order) {
    next(ApiError.badRequest('Order not found'));
    return 
  }
  res.status(201).json(order);
  
};
