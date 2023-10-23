import { ErrorRequestHandler } from "express";

export const errorLoggingMiddleware: ErrorRequestHandler = (
  error,
  req,
  res,
  next
) => {
  console.log("👀 ERROR: ", error.message);
  res.status(500).json({ error: "An error occurred" });
};
