FROM node:6-alpine
# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "server.js"]
