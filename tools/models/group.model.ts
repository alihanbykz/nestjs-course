import mongoose from "mongoose";
import { AuditModel } from "./audit.model";
import { RoleModel } from "./role.model";

export class GroupModel{
    id: string;
    name: string;
    description: string;
    audit: AuditModel;
    roles: RoleModel[];
}

export const GroupSchema = new mongoose.Schema({
    name: String,
    description: String,
    audit: Object,
    roles: Array,
})