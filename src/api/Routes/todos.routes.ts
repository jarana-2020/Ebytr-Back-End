import { Router } from 'express';
import { todosController } from '../../app/controller/todos.controller';


const todosRoute = Router();

todosRoute.put('/:id', async (req, res) => {
  res.send(req);
});

todosRoute.delete('/:id', async (req, res) => {
  res.send(req);
});

todosRoute.get('/', async (_req, res) => {
  const result = await todosController.list();
  res.json(result);
});

todosRoute.post('/', async (req, res) => {
  res.send(req);
});

export default todosRoute;