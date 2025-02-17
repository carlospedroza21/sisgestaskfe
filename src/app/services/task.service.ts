import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { TaskState } from '../enumeration/TaskState';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  createTask(name: string, user: User, state: TaskState) {
    console.log(`Task created: ${name} ${user.id} at ${state}`);
  }
}
