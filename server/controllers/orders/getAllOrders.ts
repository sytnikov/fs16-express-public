import { Request, Response } from 'express';

import { ordersData } from '../../data/ordersData';
import { getAll } from '../../services/ordersService';

export const getAllOrders = (_: Request, res: Response) => {
  try {
    const ordersList = getAll();
    ordersData ? res.status(200).json(ordersList) : 'No Order found!';
  } catch (error) {
    res.status(404).json(res.json({ error: error }));
  }
};
