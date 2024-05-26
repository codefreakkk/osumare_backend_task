import { ITodos } from "../interfaces/todos";
import Todo from "../model/todo";

export class TodosDao {
    static async getTodoById(todoId: string): Promise<ITodos | null> {
        return Todo.findOne({_id: todoId}).exec();
    }  

    static async getAllTodosByUserId(userId: string): Promise<ITodos[] | null> {
        return Todo.find({userId}).exec();
    }

    static async createTodo(todo: ITodos): Promise<ITodos> {
        const newTodo = new Todo(todo);
        return newTodo.save();
    }

    static async updateTodo(todoId: string, todo: ITodos): Promise<void> {
        Todo.findOneAndUpdate({_id: todoId}, {title: todo.title, description: todo.description}).exec();
        return
    }

    static async deleteTodoById(todoId: string): Promise<void> {
        Todo.findOneAndDelete({_id: todoId}).exec();
    }
} 
