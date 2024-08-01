import { Prisma } from '@prisma/client';
export declare class UserService {
    create(createUserDto: Prisma.UserCreateInput): Promise<{
        id: string;
        email: string;
        password: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        email: string;
        password: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<string>;
    update(id: number, updateUserDto: Prisma.UserUpdateInput): Promise<string>;
    remove(id: number): Promise<string>;
}
