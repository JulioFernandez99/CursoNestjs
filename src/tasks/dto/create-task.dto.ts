// src/tasks/dto/create-task.dto.ts
import { IsString, IsBoolean, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(1)
  
  title: string;

  @IsString()
  description: string;

  @IsBoolean()
  status: boolean;
}
