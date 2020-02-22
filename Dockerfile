FROMnode:current-slim

MAINTAINER antti.heroja@gmail.com

WORKDIR/usr/src/app
COPY package.json.
RUN npm install

CMD["npm","start"]

COPY..