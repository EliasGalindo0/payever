import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('api')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post('users')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.service.create(createUserDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return await this.service.findOne(id);
  }

  @Get(':id/avatar')
  async find(@Param('avatar') avatar: string): Promise<User> {
    return await this.service.findOne(avatar);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User> {
    return await this.service.delete(id);
  }
}
