import { Request, Response } from 'express';
import { ordersData } from '../../data/ordersData';

export const getSingleOrder = (req: Request, res: Response) => {
  try {
    const orderId = parseInt(req.params.id);
    const singleOrder = ordersData.find((order) => order.id === orderId);

    singleOrder ? res.status(200).json(singleOrder) : 'No order exist!';
  } catch (error) {
    res.status(404).json({ error: error });
  }
};
