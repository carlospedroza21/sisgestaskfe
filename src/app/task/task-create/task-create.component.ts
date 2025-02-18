import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TaskService } from '../../services/task.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskState } from '../../enumeration/TaskState';
import { User } from '../../interface/user';

@Component({
  standalone: true,
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.css',
  imports: [CommonModule,RouterModule, ReactiveFormsModule],
})
export class TaskCreateComponent {

  userService = inject(UserService);
  taskService = inject(TaskService);
  states: string[] = [];
  users: User[] = [];
  userSeleccionado: User | null = null;

  constructor() { 
    this.states = [TaskState.PENDIENTE, TaskState.EN_PROGRESO, TaskState.COMPLETADA];
    this.userService.getAllUsers().then((userList: User[]) => {
      this.users = userList;
    });
  }

  applyForm = new FormGroup({
    name: new FormControl(''),
    user: new FormControl(null),
    state: new FormControl(null) ?? TaskState.PENDIENTE,
  });

  submitCreateTask() {
    this.taskService.createTask(
      this.applyForm.value.name ?? '',
      this.applyForm.get('user')?.value ?? this.users[0],
      this.applyForm.get('state')?.value ?? TaskState.PENDIENTE,
    );
  }

}
