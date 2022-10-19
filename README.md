# USAGE


```git clone ```

- Selectionner le mode dev ou prod en commentant/decommentant respectivement les parties entre #.DEV-MODE-- #.PROD-MODE-- du docker-compose et des Dockerfiles

- Installer les dependances (uniquement pour le mode dev, avec volumes)

    ```cd front ; npm install``` et```cd back ; npm install```


- Lancer les containers
    ```docker-compose up``` ou
    ```docker-compose up --build```
- Rendez vous sur ```localhost:4200```

- Autres commandes utiles : ```docker-compose down``` ; ```docker system prune -a -f --volumes``` (/!\ supprime les donnees de la db avec --volumes) ; ```docker exec -it [container] sh```

* * *
* * *
* * *

# Roadmap

### DOCKERIZE REACT

- cree un projet react

```npx create-react-app front```

- Pour le lancer : 
	```npm start``` (pour le dvpt) / ou ```npm run build``` (production)

- Dockerize react:
    creer un dockerfile et un dockerignore (voir les fichiers commentes du projet

- Changer le port 3000 par un autre port (pour que le front et le back run sur des ports differents)
    ```"start": "PORT=4200 react-scripts start"```, (pour remplacer dans le package.json)

- Tester : Build l'image: 

    ```docker build . -t react```

    Run l'image: 
    
    ```docker run -p 4200:4200 react``` 
---

### DOCKERIZE NEST 

- Creer un projet nestjs : 
 
 ```nest new back```

- Pour le lancer : 

    ```npm run start:dev``` (ou $> npm run start)
    et acceder a localhost:3000)
    
- Dockerize nest: 
    creer un dockerfile et un dockerignore (voir les fichiers commentes du projet)

- Tester : Build l'image:

    ```docker build . -t nest```
    
    Run l'image:

    ```docker run -p 3000:3000 nest``` 

---

### DOCKER-COMPOSE
- lier les differents service cf docker-compose.yml

---
### .env
- pour mettre les variables d'env pour des raisons de securite (ne pas mettre sur git clef API + mots de passe)

---
### POSTGRES WITH NESTJS
Voir la doc nest section database

- installer typeorm dans les modules nest

```npm install --save @nestjs/typeorm typeorm pg``` (dans back_dir)
- installer le package pour acceder aux variable d’env

 ```npm install --save @nestjs/config``` (dans back_dir)
- connecter typeorm a la db :

```
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
```

- tester:
docker-compose up ou docker-compose --build(pour build les images avant)

- test nest/pg
Creer une entites et essayer d'ajouter une entree dans la database avec post pour voir si la db fonctionne (requetes avec postman)

