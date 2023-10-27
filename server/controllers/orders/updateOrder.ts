import { NextFunction, Request, Response } from 'express';

import { updateOne } from '../../services/ordersService';
import { ApiError } from '../../middlewares/errors/ApiError';

export const editOrder = (req: Request, res: Response, next: NextFunction) => {
  const orderId = parseInt(req.params.id);
  const updatedOrder = req.body;

  const order = updateOne(orderId, updatedOrder);

  if (!order) {
    next(ApiError.resourceNotFound('Order not found'));
    return;
  }
  res.status(200).json(order);
};
