import { Injectable } from '@angular/core';
import { Task } from '../interface/task';
import { UserRole } from '../enumeration/UserRole';
import { TaskState } from '../enumeration/TaskState';

@Injectable({
  providedIn: 'root'
})
export class TaskListServiceTsService {

  protected tasksList: Task[] = [
    {
      "id": 3,
      "name": "Tarea 3",
      "user": {
        "id": 3,
        "name": "Maria Lopez",
        "email": "marialopez@gmail.com",
        "userRole": UserRole.DEV
      },
      "state": TaskState.EN_PROGRESO
    },
    {
      "id": 4,
      "name": "Tarea 4",
      "user": {
        "id": 3,
        "name": "Maria Lopez",
        "email": "marialopez@gmail.com",
        "userRole": UserRole.DEV
      },
      "state": TaskState.PENDIENTE
    },
    {
      "id": 5,
      "name": "Tarea 5",
      "user": {
        "id": 3,
        "name": "Maria Lopez",
        "email": "marialopez@gmail.com",
        "userRole": UserRole.DEV
      },
      "state": TaskState.COMPLETADA
    }  
  ];

  constructor() { }

  getAllTasks(): Task[] {
    return this.tasksList;
  }

  getTasksByTaskState(taskState: string): Task[] | undefined {
    return this.tasksList.filter(task => task.state === taskState);
  }

  getTaskByUserId(userId: number): Task[] | undefined {
    return this.tasksList.filter(task => task.user.id === userId);
  }
}
