import { Todo } from '../../Types/todosTypes';
import { todoService } from '../service/todos.service';
import { todosValidator } from './validators/todos.validator';

export const todosController = {
  async list(): Promise<Todo[]> {
    const result = await todoService.list();
    return result;
  },

  async add(body: unknown): Promise<Todo> {
    const data = await todosValidator.bodyAdd(body);
    const id = await todoService.add(data);
    const result = await todoService.get(id);
    return result;
  }
};