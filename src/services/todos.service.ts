import { TodosDao } from "../dao/todosDao";
import { ITodos } from "../interfaces/todos";

export class TodosService {
    static async getTodoById(todoId: string): Promise<ITodos | null> {
        const todo = await TodosDao.getTodoById(todoId);
        if (!todo) {
            throw new Error('Todo not found');
        }
        return todo;
    }

    static async getAllTodosByUserId(userId: string): Promise<ITodos[] | null> {
        const todos = await TodosDao.getAllTodosByUserId(userId);
        if (!todos) {
            throw new Error('Todos not found');
        }
        return todos;
    }

    static async createTodo(todo: ITodos): Promise<ITodos> {
        return TodosDao.createTodo(todo);
    }

    static async updateTodo(todoId: string, todo: ITodos): Promise<void> {
        return TodosDao.updateTodo(todoId, todo);
    }

    static async deleteTodoById(todoId: string): Promise<void> {
        TodosDao.deleteTodoById(todoId);
        return;
    }
}