
import { IsNotEmpty, IsString, IsEnum, IsNumber } from 'class-validator';
import { TaskPriority } from '../entities/task.entity'; 

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  
  @IsString()
  description: string;
  
  @IsEnum(TaskPriority)
  priority: TaskPriority;

  @IsNotEmpty()
  @IsNumber()
  listId: number;
}