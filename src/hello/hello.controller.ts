import { Controller, Get, HttpCode, Param, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import {Request, Response} from 'express'
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {

    @Get('/hello')
    index(@Req() request:Request, @Res() response: Response){
        console.log(request.url)
        response.status(200).json({
            message: 'Hello world'
        })
    }

    @Get('new')
    @HttpCode(201)
    someThingNew() {
        return 'Something new'
    }

    @Get('/notfound')
    @HttpCode(404)
    notFoundPage(){
        return '404 not found'
    }

    @Get('/ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num:number) {
        return num + 14
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: {name: string, age:number}) {
        return `Hola ${query.name}, tu edad es de ${query.age + 10} anios`
    }
}
