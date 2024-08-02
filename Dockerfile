FROM node:20.11.1-alpine3.19 AS builder

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . .

RUN npm run build

CMD ["npm","start", "--", "-p", "80"]
