import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './../../services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createNewUser() {
    const newUser = await this.userService.createNewUser();

    return newUser;
  }
}
