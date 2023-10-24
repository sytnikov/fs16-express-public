import express from "express";

import productsRoute from "./routes/products";
import { loggingMiddleware } from "./middlewares/logging";
import { apiErrorHandler } from "./middlewares/error";

const PORT = 8080;
const app = express();
app.use(express.json());

app.use("/products", loggingMiddleware, productsRoute);

app.use(apiErrorHandler);
app.listen(PORT, () => {
  console.log(`👀 app is running at localhost:${PORT}`);
});
