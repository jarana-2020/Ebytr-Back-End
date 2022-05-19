import {expect, use} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import { todosModel } from '../../src/app/model/todos.model';
import { todoService } from '../../src/app/service/todos.service';

use(chaiAsPromised);

describe('Test Service todos.service', () => {
  describe('Test method list', () => {
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

  describe('Test method add', () => {
    beforeEach(() => {
      sinon.restore();
    });
  
    it('should throw error ',() => {
      sinon.stub(todosModel, 'add').rejects();
      expect(todoService.add({} as any)).to.eventually.to.be.rejected;
    });
  
    it('should return a object', () => {
      sinon.stub(todosModel, 'add').resolves({} as any);
      expect(todoService.add({} as any)).to.eventually.to.deep.equal({});
    });
  });

  describe('Test method get', () => {
    beforeEach(() => {
      sinon.restore();
    });
  
    it('should throw error ',() => {
      sinon.stub(todosModel, 'get').rejects();
      expect(todoService.get({} as any)).to.eventually.to.be.rejected;
    });
  
    it('should return a object', () => {
      sinon.stub(todosModel, 'get').resolves();
      expect(todoService.get('1')).to.eventually.to.be.rejected;
    });

    it('should return empty', () => {
      sinon.stub(todosModel, 'get').resolves({} as any);
      expect(todoService.get({} as any)).to.eventually.to.be.deep.equal({});
    });
  });

  describe('Test method edit', () => {
    beforeEach(() => {
      sinon.restore();
    });
  
    it('method get should throw error ',() => {
      sinon.stub(todosModel, 'edit').rejects();
      expect(todoService.edit('1', {})).to.eventually.to.be.rejected;
    });
  
    it('should throw if get returns empyt', () => {
      sinon.stub(todosModel, 'get').resolves();
      expect(todoService.edit('1', {})).to.eventually.to.be.rejected;
    });

    it('should throw if todosModel.edit throws', () => {
      sinon.stub(todosModel, 'get').resolves({} as any);
      sinon.stub(todosModel, 'edit').rejects();
      expect(todoService.edit('1', {} as any)).to.eventually.to.rejected;
    });

    it('should return nothing if success', () => {
      sinon.stub(todosModel, 'get').resolves({} as any);
      sinon.stub(todosModel, 'edit').resolves({} as any);
      expect(todoService.edit('1',{} as any)).to.eventually.to.be.undefined;
    });
  });

  describe('Test method delete', () => {
    beforeEach(() => {
      sinon.restore();
    });
  
    it('method get should throw error ',() => {
      sinon.stub(todosModel, 'get').rejects();
      expect(todoService.delete('1')).to.eventually.to.be.rejected;
    });
  
    it('should throw if get returns empyt', () => {
      sinon.stub(todosModel, 'get').resolves();
      expect(todoService.delete('1')).to.eventually.to.be.rejected;
    });

    it('should throw if todosModel.delete throws', () => {
      sinon.stub(todosModel, 'get').resolves({} as any);
      sinon.stub(todosModel, 'delete').rejects();
      expect(todoService.delete('1')).to.eventually.to.rejected;
    });

    it('should return nothing if success', () => {
      sinon.stub(todosModel, 'get').resolves({} as any);
      sinon.stub(todosModel, 'delete').resolves({} as any);
      expect(todoService.delete('1')).to.eventually.to.be.undefined;
    });
  });
});