
import mongoose from "mongoose";

const {schema} = mongoose;

const taskSchema = new schema({
  
    task: String,
    completed: {type: Boolean, default: false}
  


},{timestamps: true}

);
const Task = mongoose.model('Task', taskSchema);

export default Task;