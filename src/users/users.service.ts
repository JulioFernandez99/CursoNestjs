import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
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

    getUsers(){
        return this.users;

    }
}
