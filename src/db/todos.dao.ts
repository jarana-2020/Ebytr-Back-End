import { model as makeModel, Schema } from 'mongoose';



const makeTodosDAO = () => {
  const schema = new Schema({
    description: {
      type:String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    updateAt: {
      type: Date,
    }
  },
  {
    id: true,
    versionKey: false,
  });
  const model = makeModel('todos',schema,'todos');
  return model;
};

export default makeTodosDAO;