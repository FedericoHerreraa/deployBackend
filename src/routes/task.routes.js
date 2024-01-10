import { Router } from "express";
import {
    getTasks,
    addTask,
    deleteTask,
    updateTask,
    getTask
} from '../controllers/task.controller.js'

const taskRoutes = Router()

taskRoutes.get('/tasks', getTasks)

taskRoutes.get('/task/:id', getTask)

taskRoutes.post('/add-task', addTask)

taskRoutes.put('/update-task/:id', updateTask)

taskRoutes.delete('/delete-task/:id', deleteTask)

export default taskRoutes