import { Injectable } from '@angular/core';
import { Task } from '../interface/task';
import { UserRole } from '../enumeration/UserRole';
import { TaskState } from '../enumeration/TaskState';

@Injectable({
  providedIn: 'root'
})
export class TaskListServiceTsService {
  urlTasks = 'http://localhost:3000/tasks';

  constructor() { }

  async getAllTasks(): Promise<Task[]> {
    const data = await fetch(this.urlTasks);
    return await data.json() ?? [];
  }

  async getTasksByTaskState(taskState: string): Promise<Task[] | undefined> {
    const data = await fetch(this.urlTasks+"?state="+taskState);
    return await data.json() ?? [];
  }

 async getTaskByUserId(userId: number): Promise<Task[] | undefined> {
    const data = await fetch(this.urlTasks+"?user.id"+userId);
    return await data.json() ?? [];
 }
}
