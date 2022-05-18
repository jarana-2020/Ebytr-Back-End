import { Todo } from '../../Types/todosTypes';
import { todoService } from '../service/todo.service';

export const todosController = {
  async list(): Promise<Todo[]> {
    const result = await todoService.list();
    return result;
  }
};