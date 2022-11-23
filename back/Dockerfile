FROM node:lts-alpine

WORKDIR /usr/src/app

#.PROD-- :
##COPY package*.json ./
##RUN npm install
#.-----

COPY . .

#.DEV-MODE--
#CMD ["npm", "run", "initdb", "&&", "npx", "nodemon", "index.js"]
CMD ["/bin/sh", "-c", "npm run initdb ; npx nodemon index.js"]

#.PROD-MODE--
