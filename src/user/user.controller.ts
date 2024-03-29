import { Controller, Get, Post, Body, Put, Param, Delete, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
import { ProjectService } from 'src/project/project.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly projectService: ProjectService,
  ) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.userService.create(createUserDto);
      const test = await this.userService.sendMail(createUserDto.email);
      console.log(user);
      return user;
    } catch (error) {
      return error;
    }
  }

  @Post('/login')
  async login(@Res() res: Response, @Body() loginDto: LoginDto) {
    const user = await this.userService.login(loginDto);
    if (user) {
      res.status(200).json(user);
    } else {
      res.sendStatus(401);
    }
  }

  @Get('/dev')
  async getAllDevs() {
    return await this.userService.getAllDevs();
  }

  @Get('/project-manager')
  async getAllManagers() {
    return await this.userService.getAllManagers();
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Get(':id/project')
  async getProjects(@Param('id') id: string) {
    return await this.projectService.findAllByUserId(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
