import { Role } from "./role";

export interface User {
    username: string;
    password: string;
    jwtoken: string;
    role: Role;
}