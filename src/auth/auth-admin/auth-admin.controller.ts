import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AuthAdminService } from './auth-admin.service';
import { CreateAuthAdminDto } from './dto/create-auth-admin.dto';
import { UpdateAuthAdminDto } from './dto/update-auth-admin.dto';

@Controller('auth-admin')
export class AuthAdminController {
  constructor(private readonly AuthAdminService: AuthAdminService) {}


  @Post()
  findOneByEmail(@Body("email") email: string,@Body("password")password:string) {
    console.log("by emailid and password method called");
    const result=this.AuthAdminService.findOneByEmail(email,password);
    if(result)
      return result;
    return null;
  }

  @Post()
  create(@Body() createAuthAdminDto: CreateAuthAdminDto) {
    return this.AuthAdminService.create(createAuthAdminDto);
  }

  @Get()
  findAll() {
    return this.AuthAdminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.AuthAdminService.findOne(id);
  }


  @Put(':id')
  update(@Param('id') id: string, @Body() updateAuthAdminDto: UpdateAuthAdminDto) {
    return this.AuthAdminService.update(id, updateAuthAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.AuthAdminService.remove(id);
  }
}
