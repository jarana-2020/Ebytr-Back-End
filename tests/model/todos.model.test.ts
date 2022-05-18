import {expect, use} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import { todosModel } from '../../src/app/model/todos.model';
import { todoDAO } from '../../src/db';

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
});