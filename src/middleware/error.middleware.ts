/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

export const errorHandlerMiddleware = (
  err: Error, 
  _req:Request, 
  res: Response, 
  _next: NextFunction): void  => {
  const { name, message } = err;
  switch(name) {
  case 'ValidationError':
    res.status(400).json({ message});
    break;
  case 'NotFoundError':
    res.status(400).json({ message });
    break;
  default:
    res.status(500);
  }
};