FROM node:lts-alpine

WORKDIR /usr/src/app

#.PROD-- : 
##COPY package*.json ./
##RUN npm install
#.-----

COPY . .

#.DEV-MODE--
CMD ["npm", "run", "dev"]
#.-----

#.PROD-MODE--
##RUN npm  run build
##CMD ["npm", "run", "preview"]
#.-----