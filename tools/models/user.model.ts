import { AuditModel } from "./audit.model";
import { GroupModel } from "./group.model";
import { RoleModel } from "./role.model";
import * as mongoose from 'mongoose';

export class UserModel {
    id : string;
    name: string;
    surname: string;
    image: string;
    email: string;
    birthDay: Date;
    password: string;
    audit: AuditModel;
    roles: RoleModel[];
    groups: GroupModel[];
}

export const UserSchema = new mongoose.Schema({  // Mongoose Validation
    name: {type: String, required: [true, 'user name is required !']}, // type belirttik, required ile birlikte alert mesajı yazdık
    surname: String,
    email: String,
    birthDay:Date,
    audit: Object,
    roles: Array,
    groups: Array,
});