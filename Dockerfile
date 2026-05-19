FROM --platform=linux/arm64 node:22-slim

WORKDIR /usr/src/app

ADD . .

RUN npm i

RUN npm run build

CMD ["node", "dist/main.js"]
