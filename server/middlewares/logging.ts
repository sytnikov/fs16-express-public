import { Request, Response, NextFunction } from "express";

export function loggingMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.path) {
    console.log("👀 [INFO]: ", req.method, req.path);
    next();
  }
}
