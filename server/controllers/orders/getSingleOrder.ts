import { Request, Response } from 'express';
import { getSingle } from '../../services/ordersService';

export const getSingleOrder = (req: Request, res: Response) => {
  try {
    const orderId = parseInt(req.params.id);
    const order = getSingle(orderId);

    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ error: 'Order Not Found!' });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
