FROM node:20-alpine as builder
##cria uma pasta para o projeto
WORKDIR /usr/app
## copia o package.json e o package-lock.json
COPY package*.json ./
## instala as dependencias
RUN npm install
## copia o codigo fonte
COPY . .
## compila o codigo
RUN npm run build
RUN npm install --production

##segunda imagem
FROM node:20-alpine

WORKDIR /usr/app
## copia os diretorios da primeira imagem
COPY --from=builder /usr/app/dist .dist
COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/package.json ./package.json
## expõe a porta 3000
EXPOSE 3000
##executa o comando npm run start
CMD ["npm", "run",'start']