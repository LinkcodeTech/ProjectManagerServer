import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProjectModule } from './project/project.module';
import { ProjectManagerModule } from './project-manager/project-manager.module';
import { AuthManagerModule } from './auth/auth-manager/auth-manager.module';
import { AuthAdminModule } from './auth/auth-admin/auth-admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb+srv://${configService.get<string>('DB_USER')}:${configService.get<string>('DB_PASSWORD')}@cluster0.slxeu.mongodb.net/${configService.get<string>('DB_NAME')}?retryWrites=true&w=majority`
      }),
      inject: [ConfigService]
    }),
    ProjectModule,
    ProjectManagerModule,
    AuthManagerModule,
    AuthAdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
