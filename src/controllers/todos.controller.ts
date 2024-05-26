import { ITodos } from "../interfaces/todos";
import { Request, Response } from "express";
import { TodosService } from "../services/todos.service";

export class TodosController {
    static async getTodoById(req: Request, res: Response): Promise<void> {
        try {  
            const todoId = req.params.id;
            const todo = await TodosService.getTodoById(todoId);

            res.status(200).json({
                success: true, 
                todo: todo
            });

        } catch (error: any) {
            res.status(500).json({
                success: false, 
                message: error.message
            })
        }
    }

    static async getAllTodosByUserId(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user?._id as string;
            const todos = await TodosService.getAllTodosByUserId(userId);
            res.status(200).json({
                success: true, 
                todos: todos
            })

        } catch (error: any) {
            res.status(500).json({
                success: false, 
                message: error.message
            });
        }
    }

    static async createTodo(req: Request, res: Response): Promise<void> {
        try {
            const {title, description} = req.body;
            const userId = req.user?._id as string;
            const todo: ITodos = {
                userId,
                title, 
                description
            };

            const newTodo = await TodosService.createTodo(todo);
            res.status(201).json({
                success: true, 
                todo: newTodo
            });

        } catch (error: any) {
            res.status(500).json({
                success: false, 
                message: error.message
            });
        }
    }

    static async updateTodo(req: Request, res: Response): Promise<void> {
        try {
            const todoId = req.params.id;
            const userId = req.user?._id as string;
            const {title, description} = req.body;

            const todo: ITodos =  {
                userId,
                title,
                description
            }

            await TodosService.updateTodo(todoId, todo);
            res.status(200).json({
                succcess: true, 
                message: "Todo Updated"
            });

        } catch (error: any) {
            res.status(500).json({
                success: false, 
                message: error.message
            });
        }
    }

    static async deleteTodoById(req: Request, res: Response): Promise<void> {
        try {
            const todoId = req.params.id;
            await TodosService.deleteTodoById(todoId);

            res.status(200).json({
                success: true, 
                message: "Todo deleted"
            })
        } catch (error: any) {
            res.status(500).json({
                success: false, 
                message: error.message
            });   
        }
    }
}