import { Request, Response } from 'express';
import { ordersData } from '../../data/ordersData';

export const getSingleOrder = (req: Request, res: Response) => {
  try {
    const orderId = parseInt(req.params.id);
    const singleOrder = ordersData.find((order) => order.id === orderId);

    if (singleOrder) {
      res.status(200).json(singleOrder);
    } else {
      res.status(404).json({ error: 'Order Not Found!' });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
