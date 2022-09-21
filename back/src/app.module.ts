import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

/* modules necessaires */
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    /* pour pouvoir utiliser process.env qui permet d'utiliser des variable d'env exterieures
    ce ne serait pas une bonne pratique de les mettre en dur */
    ConfigModule.forRoot({isGlobal: true}),
    
    /* TypeOrm integration */
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      /* enlever synchronise en production */
      synchronize: true
    }),
    
    UserModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
