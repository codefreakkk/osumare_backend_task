import { Router } from "express";
import { TodosController } from "../controllers/todos.controller";
import { protectRoute } from "../middlewares/auth";

const router: Router = Router();
const API_VERSION = '/v1';

router.get(`${API_VERSION}/tasks`, protectRoute, TodosController.getAllTodosByUserId); 
router.get(`${API_VERSION}/tasks/:id`, protectRoute, TodosController.getTodoById); 
router.post(`${API_VERSION}/tasks`, protectRoute, TodosController.createTodo);
router.put(`${API_VERSION}/tasks/:id`, protectRoute, TodosController.updateTodo);
router.delete(`${API_VERSION}/tasks/:id`, protectRoute, TodosController.deleteTodoById)

export default router;
