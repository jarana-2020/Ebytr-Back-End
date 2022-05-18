/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

export const errorHandlerMiddleware = (
  err: Error, 
  _req:Request, 
  res: Response, 
  _next: NextFunction): void  => {
  const { name } = err;
  switch(name) {
  default:
    res.status(500);
  }
};