import express from "express";

import productsRouter from "./routes/productsRouter";
import { loggingMiddleware } from "./middlewares/logging";
import { apiErrorHandler } from "./middlewares/apiErrorHandler";
import { categoriesRouter } from "./routes/categoriesRouter";
import { usersRouter } from "./routes/usersRouter";

const PORT = 8080;
const app = express();
app.use(express.json());

app.use("/products", loggingMiddleware, productsRouter);
app.use("/categories", loggingMiddleware, categoriesRouter);
app.use("/users", loggingMiddleware, usersRouter);

app.use(apiErrorHandler);
app.listen(PORT, () => {
  console.log(`👀 Server is running on localhost:${PORT}`);
});
