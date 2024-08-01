import { Injectable } from '@nestjs/common';

import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()
@Injectable()
export class UserService {
  async create(createUserDto: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data: createUserDto,
    })
    return user
  }

  async findAll() {
    const users = await prisma.user.findMany()
    return users
  }

  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
