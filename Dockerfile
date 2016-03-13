FROM node:latest

RUN npm install -g webpack webpack-dev-server karma-cli
COPY * /project/
WORKDIR /project

RUN npm install

CMD ["npm", "start"]
