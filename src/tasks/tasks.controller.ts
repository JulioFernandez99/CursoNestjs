import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Task, TaskService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('/tasks')
export class TaskController {
    tasksService:TaskService;

    constructor(taskService: TaskService){
        this.tasksService = taskService;
    }
    
    @Get()
    getAllTasks(@Query() query:any): any {
        console.log(query)
        return this.tasksService.getAllTask()
    }

    @Get('/:id')
    getTask(@Param('id') id:string): any {
        return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    createTask(@Body() task:CreateTaskDto): Task {
        return this.tasksService.createTask(task)
    }

    @Put() //? Actualiza todo el objeto
    updateTask() {
        return this.tasksService.updateTask()
    }

    @Delete()
    deleteask() {
        return this.tasksService.deleteTask()
    }

    @Patch() //? Actualizo solo una parte del objeto
    updateTaskStatus() {
        return this.tasksService.updateTaskStatus()
    }



}
