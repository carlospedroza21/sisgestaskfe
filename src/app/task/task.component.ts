import { Component } from '@angular/core';
import { TaskListComponent } from "./task-list/task-list.component";

@Component({
  standalone: true,
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [TaskListComponent]
})
export class TaskComponent {

}
