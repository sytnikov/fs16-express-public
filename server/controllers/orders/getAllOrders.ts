import { NextFunction, Request, Response } from 'express';

import { ordersData } from '../../data/ordersData';
import { getAll } from '../../services/ordersService';
import { ApiError } from '../../middlewares/errors/ApiError';

export const getAllOrders = (_: Request, res: Response, next: NextFunction) => {
  const ordersList = getAll();

  res.status(200).json(ordersList);

  next(ApiError.resourceNotFound('Order not found'));
};
