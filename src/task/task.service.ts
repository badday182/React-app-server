import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { log } from 'console';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepository.create(createTaskDto);
    return this.taskRepository.save(task);
  }

  async getAllTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async getTaskById(id: number): Promise<Task> {
    const options: FindOneOptions<Task> = { where: { id } };
    return this.taskRepository.findOne(options);
  }
  // async updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
  //   const task = await this.taskRepository.findOne({ where: { id } });
  //   if (!task) {
  //     throw new Error('Task not found');
  //   }

  //   this.taskRepository.merge(task, updateTaskDto);
  //   return this.taskRepository.save(task);
  // }

  async deleteTask(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
