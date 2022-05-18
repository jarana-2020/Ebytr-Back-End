import api from './api';
import utils from './utils';

api.listen(utils.api.port, () => {
  console.log(`Listening on Port ${utils.api.port}`);
  
});