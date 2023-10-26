import express from 'express';

import productsRouter from "./routes/productsRouter";
import categoriesRouter from "./routes/categoriesRouter";
import { loggingMiddleware } from "./middlewares/logging";
import { apiErrorHandler } from "./middlewares/apiErrorHandler";
import { routeNotFound } from "./middlewares/routeNotFound";
import { usersRouter } from "./routes/usersRouter";
import ordersRouter from './routes/ordersRouter';

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", loggingMiddleware, productsRouter);
app.use("/categories", loggingMiddleware, categoriesRouter);
app.use('/orders', loggingMiddleware, ordersRouter);

app.use(apiErrorHandler);
app.use(routeNotFound);

app.listen(PORT, () => {
  console.log(`👀 Server is running on localhost:${PORT}`);
});
