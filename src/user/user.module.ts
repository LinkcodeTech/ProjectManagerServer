import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { ProjectService } from 'src/project/project.service';
import { ProjectModule } from 'src/project/project.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ProjectModule
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
