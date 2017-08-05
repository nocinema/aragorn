FROM nodesource/node:6

ENV ARAGORN_PORT=3030

ADD package.json ./
RUN npm install --production
ADD . .

CMD node server.js

EXPOSE 3030
