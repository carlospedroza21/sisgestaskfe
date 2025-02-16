import { Component } from '@angular/core';
import { UserCreateComponent } from "./user-create/user-create.component";

@Component({
  selector: 'app-user',
  imports: [UserCreateComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
