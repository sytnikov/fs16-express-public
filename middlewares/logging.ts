import type { RequestHandler } from "express";

export const loggingMiddleware: RequestHandler = (req, _, next) => {
  console.log("👀 [INFO]: ", req.method, req.path);
  next();
};
