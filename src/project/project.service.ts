import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project, ProjectDocument } from './entities/project.entity';

@Injectable()
export class ProjectService {

  constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) { }

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const createdProject = new this.projectModel(createProjectDto);
    return createdProject.save();
  }

  async findAll(): Promise<Project[]> {
    return await this.projectModel.find();
  }

  async findOne(id: string): Promise<Project> {
    return this.projectModel.findById(id).populate('developers').populate('projectManager').populate({
      path: 'tasks',
      populate: {
        path: 'assignedTo',
        model: 'User'
      }
    });
  }

  update(id: string, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: string) {
    return `This action removes a #${id} project`;
  }

  async findAllByUserId(userId: string): Promise<Project[]> {
    return await (await this.projectModel.find()).filter((o) => {
      if (o.developers.includes(userId) || o.projectManager === userId) {
        return o;
      }
    });
  }

  async updateTasks(id: string, updateProjectDto: UpdateProjectDto) {
    return await this.projectModel.findOneAndUpdate({ _id: id }, { $push: { tasks: updateProjectDto.taskId } }, {
      new: true
    });
  }
}
