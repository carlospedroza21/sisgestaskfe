import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  createUser(name: string, email: string, role: string) {
    console.log(`User created: ${name} ${email} at ${role}`);
  }
}
