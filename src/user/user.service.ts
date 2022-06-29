import { Injectable } from '@nestjs/common';
import { createSecureServer } from 'http2';
import { UserCreateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';

const result: UserModel[] = [];

@Injectable()
export class UserService {

    getAllusers(): UserModel[] {
        if (result.length === 0) {
            this.creatingMockingUser(
                {
                    birthDay:new Date(),
                    email:"ahmetaydin@udemy.com.tr",
                    name:"Ahmet",
                    surname:"Aydın",
                    password:"123123",

                }
            )
        }
        return result;
    }

    getUserById(id) : any{
        const user = result.find(data => data.id === id);

        if(!user){
            return 'user does not exist';
        }
        else{
            return user;
        }
    }
    
    createUser(body:UserCreateDto) {
        const isExist = result.find(res => { 
            res.email === body.email;  // User daha önce oluşmuş mu  bakıyoruz
        });
        if (isExist) {
            return isExist;
        } else {                          // User yoksa 
            this.creatingMockingUser(body);  // burada oluşturacaktır.
            return result.slice(result.length - 1, result.length);  // resultun son eklenen değerini return ediyor. Yani oluşturduğumuz kullanıcı
        }
    }

    private creatingMockingUser(data: any){
        const user: UserModel = new UserModel();
        user.birthDay = data.birthDay;
        user.email = data.email;
        user.name = data.name;
        user.surname = data.surname;
        user.password = data.password;

        user.id = Math.floor(Math.random()*60 +1).toString();

        result.push(user);
    }
}
