import Task from '../schema/task.model.js'


export const addTask = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body
        const newTask = new Task({
            nombre,
            descripcion
        })
        const taskSaved = await newTask.save()
        res.json(taskSaved)
    } catch (error) {
        res.status(400).json({ error: "No se pudo crear la tarea" })
    }
}

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.json(tasks)
    } catch (error) {
        res.status(400).json({ error: "No se pudieron obtener las tareas" })
    }
}

export const getTask = async (req, res) => {
    try {
        const newTask = await Task.findById(req.params.id)
        console.log(newTask)
        res.json(newTask)
    } catch (error) {
        res.status(400).json({ error: "No se pudo encontrar la tarea" })
    }
}

export const updateTask = async (req, res) => {
    try {
        const taskNew = await Task.findByIdAndUpdate(req.params.id, req.body, { 
            new: true 
        })
        if (!taskNew) return res.status(404).json({ error: "No se pudo encontrar la tarea" })
        res.json(taskNew)
    } catch (error) {
        res.status(400).json({ error: "No se pudo actualizar la tarea" })
    }
}

export const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id)
        if (!deletedTask) return res.status(404).json({ error: "Tarea no encontrada" })
        return res.sendStatus(204)
    } catch (error) {
        res.status(400).json({ errro: "No se pudo eliminar la tarea" })
    }
}
