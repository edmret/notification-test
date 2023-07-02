FROM node:18.16-alpine3.18

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci
WORKDIR /app/packages/notification-test-backend
COPY package.json .
RUN npm i

WORKDIR /app

COPY . .

WORKDIR /app/packages/notification-test-backend
RUN npm run build

CMD ["npm", "run", "start:prod"]