import express from 'express';
import todosRoute from './Routes/todos.routes';
import 'express-async-errors';
import { errorHandlerMiddleware } from '../middleware/error.middleware';
import cors from 'cors';

const api = express();

api.use(express.json());
api.use(cors());


api.use('/todos', todosRoute);
api.get('/', (_req, res) => res.send());

api.use(errorHandlerMiddleware);

export default api;