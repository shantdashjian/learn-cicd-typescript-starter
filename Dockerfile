FROM --platform=linux/amd64 node:22.11.0-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install @libsql/linux-x64-gnu

RUN npm run build

CMD ["node", "dist/main.js"]
