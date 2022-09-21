import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { UserEntity, UserI } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) 
        private userRepo: Repository<UserEntity>
    )
    {}
    add(user: UserI): Observable<UserI> {
        return from(this.userRepo.save(user));
    }

    findAll(): Observable<UserI[]>{
        return from(this.userRepo.find());
    }
}
