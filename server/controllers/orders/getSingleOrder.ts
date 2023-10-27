import { NextFunction, Request, Response } from 'express';

import { getSingle } from '../../services/ordersService';
import { ApiError } from '../../middlewares/errors/ApiError';

export const getSingleOrder = (req: Request, res: Response, next: NextFunction) => {
  const orderId = parseInt(req.params.id);
  const order = getSingle(orderId);

  if (!order) {
    next(ApiError.resourceNotFound('Order not found'));
    return;
  }
  res.status(200).json(order);
};
