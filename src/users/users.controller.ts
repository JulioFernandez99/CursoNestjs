import { Body, Controller, Get, Post} from '@nestjs/common';
import { UsersService, User } from './users.service';
import { CreateUser } from './dto/createUser.dto';

@Controller('/users')
export class UsersController {

    constructor(private usersService: UsersService){
        
    }

    @Get()
    getUsers(){
        return this.usersService.getUsers()
    }

    @Post()
    createUser(@Body() user:CreateUser): User{
        return this.usersService.createUser(user)
    }

    
}
