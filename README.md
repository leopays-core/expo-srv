# Docker image [leopays/expo-srv]
> Docker org [leopays].

> Docker image [leopays/expo-srv].

> expo-cli version: 3.21.5.

**PORTS:**
  - 19000 - For Expo Client;
  - 19001 - Metro Bundler;
  - 19002 - ! Expo DevTools;
  - 19006 - WEB version.


## Build & Puscker Docker image
See in [docker/README.md](docker).


## First Run
```bash
mkdir -p leopays
cd leopays

git clone https://github.com/leopays-core/expo-srv.git ./expo-srv
cd expo-srv/docker

cat <<EOF > .env
NODE_ENV=production
DATA_DIR=/data
REPO=https://github.com/org/expo-app.git
BRANCH=master
USERNAME=user
PASSWORD=pswd
REACT_NATIVE_PACKAGER_HOSTNAME=127.0.0.1
GIT_PULL_INTERVAL=30
VERBOSE=false
WEB=true
HTTPS=true
SSL_CRT_FILE=cert.pem
SSL_KEY_FILE=privkey.pem
EOF

docker pull leopays/expo-srv:latest
docker-compose up -d
```


### Stop
```bash
cd leopays/expo-srv/docker
docker-compose down
```


[leopays]: https://hub.docker.com/u/leopays "leopays"
[leopays/expo-srv]: https://hub.docker.com/r/leopays/expo-srv "leopays/expo-srv"
