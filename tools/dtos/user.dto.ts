import { GroupModel } from "tools/models/group.model";
import { RoleModel } from "tools/models/role.model";
import { IsNotEmpty, Length, IsEmail, IsDate } from "class-validator"
export class UserCreateDto{  // Nestjs Class Validation
    @IsNotEmpty()
    @Length(2,20)
    name: string;
    surname: string;
    password: string;
    image: string;
    @IsEmail()
    email: string;
    @IsDate()
    birthDay: Date;
}

export class UserUpdateDto{
    name: string;
    surname: string;
    image: string;
    password: string;
    email: string;
    birthDay: Date;
    roles: RoleModel[];
    groups: GroupModel[];
}

export class UserLoginDto{
    email: string;
    password: string;
}