"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_controller_1 = require("../controllers/todos.controller");
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
const API_VERSION = '/v1';
router.get(`${API_VERSION}/tasks`, auth_1.protectRoute, todos_controller_1.TodosController.getAllTodosByUserId);
router.get(`${API_VERSION}/tasks/:id`, auth_1.protectRoute, todos_controller_1.TodosController.getTodoById);
router.post(`${API_VERSION}/tasks`, auth_1.protectRoute, todos_controller_1.TodosController.createTodo);
router.put(`${API_VERSION}/tasks/:id`, auth_1.protectRoute, todos_controller_1.TodosController.updateTodo);
router.delete(`${API_VERSION}/tasks/:id`, auth_1.protectRoute, todos_controller_1.TodosController.deleteTodoById);
exports.default = router;