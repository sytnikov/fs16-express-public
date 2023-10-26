import { Request, Response } from 'express';

import { ordersData } from '../../data/ordersData';

export const getAllOrders = (_: Request, res: Response) => {
  try {
    ordersData ? res.status(200).json(ordersData) : 'No Order found!';
  } catch (error) {
    res.status(404).json(res.json({ error: error }));
  }
};
