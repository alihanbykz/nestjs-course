import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ActivityTypeSchema } from "tools/models/activity-type.model";
import { ActivityTypeController } from "./activity-type.controller";
import { ActivityTypeService } from "./activity-type.service";

@Module({
    imports: [MongooseModule.forFeature([{name:'AcitivityType', schema:ActivityTypeSchema}])],
    controllers: [ActivityTypeController],
    providers: [ActivityTypeService],
  })
  export class UserModule {}