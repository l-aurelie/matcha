#.latest version  + alpine (+leger a retirer si ne fonctionne pas)
FROM node:lts-alpine

#.le directory dans le container
WORKDIR /usr/src/app

#.add `/app/node_modules/.bin` to $PATH what is that?
#.ENV PATH /app/node_modules/.bin:$PATH

#.PROD-- : installe les dependances, (ne marche que si pas de volume, sinon installer direct dans le volume)
#COPY package*.json ./
#RUN npm install
#.-----

#.copier toute l'app dans le workdir
COPY . .

#.DEV-MODE--
##CMD ["npm", "start"]

#.PROD-MODE--
#.Behind the scenes, it uses babel to transpile your code and webpack as the build tool to bundle up your app.
#RUN npm  run build
#RUN   npm install -g serve
##CMD ["serve", "-s", "build"]