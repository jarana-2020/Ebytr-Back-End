import api from './api';
import { dbConnect } from './db';
import utils from './utils';

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

