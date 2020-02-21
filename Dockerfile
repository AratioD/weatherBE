FROMnode:current-slim

WORKDIR/usr/src/app
COPYpackage.json.
RUNnpminstall

EXPOSE8080
CMD["npm","start"]

COPY..