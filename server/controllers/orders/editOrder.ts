import { Request, Response } from 'express';
import { ordersData } from '../../data/ordersData';

export const editOrder = (req: Request, res: Response) => {
  try {
    const orderId = parseInt(req.params.id);
    const updatedOrderData = {
      id: orderId,
      products: [
        {
          productId: req.body.products[0].productId,
          quantity: req.body.products[0].quantity,
        },
      ],
    };
    const foundOrder = ordersData.findIndex((order) => order.id === orderId);
    if (foundOrder<0) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      ordersData[foundOrder] = {
        ...ordersData[foundOrder],
        ...updatedOrderData,
      };
      res.status(200).json({ data: "success" });
    }
  } catch (error) {
    res.status(404).json({ error: error });
  }
};
