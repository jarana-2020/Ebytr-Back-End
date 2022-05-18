import mongoose, { connect } from 'mongoose';
import utils from '../utils';
import makeTodosDAO from './todos.dao';

export const todoDAO = makeTodosDAO();

export const dbConnect = {
  async authenticate(): Promise<void> {
    await connect(utils.db.uri);
  }
};