import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err);

  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
};

export default errorHandler;
// This middleware handles errors in the Express application.
// It logs the error to the console and sends a JSON response with the error message and status
// code. If no status is provided, it defaults to 500 (Internal Server Error).
// Usage: Import this middleware and use it in your Express app after all routes and other middle
// wares have been defined, typically at the end of your main server file.
