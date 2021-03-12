import { Module } from '@nestjs/common';
import { AuthAdminService } from './auth-admin.service';
import { AuthAdminController } from './auth-admin.controller';
import { AuthAdminSchema } from './entities/auth-admin.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthAdmin } from './entities/auth-admin.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: AuthAdmin.name, schema: AuthAdminSchema }])],
  controllers: [AuthAdminController],
  providers: [AuthAdminService]
})
export class AuthAdminModule {}
