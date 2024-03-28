// export class CreateTaskDto {
//   readonly name: string;
//   readonly description: string;
//   readonly dueDate: Date;
//   readonly priority: number;
// }
import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { TaskPriority } from '../entities/task.entity'; 

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsEnum(TaskPriority)
  priority: TaskPriority;
}