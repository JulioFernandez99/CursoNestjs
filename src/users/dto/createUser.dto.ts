
import {  IsNumber, IsPhoneNumber, IsString } from "class-validator";

export class CreateUser {

    @IsString()
    name: string;

    @IsNumber()
    phone: number;
    
}