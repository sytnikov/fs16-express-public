import { Router } from 'express';
import { getAllOrders } from '../controllers/orders/getAllOrders';
import { getSingleOrder } from '../controllers/orders/getSingleOrder';
import { deleteOrder } from '../controllers/orders/deleteOrder';
import { addOrder } from '../controllers/orders/addOrder';
import { editOrder } from '../controllers/orders/updateOrder';

const ordersRouter = Router();

ordersRouter.get('/', getAllOrders);
ordersRouter.get('/:id', getSingleOrder);
ordersRouter.post('/', addOrder);
ordersRouter.patch('/:id', editOrder);
ordersRouter.delete('/:id', deleteOrder);

export default ordersRouter;
