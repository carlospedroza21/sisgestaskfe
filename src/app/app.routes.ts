import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { TaskCreateComponent } from './task/task-create/task-create.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'task/list',
        component: TaskComponent,
        title: 'Task List'
    },
    {
        path: 'task/assign',
        component: TaskCreateComponent,
        title: 'Task Assign'
    },
    {
        path: 'user/create',
        component: UserComponent,
        title: 'Create User'
    }
];

export default routeConfig;