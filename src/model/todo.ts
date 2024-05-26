import mongoose, { Schema, model } from "mongoose";
import { ITodos } from "../interfaces/todos";

const TodosSchema = new Schema<ITodos>({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }
});

export default model<ITodos>('Todos', TodosSchema);