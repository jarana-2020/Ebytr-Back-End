import mongoose, { model as makeModel } from 'mongoose';



const makeTodosDAO = () => {
  const schema = new mongoose.Schema({
    decription: {
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