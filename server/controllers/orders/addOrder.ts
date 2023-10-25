import { Request, Response } from 'express';
import { ordersData } from '../../data/ordersData';

export const addOrder = (req: Request, res: Response) => {
  try {
    const newOrder = req.body;
    const existingOrder = ordersData.find((order) => order.id === newOrder.id);

    if (existingOrder) {
      res.status(409).json({ error: 'Order with the same ID already exists' });
    } else {
      newOrder.id = ordersData.length + 1;
      ordersData.push(newOrder);
      res.status(201).json(newOrder);
    }
  } catch (error) {
    res.status(404).json({ error: error });
  }
};
