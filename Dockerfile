FROM node:latest

ENV PORT=8080

WORKDIR /app

COPY . .

RUN mkdir txtfiles

RUN npm install

RUN node generateTxt.js

EXPOSE ${PORT}

CMD ["npm", "start", "${PORT}"]
