import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService {

    getAllTask(){
        return ['Task1','Task2','Task3']
    }
}