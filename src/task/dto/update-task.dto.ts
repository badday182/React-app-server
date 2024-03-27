import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  readonly name?: string;
  readonly description?: string;
  readonly dueDate?: Date;
  readonly priority?: number;
}
