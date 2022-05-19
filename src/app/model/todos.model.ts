import { todoDAO } from '../../db';
import { AddTodo, Todo } from '../../Types/todosTypes';

export const todosModel = {
  async list(): Promise<Todo[]> {
    const result = await todoDAO.find();
    return result;
  },

  async add(data: AddTodo): Promise<Todo['id']> {
    const result = await todoDAO.create({
      ...data,
      createdAt: new Date(),
    });
    return result.id;
  },

  async get(id: Todo['id']):Promise<Todo> {
    const result = await todoDAO.findOne({id});
    return result as Todo;
  }
};