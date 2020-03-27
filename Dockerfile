FROM node:12-alpine
WORKDIR /app

COPY index.js  /app/

EXPOSE 1337:1337

RUN node index.js
