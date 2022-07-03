import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getalltasks(): Task[] {
    return this.tasks;
  }
  createtasks(title: string, description: string): Task {
    const task: Task = {
      id: '',
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
