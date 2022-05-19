/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

// Créditos para o método de contrução desta api para o professor Leandro da Trybe,
// decidi implementar de acordo com o conteudo que o mesmo abordou em sua aula para fins
// de aprendizagem de métodos e praticas distintas das quais eu estava acostumado.


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