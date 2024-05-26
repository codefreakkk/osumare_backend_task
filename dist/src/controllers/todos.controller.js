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
exports.TodosController = void 0;
const todos_service_1 = require("../services/todos.service");
class TodosController {
    static getTodoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoId = req.params.id;
                const todo = yield todos_service_1.TodosService.getTodoById(todoId);
                res.status(200).json({
                    success: true,
                    todo: todo
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: error.message
                });
            }
        });
    }
    static getAllTodosByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
                const todos = yield todos_service_1.TodosService.getAllTodosByUserId(userId);
                res.status(200).json({
                    success: true,
                    todos: todos
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: error.message
                });
            }
        });
    }
    static createTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, title, description } = req.body;
                const todo = {
                    userId,
                    title,
                    description
                };
                const newTodo = yield todos_service_1.TodosService.createTodo(todo);
                res.status(201).json({
                    success: true,
                    todo: newTodo
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: error.message
                });
            }
        });
    }
    static updateTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const todoId = req.params.id;
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
                const { title, description } = req.body;
                const todo = {
                    userId,
                    title,
                    description
                };
                yield todos_service_1.TodosService.updateTodo(todoId, todo);
                res.status(200).json({
                    succcess: true,
                    message: "Todo Updated"
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: error.message
                });
            }
        });
    }
    static deleteTodoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoId = req.params.id;
                yield todos_service_1.TodosService.deleteTodoById(todoId);
                res.status(200).json({
                    success: true,
                    message: "Todo deleted"
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: error.message
                });
            }
        });
    }
}
exports.TodosController = TodosController;
