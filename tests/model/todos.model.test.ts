import {expect, use} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import { todosModel } from '../../src/app/model/todos.model';
import { todoDAO } from '../../src/db';
import { AddTodo } from '../../src/Types/todosTypes';

use(chaiAsPromised);

describe('Test Model todos.model', () => {
  describe('method list', () => {

    afterEach(() => {
      sinon.restore();
    });

    it('should throw', () => {
      sinon.stub(todoDAO, 'find').rejects();
      expect(todosModel.list()).to.eventually.to.be.rejected;
    });

    it('should return a list of objects', () => {
      sinon.stub(todoDAO, 'find').resolves([]);
      expect(todosModel.list()).to.eventually.to.deep.equal([]);
    });
  });

  describe('method add', () => {

    afterEach(() => {
      sinon.restore();
    });

    it('should throw', () => {
      sinon.stub(todoDAO, 'create').rejects();
      expect(todosModel.add({} as any)).to.eventually.to.be.rejected;
    });

    it('should return a inserted id', () => {
      const mock: AddTodo = {description: 'teste', status: 'pendente'};
      sinon.stub(todoDAO, 'create').resolves({id: '1'});
      expect(todosModel.add(mock)).to.eventually.to.equal('1');
    });
  });

  describe('method get', () => {

    afterEach(() => {
      sinon.restore();
    });

    it('should throw', () => {
      sinon.stub(todoDAO, 'findOne').rejects();
      expect(todosModel.get('1')).to.eventually.to.be.rejected;
    });

    it('should return a object', () => {
      sinon.stub(todoDAO, 'findOne').resolves({});
      expect(todosModel.get('1')).to.eventually.to.equal({});
    });
  });

  describe('method edit', () => {

    afterEach(() => {
      sinon.restore();
    });

    it('should throw', () => {
      sinon.stub(todoDAO, 'findOneAndUpdate').rejects();
      expect(todosModel.edit('1', {})).to.eventually.to.be.rejected;
    });

    it('should return a object', () => {
      sinon.stub(todoDAO, 'findOneAndUpdate').resolves({});
      expect(todosModel.edit('1', {})).to.eventually.to.equal({});
    });
  });
});