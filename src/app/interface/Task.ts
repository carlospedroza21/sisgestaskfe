import { TaskState } from '../enumeration/TaskState';
import { User } from './user';

export interface Task {
    id: number,
    name: string,
    user: User,
    state: TaskState
}