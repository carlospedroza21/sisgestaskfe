import { UserRole } from "../enumeration/UserRole";

export interface User {
    id: number;
    name: string;
    email: string;
    userRole: UserRole
}