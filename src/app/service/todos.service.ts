import { AddTodo, EditTodo, Todo } from '../../Types/todosTypes';
import { throwNotFoundError } from '../errors/error.notFound';
import { todosModel } from '../model/todos.model';

// Créditos para o método de contrução desta api para o professor Leandro da Trybe,
// decidi implementar de acordo com o conteudo que o mesmo abordou em sua aula para fins
// de aprendizagem de métodos e praticas distintas das quais eu estava acostumado.


export const todoService = {
  async list(): Promise<Todo[]> {
    const result = await todosModel.list();
    return result;
  },

  async add(data: AddTodo): Promise<Todo['id']> {
    const id = await todosModel.add(data);
    return id;
  },

  async get(id: Todo['id']):Promise<Todo> {
    const todo = await todosModel.get(id);
    if(!todo) throwNotFoundError('todo not found');
    return todo;
  },

  async edit(id: Todo['id'], changes: EditTodo):Promise<void> {
    const exists = await todosModel.get(id);
    if(!exists) throwNotFoundError('todo not found');
    await todosModel.edit(id, changes);
  },

  async delete(id: Todo['id']): Promise<void> {
    const exists = await todosModel.get(id);
    if(!exists) throwNotFoundError('todo not found');
    await todosModel.delete(id);
  }
};