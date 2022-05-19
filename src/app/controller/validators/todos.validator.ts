import Joi from 'joi';
import { AddTodo } from '../../../Types/todosTypes';


export const todosValidator = {
  async bodyAdd(value: unknown):Promise<AddTodo> {
    const schema = Joi.object<AddTodo>({
      description: Joi.string().required(),
      status: Joi.string().default('pendente')
    });

    const result = await schema.validateAsync(value);
    return result;
  }
};