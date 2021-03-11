import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectManagerService } from './project-manager.service';
import { ProjectManagerController } from './project-manager.controller';
import { ProjectManager, ProjectManagerSchema } from './entities/project-manager.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: ProjectManager.name, schema: ProjectManagerSchema }])],
  controllers: [ProjectManagerController],
  providers: [ProjectManagerService]
})
export class ProjectManagerModule {}
