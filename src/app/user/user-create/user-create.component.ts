import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interface/user';
import { UserRole } from '../../enumeration/UserRole';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css',
  imports: [CommonModule,RouterModule, ReactiveFormsModule],
})
export class UserCreateComponent {
  
  userService = inject(UserService);
  roles: string[] = [];

  applyForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    role: new FormControl(null) ?? UserRole.DEV,
  });

  constructor() { 
    this.roles = [UserRole.DEV, UserRole.LT];
  }

  submitCreateUser() {
    this.userService.createUser(
      this.applyForm.value.name ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.get('role')?.value ?? UserRole.DEV ,
    );
  }
}
