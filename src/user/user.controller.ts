import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { get } from 'http';
import { UserCreateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService:UserService){
        
    }

    @Post()  // Yeni bir kayıt oluşturmak için kullanılır
    createUser(@Body() body: UserCreateDto){
        return this.userService.createUser(body);
    }

    @Get()   // API endpoint get ile  istek alıyorsa bu endpoint ile veri okunabilir
    getAllUsers(): UserModel[] {
        return this.userService.getAllusers();
    }

    @Get(':id')
    getUser(@Param() params):UserModel{
        return this.userService.getUserById(params.id);
    }
}
