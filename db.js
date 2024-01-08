import mongoose from 'mongoose'
import { MONGODB_URI } from './config.js';

const url = MONGODB_URI
export const connectDb = async () => {
    try {   
        await mongoose.connect(url)
        console.log('se conecto correctamente con la base de datos')
    } catch (error) {
        console.log(error)
        return
    }
}