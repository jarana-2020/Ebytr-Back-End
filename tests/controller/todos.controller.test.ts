import {expect, use} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import { todosController } from '../../src/app/controller/todos.controller';
import { todoService } from '../../src/app/service/todo.service';

use(chaiAsPromised);

describe('Test Model todos.model', () => {
  beforeEach(() => {
    sinon.restore();
  });
  
  it('should return throw', () => {
    sinon.stub(todoService, 'list').rejects();
    expect(todosController.list()).to.eventually.to.be.rejected;
  });

  it('should return a array', () => {
    sinon.stub(todoService, 'list').resolves([]);
    expect(todosController.list()).to.eventually.to.deep.equal([]);
  });
});