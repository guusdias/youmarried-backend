import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks = [];

  create(createTaskDto: CreateTaskDto) {
    const task = { id: Date.now(), ...createTaskDto };
    this.tasks.push(task);
    return task;
  }

  findAll() {
    return this.tasks;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      Object.assign(task, updateTaskDto);
    }
    return task;
  }

  delete(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return { deleted: true };
  }
}
