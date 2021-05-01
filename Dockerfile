FROM node:14.15-alpine3.12

USER node

WORKDIR /home/node/

COPY . .

RUN npm install

ENTRYPOINT [ ".docker/entrypoint.sh"]