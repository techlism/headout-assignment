FROM node:latest

ENV PORT=8080

WORKDIR /app

RUN npm install

COPY . .

RUN mkdir txtfiles

RUN node generateTxt.js

EXPOSE ${PORT}

CMD ["npm", "start", "${PORT}"]
