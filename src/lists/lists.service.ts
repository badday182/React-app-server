import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListsService {
  constructor(
    @InjectRepository(List)
    private listRepository: Repository<List>,
  ) {}
  async createList(createListDto: CreateListDto) {
    const list = this.listRepository.create(createListDto);
    return this.listRepository.save(list);
  }

  async getAllLists(): Promise<List[]> {
    return this.listRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} list`;
  }

  async updateList(id: number, updateListDto: UpdateListDto) {
    const task = await this.listRepository.findOne({ where: { id } });
    if (!task) {
      throw new Error('Task not found');
    }

    this.listRepository.merge(task, updateListDto);
    return this.listRepository.save(task);
  }

  async deleteList(id: number): Promise<void> {
    await this.listRepository.delete(id);
  }
}

