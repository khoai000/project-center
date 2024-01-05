import { Injectable } from '@nestjs/common';
import { MikroORM, EntityRepository } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/mongodb';
import { UserEntity } from 'src/entities';
import { InjectEntityManager, InjectRepository } from '@mikro-orm/nestjs';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly userRepo: EntityRepository<UserEntity>) {}

  async createNewUser() {
    try {
      for (let i = 0; i < 10; i++) {
        const newUser = new UserEntity();
        newUser.code = `user${i + 1}`;
        newUser.fullName = `name ${i + 1}`;
        newUser.loginName = `name${i + 1}login`;
        newUser.workEmail = `email${i + 1}@gmail.com`;
        this.userRepo.persist(newUser);
      }
      await this.userRepo.flush();
    } catch (error) {
      return `error: ${error}`;
    }
  }
}
