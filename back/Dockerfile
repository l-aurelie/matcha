#latest version  + alpine +leger a retirer si ne fonctionne pas
FROM node:lts-alpine

#le directory dans le container
WORKDIR /usr/src/app

#pour rebuild que si le package.json a change
COPY package*.json ./
RUN npm install

#copier toute l'app dans le workdir
COPY . .

#DEV
#lance mode dev (run le script dev de package.json)
CMD [ "npm", "run", "start:dev" ]

#PROD
#compile dans dist(run le script build de package.json)
#RUN npm run build
#lance le server en utilisant le main cree dans build (run le script prod de package.json)
#CMD ["npm", "run", "start:prod"]
#(OU CMD ["node", "dist/main"])

EXPOSE 3000