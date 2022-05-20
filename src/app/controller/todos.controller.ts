import { Todo } from '../../Types/todosTypes';
import { todoService } from '../service/todos.service';
import { todosValidator } from './validators/todos.validator';

// Créditos para o método de contrução desta api para o professor Leandro da Trybe,
// decidi implementar de acordo com o conteudo que o mesmo abordou em sua aula para fins
// de aprendizagem de métodos e praticas distintas das quais eu estava acostumado.


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
  },

  async edit(params: unknown, body: unknown):Promise<Todo> {
    const [{ id }, changes] = await Promise.all([
      todosValidator.paramsId(params),
      todosValidator.bodyEdit(body)
    ]);
    await todoService.edit(id, changes);
    const result = await todoService.get(id);
    return result;
  },

  async delete(params: unknown):Promise<void> {
    const { id } = await todosValidator.paramsId(params);
    await todoService.delete(id);
  }
};