import mongoose from "mongoose";

const TaskModel = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
})

export default mongoose.model('Task', TaskModel)