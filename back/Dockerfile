FROM node:lts-alpine

WORKDIR /usr/src/app

#.PROD-- :
##COPY package*.json ./
##RUN npm install
#.-----

COPY . .

#.DEV-MODE--
#. On cree la db puis on lance l'API back
CMD ["/bin/sh", "-c", "npm run initdb ; npx nodemon index.js"]
#CMD [ "npx", "nodemon", "index.js"]

#.PROD-MODE--
