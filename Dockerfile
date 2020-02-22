FROMnode:current-slim

MAINTAINER antti.heroja@gmail.com

WORKDIR/usr/src/app
COPYpackage.json.
RUNnpminstall

EXPOSE8080
CMD["npm","start"]

COPY..