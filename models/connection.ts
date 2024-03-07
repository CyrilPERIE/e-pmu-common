import { User } from "./user";

export interface Connection {
    user: User,
    date: Date,
    ip: string
}