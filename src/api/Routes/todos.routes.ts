import { Router } from 'express';
import { todosController } from '../../app/controller/todos.controller';

// Créditos para o método de contrução desta api para o professor Leandro da Trybe,
// decidi implementar de acordo com o conteudo que o mesmo abordou em sua aula para fins
// de aprendizagem de métodos e praticas distintas das quais eu estava acostumado.

const todosRoute = Router();

todosRoute.put('/:id', async (req, res) => {
  const result = await todosController.edit(req.params, req.body);
  res.status(200).send(result);
});

todosRoute.delete('/:id', async (req, res) => {
  await todosController.delete(req.params);
  res.status(200).send({ message: 'Removed with success'});
});

todosRoute.get('/', async (_req, res) => {
  const result = await todosController.list();
  res.status(200).json(result);
});

todosRoute.post('/', async (req, res) => {
  const result = await todosController.add(req.body);
  res.status(201).json(result);
});

export default todosRoute;