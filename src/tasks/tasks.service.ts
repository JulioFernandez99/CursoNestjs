import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";

export interface User {
    name: string;
    age: number;
}

export interface Task {
    id: number;
    title: string;
    description: string;
    status: boolean;
}

@Injectable()
export class TaskService {
    private tasks: Task[] = [];


    getAllTask(): any{
        return this.tasks;
    }

    getTask(id: number): Task | undefined | NotFoundException  {
        const result = this.tasks.find(task => task.id === id);

        if (!result){
            
            return new NotFoundException(`Error al buscar la tarea con el id: ${id}`)
        }
        return result
    }

    createTask(task: CreateTaskDto): Task {
        const newTask: Task = {
            ...task,
            id: this.tasks.length + 1 
        };
        this.tasks.push(newTask);
        return newTask;
    }

    updateTask(){
        return "Actualizando tarea";
    }
    
    deleteTask(){
        return "Eliminando tarea";
    }
    
    updateTaskStatus(){
        return "Actualizando el estado de la tarea";
    }
}