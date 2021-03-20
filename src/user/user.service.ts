import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { createTransport } from 'nodemailer';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly configService: ConfigService
  ) { }

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

  async sendMail(email: string) {
    var transporter = await createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: this.configService.get<string>('EMAIL'),
        pass: this.configService.get<string>('EMAIL_PASS')
      }
    });

    const user: User = await this.userModel.findOne({ email: email }).exec();

    var mailOptions = {
      from: this.configService.get<string>('EMAIL'),
      to: email,
      subject: 'Verify Your account',
      html:
        `<div>
          Please verify your account <br>
          <a href="http://localhost:4200/">click here</a><br>
          User name: ${user.email} <br>
          Password: ${user.password} <br>
        </div>
        `
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  }
}
