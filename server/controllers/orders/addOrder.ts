import { Request, Response } from 'express';

import { createOne } from '../../services/ordersService';

export const addOrder = (req: Request, res: Response) => {
  try {
    const newOrder = req.body;
    const order = createOne(newOrder);

    res.status(201).json(order);
  } catch (error) {
    res.status(404).json({ error: error });
  }
};
