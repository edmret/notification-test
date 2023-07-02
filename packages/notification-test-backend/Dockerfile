FROM node:14-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci --only=production

COPY . .

RUN npm run build
RUN npm run data-seed

CMD ["npm", "run", "start:prod"]