
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProjectManager, ProjectManagerDocument } from './entities/project-manager.entity';
import { CreateProjectManagerDto } from './dto/create-project-manager.dto';
import { UpdateProjectManagerDto } from './dto/update-project-manager.dto';

@Injectable()
export class ProjectManagerService {
  constructor(@InjectModel(ProjectManager.name) private projectManagerModel: Model<ProjectManagerDocument>) {}

  async create(createProjectManagerDto: CreateProjectManagerDto): Promise<ProjectManager> {
    const createdProjectManager = new this.projectManagerModel(createProjectManagerDto);
    return createdProjectManager.save();
  }

  async findAll(): Promise<ProjectManager[]> {
    return this.projectManagerModel.find().exec();
  }

  async findOne(id: string): Promise<ProjectManager> {
    return this.projectManagerModel.findById(id);
  }

  update(id: string, updateProjectDto: UpdateProjectManagerDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: string) {
    return `This action removes a #${id} project`;
  }
}
