import { Request, Response } from 'express';

import { updateOne } from '../../services/ordersService';

export const editOrder = (req: Request, res: Response) => {
  try {
    // const id = req.body.products[0].productId;
    // const quantity = req.body.products[0].quantity;
    const orderId = parseInt(req.params.id);
    const updatedOrder = req.body;

    const order = updateOne(orderId, updatedOrder);

    if (!order) {
      res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
