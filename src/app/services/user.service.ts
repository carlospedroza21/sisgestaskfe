import { Injectable } from '@angular/core';
import { UserRole } from '../enumeration/UserRole';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlUsers = 'http://localhost:3000/users';

  constructor() { }

  createUser(name: string, email: string, role: string) {
    console.log(`User created: ${name} ${email} at ${role}`);
  }

  async getAllUsers(): Promise<User[]> {
    const data = await fetch(this.urlUsers);
    return await data.json() ?? [];
  }
}
