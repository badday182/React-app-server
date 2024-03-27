export class CreateTaskDto {
  readonly name: string;
  readonly description: string;
  readonly dueDate: Date;
  readonly priority: number;
}
