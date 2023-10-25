import { Request, Response } from 'express';
import { ordersData } from '../../data/ordersData';

export const editOrder = (req: Request, res: Response) => {
  try {
    const orderId = parseInt(req.params.id);
    const updatedOrderData = req.body;
    const foundOrder = ordersData.findIndex((order) => order.id === orderId);
    if (!foundOrder) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      ordersData[foundOrder] = {
        ...ordersData[foundOrder],
        ...updatedOrderData,
      };
    }
  } catch (error) {
    res.status(404).json({ error: error });
  }
};
