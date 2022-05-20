import Joi from 'joi';
import { AddTodo, indexable } from '../../../Types/todosTypes';
import { runSchema } from './validators';


export const todosValidator = {
  async bodyAdd(value: unknown):Promise<AddTodo> {
    const schema = Joi.object<AddTodo>({
      description: Joi.string().required(),
      status: Joi.string().default('pendente')
    });

    const result = await runSchema(schema, value);
    return result;
  },
  async bodyEdit(value: unknown):Promise<AddTodo> {
    const schema = Joi.object<AddTodo>({
      description: Joi.string().min(4),
      status: Joi.string().valid('pendente','em andamento','pronto')
    });

    const result = await runSchema(schema, value);
    return result;
  },
  
  async paramsId(value: unknown):Promise<indexable> {
    const schema = Joi.object<indexable>({
      id: Joi.string().length(24).required(),
    });

    const result = await runSchema(schema, value);
    return result;
  },
  

};