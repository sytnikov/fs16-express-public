import express from 'express';

import productsRoute from './routes/products';
import { loggingMiddleware } from './middlewares/logging';
import { apiErrorHandler } from './middlewares/error';
import { categoriesRouter } from './routes/categoriesRouter';
import ordersRouter from './routes/ordersRouter';

const PORT = 8080;
const app = express();
app.use(express.json());

app.use('/products', loggingMiddleware, productsRoute);
app.use('/categories', loggingMiddleware, categoriesRouter);
app.use('/orders', loggingMiddleware, ordersRouter);

app.use(apiErrorHandler);
app.listen(PORT, () => {
  console.log(`👀 Server is running on localhost:${PORT}`);
});
