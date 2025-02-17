import { TaskState } from '../enumeration/TaskState';
import { User } from './User';

export interface Task {
    id: number,
    name: string,
    user: User,
    state: TaskState
}