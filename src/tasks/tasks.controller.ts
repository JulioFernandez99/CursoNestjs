import { Controller, Get } from '@nestjs/common';
import { TaskService } from './tasks.service';

@Controller()
export class TaskController {
    tasksService:TaskService;

    constructor(taskService: TaskService){
        this.tasksService = taskService;
    }
    
    @Get('/tasks')
    getAllTasks(){
        return this.tasksService.getAllTask()
    }


}
