import api from './api';
import { dbConnect } from './db';
import utils from './utils';

// Créditos para o método de contrução desta api para o professor Leandro da Trybe,
// decidi implementar de acordo com o conteudo que o mesmo abordou em sua aula para fins
// de aprendizagem de métodos e praticas distintas das quais eu estava acostumado.


dbConnect.authenticate()
  .then(() => {
    api.listen(utils.api.port, () => {
      console.log(`Listening on Port ${utils.api.port}`);
      
    });
  })
  .catch((error: Error) => {
    console.log(error);
    process.exit(1);
  });

