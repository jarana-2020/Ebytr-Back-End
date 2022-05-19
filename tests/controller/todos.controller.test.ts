import {expect, use} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import { todosController } from '../../src/app/controller/todos.controller';
import { todosValidator } from '../../src/app/controller/validators/todos.validator';
import { todoService } from '../../src/app/service/todos.service';
import { Todo } from '../../src/Types/todosTypes';

use(chaiAsPromised);

describe('Test Controller todos.controller', () => {

  describe('Test method list', () => {

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

  describe('Test method add', () => {

    beforeEach(() => {
      sinon.restore();
    });
    
    it('todosValidator should return throw', () => {
      sinon.stub(todosValidator, 'bodyAdd').rejects();
      expect(todosController.add({} as any)).to.eventually.to.be.rejected;
    });

    it('todoService.add should return throw', () => {
      sinon.stub(todosValidator, 'bodyAdd').resolves({} as any);
      sinon.stub(todoService, 'add').rejects({} as any);
      expect(todosController.add({} as any)).to.eventually.to.be.rejected;
    });

    it('todoService.get should return throw', () => {
      sinon.stub(todosValidator, 'bodyAdd').resolves({} as any);
      sinon.stub(todoService, 'add').resolves('1');
      sinon.stub(todoService, 'get').rejects({} as any);
      expect(todosController.add({} as any)).to.eventually.to.be.rejected;
    });

  
    it('should return a object', () => {
      sinon.stub(todosValidator, 'bodyAdd').resolves({} as any);
      sinon.stub(todoService, 'add').resolves('1');
      sinon.stub(todoService, 'get').resolves({} as Todo);
      expect(todosController.list()).to.eventually.to.deep.equal({});
    });
  });

  describe('Test method edit', () => {
    
    beforeEach(() => {
      sinon.restore();
    });
    
    it('todosValidator paramId should return throw', () => {
      sinon.stub(todosValidator, 'paramsId').rejects();
      sinon.stub(todosValidator, 'bodyEdit').resolves({} as any);
      expect(todosController.edit('1', {} as any)).to.eventually.be.rejected;
    });

    it('todosValidator bodyEdit should return throw', () => {
      sinon.stub(todosValidator, 'paramsId').resolves({} as any);
      sinon.stub(todosValidator, 'bodyEdit').rejects();
      expect(todosController.edit('1', {} as any)).to.eventually.be.rejected;
    });

    it('todoService.edit should return throw', () => {
      sinon.stub(todosValidator, 'paramsId').resolves({} as any);
      sinon.stub(todosValidator, 'bodyEdit').resolves({} as any);
      sinon.stub(todoService, 'edit').rejects();
      expect(todosController.edit('1', {} as any)).to.eventually.be.rejected;
    });

    it('todoService.get should return throw', () => {
      sinon.stub(todosValidator, 'paramsId').resolves({} as any);
      sinon.stub(todosValidator, 'bodyEdit').resolves({} as any);
      sinon.stub(todoService, 'edit').resolves();
      sinon.stub(todoService, 'get').rejects();
      expect(todosController.edit('1', {} as any)).to.eventually.be.rejected;
    });

  
    it('should return a object', () => {
      sinon.stub(todosValidator, 'paramsId').resolves({} as any);
      sinon.stub(todosValidator, 'bodyEdit').resolves({} as any);
      sinon.stub(todoService, 'edit').resolves();
      sinon.stub(todoService, 'get').resolves({} as any);
      expect(todosController.edit('1', {} as any)).to.eventually.to.deep.equal({});
    });
  });
});