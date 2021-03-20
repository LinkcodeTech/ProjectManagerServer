import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  create(createUserDto: CreateUserDto): Promise<User> {
    const result = new this.userModel(createUserDto);
    return result.save();
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  login(loginDto: LoginDto): Promise<User> {
    return this.userModel.findOne(loginDto).exec();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
