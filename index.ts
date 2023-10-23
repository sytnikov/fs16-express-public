import express from "express"

import productsRoute from "./routes/products";
import categoriesRoute from "./routes/categories";
import usersRoute from "./routes/users";
import { loggingMiddleware } from "./middlewares/logging"
import { errorLoggingMiddleware } from "./middlewares/error"

const PORT = 8080
const app = express()
app.use(express.json());

app.get("/hello", loggingMiddleware, (req, res) => {
  res.json({ msg: "hello, from Express.js!" })
})

app.use("/products", productsRoute);
app.use("/categories", categoriesRoute);
app.use("/users", usersRoute);

app.use(errorLoggingMiddleware)
app.listen(PORT, () => {
  console.log(`👀 app is running at localhost:${PORT}`)
})
