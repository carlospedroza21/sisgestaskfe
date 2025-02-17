import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Task } from '../../interface/task';

@Component({
  standalone: true,
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  imports: [CommonModule, RouterModule],
})
export class TaskListComponent { 
  @Input() task!: Task;
}
