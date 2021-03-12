import { Module } from '@nestjs/common';
import { AuthManagerService } from './auth-manager.service';
import { AuthManagerController } from './auth-manager.controller';
import { AuthManagerSchema } from './entities/auth-manager.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthManager } from './entities/auth-manager.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: AuthManager.name, schema: AuthManagerSchema }])],
  controllers: [AuthManagerController],
  providers: [AuthManagerService]
})
export class AuthManagerModule {}
