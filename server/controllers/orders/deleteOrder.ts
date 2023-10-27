import { NextFunction, Request, Response } from 'express';

import { removeOne } from '../../services/ordersService';
import { ApiError } from '../../middlewares/errors/ApiError';

export const deleteOrder = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const orderId = parseInt(req.params.id);
  const deleteOrder = removeOne(orderId);

  if (deleteOrder === -1) {
    next(ApiError.resourceNotFound('Order is not found'));
    return;
  }
  res.status(200).json({ message: 'Order deleted successfully' });
};
