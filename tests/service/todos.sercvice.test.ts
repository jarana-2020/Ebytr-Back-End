import {expect, use} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import { todosModel } from '../../src/app/model/todos.model';
import { todoService } from '../../src/app/service/todos.service';

use(chaiAsPromised);

describe('Test Service todos.service', () => {
  beforeEach(() => {
    sinon.restore();
  });

  it('should throw error ',() => {
    sinon.stub(todosModel, 'list').rejects();
    expect(todoService.list()).to.eventually.to.be.rejected;
  });

  it('should return a array', () => {
    sinon.stub(todosModel, 'list').resolves([]);
    expect(todoService.list()).to.eventually.to.deep.equal([]);
  });
});