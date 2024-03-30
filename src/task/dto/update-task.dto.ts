import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { TaskPriority } from '../entities/task.entity';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  readonly name?: string;
  readonly description?: string;
  readonly dueDate?: Date;
  readonly priority?: TaskPriority;
  readonly listId?: number;
  
}
