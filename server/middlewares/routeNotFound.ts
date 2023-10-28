import { NextFunction, Request, Response } from "express";
import { monitorRequest } from "./logging";

export function routeNotFound(req: Request, res: Response, next: NextFunction) {
  res.status(404).json({ msg: "Route not found" });
  monitorRequest(req, res, next, true);
}
