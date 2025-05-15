import { Injectable } from '@nestjs/common';
import { CreateUser } from './dto/createUser.dto';

export interface User {
    id: number;
    name: string;
    phone: number
}

@Injectable()
export class UsersService {

    private users: User[] = [
        {
            id: 1,
            name: 'Jhon Doe',
            phone: 123124124
        },
        {
            id: 2,
            name: 'Jhon Doe 2',
            phone: 123124124
        }
    ]

    getUsers(): User[] {
        return this.users;
    }

    createUser(user: CreateUser): User{
        const newUser: User = {
            ...user,
            id: this.users.length + 1
        }
        this.users.push(newUser)
        return newUser
    }
}
