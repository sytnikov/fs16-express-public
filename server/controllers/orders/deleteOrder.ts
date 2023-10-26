import { Request, Response } from 'express';

import { ordersData } from '../../data/ordersData';

export const deleteOrder = (req: Request, res: Response) => {
  try {
    const orderId = parseInt(req.params.id);
    const existingOrder = ordersData.findIndex((order) => order.id === orderId);

    if (existingOrder) {
      ordersData.splice(existingOrder, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    res.status(404).json(res.json({ error: error }));
  }
};
