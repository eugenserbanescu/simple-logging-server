FROM node:12-alpine

COPY index.js package.json  /app/
WORKDIR /app

EXPOSE 1337

CMD ["npm", "start"]
