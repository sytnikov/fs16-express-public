import { Request, Response } from 'express';

import { removeOne } from '../../services/ordersService';

export const deleteOrder = (req: Request, res: Response) => {
  try {
    const orderId = parseInt(req.params.id);
    const deleteOrder = removeOne(orderId);

    if (orderId === -1) {
      res.status(404).json(res.json({ error: 'Order not found' }));
      return;
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json(res.json({ error: error }));
  }
};
