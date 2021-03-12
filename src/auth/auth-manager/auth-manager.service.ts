import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAuthManagerDto } from './dto/create-auth-manager.dto';
import { UpdateAuthManagerDto } from './dto/update-auth-manager.dto';
import { AuthManager, AuthManagerDocument } from './entities/auth-manager.entity';

@Injectable()
export class AuthManagerService {

  constructor(@InjectModel(AuthManager.name) private AuthManagerModel: Model<AuthManagerDocument>) { }

  async create(createAuthManagerDto: CreateAuthManagerDto): Promise<AuthManager> {
    const createdAuthManager = new this.AuthManagerModel(createAuthManagerDto);
    return createdAuthManager.save();
  }

  async findAll(): Promise<AuthManager[]> {
    return this.AuthManagerModel.find();
  }

  async findOne(id: string): Promise<AuthManager> {
    return this.AuthManagerModel.findById(id);
  }

  update(id: string, updateAuthManagerDto: UpdateAuthManagerDto) {
    return `This action updates a #${id} AuthManager`;
  }

  remove(id: string) {
    return `This action removes a #${id} AuthManager`;
  }
}
