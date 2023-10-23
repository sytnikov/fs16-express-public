import express from "express";

import { loggingMiddleware } from "./middlewares/logging";
import { errorloggingMiddleware } from "./middlewares/errorLogging";
import { categoriesRouter } from "./routes/categoriesRouter";

const PORT = 8009;
const app = express();

app.get("/hello", loggingMiddleware, (req, res) => {
  res.json({ msg: "This server is created with Express.js" });
});

app.use("/categories", categoriesRouter);
app.use(errorloggingMiddleware);
app.listen(PORT, () => {
  console.log(`👀 Server is running on localhost:${PORT}`);
});
