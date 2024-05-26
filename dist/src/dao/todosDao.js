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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosDao = void 0;
const todo_1 = __importDefault(require("../model/todo"));
class TodosDao {
    static getTodoById(todoId) {
        return __awaiter(this, void 0, void 0, function* () {
            return todo_1.default.findOne({ _id: todoId }).exec();
        });
    }
    static getAllTodosByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return todo_1.default.find({ userId }).exec();
        });
    }
    static createTodo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const newTodo = new todo_1.default(todo);
            return newTodo.save();
        });
    }
    static updateTodo(todoId, todo) {
        return __awaiter(this, void 0, void 0, function* () {
            todo_1.default.findOneAndUpdate({ _id: todoId }, { title: todo.title, description: todo.description }).exec();
            return;
        });
    }
    static deleteTodoById(todoId) {
        return __awaiter(this, void 0, void 0, function* () {
            todo_1.default.findOneAndDelete({ _id: todoId }).exec();
        });
    }
}
exports.TodosDao = TodosDao;
