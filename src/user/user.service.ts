import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { createSecureServer } from 'http2';
import { Model } from 'mongoose';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { AuditModel } from 'tools/models/audit.model';
import { UserModel } from 'tools/models/user.model';



@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userMongo: Model<UserModel>,
    ) {}

    async create(user:UserCreateDto) : Promise<UserModel> {
        const audit = new AuditModel();
        audit.active = true;
        audit.createdBy = 'Admin';
        audit.createdDate = new Date();

        const createdUser = new this.userMongo({...user,...audit});

        return await createdUser.save();
    }

    async findAll() : Promise<UserModel[]>{
        return await this.userMongo.find().exec();
    }

    async findOne(id: string): Promise<UserModel[]> {
        return await this.userMongo.find({ _id: id}).exec();
    }
    
    async delete(id: string): Promise<UserModel>{
        return await this.userMongo.findByIdAndDelete({ _id: id}).exec();
    }

    async update(id: string, user:UserUpdateDto): Promise<UserModel>{
        let newModel = this.userMongo.findOne({ _id:id}).exec();
        newModel = {...newModel,...user};
        return await this.userMongo.findByIdAndUpdate(id,newModel,{new:true}).exec();
    }
}
