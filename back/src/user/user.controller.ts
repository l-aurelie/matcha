import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserI } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userServ: UserService){}

    @Post()
    add(@Body() user: UserI): Observable<UserI>{
        return this.userServ.add(user);
    }

    @Get()
    findAll(): Observable<UserI[]> {
        return this.userServ.findAll();
    }

}
