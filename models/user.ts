import { Role } from "./role";

export interface User {
    email: string;
    username: string;
    password: string;
    role: Role;
}