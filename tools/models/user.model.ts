import { AuditModel } from "./audit.model";
import { GroupModel } from "./group.model";
import { RoleModel } from "./role.model";

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