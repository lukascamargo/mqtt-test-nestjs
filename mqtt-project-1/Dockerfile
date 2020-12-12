FROM node:alpine
RUN npm install -g @nestjs/cli
WORKDIR /usr/src/app
COPY . .

RUN npm run build
ENTRYPOINT nest start
