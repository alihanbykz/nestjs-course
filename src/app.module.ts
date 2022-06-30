import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LibsModule } from 'libs/libs.module';
import environment from 'tools/environment/environment';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupModule } from './group/group.module';
import { InventoryTypeModule } from './inventory/inventory-type/inventory-type.module';
import { InventoryModule } from './inventory/inventory.module';
import { ProductTypeModule } from './product/product-type/product-type.module';
import { ProductModule } from './product/product.module';
import { RoleModule } from './role/role.module';
import { TicketTypeModule } from './ticket/ticket-type/ticket-type.module';
import { TicketModule } from './ticket/ticket.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule,
    TicketModule,
    TicketTypeModule,
    RoleModule,
    ProductModule,
    ProductTypeModule,
    InventoryModule,
    InventoryTypeModule,
    GroupModule,
    LibsModule,
    MongooseModule.forRoot(environment.mongoUrl)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
