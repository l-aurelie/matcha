import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    /* pour pouvoir injecter les entity dans les constructor */
    imports: [TypeOrmModule.forFeature([UserEntity])],
  
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {}
