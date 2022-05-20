import { todoDAO } from '../../db';
import { AddTodo, EditTodo, Todo } from '../../Types/todosTypes';

// Créditos para o método de contrução desta api para o professor Leandro da Trybe,
// decidi implementar de acordo com o conteudo que o mesmo abordou em sua aula para fins
// de aprendizagem de métodos e praticas distintas das quais eu estava acostumado.


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
    const result = await todoDAO.findOne({ _id: id });
    return result as Todo;
  },

  async edit(id: Todo['id'], changes: EditTodo): Promise<void> {
    await todoDAO.findOneAndUpdate({_id: id },{...changes, updatedAt: new Date()});
  },

  async delete(id: Todo['id']):Promise<void> {
    await todoDAO.findOneAndDelete({_id: id});
  }
};