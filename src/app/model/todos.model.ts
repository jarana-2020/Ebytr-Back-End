import { todoDAO } from '../../db';
import { Todo } from '../../Types/todosTypes';

export const todosModel = {
  async list(): Promise<Todo[]> {
    const result = await todoDAO.find();
    return result;
  }
};