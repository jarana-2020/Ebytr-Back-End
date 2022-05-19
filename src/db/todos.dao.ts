import { model as makeModel, Schema } from 'mongoose';

// Créditos para o método de contrução desta api para o professor Leandro da Trybe,
// decidi implementar de acordo com o conteudo que o mesmo abordou em sua aula para fins
// de aprendizagem de métodos e praticas distintas das quais eu estava acostumado.


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