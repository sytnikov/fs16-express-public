import { Request, Response } from 'express';
import { ordersData } from '../../data/ordersData';
import { productsData } from '../../data/productsData';

export const addOrder = (req: Request, res: Response) => {
  try {
    const id = req.body.products[0].productId;
    const quantity = req.body.products[0].quantity;

    const newOrder = {
      id: ordersData.length + 1,
      products: [
        {
          productId: id,
          quantity: quantity,
        },
      ],
    };
    const existingOrder = ordersData.find((order) => order.id === newOrder.id);

    if (existingOrder) {
      res.status(409).json({ error: 'Order with the same ID already exists' });
    } else {
      ordersData.push(newOrder);
      res.status(201).json(newOrder);
    }
  } catch (error) {
    res.status(404).json({ error: error });
  }
};
