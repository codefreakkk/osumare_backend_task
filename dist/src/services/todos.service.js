"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const todosDao_1 = require("../dao/todosDao");
class TodosService {
    static getTodoById(todoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield todosDao_1.TodosDao.getTodoById(todoId);
            if (!todo) {
                throw new Error('Todo not found');
            }
            return todo;
        });
    }
    static getAllTodosByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield todosDao_1.TodosDao.getAllTodosByUserId(userId);
            if (!todos) {
                throw new Error('Todos not found');
            }
            return todos;
        });
    }
    static createTodo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            return todosDao_1.TodosDao.createTodo(todo);
        });
    }
    static updateTodo(todoId, todo) {
        return __awaiter(this, void 0, void 0, function* () {
            return todosDao_1.TodosDao.updateTodo(todoId, todo);
        });
    }
    static deleteTodoById(todoId) {
        return __awaiter(this, void 0, void 0, function* () {
            todosDao_1.TodosDao.deleteTodoById(todoId);
            return;
        });
    }
}
exports.TodosService = TodosService;
