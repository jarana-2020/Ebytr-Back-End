import { Todo } from '../../Types/todosTypes';
import { todosModel } from '../model/todos.model';

export const todoService = {
  async list(): Promise<Todo[]> {
    const result = await todosModel.list();
    return result;
  }
};