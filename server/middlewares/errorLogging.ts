import { Request, Response, NextFunction } from "express";

export function errorloggingMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("👀 Error happened");
  res.json({ msg: "Error happened" });
}
