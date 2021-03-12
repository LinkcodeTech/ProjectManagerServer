import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAuthAdminDto } from './dto/create-auth-admin.dto';
import { UpdateAuthAdminDto } from './dto/update-auth-admin.dto';
import { AuthAdmin, AuthAdminDocument } from './entities/auth-admin.entity';

@Injectable()
export class AuthAdminService {

  constructor(@InjectModel(AuthAdmin.name) private AuthAdminModel: Model<AuthAdminDocument>) { }

  async create(createAuthAdminDto: CreateAuthAdminDto): Promise<AuthAdmin> {
    const createdAuthAdmin = new this.AuthAdminModel(createAuthAdminDto);
    return createdAuthAdmin.save();
  }

  async findAll(): Promise<AuthAdmin[]> {
    return this.AuthAdminModel.find();
  }

  async findOne(id: string): Promise<AuthAdmin> {
    return this.AuthAdminModel.findById(id);
  }

  async findOneByEmail(email: string,password: string): Promise<AuthAdmin> {
    return this.AuthAdminModel.findOne({email:email, password: password});
  }


  update(id: string, updateAuthAdminDto: UpdateAuthAdminDto) {
    return `This action updates a #${id} AuthAdmin`;
  }

  remove(id: string) {
    return `This action removes a #${id} AuthAdmin`;
  }
}
