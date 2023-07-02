FROM node:18.16-alpine3.18

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci
COPY . .

WORKDIR /app/packages/notification-test-backend
RUN npm i
RUN npm run build
CMD ["npm", "run", "start:prod"]