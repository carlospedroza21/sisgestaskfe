import { Injectable } from '@angular/core';
import { UserRole } from '../enumeration/UserRole';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

protected users: User[] = [
  {
    "id": 3,
    "name": "Maria Lopez",
    "email": "marialopez@gmail.com",
    "userRole": UserRole.DEV
  },
  {
    "id": 4,
    "name": "Lucia Jimenez",
    "email": "luciajimenez@gmail.com",
    "userRole": UserRole.DEV
  }
];

  constructor() { }

  createUser(name: string, email: string, role: string) {
    console.log(`User created: ${name} ${email} at ${role}`);
  }

  getAllUsers(): User[] {
    return this.users;
  }
}
