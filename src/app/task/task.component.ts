import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { Task } from '../interface/task';
import { TaskListServiceTsService } from '../services/task-list-service.ts.service';

@Component({
  standalone: true,
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css', 
  imports: [CommonModule, RouterModule, TaskListComponent]
})
export class TaskComponent {
  tasksList: Task[] = [];
  filteredTaskList: Task[] = [];
  taskListService: TaskListServiceTsService = inject(TaskListServiceTsService);

  constructor() {
    this.taskListService.getAllTasks().then((tasksList: Task[]) => {
      this.tasksList = tasksList;
      this.filteredTaskList = tasksList;
    });
  }

  filterResults(searchText: string) {
    if(!searchText) this.filteredTaskList = this.tasksList;

    this.filteredTaskList = this.tasksList.filter((task: Task) => {
      return task.state.includes(searchText);
    });

    this.filteredTaskList = this.tasksList.filter((task: Task) => {
      return task.user.name.includes(searchText);
    });
  }
}
